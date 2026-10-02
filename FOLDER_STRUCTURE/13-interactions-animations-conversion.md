# 13 — Search, Filters, Animations, Micro-interactions & Conversion

> **Part of the Website Engineering System. Entry point: [`J.md`](./J.md).**
> **Responsibility of this file:** how users find things (search, filters), how the interface responds to them (animations, micro-interactions), and how the site guides them toward its goals (CTAs, trust, conversion).
> **Not covered here:** empty/loading/error state content (see [`12-forms-validation-errors.md`](./12-forms-validation-errors.md)), content and copy rules (see [`02-content-strategy.md`](./02-content-strategy.md)), visual component styling (see [`04-ui-design.md`](./04-ui-design.md)), performance budgets (see [`08-performance-and-optimization.md`](./08-performance-and-optimization.md)), analytics event implementation (see [`15-deployment-monitoring-maintenance.md`](./15-deployment-monitoring-maintenance.md)), API filtering/sorting contracts (see [`11-backend-api-database.md`](./11-backend-api-database.md) §3.8).

---

## 1. Core Principles

1. **Motion and interaction serve the user, not the designer.** Every animation must communicate something: state change, hierarchy, relationship, or feedback. If it communicates nothing, remove it.
2. **Findability before flash.** Users who cannot find what they need leave. Search and filters are conversion features, not extras.
3. **One primary action per view.** Conversion comes from clarity, not pressure.
4. **Never sacrifice usability for visual effects, or performance for animations.**
5. **Everything here must work with keyboard, touch, and reduced-motion preferences.**

---

## 2. Search

### 2.1 When Search Is Required
Add search when the site has more than ~20–30 items, multiple content types, documentation/help content, or users commonly arrive with a specific goal in mind. For small sites, good navigation and filters may be enough; document the decision.

### 2.2 Search UX Rules
- Place the search entry in a consistent, discoverable location (header on every page; icon-only is acceptable on mobile but must have an accessible name such as `aria-label="Search"`).
- Provide a visible input with a label (visually hidden if needed), a clear/reset button, and a submit control. Pressing **Enter** submits; **Esc** closes/clears overlays; `/` may focus search as a shortcut (do not conflict with typing in inputs).
- Preserve the query in the input and in the URL (`/search?q=boots`) so results are shareable, bookmarkable, and work with the back button.
- Show the result count and echo the query ("24 results for 'boots'").
- Highlight matched terms in results where helpful.
- Provide result type grouping or tabs when searching across content types (products, articles, help).

### 2.3 Debouncing & Request Control
- Debounce as-you-type requests (**~250–400 ms**); do not fire a request per keystroke.
- Require a sensible minimum length (e.g., 2–3 characters) before suggestions.
- **Cancel in-flight requests** when a newer query is issued, and ignore out-of-order responses so stale results never overwrite newer ones.
- Cache recent queries on the client where safe; server-side rate limiting applies (file 10 §5).
- Show a loading indicator for slow searches (file 12 §4).

### 2.4 Suggestions / Autocomplete
- Suggestions MUST be fast, relevant, and limited (about 5–8). Include recent searches and popular queries where available.
- Implement an accessible combobox pattern: `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`; arrow keys navigate, Enter selects, Esc closes.
- Never display suggestions that leak private or unauthorized data.
- Suggestions must degrade gracefully: if the suggestion service fails, standard search still works.

### 2.5 Relevance & Results Quality
- Handle typos, plural/singular forms, synonyms, case, and accents where feasible (use a search engine such as full-text/index-based search for anything beyond trivial datasets; do not rely on slow `LIKE '%term%'` scans).
- Rank by relevance, then by a stable tiebreaker; provide sort options when useful (relevance, newest, price).
- Sanitize and escape queries; protect against injection and expensive patterns (file 10 §3).
- Log queries (without personal data) to analyze zero-result searches and improve content/synonyms (file 15).

