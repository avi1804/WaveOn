# 11 — Backend, API & Database

> **Part of the Website Engineering System. Entry point: [`J.md`](./J.md).**
> **Responsibility of this file:** server architecture, business logic organization, API contracts, and data modeling.
> **Not covered here:** auth/security controls (see [`10-security-authentication-authorization.md`](./10-security-authentication-authorization.md)), form UX and user-facing error messages (see [`12-forms-validation-errors.md`](./12-forms-validation-errors.md)), caching/query performance targets (see [`08-performance-and-optimization.md`](./08-performance-and-optimization.md)), migrations in deployment (see [`15-deployment-monitoring-maintenance.md`](./15-deployment-monitoring-maintenance.md)).

---

## 1. Principles

1. **Design data and contracts before code.** Define entities, relationships, and API contracts first (see J.md workflow: "Define data requirements" precedes "Implement").
2. **The backend is the source of truth.** Business rules, validation, pricing, permissions and state transitions live on the server.
3. **Simple, boring, maintainable.** Prefer proven patterns over clever ones. Add complexity only when a real requirement demands it.
4. **Decide if a backend is needed at all.** If the site is content-only, static generation or a headless CMS may be better than a custom server. Document the decision.
5. **Stateless services, stateful data.** Application servers should be horizontally scalable; persistent state belongs in the database/cache/object storage.

---

## 2. Backend Architecture

### 2.1 Layering (separation of concerns)

```text
Request
  ↓
Routing / Controllers   → parse request, call service, shape response (thin)
  ↓
Validation layer        → schema validation, normalization
  ↓
Service / Domain layer  → business logic, rules, orchestration, transactions
  ↓
Data access layer       → repositories / queries (only place that talks to DB)
  ↓
Database / external services
```

### Rules
- Controllers/route handlers MUST be thin: no business logic, no raw queries.
- Business logic MUST live in services/domain modules that are testable without HTTP.
- Only the data access layer touches the database. Services never build SQL.
- External integrations (payments, email, storage, analytics) MUST be wrapped in adapter modules with a clear interface, timeouts, retries, and error mapping, so they can be mocked and swapped.
- Organize by **feature/domain** (e.g., `orders/`, `users/`, `catalog/`) rather than only by technical type, once the project has more than a few resources.
- Keep configuration centralized and environment-driven (no magic constants scattered in code).
- Use dependency injection or explicit module wiring so components are replaceable in tests.

### 2.2 Error Handling (server side)
- Use a single, centralized error-handling mechanism that converts internal errors into the standard API error format (§3.6).
- Distinguish error classes: validation (4xx), authentication/authorization (401/403), not found (404), conflict (409), rate limit (429), upstream failure (502/503/504), unexpected (500).
- Never swallow errors silently. Every `catch` must handle, translate, or rethrow with context.
- Log unexpected errors with a correlation/request ID and context; return a generic message to clients (see file 10 §7).
- External calls MUST have timeouts and bounded retries with backoff; never retry non-idempotent operations blindly.

### 2.3 Background Work
- Slow or unreliable work (email, image processing, webhooks, reports, third-party sync) MUST run in a job queue/worker, not inside the request/response cycle.
- Jobs MUST be **idempotent** (safe to run twice), have retry limits, a dead-letter/failed-job strategy, and visibility in monitoring.
- Scheduled tasks (cron) MUST be documented, idempotent, and protected from overlapping runs.

### 2.4 Idempotency & Concurrency
- Payment, order, and other critical `POST` endpoints SHOULD accept an `Idempotency-Key` to prevent duplicate submissions on retry/double-click.
- Prevent lost updates with optimistic locking (version/`updated_at` check) or database row locks where concurrent edits are possible.
- Webhook handlers MUST verify signatures, be idempotent, and respond quickly (do heavy work asynchronously).

### 2.5 Configuration & Environments
- Behavior differences between environments MUST come from configuration, not code branches.
- Feature flags SHOULD be used for risky or incremental releases; remove stale flags.

---

## 3. API Design

