# 03 — UX Design

**Owns:** user journeys, flows, information architecture, discoverability, cognitive load, interaction patterns, feedback, confirmation, error prevention, onboarding, conversion flow structure.
**Related:** visual components [04](./04-ui-design.md); navigation components [06](./06-branding-and-navigation.md); form mechanics [12](./12-forms-validation-errors.md); CTA tactics [13](./13-interactions-animations-conversion.md).

---

## 1. Core UX Rule

> **Every major user action MUST have an obvious next step.**
> No dead ends. No ambiguity about "what happens now."

After any action (submit, add to cart, sign up, save, delete), the user must see: (a) confirmation of what happened, and (b) what they can do next.

---

## 2. User Journeys and Flows

### 2.1 Required artifacts (before UI work)
For each primary user group, write down:

1. **Entry points** — search, ads, social, direct, email.
2. **Journey stages** — Aware → Evaluate → Decide → Act → Use → Return.
3. **Critical flows** — the 3–5 tasks that matter most (sign up, purchase, book, contact, find information).
4. **Happy path** and **failure paths** (invalid input, network failure, out of stock, expired session, permission denied).

Document flows as text or Mermaid in `/docs/flows.md`:

```text
Landing → Product list → Product detail → Add to cart → Cart → Checkout
   │                                                           │
   └─ (no results) → Empty state → Suggest alternatives         ├─ Payment fails → Error + retry
                                                                └─ Success → Confirmation + next steps
```

### 2.2 Flow rules
- Minimize steps to the primary goal. Each extra step loses users; remove any step you can't justify.
- Do not force account creation before value is shown, unless legally or technically required. Offer guest flow where reasonable.
- Preserve user input on errors and navigation (back button must not wipe forms).
- Allow users to go back, edit, and cancel at every step of multi-step flows.
- Show progress for multi-step flows ("Step 2 of 4").
- Deep links must work: any state worth sharing has a URL.

---

## 3. Information Architecture (IA)

