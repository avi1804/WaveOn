import { TechCategory } from "@/types";

export const techStackData: TechCategory[] = [
  {
    name: "Front End",
    items: [
      { name: "React", description: "Modern component-based reactive user interfaces", icon: "Atom" },
      { name: "Next.js", description: "Server-side rendering, App Router & static generation", icon: "Layers" },
      { name: "TypeScript", description: "Static typing for rock-solid code maintainability", icon: "FileCode" },
      { name: "Vue.js / Nuxt", description: "Progressive, lightweight reactive frontend framework", icon: "Component" },
      { name: "Angular", description: "Enterprise-grade structure with RxJS and signals", icon: "Shield" },
      { name: "Tailwind CSS", description: "Utility-first design token-driven styling", icon: "Sparkles" },
      { name: "Radix UI", description: "Unstyled, accessible UI component primitives", icon: "Box" },
      { name: "Framer Motion", description: "Production-ready fluid motion and micro-interactions", icon: "Activity" }
    ]
  },
  {
    name: "Back End",
    items: [
      { name: "Node.js", description: "High-throughput asynchronous JavaScript runtime", icon: "Server" },
      { name: "NestJS", description: "Enterprise architecture with TypeScript and dependency injection", icon: "Cpu" },
      { name: "Python / FastAPI", description: "Asynchronous high-performance microservices", icon: "Terminal" },
      { name: "Django", description: "Batteries-included secure web framework", icon: "Database" },
      { name: "Laravel (PHP)", description: "Elegant MVC framework for rapid SaaS deployment", icon: "Code2" },
      { name: "PostgreSQL", description: "Advanced relational database with JSON & GIS support", icon: "HardDrive" },
      { name: "Redis", description: "In-memory caching and real-time pub/sub message brokering", icon: "Zap" },
      { name: "GraphQL", description: "Declarative API query language and runtime", icon: "Network" }
    ]
  },
  {
    name: "CMS & eCommerce",
    items: [
      { name: "Shopify Plus", description: "Enterprise commerce, custom Liquid themes & functions", icon: "ShoppingBag" },
      { name: "WordPress / Gutenberg", description: "Custom React Gutenberg blocks and headless CMS", icon: "Globe" },
      { name: "Next.js Commerce", description: "Headless commerce frontend for maximum speed", icon: "ShoppingCart" },
      { name: "Sanity.io", description: "Structured headless content platform", icon: "FileText" },
      { name: "Stripe", description: "Global payment processing, billing & invoicing API", icon: "CreditCard" },
      { name: "WooCommerce", description: "Flexible self-hosted eCommerce platform", icon: "Store" }
    ]
  },
  {
    name: "Mobile",
    items: [
      { name: "React Native", description: "Cross-platform iOS and Android apps with 90%+ code sharing", icon: "Smartphone" },
      { name: "Flutter", description: "Google's UI toolkit for smooth 120Hz native compilation", icon: "Tablet" },
      { name: "Expo EAS", description: "Automated cloud build and Over-The-Air deployment", icon: "CloudRain" },
      { name: "Swift (iOS)", description: "Native iOS modules and platform-specific capabilities", icon: "Apple" },
      { name: "Kotlin (Android)", description: "Native Android background services and bridges", icon: "Play" },
      { name: "Firebase", description: "Real-time push notifications, auth, and analytics", icon: "Flame" }
    ]
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS", description: "Elastic cloud compute, serverless Lambda, S3 & RDS", icon: "Cloud" },
      { name: "Docker", description: "Standardized containerization across dev and production", icon: "Package" },
      { name: "GitHub Actions", description: "Automated continuous integration and deployment pipelines", icon: "GitBranch" },
      { name: "Vercel", description: "Global edge network hosting for Next.js applications", icon: "Triangle" },
      { name: "Cloudflare", description: "DDoS protection, WAF, and edge caching CDN", icon: "ShieldCheck" },
      { name: "Terraform", description: "Infrastructure as Code for reproducible environments", icon: "Binary" }
    ]
  },
  {
    name: "Data & AI",
    items: [
      { name: "OpenAI / Claude", description: "LLM integration for enterprise AI workflows and assistants", icon: "Bot" },
      { name: "LangChain", description: "Chaining LLMs with vector search and external tools", icon: "Link" },
      { name: "pgvector", description: "Vector embeddings and semantic search inside PostgreSQL", icon: "Search" },
      { name: "Pandas & Python", description: "High-volume data processing and transformation pipelines", icon: "PieChart" },
      { name: "PostHog", description: "Self-hosted product telemetry, funnels, and session replays", icon: "Eye" },
      { name: "BigQuery", description: "Serverless enterprise cloud data warehousing", icon: "BarChart" }
    ]
  },
  {
    name: "Marketing & SEO",
    items: [
      { name: "Google Search Console", description: "Organic indexation monitoring and search performance", icon: "SearchCheck" },
      { name: "Lighthouse", description: "Core Web Vitals auditing and rendering diagnostics", icon: "Gauge" },
      { name: "Ahrefs & Semrush", description: "Competitor intelligence and keyword gap analysis", icon: "LineChart" },
      { name: "Google Ads", description: "High-intent search advertising and conversion tracking", icon: "Target" },
      { name: "Meta & LinkedIn Ads", description: "B2B account targeting and paid social acquisition", icon: "Share2" },
      { name: "Schema.org", description: "Rich snippets and structured data markup", icon: "CodeXml" }
    ]
  }
];
