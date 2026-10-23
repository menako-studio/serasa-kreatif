import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ContactPageClient from './ContactPageClient'
import { buildMetadata, IDS, SITE_URL } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Konsultasi Gratis — Agensi Kreatif Jakarta',
  description:
    'Hubungi Serasa Kreatif untuk konsultasi gratis. Agensi kreatif di Bintaro, Tangerang Selatan, melayani Jakarta & Jabodetabek. Mulai proyek branding dan social media Anda hari ini.',
  path: '/contact',
})

function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_URL}/contact#webpage`,
    name: 'Kontak Serasa Kreatif',
    url: `${SITE_URL}/contact`,
    inLanguage: 'id-ID',
    isPartOf: { '@id': IDS.website },
    mainEntity: { '@id': IDS.business },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ContactPage() {
  return (
    <>
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: SITE_URL },
          { name: 'Kontak', url: `${SITE_URL}/contact` },
        ]}
      />
      <ContactPageClient />
    </>
  )
}
