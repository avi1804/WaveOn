# 06 — Branding & Navigation

**Owns:** brand identity application, logo usage, tone of voice, visual consistency rules, and all navigation components (navbar, sidebar, footer, breadcrumbs, mobile navigation, active states, hierarchy).
**Related:** IA and discoverability principles in [03](./03-ux-design.md); tokens in [05](./05-layout-typography-colors.md); a11y behavior in [07](./07-responsive-and-accessibility.md).

---

## 1. Branding

### 1.1 Brand identity intake
Before designing, collect (or ask for) the following. If missing, propose a minimal identity and mark it **proposed** in `PROJECT_BRIEF.md`.

| Item | Details |
|---|---|
| Brand name & usage | Exact spelling, capitalization, trademark symbols |
| Logo files | SVG primary, mark-only, monochrome/reversed versions, favicon |
| Brand colors | Primary, secondary, accent (feeds [05](./05-layout-typography-colors.md) tokens) |
| Typography | Brand typefaces and web licenses |
| Imagery style | Photography/illustration direction |
| Tone of voice | Personality traits, do/don't phrases |
| Brand don'ts | Existing guideline restrictions |

If brand colors fail contrast requirements as text colors, keep them for large elements and backgrounds, and derive an accessible darker/lighter variant for text and controls. Do not alter the logo itself.

