'use client'

import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'
import { useLanguage } from '@/components/LanguageContext'

export default function Footer() {
  const { dict, language } = useLanguage()
  const isIndo = language === 'id'

  // Sitewide internal links to the key commercial/SEO pages (crawlable <a> in the server HTML).
  const exploreLinks = [
    { name: isIndo ? 'Layanan' : 'Services', href: '/services' },
    { name: isIndo ? 'Portofolio' : 'Portfolio', href: '/portfolio' },
    { name: isIndo ? 'Cetak Offset B2B' : 'B2B Offset Printing', href: '/services/printing' },
    {
      name: isIndo ? 'Agensi Kreatif Bintaro' : 'Creative Agency Bintaro',
      href: '/agensi-kreatif-bintaro',
    },
    { name: 'Blog', href: '/blog' },
    { name: isIndo ? 'Tentang Kami' : 'About Us', href: '/about' },
  ]

  const footerLinks = {
    legal: [
      { name: dict?.footer?.linkTerms || 'Terms of Use', href: '/terms-of-use' },
      { name: dict?.footer?.linkPrivacy || 'Privacy Notice', href: '/privacy-policy' },
    ],
  }

  return (
    <footer className="border-primary-dark bg-primary border-t text-white">
      <div className="container-custom py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">
              {dict?.contact?.locationLabel || 'CONTACT'}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white">Jl. Akasia No.12, Pondok Aren, Tangerang Selatan 15224</p>
              <p className="text-white">
                <TrackedLink
                  href="tel:+6281288971453"
                  type="tel"
                  label="footer_phone"
                  location="footer"
                  className="hover:text-accent transition-colors"
                >
                  +62 812-8897-1453
                </TrackedLink>
              </p>
              <p className="text-white">
                <TrackedLink
                  href="mailto:serasakreatif.id@gmail.com"
                  type="email"
                  label="footer_email"
                  location="footer"
                  className="hover:text-accent transition-colors"
                >
                  serasakreatif.id@gmail.com
                </TrackedLink>
              </p>
              <div className="flex flex-col gap-1 pt-1 text-xs">
                <TrackedLink
                  href="https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9"
                  type="maps"
                  label="footer_google_maps"
                  location="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent text-gray-300 underline transition-colors"
                >
                  📍 Google Maps Location
                </TrackedLink>
                <TrackedLink
                  href="https://share.google/13159QdwsmxTI0F4g"
                  type="review"
                  label="footer_google_reviews"
                  location="footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent text-gray-300 underline transition-colors"
                >
                  ⭐ Google Business Profile
                </TrackedLink>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">SOCIAL</div>
            <div className="space-y-2 text-sm">
              <TrackedLink
                href="https://www.instagram.com/serasakreatif.id/"
                type="instagram"
                label="footer_instagram"
                location="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent block text-white transition-colors"
              >
                Instagram
              </TrackedLink>
              <TrackedLink
                href="https://www.tiktok.com/@serasakreatif.id"
                type="tiktok"
                label="footer_tiktok"
                location="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent block text-white transition-colors"
              >
                TikTok
              </TrackedLink>
              <TrackedLink
                href="https://youtube.com/@serasakreatif?si=MVVhcvW_ys2wXHCe"
                type="youtube"
                label="footer_youtube"
                location="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent block text-white transition-colors"
              >
                YouTube
              </TrackedLink>
              <TrackedLink
                href="https://www.linkedin.com/company/serasa-kreatif/"
                type="linkedin"
                label="footer_linkedin"
                location="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent block text-white transition-colors"
              >
                LinkedIn
              </TrackedLink>
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">
              {dict?.footer?.linkCareers ? 'KARIER' : 'CAREER'}
            </div>
            <div className="space-y-2 text-sm">
              <TrackedLink
                href="https://glints.com/id/companies/serasa-kreatif/18ff2d09-7fe6-4088-b3a8-dfd1ecabf2f3"
                type="careers"
                label="footer_glints_careers"
                location="footer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent block text-white transition-colors"
              >
                {dict?.footer?.linkCareers || 'Join Our Team'}
              </TrackedLink>
            </div>
          </div>
        </div>

        {/* Explore links */}
        <nav aria-label={isIndo ? 'Navigasi footer' : 'Footer navigation'} className="mb-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-accent text-gray-200 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Bar */}
        <div className="border-primary-dark flex flex-col items-center justify-between gap-4 border-t pt-8 text-xs text-white md:flex-row">
          <p>
            © {new Date().getFullYear()} PT SELARAS MAKMUR PERKASA.{' '}
            {dict?.footer?.copyright ? 'HAK CIPTA DILINDUNGI.' : 'ALL RIGHTS RESERVED.'}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-accent uppercase transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
