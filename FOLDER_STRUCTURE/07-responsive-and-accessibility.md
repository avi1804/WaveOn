# 07 — Responsive Design & Accessibility

**Owns:** breakpoints, flexible layout behavior, touch targets, responsive typography/images/tables/forms/modals, and all accessibility requirements (WCAG 2.2 AA).
**Related:** tokens in [05](./05-layout-typography-colors.md); navigation in [06](./06-branding-and-navigation.md); image performance in [08](./08-performance-and-optimization.md); testing in [14](./14-testing-quality.md).

---

## Part A — Responsive Design

### A1. Principles
1. **Mobile-first:** design and build the smallest layout first, then enhance upward.
2. **Content-driven:** add a breakpoint when the content breaks, not because a device exists.
3. **No horizontal scroll** on the page body at any width ≥ 320 px (except intentional scrollers like tables and carousels inside their own container).
4. Every feature must work on touch, mouse, and keyboard.

### A2. Required device classes and breakpoints

```text
Mobile         320 – 599 px      (design baseline: 360–390 px)
Tablet         600 – 1023 px     (portrait 768, landscape 1024)
Laptop         1024 – 1439 px
Desktop        1440 – 1919 px
Large Desktop  ≥ 1920 px         (constrain content width; do not stretch)
```

Suggested min-width breakpoints: `sm 600`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`. Define them once as tokens; do not scatter arbitrary media-query values.

- Prefer **container queries** for component-level responsiveness where supported.
- Test intermediate widths (e.g., 480, 900, 1180), landscape orientation, and 200% browser zoom (which behaves like a ~640 px viewport).

### A3. Flexible layouts
- Use CSS Grid/Flexbox with `minmax()`, `auto-fit/auto-fill`, `clamp()`, `gap`, and relative units. Avoid fixed widths; use `max-width` instead.
- Allow wrapping; never assume fixed text length or card count.
- Use `min-width: 0` on flex/grid children that contain long text to prevent overflow.
- Break long strings: `overflow-wrap: anywhere` for URLs, emails, and user-generated content.
- Use `dvh/svh` rather than `100vh` for full-height mobile sections (mobile browser toolbars).
- Respect safe areas on notched devices (`env(safe-area-inset-*)`).
- Reflow: content must be usable at 320 px wide with no two-dimensional scrolling (WCAG 1.4.10), except for data tables, maps, and code.

### A4. Touch targets
- Minimum **44 × 44 CSS px** for tappable elements (WCAG 2.2 requires at least 24 × 24 with spacing; use 44 as our standard).
- ≥ 8 px spacing between adjacent targets.
- Inline text links in paragraphs are exempt but need adequate line-height; avoid placing multiple links tightly together.
- No hover-only functionality; hover is an enhancement.
- Avoid gestures as the only way (swipe, pinch, long-press): provide visible buttons as alternatives.
- Place primary actions in the thumb zone on mobile when sensible (sticky bottom CTA bar for conversion pages), without covering content (add bottom padding).

### A5. Mobile navigation
Specified in [06](./06-branding-and-navigation.md) §4. Required: same hierarchy as desktop, accessible toggle, focus trap, and ≥ 44px targets.

### A6. Responsive typography
- Sizes follow the scale in [05](./05-layout-typography-colors.md); body ≥ 16 px on all devices (prevents iOS input zoom for inputs too: input font-size ≥ 16 px).
- Use `clamp()` for headings: `font-size: clamp(2rem, 1.2rem + 3vw, 3.5rem)`.
- Don't use viewport units alone for text (breaks zoom); combine with `rem`.
- Keep line length 45–75 characters at every width.

### A7. Responsive images and media
- Provide multiple sizes via `srcset`/`sizes` and `<picture>` for art direction and modern formats (details: [08](./08-performance-and-optimization.md)).
- Always set intrinsic `width` and `height` (or `aspect-ratio`) to prevent layout shift.
- `max-width: 100%; height: auto;` for content images.
- Videos: responsive container with aspect ratio; no autoplay with sound; provide captions; avoid autoplay on mobile data.
- Background images must not carry essential info; text over images needs overlay for contrast.

### A8. Responsive tables
Choose one strategy per table type:
1. **Scroll container:** wrap in `overflow-x: auto` with `tabindex="0"`, `role="region"`, `aria-label`, and a visual edge-shadow cue. Keep first column sticky if useful.
2. **Priority columns:** hide low-priority columns at small widths (offer "show all").
3. **Stack/card transform:** each row becomes a labeled card (use `data-label` for header context) while preserving semantic meaning.
- Never shrink font size below 14 px to fit.

### A9. Responsive forms
- Single column on mobile; multi-column only when fields are naturally related (city/state/zip) and space allows.
- Full-width inputs on mobile; labels above inputs.
- Use correct `type`, `inputmode`, `autocomplete`, and `enterkeyhint` to trigger appropriate keyboards.
- Keep primary submit button visible without hunting; consider sticky action bar for long forms.
- Detailed form rules: [12](./12-forms-validation-errors.md).

### A10. Responsive modals
- Desktop: centered dialog with max-width and max-height (80–90 vh), internal scroll.
- Mobile: full-screen sheet or bottom sheet; close button reachable; content scrolls within; no background scroll.
- Never let a modal exceed the viewport so the close/submit buttons become unreachable.

### A11. Responsive checklist (per page)
- [ ] 320, 375/390, 768, 1024, 1280, 1440, 1920+ checked
- [ ] No horizontal overflow on `<body>` at any tested width
- [ ] Navigation transforms correctly and remains usable
- [ ] Touch targets ≥ 44px; no hover-only features
- [ ] Images scale, no layout shift, no cropped essential content
- [ ] Tables, forms, modals, and cards behave per above
- [ ] Portrait and landscape orientation both work
- [ ] 200% zoom and increased text size (up to 200%) don't break layout

---

## Part B — Accessibility (WCAG 2.2 Level AA)

Accessibility is a **requirement**, not an enhancement. A feature that cannot be used by keyboard or screen reader is incomplete. Organized around POUR: **Perceivable, Operable, Understandable, Robust.**

### B1. Semantic HTML (foundation)
- Use the right element: `<header>`, `<nav>`, `<main>` (one per page), `<section>`/`<article>` with headings, `<aside>`, `<footer>`, `<button>`, `<a>`, `<ul>/<ol>`, `<table>`, `<form>`, `<label>`, `<fieldset>/<legend>`.
- Heading structure logical and complete (see [05](./05-layout-typography-colors.md)).
- Set `<html lang="…">` and mark language changes with `lang` on elements.
- Unique, descriptive `<title>` per page and per view in single-page apps (update on route change).
- Landmarks labeled when duplicated (`aria-label` on multiple `<nav>`).
- **Skip link** to `<main>` as first focusable element.

```html
<!-- ✅ -->
<button type="button" class="btn">Add to cart</button>

