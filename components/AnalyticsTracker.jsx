'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { trackPageView } from '@/lib/analytics'

export default function AnalyticsTracker() {
  // Reads window.location.search instead of useSearchParams() so this layout-level component does
  // not force client-side rendering of statically prerendered pages (see LayoutContent).
  const pathname = usePathname()
  const lastTrackedUrl = useRef(null)

  useEffect(() => {
    if (!pathname) return

    const query = window.location.search
    const currentUrl = `${pathname}${query}`

    // Avoid duplicate pageviews on identical URLs
    if (lastTrackedUrl.current === currentUrl) return
    const isInitialLoad = lastTrackedUrl.current === null
    lastTrackedUrl.current = currentUrl

    // The GA4 tag (@next/third-parties) already sends the initial page_view; only report
    // client-side route changes here so each landing is not counted twice.
    if (isInitialLoad) return

    const currentLang = new URLSearchParams(query).get('lang') || 'id'

    trackPageView(pathname, document.title, {
      page_query: query,
      language: currentLang,
    })
  }, [pathname])

  return null
}
