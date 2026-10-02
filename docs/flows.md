# User Flows & Information Architecture — WaveOn

## 1. Information Architecture Sitemap
```text
/ (Home)
├── /services (Services Directory)
│   ├── /services/custom-web-development
│   ├── /services/web-design-ui-ux
│   ├── /services/ecommerce-development
│   ├── /services/mobile-app-development
│   ├── /services/wordpress-development
│   ├── /services/custom-software-saas
│   ├── /services/seo-services
│   ├── /services/digital-marketing
│   └── /services/maintenance-support
├── /process (Our 6-Stage Process)
├── /pricing (Engagement Models & Pricing Tiers)
├── /industries (Industries Served Directory)
├── /hire-developers (Developer Hiring Overview & Rates)
│   ├── /hire-developers/react-developers
│   ├── /hire-developers/nextjs-developers
│   ├── /hire-developers/vuejs-developers
│   ├── /hire-developers/angular-developers
│   ├── /hire-developers/nodejs-developers
│   ├── /hire-developers/laravel-developers
│   ├── /hire-developers/python-developers
│   ├── /hire-developers/wordpress-developers
│   ├── /hire-developers/shopify-developers
│   ├── /hire-developers/react-native-developers
│   ├── /hire-developers/flutter-developers
│   └── /hire-developers/full-stack-developers
├── /case-studies (Case Study Grid with Industry Filter)
│   ├── /case-studies/apex-fintech-platform
│   ├── /case-studies/vitalcare-telehealth-portal
│   ├── /case-studies/lumina-luxury-ecommerce
│   ├── /case-studies/cloudscale-saas-dashboard
│   ├── /case-studies/edulearn-interactive-lms
│   ├── /case-studies/proptech-real-estate-crm
│   ├── /case-studies/fleetiq-logistics-tracker
│   └── /case-studies/nexus-media-streaming-app
├── /about (Mission, Leadership, Numbers, Values)
├── /blog (Insights & Tech Articles)
│   ├── /blog/modern-web-development-trends-2025
│   ├── /blog/choosing-between-nextjs-and-vite
│   ├── /blog/headless-ecommerce-conversion-playbook
│   ├── /blog/scaling-engineering-teams-hire-vs-build
│   ├── /blog/mastering-core-web-vitals-for-seo
│   └── /blog/micro-frontends-architectural-guide
├── /contact (Contact & Scoping Form)
├── /privacy-policy (Legal)
├── /terms-of-service (Legal)
├── /accessibility (Legal)
└── * (404 Page)
```

## 2. Core User Journeys

### Flow A: Scoping Call / Project Quote (Primary Conversion)
```text
Landing / Inner Page
  → Clicks "Get a Free Quote" / "Book a Scoping Call"
  → Navigates to /contact (or uses inline CTA)
  → Selects Project Category & Budget Range
  → Fills Contact Details (Name, Work Email, Company, Message)
  → Validates Client-Side (Zod Schema)
  → State: Submitting (Button Spinner, Input Lock)
  → State: Success (Sonner Toast + In-Place Success Confirmation with next steps)
  → Console log payload emitted via stub
```

### Flow B: Developer Talent Hiring
```text
Header Mega-Menu / Home "Hire Developers" Section
  → Explores Role Cards with Hourly Rates (e.g. Next.js Developers $45-$70/hr)
  → Views /hire-developers/:slug (Skills, Experience, Deliverables, FAQs)
  → Clicks "Hire [Role] Developers"
  → Opens Quick Inquiry Dialog / Navigates to Contact with pre-selected role
  → Submits staffing request with team size & start timeline
  → Receives immediate confirmation and timeline expectation (< 48 hrs candidate matching)
```

### Flow C: Case Study Exploration
```text
Home / Header Nav
  → Navigates to /case-studies
  → Selects Industry Filter Chip (e.g. Fintech, Healthcare, SaaS)
  → URL Query updates (`/case-studies?industry=fintech`)
  → Active chips displayed with clear button and live result counter
  → Clicks Case Study Card
  → Views /case-studies/:slug (Challenge, Architecture, Solution, 2 Stat Callouts, Tech Stack, Testimonial)
  → Next Case Study carousel card at bottom encourages continued exploration
```