### 2.6 No-Result Handling
- Never show a blank page. Follow the "no results" empty state in file 12 §5: echo the query, suggest fixes (check spelling, fewer words), offer **Clear filters**, show popular/related items, and provide a contact/help option.
- Offer "Did you mean…?" corrections when the engine supports it.

---

## 3. Filters, Sorting & Faceted Navigation

### 3.1 Filter UX Rules
- Show only filters that are meaningful for the current result set; order them by importance.
- Support **multiple simultaneous filters** with clear AND/OR semantics (e.g., values within one facet = OR; across facets = AND). Document the semantics.
- Use the right control: checkboxes (multi-select), radio (single), range slider with numeric inputs (price), toggle (boolean), search-within-filter for long lists.
- Show **facet counts** when cheap to compute; disable or hide options that yield zero results rather than letting users hit dead ends.
- Display **active filters as removable chips/tags** near the results, with an obvious **"Clear all"** action. Each chip must be removable via keyboard.
- Show the number of results and update it live (announce via `aria-live="polite"`).
- Mobile: put filters in a drawer/bottom sheet with an "Apply" button and result count ("Show 48 results"), plus "Reset". Keep the sticky access to filters visible.

### 3.2 Filter State & URL Synchronization
- Filter, sort, search term, and page/cursor state MUST be **synchronized with the URL query string** where the view is shareable or navigable (listings, catalogs, search results, admin tables):

```text
/products?category=shoes&size=42&minPrice=1000&sort=-createdAt&page=2
```
- Back/forward navigation must restore the previous filter state; reloading the page must reproduce the same view.
- Changing filters resets pagination to page 1.
- Validate and sanitize URL parameters on load; ignore or reset unknown/invalid values gracefully (never crash).
- Avoid pushing a new history entry for every keystroke or slider tick; use "replace" while typing/dragging and "push" on committed changes.
- Keep **scroll position and focus** sensible after results update (do not jump to top unexpectedly; move focus to results heading when changed by user action if needed).

### 3.3 Sorting
- Provide sensible default sorting and 3–5 relevant options. Show current sort clearly. Sorting must be stable and backed by indexed fields (file 11 §3.8).

### 3.4 Performance
- Debounce text/range filter changes; fetch results incrementally; keep previous results visible with an "updating" indicator rather than flashing to empty.
- Filter operations on large data MUST happen server-side.

---

## 4. Animations

### 4.1 When to Animate (and When Not To)
**Animate to:**
- Show **cause and effect** (button press, toggle, item added to cart).
- Show **spatial relationships** (drawer slides from the edge it lives on; dropdown grows from its trigger).
- Provide **continuity** across state changes (shared element transitions, list reorder).
- Draw attention to something genuinely important (new error, saved confirmation).
- Make waiting feel shorter (skeleton shimmer, progress).

**Do NOT animate:**
- Decorative motion with no meaning, looping attention-grabbers, or auto-playing background motion that competes with content.
- Content users must read while it is moving.
- Anything that delays access to content or controls.

### 4.2 Timing & Easing Standards
Define motion tokens once (in the design system, file 04/05) and reuse them. Baseline:

| Interaction | Duration | Easing |
|---|---|---|
| Hover / focus / press feedback | 100–200 ms | ease-out |
| Small element transitions (tooltips, toggles, dropdowns) | 150–250 ms | ease-out |
| Modals, drawers, page sections | 200–350 ms | ease-out in / ease-in out |
| Page/route transitions | 200–400 ms (max) | ease-in-out |
| Scroll-reveal | 300–500 ms | ease-out |

- **Entrances use ease-out, exits use ease-in, and exits are faster than entrances.**
- Nothing user-triggered should take longer than ~500 ms.
- No bounce/elastic/overshoot easing in professional UI unless it is part of the brand and justified.

### 4.3 Animation Types — Rules

**Page transitions**
- Keep subtle (fade/slide of a few pixels). Never block navigation or hide content until the animation finishes. Preserve scroll restoration and focus management; move focus to the new page's main heading.

