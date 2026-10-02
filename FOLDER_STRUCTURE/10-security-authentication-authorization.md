# 10 — Security, Authentication & Authorization

> **Part of the Website Engineering System. Entry point: [`J.md`](./J.md).**
> **Responsibility of this file:** how the website is protected, how users prove who they are, and what they are allowed to do.
> **Not covered here:** form/input UX (see [`12-forms-validation-errors.md`](./12-forms-validation-errors.md)), API shape (see [`11-backend-api-database.md`](./11-backend-api-database.md)), deployment secrets handling and monitoring (see [`15-deployment-monitoring-maintenance.md`](./15-deployment-monitoring-maintenance.md)).

---

## 1. Core Security Principles

The agent MUST treat every website as a hostile-internet-facing system, even a "simple" one.

1. **Never trust the client.** Anything from the browser (inputs, headers, cookies, hidden fields, route state, role flags) is untrusted until verified on the server.
2. **Least privilege.** Every user, service, API key and database account gets the minimum access required.
3. **Defense in depth.** No single control may be the only thing standing between an attacker and data.
4. **Secure by default.** The safe behavior is the default; unsafe behavior requires an explicit, documented exception.
5. **Fail closed.** If auth, validation or a permission check errors out, deny access.
6. **No security through obscurity.** Hidden URLs, obfuscated IDs, or "nobody will guess this" are not controls.

---

## 2. Secrets & Environment Variables

### Rules
- Secrets (API keys, DB passwords, signing keys, tokens, SMTP credentials) MUST live in environment variables or a secret manager — never in source code, config committed to the repo, client bundles, logs, or screenshots.
- Maintain a committed `.env.example` listing every required variable with **fake placeholder values** and a one-line description.
- `.env` and any real secret files MUST be listed in `.gitignore` before the first commit.
- Separate secrets per environment (development / staging / production). Production secrets must never be used locally.
- Variables exposed to browser code (public prefixes) MUST contain only non-sensitive values. If a value would hurt if leaked, it is server-only.
- Validate required environment variables at application startup; fail fast with a clear message (without printing the secret values).
- If a secret is ever committed or leaked, treat it as compromised: rotate it, don't just delete the commit.

### Do / Don't
| Do | Don't |
|---|---|
| Read secrets from environment/secret manager | Hardcode `apiKey = "sk-..."` in any file |
| Provide `.env.example` with dummy values | Commit `.env` |
| Rotate secrets on suspected exposure | Reuse the same secret across environments |
| Keep third-party keys server-side and proxy calls | Call privileged third-party APIs directly from the browser |

---

## 3. Input Validation & Injection Prevention

### Rules
- Validate **every** external input on the server: body, query string, path params, headers, cookies, file uploads, webhooks.
- Use **allow-lists** (expected type, length, format, range, enum) rather than block-lists.
- Reject unexpected fields (strict schemas); never mass-assign request bodies directly into database models or privileged objects.
- Normalize before validating (trim, Unicode normalization where relevant) and validate before using.
- Keep validation rules defined once (shared schema) and reused by the API layer. (Frontend validation UX is defined in file 12; it never replaces server validation.)

### SQL / NoSQL / Command Injection
- ALL database access MUST use parameterized queries, prepared statements, or an ORM/query builder that parameterizes by default.
- NEVER build queries by concatenating or interpolating user input.
- NEVER pass user input to shell commands, `eval`, dynamic `require/import`, template engines in code-execution mode, or deserializers on untrusted data.
- Sort fields, column names and operators from the client MUST be mapped through an allow-list.

```text
BAD : "SELECT * FROM users WHERE email = '" + email + "'"
GOOD: query("SELECT * FROM users WHERE email = $1", [email])
```

### XSS Prevention
- Rely on framework auto-escaping for output. Treat any "raw HTML" escape hatch as a security-sensitive operation requiring justification.
- If user-supplied rich text/HTML must be rendered, sanitize it with a well-maintained sanitizer using a strict allow-list of tags/attributes. Sanitize on output (and optionally on input).
- Never inject untrusted data into `innerHTML`, inline event handlers, `javascript:` URLs, inline `<script>`, or CSS.
- Validate and allow-list URL schemes (`http`, `https`, `mailto`, `tel`) for any user-provided link.
- Deploy a Content Security Policy (see §6).

