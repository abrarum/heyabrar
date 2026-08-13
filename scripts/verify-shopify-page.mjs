import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { KRAFTED_METRICS, SHOPIFY_FAQS } from "../src/lib/shopifyLanding.mjs"

const [html, robots, sitemap] = await Promise.all([
  readFile(".next/server/app/shopify-custom-app-development.html", "utf8"),
  readFile(".next/server/app/robots.txt.body", "utf8"),
  readFile(".next/server/app/sitemap.xml.body", "utf8"),
])

const requiredHtml = [
  "Shopify Custom App Development | Abrar",
  "Custom Shopify apps, engineered from strategy to scale.",
  "https://heyabrar.com/shopify-custom-app-development",
  "https://cal.com/aifantry/20min",
  "data-cal-link",
  "shopify_custom_app_development",
  "bookerViewed",
  "bookerReady",
  "linkFailed",
  "bookingSuccessfulV2",
  "FAQPage",
  "BreadcrumbList",
  "Shopify Custom App Development",
  ...SHOPIFY_FAQS.flatMap((faq) => [faq.id, faq.question, faq.answer]),
  ...KRAFTED_METRICS.flatMap((metric) => [metric.value, metric.label]),
]

for (const value of requiredHtml) {
  assert.ok(html.includes(value), `Expected generated page HTML to include: ${value}`)
}

for (const crawler of [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "PerplexityBot",
  "Claude-SearchBot",
  "Claude-User",
]) {
  assert.match(
    robots,
    new RegExp(`User-Agent: ${crawler}\\nAllow: /`),
    `${crawler} must be allowed to crawl the site`,
  )
}

assert.ok(
  sitemap.includes(
    "<loc>https://heyabrar.com/shopify-custom-app-development</loc>",
  ),
  "The Shopify service route must be present in the sitemap",
)

console.log(
  `Verified Shopify landing page HTML, ${SHOPIFY_FAQS.length} FAQs, crawler access, and sitemap discovery.`,
)
