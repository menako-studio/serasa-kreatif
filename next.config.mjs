import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Docker multi-stage builds
  // Vercel deployment is unaffected by this setting
  output: 'standalone',

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', pathname: '/**' },
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
      { protocol: 'https', hostname: 'img.youtube.com', pathname: '/**' },
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    // Required for Sentry server-side instrumentation in Next.js 14
    instrumentationHook: true,
  },
}

// Sentry webpack plugin configuration
// See: https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/
const sentryConfig = {
  // Suppress Sentry build output logs
  silent: !process.env.CI,

  // Hide source maps from the client bundle (security best practice)
  hideSourceMaps: true,

  // Disables the Sentry logger to reduce build output noise
  disableLogger: true,

  // Skip Vercel Cron Monitor creation (we don't use it)
  automaticVercelMonitors: false,

  // Source map upload is automatically skipped when SENTRY_AUTH_TOKEN is not set.
  // To enable source maps for better error stack traces, add SENTRY_AUTH_TOKEN
  // to GitHub Secrets and set SENTRY_ORG + SENTRY_PROJECT in .env.local
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
}

export default withSentryConfig(nextConfig, sentryConfig)

