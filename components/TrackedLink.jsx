'use client'

import Link from 'next/link'
import { trackOutboundClick } from '@/lib/analytics'

export default function TrackedLink({ href, type, label, children, ...props }) {
  const handleClick = () => {
    trackOutboundClick(type || 'link', label || 'generic_link', href)
  }

  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a href={href} onClick={handleClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