<!-- ❌ -->
<div class="btn" onclick="add()">Add to cart</div>
```

### B2. Keyboard navigation
- **Everything operable by mouse is operable by keyboard**, with no keyboard traps (except intentional, escapable ones like modals).
- Logical tab order following visual order; don't use positive `tabindex`.
- Standard keys: `Tab`/`Shift+Tab`, `Enter`/`Space` for buttons, `Enter` for links, arrows for menus/tabs/radio groups, `Esc` to dismiss.
- Custom widgets follow WAI-ARIA Authoring Practices keyboard patterns.
- Manage focus on dynamic changes: move focus into opened dialogs; return focus on close; after route changes move focus to the page heading/main; after deleting an item, move focus to a logical neighbor.
- Single-character shortcuts must be disable-able or remappable.

### B3. Focus states
- **Visible focus** on every interactive element using `:focus-visible`. Never `outline: none` without a replacement.
- Focus indicator: ≥ 2 px, ≥ 3:1 contrast against adjacent colors, not obscured by sticky headers (WCAG 2.2 *Focus Not Obscured*).
- Use a single consistent focus style token site-wide.

### B4. Screen readers
- Every control has an **accessible name** (visible label, `aria-label`, or `aria-labelledby`). Visible text and accessible name should match (*Label in Name*).
- Announce dynamic updates with live regions: `role="status"` / `aria-live="polite"` for confirmations; `role="alert"` for errors needing immediate attention. Insert the live region into the DOM **before** updating its content.
- Hide decorative content (`aria-hidden="true"`, empty `alt`), but never hide focusable elements.
- Tables: `<th scope>`, `<caption>`. Lists as real lists.
- Don't make screen reader users hear duplicate content; hide visually duplicated text appropriately.
- Test with at least one screen reader + browser pair (e.g., NVDA + Firefox/Chrome, VoiceOver + Safari).

### B5. ARIA — only where necessary
**First rule of ARIA: use native HTML first.** Add ARIA only for custom widgets or to fill genuine gaps.
- Required state attributes must be kept in sync: `aria-expanded`, `aria-selected`, `aria-checked`, `aria-pressed`, `aria-current`, `aria-invalid`, `aria-describedby`, `aria-busy`.
- Don't add roles that conflict with native semantics (`<button role="link">`).
- Invalid or redundant ARIA is worse than none.

### B6. Color contrast and visual perception
- Ratios per [05](./05-layout-typography-colors.md) §5.4: 4.5:1 text, 3:1 large text/UI components/focus indicators.
- Don't use color alone to convey meaning (links within text need underline or another non-color cue; errors need text/icon).
- Support text resizing to 200% and text spacing overrides without loss of content.
- Respect user preferences: `prefers-reduced-motion`, `prefers-contrast`, `prefers-color-scheme`, `forced-colors`.
- No content that flashes more than 3 times per second.

### B7. Alt text and non-text content
| Image type | Alt text rule |
|---|---|
| Informative | Concise description of what it conveys (not "image of") |
| Decorative | `alt=""` |
| Functional (icon button, linked logo) | Describe the **action/destination** ("Search," "Acme home") |
| Complex (chart, diagram) | Short alt + longer description/data table nearby |
| Image of text | Avoid; if unavoidable, alt = the exact text |
- Video: captions and (where needed) transcripts/audio description. Audio: transcript.
- SVG: `role="img"` + `<title>` for meaningful ones; `aria-hidden` for decorative.

### B8. Form labels and accessible errors
- Every input has a programmatically associated `<label for>` (or wrapping label). Placeholder is not a label.
- Group related inputs with `<fieldset><legend>`.
- Mark required fields in text and with `required`/`aria-required`; don't rely on color/asterisk alone.
- Errors:
  - Identified in text, adjacent to the field, linked with `aria-describedby`, and `aria-invalid="true"` set.
  - On submit failure: show an error summary at the top (`role="alert"` or focus moved to it) listing fields with links to each; move focus to the first invalid field or the summary.
  - Describe how to fix the problem (see [12](./12-forms-validation-errors.md)).
- Use `autocomplete` tokens to meet *Identify Input Purpose*.
- Don't require re-entry of info already provided (*Redundant Entry*); no cognitive tests as sole authentication (*Accessible Authentication*): allow password managers and paste.

### B9. Other WCAG 2.2 AA items to honor
- **Target size** (2.5.8) ≥ 24 px minimum; we use 44 px.
- **Dragging movements** (2.5.7): any drag has a single-pointer alternative (buttons).
- **Consistent help** (3.2.6): help/contact in the same place across pages.
- **Timeouts:** warn before session expiry and allow extension.
- **Pause/stop/hide** for auto-moving content (carousels, tickers) lasting > 5 s.
- **Page language**, **link purpose**, **bypass blocks**, **multiple ways** to find pages (nav + search or sitemap).

### B10. Accessible patterns quick reference

| Component | Must have |
|---|---|
| Modal | `role="dialog"`, `aria-modal`, label, focus trap, `Esc`, return focus |
| Menu button | `aria-expanded`, `aria-controls`, arrow-key nav |
| Tabs | `role=tablist/tab/tabpanel`, `aria-selected`, arrow keys |
| Accordion | Button in heading, `aria-expanded`, `aria-controls` |
| Toast | `role="status"` / `aria-live="polite"`, not the only means of error conveyance |
| Carousel | Pause control, labeled prev/next, not auto-advance by default |
| Tooltip | Focus + hover trigger, `aria-describedby`, `Esc` dismiss |
| Loading | `aria-busy`, status announcement, no focus loss |

### B11. Accessibility testing (minimum per page/feature)
1. **Automated:** axe-core / Lighthouse / pa11y in CI (catches roughly 30–40% of issues).
2. **Keyboard-only walkthrough** of every flow.
3. **Screen reader spot-check** of key flows (nav, forms, dialogs, dynamic updates).
4. **Zoom/reflow** at 200–400%, text-spacing overrides.
5. **Contrast** audit for all token pairs.
6. **Reduced motion** and **forced colors** check.
Record results; fix all critical/serious issues before completion.

---

## Do / Don't

**Do**
- Start mobile-first, enhance upward.
- Use native elements before ARIA.
- Provide visible focus, labels, alt text, and accessible errors.
- Test with keyboard and a screen reader.

**Don't**
- Don't ignore mobile or accessibility. Ever.
- Don't use `div`/`span` for buttons or links.
- Don't remove focus outlines without a replacement.
- Don't rely on hover, color, or gestures alone.
- Don't use fixed-width layouts or `100vh` traps on mobile.
- Don't disable zoom (`user-scalable=no`, `maximum-scale=1`).
- Don't add ARIA that you haven't verified.

---

## Master Validation Checklist

- [ ] Layout verified at all five device classes plus intermediate widths; no body overflow
- [ ] Touch targets ≥ 44px; no hover-only/gesture-only features
- [ ] Tables, forms, modals, images behave responsively
- [ ] Semantic landmarks, one `<main>`, skip link, correct `lang`, unique titles
- [ ] Full keyboard operability, logical order, no traps, managed focus
- [ ] Visible `:focus-visible` styling that is never obscured
- [ ] All controls have accessible names; dynamic content announced via live regions
- [ ] Contrast requirements met; color is never the sole cue
- [ ] Alt text appropriate per image type; media has captions/transcripts
- [ ] Form labels, error association, and error summary implemented
- [ ] `prefers-reduced-motion` respected
- [ ] Automated + manual accessibility tests run and logged
