import { BUSINESS, IDS, SITE_URL } from '@/lib/seo'

/**
 * Sitewide JSON-LD, rendered once in the root layout as a single @graph:
 *   - LocalBusiness / ProfessionalService (one entity — previously duplicated as a second
 *     "Organization" node with a different @id and thinner data)
 *   - WebSite (publisher → the business)
 *
 * Deliberately NOT included (see git history for the previous version):
 *   - aggregateRating: a hard-coded 5.0/48 rating that is not verifiable on the page is a
 *     self-serving review-markup violation (manual-action risk). Add it back only if it is
 *     generated from real, visible reviews.
 *   - FAQPage: Google only allows it for content that is visible on the same page, so it now
 *     lives on the page that actually shows the FAQ (/agensi-kreatif-bintaro).
 *   - WebSite SearchAction: sitelinks search box was retired by Google, and the target URL
 *     (/portfolio?q=) never matched a real site search.
 */
export default function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': IDS.business,
        name: BUSINESS.name,
        alternateName: BUSINESS.alternateNames,
        legalName: BUSINESS.legalName,
        description:
          'Agensi kreatif & social media management di Bintaro, Tangerang Selatan. Layanan: branding, manajemen media sosial, kampanye digital, produksi video, dan cetak offset B2B untuk bisnis di Jabodetabek.',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/images/logo-serasa.png`,
          width: 1080,
          height: 1080,
        },
        image: `${SITE_URL}/og-image.jpg`,
        telephone: BUSINESS.telephone,
        email: BUSINESS.email,
        address: BUSINESS.address,
        geo: BUSINESS.geo,
        hasMap: BUSINESS.hasMap,
        areaServed: [
          { '@type': 'City', name: 'Jakarta' },
          { '@type': 'City', name: 'Jakarta Selatan' },
          { '@type': 'City', name: 'Jakarta Barat' },
          { '@type': 'City', name: 'Jakarta Pusat' },
          { '@type': 'City', name: 'Jakarta Timur' },
          { '@type': 'City', name: 'Jakarta Utara' },
          { '@type': 'City', name: 'Tangerang Selatan' },
          { '@type': 'City', name: 'Tangerang' },
          { '@type': 'City', name: 'Bogor' },
          { '@type': 'City', name: 'Depok' },
          { '@type': 'City', name: 'Bekasi' },
          { '@type': 'State', name: 'Banten' },
          { '@type': 'State', name: 'Jawa Barat' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: BUSINESS.telephone,
          contactType: 'customer service',
          availableLanguage: ['Indonesian', 'English'],
          areaServed: 'ID',
        },
        sameAs: BUSINESS.sameAs,
        priceRange: '$$',
        currenciesAccepted: 'IDR',
        paymentAccepted: 'Bank Transfer, Cash',
        knowsAbout: [
          'Social Media Management',
          'Brand Strategy',
          'Digital Marketing',
          'Content Creation',
          'Video Production',
          'Offset Printing',
          'Branding Agency',
          'Creative Agency',
          'Instagram Marketing',
          'TikTok Marketing',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Layanan Agensi Kreatif',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Social Media Management',
                description:
                  'Manajemen media sosial harian: pembuatan konten, community building, dan kampanye viral untuk menjaga brand tetap relevan dan engaging.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Digital Marketing & Iklan',
                description:
                  'Kampanye iklan berbasis data dengan targeting strategis untuk mengubah tayangan media sosial menjadi pendapatan bisnis nyata.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Produksi Visual Komersial',
                description:
                  'Produksi video end-to-end, corporate storytelling, dan social media reels.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Brand Building & Positioning',
                description:
                  'Strategi merek, identitas visual, desain kemasan, dan pengembangan landing page.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Cetak Offset & Packaging B2B',
                description:
                  'Cetak offset premium untuk kotak kemasan custom, alat tulis perusahaan, dan materi marketing.',
              },
            },
          ],
        },
      },
      {
        '@type': 'WebSite',
        '@id': IDS.website,
        name: BUSINESS.name,
        url: SITE_URL,
        inLanguage: 'id-ID',
        publisher: { '@id': IDS.business },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
