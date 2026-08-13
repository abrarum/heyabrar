"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  ArrowDown,
  ArrowRight,
  Check,
  ExternalLink,
  ShieldCheck,
} from "lucide-react"
import {
  CAL_BOOKING_URL,
  KRAFTED_METRICS,
  SHOPIFY_FAQS,
} from "@/lib/shopifyLanding.mjs"
import styles from "./ShopifyLanding.module.css"

const capabilities = [
  ["Embedded admin apps", "Purpose-built interfaces that live inside Shopify admin and respect the merchant's existing workflow."],
  ["Multi-merchant app MVPs", "Tenant-aware products with OAuth, onboarding, billing, operations, and App Store distribution."],
  ["GraphQL integrations", "Webhooks, queues, synchronization, and operational automation across Shopify and business systems."],
  ["Functions and UI extensions", "Server-side commerce logic and native extension surfaces built within Shopify's platform constraints."],
  ["Theme app extensions", "App-connected storefront functionality that installs cleanly without fragile theme modifications."],
  ["AI commerce workflows", "Merchandising, product content, images, and catalog decisions with deterministic verification."],
  ["Modernization and maintenance", "Architecture repairs, performance work, API migrations, monitoring, and ongoing ownership."],
]

const engineeringStandards = [
  ["GraphQL-first", "Use Shopify's current API direction, request only what a workflow needs, and plan quarterly version upgrades."],
  ["Minimal access", "Request the smallest practical scopes and keep merchant data out of systems that do not need it."],
  ["Idempotent events", "Assume webhooks can arrive twice, late, or out of order. Make reprocessing safe by design."],
  ["Durable recovery", "Checkpoint long-running work, bound retries, respect rate limits, and reconcile uncertain writes."],
  ["Operational visibility", "Instrument jobs, integrations, billing, and failure paths so production behavior is explainable."],
]

const process = [
  ["01", "Diagnose", "Map the workflow, users, Shopify plan, commercial model, and the cost of leaving the problem unsolved."],
  ["02", "Define", "Specify app surfaces, data flows, infrastructure, security boundaries, and measurable success criteria."],
  ["03", "Build", "Ship in short cycles against a Shopify development store with working software visible early."],
  ["04", "Prove", "Test permissions, billing, webhooks, failure recovery, uninstall behavior, and the complete merchant journey."],
  ["05", "Operate", "Deploy, document, monitor, maintain, and keep the app aligned with quarterly Shopify API releases."],
]

const complianceContexts = [
  ["GDPR", "/compliance/gdpr.png", 620, 394],
  ["HIPAA", "/compliance/hipaa.png", 802, 980],
  ["TRUSTe", "/compliance/truste.png", 1062, 367],
  ["SOC 2", "/compliance/soc-2.webp", 551, 700],
]

const trustedOrganizations = [
  ["Accenture", "/logos/Accenture.png"],
  ["Sandoz", "/logos/sandoz.png"],
  ["ADAC", "/logos/adac.png"],
  ["Marc O'Polo", "/logos/marcopolo.webp"],
  ["Volkswagen", "/logos/vw.jpg"],
  ["BSI", "/logos/bsi.png"],
]

function BookingLink({ placement, className = "", children }) {
  const config = JSON.stringify({
    layout: "month_view",
    utm_source: "heyabrar",
    utm_medium: "website",
    utm_campaign: "shopify_custom_app_development",
    utm_content: placement,
  })

  return (
    <a
      className={className}
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      data-cal-namespace="shopify"
      data-cal-link="aifantry/20min"
      data-cal-config={config}
    >
      {children}
    </a>
  )
}

function ShopifyMark() {
  return (
    <Link className={styles.brand} href="/" aria-label="HeyAbrar home">
      HeyAbrar
    </Link>
  )
}

