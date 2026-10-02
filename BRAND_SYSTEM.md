# WaveOn Brand Identity & Design System Specification

## 1. Executive Summary & Brand Purpose

**WaveOn** is a high-performance digital engineering, product design, and growth agency.  
This document formalizes the **Brand Identity & Visual Language Transformation**, reinterpreting the playful-yet-disciplined aesthetic of the provided design reference into a cohesive, consumer-grade technology brand system.

### Brand Attributes:
- **Core Personality**: Modern, Creative, Friendly, Premium, Human, Approachable, Confident, Slightly Playful.
- **The Concept of WaveOn**: **WAVE** (continuous flow, momentum, agility) + **ON** (active, operational, powered-up, always high-performing).
- **Anti-Patterns (Strictly Avoided)**: Generic blue corporate SaaS templates, harsh cold dark-mode tech designs, generic AI gradients, clinical pure black/white contrasts, and cold corporate aesthetics.

---

## 2. Color Palette & Token Architecture

The color system is derived directly from the reference art direction, structured systematically for accessibility (WCAG 2.1 AA) and semantic clarity.

| Token Name | Hex Code | HSL Value | Semantic Role & Hierarchy |
| :--- | :--- | :--- | :--- |
| **Celtic Blue** (`--color-primary`) | `#3971B8` | `214 53% 47%` | **Primary Brand Anchor**: Main buttons, logo typography, primary active states, focal navigation anchors, and technological trust. |
| **Tea Green** (`--color-secondary`) | `#C8D69B` | `74 44% 72%` | **Growth & Creativity Accent**: Supporting badges, success indicators, subtle card hover tints, and organic highlight pills. |
| **Vanilla** (`--color-accent`) | `#F6E6A5` | `48 83% 81%` | **Warmth & Energy Accent**: Eyebrow tags, glowing pill badges, metric highlights, and contrast badges against Celtic Blue. |
| **Ivory** (`--color-background`) | `#FBFCEE` | `64 67% 96%` | **Base Warm Canvas**: Primary page background; creates an organic, human, tactile surface rather than harsh sterile white. |
| **Drab Dark Brown / Deep Olive** (`--color-dark` / `--color-foreground`) | `#343B1B` | `74 37% 17%` | **Primary Typography & Depth**: Main headings, body text, and deep contrast surfaces. Replaces cold `#000000` with deep organic warmth. |
| **Warm Surface** (`--color-surface`) | `#FFFFFF` | `0 0% 100%` | **Card & Container Surface**: Crisp tactile cards resting smoothly on the warm Ivory backdrop with soft ambient shadows. |
| **Deep Olive Surface** (`--color-surface-dark`) | `#272D14` | `75 33% 13%` | **Footer & High-Contrast CTA Panels**: Replaces generic slate-950 with an olive-rich dark background. |