### 3.1 Conventions (REST by default)
- Resources are **nouns**, plural, lowercase, hyphen- or snake-consistent: `/products`, `/orders/{id}/items`.
- Keep nesting shallow (max 2 levels). Prefer filters over deep nesting.
- Use a consistent URL/versioning strategy (e.g., `/api/v1/...`). Breaking changes require a new version or documented deprecation window.
- If GraphQL/RPC is chosen instead, document why, and still apply the same rules for validation, auth, errors, pagination and limits.

### 3.2 HTTP Methods

| Method | Use | Safe | Idempotent |
|---|---|---|---|
| `GET` | Read a resource/collection | Yes | Yes |
| `POST` | Create / non-idempotent action | No | No (use idempotency keys) |
| `PUT` | Replace a resource | No | Yes |
| `PATCH` | Partial update | No | Should be |
| `DELETE` | Remove a resource | No | Yes |

- `GET` MUST NEVER change state.
- Actions that don't map to CRUD use a clear sub-resource or verb endpoint (`POST /orders/{id}/cancel`).

### 3.3 Status Codes

| Code | Meaning / When |
|---|---|
| `200 OK` | Successful read/update with body |
| `201 Created` | Resource created (include `Location` header/ID) |
| `204 No Content` | Success, no body (e.g., delete) |
| `400 Bad Request` | Malformed request |
| `401 Unauthorized` | Not authenticated |
| `403 Forbidden` | Authenticated but not allowed |
| `404 Not Found` | Resource missing (also used to avoid leaking existence when appropriate) |
| `409 Conflict` | State conflict / duplicate / version mismatch |
| `422 Unprocessable Entity` | Validation failed (well-formed but invalid) |
| `429 Too Many Requests` | Rate limited |
| `500 Internal Server Error` | Unexpected server error |
| `502/503/504` | Upstream failure / unavailable / timeout |

- NEVER return `200` with an error hidden in the body.

### 3.4 Request Validation
- Every endpoint MUST define a request schema (body, query, params, headers) and reject invalid/unknown input before touching business logic.
- Enforce types, lengths, formats, enums, ranges, and required/optional rules.
- Validation details and user-message guidance: see file 12. Security aspects (injection, mass assignment): see file 10 §3.