### File Uploads
- Enforce max size, allowed extensions AND verified MIME/content type (check magic bytes, not just the filename).
- Generate server-side random filenames; never trust the client filename or path.
- Store uploads outside the web root or in object storage; serve with correct `Content-Type` and `Content-Disposition`.
- Scan for malware where the risk justifies it. Never execute uploaded files.
- Strip metadata (e.g., EXIF location) from user images when privacy matters.

### SSRF & Open Redirects
- If the server fetches a user-supplied URL, restrict to allow-listed hosts and block internal/private IP ranges and metadata endpoints.
- Redirect targets (`?next=`, `?redirect=`) MUST be validated against an allow-list or restricted to relative internal paths.

---

## 4. Transport, Cookies & Browser Protections

### HTTPS
- Production MUST be HTTPS-only. Redirect HTTP→HTTPS and send `Strict-Transport-Security`.
- No mixed content. All third-party scripts/assets load over HTTPS.

### CSRF
- Any state-changing request that relies on cookie-based authentication MUST be CSRF-protected: SameSite cookies **plus** anti-CSRF tokens (or double-submit/origin checking) for sensitive actions.
- State-changing operations MUST NOT use `GET`.
- APIs authenticated purely by an `Authorization` header token are not CSRF-prone, but must then protect the token from XSS (see §3).

### CORS
- Never use `Access-Control-Allow-Origin: *` together with credentials. Never reflect the request `Origin` blindly.
- Allow-list exact origins per environment. Restrict allowed methods and headers to what is needed.
- CORS is a browser rule, not authorization — the server must still authenticate and authorize every request.

### Cookie Settings (session/auth cookies)
```text
HttpOnly   → not readable by JavaScript
Secure     → HTTPS only
SameSite   → Lax (default) or Strict; None only with Secure and a documented reason
Path/Domain→ as narrow as possible
Max-Age    → matches session policy
```

---

## 5. Rate Limiting & Abuse Prevention

- Apply rate limits globally and with **stricter limits** on: login, registration, password reset, OTP/verification, contact/lead forms, search, and any expensive endpoint.
- Limit by multiple keys where appropriate (IP, account, API key) to avoid trivial bypass.
- Return `429 Too Many Requests` with a `Retry-After` header and a generic, user-friendly message.
- Add bot protection (CAPTCHA/challenge, honeypot field, or time-trap) to public forms that create records or send email.
- Apply progressive delays or temporary lockouts after repeated failed logins — without enabling attackers to lock out real users permanently (use time-boxed locks + notification).
- Cap request body size, pagination `limit`, query complexity, and upload size.

---

## 6. Secure Headers

Set these on every response (adjust only with documented reasons):

| Header | Purpose / Baseline |
|---|---|
| `Content-Security-Policy` | Restrict script/style/img/frame sources; avoid `unsafe-inline`/`unsafe-eval`; use nonces/hashes if inline is unavoidable |
| `Strict-Transport-Security` | Force HTTPS (long max-age, `includeSubDomains` when ready) |
| `X-Content-Type-Options: nosniff` | Prevent MIME sniffing |
| `Referrer-Policy: strict-origin-when-cross-origin` | Limit referrer leakage |
| `Permissions-Policy` | Disable unused browser features (camera, mic, geolocation, etc.) |
| `X-Frame-Options: DENY` or CSP `frame-ancestors` | Prevent clickjacking |
| `Cross-Origin-*` policies | Isolate where applicable |

- Remove/disable server version banners (`Server`, `X-Powered-By`).
- Third-party scripts MUST be justified, minimal, and use Subresource Integrity (SRI) when loaded from a CDN.

---

## 7. Secure Error Responses & Logging

