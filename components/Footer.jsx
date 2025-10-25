import Link from 'next/link'

const footerLinks = {
  legal: [
    { name: 'Kebijakan Privasi', href: '/privacy' },
    { name: 'Syarat & Ketentuan', href: '/terms' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-gray-900">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Contact Info */}
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">KONTAK</div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">Bintaro, Tangerang Selatan</p>
              <p className="text-gray-300">+62 812-8897-1453</p>
              <p className="text-gray-300">hello@serasakreatif.id</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">SOCIAL</div>
            <div className="space-y-2 text-sm">
              <a href="https://www.instagram.com/serasakreatif.id/" className="block text-gray-300 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                Behance
              </a>
            </div>
          </div>

          {/* Open Roles */}
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">KARIR</div>
            <div className="space-y-2 text-sm">
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors">
                Bergabung dengan Kami
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} SERASA KREATIF. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors uppercase">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