### 3.5 Response Schemas
- Every endpoint MUST have a documented response schema; responses MUST be consistent in shape and naming (pick one casing — e.g., `camelCase` — and keep it).
- Never return raw database rows/models. Map to explicit response DTOs/serializers so internal or sensitive fields (`passwordHash`, internal flags, other users' data) can never leak.
- Use ISO 8601 UTC timestamps; represent money as integer minor units or decimal strings plus currency code (never floating point).
- Use stable IDs (UUID/ULID or opaque IDs); do not expose sequential internal IDs if enumeration is a concern.

**Success example**
```json
{
  "data": { "id": "ord_8f2a", "status": "paid", "total": { "amount": 4999, "currency": "USD" } },
  "meta": { "requestId": "req_1c9e" }
}
```

### 3.6 Standard Error Format
All errors MUST use one consistent structure:

```json
{
  "error": {
    "code": "VALIDATION_FAILED",
    "message": "Some fields need your attention.",
    "details": [
      { "field": "email", "code": "INVALID_FORMAT", "message": "Enter a valid email address." }
    ],
    "requestId": "req_1c9e"
  }
}
```

- `code` is a stable, machine-readable string (used by the frontend for logic and translation).
- `message` is safe for display; never contains stack traces, SQL, or internal paths.
- `details` is used for field-level errors so the frontend can attach messages to inputs.

### 3.7 Pagination
- Every list endpoint MUST be paginated with an enforced maximum page size. Never return unbounded collections.
- Use **cursor-based** pagination for large/fast-changing datasets or infinite scroll; **offset/page-based** is acceptable for small, stable datasets with page numbers.
- Return pagination metadata:

```json
{
  "data": [ ... ],
  "meta": { "limit": 20, "nextCursor": "eyJpZCI6...", "hasMore": true, "total": 134 }
}
```
- Provide `total` only when it is cheap to compute.

### 3.8 Filtering & Sorting
- Use query parameters: `GET /products?category=shoes&minPrice=1000&sort=-createdAt&q=boot`.
- Allow-list filterable and sortable fields; map them to indexed columns. Reject unknown fields with a clear `400/422`.
- Define stable default sort with a unique tiebreaker (e.g., `createdAt, id`) so pagination is deterministic.
- Filter/sort semantics MUST be documented per endpoint. (UI behavior for filters/search: file 13.)

### 3.9 API Authentication & Rate Limiting
- Every endpoint is **protected by default**; public endpoints are an explicit allow-list. Mechanisms and rules: file 10.
- Return standard rate-limit information (`429` + `Retry-After`).

### 3.10 API Documentation & Versioning
- Maintain machine-readable API docs (e.g., OpenAPI) generated from or verified against the real schemas. Docs MUST be updated in the same change as the API.
- Maintain a changelog for breaking changes; use deprecation headers/notices before removal.
- Prefer backward-compatible evolution: add fields, don't rename/remove them in place.

### 3.11 Caching & Conditional Requests
- Set explicit cache headers (`Cache-Control`, `ETag`/`Last-Modified`) for cacheable `GET` responses. Never cache user-private data in shared caches.
- Strategy details and targets: file 08.

---

## 4. Database Design

### 4.1 Choose Deliberately
- Default to a **relational database** for transactional/business data unless there is a documented reason otherwise.
- Use the right tool for the job (cache for ephemeral data, search engine for full-text search, object storage for files). Do not store large binaries in the primary database.
- Document the chosen data stores and why.

### 4.2 Modeling Process
1. List entities from the requirements and user flows (file 01/03).
2. Define attributes, types, and required/optional rules.
3. Define relationships (1–1, 1–N, N–N with join tables) and ownership.
4. Define constraints, indexes, and lifecycle (soft vs. hard delete, retention).
5. Produce an ER diagram or schema doc in the repository **before** writing migrations.

### 4.3 Tables, Naming & Types
- Consistent naming: tables plural `snake_case` (`order_items`), columns `snake_case`, foreign keys `<entity>_id`.
- Use correct types: timestamps with timezone (store UTC), booleans as booleans, enums via constrained types/lookup tables, money as integers/decimals — never floats.
- Every table has: primary key, `created_at`, `updated_at`; add `deleted_at` only when soft delete is required.
- Avoid storing derived data unless justified (performance) and kept consistent.

### 4.4 Keys, Relationships & Constraints
- Every table MUST have a **primary key** (UUID/ULID or surrogate integer; be consistent).
- Relationships MUST be enforced with **foreign keys**, with explicit `ON DELETE` behavior (`RESTRICT`, `CASCADE`, `SET NULL`) chosen intentionally.
- Enforce integrity in the database, not only in application code: `NOT NULL`, `UNIQUE`, `CHECK`, and foreign key constraints.
- Many-to-many relationships use join tables with composite uniqueness.

### 4.5 Normalization
- Normalize to roughly **3NF** by default to avoid duplication and update anomalies.
- Denormalize only for measured performance needs, document it, and keep it consistent (e.g., via transactions or jobs).
- Avoid generic "key-value everything" tables and overuse of unstructured JSON columns; use JSON only for genuinely flexible/semistructured data.

### 4.6 Indexing
- Index primary keys (automatic), foreign keys, and columns used frequently in `WHERE`, `JOIN`, `ORDER BY`, and unique lookups.
- Use composite indexes in the order that matches query patterns; verify with query plans (`EXPLAIN`).
- Don't over-index: every index slows writes and uses storage. Remove unused indexes.
- Any list endpoint with filters/sorting MUST have supporting indexes validated against realistic data volume.

### 4.7 Transactions & Consistency
- Operations that change multiple records MUST run in a **transaction** (all-or-nothing): e.g., create order + order items + reduce inventory.
- Choose isolation levels deliberately; guard against race conditions (double booking, overselling) with constraints, locks, or atomic updates.
- Keep transactions short; never hold them open across external API calls or user interaction.
- Use the outbox pattern (or equivalent) when a DB change must reliably trigger an external event.

### 4.8 Query Practices
- Avoid **N+1** queries: use joins, batched loading, or eager loading.
- Select only needed columns; never `SELECT *` in production paths.
- Always paginate; always bound result sets.
- Use parameterized queries only (file 10 §3).
- Measure slow queries (slow query log / APM) and fix with indexes or query changes. Targets: file 08.

### 4.9 Migrations
- **All schema changes go through versioned migration files** committed to the repository. Never edit production schema by hand.
- Migrations MUST be reviewable, repeatable, and run in CI against a clean database and a copy of realistic data.
- Prefer **backward-compatible, expand → migrate → contract** changes so deployments can roll out/rollback safely (add column → backfill → switch code → drop old column later).
- Large data backfills run as background jobs, not inside blocking migrations.
- Provide a rollback/forward-fix plan for each risky migration. Deployment procedure: file 15.
- Seed scripts MUST be separate for development data vs. required reference data; never seed fake data into production.

### 4.10 Data Lifecycle & Privacy
- Define retention rules and deletion behavior (soft delete vs. hard delete vs. anonymization).
- Encrypt sensitive columns where required; never store secrets in plain text (file 10).
- Maintain audit tables/logs for sensitive changes (who, what, when).
- Backups and restore testing: file 15.

---

## 5. Data Integrity & Business Rules

- Business invariants (price calculations, inventory limits, status transitions, permissions) MUST be enforced server-side. Never accept `price`, `total`, `role`, or `status` blindly from the client.
- Model state machines explicitly (e.g., `pending → paid → shipped → delivered`, with allowed transitions only).
- Recalculate totals/derived values on the server from trusted data.
- Emails, uploads, and third-party effects occur after successful persistence, handled via jobs.

---

## 6. Do / Don't

**Do**
- Define the schema and API contract before implementation.
- Keep controllers thin and logic in testable services.
- Validate every request and map every response through explicit schemas.
- Use transactions, constraints, indexes, and migrations.
- Paginate every list; allow-list filters and sorts.
- Document the API and keep docs in sync.

**Don't**
- Put business logic in route handlers or the frontend.
- Build SQL by string concatenation or use `SELECT *` on hot paths.
- Return raw DB models or leak internal fields.
- Return unbounded lists or `200` for errors.
- Change production schemas manually or edit applied migrations.
- Store money in floats, files in the DB, or secrets in plain text.
- Run slow/unreliable work inside the request cycle.

---

## 7. Checklists

### New endpoint checklist
- [ ] Resource/URL/method follow conventions
- [ ] Request schema defined and enforced; unknown fields rejected
- [ ] Authentication + authorization rule explicit (file 10)
- [ ] Response schema defined; no sensitive/internal fields
- [ ] Correct status codes; standard error format
- [ ] Pagination/filter/sort allow-lists (for lists)
- [ ] Idempotency considered for POST actions
- [ ] Queries indexed; no N+1
- [ ] Documented in API docs
- [ ] Tests: success, validation failure, unauthorized, forbidden, not found, edge cases (file 14)

### New table/schema checklist
- [ ] Primary key, timestamps, naming conventions
- [ ] Foreign keys with deliberate `ON DELETE`
- [ ] `NOT NULL` / `UNIQUE` / `CHECK` constraints
- [ ] Indexes for known query patterns
- [ ] Migration file created, tested up and (where possible) down
- [ ] Retention/deletion behavior defined
- [ ] ER/schema doc updated

---

## 8. Validation Criteria (Definition of Done)

1. The ER/schema documentation matches the real database; every relationship is enforced by constraints.
2. A fresh database can be built entirely from migrations in CI.
3. Every endpoint rejects invalid input with the standard error format and correct status code.
4. No endpoint returns unbounded data; all list endpoints paginate with a maximum limit.
5. No sensitive/internal fields appear in any response (verified by tests/review).
6. Multi-step writes are atomic; concurrency-sensitive flows (stock, payments) are tested.
7. API documentation is current, and breaking changes are versioned or deprecated properly.
8. Slow queries identified in realistic-volume testing are indexed/optimized.
