'use client'

import { usePathname } from 'next/navigation'
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

  // SEO: there is intentionally no <Suspense> + useSearchParams() wrapper here. That pattern made
  // every statically prerendered page ship an empty shell (client-side-render bailout) so crawlers
  // saw no <h1>/content in the initial HTML. Nothing in this tree may call useSearchParams().
  return (
    <LanguageProvider>
      <AnalyticsTracker />
      <NavBar />
      <main>{children}</main>
      <Footer />
      <StickyWhatsApp />
      <CommandPalette />
    </LanguageProvider>
  )
}
