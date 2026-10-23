import ServicesPageClient from './ServicesPageClient'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { buildMetadata, IDS } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Jasa Social Media & Branding Jakarta',
  description:
    'Layanan agensi kreatif Serasa Kreatif: social media management, branding, kampanye digital, produksi video, dan cetak offset B2B. Hasil terukur untuk UMKM & korporat di Jabodetabek.',
  path: '/services',
})

function ServiceCatalogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Creative Agency & Social Media Management',
    provider: { '@id': IDS.business },
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

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: 'Layanan', url: 'https://serasakreatif.id/services' },
        ]}
      />
      <ServiceCatalogSchema />
      <ServicesPageClient />
    </>
  )
}
