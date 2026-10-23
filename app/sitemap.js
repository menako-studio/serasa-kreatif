import { caseStudies } from '@/lib/case-data'

// lastModified is only emitted where we have a real date. Google ignores a sitemap's lastmod once it
// has seen it be inaccurate, so the previous blanket made-up dates were worse than none.
// <priority> and <changefreq> are ignored by Google, so they are not emitted.
export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serasakreatif.id'

  const pages = [
    { path: '' },
    { path: '/services' },
    { path: '/services/printing' },
    { path: '/portfolio' },
    // Portfolio case studies are derived from the same data that generates the pages, so a new
    // case study can never be missing from the sitemap.
    ...caseStudies.map((study) => ({ path: `/portfolio/${study.slug}` })),
    { path: '/about' },
    { path: '/contact' },
    { path: '/blog' },
    // Local SEO landing page
    { path: '/agensi-kreatif-bintaro' },
    // SEO blog articles (dates match datePublished/dateModified in each article's JSON-LD)
    { path: '/blog/apa-itu-agensi-kreatif', lastModified: '2026-07-23' },
    { path: '/blog/jasa-social-media-management-jakarta', lastModified: '2026-07-23' },
    { path: '/blog/cara-memilih-agensi-sosial-media', lastModified: '2026-07-23' },
    { path: '/terms-of-use' },
    { path: '/privacy-policy' },
  ]

  return pages.map(({ path, lastModified }) => ({
    url: `${baseUrl}${path}`,
    ...(lastModified ? { lastModified: new Date(lastModified) } : {}),
  }))
}
