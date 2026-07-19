// sentry.client.config.js
// This file configures the Sentry SDK for the browser/client.
// The config you add here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only run Sentry in production AND when DSN is configured
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production',

  // Capture 10% of all transactions for performance monitoring
  // (free tier: 100k transactions/month — 10% keeps us safe)
  tracesSampleRate: 0.1,

  // Capture Replay for 5% of sessions, 100% for sessions with errors
  // This gives us video-like replays of user sessions where errors occur
  replaysSessionSampleRate: 0.05,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      // Mask all text content and inputs to protect user privacy
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],

  // Useful for debugging — remove in production or set to false
  debug: false,
})
