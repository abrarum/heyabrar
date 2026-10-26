import assert from "node:assert/strict"
import test from "node:test"
import {
  ContactSubmissionError,
  createContactEmail,
  sendContactEmail,
} from "../src/lib/contactEmail.mjs"

const environment = {
  AWS_REGION: "us-east-1",
  AWS_ACCESS_KEY_ID: "test-access-key",
  AWS_SECRET_ACCESS_KEY: "test-secret-key",
  SES_FROM_EMAIL: "info@heyabrar.com",
  CONTACT_EMAIL_TO: "info@heyabrar.com",
}

test("builds a trusted SES message for each contact form", () => {
  const cases = [
    ["general", "Abrar portfolio lead message"],
    ["feasibility", "Abrar portfolio - Free Feasibility Review"],
    ["shopify", "Shopify custom app development - feasibility review"],
  ]

  for (const [formType, expectedSubject] of cases) {
    const message = createContactEmail(
      {
        formType,
        email: "visitor@example.com",
        firstName: "Test",
        message: "A test message",
      },
      environment,
    )

    assert.deepEqual(message.Destination.ToAddresses, ["info@heyabrar.com"])
    assert.equal(message.Source, "info@heyabrar.com")
    assert.deepEqual(message.ReplyToAddresses, ["visitor@example.com"])
    assert.equal(message.Message.Subject.Data, expectedSubject)
  }
})

test("escapes untrusted form content in the HTML message", () => {
  const message = createContactEmail(
    {
      formType: "general",
      email: "visitor@example.com",
      message: "<script>alert('test')</script>",
    },
    environment,
  )

  assert.doesNotMatch(message.Message.Body.Html.Data, /<script>/)
  assert.match(message.Message.Body.Html.Data, /&lt;script&gt;/)
})

test("rejects invalid contact submissions", () => {
  assert.throws(
    () => createContactEmail({ formType: "unknown", email: "not-an-email" }),
    ContactSubmissionError,
  )
})

test("sends the centralized command through an injected SES client", async () => {
  const commands = []
  const client = {
    async send(command) {
      commands.push(command)
      return { MessageId: "test-message-id" }
    },
  }

  const result = await sendContactEmail(
    {
      formType: "general",
      email: "visitor@example.com",
      message: "Test",
    },
    { client, environment },
  )

  assert.equal(result.MessageId, "test-message-id")
  assert.equal(commands.length, 1)
  assert.equal(commands[0].input.Destination.ToAddresses[0], "info@heyabrar.com")
})