**Hover & focus**
- Provide hover feedback on all interactive elements (color/elevation/underline), always paired with an equivalent `:focus-visible` style. Hover is not available on touch — never hide essential info behind hover only.

**Scroll animations**
- Use sparingly for reveal on enter (fade/translate ≤ 24 px) via `IntersectionObserver`; animate once, not repeatedly.
- No scroll-jacking (hijacking native scroll), parallax that causes motion sickness, or content that is invisible until JS runs. Content must be visible and indexable without the animation (progressive enhancement, SEO — file 09).

**Loading animations**
- Skeleton shimmer and spinners follow file 12 §4. Keep them lightweight and non-distracting.

**Modal & overlay transitions**
- Fade backdrop + scale/slide dialog (≤ 250 ms). On open: trap focus, move focus into the dialog, `Esc` closes, restore focus to the trigger on close. Respect scroll lock.

**Feedback animations**
- Success checkmarks, inline validation shake (subtle, ≤ 300 ms, only once), item-added indicators. They must be accompanied by text/ARIA announcements, never animation alone.

### 4.4 Performance Rules for Animation
- Animate only **`transform` and `opacity`** wherever possible (GPU-friendly, avoid layout thrash). Do not animate `width`, `height`, `top`, `left`, `margin`, or box-shadow on large areas.
- Avoid causing layout shift (CLS) — reserve space (file 08).
- Prefer CSS transitions/animations; use JS animation libraries only when necessary, and only if their bundle cost is justified (file 08: no unnecessary dependencies).
- Keep animation off the critical rendering path; lazy-load heavy animation assets (Lottie, video, 3D). Pause off-screen or hidden-tab animations.
- Target steady 60 fps on mid-range mobile devices. Test on low-end hardware.

### 4.5 Accessibility Rules for Animation (Mandatory)
- **Respect `prefers-reduced-motion`:** when set, remove or drastically reduce non-essential motion (replace slides/parallax with instant or fade-only changes).

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
- No flashing content more than 3 times per second (seizure risk).
- Auto-playing motion/carousels longer than 5 seconds MUST have a visible pause/stop control.
- Information must never be conveyed by animation alone.

---

## 5. Micro-interactions

Micro-interactions are small, single-purpose responses to a user action. Each one follows: **Trigger → Rules → Feedback → Loop/Mode**. Keep them fast, subtle, and consistent across the site.

### Required Micro-interactions

| Element | Required feedback |
|---|---|
| **Buttons** | Hover, `:focus-visible`, pressed/active (slight scale/shade), disabled style, loading state (spinner + guard against double-click) |
| **Links** | Hover/focus underline or color change; visited state where useful |
| **Toggles / switches / checkboxes** | Immediate visual state change, clear on/off labels, announced state (`aria-checked`) |
| **Form fields** | Focus ring, inline validation icon/message, character counter, password show/hide, success tick on valid |
| **Form submission** | Button loading → success/failed state (file 12 §2.4) |
| **Success** | Confirmation toast/inline message/checkmark (e.g., "Added to cart" with undo or view-cart link) |
| **Copy-to-clipboard** | "Copied" confirmation near the control, announced politely |
| **Favorite / like / save** | Instant optimistic toggle with rollback on failure |
| **Add to cart** | Cart badge updates with brief highlight; clear confirmation with next step |
| **Drag & drop / reorder** | Visible grab handle, drag preview, drop target highlight, keyboard alternative |
| **Tabs / accordions / dropdowns** | Smooth open/close, clear active state, correct ARIA roles and keyboard support |
| **Hover cards / tooltips** | Delay ~300–500 ms to avoid flicker; dismissable; keyboard accessible (not hover-only) |
| **Pull-to-refresh / swipe (mobile)** | Visible progress; provide button alternatives |
| **Progress (multi-step, upload)** | Visible step/percent indicator |

