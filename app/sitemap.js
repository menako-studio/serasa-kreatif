export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serasakreatif.id'
  const now = new Date()

  const paths = [
    { path: '', changeFrequency: 'weekly', priority: 1 },
    { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/services/printing', changeFrequency: 'monthly', priority: 0.85 },
    { path: '/portfolio', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/portfolio/pregnansia', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/portfolio/sr12', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/portfolio/arkaff', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/portfolio/kotabi', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/portfolio/japo', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/portfolio/bandar-kardus', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
    { path: '/terms-of-use', changeFrequency: 'yearly', priority: 0.3 },
    { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  ]

  const sitemapEntries = []

  paths.forEach(({ path, changeFrequency, priority }) => {
    // 1. English (Default)
    sitemapEntries.push({
      url: `${baseUrl}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })

    // 2. Indonesian Alternate (Directly indexable via query parameter)
    sitemapEntries.push({
      url: `${baseUrl}${path}${path.includes('?') ? '&' : '?'}lang=id`,
      lastModified: now,
      changeFrequency,
      priority: priority * 0.9, // Slightly lower priority but still high
    })
  })

  return sitemapEntries
}
