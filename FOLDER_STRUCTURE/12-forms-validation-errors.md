# 12 — Forms, Validation, Loading, Empty & Error States

> **Part of the Website Engineering System. Entry point: [`J.md`](./J.md).**
> **Responsibility of this file:** every place a user types data or waits for data — forms, validation UX, and the four non-happy-path UI states: **loading, empty, error, and success**.
> **Not covered here:** server-side security of inputs (see [`10-security-authentication-authorization.md`](./10-security-authentication-authorization.md)), API error format (see [`11-backend-api-database.md`](./11-backend-api-database.md) §3.6), visual styling of inputs/alerts/toasts (see [`04-ui-design.md`](./04-ui-design.md)), responsive/accessibility fundamentals (see [`07-responsive-and-accessibility.md`](./07-responsive-and-accessibility.md)), search/filter UI (see [`13-interactions-animations-conversion.md`](./13-interactions-animations-conversion.md)).

---

## 1. Core Principles

1. **Every screen has more than a happy path.** A feature is not complete until loading, empty, error, and success states are designed and implemented.
2. **Help users succeed; don't punish them.** Prevent errors first, explain errors clearly second.
3. **Two-layer validation, always:**

```text
Frontend validation  (speed + guidance)
        +
Backend validation   (truth + security)
```

   Frontend validation improves UX. Backend validation is mandatory and authoritative. **Never rely only on frontend validation.**
4. **Never lose user input.** Failed submissions, network errors, and validation errors MUST NOT clear what the user typed.
5. **Always give feedback.** Every user action produces a visible response within ~100 ms (pressed state, spinner, message, or navigation).

---

## 2. Forms

### 2.1 Form Design Rules
- Ask only for information that is truly needed. Every extra field lowers completion rates and increases privacy risk.
- Prefer **single-column** layouts; group related fields with clear headings; keep logical order.
- Use multi-step forms for long processes, with a progress indicator, back/next, and saved progress.
- Mark **optional** fields as "(optional)" rather than marking everything required with asterisks — or choose one convention and apply it consistently across the site.
- Order fields as users expect (e.g., name → email → message). Put the primary action at the end, aligned consistently.
- Use inline help text only where it prevents mistakes (format examples, why we need it); do not clutter.

### 2.2 Labels & Inputs
- **Every input MUST have a visible, persistent `<label>`** programmatically associated with it (`for`/`id`). Placeholders are hints, NOT labels; they disappear and fail contrast/accessibility.
- Use the correct input type and attributes to trigger the right mobile keyboard and browser assistance:

| Data | Use |
|---|---|
| Email | `type="email"`, `autocomplete="email"`, `inputmode="email"` |
| Phone | `type="tel"`, `autocomplete="tel"` |
| Number/PIN | `inputmode="numeric"` (avoid `type="number"` for IDs/codes) |
| Password | `type="password"`, `autocomplete="current-password"` / `"new-password"`, show/hide toggle |
| Name/address | proper `autocomplete` tokens (`given-name`, `postal-code`, …) |
| One-time code | `autocomplete="one-time-code"` |
| Date | native date input or an accessible date picker |

- Touch-friendly sizes (min ~44×44 px targets), sufficient spacing, font-size ≥ 16 px on mobile inputs (prevents unwanted zoom).
- Use appropriate controls: radio for 2–5 mutually exclusive options, select/combobox for long lists, checkbox for multiple/boolean, toggle only for immediate-effect settings.
- Allow paste in all fields (especially passwords and codes). Never disable autofill or password managers.
- Preserve data on back/forward navigation where reasonable; warn before leaving a form with unsaved changes.

### 2.3 Required vs. Optional Fields
- Required fields MUST be enforced on **both** frontend and backend.
- Required status MUST be conveyed visually **and** programmatically (`required`/`aria-required`) — never by color alone.
- Optional fields MUST NOT block submission.

### 2.4 Submission States
Every submit button/form MUST implement all of these:

| State | Required behavior |
|---|---|
| **Idle** | Primary button enabled and clearly labeled with the action ("Send message", not "Submit") |
| **Validating** | Inline checks run without blocking typing |
| **Submitting** | Button shows a loading indicator and is disabled/guarded to **prevent double submit**; form fields are read-only or locked; label may change ("Sending…") |
| **Success** | Clear confirmation (message/toast/redirect), explains what happens next, form reset or replaced by a success view |
| **Validation error** | Errors shown inline per field + summary (see §3); focus moved to first error |
| **Server/network error** | Non-destructive error message with **retry** option; data preserved |

