# 05 — Layout, Typography & Colors

**Owns:** the grid, container widths, spacing scale, alignment, type system, semantic color palette, and the design-token definitions every other file consumes.
**Related:** components that use these tokens in [04](./04-ui-design.md); breakpoints and responsive behavior in [07](./07-responsive-and-accessibility.md); font loading performance in [08](./08-performance-and-optimization.md); brand inputs in [06](./06-branding-and-navigation.md).

---

## 1. Principle

Visual decisions are made **once**, as tokens, and reused everywhere. Nobody picks a new color, font size, or spacing value inside a component. If a needed value is missing, add a token first, then use it.

---

## 2. Design Tokens

Define tokens in a single source of truth (CSS custom properties, a theme file, or a design-token JSON) and reference them everywhere.

```text
Color tokens        → semantic names (see §5), never raw hex in components
Typography tokens   → family, size scale, weight, line height, letter spacing
Spacing tokens      → one scale (4 or 8 pt based)
Radius tokens       → none, sm, md, lg, full
Shadow/elevation    → 0–4 levels
Border tokens       → width, style, color
Z-index tokens      → see 04
Motion tokens       → durations and easings (see 13)
Breakpoint tokens   → see 07
```

Example (CSS variables; adapt to the chosen stack):

```css
:root {
  /* spacing (4px base) */
  --space-1: 0.25rem;  --space-2: 0.5rem;  --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;  --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;   --space-24: 6rem;

  /* radius */
  --radius-sm: 4px; --radius-md: 8px; --radius-lg: 16px; --radius-full: 9999px;

  /* type */
  --font-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;
}
```

---

## 3. Layout

### 3.1 Grid
- Use a **12-column grid** on laptop/desktop, **8 columns** on tablet, **4 columns** on mobile.
- Gutters: 16 px mobile, 24 px tablet, 24–32 px desktop.
- Prefer CSS Grid/Flexbox; never position layout with absolute pixels or tables.
- Align every element to the grid; avoid "almost aligned" edges.

### 3.2 Container widths
| Container | Max width | Use |
|---|---|---|
| Prose | 65–75ch (~680px) | Articles, long-form text |
| Content | 1100–1200px | Most pages |
| Wide | 1280–1440px | Dashboards, galleries |
| Full-bleed | 100% | Backgrounds/heroes (content inside still constrained) |

- Page side padding: ≥ 16 px mobile, ≥ 24 px tablet, ≥ 32 px desktop. Content MUST NOT touch the screen edge.
- Constrain very large screens: center content with a max width rather than stretching text across 2560 px.

### 3.3 Spacing
- Use the spacing scale only (multiples of 4/8). No magic numbers like `margin-top: 13px`.
- Relationship rule (proximity): space **within** a group < space **between** groups < space **between** sections.
- Suggested rhythm:

| Relationship | Mobile | Desktop |
|---|---|---|
| Label to input | 4–8px | 8px |
| Between form fields | 16px | 20–24px |
| Between cards | 16px | 24px |
| Between content blocks | 24–32px | 40–48px |
| Between page sections | 48–64px | 80–120px |

- Use `gap` for sibling spacing instead of margins on each child where possible.

### 3.4 Alignment
- Default to **left-aligned** text for Latin languages (right-aligned for RTL). Center only short text (hero headline, short captions, CTA bands).
- Align on shared baselines and edges; keep icon + text vertically centered consistently.
- Form labels, inputs, and buttons share left edges.

### 3.5 Section spacing and visual rhythm
- Page = vertical sequence of sections, each with consistent top/bottom padding from the spacing scale.
- Alternate section backgrounds (background / surface / subtle tint) sparingly to separate blocks; don't use more than 3 background treatments.
- Vary density deliberately: dense information → breathing room → emphasis block. Avoid 8 identical card-grid sections in a row.
- Every section: eyebrow (optional) → heading → short intro → content → optional CTA, in a predictable structure.

---

## 4. Typography

### 4.1 Font families
- Use **at most 2 families** (one for headings optionally, one for body); 1 is often best. Add a monospace only if code appears.
- Always define a **fallback stack** with `system-ui`.
- Prefer variable fonts or limit to **2–3 weights** (e.g., 400, 500/600, 700) to cut payload.
- Self-host fonts when possible; loading rules in [08](./08-performance-and-optimization.md).
- Ensure licensing allows web use.

### 4.2 Type scale (fluid or stepped)
Use a consistent modular scale (ratio ~1.2–1.25). Example:

| Token | Mobile | Desktop | Use |
|---|---|---|---|
| `text-xs` | 12px | 12px | Captions, legal |
| `text-sm` | 14px | 14px | Secondary text, labels |
| `text-base` | **16px** | 16–18px | Body (never below 16px for body on mobile) |
| `text-lg` | 18px | 20px | Lead paragraph |
| `h4` | 18–20px | 20–24px | Sub-sections |
| `h3` | 22px | 28px | Sections |
| `h2` | 28px | 36–40px | Page sections |
| `h1` | 32–36px | 48–56px | Page title |

- Use `rem`/relative units so user font-size preferences are respected. Never lock text with `px` that blocks zoom.
- Fluid sizing with `clamp()` is encouraged for headings.

### 4.3 Heading hierarchy
- One `H1` per page; headings nest in order (H1 → H2 → H3, no skipping).
- Choose heading **level by structure**, style by **class/token** (a visually small heading may still be an H2).
- Headings are short, specific, and scannable.

