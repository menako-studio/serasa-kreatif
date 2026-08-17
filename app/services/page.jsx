import ServicesPageClient from './ServicesPageClient'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Jasa Social Media & Branding Jakarta — Serasa Kreatif',
  description:
    'Layanan agensi kreatif Serasa Kreatif: social media management, branding, kampanye digital, produksi video, dan cetak offset B2B. Hasil terukur untuk UMKM & korporat di Jakarta dan Jabodetabek.',
  keywords: [
    'jasa social media management jakarta',
    'jasa branding jakarta',
    'agensi sosial media bintaro',
    'paket social media management',
    'jasa instagram management jakarta',
    'jasa iklan digital indonesia',
    'layanan branding umkm jakarta',
    'sme branding services jakarta',
    'social media management indonesia',
    'social media management pricing',
  ],
  openGraph: {
    title: 'Jasa Social Media & Branding Jakarta | Serasa Kreatif',
    description:
      'Social media management, branding, iklan digital & cetak offset untuk UMKM dan korporat Indonesia. Hasil terukur dari agensi kreatif Bintaro.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://serasakreatif.id/services',
    languages: {
      'en-US': 'https://serasakreatif.id/services',
      'id-ID': 'https://serasakreatif.id/services?lang=id',
      'x-default': 'https://serasakreatif.id/services',
    },
  },
}

function ServiceCatalogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Creative Agency & Social Media Management',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Serasa Kreatif',
      url: 'https://serasakreatif.id',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Agensi Kreatif Serasa',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description:
              'Manajemen akun Instagram & TikTok harian, konten kreatif, dan evaluasi bulanan.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Strategy & Visual Identity',
            description: 'Pengembangan identitas merek, pedoman visual, dan positioning bisnis.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Advertising & Performance Marketing',
            description:
              'Kampanye iklan Meta Ads & Google Ads berbasis data untuk meningkatkan konversi.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Video Production & Reels',
            description: 'Produksi video komersial, reels kreatif, dan company profile.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'B2B Offset Printing & Packaging',
            description: 'Cetak offset kemasan custom, stationery perusahaan, dan katalog promosi.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ServicesPage({ searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          {
            name: lang === 'id' ? 'Layanan' : 'Services',
            url: 'https://serasakreatif.id/services',
          },
        ]}
      />
      <ServiceCatalogSchema />
      <ServicesPageClient lang={lang} />
    </>
  )
}
