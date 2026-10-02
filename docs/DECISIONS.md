# Architectural & Spec Decisions Log

This document records decisions where the prompt specifications, frontend constraints, and the 15 Website Engineering MD files interact or require clarification, in accordance with Section 0 Rule 4.

1. **Client-Only Architecture vs. Server Requirements (`11-backend-api-database.md`, `10-security-authentication-authorization.md`, `12-forms-validation-errors.md`)**  
   *Decision:* File `11-backend-api-database.md` and server-side authentication/database storage sections of files 10 and 12 are explicitly classified as backend and bypassed per Prompt Section 0 Rule 3. Contact and scoping forms execute strict client-side validation (Zod + React Hook Form), display immediate accessible success feedback with Sonner toast, log submission payloads to the console, and provide a typed, clearly demarcated `submitForm()` stub ready for backend integration.

2. **Primary Brand Theme Tokenization (`05-layout-typography-colors.md`, Prompt Section 5)**  
   *Decision:* Brand primary color `#FE5B01` (vibrant agency orange) is tokenized as `--primary` in HSL format (`21 100% 50%`) with dedicated high-contrast on-color (`#ffffff`), hover (`#E04E00`), subtle tinted backgrounds (`#FFF7ED`), and focus ring tokens, ensuring strict WCAG 2.2 AA contrast compliance (>4.5:1 for text, >3:1 for UI elements) and single-file rebranding capability.

3. **Routing & Static Data Source (`02-content-strategy.md`, Prompt Section 1 & 2)**  
   *Decision:* All services (9 items), developer roles (12 items), case studies (8 items), industries (10 items), pricing tiers, process stages (6 stages), FAQs, and blog posts are maintained in typed static data files under `/src/data/` with TypeScript interfaces in `/src/types/`, eliminating hardcoded component strings while supporting fast client-side navigation with React Router data router.

4. **Zero Third-Party Image Dependency & Performance Budgets (`08-performance-and-optimization.md`, Prompt Section 5)**  
   *Decision:* External image hotlinking is avoided. All logos, device mockups, tech badges, and UI illustrations are generated as crisp local SVGs and modern responsive CSS device frames with explicit width/height dimensions to eliminate Cumulative Layout Shift (CLS = 0) and ensure zero external downtime risk.