- Do not disable the submit button *before* the user attempts submission merely because the form is invalid — this hides why. Prefer letting the user submit and showing precise errors (or show clear inline guidance as they go). If you do disable, always explain why.
- Success feedback MUST follow the pattern: **what happened → what happens next** ("Thanks! We've emailed a confirmation. We'll reply within 1 business day.").

### 2.5 Specialized Forms
- **Login/Registration:** show/hide password, clear error copy, link to reset, no account enumeration (file 10 §8).
- **Contact/lead forms:** minimal fields; honeypot/CAPTCHA per file 10 §5; confirmation + email acknowledgement; analytics event per file 15.
- **Checkout/payment:** minimal steps, guest option where possible, visible totals, trust signals, inline card errors from the payment provider, no raw card data touching your server (file 10 §10).
- **File upload:** show accepted types/size up front, progress indicator, preview, remove/replace, clear failure messages.
- **Destructive actions:** require explicit confirmation (modal/typed confirmation for irreversible deletion), describe consequences, offer undo when possible.

---

## 3. Validation

### 3.1 What to Validate (Frontend)
- Required fields, format (email, phone, URL), length, numeric range, allowed characters, matching fields (confirm password), conditional rules, file size/type.
- Use a shared schema definition between frontend and backend where possible to avoid rule drift.

### 3.2 When to Validate (Timing)
```text
On first blur (leaving the field)   → validate that field
While typing AFTER an error shows   → re-validate live so the error clears immediately
On submit                           → validate everything; focus first invalid field
NEVER                               → show errors for untouched fields before interaction
NEVER                               → show "invalid email" after the first keystroke
```
- Exceptions where live feedback while typing is appropriate: password strength meters, character counters, username availability (debounced).
- Async validation (e.g., "is this username taken?") MUST be debounced, show a pending state, and never block form submission permanently if the check fails.

### 3.3 Backend Validation (mandatory)
- The backend re-validates **all** rules, plus rules the frontend cannot know (uniqueness, permissions, business rules, rate limits, state).
- Backend returns field-level errors in the standard format (file 11 §3.6) so the frontend can map each error to its input.
- The frontend MUST handle backend validation errors identically to frontend ones (inline + summary + focus).
- The backend never assumes frontend validation ran.

### 3.4 Writing Error Messages (Required Pattern)
Every error message MUST:
1. **Say what's wrong** in plain language.
2. **Say how to fix it** (or what to do next).
3. Be specific to the field, polite, and non-blaming.
4. Avoid jargon, codes-only messages, and ALL CAPS.
5. **Never expose sensitive/technical details** (stack traces, SQL, internal IDs, server paths).

| Bad | Good |
|---|---|
| "Invalid input" | "Enter your email in the format name@example.com." |
| "Error 500" | "Something went wrong on our side. Your information is safe — please try again in a moment." |
| "Password rejected" | "Use at least 12 characters. A short phrase of random words works well." |
| "Field required" | "Enter your full name so we know who to address." |
| "User not found" (login) | "Email or password is incorrect." (uniform, avoids account enumeration) |

### 3.5 Displaying Validation Errors
- Show the message **adjacent to the field** (below the input), in text, with an icon and an error color — never color alone.
- Link the message to the input with `aria-describedby`; set `aria-invalid="true"` on invalid fields.
- On submit failure: move keyboard focus to the first invalid field **or** to an error summary at the top that links to each field; announce via an `aria-live` region (`role="alert"` for submit-level errors).
- Keep a visible, persistent error until fixed; clear it as soon as the value becomes valid.
- Style invalid fields clearly (border + icon + text) while meeting contrast ratios (file 07).

---

## 4. Loading States

### Rules
- **Every asynchronous operation MUST have an appropriate loading state.** No blank screens, frozen buttons without feedback, or silent waits.
- Choose the pattern by context:

| Situation | Pattern |
|---|---|
| Initial page/section data load | **Skeleton screens** matching the final layout (prevents layout shift) |
| Button action (save, send, pay) | In-button spinner + disabled/guarded button + changed label |
| Short wait (< ~1 s) | Subtle inline indicator or none; avoid flashing spinners (delay display ~200 ms) |
| Long wait (> ~10 s) | Progress bar/percentage or step status, an estimate, and a cancel option where possible |
| Background refresh | Keep showing existing content; show a small "updating" indicator |
| Infinite scroll / pagination | Inline loader at the list end; keep scroll position |
| Route/page navigation | Top progress bar or skeleton; keep previous page visible until ready |
| Optimistic updates | Update UI immediately, roll back with a clear message on failure |

- Reserve space for loading content to prevent **layout shift** (CLS; file 08).
- Loading indicators MUST be accessible: `aria-busy="true"` on the region and a polite live region/`role="status"` with text such as "Loading results". Respect `prefers-reduced-motion`.
- Set **timeouts**: if a request exceeds a reasonable limit, transition to an error state with retry — never spin forever.
- Prevent duplicate requests (disable action, abort stale requests, ignore out-of-order responses).

---

## 5. Empty States

### Rules
- Every list, table, feed, dashboard widget, and search result area MUST define an empty state. A blank area is a bug.
- A good empty state contains: **(1) a clear explanation, (2) why it's empty (when useful), (3) a primary next action**, and optionally a helpful illustration. Keep tone consistent with the brand voice (file 06).
- Distinguish **types of emptiness** — they need different messages:

| Type | Meaning | Required content |
|---|---|---|
| **First-use** | User hasn't created anything yet | Welcome + benefit + primary CTA ("Add your first project") |
| **No results** | Search/filters returned nothing | Echo the query/filters, suggest fixes, **"Clear filters"** button, suggestions/popular items |
| **Cleared/completed** | User finished everything | Positive confirmation ("You're all caught up") |
| **Permission-limited** | User can't see data | Explain access and how to request it |
| **Error-empty** | Data failed to load | Show the error state (§6) — NOT "No data" |

### Required Empty States (define at minimum)
- **No products / items:** "No products in this category yet." + browse other categories / notify me.
- **No search results:** "No results for 'xyz'. Check the spelling, try fewer words, or clear filters." + clear button + suggestions.
- **No notifications:** "You're all caught up. New notifications will appear here."
- **No records / data:** First-use guidance + create CTA, or explanation of how data appears.
- **Empty cart / saved items:** Message + link to continue browsing.

### Do / Don't
- Do: keep the empty state inside the same layout so the page doesn't collapse or jump.
- Don't show "No data" with no explanation or action.
- Don't confuse loading with empty: show the loading state until the request completes, then decide.

---

## 6. Error States

### 6.1 Classify Errors, Respond Appropriately

| Error type | Scope | Required UI |
|---|---|---|
| **Field validation** | One input | Inline message, focus management (§3) |
| **Form-level** | Submission | Summary at top + inline errors; data preserved |
| **Component/data load failure** | One section | In-place error panel with **Retry**; rest of page keeps working |
| **Page-level failure** | Whole page | Full error page with explanation, retry, and navigation home |
| **404 Not Found** | Missing URL/resource | Friendly page, search box, links to main sections |
| **401 Unauthenticated** | Login required | Redirect/prompt to log in, then return the user to where they were |
| **403 Forbidden** | No permission | Explain, offer to switch account or request access |
| **429 Rate limited** | Too many attempts | Explain, show when to retry |
| **Offline / network** | No connection | Offline banner, queued actions where possible, retry when online |
| **Server 5xx / timeout** | Backend problem | Apologetic generic message, retry, request/reference ID for support |

### 6.2 Error Message Requirements
Every user-facing error MUST:
- **Explain what happened** in plain language.
- **Tell the user what to do next** (retry, edit a field, contact support, come back later).
- **Reassure when appropriate** ("Your changes weren't lost.").
- **Avoid exposing sensitive technical information.** Show an optional short **reference/request ID** for support; keep full details in server logs (file 10 §7).
- Use the right component for severity: inline text (field), alert/banner (persistent, page-level), toast (transient, non-critical), modal (blocking/destructive confirmation only).
- Be announced to assistive tech (`role="alert"` / live regions).

