# 08 — Performance & Optimization

**Owns:** performance budgets, Core Web Vitals, asset optimization (images, fonts, JS, CSS), caching, rendering, and API/database performance guidance at the web-delivery level.
**Related:** responsive images in [07](./07-responsive-and-accessibility.md); query/index design in [11](./11-backend-api-database.md); CDN/cache config and monitoring in [15](./15-deployment-monitoring-maintenance.md); performance testing in [14](./14-testing-quality.md).

---

## 1. Principle

Speed is a feature, a UX requirement, an SEO factor, and a conversion factor. **Performance is designed in, not bolted on.** Measure first, optimize the biggest bottleneck, measure again.

> The fastest code is the code you don't ship. Default to less JavaScript, fewer requests, fewer bytes.

---

## 2. Performance Budgets (defaults; tighten if the brief demands)

Measured on a **mid-range mobile device, throttled 4G** (e.g., Lighthouse mobile profile), and via real-user monitoring at the 75th percentile.

### Core Web Vitals targets
| Metric | Good | Meaning |
|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ **2.5 s** | Main content appears |
| **INP** (Interaction to Next Paint) | ≤ **200 ms** | Page responds to input |
| **CLS** (Cumulative Layout Shift) | ≤ **0.1** | Layout stays stable |
| TTFB | ≤ 800 ms | Server/network responsiveness |
| FCP | ≤ 1.8 s | First content |

### Resource budgets (initial page load, compressed)
| Resource | Budget |
|---|---|
| Total transfer for a content page | ≤ 1 MB (aim ≤ 500 KB) |
| JavaScript | ≤ 170 KB compressed (marketing/content pages); justify more |
| CSS | ≤ 50 KB compressed critical + deferred rest |
| Fonts | ≤ 100 KB total, ≤ 2 families |
| Hero/LCP image | ≤ 150–200 KB |
| Requests above the fold | ≤ ~25; avoid third-party sprawl |

Record the budgets in `PROJECT_NOTES.md` and enforce in CI (e.g., Lighthouse CI, bundle-size checks). **A budget violation blocks completion** until fixed or consciously waived with a reason.

---

## 3. Page Load Speed

- Prioritize the **critical rendering path**: minimal render-blocking CSS/JS; inline tiny critical CSS if beneficial; `defer`/`async` scripts; load non-critical scripts after interaction/idle.
- Use **server-side rendering or static generation** for public, content-heavy, SEO-relevant pages. Use client-side rendering only where interactivity requires it (dashboards behind login).
- Prefer **progressive enhancement:** core content and navigation work before JS loads.
- Use resource hints judiciously: `preconnect` to critical third-party origins (≤ 2–3), `preload` only the LCP image/critical font, `prefetch` likely next navigations. Over-preloading hurts.
- Set `fetchpriority="high"` on the LCP image; never lazy-load it.
- Avoid redirects on the critical path; avoid chained requests (HTML → CSS → import → font).
- Enable **HTTP/2 or HTTP/3**, **Brotli (or gzip)** compression, and keep-alive.

---

## 4. Image Optimization

Images are usually the largest payload.

