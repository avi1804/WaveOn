import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  // Build category
  {
    id: "custom-web-development",
    slug: "custom-web-development",
    category: "Build",
    title: "Custom Web Development",
    shortDescription: "Scalable, high-velocity web applications engineered with React, Next.js, Node.js, and TypeScript.",
    heroTagline: "Engineered for speed, built for scale, tailored to your exact business workflow.",
    longDescription: "We build bespoke web applications that eliminate technical debt and deliver ultra-responsive user experiences. From complex customer portals and multi-tenant platforms to high-throughput web apps, our senior engineers write modular, maintainable, and thoroughly tested code.",
    icon: "Code",
    deliverables: [
      "Custom responsive web application codebase (TypeScript/React)",
      "RESTful or GraphQL API architecture and client integration",
      "Full unit and integration test suite with CI/CD setup",
      "Comprehensive developer documentation and deployment runbooks",
      "100% intellectual property and code ownership transfer"
    ],
    features: [
      {
        title: "Full-Stack Architecture",
        description: "Robust frontends coupled with resilient microservices or modular serverless backends."
      },
      {
        title: "Sub-Second Performance",
        description: "Optimized critical rendering paths, intelligent caching, and near-instant initial paints."
      },
      {
        title: "Enterprise-Grade Security",
        description: "Strict input sanitization, CSRF protections, safe authentication, and zero-vulnerability dependencies."
      },
      {
        title: "Future-Proof Extensibility",
        description: "Clean domain boundaries designed to accommodate new features without structural rewrites."
      }
    ],
    approach: [
      { step: "01", title: "Architecture Blueprint", description: "Define data contracts, state management strategies, and system boundaries before code." },
      { step: "02", title: "Iterative Sprints", description: "Bi-weekly sprint demos deploying functional features directly to preview environments." },
      { step: "03", title: "Rigorous QA & Audit", description: "Automated regression testing, performance profiling, and accessibility verification." },
      { step: "04", title: "Production Cutover", description: "Zero-downtime deployment with health monitoring, telemetry, and rollout guarantees." }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Docker", "AWS"],
    relatedCaseStudySlug: "apex-fintech-platform",
    faqs: [
      {
        question: "Do we own all the source code upon completion?",
        answer: "Yes, 100%. All source code, design assets, and intellectual property are fully assigned to your business with no proprietary vendor lock-in."
      },
      {
        question: "How do your teams manage sprint communication?",
        answer: "You get a dedicated Slack/Teams channel, weekly recorded video standups, and bi-weekly live sprint reviews with working software demos."
      },
      {
        question: "What is your typical project timeline?",
        answer: "MVP deliveries typically range from 6 to 12 weeks, depending on system complexity and integration depth."
      }
    ]
  },
  {
    id: "web-design-ui-ux",
    slug: "web-design-ui-ux",
    category: "Build",
    title: "Web Design & UI/UX",
    shortDescription: "Conversion-centric UI/UX design, interactive prototypes, and atomic design systems.",
    heroTagline: "Visual elegance meets scientific conversion engineering.",
    longDescription: "Great design is measured by how effortlessly users accomplish their goals. We craft immersive digital experiences, intuitive interfaces, and scalable component systems that captivate visitors and transform them into loyal customers.",
    icon: "Palette",
    deliverables: [
      "Complete Figma design system with tokens, primitives, and responsive variants",
      "Interactive high-fidelity prototypes validated with user testing",
      "Comprehensive user flow diagrams and wireframe specifications",
      "Micro-interaction and motion design specifications",
      "WCAG 2.2 AA accessibility audit report"
    ],
    features: [
      {
        title: "Atomic Design Systems",
        description: "Reusable component libraries that ensure visual consistency across all product surfaces."
      },
      {
        title: "Data-Driven UX",
        description: "Information architecture and user flows engineered around actual behavior and intent."
      },
      {
        title: "Frictionless Conversion",
        description: "Intentional checkout, onboarding, and lead-generation flows that maximize conversion velocity."
      },
      {
        title: "Micro-Interactions",
        description: "Polished feedback states, loading skeletons, and subtle motion that humanize the interface."
      }
    ],
    approach: [
      { step: "01", title: "User Research & Heuristics", description: "Analyze user pain points, audit competitor patterns, and establish information architecture." },
      { step: "02", title: "Wireframing & Flows", description: "Map out low-fidelity journeys to validate hierarchy and interaction logic early." },
      { step: "03", title: "High-Fidelity Visuals", description: "Develop modern, accessible visual design with rich typography, tokens, and layouts." },
      { step: "04", title: "Developer Handoff", description: "Pixel-perfect specifications, token documentation, and interactive prototypes for engineering." }
    ],
    technologies: ["Figma", "Design Tokens", "Tailwind CSS", "Framer", "WCAG 2.2", "Radix UI", "Storybook"],
    relatedCaseStudySlug: "cloudscale-saas-dashboard",
    faqs: [
      {
        question: "Do you design for mobile first?",
        answer: "Always. We design natively for mobile viewports (360px-390px) first, ensuring touch targets and readability are optimal before scaling up to desktop."
      },
      {
        question: "Can we use our existing brand guidelines?",
        answer: "Absolutely. We adapt and translate your existing brand assets into modern, responsive digital design tokens and component libraries."
      }
    ]
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    category: "Build",
    title: "eCommerce Development",
    shortDescription: "High-conversion headless and custom eCommerce stores with Shopify Plus, WooCommerce, and custom checkout.",
    heroTagline: "Stores engineered to load instantly, convert higher, and scale without limits.",
    longDescription: "Modern consumers demand lightning-fast shopping experiences. We engineer headless and customized online stores with streamlined checkouts, customized product builders, omnichannel inventory synchronization, and blazing page load speeds.",
    icon: "ShoppingBag",
    deliverables: [
      "Custom headless or bespoke eCommerce store frontend and backend",
      "Secure payment gateway integrations (Stripe, PayPal, Apple Pay, Klarna)",
      "ERP, CRM, and real-time inventory management connectors",
      "One-page optimized checkout flow with abandoned cart recovery triggers",
      "Core Web Vitals green-light performance certification"
    ],
    features: [
      {
        title: "Headless Architecture",
        description: "Decouple frontend presentation from backend commerce engines for sub-second page transitions."
      },
      {
        title: "High-Converting Checkout",
        description: "Frictionless one-page and multi-step payment flows designed to eradicate cart abandonment."
      },
      {
        title: "Omnichannel Sync",
        description: "Unified inventory, order fulfillment, and customer data across digital and physical points of sale."
      },
      {
        title: "Custom Product Builders",
        description: "Dynamic product configurators, bundles, and custom subscription workflows."
      }
    ],
    approach: [
      { step: "01", title: "Catalog & Stack Discovery", description: "Audit SKU volume, payment pathways, tax requirements, and integration dependencies." },
      { step: "02", title: "Checkout & UX Wireframes", description: "Engineer intuitive shopping funnels and mobile-optimized cart drawers." },
      { step: "03", title: "Storefront Engineering", description: "Build modular product cards, faceted search filters, and blazing fast PDPs." },
      { step: "04", title: "Load Testing & Launch", description: "Simulate holiday traffic spikes, test payment webhooks, and orchestrate zero-downtime cutover." }
    ],
    technologies: ["Shopify Plus", "Next.js Commerce", "WooCommerce", "Stripe", "Algolia", "Tailwind CSS", "Redis"],
    relatedCaseStudySlug: "lumina-luxury-ecommerce",
    faqs: [
      {
        question: "Which eCommerce platform is best for our business?",
        answer: "We recommend Shopify Plus for rapid scale and frictionless maintenance, or custom Next.js headless commerce when unique product configurators and bespoke logic are required."
      },
      {
        question: "How do you ensure zero downtime during catalog migrations?",
        answer: "We utilize automated dual-write scripts and phased DNS cutovers to migrate customer records, orders, and products without disruption."
      }
    ]
  },
  {
    id: "mobile-app-development",
    slug: "mobile-app-development",
    category: "Build",
    title: "Mobile App Development",
    shortDescription: "Native-feel cross-platform iOS and Android applications developed using React Native and Flutter.",
    heroTagline: "Single codebase efficiency, true native performance, and delightful mobile gestures.",
    longDescription: "Reach users on their most personal devices. We create cross-platform mobile apps using React Native and Flutter that look, feel, and perform like native Swift and Kotlin applications—cutting time to market and development costs in half.",
    icon: "Smartphone",
    deliverables: [
      "Production-ready iOS and Android app bundles (App Store & Google Play)",
      "Unified React Native / Flutter cross-platform source codebase",
      "Push notification infrastructure and background synchronization service",
      "Offline data caching and encrypted local storage architecture",
      "Automated CI/CD deployment pipelines for TestFlight and Play Console"
    ],
    features: [
      {
        title: "60 FPS Fluidity",
        description: "Hardware-accelerated animations, smooth gestures, and responsive native UI bridges."
      },
      {
        title: "Offline-First Support",
        description: "Seamless offline capability with background sync when internet connection is restored."
      },
      {
        title: "Hardware Integration",
        description: "Deep device integration with biometrics (FaceID/TouchID), camera, geolocation, and Bluetooth."
      },
      {
        title: "Automated Store Submissions",
        description: "Complete handling of Apple App Store and Google Play compliance, metadata, and reviews."
      }
    ],
    approach: [
      { step: "01", title: "Mobile Architecture", description: "Design offline caching models, navigation hierarchies, and native API bridges." },
      { step: "02", title: "Sprint Prototypes", description: "Provide weekly interactive TestFlight and APK builds for real device testing." },
      { step: "03", title: "Device Matrix Testing", description: "Validate across 40+ physical iOS and Android form factors, screen ratios, and OS versions." },
      { step: "04", title: "Store Submission & Launch", description: "Manage privacy declarations, store assets, screenshots, and review approval." }
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Expo", "Swift", "Kotlin", "Firebase", "App Store Connect"],
    relatedCaseStudySlug: "nexus-media-streaming-app",
    faqs: [
      {
        question: "Should we build cross-platform or separate native apps?",
        answer: "React Native and Flutter provide native 60fps performance while sharing up to 90% of code across iOS and Android, dramatically reducing build and maintenance costs."
      },
      {
        question: "Do you handle App Store review rejections?",
        answer: "Yes, our team manages the entire submission process until your app is officially approved and live on both stores."
      }
    ]
  },
  {
    id: "wordpress-development",
    slug: "wordpress-development",
    category: "Build",
    title: "WordPress Development",
    shortDescription: "Custom Gutenberg block development, high-performance themes, and headless WordPress architectures.",
    heroTagline: "Enterprise WordPress: lightning fast, hardened security, and intuitive editorial freedom.",
    longDescription: "We transform WordPress from a sluggish blogging tool into an enterprise-grade content management platform. Using custom Gutenberg blocks, modular PHP/React themes, and headless decoupled setups, we give marketing teams total editorial control without sacrificing speed or security.",
    icon: "Layers",
    deliverables: [
      "Custom lightweight WordPress theme with zero bloated plugins",
      "Bespoke Gutenberg block library matching your brand design system",
      "Hardened security configuration with 2FA and brute-force protection",
      "Staging-to-production deployment workflow with Git version control",
      "Editor training documentation and video walkthroughs"
    ],
    features: [
      {
        title: "Bespoke Gutenberg Blocks",
        description: "Native drag-and-drop editorial blocks tailored precisely to your marketing layouts."
      },
      {
        title: "Clean, Lightweight Code",
        description: "Zero heavy site-builders (Elementor/Divi). Hand-coded semantic markup achieving 95+ PageSpeed scores."
      },
      {
        title: "Hardened Security",
        description: "Custom login URLs, automated malware scanning, XML-RPC disabled, and strict file permissions."
      },
      {
        title: "Headless Decoupling",
        description: "Option to use WordPress purely as a headless API with a Next.js/React frontend."
      }
    ],
    approach: [
      { step: "01", title: "Content Architecture", description: "Structure custom post types, taxonomies, and editorial field groups." },
      { step: "02", title: "Theme & Block Coding", description: "Develop lightweight, accessible custom Gutenberg blocks using React." },
      { step: "03", title: "Migration & SEO Preservation", description: "Preserve 301 redirects, existing backlinks, metadata, and media libraries." },
      { step: "04", title: "Cache Optimization", description: "Implement object caching (Redis), edge CDN rules, and asset minification." }
    ],
    technologies: ["WordPress", "Gutenberg / React", "PHP 8.3", "WP GraphQL", "MySQL", "Redis", "Cloudflare"],
    relatedCaseStudySlug: "proptech-real-estate-crm",
    faqs: [
      {
        question: "Can our non-technical team edit content easily?",
        answer: "Yes, our custom Gutenberg blocks give your content team visual drag-and-drop freedom without the risk of breaking layouts or fonts."
      },
      {
        question: "How do you protect WordPress against security vulnerabilities?",
        answer: "We avoid bloated third-party plugins, maintain automated core and plugin patching, enforce web application firewalls (WAF), and disable unused API vectors."
      }
    ]
  },
  {
    id: "custom-software-saas",
    slug: "custom-software-saas",
    category: "Build",
    title: "Custom Software & SaaS",
    shortDescription: "Multi-tenant SaaS products, internal operations tools, and automated enterprise workflows.",
    heroTagline: "Turn complex business operations into proprietary digital advantages.",
    longDescription: "When off-the-shelf software falls short, we design and build custom software and multi-tenant SaaS products. From subscription billing and role-based permissions to complex data pipelines, we build software that drives exponential operational efficiency.",
    icon: "Cpu",
    deliverables: [
      "Production-ready multi-tenant SaaS application architecture",
      "Role-Based Access Control (RBAC) and team collaboration modules",
      "Automated recurring subscription billing with Stripe Billing",
      "Comprehensive REST/GraphQL API with Swagger/OpenAPI documentation",
      "Automated database migrations, backup snapshots, and failover runbooks"
    ],
    features: [
      {
        title: "Multi-Tenant Isolation",
        description: "Data isolation and tenant security designed for enterprise compliance and peace of mind."
      },
      {
        title: "Subscription Billing",
        description: "Tiered pricing, seat-based billing, usage meters, proration, and automated invoicing."
      },
      {
        title: "Complex Role Permissions",
        description: "Granular access controls, organization hierarchies, and audit logging."
      },
      {
        title: "Real-Time Collaboration",
        description: "WebSocket integration for live multi-user updates, notifications, and activity streams."
      }
    ],
    approach: [
      { step: "01", title: "Domain Modeling", description: "Map entities, tenant boundaries, state machines, and business logic requirements." },
      { step: "02", title: "Core MVP Build", description: "Engineer the critical multi-tenant foundation, auth pipelines, and core value flow." },
      { step: "03", title: "Billing & Integrations", description: "Hook up Stripe, Webhooks, transactional notifications, and customer success telemetry." },
      { step: "04", title: "Scaling & Hardening", description: "Optimize database indexes, stress test concurrency, and establish disaster recovery." }
    ],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Stripe Billing", "Docker", "Redis"],
    relatedCaseStudySlug: "fleetiq-logistics-tracker",
    faqs: [
      {
        question: "How do you handle multi-tenant data security?",
        answer: "We use tenant-scoped database queries, strict row-level security policies (RLS), and automated integration tests that prevent cross-tenant data leaks."
      },
      {
        question: "Can this software integrate with our existing legacy systems?",
        answer: "Yes, we build dedicated API adaptors and webhooks to synchronize data smoothly with your legacy ERPs, CRMs, or accounting tools."
      }
    ]
  },

  // Grow category
  {
    id: "seo-services",
    slug: "seo-services",
    category: "Grow",
    title: "SEO Services",
    shortDescription: "Technical SEO audits, search intent content architecture, Core Web Vitals optimization, and high-authority link acquisition.",
    heroTagline: "Dominate search rankings with technical precision and intent-driven content.",
    longDescription: "Search engine optimization is no longer about keyword stuffing; it is about technical excellence, lightning-fast rendering, and answering search intent better than competitors. We audit and rebuild your search footprint to generate sustainable, high-intent organic revenue.",
    icon: "Search",
    deliverables: [
      "In-depth Technical SEO & Core Web Vitals diagnostic audit",
      "Semantic keyword mapping and search intent content roadmap",
      "JSON-LD structured data architecture (Organization, Breadcrumb, Product, FAQ)",
      "Clean crawl budget optimization and robots.txt / sitemap engineering",
      "Monthly keyword ranking, organic traffic, and conversion attribution reports"
    ],
    features: [
      {
        title: "Technical SEO Prowess",
        description: "Eliminate crawl errors, redirect loops, duplicate content, and JavaScript rendering blockers."
      },
      {
        title: "Core Web Vitals Supremacy",
        description: "Optimize LCP, CLS, and INP metrics to earn Google's ranking preference signals."
      },
      {
        title: "Semantic Content Architecture",
        description: "Topic clusters and hub-and-spoke content structures that establish topical authority."
      },
      {
        title: "Structured Data Implementation",
        description: "Rich snippets, review stars, FAQs, and breadcrumbs that boost SERP click-through rates."
      }
    ],
    approach: [
      { step: "01", title: "Comprehensive Audit", description: "Scan indexation status, mobile usability, site speed, and competitor keyword gaps." },
      { step: "02", title: "Technical Remediation", description: "Fix site architecture issues, schema bugs, and Core Web Vitals bottlenecks." },
      { step: "03", title: "Intent-Based Content", description: "Produce authoritative landing pages and guides answering exact commercial intent queries." },
      { step: "04", title: "Measurement & Iteration", description: "Track organic impression share, keyword positions, and bottom-line lead conversions." }
    ],
    technologies: ["Google Search Console", "Ahrefs", "Semrush", "Screaming Frog", "Lighthouse", "Schema.org", "Next.js SEO"],
    relatedCaseStudySlug: "vitalcare-telehealth-portal",
    faqs: [
      {
        question: "How long until we see measurable SEO results?",
        answer: "Technical fixes often generate indexation improvements within 3 to 6 weeks, while substantive keyword ranking gains typically compound over 3 to 6 months."
      },
      {
        question: "Do you guarantee #1 rankings on Google?",
        answer: "No reputable agency guarantees specific ranking spots due to search algorithm dynamics, but we guarantee strict adherence to white-hat engineering best practices that deliver sustained traffic growth."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    category: "Grow",
    title: "Digital Marketing",
    shortDescription: "Paid search (PPC), social ads, marketing automation, and conversion rate optimization (CRO).",
    heroTagline: "Data-driven marketing campaigns that turn clicks into measurable revenue.",
    longDescription: "Stop wasting marketing budgets on vanity metrics. We design and manage high-ROI performance marketing campaigns across Google Search, LinkedIn, and Meta, coupled with rigorous A/B landing page testing to maximize your customer acquisition economics.",
    icon: "TrendingUp",
    deliverables: [
      "Custom performance advertising campaigns on Google Ads & Meta/LinkedIn",
      "High-converting landing page designs and copy variants",
      "Full analytics tracking setup with server-side Google Tag Manager",
      "Automated email nurture sequences and lead scoring workflows",
      "Transparent bi-weekly CAC, ROAS, and pipeline attribution reporting"
    ],
    features: [
      {
        title: "High-Intent Paid Search",
        description: "Capture buyers at the moment of peak intent with hyper-targeted Google search ads."
      },
      {
        title: "Precision B2B Social",
        description: "Account-based marketing (ABM) and targeted sponsored campaigns on LinkedIn and Meta."
      },
      {
        title: "Conversion Rate Optimization",
        description: "Iterative split-testing of headlines, CTAs, forms, and value propositions."
      },
      {
        title: "First-Party Attribution",
        description: "Server-side tracking and conversion APIs that provide crystal-clear ROI visibility."
      }
    ],
    approach: [
      { step: "01", title: "Persona & Funnel Mapping", description: "Identify customer friction points, target demographics, and cost-per-acquisition goals." },
      { step: "02", title: "Creative & Landing Pages", description: "Design dedicated high-velocity landing pages with compelling value propositions." },
      { step: "03", title: "Campaign Launch & Calibration", description: "Activate tightly grouped ad sets with manual bid calibrations and negative keyword lists." },
      { step: "04", title: "CRO & Scale", description: "Analyze heatmaps, run statistical A/B tests, and scale budgets into winning campaigns." }
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Campaign Manager", "Google Tag Manager", "HubSpot", "PostHog"],
    relatedCaseStudySlug: "edulearn-interactive-lms",
    faqs: [
      {
        question: "What minimum ad spend do you recommend?",
        answer: "We typically recommend a minimum monthly ad budget of $3,000 to generate sufficient statistical data for rapid campaign calibration."
      },
      {
        question: "How do we track where our leads come from?",
        answer: "We configure server-side conversion tracking and first-party attribution parameters so every lead is tied directly to its origin campaign."
      }
    ]
  },
  {
    id: "maintenance-support",
    slug: "maintenance-support",
    category: "Grow",
    title: "Maintenance & Support",
    shortDescription: "24/7 uptime monitoring, security patching, dependency upgrades, and ongoing feature development.",
    heroTagline: "Proactive care that keeps your digital systems secure, fast, and constantly improving.",
    longDescription: "Web applications and websites need continuous care to maintain peak performance and bulletproof security. Our maintenance retainers provide dedicated engineer hours for proactive dependency updates, bug fixes, automated backups, and monthly performance audits.",
    icon: "ShieldCheck",
    deliverables: [
      "24/7 automated uptime and latency monitoring with incident paging",
      "Monthly core framework, library, and security patch upgrades",
      "Automated off-site database and asset backups with test restores",
      "Dedicated developer hours for ongoing feature enhancements and UX fixes",
      "Detailed monthly health, security, and performance report"
    ],
    features: [
      {
        title: "Proactive Security Patching",
        description: "Continuous vulnerability scanning and immediate patching of critical security advisories."
      },
      {
        title: "Fast SLA Incident Response",
        description: "Guaranteed under-1-hour response times for critical production outages."
      },
      {
        title: "Speed Preservation",
        description: "Ongoing audits to prevent asset bloat and keep Core Web Vitals consistently green."
      },
      {
        title: "Flexible Retainer Hours",
        description: "Unused support hours roll over or can be used for new feature development."
      }
    ],
    approach: [
      { step: "01", title: "Codebase Onboarding", description: "Conduct initial security, dependency, and architecture audit of your repository." },
      { step: "02", title: "Monitoring Setup", description: "Deploy synthetic uptime probes, error telemetry (Sentry), and performance alerts." },
      { step: "03", title: "Scheduled Maintenance", description: "Run non-breaking weekly and monthly updates in isolated staging environments." },
      { step: "04", title: "Continuous Delivery", description: "Ship small bug fixes, UX refinements, and new features on demand." }
    ],
    technologies: ["Sentry", "BetterStack", "GitHub Actions", "Docker", "AWS CloudWatch", "Dependabot", "Vercel"],
    relatedCaseStudySlug: "apex-fintech-platform",
    faqs: [
      {
        question: "What is your emergency response SLA?",
        answer: "For critical production outages (Severity 1), our on-call engineering team responds within 60 minutes, 24/7/365."
      },
      {
        question: "Can we use maintenance hours for building new features?",
        answer: "Yes, retainer hours are completely flexible and can be allocated to feature additions, UI redesigns, or technical optimizations."
      }
    ]
  }
];