### 6.3 Resilience
- Use **error boundaries** (or equivalent) so a failing component doesn't blank the whole page.
- Provide **Retry** on every recoverable failure; implement automatic retry with backoff for idempotent reads only.
- Handle unexpected response shapes defensively — never crash on `undefined`.
- Log client-side errors to monitoring with context (route, release, user action — without sensitive data) per file 15.

### 6.4 Success & Confirmation States
- Confirm completed actions: toast for light actions ("Saved"), inline success or a dedicated page for significant ones (order placed, account created).
- Success messages MUST state the outcome and next step; auto-dismissing toasts must be pausable and available to screen readers; never auto-dismiss messages that contain critical information.
- Offer **Undo** for reversible destructive actions (delete, archive) in place of upfront confirmation where feasible.

---

## 7. State Matrix (Required Design Artifact)

For every data-driven view/component, the agent MUST define and implement this matrix before marking the feature done:

```text
View / Component: ______________________

[ ] Loading        → skeleton/spinner pattern: ________
[ ] Success/Data   → normal content
[ ] Empty          → type: first-use | no-results | cleared | restricted
[ ] Error          → type + message + retry/next action
[ ] Partial        → some data failed, rest displayed
[ ] Offline        → behavior: ________
[ ] Unauthorized   → behavior: ________
[ ] Slow           → timeout + feedback
```

---

## 8. Accessibility Requirements (summary; full rules in file 07)

- All fields have associated labels; errors are linked via `aria-describedby`; invalid fields use `aria-invalid`.
- Full keyboard operation: logical tab order, visible focus, Enter submits, Esc closes modals.
- Status changes (loading, success, error) are announced via live regions.
- Error/success states do not rely on color alone; contrast ratios are met.
- Time-limited messages and sessions provide enough time or an extension option.

---

## 9. Do / Don't

**Do**
- Validate on frontend **and** backend.
- Use specific, helpful, human error messages with a next step.
- Keep user input after errors.
- Provide loading, empty, error and success states for every async view.
- Prevent double submissions; show clear submission progress.
- Move focus to the first error and announce errors accessibly.
- Use correct input types, autocomplete attributes, and visible labels.

**Don't**
- Rely on frontend validation alone.
- Use placeholders as labels.
- Show errors before the user has interacted with a field.
- Show raw/technical errors, stack traces, or error codes without explanation.
- Clear the form on failure.
- Leave blank screens, endless spinners, or "No data" with no action.
- Use color alone to convey state.
- Block paste or password managers.
- Confuse loading with empty or error with empty.

---

## 10. Checklists

### Per-form checklist
- [ ] Only necessary fields; logical order; single column
- [ ] Visible labels associated with inputs; correct types & autocomplete
- [ ] Required/optional clearly marked (text + programmatic)
- [ ] Frontend validation with correct timing (blur → live-after-error → submit)
- [ ] Backend validation with field-level errors mapped to inputs
- [ ] Submit states: idle, submitting (guarded), success, error
- [ ] Double-submit prevented; input preserved on failure
- [ ] Error summary + focus management + live-region announcement
- [ ] Success message explains next step
- [ ] Spam protection and rate limiting applied (file 10)
- [ ] Tested with keyboard, screen reader, and mobile

### Per-view state checklist
- [ ] Skeleton/loader prevents layout shift; timeout defined
- [ ] Empty state defined by type with next action
- [ ] Error state with retry and safe message
- [ ] 404/401/403/429/5xx/offline behaviors defined
- [ ] State matrix (§7) completed

---

## 11. Validation Criteria (Definition of Done)

1. Disabling JavaScript validation (or bypassing it with a direct API call) still results in correct rejection with field-level errors.
2. No form can be double-submitted by rapid clicking or pressing Enter repeatedly.
3. Every async view shows a loading indicator, and never remains in a loading state past its timeout.
4. Every collection view has a verified empty state, including a distinct "no results" state with a clear-filters action.
5. Simulating network failure, 500, 403, 404, and 429 produces understandable messages with a next step and no sensitive technical details.
6. A keyboard-only and a screen-reader user can find, understand, and fix every validation error.
7. Failed submissions never erase user-entered data.

(Test procedures: [`14-testing-quality.md`](./14-testing-quality.md).)
