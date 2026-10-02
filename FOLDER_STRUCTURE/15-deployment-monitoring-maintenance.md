# 15 — DEPLOYMENT, MONITORING & MAINTENANCE

## Purpose

This document defines how a website should be prepared for production, deployed safely, monitored after deployment, and maintained over time.

The AI coding agent MUST treat deployment, monitoring, and maintenance as part of the website lifecycle.

A website is not complete when:

```text
Code → Build → Deploy
```

It is complete when:

```text
Build
 ↓
Deploy
 ↓
Verify
 ↓
Monitor
 ↓
Maintain
 ↓
Improve
```

---

# 1. Production Readiness

Before deployment, verify:

- Application builds successfully
- Production environment is configured
- Environment variables are configured
- Secrets are not committed
- Database is accessible
- Database migrations are ready
- API endpoints are configured
- Frontend API URL is correct
- Authentication works
- Authorization works
- Error handling works
- HTTPS is enabled
- Domain configuration is correct
- SEO configuration is correct
- Analytics configuration is correct where required

Do not deploy an application that has known critical failures.

---

# 2. Environment Management

Separate environments where appropriate:

```text
Development
    ↓
Staging / Preview
    ↓
Production
```

Each environment should have appropriate configuration.

Example:

```text
Development:
Local database
Development API

Production:
Production database
Production API
Production secrets
```

Never use production secrets inside source code.

---

# 3. Environment Variables

Use environment variables for:

- Database credentials
- API keys
- Authentication secrets
- Third-party credentials
- Service URLs
- Storage credentials
- Payment credentials
- Email credentials

Never hardcode:

```text
Passwords
API keys
JWT secrets
Private tokens
Database credentials
```

Never expose server-only secrets to browser-side code.

---

# 4. Secret Management

Secrets must:

- Stay outside source code
- Stay outside public repositories
- Be configured in the deployment platform
- Be rotated when compromised
- Use separate values between environments where appropriate

If a secret is accidentally exposed:

```text
Revoke
 ↓
Rotate
 ↓
Replace
 ↓
Audit
```

Do not simply delete it from the latest commit and assume it is safe.

---

# 5. Build Process

The production build must:

- Complete successfully
- Have no blocking errors
- Use production configuration
- Generate optimized assets
- Exclude development-only behavior where appropriate
- Use the correct environment
- Produce deployable output

Before deployment, run the project's available:

```text
Lint
Type Check
Tests
Build
```

commands.

---

# 6. Database Deployment

Database changes must be handled safely.

Use migrations for schema changes.

Typical flow:

```text
Change Model
 ↓
Create Migration
 ↓
Review Migration
 ↓
Test Migration
 ↓
Apply Migration
 ↓
Verify Database
```

Never make undocumented production schema changes when migrations are available.

Before destructive migrations:

- Understand affected data
- Back up where appropriate
- Test the migration
- Have a rollback/recovery strategy

---

# 7. CI/CD

Where practical, use automated CI/CD.

Recommended flow:

```text
Git Push
 ↓
Install Dependencies
 ↓
Lint
 ↓
Type Check
 ↓
Tests
 ↓
Build
 ↓
Deploy
```

A failed quality check should prevent deployment when the project requires strict production protection.

---

# 8. Deployment Strategy

The deployment strategy should match the application.

Possible strategies:

- Preview deployments
- Rolling deployment
- Blue/green deployment
- Canary deployment
- Standard production deployment

For small websites, a simple preview → production workflow may be sufficient.

For critical systems, use stronger deployment controls.

---

# 9. Domain & HTTPS

Production websites should use:

- Correct domain
- HTTPS
- Valid SSL/TLS certificate
- Correct DNS records
- Correct redirects
- Canonical domain

Verify:

```text
http://example.com
```

redirects appropriately to the secure canonical URL where applicable.

Also verify:

```text
www.example.com
example.com
```

behavior according to the chosen canonical strategy.

---

# 10. CDN & Static Assets

Use a CDN where appropriate for:

- Images
- CSS
- JavaScript
- Fonts
- Static assets

Optimize:

- Cache headers
- Asset versioning
- Compression
- Image delivery

Do not add infrastructure simply because it sounds advanced. Use it when it provides a meaningful benefit.

---

