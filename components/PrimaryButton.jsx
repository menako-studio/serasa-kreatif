import Link from 'next/link'

/**
 * PrimaryButton - Tombol utama dengan style konsisten
 */
export default function PrimaryButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`border-brand-pink text-brand-pink  inline-flex items-center border-2 px-8 py-4 font-bold uppercase transition-all duration-300 ${className} hover:text-white`}
    >
      {children}
    </Link>
  )
}
