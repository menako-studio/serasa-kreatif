export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serasakreatif.id'

  // Static pages with realistic lastModified dates
  // ?lang=id query-param URLs are intentionally excluded — hreflang annotations
  // in page metadata handle language alternates without risking duplicate content
  const staticPages = [
    { path: '', changeFrequency: 'weekly', priority: 1, lastModified: '2026-07-23' },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9, lastModified: '2026-06-01' },
    {
      path: '/services/printing',
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: '2026-06-01',
    },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-07-23' },
    {
      path: '/portfolio/pregnansia',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    {
      path: '/portfolio/sr12',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    {
      path: '/portfolio/arkaff',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    {
      path: '/portfolio/kotabi',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    {
      path: '/portfolio/japo',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    {
      path: '/portfolio/bandar-kardus',
      changeFrequency: 'monthly',
      priority: 0.75,
      lastModified: '2026-05-01',
    },
    { path: '/about', changeFrequency: 'monthly', priority: 0.75, lastModified: '2026-06-01' },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-06-01' },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.7, lastModified: '2026-07-23' },
    // Local SEO landing pages
    {
      path: '/agensi-kreatif-bintaro',
      changeFrequency: 'monthly',
      priority: 0.85,
      lastModified: '2026-07-23',
    },
    // SEO blog articles
    {
      path: '/blog/apa-itu-agensi-kreatif',
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: '2026-07-23',
    },
    {
      path: '/blog/jasa-social-media-management-jakarta',
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: '2026-07-23',
    },
    {
      path: '/blog/cara-memilih-agensi-sosial-media',
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: '2026-07-23',
    },
    { path: '/terms-of-use', changeFrequency: 'yearly', priority: 0.3, lastModified: '2025-01-01' },
    {
      path: '/privacy-policy',
      changeFrequency: 'yearly',
      priority: 0.3,
      lastModified: '2025-01-01',
    },
  ]

  return staticPages.map(({ path, changeFrequency, priority, lastModified }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency,
    priority,
  }))
}
