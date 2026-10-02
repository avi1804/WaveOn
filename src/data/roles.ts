import { DeveloperRole } from "@/types";

export const rolesData: DeveloperRole[] = [
  // Front End
  {
    id: "react-developers",
    slug: "react-developers",
    title: "React Developers",
    category: "Front End",
    hourlyRate: "$45 – $75/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire vetted senior React engineers proficient in TypeScript, Redux Toolkit, Zustand, and complex reactive UIs.",
    fullOverview: "Scale your frontend engineering bandwidth with dedicated React developers who write maintainable, type-safe, and high-performance user interfaces. Our developers excel in modern React patterns (hooks, context, concurrent features), state machines, and micro-frontend architectures.",
    skills: ["React 18+", "TypeScript", "Redux Toolkit", "Zustand", "Tailwind CSS", "React Query", "Jest & RTL", "Webpack / Vite"],
    coreProficiencies: [
      "Custom component library architecture with Radix UI and Tailwind CSS",
      "High-throughput client-side state management with Zustand & TanStack Query",
      "Complex form validation, dynamic field arrays, and accessibility compliance",
      "Performance tuning: memoization, virtualized tables, and bundle size reduction"
    ],
    deliverables: [
      "Modular, documented React component trees with strict TypeScript typings",
      "Unit and integration test suites covering critical user flows",
      "Optimized production build configs with code-splitting and asset caching",
      "Direct participation in daily standups and sprint planning"
    ],
    engagementFlow: [
      { step: 1, title: "Requirement Mapping", description: "Define your technical stack, seniority criteria, timezone needs, and sprint goals." },
      { step: 2, title: "Candidate Hand-Pick", description: "Review 2–3 pre-vetted senior profiles matched precisely to your technical requirements within 48 hours." },
      { step: 3, title: "Technical Interview", description: "Conduct a 45-minute live architecture or coding session with candidate developers." },
      { step: 4, title: "2-Week Risk-Free Trial", description: "Start the engagement with full confidence under our 14-day satisfaction guarantee." }
    ],
    faqs: [
      {
        question: "How quickly can a React developer start on our project?",
        answer: "Our pre-vetted engineers are available to integrate into your Slack and GitHub repositories within 48 to 72 hours of contract agreement."
      },
      {
        question: "What timezone do your developers operate in?",
        answer: "We guarantee a minimum of 4 hours of live working overlap with US Eastern (EST), Central European (CET), or your preferred local business hours."
      }
    ]
  },
  {
    id: "nextjs-developers",
    slug: "nextjs-developers",
    title: "Next.js Developers",
    category: "Front End",
    hourlyRate: "$50 – $80/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire expert Next.js developers specializing in Server Components, App Router, ISR, and blazing SEO-driven web apps.",
    fullOverview: "Build enterprise-grade web applications that achieve perfect Lighthouse scores and organic search supremacy. Our Next.js developers master the App Router architecture, Server Actions, Incremental Static Regeneration (ISR), and edge computing.",
    skills: ["Next.js 14+", "React Server Components", "TypeScript", "Vercel Edge", "Tailwind CSS", "GraphQL", "Prisma", "NextAuth"],
    coreProficiencies: [
      "App Router migrations from legacy Pages Router or SPA architectures",
      "Hybrid rendering strategy: SSR, SSG, and streaming Server Components",
      "Edge caching, image optimization pipelines, and Core Web Vitals perfection",
      "Full-stack Next.js applications with Server Actions and PostgreSQL"
    ],
    deliverables: [
      "Turnkey Next.js application with zero Cumulative Layout Shift",
      "Automated Vercel or AWS Amplify deployment pipelines",
      "Comprehensive Open Graph and Schema.org metadata integration",
      "Server-side error telemetry and performance logging"
    ],
    engagementFlow: [
      { step: 1, title: "Scope Review", description: "Assess whether your app requires SSR, SSG, or edge streaming architecture." },
      { step: 2, title: "Engineer Matching", description: "Select from engineers with verified experience deploying production Next.js platforms." },
      { step: 3, title: "Onboarding Sprint", description: "Integrate into your Git workflow, CI pipelines, and task boards." },
      { step: 4, title: "Continuous Velocity", description: "Bi-weekly sprint deliveries with transparent tracking and code reviews." }
    ],
    faqs: [
      {
        question: "Can your Next.js developers help migrate our existing React app?",
        answer: "Yes, we have executed dozens of seamless migrations from Create React App or Vite to Next.js without disrupting active user traffic."
      },
      {
        question: "Do you have experience with self-hosted Next.js (Docker/AWS)?",
        answer: "Absolutely. While Vercel is great, we routinely containerize Next.js with Docker and deploy to AWS ECS, Kubernetes, and DigitalOcean."
      }
    ]
  },
  {
    id: "vuejs-developers",
    slug: "vuejs-developers",
    title: "Vue.js Developers",
    category: "Front End",
    hourlyRate: "$45 – $70/hr",
    experienceLevel: "Senior (4+ yrs avg)",
    shortSummary: "Hire skilled Vue 3 and Nuxt.js developers experienced in Composition API, Pinia, and performant web portals.",
    fullOverview: "Accelerate your frontend roadmap with talented Vue.js engineers who leverage Vue 3, the Composition API, Pinia, and Nuxt 3 to build lean, reactive, and maintainable enterprise web applications.",
    skills: ["Vue 3", "Nuxt 3", "TypeScript", "Pinia", "Vite", "Tailwind CSS", "Vue Router", "Vitest"],
    coreProficiencies: [
      "Composition API refactoring and custom composable architecture",
      "SSR and static site generation utilizing Nuxt 3",
      "Enterprise state synchronization with Pinia stores",
      "Complex dashboard charting and data visualization"
    ],
    deliverables: [
      "Clean Vue 3 single-file component architecture",
      "Type-safe composables and automated unit tests",
      "Optimized bundle size and lightning-fast HMR configuration",
      "Daily communication in your project management tools"
    ],
    engagementFlow: [
      { step: 1, title: "Skill Specification", description: "Clarify Vue 2 legacy maintenance vs. Vue 3 / Nuxt 3 requirements." },
      { step: 2, title: "Candidate Introduction", description: "Review vetted senior Vue engineers with strong TypeScript background." },
      { step: 3, title: "Live Interview", description: "Direct 1-on-1 interview with your internal tech leads." },
      { step: 4, title: "Immediate Start", description: "Begin with a 2-week risk-free evaluation period." }
    ],
    faqs: [
      {
        question: "Can your developers migrate our Vue 2 codebase to Vue 3?",
        answer: "Yes, we specialize in phased Vue 2 to Vue 3 migrations using the migration build, ensuring uninterrupted production operation."
      }
    ]
  },
  {
    id: "angular-developers",
    slug: "angular-developers",
    title: "Angular Developers",
    category: "Front End",
    hourlyRate: "$45 – $75/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire enterprise Angular developers skilled in RxJS, NgRx, standalone components, and large-scale enterprise suites.",
    fullOverview: "For large enterprise platforms, Angular provides unmatched structure and reliability. Our Angular engineers build large-scale web applications utilizing modern standalone components, signals, RxJS reactive patterns, and strict NgRx state management.",
    skills: ["Angular 17+", "TypeScript", "RxJS", "NgRx", "Signals", "Angular Material", "Karma & Jasmine", "Nx Monorepo"],
    coreProficiencies: [
      "Nx monorepo management for multi-team enterprise environments",
      "Reactive architectures utilizing RxJS pipelines and Angular Signals",
      "Micro-frontend module federation with Angular",
      "Enterprise RBAC and complex hierarchical data tables"
    ],
    deliverables: [
      "Strictly typed Angular modules and standalone components",
      "Comprehensive unit test coverage and E2E Cypress specs",
      "Enterprise design system implementation",
      "Sprint velocity reporting and documentation"
    ],
    engagementFlow: [
      { step: 1, title: "Consultation", description: "Identify Angular version, architecture patterns, and team needs." },
      { step: 2, title: "Profile Matching", description: "Meet senior Angular architects within 48 hours." },
      { step: 3, title: "Tech Validation", description: "Assess coding standards, RxJS understanding, and architecture experience." },
      { step: 4, title: "Kickoff", description: "Seamless integration into your corporate Git and Jira workflows." }
    ],
    faqs: [
      {
        question: "Are your developers familiar with the latest Angular Signals API?",
        answer: "Yes, our engineers stay at the cutting edge of Angular 17/18, leveraging Signals for fine-grained reactivity and zoneless performance."
      }
    ]
  },

  // Back End
  {
    id: "nodejs-developers",
    slug: "nodejs-developers",
    title: "Node.js Developers",
    category: "Back End",
    hourlyRate: "$50 – $80/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire seasoned Node.js backend engineers expert in NestJS, Express, microservices, and asynchronous event streams.",
    fullOverview: "Power your applications with high-throughput, low-latency backend architectures. Our Node.js developers architect fault-tolerant APIs, WebSocket servers, microservices, and asynchronous message queues capable of handling millions of concurrent operations.",
    skills: ["Node.js", "TypeScript", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "Kafka / RabbitMQ", "Docker"],
    coreProficiencies: [
      "Modular NestJS enterprise backends with dependency injection",
      "High-concurrency RESTful and GraphQL API design with OpenAPI docs",
      "Distributed background processing with BullMQ and Redis",
      "Zero-trust security: JWT, OAuth2, rate-limiting, and encryption"
    ],
    deliverables: [
      "Clean, scalable TypeScript backend services",
      "Comprehensive Swagger / OpenAPI contract documentation",
      "Automated CI/CD integration and Docker container recipes",
      "Database migration scripts with zero-downtime rollbacks"
    ],
    engagementFlow: [
      { step: 1, title: "Architecture Alignment", description: "Define database schemas, expected throughput, and third-party integrations." },
      { step: 2, title: "Senior Matching", description: "Interview senior backend engineers with proven distributed systems experience." },
      { step: 3, title: "Codebase Handover", description: "Rapid ramp-up with your existing repository and local environments." },
      { step: 4, title: "Sprint Execution", description: "Transparent Agile sprints with clean code reviews and PR sign-offs." }
    ],
    faqs: [
      {
        question: "Do your Node.js developers write automated tests?",
        answer: "Every single backend endpoint is backed by integration tests using Jest or Supertest before it enters production."
      }
    ]
  },
  {
    id: "laravel-developers",
    slug: "laravel-developers",
    title: "Laravel Developers",
    category: "Back End",
    hourlyRate: "$40 – $65/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire elite Laravel PHP developers experienced in Eloquent ORM, Livewire, Inertia.js, and multi-tenant SaaS systems.",
    fullOverview: "Laravel is one of the most productive frameworks in software engineering. Our Laravel developers build robust SaaS platforms, eCommerce APIs, and custom CRM systems utilizing modern PHP 8.3, Laravel 11, Inertia.js, and queue workers.",
    skills: ["Laravel 11", "PHP 8.3", "Inertia.js", "Livewire", "MySQL / PostgreSQL", "Redis", "Docker / Sail", "Stripe Cashier"],
    coreProficiencies: [
      "Multi-tenant SaaS architectures with automated schema partitioning",
      "Inertia.js integrations combining Laravel backends with modern React or Vue frontends",
      "Complex asynchronous queues, Horizon monitoring, and cron schedulers",
      "Custom payment processing with Stripe Cashier and automated billing"
    ],
    deliverables: [
      "Strictly typed PHP 8.3 / Laravel codebase following PSR standards",
      "Automated Pest / PHPUnit test suites",
      "Seeded database migrations and comprehensive data factories",
      "Production-ready deployment scripts for Forge, Vapor, or Docker"
    ],
    engagementFlow: [
      { step: 1, title: "Discovery", description: "Identify feature requirements, database complexity, and API dependencies." },
      { step: 2, title: "Vetted Matches", description: "Review portfolios of developers who have launched successful commercial SaaS apps." },
      { step: 3, title: "Direct Interview", description: "Engage in a live technical walkthrough of real code samples." },
      { step: 4, title: "Active Sprinting", description: "Begin shipping features with full source access and daily communications." }
    ],
    faqs: [
      {
        question: "Do your developers build full-stack Laravel apps with Inertia.js?",
        answer: "Yes, we frequently build full-stack applications with Laravel and Inertia.js paired with React or Vue for single-page app responsiveness with server-side simplicity."
      }
    ]
  },
  {
    id: "python-developers",
    slug: "python-developers",
    title: "Python Developers",
    category: "Back End",
    hourlyRate: "$50 – $85/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire expert Python engineers for Django, FastAPI, data pipelines, web scrapers, and AI/LLM integrations.",
    fullOverview: "Harness the power of Python for high-performance microservices, data processing, and AI integrations. Our Python developers build asynchronous APIs with FastAPI, comprehensive web portals with Django, and intelligent workflows integrating OpenAI and LangChain.",
    skills: ["Python 3.12", "FastAPI", "Django", "PostgreSQL", "Celery", "Pandas", "LangChain / OpenAI", "PyTest", "Docker"],
    coreProficiencies: [
      "High-speed asynchronous REST APIs with FastAPI and Pydantic validation",
      "Enterprise Django web portals with robust ORM and admin management",
      "LLM integrations: RAG pipelines, vector embeddings, and LangChain agents",
      "Distributed data ingestion and ETL processing with Celery"
    ],
    deliverables: [
      "Production-ready Python service containerized with Docker",
      "Automated PyTest test suite with >85% code coverage",
      "Clean Pydantic data schemas and Swagger docs",
      "Full IP ownership and comprehensive architecture diagrams"
    ],
    engagementFlow: [
      { step: 1, title: "Project Scope", description: "Define whether the role is backend API, data engineering, or AI/ML integration." },
      { step: 2, title: "Profile Selection", description: "Receive 2–3 curated senior resumes with verified GitHub histories." },
      { step: 3, title: "Technical Chat", description: "Validate problem-solving ability, algorithmic thinking, and architecture." },
      { step: 4, title: "Team Integration", description: "Start the 2-week risk-free trial." }
    ],
    faqs: [
      {
        question: "Can your Python developers help integrate AI/LLM capabilities into our app?",
        answer: "Yes, our engineers frequently integrate OpenAI, Claude, LangChain, and vector databases (Pinecone, pgvector) to build semantic search and AI assistants."
      }
    ]
  },
  {
    id: "full-stack-developers",
    slug: "full-stack-developers",
    title: "Full Stack Developers",
    category: "Back End",
    hourlyRate: "$50 – $80/hr",
    experienceLevel: "Senior (6+ yrs avg)",
    shortSummary: "Hire versatile senior full-stack engineers fluent in React, Node.js, TypeScript, PostgreSQL, and cloud deployments.",
    fullOverview: "Need end-to-end feature ownership? Our senior full-stack engineers design databases, craft responsive user interfaces, engineer resilient APIs, and orchestrate CI/CD pipelines—delivering complete, functional products from concept to production.",
    skills: ["React / Next.js", "Node.js / NestJS", "TypeScript", "PostgreSQL", "Tailwind CSS", "Docker", "AWS / Vercel", "GraphQL"],
    coreProficiencies: [
      "End-to-end feature development: schema -> API -> UI -> deployment",
      "Full TypeScript stack eliminating data contract mismatches",
      "Database schema design, indexing, and migration management",
      "Cloud infrastructure provisioning and automated deployment workflows"
    ],
    deliverables: [
      "Turnkey full-stack web application with complete documentation",
      "End-to-end Cypress or Playwright test suites",
      "Automated CI/CD pipelines for staging and production",
      "Active team leadership and architectural mentorship"
    ],
    engagementFlow: [
      { step: 1, title: "Stack Audit", description: "Map out your full technology stack and key technical milestones." },
      { step: 2, title: "Select Candidates", description: "Review full-stack developers with both strong UI aesthetics and backend rigor." },
      { step: 3, title: "Live System Design", description: "Conduct a system architecture interview with the candidate." },
      { step: 4, title: "Launch Engagement", description: "Begin sprinting with 14 days of risk-free evaluation." }
    ],
    faqs: [
      {
        question: "Are your full-stack developers equally proficient on frontend and backend?",
        answer: "Yes, we test our full-stack engineers rigorously across both UI engineering (responsiveness, accessibility) and backend fundamentals (database indexing, API security)."
      }
    ]
  },

  // CMS & eCommerce
  {
    id: "wordpress-developers",
    slug: "wordpress-developers",
    title: "WordPress Developers",
    category: "CMS & eCommerce",
    hourlyRate: "$35 – $60/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire WordPress specialists for custom Gutenberg blocks, theme development, WooCommerce, and speed optimization.",
    fullOverview: "Avoid generic plugin clutter. Our WordPress developers code custom, lightweight themes from scratch, build bespoke Gutenberg block libraries in React, and optimize database queries to make WordPress fly with sub-second load times.",
    skills: ["WordPress", "Gutenberg (React)", "PHP 8+", "WooCommerce", "MySQL", "ACF Pro", "WP-CLI", "Tailwind CSS"],
    coreProficiencies: [
      "Custom Gutenberg block creation with React and native WordPress APIs",
      "Plugin-free custom theme engineering achieving 95+ PageSpeed scores",
      "WooCommerce customization, custom checkout funnels, and gateway integrations",
      "Security hardening, automated backups, and database query profiling"
    ],
    deliverables: [
      "Clean, modular WordPress theme with zero bloated page builders",
      "Bespoke Gutenberg block collection matching your design tokens",
      "Complete staging-to-live Git deployment workflow",
      "Editor training videos and admin usability documentation"
    ],
    engagementFlow: [
      { step: 1, title: "Requirements Gathering", description: "Define whether you need a new theme, block library, or WooCommerce build." },
      { step: 2, title: "Expert Matching", description: "Meet senior WordPress engineers with verified theme portfolios." },
      { step: 3, title: "Code Review", description: "Inspect past theme repositories and security practices." },
      { step: 4, title: "Sprint Onboarding", description: "Begin work with our 2-week risk-free trial." }
    ],
    faqs: [
      {
        question: "Do you use Elementor or Divi?",
        answer: "No. We hand-code custom themes and Gutenberg blocks to guarantee exceptional performance, security, and long-term maintainability."
      }
    ]
  },
  {
    id: "shopify-developers",
    slug: "shopify-developers",
    title: "Shopify Developers",
    category: "CMS & eCommerce",
    hourlyRate: "$45 – $70/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire Shopify Plus developers for custom Liquid themes, private apps, checkout extensions, and headless storefronts.",
    fullOverview: "Maximize your eCommerce conversion rates with dedicated Shopify engineers. We build custom Liquid themes, Shopify Functions, Checkout Extensibility modules, and headless Next.js storefronts that scale effortlessly during Black Friday peak traffic.",
    skills: ["Shopify Plus", "Liquid", "Hydrogen / Next.js", "Shopify Functions", "GraphQL Storefront API", "JavaScript", "Tailwind CSS"],
    coreProficiencies: [
      "Custom Liquid theme development following Shopify 2.0 section architecture",
      "Checkout Extensibility and custom discount/validation Shopify Functions",
      "Private app engineering connecting ERPs, 3PL fulfillment, and custom CRMs",
      "Headless commerce utilizing Hydrogen or Next.js Commerce"
    ],
    deliverables: [
      "Pixel-perfect, mobile-first Shopify theme engineered for high conversions",
      "Custom section settings allowing marketing teams full visual autonomy",
      "Automated theme deployment using Shopify CLI and GitHub Actions",
      "Speed optimization achieving green Core Web Vitals"
    ],
    engagementFlow: [
      { step: 1, title: "Store Assessment", description: "Audit your current theme, app stack, and conversion bottlenecks." },
      { step: 2, title: "Developer Pairing", description: "Match with certified Shopify Plus developers within 48 hours." },
      { step: 3, title: "Review & Alignment", description: "Walk through store architecture and custom app requirements." },
      { step: 4, title: "Active Development", description: "Start sprinting under our 14-day guarantee." }
    ],
    faqs: [
      {
        question: "Can your developers migrate us from Shopify Liquid to Headless?",
        answer: "Yes, we build headless Shopify stores using Next.js and the Storefront API when you need unique product builders or internationalization."
      }
    ]
  },

  // Mobile & Cloud
  {
    id: "react-native-developers",
    slug: "react-native-developers",
    title: "React Native Developers",
    category: "Mobile & Cloud",
    hourlyRate: "$45 – $75/hr",
    experienceLevel: "Senior (5+ yrs avg)",
    shortSummary: "Hire senior React Native engineers building cross-platform iOS & Android mobile apps with native performance.",
    fullOverview: "Ship mobile products faster with senior React Native developers. We build cross-platform mobile apps with native 60fps animations, offline-first caching, push notifications, and deep device hardware integrations (camera, GPS, biometrics).",
    skills: ["React Native", "TypeScript", "Expo", "Redux / Zustand", "iOS (Swift)", "Android (Kotlin)", "Firebase", "App Store Connect"],
    coreProficiencies: [
      "Cross-platform mobile architecture with 90%+ shared code between iOS & Android",
      "Expo Application Services (EAS) automated build and deployment pipelines",
      "Native bridge modules in Swift and Kotlin for specialized device capabilities",
      "Offline data synchronization and secure local storage encryption"
    ],
    deliverables: [
      "Production-ready iOS and Android binaries ready for store release",
      "Clean TypeScript React Native codebase with unit and E2E Detox tests",
      "Comprehensive App Store and Play Store compliance documentation",
      "Automated Over-The-Air (OTA) update configuration"
    ],
    engagementFlow: [
      { step: 1, title: "App Briefing", description: "Review app features, native device dependencies, and store release targets." },
      { step: 2, title: "Candidate Review", description: "Evaluate senior mobile developers with live apps on the App Store." },
      { step: 3, title: "Technical Verification", description: "Test mobile architecture, memory management, and bridge knowledge." },
      { step: 4, title: "Start Development", description: "Weekly TestFlight builds with our 2-week risk-free period." }
    ],
    faqs: [
      {
        question: "Do you use Expo or bare React Native?",
        answer: "We prefer modern Expo EAS for rapid build pipelines and OTA updates, but have deep expertise in bare React Native with native Swift/Kotlin modules when necessary."
      }
    ]
  },
  {
    id: "flutter-developers",
    slug: "flutter-developers",
    title: "Flutter Developers",
    category: "Mobile & Cloud",
    hourlyRate: "$45 – $70/hr",
    experienceLevel: "Senior (4+ yrs avg)",
    shortSummary: "Hire expert Flutter & Dart developers delivering pixel-perfect multi-platform apps with 120Hz smooth rendering.",
    fullOverview: "Deliver visually stunning multi-platform applications using Google's Flutter framework. Our senior Flutter developers craft custom widget trees, complex state architectures using BLoC/Riverpod, and high-performance apps across mobile, tablet, and web.",
    skills: ["Flutter", "Dart", "BLoC / Riverpod", "Firebase", "REST / GraphQL", "SQLite", "App Store Connect", "Google Play"],
    coreProficiencies: [
      "Custom Flutter widget development matching intricate brand design systems",
      "Predictable state management with BLoC and Riverpod patterns",
      "Hardware-accelerated Skia/Impeller rendering with 60–120Hz fluidity",
      "Cross-platform compilation for iOS, Android, and web from a single codebase"
    ],
    deliverables: [
      "Robust Dart codebase with clean domain separation",
      "Automated widget, unit, and integration test suites",
      "Complete App Store and Google Play publishing setup",
      "CI/CD workflow using GitHub Actions and Fastlane"
    ],
    engagementFlow: [
      { step: 1, title: "Project Scoping", description: "Discuss visual design requirements, target platforms, and backend APIs." },
      { step: 2, title: "Vetted Matching", description: "Select from top-tier Flutter developers with proven production apps." },
      { step: 3, title: "Tech Assessment", description: "Assess BLoC state architecture, custom rendering, and Dart knowledge." },
      { step: 4, title: "Risk-Free Trial", description: "Begin active development with a 14-day evaluation window." }
    ],
    faqs: [
      {
        question: "Can Flutter match the native look and feel of iOS and Android?",
        answer: "Yes, Flutter renders every pixel directly to the canvas using Impeller, achieving fluid animations and pixel-exact design across both platforms."
      }
    ]
  }
];
