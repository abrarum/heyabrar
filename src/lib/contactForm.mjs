const CONTACT_ENDPOINT = "/api/abrar-contact"

export const CONTACT_FORM_TYPES = Object.freeze({
  GENERAL: "general",
  FEASIBILITY: "feasibility",
  SHOPIFY: "shopify",
})

export async function submitContactForm(formType, fields) {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...fields }),
  })

  if (response.ok) return response.json()

  const result = await response.json().catch(() => null)
  throw new Error(result?.error || "The contact form could not be sent")
}
