import "server-only"

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

const DEFAULT_REGION = "us-east-1"
const DEFAULT_FROM_EMAIL = "info@heyabrar.com"
const DEFAULT_TO_EMAIL = "info@heyabrar.com"

const FORM_SUBJECTS = Object.freeze({
  general: "Abrar portfolio lead message",
  feasibility: "Abrar portfolio - Free Feasibility Review",
  shopify: "Shopify custom app development - feasibility review",
})

const LEGACY_SUBJECT_TYPES = Object.freeze(
  Object.fromEntries(
    Object.entries(FORM_SUBJECTS).map(([formType, subject]) => [subject, formType]),
  ),
)

const FIELD_LIMITS = Object.freeze({
  email: 254,
  firstName: 100,
  lastName: 100,
  idea: 5000,
  users: 500,
  budget: 200,
  features: 5000,
  message: 5000,
})

export class ContactSubmissionError extends Error {
  constructor(message) {
    super(message)
    this.name = "ContactSubmissionError"
  }
}

function requiredEnvironmentValue(environment, name) {
  const value = environment[name]?.trim()
  if (!value) throw new Error(`Missing required environment variable: ${name}`)
  return value
}

function normalizeField(value, name) {
  if (value == null) return ""
  if (typeof value !== "string") {
    throw new ContactSubmissionError(`${name} must be text`)
  }

  const normalized = value.trim()
  if (normalized.length > FIELD_LIMITS[name]) {
    throw new ContactSubmissionError(`${name} is too long`)
  }

  return normalized
}

function resolveFormType({ formType, subject }) {
  const resolvedType = formType || LEGACY_SUBJECT_TYPES[subject] || "general"
  if (!FORM_SUBJECTS[resolvedType]) {
    throw new ContactSubmissionError("Unknown contact form type")
  }
  return resolvedType
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

export function createContactEmail(submission, environment = process.env) {
  const formType = resolveFormType(submission)
  const fields = Object.fromEntries(
    Object.keys(FIELD_LIMITS).map((name) => [
      name,
      normalizeField(submission[name], name),
    ]),
  )

  if (!fields.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    throw new ContactSubmissionError("A valid email address is required")
  }

  const name = [fields.firstName, fields.lastName].filter(Boolean).join(" ")
  const sections = [
    ["Form", formType],
    ...(name ? [["Name", name]] : []),
    ["Email", fields.email],
    ...(fields.idea ? [["Idea", fields.idea]] : []),
    ...(fields.users ? [["Target users", fields.users]] : []),
    ...(fields.budget ? [["Budget", fields.budget]] : []),
    ...(fields.features ? [["Must-have features", fields.features]] : []),
    ...(fields.message ? [["Message", fields.message]] : []),
  ]

  const subject = FORM_SUBJECTS[formType]
  const text = sections.map(([label, value]) => `${label}: ${value}`).join("\n\n")
  const html = sections
    .map(
      ([label, value]) =>
        `<p style="white-space:pre-wrap;margin:0 0 12px"><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`,
    )
    .join("")

  return {
    Destination: {
      ToAddresses: [environment.CONTACT_EMAIL_TO || DEFAULT_TO_EMAIL],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `<div style="font-family:Arial,sans-serif;line-height:1.7;max-width:600px"><h2 style="color:#660033;margin-bottom:24px">${escapeHtml(subject)}</h2>${html}</div>`,
        },
        Text: { Charset: "UTF-8", Data: text },
      },
      Subject: { Charset: "UTF-8", Data: subject },
    },
    ReplyToAddresses: [fields.email],
    Source: environment.SES_FROM_EMAIL || DEFAULT_FROM_EMAIL,
  }
}

function createSesClient(environment) {
  const accessKeyId = requiredEnvironmentValue(environment, "AWS_ACCESS_KEY_ID")
  const secretAccessKey = requiredEnvironmentValue(
    environment,
    "AWS_SECRET_ACCESS_KEY",
  )
  const sessionToken = environment.AWS_SESSION_TOKEN?.trim()
  const endpoint = environment.AWS_ENDPOINT_URL_SES?.trim()

  return new SESClient({
    region: environment.AWS_REGION || DEFAULT_REGION,
    credentials: {
      accessKeyId,
      secretAccessKey,
      ...(sessionToken ? { sessionToken } : {}),
    },
    ...(endpoint ? { endpoint } : {}),
  })
}

export async function sendContactEmail(
  submission,
  { environment = process.env, client } = {},
) {
  const sesClient = client || createSesClient(environment)
  const command = new SendEmailCommand(
    createContactEmail(submission, environment),
  )

  return sesClient.send(command)
}
