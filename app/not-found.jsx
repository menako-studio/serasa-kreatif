import Link from 'next/link'
import NavBar from '@/components/NavBar'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen text-gray-900 bg-white">
      {/* White NavBar at the top */}
      <NavBar forceWhite={true} />
      {/* Main Content - Centered */}
      <main className="flex flex-col items-start justify-center flex-1 px-6 py-20 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* 404 Number - Extra Large */}
          <h1 className="font-display mb-8 text-[120px] font-black leading-none text-gray-900 md:text-[180px] lg:text-[240px]">
            404
          </h1>

          {/* Message */}
          <div className="max-w-2xl pl-6 mb-12 border-l-4 border-brand-teal">
            <h2 className="mb-4 text-3xl font-black leading-tight text-gray-900 uppercase font-display md:text-4xl lg:text-5xl">
              Halaman tidak ditemukan –
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
              Mungkin Anda bisa melihat karya kami dan bagaimana kami bekerja untuk menciptakan masa
              depan yang lebih manusiawi untuk UMKM Indonesia.
            </p>
          </div>

          {/* Navigation Links - Vertical Stack */}
          <nav className="pt-8 space-y-4 border-t border-gray-200">
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/layanan">Layanan Kami</NavLink>
            <NavLink href="/tentang">Tentang Serasa</NavLink>
            <NavLink href="/kontak">Hubungi Kami</NavLink>
          </nav>
        </div>
      </main>
    </div>
  )
}

// Navigation Link Component
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between pb-4 transition-colors border-b border-gray-200 group hover:border-brand-teal"
    >
      <span className="text-xl font-bold tracking-wide uppercase transition-colors group-hover:text-brand-teal md:text-2xl">
        {children}
      </span>
      <svg
        className="w-6 h-6 transition-transform group-hover:translate-x-2 group-hover:text-brand-teal md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
