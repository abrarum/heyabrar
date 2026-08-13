const WORK_ITEMS = [
  {
    slug: "krafted-ai-shopify-app",
    title: "One product link in. A Shopify storefront out.",
    shortTitle: "Krafted AI",
    client: "Krafted AI",
    industry: "AI-powered commerce",
    role: "Founding AI Engineer",
    platform: {
      name: "Shopify",
      href: "/shopify-custom-app-development",
    },
    summary:
      "I joined Krafted AI as the founding AI engineer and built the product from scratch - from product strategy and system architecture to the Shopify app, AI workflows, infrastructure, and production deployment. It grew from zero to $18,000 MRR with 530 active users.",
    website: {
      name: "Shopify App Store",
      href: "https://apps.shopify.com/krafted-ai",
    },
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/19116776369d13bbaab00a71d90a703c9f2ebb79-2222x1240.png",
    featuredImageAlt:
      "Krafted AI embedded Shopify application showing its product page generation workflow.",
    highlights: [
      { value: "From zero", label: "greenfield product build" },
      { value: "$18K", label: "monthly recurring revenue" },
      { value: "530", label: "active users" },
    ],
    highlightsNote:
      "Commercial and usage figures are from Krafted AI's internal product analytics for the approved reporting period.",
    contextLabel: "Product premise",
    contextTitle: "Make launching a store feel like one action",
    context: [
      "Krafted AI turns a product link into a branded, publish-ready Shopify storefront. Behind that single action is a workflow that extracts inconsistent marketplace data, understands the product, generates copy and images, composes the page, applies plan entitlements, and publishes into Shopify.",
      "The hard problem was not making a model produce something plausible. It was making the complete system predictable enough for merchants to trust with a live store.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Built from scratch, end to end",
    contribution: [
      "I was hired as the founding AI engineer and owned product strategy, architecture, implementation, and deployment. This was a greenfield build, not an existing application I was brought in to adjust.",
      "I shaped the launch scope, designed the domain model and generation workflow, built the embedded Shopify experience and backend services, integrated the AI and commerce systems, and took the product into production.",
    ],
    decisionEyebrow: "Architecture",
    decisionTitle: "Where model output stops and engineering starts",
    decisionDescription:
      "The system uses AI where judgment adds value and deterministic software wherever the product must make a verifiable promise.",
    decisions: [
      {
        constraint:
          "One merchant action had to coordinate marketplace data, AI providers, media generation, billing, and Shopify APIs.",
        decision:
          "Put a canonical product model between source data and generation, then isolate orchestration from capability-specific services.",
        impact:
          "External sources and model providers can change without pushing their data shapes and failure modes through the entire application.",
      },
      {
        constraint:
          "Model output can sound convincing while still being incomplete, malformed, or wrong for the merchant's store.",
        decision:
          "Use models for product classification, copy, and creative choices, but keep schemas, entitlements, asset checks, and commerce state in deterministic code.",
        impact:
          "AI remains replaceable and bounded, and every result is validated before it can affect a live Shopify store.",
      },
      {
        constraint:
          "Shopify writes and third-party calls can partially succeed or become consistent after the initial response.",
        decision:
          "Use idempotent writes, explicit failure states, and read-back checks for every critical publishing operation.",
        impact:
          "The application reports success only after the intended store state is verified, and a retry cannot duplicate completed work.",
      },
    ],
    outcomeTitle: "From greenfield build to a production business",
    outcomes: [
      "Built and launched the production Shopify app from scratch in three months.",
      "Scaled the product from zero to $18,000 MRR with 530 active users.",
      "Delivered the full path from a product link through data extraction, AI-assisted positioning, copy and image generation, page composition, and Shopify publishing.",
      "Established clean boundaries for adding product sources, model providers, and merchandising capabilities without rewriting the core workflow.",
    ],
    stack: [
      "OpenAI GPT-5.2",
      "Gemini 3.6 Flash",
      "Shopify Admin GraphQL API",
      "Shopify Functions",
      "Theme app extensions",
      "React",
      "Node.js",
      "MongoDB",
      "AWS S3",
    ],
    reflection:
      "Krafted AI worked because AI was treated as a capability, not the architecture. The durable product is the system around the models: clear domain boundaries, deterministic safeguards, explicit state, and a publishing path that never confuses a plausible result with a verified one.",
    cta: {
      eyebrow: "Start a project",
      title: "Need a Shopify app built with this level of ownership?",
      description:
        "Tell me what the product needs to achieve. I can help shape the strategy, architecture, build, and path to production.",
      label: "Discuss your Shopify app",
      href: "/#contact",
    },
  },
  {
    slug: "cryptozilla-mobile-wallet",
    title: "Self-custody without sacrificing the mobile experience.",
    shortTitle: "Cryptozilla",
    client: "Cryptozilla",
    industry: "Mobile fintech",
    role: "Mobile and security engineer",
    platform: {
      name: "iOS and Android",
    },
    summary:
      "I engineered the mobile and security layers of a non-custodial wallet, where key management, device protection, and a fluid interface had to coexist across more than 50 production screens.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/d08f74f7730022088a918625ba2198c7a2eeff50-1600x900.heif",
    featuredImageAlt:
      "Cryptozilla mobile wallet interface with portfolio and self-custody features.",
    highlights: [
      { value: "50+", label: "mobile screens shipped" },
      { value: "90%+", label: "seed backup completion" },
      { value: "iOS + Android", label: "production releases" },
    ],
    contextLabel: "Security premise",
    contextTitle: "The device was the custody boundary",
    context: [
      "A self-custody wallet has no support-led recovery path for a compromised seed phrase. Security requirements therefore shape the product architecture, not just the authentication screen.",
      "The application combined BIP-39 and BIP-44 key derivation, encrypted local storage, biometric access, certificate-pinned network calls, real-time prices, interactive portfolio charts, and an in-app token swap.",
    ],
    contribution: [
      "I owned work across the React Native application, secure key lifecycle, native platform behaviour, and the interaction problems created by screenshot protection.",
      "The hardest part was not implementing each requirement independently. It was resolving cases where a security control changed the rendering or gesture behaviour of otherwise stable UI code.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Owned the mobile security boundary",
    decisionEyebrow: "Architecture",
    decisionTitle: "Security controls had to survive real interaction",
    decisionDescription:
      "Each control was evaluated as part of the product experience, including the rendering, gesture, recovery, and device-specific behaviour it changed.",
    decisions: [
      {
        constraint:
          "Applying Android FLAG_SECURE to the root window caused Reanimated chart gestures to stutter on Samsung and Xiaomi devices.",
        decision:
          "Move secure-window activation into a native module and enable it only on screens that display sensitive information.",
        impact:
          "Sensitive screens remain protected while animation-heavy portfolio views keep their expected interaction performance.",
      },
      {
        constraint:
          "iOS has no direct equivalent to Android's screenshot-blocking API, and the secure text overlay interfered with repeated chart gestures.",
        decision:
          "Prioritise protection on sensitive screens and replace the drag scrubber there with a simpler tap interaction.",
        impact:
          "The security boundary remains clear without pretending the platform can provide behaviour it does not support safely.",
      },
      {
        constraint:
          "A technically correct seed backup flow can still fail if people skip or misunderstand it.",
        decision:
          "Use a three-stage reveal, record, and ordered-word verification flow before unlocking the wallet.",
        impact:
          "More than 90% of users who started seed backup completed it.",
      },
      {
        constraint:
          "Private keys and seed material could not remain available in plaintext between sessions.",
        decision:
          "Use hardware-backed biometric access to unlock an AES-256 encrypted local keystore and derive individual keys only when needed.",
        impact:
          "Key material stays device-bound, encrypted at rest, and absent from remote infrastructure.",
      },
    ],
    outcomes: [
      "Production releases for both iOS and Android.",
      "Self-custody support for BTC, ETH, and ERC-20 assets.",
      "Real-time portfolio updates, interactive performance views, and token-swap confirmation with slippage visibility.",
      "A documented security and interaction model tested across OEM-specific Android behaviour.",
    ],
    outcomeTitle: "A secure wallet that still behaved like a consumer app",
    stack: [
      "React Native",
      "TypeScript",
      "BIP-39",
      "BIP-44",
      "bitcoinjs-lib",
      "ethers.js",
      "Redux Toolkit",
      "Reanimated",
      "Detox",
    ],
    reflection:
      "Cryptozilla reinforced a practical rule: a security control is not finished until it has been tested against the interactions people need to complete.",
    cta: {
      eyebrow: "Start a project",
      title: "Building a mobile product with a hard security boundary?",
      description:
        "I can help design the native architecture, sensitive-data lifecycle, and interaction model together.",
      label: "Discuss your mobile product",
      href: "/#contact",
    },
  },
  {
    slug: "bsi-incident-reporting-platform",
    title: "Every incident transition had to stand up to an audit.",
    shortTitle: "BSI MIP",
    client: "German Federal Office for Information Security (BSI)",
    industry: "Government cybersecurity",
    role: "Full-stack and platform engineer",
    website: {
      name: "MIP portal",
      href: "https://mip2.bsi.bund.de/en/",
    },
    platform: {
      name: "Secure government web",
    },
    summary:
      "I engineered core parts of Germany's regulated incident-reporting platform, where identity, deadlines, encryption, and every state transition carried a security or legal consequence.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/d954b8ea89f0efe39a307f438701a28aba5f7e75-1920x1080.jpg",
    featuredImageAlt:
      "German Federal Office for Information Security incident reporting platform.",
    highlights: [
      { value: "24h", label: "initial reporting window" },
      { value: "4 stages", label: "regulated reporting lifecycle" },
      { value: "2", label: "isolated trust models" },
    ],
    contextLabel: "Regulatory premise",
    contextTitle: "The workflow itself was legal evidence",
    context: [
      "Germany's NIS2 reporting workflow requires regulated organisations to submit an initial notification within 24 hours, followed by detailed updates and closure. The platform needed to preserve the exact sequence and timing of every action.",
      "It also had to support authenticated organisations and anonymous voluntary reporters without allowing one trust model to weaken the other.",
    ],
    contribution: [
      "I owned engineering work around workflow integrity, identity, encrypted payload handling, and operational edge cases across the platform.",
      "The engineering standard was shaped by federal infrastructure, formal penetration testing, and the requirement that audit evidence remain tamper-evident.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Engineered auditability into the platform",
    decisionEyebrow: "Architecture",
    decisionTitle: "Legal obligations became state-machine invariants",
    decisionDescription:
      "The architecture made deadlines, identities, transitions, and evidence explicit rather than relying on policy around a generic workflow engine.",
    decisions: [
      {
        constraint:
          "Updating a mutable status field would lose the legal history of how and when an incident changed state.",
        decision:
          "Represent every transition as an append-only event and derive the current state by replaying the event sequence.",
        impact:
          "The platform retains a complete record of submissions, analyst actions, reasons, identities, and timestamps.",
      },
      {
        constraint:
          "A two-minute clock error around a 24-hour deadline could change the compliance status of a submission.",
        decision:
          "Use monitored server time for audit events and alert on infrastructure clock drift beyond the accepted threshold.",
        impact:
          "Deadline evidence is consistent, centralised, and defensible during later review.",
      },
      {
        constraint:
          "Anonymous reports had to remain unlinkable while still entering the national threat-intelligence workflow.",
        decision:
          "Separate the anonymous endpoint and data path from authenticated sessions, account stores, and application-level source logging.",
        impact:
          "Voluntary reports can contribute useful indicators without inheriting the identity model of mandatory reporting.",
      },
      {
        constraint:
          "Incident payloads could expose active vulnerabilities and mitigation details if infrastructure were compromised.",
        decision:
          "Encrypt payloads before submission and keep private-key operations inside controlled federal key-management infrastructure.",
        impact:
          "Stored and transmitted report data remains protected beyond the outer TLS connection.",
      },
    ],
    outcomes: [
      "A structured incident lifecycle covering initial notification, detailed reporting, progress updates, and closure.",
      "Organisation identity and delegated reporting through Keycloak-backed access controls.",
      "A technically isolated anonymous reporting path.",
      "A platform designed and remediated against formal penetration-test findings before launch.",
    ],
    outcomeTitle: "A reporting lifecycle designed for evidence, not only submission",
    stack: [
      "Angular",
      "TypeScript",
      "Java Spring Boot",
      "Keycloak",
      "PostgreSQL",
      "Kubernetes",
      "Redis",
      "Splunk",
      "AES-256",
    ],
    reflection:
      "This work made one principle concrete: in regulated systems, compliance cannot be a checklist around the product. It has to be encoded in the state model, identity boundaries, timestamps, and failure behaviour.",
    cta: {
      eyebrow: "Start a project",
      title: "Building a regulated workflow where every transition matters?",
      description:
        "I can help turn legal, security, and operational obligations into a system that remains inspectable under pressure.",
      label: "Discuss your regulated platform",
      href: "/#contact",
    },
  },
  {
    slug: "ai-guest-assistant",
    title: "The right property context before the first WhatsApp reply.",
    shortTitle: "AI guest assistant",
    client: "Confidential short-term rental operator",
    industry: "Hospitality AI",
    role: "AI systems engineer",
    platform: {
      name: "WhatsApp Business",
    },
    summary:
      "I built the context, routing, and escalation system behind a multilingual WhatsApp assistant for more than 60 properties. Correctly identifying the guest and property mattered more than generating a fluent reply.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/150a00fb9be258907aee9a1044200ddd738b0c0c-1920x1080.jpg",
    featuredImageAlt:
      "Architecture and interface for a multilingual AI guest assistant.",
    highlights: [
      { value: "60+", label: "properties supported" },
      { value: "83%", label: "autonomous resolution" },
      { value: "<3s", label: "p90 first response" },
    ],
    context: [
      "Routine guest questions were documented in Airtable, but every answer depended on identifying the correct booking, property, and unit from an incoming phone number that was not always reliable.",
      "The system had to serve English, Spanish, and French conversations around the clock, protect access information, stay within Airtable and WhatsApp limits, and hand sensitive or uncertain conversations to a person.",
    ],
    contextLabel: "Operational premise",
    contextTitle: "A fluent answer was useless with the wrong property context",
    contribution: [
      "I owned the session-routing logic, property-context pipeline, multilingual conversation flow, caching strategy, and escalation controls.",
      "The central engineering problem was the 45-millisecond decision before generation: deciding which operational context could safely be attached to a new conversation.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Built the context and escalation layer",
    decisionEyebrow: "Architecture",
    decisionTitle: "Identity and context were resolved before generation",
    decisionDescription:
      "The assistant could use property-specific knowledge only after the system established a defensible connection between sender, booking, property, and unit.",
    decisions: [
      {
        constraint:
          "The sender's phone number could be masked, formatted differently, or belong to another person in the booking.",
        decision:
          "Use a three-pass resolver: normalised exact match, active-booking-window match with confirmation, then a minimal open-conversation fallback.",
        impact:
          "Most sessions receive the correct context immediately, while ambiguous sessions reveal no property-specific information until identity is confirmed.",
      },
      {
        constraint:
          "Reading property records from Airtable on every message created latency and exceeded the five-request-per-second base limit at peak check-in times.",
        decision:
          "Normalise and batch the Airtable read at session start, then cache non-sensitive property context in Redis with short expiry windows.",
        impact:
          "p95 session initialisation fell from about 1.2 seconds on a cold read to about 180 milliseconds on a cache hit.",
      },
      {
        constraint:
          "A single low-confidence score produced too many unnecessary human escalations.",
        decision:
          "Separate missing context from stylistic uncertainty and retry against verified session data before escalating.",
        impact:
          "Unnecessary escalations fell from 34% to 8% while complaints and safety concerns still transferred immediately.",
      },
    ],
    outcomes: [
      "Autonomous resolution reached 83% in the second month.",
      "Average first-response time stayed below three seconds at p90.",
      "Routine guest-communication hours fell by approximately 70%.",
      "The WhatsApp account scaled from 250 to 10,000 conversations per day while maintaining quality thresholds.",
    ],
    outcomeTitle: "Automation that reduced work without leaking context",
    stack: [
      "LangChain",
      "OpenAI language models",
      "Airtable API",
      "WhatsApp Business API",
      "Node.js",
      "FastAPI",
      "Redis",
      "PostgreSQL",
    ],
    reflection:
      "Conversation quality starts before the model receives a prompt. Identity resolution, context boundaries, and escalation rules determine whether an assistant is merely fluent or operationally safe.",
    cta: {
      eyebrow: "Start a project",
      title: "Need an AI assistant connected to real operations?",
      description:
        "I can help design the identity, context, integration, and escalation layers that make automation safe enough to run unattended.",
      label: "Discuss your AI assistant",
      href: "/#contact",
    },
  },
  {
    slug: "talentfilter-ai-screening",
    title: "Three evaluation layers. No black-box hiring score.",
    shortTitle: "TalentFilter",
    client: "Confidential enterprise HR technology company",
    industry: "HR technology",
    role: "AI systems and full-stack engineer",
    platform: {
      name: "AI web platform",
    },
    summary:
      "I engineered the structured evaluation pipeline behind a candidate-screening platform that combined video analysis, adaptive assessment, and interview intelligence without turning model output into an unexplained hiring decision.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/af0cc46e3bd650a889d2d429a74c2d73e7f83a19-2484x1376.jpg",
    featuredImageAlt:
      "TalentFilter candidate screening and evaluation interface.",
    highlights: [
      { value: "3", label: "evaluation layers" },
      { value: "80%", label: "screening workload reduced" },
      { value: "94%", label: "reasoning vocabulary consistency" },
    ],
    context: [
      "High-volume technical hiring created inconsistent CV reviews and expensive phone screens before interviewers had reliable evidence of a candidate's knowledge or communication.",
      "The legal and product requirement was explicit: every automated score needed criterion-level reasoning that a recruiter could inspect rather than a single opaque ranking.",
    ],
    contextLabel: "Product premise",
    contextTitle: "Every score needed evidence a recruiter could challenge",
    contribution: [
      "I owned work across the structured evaluation pipeline, audio and video quality controls, adaptive-exam model, and recruiter-facing intelligence brief.",
      "The design treated model output as reviewable evidence. Scores, reasons, confidence, and source quality travelled together through the system.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Made model output reviewable",
    decisionEyebrow: "Architecture",
    decisionTitle: "Evidence travelled with every score",
    decisionDescription:
      "Schemas, confidence, source quality, and criterion-level reasoning formed one evaluation record that could be compared, audited, and tested by a human interviewer.",
    decisions: [
      {
        constraint:
          "Free-form model explanations used inconsistent criterion names and could not support reliable audits.",
        decision:
          "Constrain every evaluation to a versioned JSON schema with an allowed criterion vocabulary, score, evidence, and confidence.",
        impact:
          "Reasoning outputs used the defined vocabulary correctly in 94% of validation cases and became comparable across roles.",
      },
      {
        constraint:
          "Fixed technical tests spent too many questions confirming what the system already knew about a candidate.",
        decision:
          "Use item-response theory to select each next question from the current ability estimate and recalibrate question parameters from production data.",
        impact:
          "Recalibrated question banks produced 18% lower score variance and targeted knowledge boundaries more precisely.",
      },
      {
        constraint:
          "Browser recording quality varied enough to distort transcription and delivery analysis.",
        decision:
          "Run a local pre-submission signal-quality check and carry transcription confidence into the final evaluation.",
        impact:
          "Candidates who rerecorded after a warning produced audio with 22% better speech-recognition error rates.",
      },
    ],
    outcomes: [
      "The highest-volume screening step required approximately 80% less recruiter effort.",
      "A 200-candidate pool could be processed overnight.",
      "Interviewers using the intelligence brief probed predicted knowledge gaps 67% more often.",
      "Every evaluation retained explicit reasoning and data-quality indicators for human review.",
    ],
    outcomeTitle: "Faster screening with a visible reasoning trail",
    stack: [
      "Multimodal language models",
      "OpenAI Whisper",
      "Azure Speech SDK",
      "OpenCV",
      "LangChain",
      "WebRTC",
      "FastAPI",
      "PostgreSQL",
      "React",
      "Next.js",
    ],
    reflection:
      "Explainability improved the product as well as the audit trail. Requiring evidence for every score exposed weak criteria early and gave interviewers something concrete to test.",
    cta: {
      eyebrow: "Start a project",
      title: "Building an AI decision-support product people must trust?",
      description:
        "I can help design evaluation schemas, evidence trails, human review, and quality controls around uncertain model output.",
      label: "Discuss your AI platform",
      href: "/#contact",
    },
  },
  {
    slug: "adac-rag-semantic-search",
    title: "Two million documents, retrieved with their structure intact.",
    shortTitle: "ADAC RAG",
    client: "ADAC",
    industry: "Automotive AI",
    role: "AI retrieval engineer",
    website: {
      name: "ADAC",
      href: "https://www.adac.de/",
    },
    platform: {
      name: "RAG and semantic search",
    },
    summary:
      "I redesigned retrieval across two million ADAC documents, separating tables, legal guidance, vehicle tests, and editorial content into strategies that raised benchmark precision from 61% to 84%.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/448fb4897817c267eca8c2924d030f9fc0730211-1800x1038.webp",
    featuredImageAlt:
      "ADAC digital platform with semantic search and conversational assistance.",
    highlights: [
      { value: "2M", label: "documents indexed" },
      { value: "84%", label: "retrieval precision" },
      { value: "73%", label: "autonomous resolution" },
    ],
    context: [
      "ADAC's corpus combined structured vehicle tests, dense legal guidance, comparison tables, and short editorial articles. A uniform retrieval strategy treated fundamentally different information as if it had the same shape.",
      "The product needed trustworthy conversational answers with source attribution, strong German automotive terminology, and an audio path suitable for hands-free use.",
    ],
    contextLabel: "Retrieval premise",
    contextTitle: "Two million indexed documents were not the same as usable knowledge",
    contribution: [
      "I owned work across corpus classification, chunking and retrieval strategy, reranking, answer guardrails, and the text-to-speech delivery path.",
      "The initial benchmark made the architectural mistake visible: two million indexed documents were not useful when the relevant passage structure had been destroyed during chunking.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Rebuilt retrieval around document structure",
    decisionEyebrow: "Architecture",
    decisionTitle: "Retrieval quality began with corpus architecture",
    decisionDescription:
      "Content type determined chunking, candidate generation, reranking, and answer constraints instead of forcing every source through one generic RAG pipeline.",
    decisions: [
      {
        constraint:
          "Uniform 512-token chunks split tables, legal clauses, and vehicle-test sections at arbitrary boundaries.",
        decision:
          "Classify documents by content type and apply table-aware, sentence-window, or section-aware chunking to each class.",
        impact:
          "Retrieval precision increased from 61% to 84% on the benchmark set.",
      },
      {
        constraint:
          "Approximately 8% of documents had missing or incorrect content-type metadata.",
        decision:
          "Combine a structural rules pass with a low-cost language-model classifier only for low-confidence documents.",
        impact:
          "The correct chunking strategy was applied to 98.7% of the corpus without using a model on every record.",
      },
      {
        constraint:
          "Dense retrieval alone missed exact model codes, tyre dimensions, and jurisdiction-specific terms.",
        decision:
          "Fuse vector and keyword retrieval, then rerank the combined candidates before generation.",
        impact:
          "Answers preserved semantic recall while improving exact-match behaviour and source relevance.",
      },
    ],
    outcomes: [
      "Benchmark retrieval precision reached 84%, up from a 61% baseline.",
      "The pilot resolved 73% of member queries without human escalation.",
      "Source attribution and guardrails kept answers tied to approved ADAC material.",
      "Automotive text-to-speech met the target intelligibility threshold with a maintained terminology dictionary.",
    ],
    outcomeTitle: "Higher precision without brute-forcing every document through a model",
    stack: [
      "LangChain",
      "OpenAI language models",
      "Pinecone",
      "Cohere Rerank",
      "OpenAI Embeddings",
      "Elasticsearch",
      "Azure TTS",
      "FastAPI",
      "Python",
    ],
    reflection:
      "RAG quality is often a data-modelling problem disguised as a model problem. The biggest improvement came from respecting the structure of the source material before retrieval began.",
    cta: {
      eyebrow: "Start a project",
      title: "Need retrieval that works beyond a polished demo?",
      description:
        "I can help benchmark the corpus, design the retrieval architecture, and build answer controls around the evidence your users actually need.",
      label: "Discuss your RAG system",
      href: "/#contact",
    },
  },
  {
    slug: "sandoz-global-web-platform",
    title: "One publishing platform for more than 100 regulated markets.",
    shortTitle: "Sandoz",
    client: "Sandoz Group AG",
    industry: "Pharmaceutical platforms",
    role: "Web platform engineer",
    website: {
      name: "Sandoz",
      href: "https://www.sandoz.com/",
    },
    platform: {
      name: "Global web platform",
    },
    summary:
      "I engineered core parts of a global pharmaceutical publishing platform where localisation, medical review, market eligibility, accessibility, and editorial speed had to coexist in one content model.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/0b9fad7ade234ad0f99c08f8777271fe65a7f77c-3840x2160.png",
    featuredImageAlt:
      "Sandoz global pharmaceutical web platform.",
    highlights: [
      { value: "100+", label: "markets supported" },
      { value: "30+", label: "locales managed" },
      { value: "78%", label: "first-pass approval" },
    ],
    context: [
      "Regional teams needed to publish quickly across more than 100 markets, while medical, legal, and regulatory approval remained independently auditable for every applicable jurisdiction.",
      "The same platform served public visitors, healthcare professionals, patients, and regulatory stakeholders with different access and content requirements.",
    ],
    contextLabel: "Publishing premise",
    contextTitle: "Global reuse could never override local approval",
    contribution: [
      "I owned work across the headless content architecture, market-variant model, approval workflow, search experience, and performance and accessibility controls.",
      "The architecture treated approval state as part of the content model rather than a process tracked outside the publishing system.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Encoded regulation into the publishing model",
    decisionEyebrow: "Architecture",
    decisionTitle: "Approval state belonged in the content model",
    decisionDescription:
      "Reusable content, jurisdictional applicability, reviewer evidence, and publication eligibility were modelled together so the correct path was enforceable by the platform.",
    decisions: [
      {
        constraint:
          "A simple translation model could incorrectly reuse one market's regulatory approval in another jurisdiction.",
        decision:
          "Model clinical and promotional blocks as market variants with independent applicability and approval state.",
        impact:
          "An approval in one country never silently authorises publication in another.",
      },
      {
        constraint:
          "Reviewers lost time switching to staging simply to understand what a content change would look like.",
        decision:
          "Provide rendered previews inside the medical-legal-regulatory workflow and route lower-risk editorial changes through a defined lighter track.",
        impact:
          "The preview removed roughly half a day from common review cycles, while more than 30% of submissions used the appropriate streamlined path.",
      },
      {
        constraint:
          "Pharmaceutical tables and gated content had to remain usable across keyboard and screen-reader workflows.",
        decision:
          "Test each reusable component with NVDA, JAWS, and VoiceOver before admitting it to the shared component library.",
        impact:
          "An independent launch audit verified WCAG 2.1 AA compliance without a late remediation sprint.",
      },
    ],
    outcomes: [
      "The platform supported more than 100 market sites and over 30 locales.",
      "First-submission completion of the full approval chain reached 78% in the first quarter.",
      "Medicine-finder queries stayed below 400 milliseconds at p95.",
      "Market-specific publication and healthcare-professional gating were encoded in the platform rather than handled manually.",
    ],
    outcomeTitle: "Global scale without collapsing market-level governance",
    stack: [
      "Next.js",
      "TypeScript",
      "Contentful",
      "Elasticsearch",
      "Okta",
      "GraphQL",
      "Azure CDN",
      "Terraform",
      "GitHub Actions",
    ],
    reflection:
      "Regulated publishing becomes faster when the platform makes the correct path obvious. Removing ambiguity from approval state was more valuable than removing approval steps.",
    cta: {
      eyebrow: "Start a project",
      title: "Designing a global platform with local regulatory rules?",
      description:
        "I can help model content, approvals, access, and infrastructure as one operable system rather than disconnected governance layers.",
      label: "Discuss your web platform",
      href: "/#contact",
    },
  },
  {
    slug: "mpidr-scientist-migration",
    title: "Eight million publications turned into migration evidence.",
    shortTitle: "MPIDR",
    client: "Max Planck Institute for Demographic Research",
    industry: "Research data",
    role: "Data and machine-learning engineer",
    website: {
      name: "MPIDR",
      href: "https://www.demogr.mpg.de/en/",
    },
    platform: {
      name: "Research data and ML",
    },
    summary:
      "I built a reproducible research pipeline for eight million Scopus records, resolving researcher identities, detecting migration, and correcting gender-inference errors that commercial APIs reported with high confidence.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/491783f4f71b4e88566d68211309d2c29b86316d-1000x563.jpg",
    featuredImageAlt:
      "Visualisation of scientist migration and gender-inference research data.",
    highlights: [
      { value: "8M+", label: "Scopus records" },
      { value: "25", label: "years analysed" },
      { value: "89%", label: "gender inference accuracy" },
    ],
    context: [
      "The study examined scientist migration to and from Germany from 1996 to 2020. Publication records had to be joined into researcher trajectories before affiliation changes could become defensible migration signals.",
      "More than one million researcher records covered names from over 80 countries. Commercial gender-inference APIs agreed most confidently on some of the name groups where their cultural coverage was weakest.",
    ],
    contextLabel: "Research premise",
    contextTitle: "Every migration claim depended on a defensible identity trail",
    contribution: [
      "I owned the out-of-core data pipeline, author disambiguation, affiliation-change rules, gender-inference ensemble, and reproducible research environment.",
      "The goal was not merely to produce a dataset. Every transformation and modelling choice had to be rerunnable and inspectable by researchers.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Built the reproducible research pipeline",
    decisionEyebrow: "Architecture",
    decisionTitle: "Scientific claims required reproducible transformations",
    decisionDescription:
      "Identity resolution, migration rules, cultural error analysis, and model confidence remained inspectable from raw publication records to the final research tables.",
    decisions: [
      {
        constraint:
          "Eight million publication records exceeded practical in-memory processing on the available hardware.",
        decision:
          "Partition the ETL stages with Dask, persist stable intermediate datasets, and make each transformation independently reproducible.",
        impact:
          "The full pipeline could resume, validate, and rerun without holding the complete corpus in memory.",
      },
      {
        constraint:
          "Two external gender APIs shared systematic errors on transliterated East Asian and Arabic names.",
        decision:
          "Add an XGBoost classifier using character n-grams and country-of-origin features, then ensemble the three sources with calibrated confidence.",
        impact:
          "Held-out accuracy reached 89%, with the largest gains on the exact subgroups where the APIs failed.",
      },
      {
        constraint:
          "A changed affiliation could reflect relocation, a sabbatical, or simultaneous appointments.",
        decision:
          "Require temporal and publication-sequence evidence before converting an affiliation change into a migration event.",
        impact:
          "Migration matrices represented sustained researcher movement rather than every noisy address change.",
      },
    ],
    outcomes: [
      "Eight million publication records became more than one million longitudinal researcher trajectories.",
      "Migration flows were mapped across more than 80 source and destination countries and 27 subject classifications.",
      "The custom ensemble reached 89% gender-inference accuracy on held-out data.",
      "Containerised and scheduled workflows made the analysis reproducible across the research environment.",
    ],
    outcomeTitle: "A research instrument, not a one-off data export",
    stack: [
      "Python",
      "Pandas",
      "Dask",
      "XGBoost",
      "NamSor",
      "Genderize.io",
      "NetworkX",
      "Docker",
      "SLURM",
      "R",
    ],
    reflection:
      "When a model becomes a measurement instrument, average accuracy is not enough. Error distribution across cultures and languages has to be part of the scientific result.",
    cta: {
      eyebrow: "Start a project",
      title: "Working with research data that must remain reproducible?",
      description:
        "I can help design the data, modelling, validation, and execution layers so results remain inspectable beyond the first run.",
      label: "Discuss your data platform",
      href: "/#contact",
    },
  },
  {
    slug: "curvetrace-bezier-detection",
    title: "Detecting Bézier curves where polylines were not enough.",
    shortTitle: "CurveTrace",
    client: "Fraunhofer Institute for Computer Graphics Research",
    industry: "Computer vision research",
    role: "Computer vision engineer",
    website: {
      name: "Fraunhofer IGD",
      href: "https://www.igd.fraunhofer.de/en/",
    },
    platform: {
      name: "Computer vision research",
    },
    summary:
      "I built a direct Bézier control-point detection pipeline for noisy maritime imagery, combining curvature-aware RANSAC, non-linear refinement, occlusion recovery, and a new 5,000-image benchmark.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/ade7e5db4482ebe12b2c1c6b90de3456d9d8b121-800x447.gif",
    featuredImageAlt:
      "CurveTrace detecting parametric Bézier curves in an image.",
    highlights: [
      { value: "5,000+", label: "annotated benchmark images" },
      { value: "40%", label: "outlier tolerance" },
      { value: "60%", label: "fewer RANSAC iterations" },
    ],
    context: [
      "The research use case required direct parametric Bézier control points, not a polyline approximation. Maritime imagery added low contrast, partial occlusion, noise, and changing illumination.",
      "No public benchmark measured the required control-point accuracy, so algorithm development and evaluation infrastructure had to advance together.",
    ],
    contextLabel: "Research premise",
    contextTitle: "The required geometry could not be approximated away",
    contribution: [
      "I owned the geometric detection pipeline, curvature-aware sampling, Levenberg-Marquardt refinement, occlusion recovery, benchmark generation, and Python and ROS integrations.",
      "The work focused on measuring the geometric property directly rather than relying on gradient orientation as an unreliable proxy.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Built the detector and its benchmark",
    decisionEyebrow: "Architecture",
    decisionTitle: "Evaluation and detection advanced together",
    decisionDescription:
      "The algorithm, controlled data generation, geometric metrics, and integration surfaces were designed as one research system because no existing benchmark measured the required control-point accuracy.",
    decisions: [
      {
        constraint:
          "Orientation-weighted RANSAC samples became biased and required too many iterations in noisy scenes.",
        decision:
          "Reject degenerate minimal sets using a curvature prior derived from the circumscribed arc.",
        impact:
          "The benchmark required approximately 60% fewer iterations for 99% detection probability.",
      },
      {
        constraint:
          "Occlusion produced gaps that caused otherwise correct curve candidates to lose too many inliers.",
        decision:
          "Project a refined Bézier through long gaps and retest pixels along the expected path against the edge map.",
        impact:
          "Correct detections were recovered on approximately 15% of medium-difficulty benchmark images.",
      },
      {
        constraint:
          "Existing line and wireframe datasets could not measure control-point accuracy.",
        decision:
          "Build a calibrated synthetic benchmark with known control points, controlled noise, occlusion, and contrast variation.",
        impact:
          "More than 5,000 annotated images supported repeatable mAP and Hausdorff-distance evaluation.",
      },
    ],
    outcomes: [
      "The detector tolerated 40% outliers at the medium benchmark tier.",
      "Non-linear refinement delivered sub-pixel control-point estimates.",
      "The implementation exposed C++, Python, REST, and ROS integration paths.",
      "The benchmark was reused by three downstream research pipelines.",
    ],
    outcomeTitle: "Sub-pixel geometry with a benchmark others could reuse",
    stack: [
      "C++17",
      "Python",
      "OpenCV",
      "Eigen3",
      "pybind11",
      "FastAPI",
      "ROS",
      "NumPy",
      "SciPy",
    ],
    reflection:
      "The benchmark became as important as the detector. When no existing metric captures the required geometry, building credible evaluation is part of building the algorithm.",
    cta: {
      eyebrow: "Start a project",
      title: "Need a computer-vision system grounded in measurable geometry?",
      description:
        "I can help build the algorithm, benchmark, integration surfaces, and evidence needed to move beyond a promising prototype.",
      label: "Discuss your vision system",
      href: "/#contact",
    },
  },
  {
    slug: "mintfit-ai-coaching",
    title: "AI coaching that speaks the studio's own language.",
    shortTitle: "MintFit",
    client: "Mint Condition Fitness",
    industry: "AI health and fitness",
    role: "AI product and full-stack engineer",
    website: {
      name: "Mint Condition Fitness",
      href: "https://mintfit.com/",
    },
    platform: {
      name: "AI coaching web platform",
    },
    summary:
      "I built MintFit from the coach workflow outward, connecting assessments, client history, program design, and retrieval-augmented AI to the studio's own Thrive50+ methodology.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/e1f58b6bb378247e3f28120878074f0c533eccdf-1600x900.jpg",
    featuredImageAlt:
      "MintFit coach workspace and AI program-generation platform.",
    highlights: [
      { value: "<5m", label: "first program draft" },
      { value: "30-60m", label: "previous planning workflow" },
      { value: "5+", label: "assessment protocols" },
    ],
    contextLabel: "Product premise",
    contextTitle: "Generic fitness language made good output unusable",
    context: [
      "Coaches serving adults over 50 combined injury history, movement quality, assessments, previous programs, and a specialised exercise vocabulary when designing each plan.",
      "The first AI plans were technically sound but coaches did not use them because generic exercise names ignored 15 years of studio shorthand and programming conventions.",
    ],
    contribution: [
      "I built the coach workspace, schema-driven assessments, AI program generator, client-aware assistant, retrieval layer, and managed AWS backend.",
      "The product kept the coach in control: AI generated a structured first draft, while a fast editing and drag-and-drop layer made review easier than starting from an empty plan.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Built the coaching platform end to end",
    decisionEyebrow: "Architecture",
    decisionTitle: "Domain knowledge had to shape generation",
    decisionDescription:
      "The studio's methodology, exercise vocabulary, assessment schemas, and client history became first-class product data rather than one oversized prompt.",
    decisions: [
      {
        constraint:
          "Generic fitness terminology made correct plans expensive for coaches to translate.",
        decision:
          "Index the studio's methodology, exercise library, abbreviations, and long-to-short terminology mappings in the retrieval system.",
        impact:
          "Generated programs arrived in the language coaches already used in sessions.",
      },
      {
        constraint:
          "FMS, pain-clearance, body-composition, and metabolic tests had different fields and scoring logic.",
        decision:
          "Use versioned, schema-driven assessment definitions instead of forcing every protocol into one generic table.",
        impact:
          "New assessment types could be added without compromising the speed of in-session data entry.",
      },
      {
        constraint:
          "A client profile alone was too broad to ground trustworthy answers across a long coaching history.",
        decision:
          "Start each assistant thread with a structured summary, then retrieve the relevant assessments, notes, and programs for each question.",
        impact:
          "Coaches could ask client-specific questions without copying records into a separate chat or rebuilding context.",
      },
    ],
    outcomes: [
      "Program creation fell from 30 to 60 minutes to under five minutes for a first draft.",
      "Assessment history became searchable, comparable, and directly connected to programming decisions.",
      "New coaches could query the studio's methodology instead of relying on generic online guidance.",
      "Health history, notes, images, assessments, programs, and AI context lived in one client record.",
    ],
    outcomeTitle: "A connected coaching workflow with AI in the right place",
    stack: [
      "Next.js",
      "React",
      "AWS Amplify",
      "AWS Cognito",
      "Amazon S3",
      "OpenAI",
      "LangChain",
      "LangGraph",
      "Zustand",
      "TanStack Query",
    ],
    reflection:
      "Domain language is product behaviour, not presentation. The AI became useful only after it learned the methodology and notation that shaped the coaches' real decisions.",
    cta: {
      eyebrow: "Start a project",
      title: "Have specialist knowledge trapped in disconnected workflows?",
      description:
        "I can help turn the domain model, operational data, and expert review process into an AI product people will actually use.",
      label: "Discuss your AI product",
      href: "/#contact",
    },
  },
  {
    slug: "marc-o-polo-cms-migration",
    title: "Thirty-seven storefronts migrated in fourteen days.",
    shortTitle: "Marc O'Polo",
    client: "Marc O'Polo SE",
    industry: "E-commerce platforms",
    role: "Frontend and CMS engineer",
    website: {
      name: "Marc O'Polo",
      href: "https://company.marc-o-polo.com/en",
    },
    platform: {
      name: "Headless commerce",
    },
    summary:
      "I proved and delivered a mid-project CMS migration that replaced a slow in-house workflow with a shared Storyblok component model across 37 storefronts and six languages.",
    featuredImageUrl:
      "https://cdn.sanity.io/images/10hjydtp/production/de8e760f990e867439053ce85ef832dbd9d6fe23-3500x2336.webp",
    featuredImageAlt:
      "Marc O'Polo headless commerce storefront and content-management experience.",
    highlights: [
      { value: "37", label: "storefronts migrated" },
      { value: "14d", label: "full implementation" },
      { value: "48h", label: "decision-making prototype" },
    ],
    contextLabel: "Migration premise",
    contextTitle: "The team needed working evidence, not another platform debate",
    context: [
      "Five months into a commerce relaunch, the in-house CMS still required developers for routine campaign and content work. Design, content, and commerce workstreams were blocking one another.",
      "The team needed evidence that changing the content platform mid-project would reduce risk rather than add another unfinished migration.",
    ],
    contribution: [
      "I owned work across the Storyblok component model, Nuxt storefront integration, migration tooling, visual-editor workflow, and coordination between content and frontend workstreams.",
      "A working prototype changed the decision from a theoretical platform debate into a side-by-side comparison of real editorial work.",
    ],
    contributionLabel: "My ownership",
    contributionTitle: "Proved and delivered the migration",
    decisionEyebrow: "Architecture",
    decisionTitle: "A prototype turned platform risk into evidence",
    decisionDescription:
      "The migration plan was validated through the same content, editing, preview, and storefront paths the production system needed to support.",
    decisions: [
      {
        constraint:
          "Stakeholders were being asked to replace a system after months of investment.",
        decision:
          "Build the same representative homepage scope in Storyblok within 48 hours and demonstrate live editing and preview.",
        impact:
          "A four-month legacy-CMS scope became a working prototype that secured agreement on the migration.",
      },
      {
        constraint:
          "Content migration could not pause active marketing across 37 live storefronts.",
        decision:
          "Map legacy structures into a shared component schema, migrate through the Management API, and validate each story before release.",
        impact:
          "All storefronts and six languages moved within the 14-day implementation window.",
      },
      {
        constraint:
          "A flexible CMS could still fail if editors needed developers to understand its component model.",
        decision:
          "Make the visual editor and component vocabulary match the storefront structure editors already recognised.",
        impact:
          "Content teams began publishing without formal onboarding or developer assistance.",
      },
    ],
    outcomes: [
      "A representative prototype shipped in 48 hours.",
      "The full implementation covered 37 storefronts and six languages in 14 days.",
      "Developer dependency was removed from routine content publishing and campaign management.",
      "The shared component contract let design, content, and engineering progress in parallel.",
    ],
    outcomeTitle: "A faster publishing system shared across markets",
    stack: [
      "Vue.js",
      "Nuxt.js",
      "Storyblok",
      "Commercetools",
      "AWS",
      "Storyblok Management API",
    ],
    reflection:
      "The prototype worked because it made the organisational bottleneck visible. A shared content model became a coordination system for design, editorial, and engineering, not only a CMS schema.",
    cta: {
      eyebrow: "Start a project",
      title: "Planning a CMS migration that cannot pause the business?",
      description:
        "I can help prove the target architecture, design the content model, and deliver the migration without separating technical work from editorial reality.",
      label: "Discuss your content platform",
      href: "/#contact",
    },
  },
]

const WORK_PRIORITY = [
  "krafted-ai-shopify-app",
  "mintfit-ai-coaching",
  "curvetrace-bezier-detection",
  "sandoz-global-web-platform",
  "bsi-incident-reporting-platform",
]

const priorityBySlug = new Map(
  WORK_PRIORITY.map((slug, index) => [slug, index])
)

export const WORK = [...WORK_ITEMS].sort((left, right) => {
  const leftPriority = priorityBySlug.get(left.slug) ?? Number.MAX_SAFE_INTEGER
  const rightPriority = priorityBySlug.get(right.slug) ?? Number.MAX_SAFE_INTEGER

  return leftPriority - rightPriority
})

export function getWorkBySlug(slug) {
  return WORK.find((study) => study.slug === slug)
}

export const FEATURED_CASE_STUDIES = {
  hero: {
    ...WORK[0],
    id: WORK[0].slug,
    href: `/work/${WORK[0].slug}`,
    excerpt: WORK[0].summary,
  },
  more: WORK.slice(1).map((study) => ({
    ...study,
    id: study.slug,
    href: `/work/${study.slug}`,
    excerpt: study.summary,
  })),
}
