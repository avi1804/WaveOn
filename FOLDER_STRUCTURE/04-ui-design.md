# 04 — UI Design

**Owns:** visual hierarchy, design consistency, the component library and each component's rules, component architecture for UI.
**Related:** tokens (color, type, spacing) in [05](./05-layout-typography-colors.md); a11y of components in [07](./07-responsive-and-accessibility.md); state specs in [12](./12-forms-validation-errors.md); motion in [13](./13-interactions-animations-conversion.md).

---

## 1. Principles

1. **Consistency over novelty.** Same function → same look and behavior everywhere.
2. **Hierarchy guides the eye.** The most important thing should be the most visually prominent.
3. **Reuse, don't repeat.** Build components once; use them everywhere.
4. **Clarity beats decoration.** Visual effects must serve comprehension.

---

## 2. Visual Hierarchy

Establish importance with, in order of preference: **size → weight → color/contrast → spacing → position.**

Rules:
- One focal point per view; one primary button per view/section.
- Use **3 levels** of emphasis for actions: Primary (filled), Secondary (outlined/subtle), Tertiary (text/link).
- Use whitespace to group related items (proximity) and separate unrelated ones.
- Align elements to a shared grid and shared edges.
- Keep decorative elements lower in contrast than content.
- Test hierarchy with the **squint test**: blur the screen; the primary action and headline should still stand out.

---

## 3. Design System Requirements

Before building pages, establish the design system (tokens in [05](./05-layout-typography-colors.md)):

```text
Tokens (color, type, spacing, radius, shadow, z-index, motion)
        ↓
Primitives (Button, Input, Link, Icon, Text, Heading, Stack, Grid)
        ↓
Components (Card, Modal, Dropdown, Table, Tabs, Badge, Tooltip, Alert, Toast, Form field)
        ↓
Patterns/Sections (Hero, Pricing table, Feature grid, Header, Footer, Data table with filters)
        ↓
Pages
```

### Rules
- **Components MUST consume tokens.** No hardcoded hex values, pixel spacings, or font sizes inside components.
- **Every reusable UI element MUST be a component**, not copy-pasted markup. If you write similar markup a third time, extract it.
- Components expose a **small, typed API** (variants, sizes, states) rather than accepting arbitrary style overrides. Prefer `variant="primary"` over passing custom colors.
- Document each component briefly (purpose, props/variants, states, a11y notes) in a Storybook-style catalog or `/docs/components.md`.
- Each component MUST support all relevant **states**: default, hover, focus-visible, active, disabled, loading, error, selected, empty (where applicable).
- Use one icon set, one illustration style, one image-treatment style (radius, aspect ratios).
- Z-index scale defined in tokens (e.g., base 0, dropdown 100, sticky 200, overlay 300, modal 400, toast 500). No arbitrary `9999`.

---

## 4. Component Specifications

Below are the **minimum requirements** per component. Accessibility details are in [07](./07-responsive-and-accessibility.md).

### 4.1 Buttons
- Variants: primary, secondary, tertiary/ghost, destructive. Sizes: sm, md, lg.
- Minimum touch target 44×44 CSS px (see [07](./07-responsive-and-accessibility.md)).
- Label is verb-first, specific, ≤ 3 words where possible.
- States: hover, focus-visible (clear outline), active, disabled, **loading** (spinner + disabled + stable width, label retained or `aria-busy`).
- Use `<button>` for actions, `<a>` for navigation. Never `<div onclick>`.
- Icon-only buttons need `aria-label` and tooltip.

```text
✅ [ Save changes ]   [ Cancel ]            (primary + secondary, primary on the right/leading per locale convention, consistent site-wide)
❌ [ OK ] [ Submit ] [ Click here ]
```

### 4.2 Inputs and form controls
- Visible `<label>` always (placeholder is not a label).
- Include helper text, error text, required/optional marking, and character count when limited.
- Sizes consistent with buttons for alignment.
- Correct `type`, `inputmode`, `autocomplete` attributes.
- States: default, focus, filled, disabled, read-only, error, success.
- Field-level specs and validation: [12](./12-forms-validation-errors.md).

### 4.3 Cards
- Structure: media (optional) → title → meta → description → actions.
- Entire card clickable only if it has **one** primary destination; implement with a single real link (stretched link) to avoid nested interactive elements.
- Handle long titles (clamp lines), missing images (neutral placeholder with correct aspect ratio), and variable content heights (equal-height grid or intentional masonry).
- Cards in one grid share the same padding, radius, shadow, and image ratio.

### 4.4 Modals / dialogs
- Use only for focused, blocking tasks or confirmations. Keep content short.
- MUST: trap focus, close on `Esc`, return focus to trigger, lock background scroll, label via `aria-labelledby`, have a visible close button.
- On mobile, may render as a bottom sheet or full-screen; content must scroll within the modal.
- Never open on page load for marketing purposes. Never stack modals.

### 4.5 Tables
- Use real `<table>` semantics for tabular data (`<th scope>`, `<caption>`).
- Right-align numbers, left-align text; consistent decimals and units.
- Sorting, filtering, pagination for > ~20 rows (server-side for large data; see [11](./11-backend-api-database.md)).
- Responsive strategy (choose one and apply consistently): horizontal scroll in a wrapper with a visible cue, priority-column hiding, or card-list transformation on mobile (see [07](./07-responsive-and-accessibility.md)).
- Include loading skeleton, empty state, and error state.
- Row actions: visible on touch devices (not hover-only).

