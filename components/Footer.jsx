import Link from 'next/link'

const footerLinks = {
  legal: [
    { name: 'Ketentuan Penggunaan', href: '/ketentuan-penggunaan' },
    { name: 'Pemberitahuan Privasi', href: '/pemberitahuan-privasi' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-primary-dark bg-primary text-white">
      <div className="container-custom py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">KONTAK</div>
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
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-200">KARIR</div>
            <div className="space-y-2 text-sm">
              <Link
                href="/careers"
                className="block text-white transition-colors hover:text-accent"
              >
                Bergabung dengan Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-primary-dark pt-8 text-xs text-white md:flex-row">
          <p>© {new Date().getFullYear()} SERASA KREATIF. ALL RIGHTS RESERVED.</p>
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
