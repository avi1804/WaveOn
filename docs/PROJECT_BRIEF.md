# Project Brief — WaveOn

## 1. Purpose
- **Website objective:** Modern, high-converting digital agency website showcasing web development, UI/UX design, mobile development, and digital marketing services.
- **Business objective:** Generate qualified inbound client leads for project scoping and dedicated developer hiring engagements.
- **User objective:** Quickly evaluate agency capabilities, review case studies and verifiable metrics, examine service scopes, check transparent developer rates, and book a free 30-minute scoping call.
- **Primary conversion goal:** Book a free 30-minute scoping call or request a project quote via the interactive contact form.
- **Secondary goals:** Explore developer hiring profiles and submit developer requests, browse case studies by industry, review pricing models, read agency insights.
- **Problems being solved:** Traditional agency sites suffer from opaque pricing, slow communication, lack of transparent technical expertise, and clunky hiring flows. WaveOn provides upfront rates, clear process stages, senior talent transparency, and guaranteed code ownership.
- **Success criteria (measurable):**
  - Contact/quote form completion rate >= 4% of unique visitors
  - 100% route availability across all 9 services, 12 developer roles, and case studies
  - Core Web Vitals targets: LCP <= 2.0s, CLS = 0, INP <= 150ms
  - Zero console errors, zero dead links, 100% WCAG 2.2 AA keyboard accessibility

## 2. Users
| Group | Role | Needs | Pain points | Expectations | Tech ability | Context |
|---|---|---|---|---|---|---|
| Primary | Startup Founders & CTOs | Rapid product MVP development, vetted senior talent, transparent rates | Unreliable freelancers, agency markup without senior devs, slow onboarding | High engineering standards, timezone alignment, full IP ownership | High | Desktop office & mobile between meetings |
| Secondary | Marketing Directors & SMB Leaders | Modern responsive websites, eCommerce growth, SEO & conversion optimization | Outdated CMS platforms, poor mobile performance, lack of ROI | Measurable business impact, clear timelines, friendly collaboration | Medium | Laptop/tablet during workday |
| Tertiary | Enterprise Project Leads | Dedicated developer staffing (React, Node, Cloud, Full Stack) | Lengthy recruitment cycles, quality variance | Pre-vetted senior engineers, flexible contracts, seamless team integration | High | Corporate desktop workstation |

## 3. Scope
- **Pages (18 unique routes):**
  - `/` (Home)
  - `/services` (Services directory)
  - `/services/:slug` (9 service details: 6 Build, 3 Grow)
  - `/process` (6-step delivery framework)
  - `/pricing` (Pricing & engagement models)
  - `/industries` (10 industry verticals)
  - `/hire-developers` (Developer directory & engagement models)
  - `/hire-developers/:slug` (12 developer role detail pages)
  - `/case-studies` (Case study grid with industry filtering)
  - `/case-studies/:slug` (8 in-depth project case studies)
  - `/about` (Company story, values, team & stats)
  - `/blog` (Insights listing with category filters)
  - `/blog/:slug` (6 comprehensive technical & business articles)
  - `/contact` (Interactive quote builder & scoping calendar contact)
  - `/privacy-policy` (Legal)
  - `/terms-of-service` (Legal)
  - `/accessibility` (Accessibility declaration)
  - `*` (Branded 404 page)
- **Key user flows:**
  1. Discovery -> Service Detail -> Book Scoping Call -> Confirmation
  2. Need Talent -> Hire Developers -> Role Detail (e.g. React/Next.js) -> Hire Request -> Confirmation
  3. Evidence -> Case Studies -> Filter by Industry -> Case Study Detail -> Contact -> Confirmation
- **Features:** Mega-menu navigation, mobile Sheet drawer, responsive tech marquee, interactive tabbed tech stack, industry filtering with active chips, accessible accordions, toast notifications, floating WhatsApp chat action.
- **Backend status:** Pure client-side frontend implementation; typed form submit stub with zero external API calls.

## 4. Content
- All content custom-crafted for WaveOn (no cloned text, assets, or trademarks from reference sites).
- Plausible metrics, real agency methodologies, and comprehensive technical stacks.
- Trust signals: "Free 30-min scoping call", "100% IP ownership", "250+ projects shipped", "4.9/5 rating".

## 5. Design Direction
- Primary brand color: `#FE5B01` (energetic high-tech orange)
- Neutral palette: `#0F172A` (deep slate text), `#F8FAFC` (soft warm surface), `#FFFFFF` (crisp white cards)
- Typography: Inter / Plus Jakarta Sans geometric sans-serif
- Tone: Confident, technical, transparent, outcome-focused, modern

## 6. Technical Stack
- React 18+, TypeScript, Vite, Tailwind CSS
- Radix UI primitives & shadcn/ui component patterns
- React Router v6
- Framer Motion for respectful, subtle transitions
- Lucide React icons
- React Hook Form + Zod validation
- React Helmet Async for per-route dynamic SEO metadata
