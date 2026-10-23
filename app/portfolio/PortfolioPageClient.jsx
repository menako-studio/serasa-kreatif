'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PortfolioFilters from '@/components/PortfolioFilters'
import PortfolioVideoGrid from '@/components/PortfolioVideoGrid'
import { useLanguage } from '@/components/LanguageContext'
import { trackEngagement, trackSearch } from '@/lib/analytics'

const filterOptions = {
  services: [
    'ALL SERVICES',
    'BRANDING STRATEGY',
    'WEBSITE DEVELOPMENT',
    'SOCIAL MEDIA MANAGEMENT',
    'DIGITAL MARKETING',
    'KOL MANAGEMENT',
  ],
  industries: ['ALL INDUSTRIES', 'FASHION', 'F&B', 'WELLNESS', 'MANUFACTURING'],
}

function FeaturedWorkGrid({ works }) {
  if (works.length === 0) {
    return (
      <div className="py-12 text-center text-white">
        <p className="text-lg">No case studies matched the selected filters.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/portfolio/${work.slug}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900 shadow-md transition-shadow duration-300 hover:shadow-xl"
        >
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mb-2 text-xs uppercase tracking-widest text-white">{work.category}</div>
            <h3 className="font-display mb-2 text-3xl font-black uppercase text-white md:text-4xl lg:text-5xl">
              {work.title}
            </h3>
            <p className="text-sm text-white md:text-base">{work.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

const FILTER_KEYS = ['q', 'service', 'industry']

function readFiltersFromUrl() {
  const params = new URLSearchParams(window.location.search)
  const next = {}
  FILTER_KEYS.forEach((key) => {
    const value = params.get(key)
    if (value) next[key] = value
  })
  return next
}

function matches(work, { q, service, industry }) {
  if (q) {
    const query = q.toLowerCase()
    const haystack = [work.client, work.caseTitle, work.category, ...(work.tags || [])]
    if (!haystack.some((v) => v && v.toLowerCase().includes(query))) return false
  }
  if (service && service.toLowerCase() !== 'all services') {
    if (!(work.services || []).some((s) => s.toLowerCase() === service.toLowerCase())) return false
  }
  if (industry && industry.toLowerCase() !== 'all industries') {
    if ((work.industry || '').toLowerCase() !== industry.toLowerCase()) return false
  }
  return true
}

export default function PortfolioPageClient({ works }) {
  const { language } = useLanguage()
  const isIndo = language === 'id'

  // Filters live in client state, seeded from the URL after mount. The server HTML (and therefore
  // crawlers) always gets the full, unfiltered list of case-study links; this page is statically
  // rendered and never reads `searchParams` or `useSearchParams()`.
  const [filters, setFilters] = useState({})

  useEffect(() => {
    setFilters(readFiltersFromUrl())
  }, [])

  function handleFilterChange(key, value) {
    const normalized =
      value && value !== 'ALL SERVICES' && value !== 'ALL INDUSTRIES' ? value.toLowerCase() : ''
    const next = { ...filters }
    // keep the typed search text as-is; only lower-case the select values
    if (key === 'q') {
      if (value) {
        next.q = value
        trackSearch(value, 'portfolio_search')
      } else {
        delete next.q
      }
    } else {
      trackEngagement('portfolio_filter_change', { filter_key: key, filter_value: value || 'all' })
      if (normalized) next[key] = normalized
      else delete next[key]
    }
    setFilters(next)

    // Reflect filters in the address bar (shareable) without a navigation / server round trip.
    const params = new URLSearchParams(window.location.search)
    FILTER_KEYS.forEach((k) => (next[k] ? params.set(k, next[k]) : params.delete(k)))
    const qs = params.toString()
    window.history.replaceState(
      window.history.state,
      '',
      `${window.location.pathname}${qs ? `?${qs}` : ''}`
    )
  }

  const featuredWork = useMemo(
    () =>
      works
        .filter((work) => matches(work, filters))
        .map((work) => ({
          slug: work.slug,
          title: work.client,
          subtitle: work.caseTitle,
          image: work.image,
          category: work.category,
        })),
    [works, filters]
  )

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-white pb-20 pt-32 md:pt-40 lg:pt-44">
        <div className="container-custom">
          <h1 className="font-display text-primary mb-16 font-black uppercase">
            {isIndo ? 'PORTOFOLIO' : 'PORTFOLIO'}
          </h1>

          {/* Filter Component */}
          <PortfolioFilters
            filterOptions={filterOptions}
            currentFilters={filters}
            onFilterChange={handleFilterChange}
            isIndo={isIndo}
          />

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-primary text-lg leading-relaxed">
              {isIndo ? (
                <>
                  Lihat karya terbaik kami dari berbagai layanan dan klien UMKM.{' '}
                  <Link
                    href="/contact"
                    className="hover:text-brand-pink underline transition-colors"
                  >
                    Hubungi
                  </Link>{' '}
                  tim Serasa Kreatif untuk konsultasi gratis.
                </>
              ) : (
                <>
                  See our best work from various services and SME clients.{' '}
                  <Link
                    href="/contact"
                    className="hover:text-brand-pink underline transition-colors"
                  >
                    Contact
                  </Link>{' '}
                  Serasa Kreatif team for a free consultation.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-brand-pink py-12">
        <div className="container-custom">
          <h2 className="font-display mb-12 text-2xl font-bold uppercase text-white">
            {isIndo ? 'KARYA PILIHAN' : 'FEATURED WORK'}
          </h2>

          {/* Grid - 2 columns */}
          <FeaturedWorkGrid works={featuredWork} />
        </div>
      </section>

      {/* Creative Reels Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container-custom">
          <h2 className="font-display text-primary mb-4 text-3xl font-black uppercase">
            {isIndo ? 'ARAHAN KREATIF & REELS' : 'CREATIVE DIRECTING & REELS'}
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-neutral-600">
            {isIndo
              ? 'Intip beberapa konten pendek, kampanye media sosial, dan kisah merek yang kami buat untuk klien kami.'
              : 'Take a look at some of our short-form content, social media campaigns, and brand stories created for our clients.'}
          </p>
          <PortfolioVideoGrid
            videos={[
              'https://youtube.com/shorts/lDkOli2oh4w', // Latifa Spa Academy
              'https://youtube.com/shorts/OpZvybA_hLw', // Coreside
              'https://youtube.com/shorts/Yr1szFvZe9M', // Charita Spa
            ]}
          />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding border-t border-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-brand-pink mb-8 text-xl leading-relaxed md:text-2xl">
              {isIndo
                ? 'Punya ide untuk bisnis, merek, atau UMKM Anda? Kami siap mendengarkan dan berkolaborasi. Bersama Serasa Kreatif, mari kita bentuk masa depan cerah bagi UMKM Indonesia.'
                : "Have an idea for your business, brand, or SME? We are ready to listen and collaborate. Together with Serasa Kreatif, let's shape a brighter future for Indonesian SMEs."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
