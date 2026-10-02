# 09 — SEO

**Owns:** on-page SEO, technical SEO, structured data, URL structure, crawlability/indexability, social metadata, and SEO verification.
**Related:** writing for search intent in [02](./02-content-strategy.md); page speed in [08](./08-performance-and-optimization.md); breadcrumbs in [06](./06-branding-and-navigation.md); semantic HTML in [07](./07-responsive-and-accessibility.md).

---

## 1. Principle

SEO = **making valuable content easy for search engines to discover, understand, and trust, and easy for users to choose in results.** It is built on good content, fast pages, clean HTML, and sound architecture, not tricks.

> **Every public page MUST have appropriate SEO metadata.** Private pages (account, admin, checkout steps, internal search, staging) MUST be excluded from indexing.

---

## 2. SEO Planning (before build)

For each public page, define in `PROJECT_BRIEF.md` or a `seo-map.md`:

| Field | Description |
|---|---|
| URL | Final path |
| Primary search intent | Informational / navigational / commercial / transactional |
| Primary keyword/topic + 1–3 secondary | Based on real user language |
| Title & meta description | Unique |
| H1 | Matches intent |
| Internal links in/out | Planned |
| Schema type | Product, Article, FAQ, LocalBusiness, etc. |
| Index status | index / noindex |

Rules: one primary intent per page; avoid keyword cannibalization (two pages targeting the same query); don't invent search-volume data. If keyword data is unavailable, derive terms from the brief and real user language.

---

## 3. On-Page SEO

### 3.1 Title tag
- Unique per page, **≈ 50–60 characters** (up to ~600 px width).
- Pattern: `Primary Topic – Qualifier | Brand`. Primary keyword near the start; brand at the end (home page may lead with brand).
- Must read naturally and reflect page content. No keyword stuffing.

### 3.2 Meta description
- Unique per page, **≈ 140–160 characters**, written as a concise pitch with a benefit and implied CTA.
- It doesn't directly rank but affects click-through. Search engines may rewrite it.

### 3.3 Headings (H1/H2/H3)
- Exactly one `H1` per page, matching the main topic and title intent (not identical necessarily).
- H2/H3 organize subtopics and can naturally include secondary terms and question phrasing.
- Never skip levels; never use headings for styling (see [05](./05-layout-typography-colors.md)).

### 3.3 Keywords
- Use primary term in: title, H1, early body copy (first ~100 words), URL slug, at least one image alt (where relevant), and naturally across the content.
- Use synonyms and related terms; write for people first.
- Don't use the `meta keywords` tag (ignored). Don't hide text or stuff terms.

### 3.4 Internal links
- Link related pages with **descriptive anchor text** ("compare pricing plans," not "click here").
- Every indexable page reachable via at least one crawlable link within ≤ 3 clicks of home; no orphan pages.
- Use real `<a href>` links (not JS-only handlers).
- Link from high-authority pages to important conversion pages.
- Use breadcrumbs and related-content modules for hub-and-spoke structure.

### 3.5 Semantic HTML
- Use `<main>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<section>` properly; lists for lists; `<table>` for data; `<figure>/<figcaption>` for captioned media.
- Meaningful alt text on images (see [07](./07-responsive-and-accessibility.md)); descriptive file names (`red-running-shoes.webp`).
- Core content must be present in the **initial HTML** (server-rendered/static), not only injected after JS runs.

### 3.6 Content quality signals (E-E-A-T)
- Show who is behind the content: author bylines/bios for expert content, about page, contact details, address, policies.
- Cite sources; keep facts accurate and up to date; display "last updated."
- Original, helpful content; no thin, duplicate, or auto-generated filler pages.

---

## 4. Technical SEO

### 4.1 URL structure
- Lowercase, hyphen-separated, short, human-readable, keyword-meaningful: `/products/running-shoes/trail-blazer`.
- No session IDs, unnecessary parameters, file extensions, or uppercase.
- Stable URLs; if a URL changes, add a **301 redirect** (no chains/loops).
- Choose one canonical host (www vs non-www) and enforce HTTPS and a consistent trailing-slash policy via redirects.
- Filter/sort parameters: decide whether they produce indexable pages; if not, canonicalize to the base page or `noindex`.

### 4.2 Canonical URLs
- Every indexable page has a self-referencing `<link rel="canonical" href="https://example.com/path">` (absolute URL).
- Paginated and parameterized variants point to the proper canonical; don't canonicalize all pages of a series to page 1.

### 4.3 robots.txt
```text
User-agent: *
Disallow: /admin/
Disallow: /account/
Disallow: /cart/
Disallow: /api/
Disallow: /search?
Sitemap: https://example.com/sitemap.xml
```
- Allow CSS/JS/images so crawlers can render pages.
- **robots.txt does not prevent indexing**; use `noindex` (meta robots or `X-Robots-Tag`) for pages that must stay out of search, and don't also block them in robots.txt (the crawler must see the `noindex`).
- Block everything on staging/preview environments (and require auth). **Verify production does not inherit the staging block.**

### 4.4 XML Sitemap
- Auto-generated, includes only **canonical, indexable, 200-status** URLs, with accurate `lastmod`.
- Split at 50,000 URLs/50 MB; use a sitemap index if needed.
- Referenced in robots.txt and submitted in search consoles.
- Update automatically when content changes.

### 4.5 Meta robots
```html
<meta name="robots" content="index, follow">      <!-- default; explicit optional -->
<meta name="robots" content="noindex, follow">    <!-- thank-you pages, internal search, thin utility pages -->
```

