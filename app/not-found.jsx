import Link from 'next/link'
import NavBar from '@/components/NavBar'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      {/* White NavBar at the top */}
      <NavBar forceWhite={true} />
      {/* Main Content - Centered */}
      <main className="flex flex-1 flex-col items-start justify-center px-6 py-20 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          {/* 404 Number - Extra Large */}
          <h1 className="font-display mb-8 text-[120px] font-black leading-none text-gray-900 md:text-[180px] lg:text-[240px]">
            404
          </h1>

          {/* Message */}
          <div className="mb-12 max-w-2xl border-l-4 border-brand-teal pl-6">
            <h2 className="font-display mb-4 text-3xl font-black uppercase leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Page not found –
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
              Perhaps you can see our work and how we work to create a more human future for
              Indonesian SMEs.
            </p>
          </div>

          {/* Navigation Links - Vertical Stack */}
          <nav className="space-y-4 border-t border-gray-200 pt-8">
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/services">Our Services</NavLink>
            <NavLink href="/about">About Serasa</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
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
      className="group flex items-center justify-between border-b border-gray-200 pb-4 transition-colors hover:border-brand-teal"
    >
      <span className="text-xl font-bold uppercase tracking-wide transition-colors group-hover:text-brand-teal md:text-2xl">
        {children}
      </span>
      <svg
        className="h-6 w-6 transition-transform group-hover:translate-x-2 group-hover:text-brand-teal md:h-8 md:w-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}
