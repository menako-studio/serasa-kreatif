import Link from 'next/link'

/**
 * PrimaryButton - Tombol utama dengan style konsisten
 */
export default function PrimaryButton({ href, children, className = '' }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center border-2 border-black px-8 py-4 font-bold uppercase text-black transition-all duration-300 hover:bg-black hover:text-white ${className}`}
    >
      {children}
    </Link>
  )
}
