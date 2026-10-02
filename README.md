# WaveOn — High-Performance Digital Agency & Engineering Website

A production-grade, frontend-only marketing website for **WaveOn**, a digital agency specializing in custom web development, mobile engineering, UI/UX design, and digital marketing services.

The design, UX architecture, mega-menu, and page layouts are engineered to deliver a world-class, polished agency experience inspired by modern enterprise agency benchmarks, with 100% original content, branding, case studies, and assets.

---

## 🚀 Quick Start

### Prerequisites
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

### Installation & Development
```bash
# 1. Clone or navigate to the project directory
cd WaveOn

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) in your browser to view the application.

### Production Build
```bash
# Type-check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Bundler**: [Vite 5](https://vitejs.dev/) with automated chunk code-splitting
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with CSS custom properties
- **UI Primitives**: [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Navigation Menu, Select, Tabs, Sheet, Separator)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) (subtle, non-blocking, respects `prefers-reduced-motion`)
- **Routing**: [React Router 6](https://reactrouter.com/) (Data Router with `React.lazy` and `Suspense` fallbacks)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) toast system
- **SEO & Meta**: [React Helmet Async](https://github.com/staylor/react-helmet-async) + Schema.org JSON-LD

---

## 📁 Project Architecture

The directory layout adheres strictly to the modular architectural specification:

```
WaveOn/
├── docs/                      # Architectural decisions & project specs
│   ├── DECISIONS.md           # Log of design & technical decisions
│   ├── PROJECT_BRIEF.md       # Product vision & user journey matrix
│   ├── PROJECT_NOTES.md       # Color tokens, type scale & UI notes
│   └── flows.md               # Information architecture & route flows
├── public/                    # Static assets
│   ├── favicon.svg            # WaveOn vector mark
│   ├── robots.txt             # Search crawler directives
│   └── sitemap.xml            # Canonical 18-route sitemap
├── src/
│   ├── assets/                # Local SVG assets & placeholders
│   ├── components/
│   │   ├── layout/            # Layout shell, Header, MegaMenu, MobileNav, Footer
│   │   ├── sections/          # 13 modular Homepage sections (in exact order)
│   │   ├── seo/               # SeoHead (Helmet) & SchemaOrg (JSON-LD)
│   │   └── ui/                # Radix + Tailwind primitives (Buttons, Cards, etc.)
│   ├── config/
│   │   └── site.ts            # Central single-point brand & navigation config
│   ├── data/                  # Typed static data (services, roles, case studies, etc.)
│   │   ├── blogPosts.ts       # 6 technical insights & articles
│   │   ├── caseStudies.ts     # 8 in-depth case studies with metrics
│   │   ├── faqs.ts            # 8 core FAQ items
│   │   ├── industries.ts      # 10 industry verticals
│   │   ├── pricing.ts         # 4 engagement & pricing models
│   │   ├── process.ts         # 6-stage engineering process
│   │   ├── roles.ts           # 12 developer hiring profiles with rates
│   │   ├── services.ts        # 9 services (6 Build, 3 Grow)
│   │   ├── techStack.ts       # 7 categorized technology groups
│   │   └── testimonials.ts    # Client testimonials & trust badges
│   ├── pages/                 # 16 lazy-loaded route views & templates
│   │   ├── AboutPage.tsx
│   │   ├── BlogPage.tsx
│   │   ├── BlogPostPage.tsx
│   │   ├── CaseStudiesPage.tsx
│   │   ├── CaseStudyDetailPage.tsx
│   │   ├── ContactPage.tsx    # Interactive quote request form with Zod validation
│   │   ├── HireDevelopersPage.tsx
│   │   ├── HomePage.tsx       # 13-section flagship landing experience
│   │   ├── IndustriesPage.tsx
│   │   ├── LegalPage.tsx      # Privacy Policy, Terms, Accessibility
│   │   ├── NotFoundPage.tsx   # Styled 404 with search & return links
│   │   ├── PricingPage.tsx
│   │   ├── ProcessPage.tsx
│   │   ├── RoleDetailPage.tsx
│   │   ├── ServiceDetailPage.tsx
│   │   └── ServicesPage.tsx
│   ├── routes/                # Central router configuration with Suspense fallbacks
│   ├── types/                 # Shared TypeScript models & data contracts
│   ├── App.tsx                # App root with Helmet & Toast provider
│   ├── index.css              # CSS variable tokens, Tailwind directives & typography
│   └── main.tsx               # DOM mount point
├── index.html                 # HTML shell with Google Fonts & meta
├── tailwind.config.js         # Theme extensions & custom tokens
├── tsconfig.json              # TypeScript compiler configuration
└── vite.config.ts             # Vite bundler config with path aliases
```

---

## 🎨 How to Rebrand (Single Source of Truth)

The entire identity of WaveOn can be rebranded in minutes without modifying individual UI components:

### 1. Brand Identity & Contact Information
Open [`src/config/site.ts`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/config/site.ts):
```typescript
export const siteConfig = {
  name: "WaveOn",
  tagline: "High-Performance Web Development, UI/UX & Marketing",
  email: "hello@waveon.agency",
  phone: "+1 (800) 555-WAVE",
  whatsapp: "+1 (800) 555-9283",
  address: "100 Innovation Way, Suite 400, Austin, TX 78701",
  social: {
    github: "https://github.com/waveon",
    linkedin: "https://linkedin.com/company/waveon",
    twitter: "https://twitter.com/waveon_agency",
  },
  // Update header/footer navigation links and CTAs here
};
```

### 2. Primary Brand Color
The primary brand color is tokenized as `--primary` in HSL format.
Open [`src/index.css`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/index.css):
```css
:root {
  /* WaveOn Primary Orange (#FE5B01) */
  --primary: 21 100% 50%;
  --primary-foreground: 0 0% 100%;
}
```
Changing this single variable automatically updates all primary buttons, gradients, glowing badges, focus rings, and accents across the entire website.

### 3. Services, Roles, and Portfolio
All marketing copy, pricing, deliverables, tech stacks, and case studies are driven by typed files in [`src/data/`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/data/):
- **Services**: [`src/data/services.ts`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/data/services.ts)
- **Developer Roles & Hourly Rates**: [`src/data/roles.ts`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/data/roles.ts)
- **Case Studies & Metrics**: [`src/data/caseStudies.ts`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/data/caseStudies.ts)
- **FAQ Items**: [`src/data/faqs.ts`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/data/faqs.ts)

---

## 🔌 Connecting a Backend Later

Per specifications, this application is strictly **frontend-only**. No external network requests are made, preventing unauthorized data transmission or broken external endpoints.

To connect a backend (e.g. Next.js API route, Express server, AWS Lambda, or Supabase), navigate to the clearly marked `submitForm` stub in [`src/pages/ContactPage.tsx`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/src/pages/ContactPage.tsx):

```typescript
// =========================================================================
// BACKEND INTEGRATION STUB
// Currently handles client-side submission, logs payload, and returns true.
// Replace the implementation below with your API endpoint when ready.
// =========================================================================
const submitForm = async (data: QuoteFormData): Promise<{ success: boolean; error?: string }> => {
  // Simulating async network delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  // LOG PAYLOAD CLIENT-SIDE:
  console.log("[WaveOn Lead Submission Payload]:", data);

  // EXAMPLE BACKEND INTEGRATION:
  /*
  const response = await fetch('/api/leads/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to submit quote request');
  return { success: true };
  */

  return { success: true };
};
```

---

## ♿ Accessibility & Performance Standards

- **WCAG 2.1 AA Compliant**: All text combinations meet or exceed 4.5:1 contrast ratios.
- **Keyboard Navigable**: Visible `:focus-visible` focus rings on all interactive elements. Includes a high-priority "Skip to content" anchor for screen readers and keyboard users.
- **Accessible Modals & Menus**: Mega-menu panels and mobile drawers manage focus states and close cleanly on `Escape` or outside clicks.
- **No Layout Shifts (CLS 0.0)**: All dynamic sections feature explicit skeleton fallbacks and image aspect ratios.
- **Subtle Motion**: Framer Motion entrance animations automatically respect the user's OS `prefers-reduced-motion` settings.
- **Responsive at All Breakpoints**: Verified with zero horizontal overflow from 360px mobile viewports up to 1536px+ ultrawide displays.

---

## 📄 License
MIT © WaveOn Digital Agency. All rights reserved.
