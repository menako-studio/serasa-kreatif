'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useTransition } from 'react'
import { trackEngagement } from '@/lib/analytics'

export default function PortfolioFilters({ filterOptions, currentFilters }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  function handleFilterChange(key, value) {
    const params = new URLSearchParams(searchParams)
    if (value && value !== 'ALL SERVICES' && value !== 'ALL INDUSTRIES') {
      params.set(key, value.toLowerCase())
    } else {
      params.delete(key)
    }

    trackEngagement('portfolio_filter_change', {
      filter_key: key,
      filter_value: value || 'all',
    })

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  function handleSearchChange(e) {
    const value = e.target.value
    const params = new URLSearchParams(searchParams)
    if (value) {
      params.set('q', value)
    } else {
      params.delete('q')
    }

    trackEngagement('portfolio_search', {
      search_query: value,
    })

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`, { scroll: false })
    })
  }

  return (
    <div className="mb-12 space-y-6">
      {/* Search Input */}
      <div className="max-w-2xl">
        <label htmlFor="search-input" className="sr-only">
          Search Case Studies
        </label>
        <div className="relative">
          <input
            id="search-input"
            type="text"
            placeholder="Search client, industry, or service..."
            value={currentFilters.q || ''}
            onChange={handleSearchChange}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-primary placeholder-gray-400 focus:border-brand-teal focus:outline-none"
          />
          {isPending && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-brand-teal border-t-transparent" />
            </div>
          )}
        </div>
      </div>

      {/* Select Filters */}
      <div className="grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
        {/* Services */}
        <div className="relative">
          <select
            aria-label="Filter Service"
            value={currentFilters.service?.toUpperCase() || 'ALL SERVICES'}
            onChange={(e) => handleFilterChange('service', e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-white bg-brand-teal px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500"
          >
            {filterOptions.services.map((opt) => (
              <option key={opt} value={opt} className="bg-brand-teal text-white">
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Industries */}
        <div className="relative">
          <select
            aria-label="Filter Industry"
            value={currentFilters.industry?.toUpperCase() || 'ALL INDUSTRIES'}
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            className="w-full cursor-pointer appearance-none rounded-lg border border-white bg-brand-teal px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500"
          >
            {filterOptions.industries.map((opt) => (
              <option key={opt} value={opt} className="bg-brand-teal text-white">
                {opt}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