### Rules
- Feedback appears within **100 ms** of the action.
- Every hover effect has a focus and touch equivalent.
- Haptics/sound, if used, are opt-in and never required.
- Don't stack multiple effects on one element (e.g., scale + glow + shadow + color) — pick one or two.
- Interactions must be consistent: the same type of element behaves the same everywhere (reuse components, file 04).

---

## 6. Conversion

### 6.1 Define Conversion First
Before designing any page, the agent MUST know (from file 01): the **primary conversion goal** (purchase, signup, booking, lead, download, contact) and **secondary goals** (newsletter, share, view pricing). Every page must support at least one defined goal and have a clear next step. Pages with no purpose should be removed or merged.

### 6.2 CTA Placement
- Every page has **one primary CTA** that is visually dominant. Secondary CTAs are visually subordinate (outline/text style).
- Place CTAs where intent peaks: **above the fold** (hero), after value/benefit sections, after proof (testimonials/case studies), at the end of long pages, and in the sticky header/mobile sticky bar where appropriate.
- Repeat the same primary CTA down long pages; do not introduce competing CTAs with different goals in the same section.
- Mobile: keep the CTA reachable within thumb zone; consider a sticky bottom CTA for high-intent pages (without covering content or accessibility controls).
- Never hide the primary CTA behind hover or inside carousels.

### 6.3 CTA Hierarchy & Copy

```text
Primary CTA     → filled, high-contrast, strongest brand color   ("Start free trial")
Secondary CTA   → outline or tinted                              ("See pricing")
Tertiary        → text link                                      ("Learn more")
```
- CTA text is **specific, action-oriented, and benefit/outcome-led**: "Get my quote", "Book a demo", "Download the guide" — not "Submit", "Click here", or "Learn more" alone.
- Be consistent: the same action uses the same label everywhere.
- Add reassurance microcopy near friction points ("No credit card required", "Cancel anytime", "Takes 2 minutes").
- Buttons are real `<button>`/`<a>` elements with sufficient size, contrast, and focus states (file 07).

### 6.4 Trust Signals & Social Proof
Use real, verifiable proof, placed near decision points (hero, pricing, forms, checkout):
- Customer logos, testimonials with real names/roles/photos (with permission), ratings/reviews, case studies with measurable results, usage numbers.
- Security/compliance badges, payment provider logos, money-back/refund guarantee, clear returns/shipping policy.
- Press mentions, awards, certifications, team/"about" transparency, physical address, support availability.
- **Never fabricate** testimonials, ratings, logos, statistics, or urgency. Fake scarcity ("Only 2 left!" when false) and dark patterns are prohibited.
- Keep proof current (dates, versions) and consistent with the content strategy (file 02).

### 6.5 Contact Options & Lead Generation
- Make contact easy and visible: header/footer contact link, contact page, and context-aware options (email, phone, form, chat, booking link, WhatsApp as relevant to audience).
- Lead forms: minimal fields (usually name + email + one qualifying field), explain what happens next and response time, show privacy assurance, and send a confirmation email/message.
- Offer **lead magnets** (guide, checklist, trial, quote) with clear value and low-friction capture.
- Avoid intrusive pop-ups: no immediate-load modals, no unclosable overlays, and no pop-ups that cover content on mobile (also harms SEO). Exit-intent or timed prompts must be dismissible, rare, and remembered after dismissal.
- Chat widgets must be lightweight, deferred-loaded, and not block content or CTAs.

### 6.6 Purchase / Signup Flow (Conversion Funnel)
- Minimize steps and fields; show progress; allow guest checkout/signup where appropriate; support social/passkey login only if file 10 requirements are met.
- Show total cost (including taxes/shipping/fees) **as early as possible**; avoid surprise costs.
- Provide persistent order/plan summary, editable cart, clear return/cancel policy, and trust signals at payment.
- Offer multiple appropriate payment methods; use the payment provider's hosted fields (file 10 §10).
- Recover abandoned flows: save progress, allow resume, and (with consent) send reminder emails.
- Confirmation page/email: state what was purchased, reference number, what happens next, how to get help.
- Every step has loading, error, and validation handling (file 12).