### 4.4 Body text
- Size 16 px minimum; 17–18 px for long-form reading.
- **Line height:** body 1.5–1.7; headings 1.1–1.3.
- **Line length:** 45–75 characters (use `max-width: 65ch` for prose).
- Paragraph spacing ≈ 1em; no indentation plus spacing combined.
- Text color: use `--text` on `--background` with contrast ≥ 4.5:1 (see §5.4).

### 4.5 Font weights and emphasis
- Weight for hierarchy: 400 body, 500–600 UI labels/subheads, 700 headings. Avoid light weights (< 400) at small sizes.
- Use bold sparingly for emphasis; use italics for titles/foreign terms; don't underline non-links.

### 4.6 Letter spacing
- Default `normal` for body.
- Slightly negative (−0.01 to −0.02em) for large headings is acceptable; positive (+0.05–0.1em) for ALL-CAPS small labels.
- Never apply tight tracking to body text.

### 4.7 Readability extras
- Left-align paragraphs; avoid justified text (rivers) and long centered paragraphs.
- Avoid ALL CAPS for sentences; use it only for short labels.
- Use `text-wrap: balance` for headings and `pretty` for paragraphs where supported.
- Truncate with ellipsis only when the full text is available elsewhere (title attr is not enough on touch).

---

## 5. Colors

### 5.1 Semantic palette (required)

```text
Primary      Brand action color (primary buttons, key links, focus accents)
Secondary    Supporting accent / secondary actions
Background   Page background
Surface      Cards, modals, inputs (raised/contained areas)
Text         Primary text
Muted        Secondary text, placeholders, helper text
Border       Dividers, outlines, input borders
Success      Positive outcomes
Warning      Caution
Error        Failures, destructive actions
Info         Neutral notices
```

Each semantic color needs: **base**, **hover**, **active**, **subtle/background tint**, and **on-color** (text color that sits on top of it).

Example token set:

```css
:root {
  --color-primary: #2563eb;          --color-on-primary: #ffffff;
  --color-primary-hover: #1d4ed8;    --color-primary-subtle: #eff6ff;
  --color-secondary: #475569;        --color-on-secondary: #ffffff;
  --color-background: #ffffff;       --color-surface: #f8fafc;
  --color-text: #0f172a;             --color-muted: #475569;
  --color-border: #cbd5e1;
  --color-success: #15803d;  --color-warning: #b45309;
  --color-error: #b91c1c;    --color-info: #1d4ed8;
}
```
*(Values are illustrative. Derive real values from the brand in [06](./06-branding-and-navigation.md) and verify contrast.)*

### 5.2 Usage rules
- **Components use semantic tokens only** (`--color-error`), never raw palette values (`#b91c1c`) or arbitrary new colors.
- Primary color is reserved for **primary actions and key emphasis**; do not use it for decoration everywhere.
- Status colors keep their meaning: red = error/destructive, green = success, amber = warning, blue = info. Don't reuse red for a normal brand accent next to errors.
- Neutrals do most of the work: aim for roughly **60% background/surface, 30% text/neutrals, 10% accent**.
- Limit the palette: 1 primary, ≤ 1–2 secondary/accent, a neutral ramp (≈ 9–11 steps), 4 status hues.
- Gradients and shadows come from tokens too.

### 5.3 Don't convey meaning by color alone
Pair color with text, icon, pattern, or position (e.g., error = red + icon + message text; chart series = color + marker/label).

### 5.4 Contrast requirements (WCAG 2.2 AA minimum)
| Element | Minimum ratio |
|---|---|
| Body text, small text | **4.5 : 1** |
| Large text (≥ 24px or ≥ 18.66px bold) | **3 : 1** |
| UI components & icons (borders of inputs, focus rings, meaningful icons) | **3 : 1** |
| Focus indicator vs adjacent colors | **3 : 1** |

- Check every foreground/background token pair, including hover, disabled (where text must still be legible if informative), and text over images/gradients.
- Placeholder text and `muted` text still need 4.5:1 if they convey information.
- Verify with a contrast tool; record results in the token docs.

### 5.5 Color modes
If dark mode is in scope: separate token values per theme, re-verify contrast, never invert images naively, and respect user preference (see [04](./04-ui-design.md) §7). Support `forced-colors` (high contrast mode) by not relying on background-only cues.

---

## 6. Do / Don't

**Do**
- Define tokens first; style from tokens.
- Use a single spacing scale and a single type scale.
- Keep line length readable and body text ≥ 16px.
- Verify contrast on every color pair.
- Use whitespace generously; let content breathe.

**Don't**
- Don't use random colors or one-off hex values.
- Don't use more than 2 font families or load unused weights.
- Don't set text sizes in fixed `px` that ignore user preferences.
- Don't skip heading levels for visual effect.
- Don't use pure low-contrast gray text on white for aesthetics.
- Don't stretch text across the full width of wide monitors.
- Don't use color as the only indicator.

---

## 7. Validation Checklist

- [ ] Tokens defined in one place (color, type, spacing, radius, shadow, z-index, motion)
- [ ] No hardcoded colors, font sizes, or magic-number spacing in component code
- [ ] 12/8/4-column grid with consistent gutters; side padding present at all sizes
- [ ] Prose width ≤ ~75ch; body ≥ 16px; line height 1.5–1.7
- [ ] One H1 per page; headings nested in order
- [ ] ≤ 2 font families with fallbacks; ≤ 3–4 weights loaded
- [ ] All semantic colors defined with hover/subtle/on-color variants
- [ ] Contrast verified: 4.5:1 text, 3:1 large text/UI/focus
- [ ] Meaning never conveyed by color alone
- [ ] Section spacing consistent across pages
