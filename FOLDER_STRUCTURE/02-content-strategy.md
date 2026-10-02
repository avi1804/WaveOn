# 02 — Content Strategy

**Owns:** copy, content hierarchy, headlines, trust signals, FAQs, CTA wording, readability, and content-level SEO.
**Related:** CTA placement in [13](./13-interactions-animations-conversion.md); metadata in [09](./09-seo.md); tone in [06](./06-branding-and-navigation.md).

---

## 1. Principle

Content is the product. Design and code exist to deliver content to the right person at the right moment. **Design the content first, then the layout around it.**

---

## 2. Content Rules

### 2.1 No meaningless placeholders
- You MUST NOT ship lorem ipsum, "Product 1," "Your text here," or fake testimonials.
- If real content is unavailable, write **clear, plausible draft copy** based on the Project Brief and mark it with a visible entry in `PROJECT_NOTES.md` ("Draft copy — needs client review: pages X, Y").
- NEVER fabricate facts: customer counts, awards, certifications, reviews, press logos, prices, legal claims. If proof is missing, leave the section out or ask the user for it.
- Lorem ipsum is allowed **only** when the user explicitly requests layout-only wireframes.

### 2.2 Content hierarchy
Every page MUST have a clear order of importance:

```text
1. Headline         → what is this / what's in it for me (≤ 12 words ideal)
2. Subheadline      → one supporting sentence
3. Primary CTA      → the single next step
4. Proof            → evidence it's trustworthy
5. Details          → features, benefits, specs, process
6. Objection handling → FAQs, guarantees, policies
7. Closing CTA      → repeat the primary action
```

- Put the most important information **above the fold** on mobile, not just desktop.
- Use inverted-pyramid writing: conclusion first, detail after.

### 2.3 Headlines
- State the benefit or outcome, not the feature or company slogan.
- Be specific and concrete.

| ❌ Weak | ✅ Strong |
|---|---|
| "Welcome to our website" | "Book a certified plumber in under 2 minutes" |
| "Innovative solutions" | "Cut invoice processing time by 80%" |
| "About us" (as an H1) | "A family-run bakery in Leeds since 1998" |

- Exactly one `H1` per page, matching the page's main topic (see [09](./09-seo.md)).

### 2.4 Descriptions and body copy
- Write for the user's vocabulary, not internal jargon.
- One idea per paragraph. Paragraphs ≤ 4 lines on mobile.
- Use active voice, present tense, short sentences (average ≤ 20 words).
- Target reading level around grade 8 for general audiences (lower for broad consumer sites, higher only for specialist audiences).
- Use lists and tables for scannable information (specs, comparisons, steps).

### 2.5 Product / service information
For each product or service, provide the information a buyer needs to decide:
- What it is and who it's for
- Key benefits (outcome-first) and then features
- Price or price range / "how pricing works" (hiding price always needs a reason)
- What's included / not included
- Delivery, timelines, or process steps
- Real images (see [08](./08-performance-and-optimization.md) for optimization)
- Policies: returns, warranty, cancellation
- Next step (CTA)

### 2.6 Trust signals
Place trust signals **near decision points** (next to the CTA, in checkout, beside forms):
- Real customer reviews / testimonials with name and context (with permission)
- Client logos, certifications, awards, security badges (only genuine)
- Guarantees, refund policy, transparent pricing
- Contact details, physical address, real team photos
- Privacy and security reassurance near sensitive forms (payment, ID, health)
- Review counts and ratings with a verifiable source

### 2.7 FAQs
- Derive questions from real user objections, support tickets, and the pain points in the brief.
- Order by frequency or by journey stage (before buying → during → after).
- Answers: direct first sentence, then detail. Link to the relevant page.
- Implement with accessible disclosure/accordion components (see [07](./07-responsive-and-accessibility.md)), and add `FAQPage` structured data **only when appropriate** (see [09](./09-seo.md)).

