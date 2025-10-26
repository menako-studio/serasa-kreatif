import Link from 'next/link'

const footerLinks = {
  legal: [
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat & Ketentuan', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black text-white">
      <div className="container-custom py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-500">KONTAK</div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Bintaro, Tangerang Selatan</p>
              <p className="text-gray-300">+62 812-8897-1453</p>
              <p className="text-gray-300">hello@serasakreatif.id</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-500">SOCIAL</div>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.instagram.com/serasakreatif.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@serasakreatif.id"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                TikTok
              </a>
              <a
                href="https://www.linkedin.com/company/serasa-kreatif/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <div className="mb-4 text-sm uppercase tracking-wider text-gray-500">KARIR</div>
            <div className="space-y-2 text-sm">
              <Link
                href="/careers"
                className="block text-gray-300 transition-colors hover:text-white"
              >
                Bergabung dengan Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-8 text-xs text-gray-600 md:flex-row">
          <p>© {new Date().getFullYear()} SERASA KREATIF. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="uppercase transition-colors hover:text-white"
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
