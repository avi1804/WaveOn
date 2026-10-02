import { ProcessStage } from "@/types";

export const processStagesData: ProcessStage[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Strategic Alignment & Scoping",
    description: "We deep-dive into your business objectives, target users, technical constraints, and competitive landscape. We define measurable success metrics before writing a single line of code.",
    activities: [
      "Stakeholder interviews and business goal definition",
      "User persona mapping and pain point identification",
      "Technical architecture and integration audit",
      "Feasibility analysis and risk mitigation matrix"
    ],
    deliverables: [
      "Comprehensive Project Brief & Requirements Document",
      "Measurable Success Criteria & KPI Definition",
      "Initial Technical Architecture Diagram",
      "Sprint Milestones & High-Level Delivery Roadmap"
    ],
    duration: "1 – 2 Weeks"
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Architecture & Information Design",
    description: "We translate business goals into unambiguous technical and visual blueprints. We map every user flow, database entity, and API contract to ensure zero structural ambiguities.",
    activities: [
      "Information architecture and navigation sitemap mapping",
      "Low-fidelity wireframing and clickable UX flows",
      "Database schema modeling and entity relationships",
      "RESTful / GraphQL API endpoint contract specifications"
    ],
    deliverables: [
      "Complete Information Architecture & Sitemap Tree",
      "Interactive Low-Fidelity Wireframes for All Key Views",
      "API & Database Schema Specification Document",
      "Detailed Two-Week Sprint Backlog"
    ],
    duration: "1 – 2 Weeks"
  },
  {
    number: "03",
    title: "Design",
    subtitle: "UI Engineering & Design Systems",
    description: "We craft stunning, brand-aligned visual designs that captivate users and drive conversions. We build reusable atomic design systems with tokens, micro-interactions, and WCAG AA accessibility.",
    activities: [
      "Design token architecture (colors, typography, spacing, shadows)",
      "High-fidelity UI mockups for mobile, tablet, and desktop",
      "Interactive clickable prototypes for user testing",
      "Accessibility contrast and touch-target verification"
    ],
    deliverables: [
      "Complete Figma Design System with reusable component tokens",
      "High-Fidelity Interactive Prototype covering all happy and error flows",
      "Micro-interaction and motion design guidelines",
      "Design-to-code technical handoff documentation"
    ],
    duration: "2 – 3 Weeks"
  },
  {
    number: "04",
    title: "Build",
    subtitle: "Agile Development & Continuous Delivery",
    description: "Our senior engineers bring designs to life in bi-weekly sprints. Every sprint produces functional, tested, and deployable software backed by automated unit and integration tests.",
    activities: [
      "Clean, modular frontend and backend engineering in TypeScript",
      "Bi-weekly sprint demos deploying to staging environments",
      "Automated unit, integration, and E2E regression testing",
      "Continuous peer code reviews and strict linting compliance"
    ],
    deliverables: [
      "Production-ready source code repository in your Git workspace",
      "Automated CI/CD pipelines deploying to staging and preview URLs",
      "Comprehensive unit and integration test suites (>85% coverage)",
      "Sprint velocity reports and burndown metrics"
    ],
    duration: "4 – 12 Weeks"
  },
  {
    number: "05",
    title: "Launch",
    subtitle: "Hardening, Security & Zero-Downtime Deployment",
    description: "We prepare your application for real-world traffic with comprehensive security audits, load testing, SEO verification, and orchestrated zero-downtime cutover.",
    activities: [
      "Multi-device responsive testing across 30+ physical screen sizes",
      "Lighthouse performance optimization for Core Web Vitals",
      "Penetration testing, dependency vulnerability audits, and SSL hardening",
      "DNS configuration, CDN edge routing, and monitoring setup"
    ],
    deliverables: [
      "Production deployment with zero downtime",
      "Verified green Core Web Vitals score (LCP <= 2.0s, CLS = 0)",
      "Robots.txt, XML Sitemap, and JSON-LD structured data verification",
      "Live error tracking (Sentry) and uptime monitoring setup"
    ],
    duration: "1 – 2 Weeks"
  },
  {
    number: "06",
    title: "Grow",
    subtitle: "Continuous Optimization & Scaling",
    description: "Launch is just day one. We monitor live telemetry, analyze user conversion funnels, execute A/B tests, and roll out new feature enhancements to maximize your ongoing ROI.",
    activities: [
      "Real-time application performance and error monitoring",
      "Conversion rate optimization (CRO) and user heatmap analysis",
      "Monthly security patching and dependency updates",
      "Ongoing feature iterations and capacity scaling"
    ],
    deliverables: [
      "Monthly performance and uptime SLA reports",
      "Dedicated developer hours for continuous feature improvements",
      "Automated off-site database backups with regular test restores",
      "Quarterly strategic technology and roadmap reviews"
    ],
    duration: "Ongoing Partnership"
  }
];