### 1.2 Logo usage
- Use **SVG** for logos (crisp at all sizes, small payload). Provide `alt` text equal to the brand name when the logo is a link/home, or `alt=""` if adjacent visible text already names it.
- Header logo links to the home page.
- Maintain **clear space** around the logo (≥ the height of the logo's main mark) and a **minimum size** (e.g., ≥ 24px tall; provide a compact mark for small spaces).
- Never stretch, rotate, recolor outside approved variants, add effects, or place on low-contrast backgrounds.
- Provide: favicon (`.ico` + SVG), Apple touch icon (180×180), PWA/maskable icons if applicable, social share image (see [09](./09-seo.md)).

### 1.3 Brand colors
Brand colors map onto semantic tokens (Primary/Secondary); components never reference "brand blue" directly. See [05](./05-layout-typography-colors.md).

### 1.4 Tone of voice
Define in 3–4 adjectives with do/don't examples and apply to **all** copy including microcopy, errors, and emails.

```text
Example: Friendly, clear, confident, never flippant.
✅ "We couldn't process your card. Check the number or try another card."
❌ "Oops!! Something went wrong :("
```

- Be consistent between marketing and product UI.
- Errors and legal-sensitive messages use plain, calm language, never humor at the user's expense.
- Follow the content style guide from [02](./02-content-strategy.md).

### 1.5 Visual consistency
- Same tokens, components, iconography, imagery treatment, and motion style across every page, including emails, error pages (404/500), PDFs, and admin areas.
- Brand expression comes from color, type, imagery, and voice, not from custom UI behavior.
- Audit new pages against existing ones side by side before completion.

---

## 2. Navigation Principles

1. **Predictable:** navigation looks and behaves the same on every page.
2. **Understandable at every screen size:** the information hierarchy is identical on mobile and desktop; only the presentation changes.
3. **Honest labels:** use words the user would use; avoid cleverness.
4. **Orienting:** the user always knows where they are.
5. **Efficient:** key destinations reachable in ≤ 3 clicks/taps (see [03](./03-ux-design.md)).

### Navigation hierarchy
```text
Level 1  Global navigation (header): 5–7 core destinations + primary CTA
Level 2  Section/local navigation (sidebar, tabs, sub-menu)
Level 3  Contextual navigation (breadcrumbs, related links, in-page anchors)
Utility  Account, cart, search, language, support
Footer   Complete secondary map, legal, contact, social
```

---

## 3. Navbar (Header)

### Requirements
- Contains, in order: logo (home link) → primary nav links → utility actions (search, account, cart) → **one** primary CTA.
- 5–7 top-level items; group the rest into menus or the footer.
- Sticky header is allowed only if it's compact (≤ ~64–72px tall on desktop, ≤ 56px on mobile) and doesn't hide anchored content (use `scroll-padding-top`).
- Dropdown/mega-menu: open on click (and optionally on hover for pointer devices), **keyboard-operable**, closes on `Esc`/outside click, doesn't open on mere focus-in-passing, doesn't disappear when the pointer travels diagonally (hover intent tolerance).
- Include a **skip link** ("Skip to main content") as the first focusable element.
- Wrap in `<header>` with `<nav aria-label="Main">`.

### Do / Don't
- ✅ Show the CTA as a visually distinct button.
- ✅ Keep order consistent with importance (frequent/important first).
- ❌ Don't exceed ~7 items; don't use clever labels ("Wonderland"); don't nest menus > 2 levels deep.

---

## 4. Mobile Navigation

- Below the nav breakpoint (see [07](./07-responsive-and-accessibility.md)), collapse into a **menu button** (labeled "Menu" or with an accessible hamburger: `aria-label="Open menu"`, `aria-expanded`, `aria-controls`).
- Open as a full-height drawer or full-screen panel; **trap focus**, close with `Esc`, close button, and tap-outside; lock background scroll; restore focus.
- Keep the **same hierarchy and labels** as desktop. Sub-items use accordions (tap to expand) not hover.
- Keep the primary CTA and key utility (search, cart, account) reachable without opening the drawer if they are core to the conversion goal (e.g., cart icon with count).
- Bottom tab bars (for app-like sites): 3–5 items with icon **and** label, active state clear.
- Touch targets ≥ 44×44px; adequate spacing to avoid mis-taps.
- Close the menu automatically after navigation.

---

## 5. Sidebar (apps, dashboards, docs)

- Use for sections with many related destinations (admin, docs, account).
- Group items under headings; limit to ~7 groups; highlight the active item (and parent group).
- Collapsible to icons-only on desktop (icons need labels via tooltip + accessible name); becomes a drawer on mobile.
- Persist collapsed/expanded state as a user preference.
- Wrap in `<nav aria-label="...">`; mark the current page with `aria-current="page"`.
- Role-based visibility: hide items the user cannot access, **and** enforce authorization server-side (see [10](./10-security-authentication-authorization.md)).

---

## 6. Footer

- Present on every page.
- Contains: brand + one-line description, grouped link columns (product/company/resources/support), contact info, legal links (Privacy, Terms, Cookies), social links (labeled accessibly), newsletter signup only if in goals, copyright with current year (generate dynamically), language/currency selectors if used.
- Repeat key conversion paths ("Contact," "Book," "Pricing").
- On mobile: columns stack, or collapse into accordions for long lists.
- Wrap in `<footer>`; use `<nav aria-label="Footer">` for link groups.
- Footer link text is descriptive and contrast-compliant (don't use faint gray).

---

## 7. Breadcrumbs

- Use on sites with ≥ 3 levels of hierarchy (catalogs, docs, blogs with categories).
- Show the **location hierarchy** (not the user's history): Home › Category › Subcategory › Current page.
- Last item = current page, not a link, with `aria-current="page"`.
- Markup: `<nav aria-label="Breadcrumb"><ol>…</ol></nav>`.
- On small screens, truncate middle items (… ) or show only the parent link ("‹ Back to Category").
- Add `BreadcrumbList` structured data (see [09](./09-seo.md)).

---

## 8. Active States and Wayfinding

- Current page link: visually distinct (weight, underline/indicator bar, color + non-color cue) **and** `aria-current="page"`.
- Parent sections stay highlighted when a child page is active.
- Hover, focus-visible, active, and visited states defined for all nav links.
- Page `<title>` and H1 match nav labels closely so users confirm they arrived at the right place.
- In-page navigation (table of contents) for long pages: sticky on desktop, collapsible on mobile, highlights current section.

---

## 9. Navigation Behavior Rules

- Links navigate; buttons act. Navigation items must be real links (`<a href>`) so they work with middle-click, open-in-new-tab, crawlers, and no-JS.
- Don't open links in new tabs by default. If you do (external, downloads), indicate it ("opens in new tab") and add `rel="noopener noreferrer"`.
- Preserve scroll and state on back/forward; restore scroll position on back navigation.
- 404 page: branded, helpful (search, popular links, home link), correct 404 status code.
- Redirects: use 301 for moved content; avoid redirect chains.
- Pagination links are real links with clear current-page state.

---

## 10. Do / Don't Summary

**Do**
- Keep nav identical in structure across pages and screen sizes.
- Make the current location always obvious.
- Use accessible disclosure patterns for menus.
- Treat the footer as a secondary sitemap.

**Don't**
- Don't hide primary navigation behind hover-only interactions.
- Don't use icon-only nav without labels/accessible names.
- Don't change the nav layout between pages without a reason (e.g., simplified checkout header is acceptable and intentional).
- Don't use different names for the same destination in header, footer, and page titles.
- Don't stretch, recolor, or distort the logo.

---

## 11. Validation Checklist

- [ ] Brand assets collected or proposed items marked; logo is SVG with proper alt and clear space
- [ ] Brand colors mapped to semantic tokens and contrast-checked
- [ ] Tone of voice documented and applied to microcopy and errors
- [ ] Header has logo, ≤ 7 items, one primary CTA, skip link, and `aria-label`
- [ ] Mobile menu: button states, focus trap, `Esc`, scroll lock, same hierarchy as desktop
- [ ] Active page indicated visually and with `aria-current`
- [ ] Breadcrumbs on deep hierarchies with structured data
- [ ] Footer contains legal links, contact, and key paths on every page
- [ ] Navigation works fully by keyboard and with a screen reader
- [ ] Custom 404 returns a real 404 status and offers a way forward
