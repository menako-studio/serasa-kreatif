export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://serasakreatif.id'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // `?lang=` URLs are intentionally NOT disallowed any more: blocking them stopped Google from
        // ever seeing their canonical tag, so previously discovered `/?lang=id` URLs could linger in
        // the index as "indexed, though blocked". They serve the same HTML and canonicalise to the
        // clean URL, which consolidates them.
        disallow: ['/api/', '/admin/', '/admin.html', '/studio', '/studio/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
