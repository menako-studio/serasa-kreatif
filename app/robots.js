export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serasakreatif.id'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Prevent indexing of language query-param URLs as separate pages.
        // Language alternates are handled via hreflang annotations in page metadata.
        disallow: ['/api/', '/admin/', '/_next/', '/studio', '/studio/', '/*?lang='],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