export default function ShopifyLanding({ testimonials }) {
  const [formState, setFormState] = useState("idle")

  async function submitFeasibility(event) {
    event.preventDefault()
    setFormState("loading")
    const form = new FormData(event.currentTarget)

    try {
      const response = await fetch("/api/abrar-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          firstName: form.get("name"),
          idea: form.get("idea"),
          users: form.get("users"),
          budget: form.get("budget"),
          features: form.get("systems"),
          subject: "Shopify custom app development - feasibility review",
        }),
      })

      if (!response.ok) throw new Error("Request failed")
      event.currentTarget.reset()
      setFormState("success")
    } catch {
      setFormState("error")
    }
  }

  return (
    <main className={styles.page} id="top">
      <nav className={styles.nav} aria-label="Shopify service navigation">
        <ShopifyMark />
        <div className={styles.navLinks}>
          <a href="#capabilities">Capabilities</a>
          <a href="#krafted">Krafted AI</a>
          <a href="#approach">Approach</a>
          <a href="#security">Security</a>
          <a href="#reviews">Reviews</a>
          <a href="#faq">FAQ</a>
        </div>
        <BookingLink placement="navigation" className={styles.navCta}>
          Book a call <ArrowRight size={15} aria-hidden="true" />
        </BookingLink>
      </nav>

      <header className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Principal Shopify app engineering</p>
          <h1>Custom Shopify apps, engineered from strategy to scale.</h1>
          <p className={styles.heroLead}>
            Work directly with Abrar on product strategy, architecture, embedded admin UX, GraphQL integrations, Shopify Functions, billing, AI workflows, infrastructure, launch, and long-term operation.
          </p>
          <p className={styles.heroProof}>Founding AI engineer behind Krafted AI - built from scratch to $18K MRR and 530 active users.</p>
          
          <div className={styles.heroActions}>
            <BookingLink placement="hero" className={styles.primaryButton}>
              Book a call <ArrowRight size={18} aria-hidden="true" />
            </BookingLink>
            <a className={styles.textLink} href="#krafted">
              See the Krafted AI build <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <figure className={styles.heroVisual}>
          <Image
            src="/hero-image.webp"
            width={1320}
            height={982}
            priority
            sizes="(max-width: 820px) 92vw, 44vw"
            alt="Shopify custom app product interface built by Abrar."
          />
        </figure>
      </header>

      <section className={styles.outcomeStrip} aria-label="Krafted AI outcomes">
        <div><strong>3 months</strong><span>strategy to public launch</span></div>
        <div><strong>$18K MRR</strong><span>reached within 3 months after launch</span></div>
        <div><strong>379</strong><span>paying Shopify stores</span></div>
        <p>Krafted AI internal analytics, first three months after launch. Published with approval.</p>
      </section>

      <section className={styles.trustedBy} aria-label="Organizations that trusted Abrar's engineering work">
        <p>Engineering work trusted by</p>
        <div>
          {trustedOrganizations.map(([name, src]) => (
            <Image key={name} src={src} width={120} height={48} alt={`${name} logo`} />
          ))}
        </div>
      </section>

      <section className={styles.decisionSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Make the right build decision</p>
          <h2>When custom development is worth it</h2>
          <p>A custom app should create operational leverage or product advantage. It should not be an expensive substitute for a maintained app that already does the job.</p>
        </div>
        <div className={styles.decisionGrid}>
          <article className={styles.decisionCustom}>
            <span>Build custom</span>
            <h3>When your workflow is part of the advantage</h3>
            <ul>
              <li>Distinctive merchant or team workflows</li>
              <li>ERP, CRM, PIM, 3PL, or proprietary integrations</li>
              <li>Operational automation and custom Shopify logic</li>
              <li>A multi-merchant product you intend to sell</li>
              <li>AI workflows that require verified, deterministic checks</li>
            </ul>
          </article>
          <article className={styles.decisionExisting}>
            <span>Install existing</span>
            <h3>When the problem is already solved well</h3>
            <p>Choose a reputable App Store product when it meets the requirement cleanly, has a sustainable price, offers the integrations you need, and does not compromise ownership of critical data or workflow.</p>
            <p className={styles.honesty}>A useful strategy call can end with “use this existing app.” That is still a good engineering outcome.</p>
          </article>
        </div>
      </section>

      <section className={styles.capabilities} id="capabilities">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Capabilities</p>
          <h2>Shopify systems built end to end</h2>
          <p>Products and integrations designed around Shopify&apos;s native surfaces, operational constraints, and merchant experience.</p>
        </div>
        <div className={styles.capabilityGrid}>
          {capabilities.map(([title, description], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.krafted} id="krafted">
        <div className={styles.kraftedHeader}>
          <div>
            <p className={styles.eyebrow}>Flagship Shopify case study</p>
            <h2>Krafted AI went from product strategy to $18K MRR.</h2>
          </div>
          <p>Founding AI Engineer responsible for product strategy, architecture, end-to-end product development, and deployment.</p>
        </div>

        <div className={styles.metricGrid}>
          {KRAFTED_METRICS.map((metric) => (
            <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>
          ))}
        </div>
        <p className={styles.metricSource}>Commercial and usage metrics cover the first three months after public launch and come from Krafted AI internal analytics, published with approval. Installs are cumulative historical installs.</p>

        <div className={styles.kraftedStory}>
          <figure className={styles.largeShot}>
            <Image src="/work-media/krafted/02-page-builder.jpg" width={1800} height={1095} alt="Krafted AI product page builder inside Shopify admin." />
            <figcaption>Krafted AI&apos;s embedded builder coordinates AI decisions with billing, accessibility, and Shopify publishing checks.</figcaption>
          </figure>
          <div className={styles.storyPoints}>
            <article><span>01</span><h3>Bounded AI orchestration</h3><p>Canonical product data and explicit workflow states keep model providers replaceable and failures recoverable.</p></article>
            <article><span>02</span><h3>Deterministic validation</h3><p>Data shape, asset availability, and publishing requirements are checked in code before Shopify is changed.</p></article>
            <article><span>03</span><h3>Billing-aware publishing</h3><p>Completed work survives plan limits and remains ready when the merchant is able to publish.</p></article>
            <article><span>04</span><h3>Verified Shopify writes</h3><p>Critical theme changes are read back from Shopify before the pipeline declares success.</p></article>
          </div>
        </div>

        <div className={styles.gallery}>
          <figure><Image src="/work-media/krafted/06-admin-dashboard.jpg" width={1152} height={1800} alt="Krafted AI Shopify app administration dashboard." /><figcaption>Merchant operations dashboard</figcaption></figure>
          <figure><Image src="/work-media/krafted/09-product-photos.jpg" width={1578} height={1800} alt="Krafted AI product photography workflow for Shopify products." /><figcaption>AI product image workflow</figcaption></figure>
          <figure><Image src="/work-media/krafted/10-bundle-offers.jpg" width={1800} height={981} alt="Krafted AI bundle offer interface connected to Shopify." /><figcaption>App-connected merchandising tools</figcaption></figure>
        </div>

        <div className={styles.kraftedFooter}>
          <p><strong>5.0 on the Shopify App Store</strong> from 5 public reviews, checked August 4, 2026.</p>
          <div>
            <a href="https://apps.shopify.com/krafted-ai" target="_blank" rel="noreferrer">View App Store listing <ExternalLink size={15} aria-hidden="true" /></a>
            <Link href="/work/krafted-ai-shopify-app">Read the full case study <ArrowRight size={15} aria-hidden="true" /></Link>
            <BookingLink placement="krafted" className={styles.goldButton}>Discuss your Shopify app</BookingLink>
          </div>
        </div>
      </section>

      <section className={styles.standards} id="approach">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Engineering standards</p>
          <h2>Reliability is an architecture decision.</h2>
          <p>The hard part of a Shopify app begins where a successful API response stops. These are the decisions that keep merchant operations dependable.</p>
        </div>
        <div className={styles.standardList}>
          {engineeringStandards.map(([title, description], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{description}</p></article>
          ))}
        </div>
      </section>

      <section className={styles.security} id="security">
        <div className={styles.securityHeading}>
          <ShieldCheck size={34} aria-hidden="true" />
          <p className={styles.eyebrow}>Security and privacy</p>
          <h2>Privacy and security engineered into the architecture.</h2>
          <p>Security practices are informed by ISO/IEC 27001 controls. Systems are designed to support Shopify&apos;s privacy requirements and applicable GDPR obligations.</p>
        </div>
        <ul className={styles.securityControls}>
          {["Data minimization", "HMAC verification", "Required privacy webhooks", "Encryption in transit and at rest", "Managed secrets", "Least-privilege access", "Documented deletion workflows", "Audit logging"].map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}
        </ul>
        <div className={styles.complianceBlock}>
          <p className={styles.complianceTitle}>Common compliance contexts</p>
          <div className={styles.complianceBadges}>
            {complianceContexts.map(([name, src, width, height]) => (
              <div key={name} className={styles.complianceBadge}>
                <Image src={src} width={width} height={height} alt={`${name} reference mark`} />
                <span>{name}</span>
              </div>
            ))}
          </div>
          <p className={styles.securityNote}>These marks identify common compliance contexts, not certifications held by Abrar. The applicable controls depend on the data, jurisdictions, merchant policies, and operating processes of each project.</p>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Delivery process</p><h2>From unclear workflow to an app your team can operate.</h2></div>
        <ol className={styles.processList}>{process.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section className={styles.reviews} id="reviews">
        <div className={styles.reviewsHeader}>
          <div><p className={styles.eyebrow}>Client evidence</p><h2>Trusted with products where the details matter.</h2></div>
          <p><strong>100+ projects across 10+ countries</strong><br />Overall engineering experience across commerce, AI, enterprise, and regulated systems.</p>
        </div>
        <div className={styles.testimonialTrack} tabIndex="0" aria-label="Client testimonials">
          {testimonials.map((testimonial) => (
            <figure className={styles.testimonial} key={testimonial.id}>
              <div aria-label={`${testimonial.stars} out of 5 stars`}>{"★".repeat(testimonial.stars)}</div>
              <blockquote>“{testimonial.abrarQuote}”</blockquote>
              <figcaption><strong>{testimonial.clientName}</strong><span>{testimonial.company} · {testimonial.projectLabel}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.faq} id="faq">
        <div className={styles.sectionIntro}><p className={styles.eyebrow}>Before you commission an app</p><h2>Shopify app development questions that change the build decision</h2><p>These answers address the choices that materially affect scope, platform risk, commercial viability, ownership, and long-term operations.</p></div>
        <div className={styles.faqGrid}>
          {SHOPIFY_FAQS.map((faq, index) => (
            <article id={faq.id} key={faq.id}>
              <a className={styles.faqAnchor} href={`#${faq.id}`} aria-label={`#${String(index + 1).padStart(2, "0")}: Link to ${faq.question}`}>#{String(index + 1).padStart(2, "0")}</a>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <div className={styles.contactIntro}>
          <p className={styles.eyebrow}>Start with the problem</p>
          <h2>Have a Shopify app idea or workflow that no existing app solves?</h2>
          <p>Bring the workflow, constraint, or product idea. The first step is deciding whether custom development is justified and what the smallest credible path looks like.</p>
          <BookingLink placement="final" className={styles.goldButton}>Book a 20-minute strategy call <ArrowRight size={17} aria-hidden="true" /></BookingLink>
          <small>Prefer a full booking page? <a href={CAL_BOOKING_URL}>Open the direct Cal.com link.</a></small>
        </div>
        <form className={styles.form} onSubmit={submitFeasibility}>
          <div><span>Written brief</span><h3>Tell Abrar what needs to work.</h3></div>
          <div className={styles.formRow}>
            <label>Your name<input name="name" autoComplete="name" required /></label>
            <label>Work email<input name="email" type="email" autoComplete="email" required /></label>
          </div>
          <label>What should the app or integration solve?<textarea name="idea" rows="4" required /></label>
          <label>Systems to connect <span className={styles.optional}>(optional)</span><input name="systems" placeholder="ERP, CRM, PIM, 3PL, AI providers..." /></label>
          <button type="submit" disabled={formState === "loading"}>{formState === "loading" ? "Sending..." : "Request a feasibility review"}<ArrowRight size={17} aria-hidden="true" /></button>
          <p className={styles.formStatus} aria-live="polite">
            {formState === "success" && "Thanks. Your Shopify requirements are on their way. Abrar will reply shortly."}
            {formState === "error" && "The form could not be sent. Please email hello@heyabrar.com or use the booking link."}
          </p>
        </form>
      </section>

      <footer className={styles.footer}>
        <ShopifyMark />
        <div><Link href="/work">Selected work</Link><a href="mailto:hello@heyabrar.com">hello@heyabrar.com</a><a href="#top">Back to top</a></div>
      </footer>
    </main>
  )
}