# 11. Monitoring

Production systems should have appropriate monitoring.

Monitor:

- Uptime
- Application errors
- API errors
- Server health
- Database health
- Response times
- Resource usage
- Deployment failures
- Authentication failures
- Critical business events

The monitoring level should match the importance of the application.

---

# 12. Error Monitoring

Capture useful application errors.

An error record should ideally provide:

```text
Error
+
Timestamp
+
Environment
+
Relevant request/context
+
Stack trace
```

Do not expose sensitive information.

Never log:

- Passwords
- Authentication secrets
- Private tokens
- Sensitive personal data unnecessarily

---

# 13. Logging

Logs should help developers understand what happened.

Useful logs may include:

- Server startup
- API failures
- Important application events
- Authentication events where appropriate
- Database failures
- Background job failures

Avoid excessive logging.

Do not use logs as a dumping ground for user data.

---

# 14. Health Checks

Where appropriate, provide health checks such as:

```text
GET /health
```

A health check can verify that the application is running.

For more advanced systems, distinguish:

```text
Application Health
Database Health
External Service Health
```

Do not expose unnecessary internal system information through public health endpoints.

---

# 15. Performance Monitoring

Monitor production performance.

Useful metrics include:

- Page load performance
- Core Web Vitals
- API latency
- Error rate
- Database query performance
- Resource usage
- Large asset usage

Watch for performance regressions after deployments.

---

# 16. Analytics

Use analytics when appropriate for the website's purpose.

Potential events:

```text
Page View
CTA Click
Search
Form Start
Form Submit
Signup
Login
Purchase
Download
Contact
Conversion
```

Analytics should answer useful questions such as:

```text
Where do users come from?
What do they interact with?
Where do they leave?
Which actions convert?
```

Do not collect unnecessary personal information.

Respect applicable privacy requirements and user choices.

---

# 17. Backup Strategy

For applications with persistent data, define a backup strategy.

Consider:

- Database backups
- File/storage backups
- Backup frequency
- Retention period
- Recovery process
- Restore testing

A backup that has never been tested should not be assumed to be reliable.

---

# 18. Disaster Recovery

For important applications, define what happens if:

- Database becomes unavailable
- Server fails
- Deployment breaks
- Credentials are compromised
- External service fails
- Data becomes corrupted
- Region/infrastructure becomes unavailable

Recovery should be documented.

Example:

```text
Incident
 ↓
Identify
 ↓
Contain
 ↓
Recover
 ↓
Verify
 ↓
Monitor
 ↓
Document
```

---

# 19. Dependency Maintenance

Regularly review:

- Frontend dependencies
- Backend dependencies
- Security vulnerabilities
- Runtime versions
- Build tools
- Third-party integrations

Do not blindly update everything at once.

Prefer:

```text
Update
 ↓
Test
 ↓
Review
 ↓
Deploy
```

---

# 20. Security Maintenance

After deployment, security remains an ongoing responsibility.

Regularly review:

- Dependencies
- Authentication
- Authorization
- Secrets
- Access permissions
- API exposure
- CORS
- Security headers
- Rate limits
- Logs
- Database access

If a vulnerability is discovered:

```text
Identify
 ↓
Assess
 ↓
Patch / Mitigate
 ↓
Test
 ↓
Deploy
 ↓
Monitor
```

---

# 21. Content Maintenance

Production websites also require content maintenance.

Review:

- Product information
- Services
- Pricing
- Contact details
- Images
- FAQs
- Legal information
- Blog/content
- Broken links

Do not allow outdated information to remain indefinitely.

---

# 22. SEO Maintenance

After deployment, periodically check:

- Indexability
- Sitemap
- Robots.txt
- Broken links
- Metadata
- Canonical URLs
- Structured data
- Search performance
- Page speed
- Mobile usability

SEO is not a one-time implementation task.

---

# 23. Monitoring Third-Party Services

If the website depends on external services, monitor them appropriately.

Examples:

```text
Payment Provider
Email Provider
Cloud Storage
Authentication Provider
Maps
Analytics
AI APIs
SMS / WhatsApp APIs
```

The application should handle external service failures gracefully.

Never assume third-party APIs are always available.

---

# 24. Graceful Degradation

When an external dependency fails:

