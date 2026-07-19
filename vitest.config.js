import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
    include: ['tests/unit/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    exclude: ['tests/e2e/**', 'node_modules/**'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'json-summary'],
      reportsDirectory: './coverage',
      include: ['components/**/*.{js,jsx}', 'lib/**/*.{js,jsx}', 'app/**/*.{js,jsx}'],
      exclude: [
        'app/studio/**',
        'app/api/**',
        'node_modules/**',
        '**/*.config.*',
        '**/layout.*',
        '**/not-found.*',
        '**/robots.*',
        '**/sitemap.*',
      ],
      // Thresholds intentionally not set — add them back as test coverage grows.
      // Current coverage: ~1% (1 test file for CaseCard).
      // Goal: increase to 50%+ by writing tests for key components.
      // thresholds: { lines: 50, functions: 50, branches: 50, statements: 50 },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
})
