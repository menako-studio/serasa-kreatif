'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useLanguage } from '@/components/LanguageContext'
import { trackEngagement, trackLanguageChange } from '@/lib/analytics'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, dict } = useLanguage()

  const handleLanguageToggle = (source = 'navbar_desktop') => {
    const nextLang = language === 'en' ? 'id' : 'en'
    trackLanguageChange(nextLang, source)
    toggleLanguage()
  }

  const handleNavClick = (linkName, href) => {
    trackEngagement('nav_click', { link_name: linkName, href })
  }

  const handleMobileMenuToggle = () => {
    const nextState = !isMobileMenuOpen
    trackEngagement('mobile_menu_toggle', { action: nextState ? 'open' : 'close' })
    setIsMobileMenuOpen(nextState)
  }

  const navLinks = [
    { name: dict?.nav?.portfolio || 'Portfolio', href: '/portfolio' },
    { name: dict?.nav?.services || 'Services', href: '/services' },
    { name: dict?.nav?.about || 'About', href: '/about' },
  ]

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
  const forceWhiteNav = [
    '/contact',
    '/about',
    '/blog',
    '/portfolio',
    '/terms-of-use',
    '/privacy-policy',
  ]
  const isWhiteNav = forceWhiteNav.some((slug) => pathname.startsWith(slug))
  const isDarkNav = !isWhiteNav && !isScrolled

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isWhiteNav || isScrolled
          ? 'bg-white shadow-sm backdrop-blur-md'
          : 'bg-primary  backdrop-blur-sm'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
          onClick={() => handleNavClick('Logo Home', '/')}
        >
          <div className="relative h-20 w-64 transition-all duration-300 md:h-28 md:w-[420px] lg:h-32 lg:w-[500px]">
            <Image
              src={
                isDarkNav
                  ? '/assets/images/logo-serasa-white.png'
                  : '/assets/images/logo-serasa.png'
              }
              alt="Serasa Kreatif"
              fill={true}
              quality={100}
              style={{ objectFit: 'contain', objectPosition: 'left' }}
              priority
            />
          </div>
        </Link>
        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 lg:flex">
          {navLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleNavClick(link.name, link.href)}
              className={`rounded px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
                pathname === link.href
                  ? isDarkNav
                    ? 'text-brand-teal underline underline-offset-4'
                    : 'text-brand-pink underline underline-offset-4'
                  : isDarkNav
                    ? 'text-white hover:text-brand-teal'
                    : 'hover:text-brand-pink text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              trackEngagement('command_palette_open', { trigger: 'navbar_search_button' })
              window.dispatchEvent(new CustomEvent('open-search'))
            }}
            className={`flex items-center gap-1.5 rounded px-3 py-2 text-sm font-medium uppercase tracking-wider transition-colors ${
              isDarkNav ? 'text-white hover:text-brand-teal' : 'hover:text-brand-pink text-primary'
            }`}
            aria-label="Search"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span>Search</span>
          </button>

          {/* Language Toggle Component (Premium glassmorphic pill) */}
          <button
            onClick={() => handleLanguageToggle('navbar_desktop')}
            className={`flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              isDarkNav
                ? 'border-white/20 text-white hover:border-brand-teal'
                : 'hover:border-brand-pink border-primary/10 text-primary'
            }`}
            aria-label="Switch language"
          >
            <span
              className={
                language === 'en'
                  ? isDarkNav
                    ? 'text-brand-teal'
                    : 'text-brand-pink'
                  : 'opacity-40'
              }
            >
              EN
            </span>
            <span className="opacity-20">|</span>
            <span
              className={
                language === 'id'
                  ? isDarkNav
                    ? 'text-brand-teal'
                    : 'text-brand-pink'
                  : 'opacity-40'
              }
            >
              ID
            </span>
          </button>

          <Link
            href="/contact"
            onClick={() => handleNavClick('Contact CTA Button', '/contact')}
            className={`ml-4 rounded border-2 px-6 py-2 text-sm font-bold uppercase transition-colors ${
              isDarkNav
                ? 'border-white bg-white text-black hover:border-brand-teal hover:bg-brand-teal hover:text-white'
                : 'border-primary bg-primary text-white hover:border-brand-teal hover:bg-brand-teal'
            }`}
          >
            {dict?.nav?.contact || 'Contact Us'}
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="p-2 lg:hidden"
          onClick={handleMobileMenuToggle}
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
            {navLinks?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium uppercase tracking-wider transition-colors ${
                  pathname === link.href
                    ? isDarkNav
                      ? 'text-white'
                      : 'text-black'
                    : isDarkNav
                      ? 'text-white hover:text-brand-teal'
                      : 'hover:text-brand-pink text-gray-600'
                }`}
                onClick={() => {
                  handleNavClick(link.name, link.href)
                  setIsMobileMenuOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                trackEngagement('command_palette_open', { trigger: 'navbar_mobile_search_button' })
                window.dispatchEvent(new CustomEvent('open-search'))
              }}
              className={`flex items-center justify-center gap-2 border px-6 py-3 text-center font-bold uppercase transition-colors ${
                isDarkNav
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span>Search</span>
            </button>

            {/* Mobile Language Toggle */}
            <div className="flex justify-center py-2">
              <button
                onClick={() => {
                  handleLanguageToggle('navbar_mobile')
                  setIsMobileMenuOpen(false)
                }}
                className={`flex items-center gap-2 rounded-full border px-6 py-3 font-bold uppercase tracking-wider transition-all ${
                  isDarkNav
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}
              >
                <span>Language:</span>
                <span
                  className={
                    language === 'en' ? 'text-brand-pink font-extrabold underline' : 'opacity-60'
                  }
                >
                  EN
                </span>
                <span className="opacity-30">|</span>
                <span
                  className={
                    language === 'id' ? 'text-brand-pink font-extrabold underline' : 'opacity-60'
                  }
                >
                  ID
                </span>
              </button>
            </div>

            <Link
              href="/contact"
              className={`px-6 py-3 text-center font-bold uppercase transition-colors ${
                isDarkNav
                  ? 'bg-white text-black hover:bg-red-600 hover:text-white'
                  : 'bg-black text-white hover:bg-red-600 hover:text-white'
              }`}
              onClick={() => {
                handleNavClick('Mobile Contact CTA', '/contact')
                setIsMobileMenuOpen(false)
              }}
            >
              {dict?.nav?.contact || 'Contact'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