- Production errors shown to users MUST be generic: what happened in plain language + what to do next. NEVER expose stack traces, SQL, file paths, framework versions, internal IDs, or config.
- Log full technical details **server-side only**, with a request/correlation ID the user can quote to support.
- NEVER log: passwords, tokens, session IDs, full card numbers, secrets, or unnecessary personal data. Mask or hash sensitive fields.
- Use identical, generic responses for "user not found" vs "wrong password" and for password-reset requests to avoid **account enumeration**.
- Security-relevant events MUST be logged: failed/successful logins, password changes, permission denials, role changes, token revocations, admin actions.

---

## 8. Authentication

### 8.1 Registration
- Validate email format and password policy server-side. Require email verification before granting sensitive access.
- Do not reveal whether an email is already registered (use neutral messaging + email notification flow where feasible).
- Collect only the data actually needed (data minimization).

### 8.2 Password Handling
- Hash passwords with a modern, slow, salted algorithm designed for passwords (**Argon2id** preferred; **bcrypt/scrypt** acceptable). NEVER use plain text, reversible encryption, MD5, SHA-1, or unsalted/fast hashes.
- Password policy: minimum length ≥ 12 recommended; allow long passphrases and password managers (allow paste); check against known-breached password lists where possible; do not force arbitrary composition rules or periodic rotation without cause.
- Never email or display existing passwords. Reset flows send a **single-use, short-lived, high-entropy token** (stored hashed), invalidated after use or on password change.

### 8.3 Login
- Use constant-time comparison and uniform error messages ("Email or password is incorrect").
- Apply rate limiting and lockout rules (§5).
- Support multi-factor authentication (TOTP/WebAuthn/passkeys) for admin and privileged roles — and offer it to all users on products holding sensitive data.
- Require re-authentication for sensitive actions (change email/password, payment methods, delete account).

### 8.4 Sessions vs. Tokens (JWT)
Pick one model deliberately and document it in the project's architecture notes.

**Server-side sessions (default for traditional websites):**
- Random, high-entropy session IDs; stored server-side; sent in secure cookies (§4).
- Regenerate the session ID on login and privilege change (prevent fixation).
- Idle timeout + absolute timeout; invalidate server-side on logout.

**Token-based (JWT/access tokens) when needed:**
- Short-lived access tokens (minutes). Longer-lived **refresh tokens** with rotation and reuse detection; store refresh tokens in `HttpOnly` `Secure` cookies where possible.
- Sign with strong algorithms; **explicitly pin the allowed algorithm**; reject `alg: none`. Validate `iss`, `aud`, `exp`, `nbf`.
- Never put secrets or sensitive personal data in a JWT payload (it is readable).
- Prefer not to store tokens in `localStorage` (XSS-exposed). If unavoidable, document the risk and harden CSP.
- Provide a revocation strategy (denylist, token versioning, or session table).

### 8.5 Logout & Session Management
- Logout MUST invalidate the session/refresh token **on the server**, not just clear client state.
- Provide "log out of all devices" for account-based products.
- Notify users by email on password change, new-device login, or email change.

### 8.6 Third-Party / SSO Login (if used)
- Use established standards (OAuth 2.0 / OpenID Connect) with PKCE for public clients; validate `state` and `nonce`; never roll your own protocol.
- Request minimum scopes. Handle account-linking carefully to prevent account takeover (verify email ownership).

---

## 9. Authorization

### Rules
- Authorization MUST be enforced **on the backend for every request**. Frontend route guards and hidden buttons exist only for UX, never for protection.
- Deny by default: every endpoint/route requires an explicit access rule.
- Check **object-level** permissions (can THIS user access THIS record?), not only role-level. This prevents IDOR/BOLA (e.g., changing `/orders/123` to `/orders/124`).
- Check **function-level** permissions (can this role call this action?) and **field-level** permissions (can this role set `role`, `isAdmin`, `price`, `ownerId`?).
- Derive the acting user's identity from the verified session/token — NEVER from a client-supplied `userId`.
- Centralize policy logic (middleware/policy layer) instead of scattering ad-hoc `if` checks.

### Role & Permission Model
Define explicitly in project docs, for example:

```text
Roles:        guest | user | editor | admin | super_admin
Permissions:  resource:action   (e.g., order:read, order:refund, user:delete)
Mapping:      role → permissions (data-driven, auditable)
Ownership:    some actions allowed only on own resources
```

