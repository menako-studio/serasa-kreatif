'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const navLinks = [
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Find hero section and calculate its bottom position
    const hero = document.querySelector('section.bg-primary, section.bg-black, section.bg-hero')
    let heroBottom = 600
    if (hero) {
      const rect = hero.getBoundingClientRect()
      heroBottom = rect.top + window.scrollY + rect.height
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= heroBottom)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Pages that always use white navbar
  const forceWhiteNav = ['/contact', '/about', '/blog', '/portfolio']
  const isWhiteNav = forceWhiteNav.some((slug) => pathname.startsWith(slug))
  const isDarkNav = !isWhiteNav && !isScrolled

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isWhiteNav || isScrolled
          ? 'bg-white py-4 shadow-sm backdrop-blur-md'
          : 'bg-primary py-6 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-16 w-56 transition-all duration-300 md:h-20 md:w-80">
            <Image
              src={
                isDarkNav
                  ? '/assets/images/logo-serasa-white.png'
                  : '/assets/images/logo-serasa.png'
              }
              alt="Serasa Kreatif"
              fill={true}
              quality={100}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                pathname === link.href
                  ? isDarkNav
                    ? 'text-white underline underline-offset-4'
                    : 'text-black underline underline-offset-4'
                  : isDarkNav
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`ml-4 rounded border-2 px-6 py-2 text-sm font-bold uppercase transition-colors ${
              isDarkNav
                ? 'border-white bg-white text-black hover:border-brand-teal hover:bg-brand-teal hover:text-white'
                : 'border-black bg-black text-white hover:border-brand-teal hover:bg-brand-teal'
            }`}
          >
            Contact Us
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="p-2 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-full transition-all ${isDarkNav ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span
              className={`h-0.5 w-full transition-all ${isDarkNav ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-full transition-all ${isDarkNav ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`mt-4 animate-fade-in border-t border-gray-200 py-6 lg:hidden ${isDarkNav ? 'bg-primary' : 'bg-white'}`}
        >
          <div className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? isDarkNav
                      ? 'text-white'
                      : 'text-black'
                    : isDarkNav
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`px-6 py-3 text-center font-bold uppercase transition-colors ${
                isDarkNav
                  ? 'bg-white text-black hover:bg-red-600 hover:text-white'
                  : 'bg-black text-white hover:bg-red-600 hover:text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
// ...existing code...
// ...existing code...
