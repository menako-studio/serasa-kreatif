import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // Only run Sentry in production AND when DSN is configured
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN && process.env.NODE_ENV === 'production',

  // Filter out noisy errors from browser extensions and in-app browsers (Instagram, Facebook WebView, etc.)
  ignoreErrors: [
    // Instagram / Meta Android In-App Browser bridge deallocation error
    /Error invoking postMessage: Java object is gone/i,
    /Java object is gone/i,
    /navigation_performance_logger_android/i,
    // Common browser extension / third-party noise
    /ResizeObserver loop limit exceeded/i,
    /ResizeObserver loop completed with undelivered notifications/i,
    /Non-Error promise rejection captured/i,
    /fb_bridge/i,
    /window\.webkit\.messageHandlers/i,
  ],

  denyUrls: [
    // Injected scripts from Instagram / Facebook Android & iOS In-App Browsers
    /navigation_performance_logger_android/i,
    /^app:\/\/navigation_performance_logger_android/i,
    // Browser extensions
    /^chrome-extension:\/\//i,
    /^moz-extension:\/\//i,
    /^safari-web-extension:\/\//i,
  ],

  beforeSend(event, hint) {
    const error = hint?.originalException
    const message = (typeof error === 'string' ? error : error?.message) || event?.message || ''

    if (
      message.includes('Java object is gone') ||
      message.includes('navigation_performance_logger_android') ||
      (message.includes('postMessage') && message.includes('Java'))
    ) {
      return null
    }

    return event
  },

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