- Admin areas MUST be separately protected (stronger auth, MFA, IP/network restrictions where appropriate, full audit logging).
- Role changes and privilege escalation MUST be restricted, logged, and verified server-side.
- Multi-tenant systems MUST enforce tenant isolation on every query (tenant ID from server-side identity, never from request).

### Frontend Route Guards (UX only)
- Redirect unauthenticated users to login and return them to their intended page after login (validated relative redirect).
- Hide or disable UI the user cannot use, but assume they can still call the API directly.
- Show a clear `403`/"no access" page for authenticated-but-unauthorized users and a `401`→login flow for unauthenticated ones.

---

## 10. Privacy & Data Protection

- Collect the minimum personal data; define retention and deletion rules.
- Encrypt data in transit (TLS) and encrypt sensitive data at rest (database/disk encryption; field-level encryption for highly sensitive values).
- Provide a privacy policy, cookie/consent handling as required by applicable law (e.g., GDPR/CCPA), and user data export/deletion where required.
- Never store raw payment card data; use a compliant payment provider and tokens.
- Production data MUST NOT be used in dev/test unless anonymized.

---

## 11. Dependency & Supply-Chain Security

- Use only well-maintained, necessary dependencies; pin versions with a lockfile.
- Run automated vulnerability scanning (dependency audit / SCA) in CI; fix or document high/critical findings.
- Review new dependencies: maintenance status, download base, install scripts, license.
- Avoid copying unverified code snippets with unknown security properties.

---

## 12. Do / Don't Summary

**Do**
- Validate and authorize on the server, always.
- Hash passwords with Argon2id/bcrypt; use secure, HttpOnly cookies.
- Use parameterized queries; escape/sanitize output.
- Rate-limit sensitive endpoints; set secure headers; enforce HTTPS.
- Return generic errors to users; log details privately.

**Don't**
- Hardcode or commit secrets.
- Trust frontend authorization, hidden fields, or client-sent roles/user IDs.
- Concatenate user input into queries, commands, or HTML.
- Use `*` CORS with credentials.
- Store tokens or passwords insecurely, or log them.
- Reveal whether an account exists.
- Sacrifice security for convenience or speed.

---

## 13. Checklists

### Before shipping any feature
- [ ] All inputs validated server-side with an allow-list schema
- [ ] Queries parameterized; no raw string-built queries
- [ ] Output encoded/sanitized; no unsafe HTML injection
- [ ] Endpoint has an explicit authentication + authorization rule
- [ ] Object-level (IDOR) check implemented and tested
- [ ] Sensitive fields cannot be mass-assigned
- [ ] Rate limiting applied where abuse is plausible
- [ ] Errors generic to users, detailed in server logs
- [ ] No secrets in code, client bundle, or logs
- [ ] Security headers & HTTPS verified
- [ ] Dependencies audited

### Authentication checklist
- [ ] Passwords hashed with Argon2id/bcrypt
- [ ] Uniform login errors; no account enumeration
- [ ] Reset tokens single-use, short-lived, hashed at rest
- [ ] Session ID regenerated on login; server-side logout works
- [ ] Token expiry + refresh rotation (if JWT)
- [ ] MFA available/required for privileged roles

### Authorization checklist
- [ ] Deny-by-default policy
- [ ] Role AND ownership checks on every protected resource
- [ ] Admin routes separately protected and audited
- [ ] Frontend guards present for UX, backend guards present for security

---

## 14. Validation Criteria (Definition of Done)

This file is satisfied only when:
1. A user cannot read or modify another user's data by changing IDs in URLs or request bodies (verified by test).
2. A user without the required role cannot call a protected endpoint directly (verified by test, bypassing the UI).
3. No secret exists in the repository history, client bundle, or log output.
4. Injection and XSS test payloads are neutralized on all user-input surfaces.
5. Login, reset, and registration flows are rate-limited and do not leak account existence.
6. Production responses include the required security headers and enforce HTTPS.
7. Security-relevant events are logged with correlation IDs.

(Test execution requirements are specified in [`14-testing-quality.md`](./14-testing-quality.md).)
