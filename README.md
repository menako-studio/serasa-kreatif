# Serasa Kreatif Website

[![CI/CD Pipeline](https://github.com/menako-studio/serasa-kreatif/actions/workflows/ci.yml/badge.svg)](https://github.com/menako-studio/serasa-kreatif/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/menako-studio/serasa-kreatif/branch/main/graph/badge.svg)](https://codecov.io/gh/menako-studio/serasa-kreatif)
[![Lighthouse CI](https://img.shields.io/badge/Lighthouse-CI-orange?logo=lighthouse)](https://github.com/menako-studio/serasa-kreatif/actions)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker&logoColor=white)](./Dockerfile)

Modern, high-performance website for Serasa Kreatif — a digital branding and social media agency based in Bintaro, Jakarta.

## ✨ Key Features (New & Optimized)

- 🛍️ **Interactive Service Pricing Estimator**: A dynamic quote calculator for branding, social media, ads, and video production packages, generating WhatsApp-ready messages for instant booking.
- 🔍 **Universal Command Palette**: Accessible globally via `Cmd + K` or `Ctrl + K` to easily search across pages, case studies, and services.
- 🎛️ **Server-side Portfolio Filter & Search**: Advanced filters synced with URL search parameters for shares, bookmarks, and SEO friendliness.
- 📬 **Resend Email API & Rate Limiting**: Secure, fast contact form submissions powered by Resend with a built-in token-bucket rate limiter.
- 📝 **Sanity CMS Studio Integration**: Fully embedded headless CMS admin panel (`/studio`) to manage blog articles and case studies natively.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **CMS:** Sanity (recommended)
- **Hosting:** Vercel
- **Testing:** Vitest + Playwright

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ ([Download](https://nodejs.org/))
- npm 9+ or yarn
- Git

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/menako-studio/serasa-kreatif.git
cd serasa-kreatif
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment variables

Create a `.env.local` file in the root directory:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Resend Email Integration
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=recipient@example.com

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-NKKPT23S
```

### 4. Run development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
serasa-kreatif/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── page.tsx             # Homepage
│   ├── work/                # Work listing & case studies
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── api/                 # API routes
│   │   └── contact/route.ts
│   └── globals.css          # Global styles + Tailwind
├── components/              # Reusable React components
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── CaseCard.tsx
│   ├── ClientLogos.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   └── StickyWhatsApp.tsx
├── lib/                     # Utilities & data
│   ├── case-data.ts        # Sample case studies
│   ├── sanity.ts           # CMS client (optional)
│   └── analytics.ts        # GA4 setup (optional)
├── public/                  # Static assets
│   └── assets/
│       ├── cases/          # Case study images
│       └── clients/        # Client logos
├── styles/
├── tests/                   # Test files
│   ├── unit/
│   └── e2e/
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── package.json
```

## 🎨 Design System

### Colors

- **Primary:** `#0B2545` (deep indigo)
- **Primary Dark:** `#071829`
- **Accent Cyan:** `#00D9FF`
- **Accent Amber:** `#FFA500`
- **Charcoal:** `#2B2D42`
- **Near Black:** `#0D1117`

### Typography

- **Body:** Inter (variable font)
- **Display:** Poppins (weights: 400, 600, 700, 800)

### Spacing

- Section padding: `py-16 md:py-24 lg:py-32` (`.section-padding`)
- Container: `max-w-7xl mx-auto px-6 md:px-8 lg:px-12` (`.container-custom`)

## 🧪 Testing & Quality Assurance

This project includes **automated testing** that runs on every commit and push to ensure code quality and prevent bugs.

### Quick Commands

```bash
# Full validation (run before production deploy)
npm run validate

# Pre-deployment checks
npm run pre-deploy

# Interactive validation script
./scripts/pre-deploy.sh
```

### Unit Tests (Vitest)

```bash
# Run all unit tests
npm run test:unit

# Run tests in watch mode
npm run test

# Run with coverage
npm run test:unit -- --coverage
```

### E2E Tests (Playwright)

```bash
npm run test:e2e
```

### Automated Testing

**Pre-Commit Hooks (Husky):**

- ✅ Automatically runs on `git commit`
- ✅ Lints and formats staged files
- ✅ Validates commit message format

**CI/CD Pipeline (GitHub Actions):**

- ✅ Runs on every push and pull request
- ✅ Runs linting, tests, and builds
- ✅ Prevents merging broken code

### Documentation

For detailed testing information, see:

- **[TESTING.md](./TESTING.md)** - Complete testing guide
- **[TESTING-SETUP.md](./TESTING-SETUP.md)** - Setup and usage guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Pre-deployment checklist

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Examples
git commit -m "feat: add team section to about page"
git commit -m "fix: correct email address in footer"
git commit -m "docs: update README"
git commit -m "style: format code with prettier"
```

**Valid types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`, `build`

### Linting

```bash
npm run lint
npm run lint:fix
```

## 📦 Building for Production

```bash
npm run build
npm run start  # Test production build locally
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables
4. Deploy!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Other Platforms

The project is a standard Next.js app and can be deployed to:

- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted (Docker, PM2, etc.)

Refer to [Next.js deployment docs](https://nextjs.org/docs/deployment) for details.

## 🔧 Configuration

### Adding CMS (Sanity)

1. Install Sanity CLI:

   ```bash
   npm install -g @sanity/cli
   ```

2. Initialize Sanity Studio:

   ```bash
   sanity init
   ```

3. Create schemas for:
   - Case studies
   - Clients
   - Services
   - Blog posts (optional)

4. Update `lib/sanity.ts` with your client config

### 3. Analytics & Conversion Tracking (GA4 & GTM)

The application uses `@next/third-parties/google` in `app/layout.jsx` alongside a centralized analytics engine in `lib/analytics.js` and an automated SPA route tracker `components/AnalyticsTracker.jsx`.

#### Event Tracking Matrix

| Event Name                                            | Type / Category         | Triggers & Parameters                                                                                                |
| :---------------------------------------------------- | :---------------------- | :------------------------------------------------------------------------------------------------------------------- |
| `page_view`                                           | Standard GA4 / GTM      | Automatic on initial load & every SPA client navigation (`page_path`, `page_title`, `page_location`, `language`).    |
| `generate_lead`                                       | Standard GA4 Conversion | Triggered upon successful submission of `contact_form`, `printing_contact_form`, or `whatsapp_lead_capture`.         |
| `contact_form_attempt` / `success` / `error`          | Lead Form Tracking      | Primary contact inquiry form interactions with `company`, `budget`, and `error_type`.                                |
| `printing_contact_form_attempt` / `success` / `error` | B2B Printing Form       | Printing quotation form interactions with `category` and `quantity`.                                                 |
| `whatsapp_lead_capture_attempt` / `success`           | WhatsApp Widget Form    | Interactive chat popup lead submission before redirecting to WhatsApp.                                               |
| `whatsapp_click`                                      | Conversion Outbound     | Fired on clicking direct WhatsApp CTA buttons across Hero, Contact, Printing, Bintaro, and Footer.                   |
| `phone_call_click`                                    | Conversion Outbound     | Fired on clicking `tel:+62...` telephone links.                                                                      |
| `email_inquiry_click`                                 | Conversion Outbound     | Fired on clicking `mailto:...` email links.                                                                          |
| `outbound_click`                                      | Outbound Link           | External links to Instagram (`@serasakreatif.id`, `@serasaprinting`), TikTok, LinkedIn, Google Maps, Google Reviews. |
| `video_interaction`                                   | Video Engagement        | Video reel modal previews, play, pause, mute, and unmute actions in Reels and Showcase components.                   |
| `search`                                              | Standard GA4 Search     | Global Command Palette (`Cmd+K`) and portfolio keyword searches with `search_term` and `results_count`.              |
| `language_change`                                     | Localization            | User toggling between English (`en`) and Indonesian (`id`) language modes.                                           |
| `user_engagement`                                     | UI Interactions         | Portfolio category/industry filter changes, accordion item expansions, mobile menu toggles.                          |

#### Google Search Console & Schema.org Structured Data

- **Google Search Console Verification:** Configured via meta tag verification `lfIU-Zm4oh9gQVqO8U4ZaJm1pumqC6FKlZ_lNMsZDUM` in `app/layout.jsx`.
- **Dynamic XML Sitemap:** Automatically generated at `/sitemap.xml` with priority weighting across all core services, portfolio case studies, and blog articles.
- **Search Engine Crawling (`robots.txt`):** Allows public indexing while excluding internal API routes and CMS studio admin endpoints (`/studio/`, `/api/`).
- **Schema.org Rich Snippets:**
  - `LocalBusiness` & `ProfessionalService`: Agency details, address, geo coordinates, operating hours, accepted payments, rating.
  - `Organization` & `WebSite`: Sitelinks Searchbox integration pointing to `/portfolio?q={search_term_string}`.
  - `FAQPage`: Rich FAQ accordion snippets targeting local Indonesian queries.
  - `Service`: Service catalog on `/services` and B2B printing specification on `/services/printing`.
  - `BreadcrumbList`: Injected across all subpages (`/about`, `/services`, `/portfolio`, `/blog`, `/contact`, `/privacy-policy`, etc.).
  - `BlogPosting`: Injected on dynamic and dedicated blog article pages.
  - `CreativeWork` / `CaseStudy`: Injected on dynamic case study pages (`/portfolio/[slug]`).
  - `AboutPage` & `ContactPage`: Structured data on dedicated company overview and contact landing routes.

## 📄 License

Copyright © 2024–2026 Serasa Kreatif. All rights reserved.

---

Built with ❤️ by [Menako Studio](https://github.com/menako-studio)