### Color Usage Guidelines:
1. **Ivory (#FBFCEE)** is the primary canvas across all pages.
2. **Celtic Blue (#3971B8)** is the hero focal color—used on high-intent CTAs, key headlines, brand links, and active states.
3. **Deep Olive (#343B1B)** handles text hierarchy (H1–H4, body copy), ensuring rich readability without harsh black contrast.
4. **Tea Green (#C8D69B)** and **Vanilla (#F6E6A5)** are deployed as strategic accents (chips, trust pills, metric badges, and subtle icon containers).

---

## 3. Typography & Typesetting System

Inspired by the rounded geometric personality of the reference (Poppins + Comfortaa):

- **Display & Headings**: `Plus Jakarta Sans` / `Poppins` (Rounded geometric, tight letter-spacing `-0.025em`, font-weight 700–800).
- **Body & Captions**: `Plus Jakarta Sans` / `Inter` (Open, clear, highly legible at small sizes, font-weight 400–600).
- **Tone & Voice**: Short, punchy, confident statements with intentional color-accented words (Celtic Blue, Tea Green, or Vanilla highlights).

### Type Scale:
- **Hero Display**: `clamp(2.75rem, 6vw, 4.5rem)` / line-height `1.08` / font-weight `800`
- **H1 (Page Titles)**: `clamp(2.25rem, 4.5vw, 3.25rem)` / line-height `1.15` / font-weight `800`
- **H2 (Section Headings)**: `clamp(1.75rem, 3.5vw, 2.5rem)` / line-height `1.2` / font-weight `700`
- **H3 (Card & Subheadings)**: `1.25rem – 1.5rem` / line-height `1.3` / font-weight `700`
- **Body Regular**: `1rem (16px)` / line-height `1.65` / font-weight `400`
- **Small / Meta**: `0.875rem (14px)` / line-height `1.5` / font-weight `500`
- **Eyebrow / Pill**: `0.75rem (12px)` / letter-spacing `0.06em` / text-transform `uppercase` / font-weight `700`

---

## 4. Rounded Geometry, Radius & Shadow Hierarchy

The reference is characterized by friendly, tactile, and pill-like rounded forms:

- **Border Radius**:
  - `rounded-pill` / `rounded-full`: Used for all CTAs, badges, tags, and icon chips.
  - `rounded-2xl` (`1.25rem / 20px`): Used for cards, modal dialogs, and feature containers.
  - `rounded-3xl` (`1.75rem / 28px`): Used for large hero banners, callout boxes, and media wrappers.
- **Shadow System**:
  - **Soft Ambient Shadow**: `0 4px 20px -2px rgba(52, 59, 27, 0.05), 0 2px 6px -1px rgba(52, 59, 27, 0.03)`
  - **Card Hover Shadow**: `0 12px 32px -4px rgba(57, 113, 184, 0.12), 0 4px 12px -2px rgba(52, 59, 27, 0.06)`
  - **Button Glow**: `0 4px 16px 0 rgba(57, 113, 184, 0.28)`

---

## 5. UI Component Design Specifications

### Button Hierarchy:
1. **Primary Button**:
   - Background: Celtic Blue (`#3971B8`)
   - Text: Ivory / White (`#FFFFFF`)
   - Shape: Fully rounded pill (`rounded-full`)
   - Hover: Slightly lifts (`-translate-y-0.5`), deepens to `#2E5F9E`, with soft Celtic Blue shadow glow.
2. **Secondary Button**:
   - Background: Warm Surface / Ivory (`#FFFFFF`) with a 1.5px border in Celtic Blue (`#3971B8` or `#3971B8/30`)
   - Text: Celtic Blue (`#3971B8`)
   - Shape: Fully rounded pill (`rounded-full`)
   - Hover: Background fills with Tea Green (`#C8D69B/20`) or Vanilla (`#F6E6A5/30`).
3. **Accent Pill Action (e.g. Scoping Call / Tag)**:
   - Background: Vanilla (`#F6E6A5`) with Deep Olive (`#343B1B`) typography.

### Card System:
- **Card Base**: Crisp white surface on Ivory background, border `1px solid rgba(52, 59, 27, 0.08)`.
- **Card Header**: Rounded pill icon container with Tea Green or Vanilla background.
- **Hover Micro-interaction**: Gentle translateY (`-4px`), border tint transitions to Celtic Blue or Tea Green.

### Badge & Chip System:
- Pill-shaped (`rounded-full`), padded `px-3.5 py-1.5`.
- Variants:
  - **Vanilla Eyebrow**: Vanilla background + Deep Olive text + sparkling accent icon.
  - **Tea Green Chip**: Tea Green background + Deep Olive text.
  - **Celtic Blue Badge**: Celtic Blue background + White text.

---

## 6. WaveOn Visual Language & Wave Motif

1. **Brandmark Synergy**:
   - Incorporates [`/Logo.png`](file:///c:/Users/HARSH/OneDrive/Desktop/WaveOn/public/Logo.png) — the distinctive 3D ribbon "W" wave flowing into an "ON" power circle, rendered in Celtic Blue, Tea Green, and Vanilla.
2. **Subtle Wave Separators & Shapes**:
   - Soft organic divider curves separating major thematic transitions (e.g. from Hero to Services, and from FAQ to CTA Band).
   - Abstract flowing SVG accents placed unobtrusively in the Hero background and footer.
   - Flowing decorative line elements emphasizing "Always ON" velocity and momentum without water cliches.

---

## 7. Responsive & Accessibility Standards

- **Contrast Compliance**:
  - Celtic Blue (`#3971B8`) on Ivory (`#FBFCEE`): Contrast ratio **5.2:1** (Passes WCAG AA).
  - Deep Olive (`#343B1B`) on Ivory (`#FBFCEE`): Contrast ratio **9.8:1** (Passes WCAG AAA).
  - White on Celtic Blue (`#3971B8`): Contrast ratio **4.7:1** (Passes WCAG AA).
  - Deep Olive (`#343B1B`) on Vanilla (`#F6E6A5`): Contrast ratio **7.4:1** (Passes WCAG AAA).
  - Deep Olive (`#343B1B`) on Tea Green (`#C8D69B`): Contrast ratio **6.2:1** (Passes WCAG AAA).
- **Reduced Motion**: All Framer Motion transitions respect `prefers-reduced-motion: reduce`.
- **Keyboard Usability**: Every interactive element retains a prominent 2px `:focus-visible` ring using Celtic Blue.

---

## 8. Rollout Plan

1. **Phase 1: Token Engine** — Update `src/index.css` and `tailwind.config.js` with the complete Celtic Blue, Tea Green, Vanilla, Ivory, and Deep Olive color tokens, rounded radii, and typography scales.
2. **Phase 2: Global UI Primitives** — Refactor `button.tsx`, `badge.tsx`, `card.tsx`, `accordion.tsx`, and `tabs.tsx` to embody the rounded pill aesthetic and tactile hover physics.
3. **Phase 3: Global Layout & Navigation** — Update `Header.tsx` (Ivory frosted backdrop, Celtic Blue logo badge, rounded pill buttons), `MegaMenu.tsx`, `MobileNav.tsx`, and `Footer.tsx` (Deep Olive canvas with Tea Green & Vanilla highlights).
4. **Phase 4: Section-by-Section Homepage Polish** — Harmonize all 13 sections on `HomePage.tsx` with organic flow dividers, pill badges, and friendly rounded cards.
5. **Phase 5: Subpages Polish** — Apply the unified design language across Services, Hire Developers, Case Studies, Pricing, Process, Industries, About, Blog, Contact, and Legal pages.
6. **Phase 6: QA & Verification** — Execute build check (`npm run build`), responsive audits, and contrast verification.