- Group content by **user mental model**, not by org chart.
- Keep top-level navigation to **5–7 items**.
- Limit depth: any important content ≤ **3 clicks** from the home page.
- Use consistent, descriptive labels (card-sort with the user's language, not internal terms).
- Every page has exactly one place in the hierarchy and a predictable URL (see [09](./09-seo.md) for URL rules).
- Create a **sitemap diagram** (text tree) before building:

```text
/
├── /products
│   ├── /products/{category}
│   └── /products/{category}/{slug}
├── /pricing
├── /about
├── /contact
├── /blog
│   └── /blog/{slug}
├── /account            (auth)
│   ├── /account/orders
│   └── /account/settings
└── /legal/{privacy|terms|cookies}
```

---

## 4. Navigation and Discoverability

(Component specs in [06](./06-branding-and-navigation.md).)

- Users must always know: **where am I, where can I go, how do I get back.**
- Highlight the current location (active nav state, breadcrumbs, page title).
- Make key actions visible without hunting: primary CTA persistent in header or sticky on mobile where appropriate.
- Don't hide critical functions behind icons without labels. Icon-only controls need an accessible name and a tooltip or visible text where meaning is ambiguous.
- Provide search for sites with > ~30 pages or large catalogs (see [13](./13-interactions-animations-conversion.md)).
- Don't rely on hover for essential content; touch devices have no hover.

---

## 5. Cognitive Load

- **One primary task per screen.** One primary CTA per view.
- Chunk information (groups of ≤ 7 items), use progressive disclosure (accordions, "show more," steps) instead of showing everything.
- Use recognition over recall: show options, previous choices, and recent items; don't make users remember.
- Smart defaults: pre-select the most common option, pre-fill known data (with consent), detect locale/currency.
- Reduce choices (Hick's Law): 3 pricing tiers beat 9.
- Keep forms short; ask only for what's necessary (see [12](./12-forms-validation-errors.md)).
- Use plain language; avoid jargon and internal terms.
- Avoid auto-playing media, surprise modals, and stacked popups (especially on first load).

---

## 6. Interaction Patterns

Use standard patterns users already know:

| Need | Use | Avoid |
|---|---|---|
| Navigate to another page | Link (`<a>`) | Button that changes URL by script |
| Perform an action | Button | Link styled as button for actions |
| Choose 1 of few | Radio / segmented control | Dropdown for < 5 options |
| Choose 1 of many | Select / combobox with search | Long radio lists |
| Toggle on/off immediately | Switch | Checkbox that needs a Save button |
| Contextual info | Tooltip / inline help | Long modal for short text |
| Blocking decision | Modal dialog | Modal for non-blocking info |
| Brief status | Toast / inline message | Alert dialog |

Rules:
- Interactive elements must **look** interactive (affordance) and **respond** (feedback).
- Primary, secondary, tertiary, and destructive actions must be visually distinct (see [04](./04-ui-design.md)).
- Consistency: the same action looks and behaves the same everywhere.
- Don't hijack native behavior (scroll, back button, right-click, zoom, text selection) without a strong reason.

---

## 7. Feedback

Every user action gets feedback within the time budgets below:

| Response time | Required feedback |
|---|---|
| < 100 ms | Immediate visual state change (pressed, toggled) |
| 100 ms – 1 s | Subtle indicator or optimistic update |
| 1 – 10 s | Visible loading indicator (spinner/skeleton) |
| > 10 s | Progress indicator with estimate and cancel option |

Feedback types: inline success text, toast, button state change, updated counters, focus move to confirmation. Detailed loading/empty/error specs live in [12](./12-forms-validation-errors.md).

- Success feedback must say **what** succeeded ("Order #1042 placed. Confirmation sent to a@b.com").
- Feedback must be accessible: use `aria-live` regions (see [07](./07-responsive-and-accessibility.md)) and don't convey status by color alone.

---

## 8. Confirmation and Error Prevention

Prevent errors rather than just report them.

- **Destructive actions** (delete, cancel subscription, publish, irreversible changes) need confirmation that names the object and consequence: "Delete project 'Acme Redesign'? This removes 14 files and can't be undone." Button labels are specific: **Delete project** / **Keep project**, not OK/Cancel.
- Prefer **undo** over confirmation for reversible, frequent actions (archive, remove from list): show "Item removed. Undo."
- Disable or hide invalid actions **with an explanation** (disabled controls need nearby text saying why).
- Constrain inputs: date pickers, input types, input masks where helpful, character counters, autocomplete suggestions.
- Validate early but not aggressively: on blur or submit, not on every keystroke for first-time entry (see [12](./12-forms-validation-errors.md)).
- Prevent duplicate submissions: disable the submit button during processing; make server operations **idempotent** where money or records are created.
- Warn before losing unsaved changes.
- Make wrong paths hard and right paths easy (e.g., put destructive buttons away from primary ones).

---

## 9. Onboarding

For sites with accounts or complex products:

- Show value **before** asking for effort. Let the user try or preview first.
- First-run experience: welcome with one clear next step, not a tour of everything.
- Use progressive onboarding (contextual hints when a feature is first relevant) instead of long up-front tutorials.
- Always provide **skip** and a way to **re-access** help.
- Empty states are onboarding opportunities (see [12](./12-forms-validation-errors.md)): explain what goes here and offer a button to add the first item.
- Email verification and password setup flows must be short and recoverable (resend, change email).
- Measure completion at each step (see [15](./15-deployment-monitoring-maintenance.md)).

---

## 10. Conversion Flow (structure)

(Tactics: [13](./13-interactions-animations-conversion.md).)

- Map the funnel: **Landing → Interest → Action → Confirmation → Follow-up.** Define the analytics event for each stage.
- Remove distractions on conversion pages (checkout, signup): minimal navigation, no competing CTAs.
- Show costs, delivery, and terms **before** the last step; no surprise fees.
- Confirmation page/state: confirms the result, restates details, tells what happens next and when, offers a single sensible follow-up action.
- Provide recovery paths: abandoned cart/form data saved, easy retry on payment failure, clear support contact.

---

## 11. Page-Level UX Template

For every page, define:

```markdown
## <Page>
- User goal on arrival:
- Primary action:
- Secondary actions:
- Required content blocks (ordered):
- States: loading / empty / error / success / permission-denied
- Entry points and exit points:
- Edge cases (long text, no image, offline, slow network):
```

---

## 12. Do / Don't

**Do**
- Design the failure path as carefully as the happy path.
- Test flows with a keyboard and on a phone-sized viewport before declaring done.
- Reuse established patterns and familiar labels.
- Keep users oriented (breadcrumbs, titles, progress).

**Don't**
- Don't leave users on a blank or ambiguous screen after an action.
- Don't use modals for things that should be pages (long forms, complex workflows).
- Don't use dark patterns (hidden costs, fake urgency, confirm-shaming, pre-checked marketing consent, hard-to-cancel flows).
- Don't require users to re-enter data you already have.
- Don't invent novel interaction patterns when a standard one exists.

---

## 13. Validation Checklist

- [ ] Journeys and critical flows documented, including failure paths
- [ ] Sitemap exists; key content ≤ 3 clicks; nav ≤ 7 top-level items
- [ ] Every page has one primary action
- [ ] Every action gives feedback; every flow has a clear next step
- [ ] Destructive actions have specific confirmation or undo
- [ ] Duplicate submission prevented
- [ ] Multi-step flows show progress, allow back/edit, preserve input
- [ ] Onboarding is skippable and re-accessible; empty states guide action
- [ ] Conversion funnel stages mapped to analytics events
- [ ] No dark patterns
