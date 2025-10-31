# Serasa Kreatif Website

Modern, high-performance website for Serasa Kreatif — a digital branding and social media agency based in Bintaro, Jakarta.

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
# Optional: Sanity CMS (if using)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Optional: Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Optional: Email/Contact form
CONTACT_EMAIL=serasakreatif.id@gmail.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password

# Optional: WhatsApp API (for form webhook)
WHATSAPP_WEBHOOK_URL=https://your-webhook-url
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

## 🧪 Testing

### Unit Tests (Vitest)

```bash
npm run test
# or
npm run test:watch
```

### E2E Tests (Playwright)

```bash
npm run test:e2e
# or
npm run test:e2e:headed  # with browser UI
```

### Type Checking

```bash
npm run type-check
```

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

### Adding Analytics

Update `lib/analytics.ts` with Google Analytics 4 setup:

```typescript
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
```

Add script to `app/layout.tsx`.

### Contact Form Integration

The contact form uses `/api/contact/route.ts`. Integrate with:

- **Email:** Use Resend, SendGrid, or Nodemailer
- **CRM:** Add leads to HubSpot, Airtable, etc.
- **Notifications:** Post to Slack or WhatsApp webhook

Example with Resend:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'serasakreatif.id@gmail.com',
  to: ['serasakreatif.id@gmail.com'],
  subject: `New Contact: ${name}`,
  html: `<p>${message}</p>`,
})
```

## 🎯 Performance Optimization

- Images use Next.js `<Image>` with automatic WebP/AVIF
- Critical CSS inlined automatically
- Fonts loaded with `next/font` (self-hosted)
- API routes for serverless functions
- Static generation where possible

Target Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🔒 Security

- No sensitive data in client-side code
- Environment variables for secrets
- Input validation on contact form
- Rate limiting on API routes (recommended)
- CSRF protection via Next.js defaults

## 📝 Content Management

### Option 1: Hardcoded (Current)

Case studies and content are in `lib/case-data.ts`. Update directly in code.

### Option 2: Sanity CMS (Recommended)

- Visual editor for non-technical users
- Real-time preview
- Asset management (CDN)
- Collaborative editing

### Option 3: Other Headless CMS

- Contentful
- Strapi
- Prismic
- Directus

Update `lib/` client and data fetching as needed.

## 🐛 Troubleshooting

### Build errors

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Type errors

```bash
npm run type-check
```

### Port already in use

```bash
lsof -ti:3000 | xargs kill -9
# or use a different port
npm run dev -- -p 3001
```

### Images not loading

- Check `next.config.mjs` for allowed domains
- Ensure images exist in `public/` or external CDN is configured

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'feat: add new feature'`
3. Push to branch: `git push origin feature/your-feature`
4. Open a Pull Request

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code restructuring
- `test:` adding tests
- `chore:` maintenance tasks

## 📞 Support

For issues or questions:

- Email: serasakreatif.id@gmail.com
- WhatsApp: +62 812-8897-1453
- Instagram: [@serasakreatif.id](https://www.instagram.com/serasakreatif.id/)

## 📄 License

Copyright © 2024 Serasa Kreatif. All rights reserved.

---

Built with ❤️ by [Menako Studio](https://github.com/menako-studio)