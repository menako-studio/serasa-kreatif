# Quick Start Commands

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Type check
npm run type-check

# Lint code
npm run lint
```

## Testing

```bash
# Run unit tests
npm run test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npx playwright test --ui
```

## Deployment

```bash
# Deploy to Vercel
npm i -g vercel
vercel

# Or push to GitHub and deploy via Vercel dashboard
git add .
git commit -m "feat: initial website scaffold"
git push origin main
```

## Useful Commands

```bash
# Kill port 3000 if occupied
lsof -ti:3000 | xargs kill -9

# Clean install
rm -rf .next node_modules package-lock.json && npm install

# Format code with Prettier
npx prettier --write .

# Generate production build report
npm run build -- --profile
```

## First-Time Setup Checklist

- [ ] `npm install`
- [ ] Copy `.env.example` to `.env.local`
- [ ] Add logo to `public/assets/logo.svg`
- [ ] Add favicon to `public/favicon.ico`
- [ ] Add case study images to `public/assets/cases/`
- [ ] Add client logos to `public/assets/clients/`
- [ ] Update case data in `lib/case-data.ts`
- [ ] Configure contact form API in `app/api/contact/route.ts`
- [ ] Test locally: `npm run dev`
- [ ] Run tests: `npm run test && npm run test:e2e`
- [ ] Build: `npm run build`
- [ ] Deploy: `vercel`

## Environment Variables

Required for production:

```env
NEXT_PUBLIC_SITE_URL=https://serasakreatif.id
RESEND_API_KEY=re_xxxxx
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

See `.env.example` for full list.
