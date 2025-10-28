import ServicesPageClient from './ServicesPageClient'

export const metadata = {
  title: 'Layanan Branding & Social Media untuk UMKM',
  description:
    'Layanan lengkap branding, social media management, kampanye digital, dan konten kreatif untuk UMKM Indonesia. Paket mulai dari Rp 3jt/bulan dengan hasil terukur dan konsultasi gratis.',
  keywords: [
    'jasa branding umkm',
    'social media management indonesia',
    'paket social media umkm',
    'jasa instagram bisnis',
    'kampanye digital umkm',
    'brand identity umkm',
    'konten kreatif bisnis',
    'harga social media management',
  ],
  openGraph: {
    title: 'Layanan Branding & Social Media UMKM | Serasa Kreatif',
    description:
      'Tingkatkan penjualan hingga 240% dengan layanan branding dan social media profesional untuk UMKM. Konsultasi gratis, hasil terukur.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://serasakreatif.id/layanan',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