### 6.7 Friction Audit
For each conversion path, count clicks, fields, and decisions; remove anything that does not serve the goal. Check for: unclear value proposition, buried CTA, slow load, broken mobile layout, forced registration, confusing pricing, unclear errors, missing trust cues.

### 6.8 Measurement
- Instrument every conversion step (CTA clicks, form starts/completions/errors, signups, purchases, search usage, zero-result searches) per the analytics plan in file 15.
- Define funnel steps and success metrics up front; test improvements with A/B tests only with sufficient traffic and a clear hypothesis.
- Respect consent and privacy regulations before tracking (file 10 §10).

---

## 7. Do / Don't

**Do**
- Debounce search, cancel stale requests, and sync search/filter state with the URL.
- Show active filters, result counts, and a clear "Clear all".
- Use animation only to communicate; keep it under ~300 ms and transform/opacity-based.
- Support `prefers-reduced-motion`.
- Give instant, accessible feedback for every interaction.
- Define one primary CTA per page with specific, outcome-led text.
- Use real, verifiable trust signals near decision points.

**Don't**
- Fire a search request per keystroke or let stale responses overwrite new ones.
- Show a dead-end "no results" without recovery options.
- Add animations "because it looks cool", loop attention-grabbing motion, or hijack scrolling.
- Hide essential information behind hover.
- Use vague CTAs ("Submit", "Click here") or multiple competing primary CTAs.
- Fabricate testimonials, statistics, urgency, or scarcity.
- Use intrusive pop-ups or dark patterns.
- Sacrifice performance or accessibility for animation.

---

## 8. Checklists

### Search & filter checklist
- [ ] Search is discoverable on all relevant pages and keyboard accessible
- [ ] Debounce, min-length, cancellation of stale requests
- [ ] Suggestions use accessible combobox pattern and degrade gracefully
- [ ] Query and filters reflected in URL; back/forward and reload work
- [ ] Active filter chips, result count, "Clear all"
- [ ] No-result state with recovery options
- [ ] Server-side execution with indexed/allow-listed fields
- [ ] Mobile filter drawer with Apply/Reset

### Animation & micro-interaction checklist
- [ ] Each animation has a stated purpose
- [ ] Durations/easings follow the motion tokens
- [ ] Only transform/opacity animated; no layout shift
- [ ] `prefers-reduced-motion` honored; no flashing; pause control for auto-motion
- [ ] Hover has focus-visible and touch equivalents
- [ ] Buttons/toggles/forms provide immediate feedback
- [ ] Content visible and functional without animation/JS-dependent reveal

### Conversion checklist
- [ ] Primary and secondary goals defined per page
- [ ] One primary CTA, clear hierarchy, specific copy
- [ ] CTAs placed at high-intent points; mobile reachable
- [ ] Real trust signals and social proof near decisions
- [ ] Contact and lead capture options visible; minimal fields
- [ ] Purchase/signup flow friction-audited; costs transparent
- [ ] Conversion events instrumented (file 15)
- [ ] No dark patterns or intrusive pop-ups

---

## 9. Validation Criteria (Definition of Done)

1. Typing rapidly in search produces a bounded number of requests, and results always match the latest query.
2. Copying a filtered/search URL into a new tab reproduces the exact same view; back/forward restores prior state.
3. With reduced-motion enabled, no non-essential motion remains, and the site is fully usable.
4. Lighthouse/DevTools profiling shows animations run without layout thrash or dropped frames on a mid-range mobile profile.
5. Every interactive element has hover, focus-visible, active, and disabled/loading states as applicable.
6. A reviewer can identify the primary CTA of any page within five seconds, and every conversion step fires its analytics event.
7. No fabricated social proof or deceptive urgency exists anywhere in the site.

(Test procedures: [`14-testing-quality.md`](./14-testing-quality.md).)
