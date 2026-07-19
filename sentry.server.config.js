// sentry.server.config.js
// This file configures the Sentry SDK for the server (Node.js runtime).
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only run Sentry in production AND when DSN is configured
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production',

  // Capture 10% of transactions to stay within free tier limits
  tracesSampleRate: 0.1,

  // Useful for debugging — remove in production or set to false
  debug: false,
})
