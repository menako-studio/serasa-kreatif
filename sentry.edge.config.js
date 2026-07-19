// sentry.edge.config.js
// This file configures the Sentry SDK for Edge Runtime (Next.js middleware).
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only run Sentry in production AND when DSN is configured
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production',

  // NOTE: Set lower trace sample rate for edge runtime
  // Edge functions run on every request, so high sampling = high costs
  tracesSampleRate: 0.05,

  debug: false,
})
