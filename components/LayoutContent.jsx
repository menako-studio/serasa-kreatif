'use client'

import { usePathname } from 'next/navigation'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StickyWhatsApp from '@/components/StickyWhatsApp'
import CommandPalette from '@/components/CommandPalette'

export default function LayoutContent({ children }) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  if (isStudio) {
    return <main>{children}</main>
  }

  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
      <StickyWhatsApp />
      <CommandPalette />
    </>
  )
}
