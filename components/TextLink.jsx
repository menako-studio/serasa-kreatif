import Link from 'next/link'

/**
 * TextLink - Link dengan style underline konsisten
 */
export default function TextLink({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`text-brand-pink inline-flex items-center text-sm font-medium underline transition-colors hover:text-gray-600 ${className}`}
    >
      {children}
    </Link>
  )
}