### 4.6 Open Graph & social cards
```html
<meta property="og:type" content="website">
<meta property="og:title" content="Page title">
<meta property="og:description" content="Short description">
<meta property="og:url" content="https://example.com/page">
<meta property="og:image" content="https://example.com/og/page.jpg">  <!-- 1200×630, < 1 MB -->
<meta property="og:site_name" content="Brand">
<meta name="twitter:card" content="summary_large_image">
```
- Unique image/title/description per important page (articles, products). Absolute URLs.

### 4.7 Structured data (JSON-LD)
Use JSON-LD that **matches visible page content**; never mark up content users can't see.

| Page | Schema types |
|---|---|
| Site-wide | `Organization`/`LocalBusiness`, `WebSite` |
| Navigation | `BreadcrumbList` |
| Product | `Product` with `Offer`, `AggregateRating` (only real reviews) |
| Article/blog | `Article`/`BlogPosting` (author, dates, image) |
| FAQ | `FAQPage` (only if the Q&A is visible on the page; eligibility for rich results is limited) |
| Local | `LocalBusiness` (address, hours, geo, phone) |
| Event, Recipe, Video, Job | respective types |

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Brand",
  "url": "https://example.com",
  "logo": "https://example.com/logo.png"
}
</script>
```
Validate with the Rich Results Test and Schema Markup Validator.

### 4.8 International / multi-language (if applicable)
- `hreflang` annotations (reciprocal, with `x-default`), one URL per language version, translated metadata, `lang` attribute set.

### 4.9 HTTP status handling
| Situation | Response |
|---|---|
| OK | 200 |
| Moved permanently | 301 |
| Temporarily moved | 302/307 |
| Not found | **404** (true 404, not "soft 404" 200 pages) |
| Removed permanently | 410 (optional) |
| Server error | 5xx; fix quickly |

### 4.10 JavaScript SEO
- Prefer SSR/SSG for indexable content. If using client-side rendering, ensure crawlable HTML for key content and links, test with URL Inspection / "view rendered HTML."
- Use real links; don't rely on `#` fragment routing or click handlers for navigation.
- Update `<title>`, meta, and canonical on route changes in SPAs.
- Don't lazy-load primary content behind user interaction.

---

## 5. SEO Performance Factors

- **Page speed & Core Web Vitals:** follow [08](./08-performance-and-optimization.md).
- **Mobile friendliness:** responsive layout, readable text, tappable targets, no intrusive interstitials (see [07](./07-responsive-and-accessibility.md)); mobile content must equal desktop content (mobile-first indexing).
- **Crawlability:** clean internal linking, no broken links, no crawl traps (infinite calendars/filters), reasonable server response times.
- **Indexability:** correct canonical + robots + status codes; no accidental `noindex` in production.
- **HTTPS everywhere**, HSTS (see [10](./10-security-authentication-authorization.md)).
- **Duplicate content:** one URL per piece of content; canonicalize duplicates.
- **Image SEO:** descriptive filenames and alt text, image sitemap if images are important, modern formats.

---

## 6. Local SEO (if applicable)
- Consistent NAP (Name, Address, Phone) across site, footer, and listings.
- `LocalBusiness` schema, embedded map (lazy/facade), opening hours, service area pages that are genuinely unique.
- Google Business Profile alignment (out-of-repo task: tell the user).

---

## 7. SEO Implementation Template (per page)

```html
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Trail Running Shoes for Wide Feet | Brand</title>
  <meta name="description" content="Shop lightweight trail running shoes in wide fits. Free 30-day returns and same-day dispatch.">
  <link rel="canonical" href="https://example.com/trail-running-shoes">
  <meta name="robots" content="index, follow">
  <!-- Open Graph / Twitter -->
  <!-- JSON-LD -->
</head>
```
Provide a **central SEO helper/component** so every page sets these consistently; fail the build or lint if a public page lacks title/description/canonical.

---

## 8. Do / Don't

**Do**
- Match each page to one search intent and make the answer visible fast.
- Render core content server-side.
- Keep sitemap, canonicals, and robots in sync with reality.
- Validate structured data against visible content.

**Don't**
- Don't ship duplicate titles/descriptions or multiple H1s.
- Don't stuff keywords, hide text, buy links, or create doorway/thin pages.
- Don't block CSS/JS in robots.txt or use robots.txt as a privacy tool.
- Don't leave staging `noindex` on production or production indexable on staging.
- Don't return 200 for missing pages.
- Don't mark up fake reviews or invisible content.
- Don't rely on JS-only navigation for indexable content.

---

## 9. Validation Checklist

- [ ] Each public page has unique title (≈50–60 chars), meta description (≈140–160), one H1, logical H2/H3
- [ ] Self-referencing absolute canonical on every indexable page
- [ ] `robots.txt` correct; sitemap valid, canonical-only, referenced, and submitted
- [ ] Private/utility pages are `noindex` (or auth-protected) and excluded from sitemap
- [ ] Open Graph + Twitter tags with 1200×630 image on shareable pages
- [ ] JSON-LD present, valid, matching visible content (Organization, Breadcrumb, page-specific)
- [ ] Clean URL structure; redirects 301, no chains; true 404 page
- [ ] Core content in initial HTML; internal links are real anchors; no orphan pages
- [ ] Images: descriptive filenames + alt, optimized (see 08)
- [ ] Lighthouse SEO audit passes; mobile usability and Core Web Vitals are green
- [ ] Production verified: HTTPS, no accidental noindex/blocks
