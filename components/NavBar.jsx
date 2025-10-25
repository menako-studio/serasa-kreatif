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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-black/80 backdrop-blur-sm py-6'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={`font-display font-black text-2xl uppercase tracking-tight ${
            isScrolled ? 'text-black' : 'text-white'
          }`}>
            SERASA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium uppercase text-sm tracking-wider transition-colors ${
                isScrolled 
                  ? (pathname === link.href ? 'text-black' : 'text-gray-600 hover:text-black')
                  : (pathname === link.href ? 'text-white' : 'text-gray-300 hover:text-white')
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={`px-6 py-2 text-sm font-bold uppercase transition-colors ${
              isScrolled 
                ? 'bg-black text-white hover:bg-red-600'
                : 'bg-white text-black hover:bg-red-600 hover:text-white'
            }`}
          >
            Kontak
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`w-full h-0.5 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`w-full h-0.5 transition-all ${
                isScrolled ? 'bg-black' : 'bg-white'
              } ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800 mt-4 py-6 animate-fade-in">
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-lg uppercase tracking-wider transition-colors ${
                  pathname === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-red-600 hover:text-white transition-colors text-center"
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
