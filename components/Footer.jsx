'use client'

import Link from 'next/link'
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
              <p className="text-white">+62 812-8897-1453</p>
              <p className="text-white">serasakreatif.id@gmail.com</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">SOCIAL</div>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.instagram.com/serasakreatif.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-colors hover:text-accent"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@serasakreatif.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-colors hover:text-accent"
              >
                TikTok
              </a>
              <a
                href="https://youtube.com/@serasakreatif?si=MVVhcvW_ys2wXHCe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-colors hover:text-accent"
              >
                YouTube
              </a>
              <a
                href="https://www.linkedin.com/company/serasa-kreatif/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">
              {dict?.footer?.linkCareers ? 'KARIER' : 'CAREER'}
            </div>
            <div className="space-y-2 text-sm">
              <Link
                href="https://glints.com/id/companies/serasa-kreatif/18ff2d09-7fe6-4088-b3a8-dfd1ecabf2f3"
                className="block text-white transition-colors hover:text-accent"
              >
                {dict?.footer?.linkCareers || 'Join Our Team'}
              </Link>
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
