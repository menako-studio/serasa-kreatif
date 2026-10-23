'use client'

/**
 * Controlled filter bar for the portfolio grid. State lives in PortfolioPageClient (seeded from the
 * URL after mount) — this component intentionally does not use useSearchParams()/useRouter(),
 * which would force the whole statically-rendered /portfolio route into client-side rendering.
 */
export default function PortfolioFilters({
  filterOptions,
  currentFilters,
  onFilterChange,
  isIndo = true,
}) {
  function handleFilterChange(key, value) {
    onFilterChange(key, value)
  }

  function handleSearchChange(e) {
    onFilterChange('q', e.target.value)
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
            placeholder={
              isIndo
                ? 'Cari klien, industri, atau layanan...'
                : 'Search client, industry, or service...'
            }
            value={currentFilters.q || ''}
            onChange={handleSearchChange}
            className="text-primary focus:border-brand-teal w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:outline-none"
          />
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
            className="bg-brand-teal w-full cursor-pointer appearance-none rounded-lg border border-white px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500"
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
            className="bg-brand-teal w-full cursor-pointer appearance-none rounded-lg border border-white px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500"
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
