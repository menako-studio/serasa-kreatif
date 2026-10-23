import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import AboutPageClient from './AboutPageClient'
import { buildMetadata, IDS, SITE_URL } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Tentang Kami — Agensi Kreatif Bintaro',
  description:
    'Kenali Serasa Kreatif, agensi kreatif & social media management di Bintaro, Tangerang Selatan. Tim profesional yang membantu UMKM & korporat tumbuh di era digital.',
  path: '/about',
})

function AboutPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    name: 'Tentang Serasa Kreatif',
    url: `${SITE_URL}/about`,
    inLanguage: 'id-ID',
    isPartOf: { '@id': IDS.website },
    // Points at the sitewide LocalBusiness node instead of redefining a conflicting Organization.
    about: { '@id': IDS.business },
    mainEntity: { '@id': IDS.business },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Statically rendered (Indonesian by default); the body lives in a client component so the
// EN/ID toggle works without reading `searchParams` on the server.
export default function AboutPage() {
  return (
    <>
      <AboutPageSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: SITE_URL },
          { name: 'Tentang Kami', url: `${SITE_URL}/about` },
        ]}
      />
      <AboutPageClient />
    </>
  )
}