- **Formats:** AVIF → WebP → JPEG/PNG fallback (`<picture>`); SVG for icons/logos/illustrations; avoid GIF (use video/animated WebP/AVIF).
- **Responsive sizes:** generate multiple widths (e.g., 320/640/960/1280/1920) and use `srcset` + accurate `sizes`.
- **Dimensions:** always set `width` and `height` (or `aspect-ratio`) to reserve space and prevent CLS.
- **Compression:** quality ~70–80 for photos; strip metadata; run through an image pipeline/CDN transformer at build or on demand.
- **Lazy loading:** `loading="lazy"` + `decoding="async"` for below-the-fold images/iframes. **Never** lazy-load the LCP/hero image.
- Use blurred/low-quality placeholders or dominant-color backgrounds for large images where it helps perceived speed.
- Don't serve 4000px images into 400px slots. Don't use CSS background images for content that must be discovered early (they're found late).
- Videos: don't autoplay heavy video above the fold; use `preload="none"`/`metadata`, poster image, compressed H.264/AV1/WebM, short loops; consider a click-to-play facade for embeds (YouTube, maps).

```html
<picture>
  <source type="image/avif" srcset="hero-640.avif 640w, hero-1280.avif 1280w" sizes="(min-width: 1024px) 50vw, 100vw">
  <source type="image/webp" srcset="hero-640.webp 640w, hero-1280.webp 1280w" sizes="(min-width: 1024px) 50vw, 100vw">
  <img src="hero-1280.jpg" width="1280" height="720" alt="Descriptive alt" fetchpriority="high" decoding="async">
</picture>
```

---

## 5. Lazy Loading & Code Splitting

- Split by **route** and by **heavy feature** (charts, editors, maps, rich-text, date pickers, video players). Load on demand or on interaction.
- Lazy-load below-the-fold components, iframes, and widgets (intersection observer).
- Keep shared/vendor chunks stable for cache efficiency.
- Don't over-split into hundreds of tiny chunks (request overhead); target meaningful chunks ≥ ~20–30 KB.
- Show a skeleton/placeholder with reserved dimensions while lazy parts load (prevents CLS; see [12](./12-forms-validation-errors.md)).

---

## 6. Bundle Size & Dependencies

- **Every dependency must justify itself.** Before adding a package: Can the platform do it natively? Is there a smaller alternative? What's its bundle cost (check bundlephobia/analyzer)? Is it maintained and secure?
- Prefer tree-shakable libraries and import only what you need (e.g., per-function imports, not whole utility libraries).
- Don't ship large libraries for trivial features (date library for one format call, full icon set for five icons, animation library for a fade).
- Run a **bundle analyzer** on each significant change; investigate any chunk growth > 10%.
- Remove dead code and unused CSS; enable minification and tree shaking in production builds.
- Audit third-party scripts (analytics, chat, tag managers, A/B tools): each must have an owner, a purpose, and `async/defer`; load after consent and after critical content; consider server-side or facade approaches.
- Target modern browsers for bundles; avoid shipping heavy legacy polyfills to everyone.

---

## 7. Font Optimization

- Prefer **system fonts** where brand allows; otherwise self-host WOFF2 (best compression), subset to needed character ranges, and limit weights/styles.
- Use `font-display: swap` (or `optional` for non-critical) and tuned fallbacks (`size-adjust`, `ascent-override`) to minimize layout shift.
- `preload` only the 1–2 fonts needed for above-the-fold text, with `crossorigin`.
- Prefer variable fonts when multiple weights are needed.
- Avoid icon fonts; use inline SVG sprites or individual SVGs.

---

## 8. CSS & Rendering Optimization

- Ship only used CSS; avoid giant global frameworks if only a fraction is used (or use purge/JIT).
- Avoid layout thrashing (batch DOM reads/writes); avoid forced synchronous layouts.
- Animate only `transform` and `opacity` (compositor-friendly); avoid animating `width/height/top/left/box-shadow` on large areas. See [13](./13-interactions-animations-conversion.md).
- Use `content-visibility: auto` for long off-screen sections; `contain` where appropriate.
- Virtualize long lists/tables (hundreds+ rows) or paginate server-side.
- Reserve space for dynamic content (ads, embeds, banners, late-loading images) to protect CLS; insert banners **below** or in reserved slots, not above existing content.
- Minimize main-thread work: break up long tasks (> 50 ms), defer non-urgent computation, use web workers for heavy tasks, debounce/throttle scroll/resize/input handlers, use passive listeners.
- Avoid huge DOMs (aim < ~1,500 nodes per page; avoid depth > 32).
- Memoize expensive computations and avoid unnecessary re-renders in component frameworks.

---

## 9. Caching

| Asset type | Strategy |
|---|---|
| Fingerprinted static assets (JS/CSS/images/fonts with content hash) | `Cache-Control: public, max-age=31536000, immutable` |
| HTML documents | `no-cache` / short TTL with revalidation (ETag), or `s-maxage` + `stale-while-revalidate` at the CDN for static pages |
| API GET responses | Appropriate `Cache-Control`, `ETag`, `Vary`; never cache private/user-specific data on shared caches |
| Authenticated responses | `Cache-Control: private, no-store` where sensitive |

- Put static assets behind a **CDN** with edge caching and compression.
- Use content-hashed filenames so cache busting is automatic.
- Consider a **service worker** only when offline/PWA features are in scope; do it carefully to avoid stale-content traps.
- Application-level caching (memory/Redis) for expensive, frequently-read, slowly-changing data, with explicit invalidation and TTLs.

---

## 10. API & Network Optimization

- Fetch only what's needed: field selection, pagination, filtering server-side (see [11](./11-backend-api-database.md)).
- Avoid **request waterfalls**: parallelize independent requests, fetch data on the server during render, or batch.
- Avoid the **N+1 problem** at both API and database layers.
- Use compression (Brotli/gzip) for JSON; keep payloads lean (no unused fields, no giant nested objects).
- Debounce search/autocomplete input (see [13](./13-interactions-animations-conversion.md)); cancel stale requests (`AbortController`).
- Use optimistic updates only where failure is rare and recoverable.
- Add timeouts, retries with backoff for idempotent calls, and graceful degradation when third-party APIs are slow.
- Use HTTP caching and conditional requests instead of re-fetching unchanged data.

---

## 11. Database Query Optimization

(Design is in [11](./11-backend-api-database.md); here are the performance rules.)

- Index columns used in `WHERE`, `JOIN`, `ORDER BY`; verify with `EXPLAIN`/query plans.
- Never `SELECT *` in application queries; select needed columns.
- Paginate every list query; prefer keyset (cursor) pagination for large/changing datasets.
- Eliminate N+1 queries (eager load/join/batch).
- Use connection pooling; keep transactions short.
- Cache hot reads; precompute aggregates for dashboards.
- Log and review slow queries (e.g., > 100–200 ms) regularly.

---

## 12. Perceived Performance

- Show meaningful content early (SSR/streaming/skeletons) rather than a blank page with spinner.
- Skeletons match the final layout dimensions.
- Optimistic UI for quick, low-risk actions.
- Respond to input within 100 ms with visible feedback even if work continues.
- Keep animations smooth (60 fps) and short; never block interaction on animation.

---

## 13. Measuring Performance

| Tool/Method | Purpose |
|---|---|
| Lighthouse / PageSpeed Insights | Lab audit, per-change check |
| WebPageTest | Waterfall, filmstrip, real devices/networks |
| Browser DevTools Performance & Network | Profiling main thread, long tasks, waterfalls |
| Bundle analyzer | JS weight by module |
| Real User Monitoring (RUM) / Web Vitals library | Field data at p75 |
| Server APM / slow query log | Backend bottlenecks |

Process: **baseline → identify top bottleneck → fix → re-measure → document.** Lab and field data can differ; prioritize field data when available.

---

## 14. Do / Don't

**Do**
- Set and enforce budgets from the start.
- Optimize the LCP element specifically (priority, size, format, server response).
- Ship less JS; render on the server where sensible.
- Reserve space for every late-loading element.
- Measure on slow devices and networks.

**Don't**
- Don't add a dependency without checking size and necessity.
- Don't lazy-load the hero image.
- Don't ship unoptimized, oversized, or dimensionless images.
- Don't block rendering with third-party scripts.
- Don't animate layout properties or run heavy animations on scroll.
- Don't sacrifice performance for animations or visual effects.
- Don't optimize prematurely without measurement, but don't ignore known anti-patterns above.

---

## 15. Validation Checklist

- [ ] LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1 on mobile profile (lab) for key pages
- [ ] JS/CSS/image/font budgets met; bundle analyzed, no unexplained growth
- [ ] LCP image prioritized and not lazy-loaded; all images sized, modern format, responsive
- [ ] Below-the-fold media/components lazy-loaded; routes and heavy features code-split
- [ ] Fonts self-hosted/subset, `font-display` set, ≤ 2 families
- [ ] No unnecessary dependencies; third-party scripts audited and deferred
- [ ] Compression + HTTP/2/3 + CDN enabled; fingerprinted assets cached immutably
- [ ] No request waterfalls, N+1 queries, or unbounded list queries
- [ ] Animations use transform/opacity only and respect reduced motion
- [ ] Performance checked in CI and monitored in production with RUM
