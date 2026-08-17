'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const lastTrackedUrl = useRef('')

  useEffect(() => {
    if (!pathname) return

    const queryString = searchParams?.toString() ? `?${searchParams.toString()}` : ''
    const currentUrl = `${pathname}${queryString}`

    // Avoid duplicate pageviews on identical URLs
    if (lastTrackedUrl.current === currentUrl) return
    lastTrackedUrl.current = currentUrl

    const pageTitle = typeof document !== 'undefined' ? document.title : ''
    const currentLang = searchParams?.get('lang') || 'en'

    trackPageView(pathname, pageTitle, {
      page_query: queryString,
      language: currentLang,
    })
  }, [pathname, searchParams])

  return null
}

export default function AnalyticsTracker() {
  return <Tracker />
}
