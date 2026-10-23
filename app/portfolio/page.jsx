import { caseStudies } from '@/lib/case-data'
import { sanityClient } from '@/lib/sanity'
import { allCaseStudiesQuery } from '@/lib/sanity-queries'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import PortfolioPageClient from './PortfolioPageClient'
import { buildMetadata, IDS, SITE_URL } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Portofolio — Hasil Kerja Agensi Kreatif',
  description:
    'Lihat portofolio Serasa Kreatif: hasil kampanye social media, branding, dan iklan digital yang sukses untuk UMKM & korporat. Studi kasus nyata dari agensi kreatif Bintaro, Jakarta.',
  path: '/portfolio',
})

// Static page, refreshed hourly so new Sanity case studies show up without a redeploy.
// (Filtering by ?q / ?service / ?industry is done client-side — reading `searchParams` here would
// make the route dynamic and uncacheable.)
export const revalidate = 3600

const clientIndustries = {
  pregnansia: 'WELLNESS',
  sr12: 'WELLNESS',
  arkaff: 'FASHION',
  kotabi: 'FASHION',
  japo: 'F&B',
  'bandar-kardus': 'MANUFACTURING',
}

const clientServices = {
  pregnansia: ['DIGITAL MARKETING', 'SOCIAL MEDIA MANAGEMENT', 'BRANDING STRATEGY'],
  sr12: ['SOCIAL MEDIA MANAGEMENT'],
  arkaff: [
    'BRANDING STRATEGY',
    'WEBSITE DEVELOPMENT',
    'SOCIAL MEDIA MANAGEMENT',
    'DIGITAL MARKETING',
    'KOL MANAGEMENT',
  ],
  kotabi: ['SOCIAL MEDIA MANAGEMENT', 'DIGITAL MARKETING'],
  japo: ['DIGITAL MARKETING', 'SOCIAL MEDIA MANAGEMENT', 'BRANDING STRATEGY'],
  'bandar-kardus': ['SOCIAL MEDIA MANAGEMENT'],
}

export default async function WorkPage() {
  // Fetch from CMS if Sanity is configured
  let data = caseStudies
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const cmsStudies = await sanityClient.fetch(allCaseStudiesQuery)
      if (cmsStudies && cmsStudies.length > 0) {
        data = cmsStudies
      }
    } catch (err) {
      console.warn('Failed to load data from Sanity CMS, falling back to local files:', err.message)
    }
  }

  const works = data.map((study) => {
    const svc = clientServices[study.slug]
    return {
      slug: study.slug,
      client: study.client,
      caseTitle: study.title,
      category: study.category,
      image: study.image,
      tags: study.tags || [],
      services: Array.isArray(svc) ? svc : svc ? [svc] : [],
      industry: clientIndustries[study.slug] || '',
    }
  })

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/portfolio#webpage`,
    name: 'Portofolio Serasa Kreatif',
    url: `${SITE_URL}/portfolio`,
    inLanguage: 'id-ID',
    isPartOf: { '@id': IDS.website },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: works.map((work, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/portfolio/${work.slug}`,
        name: `${work.client} — ${work.caseTitle}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: SITE_URL },
          { name: 'Portofolio', url: `${SITE_URL}/portfolio` },
        ]}
      />
      <PortfolioPageClient works={works} />
    </>
  )
}
