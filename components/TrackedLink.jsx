'use client'

import Link from 'next/link'
import { trackOutboundClick } from '@/lib/analytics'

export default function TrackedLink({ href, type, label, location, children, onClick, ...props }) {
  const handleClick = (e) => {
    // Run original onClick handler if present
    if (onClick) {
      onClick(e)
    }

    trackOutboundClick(type || 'link', label || 'generic_link', href, location || '')

    const target = props.target || '_self'
    const isExternal =
      href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
    const isSpecialProtocol = href.startsWith('mailto:') || href.startsWith('tel:')

    // If it's a standard external link navigating in the same tab, delay navigation by 150ms
    // to give GTM/GA4 time to process the dataLayer event before page unload.
    if (isExternal && target !== '_blank' && !isSpecialProtocol && !e.defaultPrevented) {
      e.preventDefault()
      setTimeout(() => {
        window.location.href = href
      }, 150)
    }
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
