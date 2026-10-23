# PROJECT STATE — SERASA KREATIF

> **Single Source of Truth (SSOT) for AI Coding Agents**  
> **Last Updated:** 2026-09-13  
> **Repository:** `menako-studio/serasa-kreatif`  
> **Root Directory:** `/Users/adibwafi/Documents/Menako Studio/serasa-kreatif`

---

## 1. EXECUTIVE SUMMARY & TECH STACK

### Purpose & Scope

**Serasa Kreatif** is a high-performance marketing web application and CMS portal for a digital branding and social media agency based in Bintaro, Jakarta. Key capabilities include dynamic portfolio showcases, custom service pages, an interactive quote/pricing calculator with WhatsApp integration, a global command palette (`Cmd+K`), bilingual support (EN/ID), contact submission with rate-limiting & turnstile captcha, an embedded headless Sanity CMS Studio (`/studio`), and a centralized GA4/GTM/GSC event tracking and structured data engine.

### Tech Stack & Core Dependencies

| Category                   | Technology                  | Version / Configuration                                                                                                                                              |
| :------------------------- | :-------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**              | Next.js (App Router)        | `15.5.25` (`output: 'standalone'` in `next.config.mjs`)                                                                                                              |
| **Runtime & React**        | React / React DOM           | `^18.3.0`, Node.js `>=18.0.0`, npm `>=9.0.0`                                                                                                                         |
| **Language**               | JavaScript (ES6+ / JSX)     | Native JS project (`react-compiler-runtime` `^1.0.0`)                                                                                                                |
| **Styling**                | Tailwind CSS + Autoprefixer | `tailwindcss` `^3.4.0`, `styled-components` `^6.4.3`, `clsx` `^2.1.0`, `postcss` `^8.5.28`                                                                           |
| **Animations**             | Framer Motion               | `framer-motion` `^11.0.0` (optimized package imports enabled)                                                                                                        |
| **CMS**                    | Sanity CMS (Headless)       | `sanity` `^3.99.0`, `next-sanity` `^9.12.3`, `@sanity/client` `^6.15.0`                                                                                              |
| **State Management**       | React Context + URL State   | `LanguageContext` for i18n, URL `SearchParams` for filters & language                                                                                                |
| **Email & Security**       | Resend API + Rate Limiter   | `resend` `^6.16.0`, Cloudflare Turnstile token verification                                                                                                          |
| **Analytics & Monitoring** | GA4 + GSC + Sentry          | `@next/third-parties/google` (`NEXT_PUBLIC_GA_MEASUREMENT_ID`; GTM `GTM-NKKPT23S` is intentionally not loaded — the container is empty), `@sentry/nextjs` `^10.74.0` |
| **Testing**                | Vitest + Playwright         | `vitest` `^4.1.11` (jsdom, v8 coverage), `@playwright/test` `^1.42.0` (E2E)                                                                                          |
| **Code Quality & CI/CD**   | ESLint + Prettier + Husky   | `eslint-config-next` `15.5.25`, `lint-staged`, `husky` `^9.1.7`, `commitlint` `^20.1.0`                                                                              |

---

## 2. PROJECT STRUCTURE & ARCHITECTURE

### Directory Tree & Module Responsibilities

