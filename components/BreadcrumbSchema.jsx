/**
 * BreadcrumbSchema — Reusable JSON-LD BreadcrumbList component.
 * Renders structured data for breadcrumb trails shown in Google SERP.
 *
 * Usage:
 *   <BreadcrumbSchema items={[
 *     { name: 'Beranda', url: 'https://serasakreatif.id' },
 *     { name: 'Layanan', url: 'https://serasakreatif.id/services' },
 *   ]} />
 *
 * @param {{ items: Array<{ name: string, url: string }> }} props
 */
export default function BreadcrumbSchema({ items = [] }) {
  if (!items || items.length === 0) return null

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  )
}
