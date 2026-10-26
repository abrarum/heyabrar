import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import test from "node:test"

test("every contact form uses the shared contact client", async () => {
  const [homepage, shopify, sharedClient] = await Promise.all([
    readFile("src/app/AbrarOrganic.jsx", "utf8"),
    readFile(
      "src/app/shopify-custom-app-development/ShopifyLanding.jsx",
      "utf8",
    ),
    readFile("src/lib/contactForm.mjs", "utf8"),
  ])

  assert.equal(
    homepage.match(/submitContactForm\(/g)?.length,
    2,
    "Both homepage forms must use the shared contact client",
  )
  assert.equal(
    shopify.match(/submitContactForm\(/g)?.length,
    1,
    "The Shopify form must use the shared contact client",
  )
  assert.match(sharedClient, /fetch\(CONTACT_ENDPOINT/)
  assert.doesNotMatch(homepage, /fetch\("\/api\/abrar-contact"/)
  assert.doesNotMatch(shopify, /fetch\("\/api\/abrar-contact"/)
})

test("the SES sender is explicitly server-only", async () => {
  const serverSender = await readFile("src/lib/contactEmail.mjs", "utf8")

  assert.match(serverSender, /^import ["']server-only["']/)
})

test("the Shopify form keeps its DOM reference across the request", async () => {
  const shopify = await readFile(
    "src/app/shopify-custom-app-development/ShopifyLanding.jsx",
    "utf8",
  )

  const captureIndex = shopify.indexOf("const formElement = event.currentTarget")
  const submitIndex = shopify.indexOf("await submitContactForm")

  assert.ok(captureIndex >= 0)
  assert.ok(captureIndex < submitIndex)
  assert.match(shopify, /formElement\.reset\(\)/)
})
