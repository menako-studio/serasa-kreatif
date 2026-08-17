'use client'

import Link from 'next/link'
import TrackedLink from '@/components/TrackedLink'
import { useLanguage } from '@/components/LanguageContext'

export default function Footer() {
  const { dict } = useLanguage()

  const footerLinks = {
    legal: [
      { name: dict?.footer?.linkTerms || 'Terms of Use', href: '/terms-of-use' },
      { name: dict?.footer?.linkPrivacy || 'Privacy Notice', href: '/privacy-policy' },
    ],
  }

  return (
    <footer className="border-t border-primary-dark bg-primary text-white">
      <div className="container-custom py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">
              {dict?.contact?.locationLabel || 'CONTACT'}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white">Bintaro, Tangerang Selatan</p>
              <p className="text-white">
                <TrackedLink
                  href="tel:+6281288971453"
                  type="tel"
                  label="footer_phone"
                  location="footer"
                  className="transition-colors hover:text-accent"
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
                  className="transition-colors hover:text-accent"
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
                  className="text-gray-300 underline transition-colors hover:text-accent"
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
                  className="text-gray-300 underline transition-colors hover:text-accent"
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
                className="block text-white transition-colors hover:text-accent"
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
                className="block text-white transition-colors hover:text-accent"
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
                className="block text-white transition-colors hover:text-accent"
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
                className="block text-white transition-colors hover:text-accent"
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
                className="block text-white transition-colors hover:text-accent"
              >
                {dict?.footer?.linkCareers || 'Join Our Team'}
              </TrackedLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-dark pt-8 text-xs text-white md:flex-row">
          <p>
            © {new Date().getFullYear()} PT SELARAS MAKMUR PERKASA.{' '}
            {dict?.footer?.copyright ? 'HAK CIPTA DILINDUNGI.' : 'ALL RIGHTS RESERVED.'}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase transition-colors hover:text-accent"
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