```text
External Service
      ↓
Failure
      ↓
Application Detects Failure
      ↓
Useful User Message
      ↓
Alternative / Retry / Recovery
```

Do not show raw server errors to users.

Example:

Bad:

```text
500 Internal Server Error
ECONNREFUSED...
```

Better:

```text
We're temporarily unable to complete this request.
Please try again in a moment.
```

---

# 25. Deployment Verification

After every production deployment, verify critical functionality.

### Smoke Test

- [ ] Homepage loads
- [ ] Navigation works
- [ ] Important pages load
- [ ] Assets load
- [ ] API is reachable
- [ ] Authentication works
- [ ] Critical forms work
- [ ] Database operations work
- [ ] Important CTA works
- [ ] No critical console/server errors
- [ ] HTTPS works
- [ ] Analytics works where configured

---

# 26. Rollback Strategy

Every production deployment should have a recovery strategy.

If a deployment introduces a critical failure:

```text
Detect Problem
 ↓
Stop / Contain
 ↓
Rollback or Fix
 ↓
Verify
 ↓
Monitor
```

Do not keep a broken deployment live simply because it was already deployed.

---

# 27. Incident Management

For significant incidents:

1. Identify the issue.
2. Determine impact.
3. Contain the problem.
4. Restore service.
5. Verify functionality.
6. Monitor the system.
7. Document the incident.
8. Identify the root cause.
9. Implement preventative improvements.

Focus on fixing systems, not assigning blame.

---

# 28. Documentation

Maintain useful documentation for:

- Setup
- Environment variables
- Architecture
- API
- Database
- Deployment
- Authentication
- Third-party services
- Troubleshooting
- Recovery procedures

Documentation should be updated when architecture or deployment processes change.

---

# 29. Maintenance Schedule

Maintenance can be organized as:

## Continuous

- Monitor errors
- Monitor uptime
- Monitor critical services

## Regular

- Review dependencies
- Review performance
- Review analytics
- Review broken links
- Review content

## Periodic

- Security review
- Backup restore test
- Disaster recovery review
- Architecture review
- Database optimization
- SEO review

The exact frequency should match the project's importance and risk.

---

# 30. Production Quality Gate

Before production release:

### Application

- [ ] Production build succeeds
- [ ] Environment variables configured
- [ ] Secrets secured
- [ ] Database migrations reviewed
- [ ] API configuration verified

### Security

- [ ] HTTPS enabled
- [ ] Authentication tested
- [ ] Authorization tested
- [ ] Secrets not exposed
- [ ] Security headers reviewed
- [ ] CORS reviewed
- [ ] Rate limiting considered

### Performance

- [ ] Images optimized
- [ ] Assets optimized
- [ ] API performance checked
- [ ] Database performance checked
- [ ] Core Web Vitals considered

### SEO

- [ ] Metadata configured
- [ ] Sitemap configured
- [ ] Robots.txt configured
- [ ] Canonical URLs configured
- [ ] Open Graph configured
- [ ] Indexability checked

### Deployment

- [ ] Domain configured
- [ ] HTTPS working
- [ ] Deployment successful
- [ ] Smoke tests passed
- [ ] Rollback strategy available

### Monitoring

- [ ] Error monitoring available
- [ ] Logs available
- [ ] Uptime monitoring available where appropriate
- [ ] Critical alerts configured

---

# 31. Definition of Production Ready

A website is production-ready when:

```text
Code
+
Tests
+
Security
+
Performance
+
SEO
+
Deployment
+
Monitoring
+
Recovery
+
Documentation
```

have been appropriately addressed.

Production readiness is not simply:

```text
npm run build
```

and deployment.

---

# DO

- Use production-safe configuration
- Protect secrets
- Test production builds
- Use migrations
- Monitor errors
- Monitor uptime
- Optimize performance
- Keep dependencies maintained
- Keep documentation updated
- Maintain backups where appropriate
- Have a rollback/recovery strategy
- Verify deployments after release

# DON'T

- Commit secrets
- Deploy without testing
- Make undocumented database changes
- Ignore production errors
- Ignore failed deployments
- Assume backups work without testing
- Expose sensitive logs
- Collect unnecessary user data
- Ignore dependency vulnerabilities
- Forget to monitor third-party services
- Treat deployment as the end of development
