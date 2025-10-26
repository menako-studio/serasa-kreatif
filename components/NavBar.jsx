'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { name: 'Portofolio', href: '/work' },
  { name: 'Layanan', href: '/services' },
  { name: 'Tentang', href: '/about' },
  { name: 'Kontak', href: '/contact' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 py-4 shadow-sm backdrop-blur-md'
          : 'bg-black/80 py-6 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center justify-between container-custom">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Use image logo; swap to blue/colored when scrolled (light bg), white when on dark bg */}
          <div className="relative w-40 h-10 md:h-12 md:w-52">
            <Image
              src={
                isScrolled
                  ? '/assets/images/logo-serasa.png'
                  : '/assets/images/logo-serasa-white.png'
              }
              alt="Serasa Kreatif"
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium uppercase tracking-wider transition-colors px-4 py-2 rounded ${
                pathname === link.href
                  ? isScrolled
                    ? 'text-black underline underline-offset-4'
                    : 'text-white underline underline-offset-4'
                  : isScrolled
                    ? 'text-gray-600 hover:text-black'
                    : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Single Kontak Button, styled consistently */}
          <Link
            href="/contact"
            className={`ml-4 px-6 py-2 text-sm font-bold uppercase rounded transition-colors border-2 ${
              isScrolled
                ? 'bg-black text-white border-black hover:bg-red-600 hover:border-red-600'
                : 'bg-white text-black border-white hover:bg-red-600 hover:text-white hover:border-red-600'
            }`}
          >
            Kontak
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="p-2 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="flex flex-col justify-between w-6 h-5">
            <span
              className={`h-0.5 w-full transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-full transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-full transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="py-6 mt-4 bg-black border-t border-gray-800 animate-fade-in lg:hidden">
          <div className="flex flex-col space-y-4 container-custom">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium uppercase tracking-wider transition-colors ${
                  pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 font-bold text-center text-black uppercase transition-colors bg-white hover:bg-red-600 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
