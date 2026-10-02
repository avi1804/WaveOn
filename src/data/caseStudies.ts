import { CaseStudy } from "@/types";

export const caseStudiesData: CaseStudy[] = [
  {
    id: "apex-fintech-platform",
    slug: "apex-fintech-platform",
    client: "Apex Financial Technologies",
    industry: "Fintech",
    title: "Engineering a High-Frequency Institutional Trading & Portfolio Portal",
    summary: "Engineered a sub-100ms real-time trading dashboard handling $450M+ in daily transaction volume with zero downtime.",
    challenge: "Apex's legacy monolithic portal suffered from 4-second latency delays during high-volatility market openings, causing client frustration and compliance audit risks. They needed a fault-tolerant, real-time web interface capable of streaming live stock tick data without UI stutter.",
    solution: "We re-architected the frontend into a modular React/TypeScript application utilizing WebSockets, Web Workers for background data processing, and virtualized canvas tables for instant rendering of 50,000+ live order book rows.",
    architectureDetails: [
      "Dedicated Web Worker offloading JSON parse operations from the main rendering thread",
      "Custom virtualized data-grid supporting 60 FPS scrolling through 100,000 active tickers",
      "End-to-end AES-256 encrypted WebSocket communication with automatic reconnection exponential backoff",
      "Strict WCAG 2.2 AA compliant high-contrast dark mode tailored for financial trading desks"
    ],
    stats: [
      { label: "Latency Reduction", value: "88%" },
      { label: "Daily Volume Handled", value: "$450M+" }
    ],
    technologies: ["React", "TypeScript", "WebSockets", "Tailwind CSS", "Zustand", "Node.js", "Docker", "AWS"],
    testimonial: {
      quote: "WaveOn delivered where two previous agencies failed. Our institutional clients praised the near-instant execution speed and rock-solid stability during the most volatile trading weeks of the year.",
      author: "Marcus Vance",
      role: "Chief Technology Officer",
      company: "Apex Financial Technologies"
    },
    mockupType: "dashboard",
    featured: true,
    nextCaseStudySlug: "vitalcare-telehealth-portal"
  },
  {
    id: "vitalcare-telehealth-portal",
    slug: "vitalcare-telehealth-portal",
    client: "VitalCare Health Network",
    industry: "Healthcare",
    title: "HIPAA-Compliant Telehealth Web Portal & Remote Patient Consultation Suite",
    summary: "Built an accessible, encrypted telemedicine video portal serving 120,000+ active patients with 99.99% uptime.",
    challenge: "VitalCare needed to replace an unreliable third-party video consultation vendor with a proprietary, fully HIPAA-compliant platform. The solution had to be effortless for elderly patients to join without software downloads while maintaining strict healthcare data privacy.",
    solution: "We engineered a browser-native WebRTC video consultation portal with zero downloads required. The system features one-click SMS invite links, automated appointment queuing, real-time transcription, and direct EHR database integration.",
    architectureDetails: [
      "WebRTC peer-to-peer encrypted audio/video streaming with adaptive bitrate fallbacks",
      "Strict HIPAA-compliant zero-persistence video recording storage with AWS KMS encryption",
      "Fully accessible keyboard-navigable and screen-reader tested UI meeting WCAG 2.2 AA standards",
      "Automated SMS/Email appointment reminders with bidirectional calendar synchronization"
    ],
    stats: [
      { label: "Patient Adoption", value: "+310%" },
      { label: "No-Show Rate Cut", value: "42%" }
    ],
    technologies: ["Next.js", "WebRTC", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Twilio API", "AWS"],
    testimonial: {
      quote: "The ease of use for our senior patients has been incredible. Patient onboarding complaints dropped to almost zero, and our clinicians can focus entirely on delivering quality care.",
      author: "Dr. Elena Rostova",
      role: "VP of Digital Health",
      company: "VitalCare Health Network"
    },
    mockupType: "web",
    featured: true,
    nextCaseStudySlug: "lumina-luxury-ecommerce"
  },
  {
    id: "lumina-luxury-ecommerce",
    slug: "lumina-luxury-ecommerce",
    client: "Lumina Atelier",
    industry: "eCommerce & Retail",
    title: "Headless Shopify Storefront Driving 64% Growth in International Orders",
    summary: "Rebuilt a luxury apparel brand's digital flagship into a headless Next.js experience with 0.8s average page load.",
    challenge: "Lumina's off-the-shelf Shopify theme had ballooned to 8MB in asset payloads, resulting in a sluggish 4.8-second mobile load time and a severe 68% mobile cart abandonment rate during high-profile product drops.",
    solution: "We designed and engineered a custom headless commerce platform using Next.js, Tailwind CSS, and the Shopify Storefront API. Features include interactive 3D product previews, instant currency and tax switching, and a streamlined 1-step checkout drawer.",
    architectureDetails: [
      "Headless Next.js architecture hosted on edge nodes for sub-second international response times",
      "Incremental Static Regeneration (ISR) guaranteeing instant product updates with zero server load",
      "Optimized WebP/AVIF responsive image pipeline reducing image payloads by 76%",
      "One-click multi-currency checkout with Apple Pay and Google Pay integration"
    ],
    stats: [
      { label: "Conversion Lift", value: "+64%" },
      { label: "Mobile Page Load", value: "0.8s" }
    ],
    technologies: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "TypeScript", "Stripe", "Framer Motion"],
    testimonial: {
      quote: "Our product drops now sell out in minutes without a single server hiccup. The visual polish matches our physical Parisian boutiques, and our mobile conversion rate skyrocketed.",
      author: "Camille Laurent",
      role: "Head of eCommerce",
      company: "Lumina Atelier"
    },
    mockupType: "ecommerce",
    featured: true,
    nextCaseStudySlug: "cloudscale-saas-dashboard"
  },
  {
    id: "cloudscale-saas-dashboard",
    slug: "cloudscale-saas-dashboard",
    client: "CloudScale Systems",
    industry: "SaaS & Tech",
    title: "Complete UI/UX Overhaul & Multi-Tenant SaaS Platform Redesign",
    summary: "Redesigned a complex cloud infrastructure observability tool, boosting product trial-to-paid conversion by 48%.",
    challenge: "CloudScale had powerful cloud monitoring infrastructure, but their user interface was bloated, confusing, and required weeks of onboarding. Free trial users frequently dropped off before configuring their first cloud cluster.",
    solution: "We conducted extensive user journey audits and built a comprehensive design system with intuitive visual infrastructure graphs, progressive onboarding wizards, and interactive query builders that cut configuration time from 40 minutes to under 4 minutes.",
    architectureDetails: [
      "Figma design system with 200+ reusable tokens, components, and layout primitives",
      "Interactive SVG infrastructure topology mapping with real-time cluster health indicators",
      "Guided multi-step onboarding wizard with optimistic input validation",
      "Comprehensive telemetry dashboard with customizable drag-and-drop widget grid"
    ],
    stats: [
      { label: "Trial Conversion", value: "+48%" },
      { label: "Setup Time Reduced", value: "90%" }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Radix UI", "D3.js", "Zustand", "Node.js"],
    testimonial: {
      quote: "WaveOn completely demystified our product. Customers who previously struggled during their trial period are now deploying infrastructure monitors within minutes of signing up.",
      author: "David Chen",
      role: "Founder & CEO",
      company: "CloudScale Systems"
    },
    mockupType: "dashboard",
    featured: true,
    nextCaseStudySlug: "edulearn-interactive-lms"
  },
  {
    id: "edulearn-interactive-lms",
    slug: "edulearn-interactive-lms",
    client: "EduLearn Global",
    industry: "Education & EdTech",
    title: "Scalable Online Learning Management System for 250,000+ Concurrent Students",
    summary: "Created an interactive educational platform with video streaming, automated grading, and live student collaboration.",
    challenge: "EduLearn experienced catastrophic server crashes when multiple universities conducted simultaneous online examinations. They needed an elastic, scalable platform that could handle sudden 10x traffic surges without dropping exam states.",
    solution: "We built an elastic microservices architecture featuring offline-first exam autosaving, chunked video streaming, and automated grading pipelines capable of handling hundreds of thousands of concurrent users.",
    architectureDetails: [
      "Local-first indexedDB state persistence ensuring students never lose exam answers if Wi-Fi drops",
      "HLS adaptive bitrate video streaming with automated closed-captioning generation",
      "Automated grading queue workers processing 15,000 submissions per minute",
      "Multilingual UI architecture supporting 14 languages with dynamic RTL support"
    ],
    stats: [
      { label: "Concurrent Users", value: "250K+" },
      { label: "Uptime Record", value: "100%" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Docker", "AWS CloudFront"],
    testimonial: {
      quote: "We ran our largest nationwide university examination semester with zero incidents. The offline-safe answer caching gave our faculty and students total peace of mind.",
      author: "Prof. Sarah Jenkins",
      role: "Chief Academic Officer",
      company: "EduLearn Global"
    },
    mockupType: "web",
    featured: true,
    nextCaseStudySlug: "proptech-real-estate-crm"
  },
  {
    id: "proptech-real-estate-crm",
    slug: "proptech-real-estate-crm",
    client: "PropTech Horizon",
    industry: "Real Estate",
    title: "Interactive Real Estate Portal with MLS Feed Sync & Virtual 3D Tour Integration",
    summary: "Built a high-performance commercial property portal syncing 80,000+ listings daily with interactive GIS mapping.",
    challenge: "PropTech Horizon's real estate portal took over 6 seconds to filter properties across metropolitan areas, and their MLS data feed updates caused frequent database lockouts.",
    solution: "We re-engineered the data ingestion pipeline using asynchronous queue workers and built a lightning-fast map search interface powered by Mapbox and vector tiles.",
    architectureDetails: [
      "Vector-tiled Mapbox integration rendering 10,000+ interactive property markers with zero UI lag",
      "Automated RETS/RESO Web API background sync processing 80,000 listing updates daily",
      "Faceted filter panel with instant URL sync for easy search sharing and bookmarking",
      "Integrated Matterport 3D virtual tour embed facades with lazy-loaded rendering"
    ],
    stats: [
      { label: "Inquiry Growth", value: "+82%" },
      { label: "Search Speed", value: "12x" }
    ],
    technologies: ["Next.js", "TypeScript", "Mapbox GL", "PostgreSQL / PostGIS", "Tailwind CSS", "Redis"],
    testimonial: {
      quote: "Our agents closed 82% more inbound showings in the first quarter post-launch. The speed of the map search completely outclasses our competitors.",
      author: "Julian Reynolds",
      role: "Managing Director",
      company: "PropTech Horizon"
    },
    mockupType: "web",
    featured: false,
    nextCaseStudySlug: "fleetiq-logistics-tracker"
  },
  {
    id: "fleetiq-logistics-tracker",
    slug: "fleetiq-logistics-tracker",
    client: "FleetIQ Logistics",
    industry: "Logistics & Supply Chain",
    title: "Real-Time Telematics & Fleet Route Optimization SaaS Platform",
    summary: "Delivered an automated fleet tracking and dispatch web application reducing fuel overhead by 18% across 1,200 vehicles.",
    challenge: "Dispatchers were manually routing cargo trucks using disparate spreadsheets and disjointed GPS devices, leading to inefficient routes, late deliveries, and high fuel costs.",
    solution: "We engineered a centralized dispatch command center that analyzes real-time GPS telemetry, traffic patterns, and cargo weight to calculate optimal route schedules automatically.",
    architectureDetails: [
      "Real-time WebSocket telemetry ingestion processing 2,000 GPS coordinate pings per second",
      "Automated Dijkstra/A* routing algorithm integration accounting for truck height and weight limits",
      "Driver companion progressive web app (PWA) with digital signature capture and proof of delivery",
      "Role-based access permissions separating corporate executives, terminal dispatchers, and drivers"
    ],
    stats: [
      { label: "Fuel Cost Saved", value: "18%" },
      { label: "On-Time Deliveries", value: "97.4%" }
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Leaflet", "PostgreSQL", "Docker"],
    testimonial: {
      quote: "FleetIQ paid for itself within 90 days of rollout. The dispatcher interface is so intuitive that new staff are trained and operational on day one.",
      author: "Robert Kowalski",
      role: "Director of Operations",
      company: "FleetIQ Logistics"
    },
    mockupType: "dashboard",
    featured: false,
    nextCaseStudySlug: "nexus-media-streaming-app"
  },
  {
    id: "nexus-media-streaming-app",
    slug: "nexus-media-streaming-app",
    client: "Nexus Media Network",
    industry: "Media & Entertainment",
    title: "Cross-Platform Video Streaming & Creator Monetization Mobile Application",
    summary: "Engineered a React Native mobile application for iOS and Android with 4.9-star ratings and 500K+ downloads.",
    challenge: "Nexus wanted to launch an independent creator streaming network to rival major platforms, but needed to achieve native 60fps video playback and in-app tip purchases on both iOS and Android within a strict 4-month launch window.",
    solution: "We developed a cross-platform React Native application utilizing custom native video player bridges, seamless in-app subscriptions via StoreKit and Google Play Billing, and low-latency live chat.",
    architectureDetails: [
      "Custom native ExoPlayer (Android) and AVPlayer (iOS) bridge for seamless 4K video playback",
      "Unified React Native codebase sharing 92% of business logic across iOS and Android",
      "Low-latency live chat room handling 50,000 messages per minute during live broadcasts",
      "Integrated Apple In-App Purchase and Google Play Billing with automated webhook validation"
    ],
    stats: [
      { label: "Active Downloads", value: "500K+" },
      { label: "Store Rating", value: "4.9 / 5" }
    ],
    technologies: ["React Native", "TypeScript", "Expo", "Swift", "Kotlin", "WebSockets", "Firebase"],
    testimonial: {
      quote: "Launching simultaneously on both app stores within 4 months seemed impossible, but WaveOn executed with absolute precision. The app feels completely native.",
      author: "Tanya Brooks",
      role: "VP of Product",
      company: "Nexus Media Network"
    },
    mockupType: "mobile",
    featured: false,
    nextCaseStudySlug: "apex-fintech-platform"
  }
];
