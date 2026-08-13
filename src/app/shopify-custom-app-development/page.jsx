import { TESTIMONIALS } from "@/lib/testimonials"
import {
  SHOPIFY_FAQS,
  SHOPIFY_PAGE_URL,
  SHOPIFY_TESTIMONIAL_ORDER,
} from "@/lib/shopifyLanding.mjs"
import ShopifyLanding from "./ShopifyLanding"
import { CAL_EMBED_BOOTSTRAP } from "@/lib/calEmbedBootstrap.mjs"

const title = "Shopify Custom App Development | Abrar"
const description =
  "Principal-level Shopify custom app development by Abrar. Embedded apps, integrations, AI workflows, launch, and long-term ownership, proven at $18K MRR."
const socialImage = "/work-media/krafted/02-page-builder.jpg"

export const metadata = {
  title,
  description,
  alternates: { canonical: SHOPIFY_PAGE_URL },
  openGraph: {
    title,
    description,
    url: SHOPIFY_PAGE_URL,
    siteName: "HeyAbrar",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1800,
        height: 1095,
        alt: "Krafted AI Shopify app product page builder created by Abrar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage],
  },
}

export default function ShopifyCustomAppDevelopmentPage() {
  const testimonials = SHOPIFY_TESTIMONIAL_ORDER.map((id) =>
    TESTIMONIALS.find((testimonial) => testimonial.id === id),
  ).filter(Boolean)

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://heyabrar.com/#abrar",
        name: "Abrar",
        url: "https://heyabrar.com/",
        jobTitle: "Founding AI Engineer",
        knowsAbout: [
          "Shopify custom app development",
          "Shopify integrations",
          "Shopify Functions",
          "AI product engineering",
          "GraphQL",
        ],
      },
      {
        "@type": "Service",
        "@id": `${SHOPIFY_PAGE_URL}#service`,
        name: "Shopify Custom App Development",
        serviceType: "Shopify custom app development and consulting",
        provider: { "@id": "https://heyabrar.com/#abrar" },
        url: SHOPIFY_PAGE_URL,
        description,
        areaServed: "Worldwide",
        audience: {
          "@type": "Audience",
          audienceType:
            "Shopify app founders, growing merchants, and mid-sized companies",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SHOPIFY_PAGE_URL}#webpage`,
        url: SHOPIFY_PAGE_URL,
        name: title,
        description,
        datePublished: "2026-08-04",
        dateModified: "2026-08-13",
        about: { "@id": `${SHOPIFY_PAGE_URL}#service` },
        author: { "@id": "https://heyabrar.com/#abrar" },
        breadcrumb: { "@id": `${SHOPIFY_PAGE_URL}#breadcrumb` },
        mainEntity: { "@id": `${SHOPIFY_PAGE_URL}#faq` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SHOPIFY_PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://heyabrar.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Shopify Custom App Development",
            item: SHOPIFY_PAGE_URL,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SHOPIFY_PAGE_URL}#faq`,
        mainEntity: SHOPIFY_FAQS.map((faq) => ({
          "@type": "Question",
          "@id": `${SHOPIFY_PAGE_URL}#${faq.id}`,
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script dangerouslySetInnerHTML={{ __html: CAL_EMBED_BOOTSTRAP }} />
      <ShopifyLanding testimonials={testimonials} />
    </>
  )
}
