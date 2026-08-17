'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StickyWhatsApp from '@/components/StickyWhatsApp'
import CommandPalette from '@/components/CommandPalette'
import AnalyticsTracker from '@/components/AnalyticsTracker'
import { LanguageProvider } from '@/components/LanguageContext'

export default function LayoutContent({ children }) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  if (isStudio) {
    return <main>{children}</main>
  }

  return (
    <Suspense fallback={<div className="min-h-screen bg-primary" />}>
      <LanguageProvider>
        <AnalyticsTracker />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
        <CommandPalette />
      </LanguageProvider>
    </Suspense>
  )
}