### 2.8 Calls to action (copy)
- Start with a verb; describe the result: "Get my free quote," "Start 14-day trial," "Book a table."
- Avoid vague labels: "Submit," "Click here," "Learn more" (unless context makes the destination obvious).
- Keep the **same label for the same action** across the site.
- CTA hierarchy and placement are defined in [13](./13-interactions-animations-conversion.md).

### 2.9 Content consistency
- Maintain a small **content style guide** in `PROJECT_NOTES.md` or `/docs`: tone, spelling variant (US/UK), capitalization (sentence case vs title case), date/number/currency formats, product naming, terminology (e.g., always "Sign in," never mixed with "Log in").
- Use one term per concept everywhere: UI labels, emails, errors, docs.
- Keep microcopy (buttons, errors, empty states, tooltips) in the same voice as marketing copy.

### 2.10 Readability
- Break pages into sections with descriptive subheadings (H2/H3) every ~100–200 words.
- Line length 45–75 characters (see [05](./05-layout-typography-colors.md)).
- Avoid walls of text, ALL CAPS paragraphs, and centered body paragraphs longer than 2–3 lines.
- Link text must make sense out of context ("Download the 2025 pricing guide," not "here").
- Provide text alternatives for non-text content (alt text, transcripts, captions) — see [07](./07-responsive-and-accessibility.md).

### 2.11 SEO-friendly content
(Technical SEO lives in [09](./09-seo.md); here is the content side.)
- Each page targets one primary search intent. Don't cram multiple topics onto one page.
- Use the words real users search for in headings, intro, and link text — naturally, never stuffed.
- Answer the question the user came with within the first screen.
- Write unique titles/descriptions per page (see [09](./09-seo.md)).
- Add internal links to related pages with descriptive anchor text.
- Keep content fresh: show "last updated" dates on time-sensitive content.
- No duplicate or near-duplicate pages (e.g., location pages with only the city name changed).

### 2.12 Legal and compliance content
Include where relevant: Privacy Policy, Terms, Cookie notice/consent, Refund/Return policy, accessibility statement, company registration or contact details. Do not draft legally binding text as final: flag it for legal review.

### 2.13 Localization readiness
- Never hardcode user-visible strings inside deeply nested components if multiple languages are planned; centralize them.
- Allow text expansion (some languages are 30–40% longer). Avoid fixed-width buttons.
- Support RTL if required; use logical CSS properties.

---

## 3. Page Content Blueprint (adapt per page)

```markdown
# <Page Name>
- Primary user:
- User's question on arrival:
- Primary CTA:
- H1:
- Subheadline:
- Sections (in order):
  1.
  2.
- Proof elements:
- FAQs:
- Internal links:
- SEO title / meta description:
- Images (with alt text):
```

---

## 4. Do / Don't

**Do**
- Write real copy tied to the Project Brief.
- Lead with user benefit.
- Keep one primary CTA per page and repeat it at logical points.
- Place proof near the decision.
- Mark every assumption and draft block for review.

**Don't**
- Don't invent testimonials, statistics, or logos.
- Don't use jargon, buzzwords, or vague superlatives ("world-class," "cutting-edge") without evidence.
- Don't hide key info (price, delivery time, cancellation) in images or PDFs.
- Don't embed important text in images (inaccessible, unsearchable, unscalable).
- Don't write headings purely for styling; headings represent structure.

---

## 5. Validation Checklist

- [ ] Every page has one H1 that states the page's main benefit/topic
- [ ] Content order follows the hierarchy in §2.2
- [ ] No lorem ipsum or generic placeholders (or each is listed in `PROJECT_NOTES.md`)
- [ ] No fabricated claims, reviews, or numbers
- [ ] Trust signals appear near CTAs and sensitive forms
- [ ] FAQs reflect real objections
- [ ] CTA labels are specific and consistent
- [ ] Terminology and tone are consistent site-wide
- [ ] Paragraphs are short; headings segment the page; links are descriptive
- [ ] Each page targets one search intent; titles/descriptions are unique
- [ ] Legal pages present or flagged for review