```
serasa-kreatif/
├── app/                          # Next.js 14 App Router Pages & API Routes
│   ├── layout.jsx               # Root layout (LanguageProvider, NavBar, Footer, AnalyticsTracker, CommandPalette, StickyWhatsApp)
│   ├── page.jsx                 # Homepage (Server component wrapping HomePageClient)
│   ├── about/page.jsx           # About Us overview & team details + AboutPage Schema
│   ├── agensi-kreatif-bintaro/  # Local SEO landing page for Bintaro & South Tangerang
│   ├── blog/                    # Blog page & dynamic route [slug] + BlogPosting Schema
│   ├── contact/page.jsx         # Contact form & agency contact info + ContactPage Schema
│   ├── portfolio/               # Portfolio showcase & dynamic route [slug] + CreativeWork Schema
│   ├── services/                # Services overview (ServiceCatalog Schema) & specialized printing (PrintingService Schema)
│   ├── studio/[[...tool]]/      # Embedded Sanity CMS Studio admin interface
│   ├── privacy-policy/          # Legal privacy policy page + BreadcrumbSchema
│   ├── terms-of-use/            # Legal terms of service page + BreadcrumbSchema
│   ├── not-found.jsx            # Custom 404 page (noindex, nofollow)
│   ├── sitemap.js               # Dynamic sitemap generator
│   ├── robots.js                # Search engine crawler configuration
│   └── api/                     # Serverless Route Handlers
│       ├── blog/                # GET, POST, PUT, DELETE for blog articles
│       ├── contact/             # POST contact handler (Resend API + Token Bucket Rate Limiter)
│       └── portfolio/           # GET, POST, PUT, DELETE for portfolio items
├── components/                  # Reusable UI Components & Client State Contexts
│   ├── AnalyticsTracker.jsx     # SPA Route and searchParams change tracker
│   ├── TrackedLink.jsx          # Reusable outbound & conversion link wrapper
│   ├── CommandPalette.jsx       # Global search dialog (Cmd+K / Ctrl+K) with search event tracking
│   ├── ContactForm.jsx          # Client-side form with submit state, validation & lead analytics
│   ├── PrintingContactForm.jsx  # B2B printing quote inquiry form with lead analytics
│   ├── HomeClientPage.jsx       # Interactive client components for home page
│   ├── LanguageContext.jsx      # i18n context provider (EN/ID sync with URL, localStorage, cookie)
│   ├── NavBar.jsx               # Navigation bar with mobile menu, language switch & nav tracking
│   ├── Footer.jsx               # Global footer with social, career & direct conversion tracking
│   ├── PortfolioFilters.jsx     # Client filter bar synced with URL SearchParams & tracking
│   ├── PortfolioVideoGrid.jsx   # Dynamic grid for portfolio items & video preview
│   ├── StickyWhatsApp.jsx       # Floating WhatsApp call-to-action button & lead capture modal
│   ├── StructuredData.jsx       # JSON-LD Schema markup for LocalBusiness, WebSite, FAQPage
│   ├── BreadcrumbSchema.jsx     # JSON-LD Schema markup for BreadcrumbList
│   └── ...                      # CaseStudyCard, WorkCard, CreativeReels, PrintingReels, etc.
├── lib/                         # Core Logic, CMS Clients & Datasets
│   ├── analytics.js             # Centralized dual GA4 & GTM dataLayer dispatcher
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
│   ├── unit/                    # Vitest component unit tests (CaseCard.test.jsx, analytics.test.js)
│   └── e2e/                     # Playwright E2E integration tests (basic.spec.js)
├── .github/workflows/ci.yml     # Consolidated CI/CD pipeline (lint, unit test, build, E2E, Lighthouse)
├── next.config.mjs              # Standalone build output, image remote patterns, Sentry wrapper
└── tailwind.config.js           # Brand design system tokens (primary navy `#04104b`, brand-teal `#00d6b6`)
```

### SEO Rendering Rules (do not regress)

- **Never call `useSearchParams()` in the layout tree or wrap the layout in `<Suspense>` for it.** It makes every statically prerendered page ship an empty shell (client-side-render bailout) — this was why the blog posts and the Bintaro landing page were never indexed.
- **Never read `searchParams` in a `page.jsx`/`generateMetadata`.** It turns the route dynamic (no CDN cache, slower TTFB). Filters (e.g. `/portfolio?service=`) are client state seeded from `window.location`.
- Every page gets its metadata from `buildMetadata()` (`lib/seo.js`): self-canonical, full OG/Twitter incl. image, title **without** the brand suffix (the root template appends it).
- `public/og-image.jpg` (1200×630), `favicon.ico` (48/32/16) and `icon-*.png` are real assets generated from the logo — do not replace them with placeholders.
- Verify after a build: `.next/server/app/<page>.html` must contain the `<h1>` and visible text (no `BAILOUT_TO_CLIENT_SIDE_RENDERING`).

### Architectural Patterns Applied

1. **Dual-Dispatch Analytics Architecture:** Single utility `lib/analytics.js` dispatches events simultaneously to `window.dataLayer.push` (GTM) and `window.gtag('event', ...)` (GA4) with type-safe methods (`trackEvent`, `trackPageView`, `trackForm`, `trackOutboundClick`, `trackVideo`, `trackEngagement`, `trackSearch`, `trackLanguageChange`).
2. **SPA Client-Side Route Transition Tracking:** `components/AnalyticsTracker.jsx` listens to Next.js App Router `usePathname` changes (query string read from `window.location`) and pushes virtual `page_view` events on client navigation only — the initial page_view comes from the GA4 tag itself.
3. **Structured Data Rich Snippets (Schema.org):** Sitewide `@graph` in `components/StructuredData.jsx` (one `LocalBusiness`/`ProfessionalService` node + `WebSite`); page-level nodes (`Service`, `AboutPage`, `ContactPage`, `CollectionPage`, `Blog`/`BlogPosting`, `CreativeWork`, `FAQPage` on `/agensi-kreatif-bintaro` only, `BreadcrumbList`) reference those nodes by `@id` (see `IDS` in `lib/seo.js`) instead of redefining the business. No `aggregateRating` (not verifiable on-page).
4. **Server / Client Component Boundary:** Server Components handle initial metadata, canonical tags, Open Graph, Twitter cards, and JSON-LD; Client Components handle interactive UI and tracking hooks.
5. **Dual-Source Content Fallback:** Content fetches attempt GROQ queries via Sanity CMS (`lib/sanity-queries.js`). If Sanity credentials are unconfigured or fail, systems fallback gracefully to static datasets in `lib/case-data.js`.
6. **Token Bucket Rate Limiting:** Serverless route handler (`app/api/contact/route.js`) enforces an in-memory token bucket rate limiter (3 req/min in prod, 20 in dev/test) with standard headers (`X-RateLimit-Limit`, `Retry-After`).

---

## 3. CURRENT IMPLEMENTATION STATE & DATA FLOW

### Built Modules & Active Features

- **Analytics & Event Dispatch System:** Complete standard GA4 and GTM conversion and engagement tracking across all UI elements (forms, videos, search, filters, navigation, language toggle, and outbound links).
- **Google Search Console & Local SEO Integration:** Site verification tag (`lfIU-Zm4oh9gQVqO8U4ZaJm1pumqC6FKlZ_lNMsZDUM`), self-referencing canonical URLs (via `buildMetadata` in `lib/seo.js`), sitemap derived from `caseStudies`, robot rules, `www` → apex 308 redirect (`next.config.mjs`), `llms.txt`, and `/agensi-kreatif-bintaro` local landing page.
- **Interactive Service Pricing Estimator:** Dynamic quote calculator allowing users to select services, calculate estimates, and export a formatted lead message directly to WhatsApp.
- **Portfolio & Dynamic Case Studies:** Grid listing with category filters, keyword search, video modal previews, and detailed case study pages (`/portfolio/[slug]`).
- **Bilingual i18n System:** Indonesian is the server-rendered default (`<html lang="id">`); English is an explicit client-side choice (`?lang=en`, localStorage, cookie) via `LanguageContext`. Browser-language auto-detection is intentionally disabled (Googlebot reports en-US). Use `<Lang id=… en=… />` in server components, or `useLanguage()` in client components.
- **Global Command Palette:** Keyboard shortcut (`Cmd+K` / `Ctrl+K`) opening a fast search overlay for pages, case studies, and services with debounced analytics search tracking.
- **Contact & Specialized Printing Landing Page:** Responsive form handling with input validation, rate limiting, and optional Cloudflare Turnstile token verification (`/contact` & `/services/printing`).
- **Embedded Sanity Studio:** Live content management interface accessible at `/studio`.

### Analytics Event Taxonomy

| Event Name                                            | Dispatched Via                                                                         | Purpose / Payload                                                           |
| :---------------------------------------------------- | :------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| `page_view`                                           | `AnalyticsTracker.jsx`                                                                 | Triggered on route/query change with `page_path`, `page_title`, `language`. |
| `generate_lead`                                       | `trackForm('contact_form'/'printing_contact_form'/'whatsapp_lead_capture', 'success')` | Primary standard GA4 conversion event for completed lead capture.           |
| `contact_form_attempt` / `success` / `error`          | `ContactForm.jsx`                                                                      | Full funnel tracking for general agency inquiries with `company`, `budget`. |
| `printing_contact_form_attempt` / `success` / `error` | `PrintingContactForm.jsx`                                                              | B2B printing quotation funnel tracking with `category`, `quantity`.         |
| `whatsapp_lead_capture_attempt` / `success`           | `StickyWhatsApp.jsx`                                                                   | WhatsApp popup lead capture flow.                                           |
| `whatsapp_click`                                      | `TrackedLink` / `StickyWhatsApp`                                                       | Outbound WhatsApp conversion clicks.                                        |
| `phone_call_click`                                    | `TrackedLink` / `ContactInfoItem`                                                      | Direct `tel:` phone call clicks.                                            |
| `email_inquiry_click`                                 | `TrackedLink` / `ContactInfoItem`                                                      | Direct `mailto:` email inquiry clicks.                                      |
| `outbound_click`                                      | `TrackedLink`                                                                          | External social, review, and maps links.                                    |
| `video_interaction`                                   | `PrintingReels.jsx` / `CreativeReels.jsx`                                              | Video reel play/pause/mute/unmute engagement.                               |
| `search`                                              | `CommandPalette.jsx` / `PortfolioFilters.jsx`                                          | Debounced query searches with `search_term`, `results_count`.               |
| `language_change`                                     | `NavBar.jsx`                                                                           | Indonesian / English toggling.                                              |
| `user_engagement`                                     | `PortfolioFilters.jsx`, `Hero.jsx`, `CaseStudyCard.jsx`                                | UI filters, slide changes, accordion toggles.                               |

---

## 4. TESTING & TECHNICAL DEBT

### Testing Status

- **Unit Tests (`tests/unit/`):** 12 unit tests passing in Vitest 4 (`tests/unit/CaseCard.test.jsx`, `tests/unit/analytics.test.js`).
- **Linting & Code Quality:** 0 ESLint warnings or errors (`npm run lint`).
- **Production Build:** Next.js 15.5.25 standalone build passing with all 27 static and dynamic routes compiling cleanly (`npm run build`).
- **Security & Vulnerabilities:** 0 vulnerabilities in `npm audit`. Resolved 25 Next.js CVEs, all 12 Vite advisories, Vitest UI/mocker advisories, Sharp libheif, PostCSS sourceMappingURL traversal/XSS, and transitive vulnerabilities in glob, nanoid, fast-uri, js-yaml, minimatch, flatted, picomatch, tar, undici, adm-zip (0.6.1), decompress (via @xhmikosr/decompress), @opentelemetry/core (via @sentry/nextjs 10.74.0), rollup, prismjs, dompurify, browserslist, and baseline-browser-mapping.

### Pending Tasks & Technical Debt

- **Persistent Database Migration:** Replace in-memory array storage in `/api/blog` and `/api/portfolio` with persistent database integration (e.g. Supabase / PostgreSQL or complete Sanity GROQ mutation flow).
- **Distributed Rate Limiting:** Migrate in-memory `clientBuckets` in `app/api/contact/route.js` to Redis/Upstash to ensure rate limit persistence across multi-region serverless instances.
- **E2E Integration Testing:** Expand `tests/e2e/basic.spec.js` to cover full contact form submission flows, pricing estimator calculations, and i18n language toggling.

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