### 4.6 Dropdowns, menus, selects
- Use native `<select>` for simple choices (best a11y and mobile UX); custom combobox only when search/multi-select/rich options are needed — and then implement full ARIA keyboard patterns.
- Keyboard: arrows to move, `Enter`/`Space` to select, `Esc` to close, type-ahead.
- Menus close on outside click and `Esc`; do not clip inside `overflow:hidden` parents (use portals).

### 4.7 Tabs
- For switching views of the **same** content context; not for navigation across the site.
- Keyboard: left/right arrows move, `Tab` enters panel. Selected state clearly visible (not color alone).
- On narrow screens: scrollable tab list with edge fade, or convert to a select/accordion.
- Deep-linkable (reflect the selected tab in URL hash/query when meaningful).

### 4.8 Badges / tags / chips
- Short (1–2 words), non-interactive unless clearly styled and labeled as controls.
- Use semantic colors (success/warning/error/info/neutral) **plus** text or icon — not color alone.

### 4.9 Tooltips
- Supplementary info only; never essential content or the only way to learn something.
- Trigger on hover **and** keyboard focus; dismissible with `Esc`; appear after short delay (~300 ms).
- Not available on touch by hover — provide an alternative (visible help text or tap-to-reveal).
- Content is short plain text (≤ ~80 chars); no interactive content inside.

### 4.10 Alerts (inline, persistent)
- Types: info, success, warning, error. Each includes icon + title (optional) + message + (optional) action.
- Placed near the relevant content; persistent until resolved or dismissed.
- Error and warning alerts that appear dynamically use `role="alert"` / `aria-live`; passive info uses `role="status"`.

### 4.11 Toasts (transient)
- For low-stakes, non-blocking confirmations ("Link copied," "Saved").
- Auto-dismiss after ≥ 5 s (longer for more text), pause on hover/focus, never auto-dismiss errors that need action, include close button, include Undo when relevant.
- Max 1–3 visible at once; stack consistently (e.g., bottom-center on mobile, top-right on desktop).
- Must not obscure primary content or CTAs; announced via `aria-live="polite"`.

### 4.12 Other common components
- **Skeleton loaders**, **spinners**, **progress bars**, **pagination**, **breadcrumbs**, **accordions**, **avatars**, **date pickers**, **file upload**, **stepper**: each needs the same state coverage, a11y, and token usage. Add them to the component catalog when first needed.

---

## 5. Component Architecture Rules

- **Single responsibility:** a component does one job. Split presentation from data fetching/logic.
- Prefer **composition** over giant configurable components (e.g., `Card`, `Card.Header`, `Card.Body`).
- Keep components small (see size limits in [14](./14-testing-quality.md)).
- Folder-by-feature for feature code; shared UI in a `ui/` (or equivalent) library.
- No business logic or API calls inside purely presentational components.
- Components must render correctly with: very long text, very short text, no data, huge data, RTL/locale variations where relevant.
- Naming: components by what they *are* (`PricingTable`), not where they appear (`HomePageBlueBox`).

---

## 6. Imagery, Icons, and Media

- One icon library; consistent stroke/fill style and size scale (16/20/24).
- Decorative icons `aria-hidden="true"`; meaningful icons have accessible names.
- Imagery: consistent aspect ratios, crops, and treatments. Always set width/height (see [08](./08-performance-and-optimization.md)).
- Text on images requires a contrast overlay that passes contrast requirements.
- Don't use stock-photo clichés that mislead (fake team photos). Prefer real or clearly illustrative imagery.

---

## 7. Dark Mode (only if in scope)

- Implement with semantic tokens that swap values; never invert colors with filters.
- Re-verify contrast for every token pair in both themes.
- Respect `prefers-color-scheme`, allow manual override, avoid flash of wrong theme on load.

---

## 8. Do / Don't

**Do**
- Reuse components and tokens; extend the system when something is missing, then reuse the new addition.
- Show state clearly (hover, focus, disabled, loading, error).
- Match existing patterns when modifying a site.

**Don't**
- Don't create one-off button/card/input styles.
- Don't hardcode colors, spacing, or font sizes in components.
- Don't mix icon sets, corner radii, or shadow styles arbitrarily.
- Don't use more than one primary button per view.
- Don't build custom widgets when native elements do the job.
- Don't rely on color alone, hover alone, or tiny hit areas.

---

## 9. Validation Checklist

- [ ] Tokens exist and every component uses them (grep for hardcoded hex/px values)
- [ ] Component catalog lists each component's variants, states, and a11y notes
- [ ] No duplicated markup for the same UI pattern
- [ ] All interactive components have hover, focus-visible, active, disabled, (loading/error) states
- [ ] Exactly one primary action per view; hierarchy passes the squint test
- [ ] Modals trap focus, close on Esc, restore focus
- [ ] Tables, cards, tabs, and menus work at mobile width
- [ ] One icon set and one visual style across the site
- [ ] Components handle long text, missing images, and empty data
