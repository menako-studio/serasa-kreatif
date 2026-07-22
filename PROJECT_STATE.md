# PROJECT STATE — SERASA KREATIF

> **Single Source of Truth (SSOT) for AI Coding Agents**  
> **Last Updated:** 2026-07-22  
> **Repository:** `menako-studio/serasa-kreatif`  
> **Root Directory:** `/Users/adibwafi/Documents/Menako Studio/serasa-kreatif`

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### Purpose & Scope

**Serasa Kreatif** is a high-performance marketing web application and CMS portal for a digital branding and social media agency based in Bintaro, Jakarta. Key capabilities include dynamic portfolio showcases, custom service pages, an interactive quote/pricing calculator with WhatsApp integration, a global command palette (`Cmd+K`), bilingual support (EN/ID), contact submission with rate-limiting & turnstile captcha, and an embedded headless Sanity CMS Studio (`/studio`).

### Tech Stack & Core Dependencies

| Category                   | Technology                  | Version / Configuration                                                                 |
| :------------------------- | :-------------------------- | :-------------------------------------------------------------------------------------- |
| **Framework**              | Next.js (App Router)        | `^14.2.0` (`output: 'standalone'` in `next.config.mjs`)                                 |
| **Runtime & React**        | React / React DOM           | `^18.3.0`, Node.js `>=18.0.0`, npm `>=9.0.0`                                            |
| **Language**               | JavaScript (ES6+ / JSX)     | Native JS project (`react-compiler-runtime` `^1.0.0`)                                   |
| **Styling**                | Tailwind CSS + Autoprefixer | `tailwindcss` `^3.4.0`, `styled-components` `^6.4.3`, `clsx` `^2.1.0`                   |
| **Animations**             | Framer Motion               | `framer-motion` `^11.0.0` (optimized package imports enabled)                           |
| **CMS**                    | Sanity CMS (Headless)       | `sanity` `^3.99.0`, `next-sanity` `^9.12.3`, `@sanity/client` `^6.15.0`                 |
| **State Management**       | React Context + URL State   | `LanguageContext` for i18n, URL `SearchParams` for filters & language                   |
| **Email & Security**       | Resend API + Rate Limiter   | `resend` `^6.16.0`, Cloudflare Turnstile token verification                             |
| **Analytics & Monitoring** | GA4 + Sentry                | `@next/third-parties` (`NEXT_PUBLIC_GA_MEASUREMENT_ID`), `@sentry/nextjs` `^8.55.2`     |
| **Testing**                | Vitest + Playwright         | `vitest` `^1.6.1` (jsdom, v8 coverage), `@playwright/test` `^1.42.0` (E2E)              |
| **Code Quality & CI/CD**   | ESLint + Prettier + Husky   | `eslint-config-next` `^14.2.0`, `lint-staged`, `husky` `^9.1.7`, `commitlint` `^20.1.0` |

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### Directory Tree & Module Responsibilities

