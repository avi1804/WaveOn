# 01 — Purpose & Target Users

**Owns:** website goals, success criteria, user definition, and the **Project Brief**.
**Gate:** No implementation begins until the Project Brief exists. (See [J.md](./J.md) §3.)

---

## 1. Why this comes first

Every later decision (content, layout, features, performance budget, security level) depends on *what the site must achieve* and *for whom*. A technically perfect site that serves the wrong goal is a failure.

---

## 2. Purpose Discovery

You MUST be able to answer each question in one or two sentences. If you cannot, ask the user.

| Question | Why it matters |
|---|---|
| **Website objective** — what is this site for? | Defines scope |
| **Business objective** — what business outcome does it support (revenue, leads, bookings, awareness, support deflection)? | Defines priorities |
| **User objective** — what is the visitor trying to accomplish? | Defines UX |
| **Primary conversion goal** — the single most important action (buy, sign up, book, contact, donate) | Drives CTA, layout, analytics |
| **Secondary goals** — newsletter, download, share, read more | Supporting CTAs |
| **Problems being solved** — what is painful today (no online presence, slow checkout, unclear pricing)? | Prevents building irrelevant features |
| **Success criteria** — measurable outcomes | Defines "done" |

### Rules
- There MUST be exactly **one** primary conversion goal per page. Other actions are visually subordinate.
- Success criteria MUST be measurable. Replace "more visitors" with "increase demo requests from 20 to 40 per month" or, if no baseline exists, "track demo requests from day one."
- If the user has no numbers, propose sensible metrics and mark them as **proposed**.

### Success criteria examples
- Contact form completion rate ≥ 3% of unique visitors
- Checkout abandonment ≤ 65%
- LCP ≤ 2.5s at 75th percentile on mobile
- Support-page visits resulting in a ticket decrease by 20%

---

## 3. Target User Definition

Define users **before** designing anything.

For each user group document:

| Attribute | Description |
|---|---|
| **Group** | Primary / Secondary / Administrative |
| **Role** | Visitor, customer, member, editor, admin, support agent |
| **Needs** | What they need to get done |
| **Pain points** | Current frustrations |
| **Expectations** | Speed, price transparency, trust, language, privacy |
| **Technical ability** | Low / Medium / High; devices; connection quality; assistive tech |
| **Context** | Where and when they use it (phone on commute, desktop at work) |

### Rules
- Identify at least one **primary** user group. Design decisions favor the primary group when groups conflict.
- Include **admin/internal users** if any content or data is managed. Admin tools are part of the product.
- Consider users with disabilities, low bandwidth, older devices, and non-native language speakers as real members of the audience, not edge cases.
- Do not invent demographic details. State assumptions explicitly: *"Assumption: most visitors browse on mid-range Android phones over 4G."*

### Role matrix (needed whenever there is login)

| Role | Can view | Can create | Can edit | Can delete | Admin area |
|---|---|---|---|---|---|
| Guest | Public pages | — | — | — | No |
| Member | Own data | Own records | Own records | Own records | No |
| Admin | All | All | All | All | Yes |

This matrix feeds authorization design in [10](./10-security-authentication-authorization.md).

---

## 4. Page Inventory & User Flows (high level)

After goals and users are clear, list:

1. **Pages** — each with purpose, primary user, primary CTA. (Details in [03](./03-ux-design.md).)
2. **Critical flows** — e.g., "visitor → product → cart → checkout → confirmation."
3. **Data entities** — e.g., User, Product, Order. (Details in [11](./11-backend-api-database.md).)
4. **Integrations** — payment, email, CRM, maps, analytics.
5. **Constraints** — budget, deadline, compliance (GDPR, HIPAA, PCI), languages, browsers.

---

## 5. Project Brief Template

Create `PROJECT_BRIEF.md` in the repo root using this template. Keep it updated.

```markdown
# Project Brief — <Project Name>

## 1. Purpose
- Website objective:
- Business objective:
- User objective:
- Primary conversion goal:
- Secondary goals:
- Problems being solved:
- Success criteria (measurable):

## 2. Users
| Group | Role | Needs | Pain points | Expectations | Tech ability | Context |
|---|---|---|---|---|---|---|

## 3. Scope
- Pages:
- Key user flows:
- Features (must / should / could / won't):
- Integrations:
- Roles & permissions:

## 4. Content
- Who provides content? Is real copy available? Languages?
- Trust signals available (reviews, logos, certifications):

## 5. Design direction
- Brand assets available (logo, colors, fonts)?
- Tone of voice:
- Reference sites (liked / disliked, and why):

## 6. Technical
- Chosen stack and reason:
- Hosting / environments:
- Data entities:
- Compliance / privacy:
- Performance and SEO needs:

## 7. Constraints
- Deadline / budget / team:

## 8. Assumptions (record every assumption you make)
-

## 9. Open questions
-
```

---

## 6. Do / Don't

**Do**
- Restate the goal and users back to the user in your own words and confirm when the request is large.
- Prioritize features by contribution to the primary conversion goal.
- Tie each page and feature to a user need or business goal.

**Don't**
- Don't build features "because websites usually have them" (blog, newsletter popup, chatbot) without a stated reason.
- Don't treat "everyone" as the target audience.
- Don't start with technology choices before purpose and users.
- Don't proceed past an ambiguity that changes the data model or auth model without asking.

---

## 7. Validation Checklist

- [ ] Website, business, and user objectives written
- [ ] Exactly one primary conversion goal per page
- [ ] Success criteria are measurable (or tracking to establish baseline is planned)
- [ ] Primary and secondary users documented, including technical ability and context
- [ ] Role/permission matrix exists if there is any login
- [ ] Page list, key flows, data entities, integrations, constraints listed
- [ ] Assumptions and open questions recorded in `PROJECT_BRIEF.md`
- [ ] User has confirmed (or had the chance to correct) the brief for any non-trivial project
