export const SHOPIFY_PAGE_URL =
  "https://heyabrar.com/shopify-custom-app-development"

export const CAL_BOOKING_URL = "https://cal.com/aifantry/20min"

export const KRAFTED_METRICS = [
  { value: "$18K", label: "monthly recurring revenue" },
  { value: "$216K", label: "annualized run rate" },
  { value: "379", label: "paying Shopify stores" },
  { value: "530", label: "active users" },
  { value: "4,449", label: "cumulative historical installs" },
  { value: "457", label: "trial conversions" },
]

export const SHOPIFY_FAQS = [
  {
    id: "custom-app-business-case",
    question: "How do I know whether a custom Shopify app is worth the investment?",
    answer:
      "Start with the economic case, not the feature list. A custom app is usually justified when it removes substantial recurring work, replaces several fragile tools, enables a revenue-producing product, protects a distinctive workflow, or gives the business control over critical data and integrations. Discovery should compare that value with the full cost of building and operating the app.",
  },
  {
    id: "shopify-app-distribution-model",
    question:
      "Should the app use custom distribution or be published in the Shopify App Store?",
    answer:
      "Custom distribution fits an app built for one organization or a defined group of stores. App Store distribution fits a product intended for unrelated Shopify merchants and introduces additional requirements around onboarding, billing, support, listing quality, and Shopify review. The commercial model and intended audience should determine the distribution path before architecture begins.",
  },
  {
    id: "validate-shopify-app-idea",
    question: "How do you validate a Shopify app idea before committing to a full build?",
    answer:
      "Validation covers the merchant problem, current workaround, reachable market, willingness to pay, required Shopify surfaces, and platform constraints. The output is a narrow first release with explicit success criteria, technical risks, and a path to billing. Prototypes or development-store experiments are used when a platform capability needs proof before the main investment.",
  },
  {
    id: "shopify-app-store-review",
    question: "Can you prepare the app for Shopify App Store review and launch?",
    answer:
      "Yes. App Store preparation covers installation, authentication, billing, onboarding, required privacy webhooks, permission scopes, error states, uninstall behavior, listing requirements, and review feedback. Approval remains Shopify's decision, but the product and submission can be engineered against the published requirements from the start.",
  },
  {
    id: "multi-tenant-shopify-architecture",
    question: "How do you design a Shopify app to scale across multiple merchants?",
    answer:
      "A multi-merchant app needs tenant isolation, secure OAuth installation, plan-aware billing, reliable onboarding, per-store configuration, rate-limit management, and observable background jobs. Infrastructure should support growth without allowing one merchant's traffic, data, or failure state to affect another merchant.",
  },
  {
    id: "shopify-business-system-integrations",
    question:
      "Can you integrate Shopify with our ERP, CRM, PIM, 3PL, or proprietary software?",
    answer:
      "Yes. Shopify can connect to external systems through APIs, webhooks, queues, and scheduled synchronization. The implementation includes retries, idempotency, data reconciliation, monitoring, and failure recovery so each system remains consistent when services slow down or events arrive more than once.",
  },
  {
    id: "ai-features-for-shopify",
    question: "How do you make AI features reliable enough for Shopify operations?",
    answer:
      "Models should handle subjective tasks such as classification, copy, imagery, or recommendations, while deterministic code verifies permissions, billing state, accessibility, data shape, and successful Shopify writes. Durable checkpoints, review states, and clear failure recovery prevent an uncertain model response from becoming an untraceable commerce action.",
  },
  {
    id: "shopify-plus-development",
    question: "Do you work with Shopify Plus?",
    answer:
      "Yes. The architecture can cover Shopify Plus and enterprise workflows. The checkout, account, B2B, and other platform capabilities available to an app depend on the merchant's Shopify plan and Shopify's approved extension surfaces, so those constraints are confirmed during discovery.",
  },
  {
    id: "improve-existing-shopify-app",
    question: "Can you rescue an unreliable app or migrate it to Shopify's current APIs?",
    answer:
      "Yes. The audit covers architecture, GraphQL and REST usage, API versions, webhook behavior, permissions, billing, performance, infrastructure, and production failure patterns. The resulting plan can prioritize urgent reliability fixes, staged API migration, or a broader modernization while keeping the current app operational.",
  },
  {
    id: "shopify-app-billing",
    question: "How should subscription billing, trials, and plan limits work in a Shopify app?",
    answer:
      "Billing should be designed with the product model, not added at the end. The app needs clear plan entitlements, trial transitions, upgrade and downgrade behavior, cancellation handling, usage limits, and recovery when payment state changes during a workflow. Shopify billing records and the app's internal entitlements must remain reconciled.",
  },
  {
    id: "shopify-app-timeline",
    question: "How long does custom Shopify app development take?",
    answer:
      "Timing depends on app surfaces, integrations, billing, data migration, security, and distribution requirements. As a production reference, Krafted AI went from product strategy and architecture to a public Shopify launch in three months. A focused internal integration can be shorter, while a broader multi-merchant platform may take longer.",
  },
  {
    id: "shopify-app-cost",
    question: "How much does a custom Shopify app cost?",
    answer:
      "Cost depends on whether the app serves one company or many merchants, which Shopify surfaces it uses, the number of external integrations, data and infrastructure requirements, subscription billing, and ongoing maintenance. A 20-minute strategy call is the fastest way to get a scoped recommendation rather than an unreliable generic estimate.",
  },
  {
    id: "source-code-ownership",
    question: "Who owns the source code and infrastructure?",
    answer:
      "For client work, ownership and handover are defined before development starts. The usual model gives the client repository access, infrastructure visibility, deployment documentation, and the materials needed for another qualified team to operate the app without being locked into one developer.",
  },
  {
    id: "shopify-app-maintenance",
    question: "What does reliable long-term ownership of a Shopify app include?",
    answer:
      "Long-term ownership includes quarterly API-version upgrades, deprecation review, production monitoring, dependency and security updates, infrastructure care, merchant support, and product iteration. Webhook delivery, billing, authentication, queues, and external integrations need operational visibility so failures are detected before merchants report them.",
  },
  {
    id: "shopify-security-privacy-gdpr",
    question: "How do you handle security, privacy, and GDPR requirements?",
    answer:
      "Privacy-by-design controls include data minimization, HMAC verification, required privacy webhooks, encryption, least-privilege access, secrets management, deletion workflows, and audit logging. The architecture is designed to support Shopify's privacy requirements and applicable GDPR obligations, while legal compliance remains specific to the merchant, data, jurisdictions, and operating processes involved.",
  },
]

export const SHOPIFY_TESTIMONIAL_ORDER = [
  "krafted",
  "marc-o-polo",
  "accenture",
  "judgeai",
  "ai-guest-assistant",
  "mintfit",
  "sandoz",
  "adac",
]
