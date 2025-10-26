import Link from 'next/link'

/**
 * TextLink - Link dengan style underline konsisten
 */
export default function TextLink({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center text-sm font-medium text-black underline transition-colors hover:text-gray-600 ${className}`}
    >
      {children}
    </Link>
  )
}