```
serasa-kreatif/
├── app/                          # Next.js 14 App Router Pages & API Routes
│   ├── layout.jsx               # Root layout (LanguageProvider, NavBar, Footer, CommandPalette, StickyWhatsApp)
│   ├── page.jsx                 # Homepage (Server component wrapping HomePageClient)
│   ├── about/page.jsx           # About Us overview & team details
│   ├── blog/                    # Blog page & dynamic route [slug]
│   ├── contact/page.jsx         # Contact form & agency contact info
│   ├── portfolio/               # Portfolio showcase & dynamic route [slug]
│   ├── services/                # Services overview & specialized sub-routes (printing/page.jsx)
│   ├── studio/[[...tool]]/      # Embedded Sanity CMS Studio admin interface
│   ├── privacy-policy/          # Legal privacy policy page
│   ├── terms-of-use/            # Legal terms of service page
│   ├── not-found.jsx            # Custom 404 page
│   ├── sitemap.js               # Dynamic sitemap generator
│   ├── robots.js                # Search engine crawler configuration
│   └── api/                     # Serverless Route Handlers
│       ├── blog/                # GET, POST, PUT, DELETE for blog articles (In-memory fallback)
│       ├── contact/             # POST contact handler (Resend API + Token Bucket Rate Limiter)
│       └── portfolio/           # GET, POST, PUT, DELETE for portfolio items (In-memory fallback)
├── components/                  # Reusable UI Components & Client State Contexts
│   ├── CommandPalette.jsx       # Global search dialog (Cmd+K / Ctrl+K)
│   ├── ContactForm.jsx          # Client-side form with submit state & validation
│   ├── HomeClientPage.jsx       # Interactive client components for home page
│   ├── LanguageContext.jsx      # i18n context provider (EN/ID sync with URL, localStorage, cookie)
│   ├── NavBar.jsx               # Navigation bar with mobile menu & language switch
│   ├── PortfolioFilters.jsx     # Client filter bar synced with URL SearchParams
│   ├── PortfolioVideoGrid.jsx   # Dynamic grid for portfolio items & video preview
│   ├── StickyWhatsApp.jsx       # Floating WhatsApp call-to-action button
│   ├── StructuredData.jsx       # JSON-LD Schema markup for local business SEO
│   └── ...                      # CTASection, ServiceAccordionItem, CreativeReels, etc.
├── lib/                         # Core Logic, CMS Clients & Datasets
│   ├── analytics.js             # GA4 event tracking helper utilities
│   ├── case-data.js             # Static fallback dataset for portfolio & case studies
│   ├── copy-en.js / copy-id.js  # Internationalization dictionary objects
│   ├── language.js              # i18n helper functions & hreflang URL builder
│   ├── sanity.js                # Sanity Client instantiation
│   └── sanity-queries.js        # GROQ queries for fetching Sanity CMS content
├── sanity/                      # Sanity CMS Schema Configurations
│   ├── env.js                   # Sanity environment bindings
│   ├── schemaTypes/             # Sanity document definitions (caseStudy.js)
│   └── structure.js             # Studio structure builder customization
├── scripts/                     # Shell automation scripts
│   └── pre-deploy.sh            # Pre-deployment validation script (lint, test, build, audit)
├── tests/                       # Test Suites
│   ├── unit/                    # Vitest component unit tests (CaseCard.test.jsx)
│   └── e2e/                     # Playwright E2E integration tests (basic.spec.js)
├── .github/workflows/ci.yml     # Consolidated CI/CD pipeline (lint, unit test, build, E2E, Lighthouse)
├── next.config.mjs              # Standalone build output, image remote patterns, Sentry wrapper
└── tailwind.config.js           # Brand design system tokens (primary navy `#04104b`, brand-teal `#00d6b6`)
```

### Architectural Patterns Applied

1. **Server / Client Component Boundary:** Server Components handle initial metadata, JSON-LD, and route rendering; Client Components (`'use client'`) handle interactive UI (Command Palette, Language Switcher, Filter State, Form Handlers).
2. **Dual-Source Content Fallback:** Content fetches attempt GROQ queries via Sanity CMS (`lib/sanity-queries.js`). If Sanity credentials are unconfigured or fail, systems fallback gracefully to static datasets in `lib/case-data.js`.
3. **URL-Driven Client State Synchronization:** i18n language preference (`?lang=id`) and portfolio category filters sync bidirectionally between URL query params, `localStorage`, `document.cookie`, and React Context.
4. **Token Bucket Rate Limiting:** Serverless route handler (`app/api/contact/route.js`) enforces an in-memory token bucket rate limiter (3 req/min in prod, 20 in dev/test) with standard headers (`X-RateLimit-Limit`, `Retry-After`).

---

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW

### Built Modules & Active Features

- **Homepage & Brand Showcase:** Animated hero section, client logo showcase, creative video reels, service overview, and CTA sections.
- **Interactive Service Pricing Estimator:** Dynamic quote calculator allowing users to select services, calculate estimates, and export a formatted lead message directly to WhatsApp.
- **Portfolio & Dynamic Case Studies:** Grid listing with category filters, keyword search, video modal previews, and detailed case study pages (`/portfolio/[slug]`).
- **Bilingual i18n System:** Instant English/Indonesian switching across navbar, headers, body text, and metadata via `LanguageContext`.
- **Global Command Palette:** Keyboard shortcut (`Cmd+K` / `Ctrl+K`) opening a fast search overlay for pages, case studies, and services.
- **Contact & Specialized Printing Landing Page:** Responsive form handling with input validation, rate limiting, and optional Cloudflare Turnstile token verification (`/contact` & `/services/printing`).
- **Embedded Sanity Studio:** Live content management interface accessible at `/studio`.

### Key API Endpoints & Data Flows

| Endpoint                  | Method   | Purpose & Internal Logic                                                                                                                                    |
| :------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `POST /api/contact`       | `POST`   | Validates client IP against Token Bucket rate limiter, verifies Turnstile token (if configured), sends email notification via Resend API (`CONTACT_EMAIL`). |
| `GET /api/blog`           | `GET`    | Returns list of blog posts (supports `?published=true/false` query filter).                                                                                 |
| `POST /api/blog`          | `POST`   | Validates required fields (`title`, `slug`, `category`, `content`), checks slug uniqueness, appends to blog posts array.                                    |
| `GET /api/blog/[id]`      | `GET`    | Returns single blog post by numeric ID.                                                                                                                     |
| `PUT /api/blog/[id]`      | `PUT`    | Updates existing blog post by ID.                                                                                                                           |
| `DELETE /api/blog/[id]`   | `DELETE` | Deletes blog post by ID.                                                                                                                                    |
| `GET /api/portfolio`      | `GET`    | Returns list of portfolio items (supports `?category=...&featured=true` filters).                                                                           |
| `POST /api/portfolio`     | `POST`   | Creates new portfolio item entry.                                                                                                                           |
| `GET /api/portfolio/[id]` | `GET`    | Returns single portfolio item by ID.                                                                                                                        |

### Data Schema Overview

- **Sanity `caseStudy` Schema (`sanity/schemaTypes/caseStudy.js`):**
  - `title` (string), `slug` (slug), `client` (string), `category` (string)
  - `image` (image asset), `imageBanner` (image asset), `description` (text)
  - `challenge` (text), `approach` (text), `results` (text)
  - `metrics` (array of `{ label, value }`), `tags` (array of strings)
  - `timeline` (string), `role` (string), `gallery` (array of image assets), `instagramLinks` (array of strings/urls)

---

## 4. REMAINING TASKS, TODOs & TECHNICAL DEBT

### Pending Tasks & Feature Enhancements

- **Persistent Database Migration:** Replace in-memory array storage in `/api/blog` and `/api/portfolio` with persistent database integration (e.g. Supabase / PostgreSQL or complete Sanity GROQ mutation flow).
- **Distributed Rate Limiting:** Migrate in-memory `clientBuckets` in `app/api/contact/route.js` to Redis/Upstash to ensure rate limit persistence across multi-region serverless instances.
- **Unit Test Coverage Expansion:** Current unit test coverage is ~1% (`vitest.config.js`). Objective is to achieve 50%+ coverage by writing tests for `NavBar`, `ContactForm`, `CommandPalette`, and `PortfolioFilters`.
- **E2E Integration Testing:** Expand `tests/e2e/basic.spec.js` to cover full contact form submission flows, pricing estimator calculations, and i18n language toggling.

### Known Technical Debt & Edge Cases

- **JavaScript vs TypeScript Alignment:** `package.json` notes `type-check: skipped (JavaScript project)`. While `.js`/`.jsx` is used throughout, key contracts should be documented using JSDoc types or migrated to TypeScript (`.ts`/`.tsx`) for compile-time safety.
- **Dual Content Schema Maintenance:** Ensure attributes in `lib/case-data.js` remain synchronized with Sanity GROQ query projections in `lib/sanity-queries.js`.

---

## 5. AI AGENT CODING GUIDELINES

### Conventions & Placement Rules

- **Page File Placement:** Place all App Router pages inside `app/<feature-name>/page.jsx` or `app/<feature-name>/[slug]/page.jsx`.
- **Component File Placement:** Reusable UI components belong in `components/<ComponentName>.jsx` using PascalCase naming.
- **Logic & Utility Placement:** Business logic, clients, and helpers belong in `lib/<utility-name>.js` using camelCase naming.
- **API Handler Placement:** Route handlers belong in `app/api/<feature-name>/route.js`.
- **Test File Placement:** Component tests in `tests/unit/<ComponentName>.test.jsx`; E2E tests in `tests/e2e/<feature>.spec.js`.
- **Design Tokens:** Always utilize Tailwind CSS classes mapped to brand tokens in `tailwind.config.js` (e.g., `bg-primary`, `text-brand-teal`, `bg-brand-orange`).

### Standard Step-by-Step Feature Implementation Workflow

1. **Define Data Structures / Schema:** Update Sanity schemas (`sanity/schemaTypes/`) or static fallback files (`lib/case-data.js`).
2. **Create / Modify API Route Handler:** Implement serverless logic under `app/api/<feature>/route.js` handling request validation and HTTP status codes (200, 400, 429, 500).
3. **Build UI Component:** Construct modular React component in `components/<ComponentName>.jsx` using Tailwind CSS and Framer Motion. Mark with `'use client'` if interactive hooks are needed.
4. **Integrate Page & i18n:** Import component in `app/<feature>/page.jsx`. Ensure string literals are pulled from dictionary objects (`dict.<feature>.<key>`).
5. **Write Unit Test & Run Validation:** Create test in `tests/unit/`. Run `npm run validate` (`npm run lint && npm run test:unit && npm run build`) to ensure zero build or lint regressions.
6. **Git Commit:** Commit changes using Conventional Commit syntax: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`.
