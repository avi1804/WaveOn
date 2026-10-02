import { IndustryItem } from "@/types";

export const industriesData: IndustryItem[] = [
  {
    id: "fintech",
    slug: "fintech",
    title: "Fintech & Financial Services",
    icon: "ShieldAlert",
    shortDesc: "Bank-grade security, real-time trading dashboards, and PCI-DSS compliant payment infrastructures.",
    overview: "We engineer resilient financial technology applications that balance microsecond execution speed with strict regulatory compliance. From institutional trading interfaces to consumer neo-banking portals, our architectures safeguard financial assets and user privacy.",
    painPointsSolved: [
      "Monolithic latency causing lost trades and compliance audit failures",
      "Vulnerability to injection attacks, CSRF exploits, and session hijacks",
      "Clunky identity verification (KYC/AML) causing high customer drop-off"
    ],
    keySolutions: [
      "Sub-100ms real-time WebSockets and virtualized high-density data tables",
      "Automated KYC/AML verification workflows with biometric verification",
      "End-to-end encrypted ledger syncing and automated reconciliation"
    ],
    caseStudyRef: "apex-fintech-platform"
  },
  {
    id: "healthcare",
    slug: "healthcare",
    title: "Healthcare & Life Sciences",
    icon: "HeartPulse",
    shortDesc: "HIPAA-compliant patient portals, telehealth consultation suites, and medical device dashboards.",
    overview: "In healthcare, software directly touches patient outcomes. We build HIPAA-compliant telehealth portals, electronic health record (EHR) integrations, and accessible clinical web tools that clinicians and patients trust.",
    painPointsSolved: [
      "Severe HIPAA penalties from unencrypted data storage and transmission",
      "Elderly and disabled patients unable to navigate inaccessible interfaces",
      "Disconnected siloed legacy hospital systems preventing patient care coordination"
    ],
    keySolutions: [
      "Browser-native encrypted WebRTC video visits requiring zero downloads",
      "WCAG 2.2 AA compliant typography, touch targets, and screen reader labels",
      "FHIR and HL7 standard API bridges connecting directly to major EHRs"
    ],
    caseStudyRef: "vitalcare-telehealth-portal"
  },
  {
    id: "ecommerce-retail",
    slug: "ecommerce-retail",
    title: "eCommerce & Retail",
    icon: "ShoppingBag",
    shortDesc: "High-conversion headless storefronts, omnichannel inventory sync, and sub-second checkout funnels.",
    overview: "Every 100ms of latency costs retail brands millions. We build headless commerce experiences that load in under 1 second, convert casual mobile scrollers into paying customers, and scale effortlessly through Black Friday traffic surges.",
    painPointsSolved: [
      "High mobile cart abandonment driven by sluggish 4+ second page loads",
      "Inflexible theme templates preventing marketing teams from launching campaigns",
      "Inventory desynchronization across digital stores and physical retail POS"
    ],
    keySolutions: [
      "Edge-rendered headless storefronts with instant product page transitions",
      "Streamlined 1-step checkout drawers supporting Apple Pay, Google Pay, and Klarna",
      "Real-time omnichannel inventory connectors with ERPs and 3PL fulfillment"
    ],
    caseStudyRef: "lumina-luxury-ecommerce"
  },
  {
    id: "saas-tech",
    slug: "saas-tech",
    title: "SaaS & Cloud Technology",
    icon: "Cloud",
    shortDesc: "Multi-tenant cloud architectures, self-serve onboarding wizards, and subscription monetization engines.",
    overview: "We help software founders and product leaders turn ambitious product concepts into scalable multi-tenant SaaS platforms. We specialize in intuitive onboarding UX, role-based team collaboration, and automated billing engines.",
    painPointsSolved: [
      "Complex setup flows causing trial users to churn before seeing product value",
      "Engineering teams bogged down building auth and billing instead of core features",
      "Database bottlenecks when large enterprise accounts run heavy reporting queries"
    ],
    keySolutions: [
      "Intuitive progressive onboarding flows reducing time-to-first-value to under 4 minutes",
      "Flexible Stripe Billing integration supporting usage tiers, seats, and custom invoices",
      "Tenant-partitioned database architectures with row-level security (RLS)"
    ],
    caseStudyRef: "cloudscale-saas-dashboard"
  },
  {
    id: "education-edtech",
    slug: "education-edtech",
    title: "Education & EdTech",
    icon: "GraduationCap",
    shortDesc: "Interactive learning management systems, live video classrooms, and automated grading pipelines.",
    overview: "Empower learners globally. We build interactive education platforms, virtual classrooms, and automated assessment systems that handle hundreds of thousands of concurrent students with zero server crashes.",
    painPointsSolved: [
      "Platform crashes during nationwide concurrent examination periods",
      "Lost student exam progress caused by intermittent school Wi-Fi disconnections",
      "Slow video buffering and lack of accessibility for students with disabilities"
    ],
    keySolutions: [
      "Local-first indexedDB answer autosaving ensuring exams survive connection drops",
      "Adaptive bitrate video streaming (HLS) with auto-generated multi-language captions",
      "High-throughput automated grading queues processing thousands of tests per minute"
    ],
    caseStudyRef: "edulearn-interactive-lms"
  },
  {
    id: "real-estate",
    slug: "real-estate",
    title: "Real Estate & PropTech",
    icon: "Building2",
    shortDesc: "Commercial MLS search engines, interactive vector GIS maps, and virtual 3D tour experiences.",
    overview: "Connecting property buyers, tenants, and brokers. We build high-speed commercial and residential property portals featuring live MLS/RETS feed synchronization, spatial GIS search, and virtual tour integrations.",
    painPointsSolved: [
      "Slow map marker clustering freezing the browser with thousands of properties",
      "Out-of-date listing data causing clients to inquire about sold inventory",
      "Poor mobile search UX making it difficult for on-the-go buyers to filter homes"
    ],
    keySolutions: [
      "Vector-tiled Mapbox GIS rendering 10,000+ interactive property markers smoothly",
      "Automated background MLS ingestion updating 80,000+ listings daily",
      "Touch-optimized search filters with instant URL bookmarking and sharing"
    ],
    caseStudyRef: "proptech-real-estate-crm"
  },
  {
    id: "logistics-supply-chain",
    slug: "logistics-supply-chain",
    title: "Logistics & Supply Chain",
    icon: "Truck",
    shortDesc: "Real-time fleet telematics, automated route optimization, and digital proof-of-delivery PWAs.",
    overview: "Transform complex freight and supply chains into streamlined digital command centers. We engineer real-time GPS tracking dashboards, driver companion apps, and automated dispatch engines that eliminate fuel waste.",
    painPointsSolved: [
      "Manual spreadsheet dispatching leading to suboptimal routes and missed delivery windows",
      "Zero real-time shipment visibility for end-customers causing support ticket floods",
      "Lost paper delivery receipts delaying billing and invoice settlement"
    ],
    keySolutions: [
      "Live telematics ingestion processing 2,000+ vehicle GPS pings per second",
      "Algorithmic route optimization calculating vehicle height, weight, and traffic constraints",
      "Offline-capable mobile web app (PWA) capturing digital sign-offs and photo proof"
    ],
    caseStudyRef: "fleetiq-logistics-tracker"
  },
  {
    id: "media-entertainment",
    slug: "media-entertainment",
    title: "Media & Entertainment",
    icon: "Film",
    shortDesc: "Low-latency video streaming, creator monetization portals, and high-concurrency editorial hubs.",
    overview: "Deliver broadcast-grade digital experiences. We engineer video-on-demand platforms, live streaming portals, and high-traffic editorial publications that serve millions of readers without downtime.",
    painPointsSolved: [
      "Video stutter and buffering on cellular networks causing immediate viewer drop-off",
      "Viral news spikes crashing CMS servers and degrading search rankings",
      "Complex app store subscription rejections and payment processing hurdles"
    ],
    keySolutions: [
      "Hardware-accelerated native video players with adaptive bitrate quality switching",
      "Edge-cached content delivery networks handling 100,000+ concurrent page hits",
      "Integrated Apple In-App Purchase and Google Play Billing pipelines"
    ],
    caseStudyRef: "nexus-media-streaming-app"
  },
  {
    id: "professional-services",
    slug: "professional-services",
    title: "Professional Services & Legal",
    icon: "Briefcase",
    shortDesc: "High-authority corporate web design, client onboarding portals, and automated document workflow suites.",
    overview: "For law firms, consultancies, and accounting practices, trust and prestige are everything. We design and engineer elegant corporate web experiences that establish instant authority and streamline client intake.",
    painPointsSolved: [
      "Outdated corporate websites failing to reflect true firm prestige and caliber",
      "Manual back-and-forth email scheduling and cumbersome paper intake documents",
      "Unsecured transmission of sensitive client discovery files and financial audits"
    ],
    keySolutions: [
      "Bespoke high-typography web design tailored to corporate prestige and trust",
      "Self-service client intake portals with automated calendar booking and e-signatures",
      "Encrypted client vaults for secure document sharing and audit trails"
    ],
    caseStudyRef: "apex-fintech-platform"
  },
  {
    id: "manufacturing-iot",
    slug: "manufacturing-iot",
    title: "Manufacturing & Industrial IoT",
    icon: "Factory",
    shortDesc: "Factory telemetry dashboards, predictive maintenance monitors, and B2B ordering catalogs.",
    overview: "Bridge the gap between physical factory floors and modern software. We build industrial monitoring dashboards, machine telemetry analyzers, and custom B2B wholesale ordering systems.",
    painPointsSolved: [
      "Unplanned machine downtime costing tens of thousands of dollars per hour",
      "Disjointed legacy SCADA systems lacking remote browser access for plant managers",
      "Clunky phone/fax B2B ordering creating order fulfillment mistakes"
    ],
    keySolutions: [
      "Live machine telemetry streams with automated anomaly alerting and thresholds",
      "Secure browser-accessible plant dashboards with role-based machine permissions",
      "Custom B2B ordering portals with tier-based wholesale pricing and bulk checkout"
    ],
    caseStudyRef: "fleetiq-logistics-tracker"
  }
];
