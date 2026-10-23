/**
 * Shared SEO constants + helpers.
 * Single source of truth for business facts used in JSON-LD, so the schema, the Google Business
 * Profile and on-page text cannot drift apart again.
 */

export const SITE_URL = 'https://serasakreatif.id'
export const SITE_NAME = 'Serasa Kreatif'

export const DEFAULT_OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
}

export const BUSINESS = {
  name: 'Serasa Kreatif',
  legalName: 'PT Selaras Makmur Perkasa',
  // Name on the Google Business Profile — linked via alternateName so Google treats them as one entity.
  alternateNames: ['Klinik Kreatif Serasa', 'Serasa Creative Studio'],
  telephone: '+6281288971453',
  email: 'serasakreatif.id@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Akasia No.12, Pondok Aren',
    addressLocality: 'Tangerang Selatan',
    addressRegion: 'Banten',
    postalCode: '15224',
    addressCountry: 'ID',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -6.25913, longitude: 106.707277 },
  hasMap: 'https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9',
  sameAs: [
    'https://www.instagram.com/serasakreatif.id/',
    'https://www.instagram.com/serasaprinting/',
    'https://www.tiktok.com/@serasakreatif.id',
    'https://www.linkedin.com/company/serasa-kreatif/',
    'https://youtube.com/@serasakreatif',
    'https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9',
    'https://share.google/13159QdwsmxTI0F4g',
  ],
}

// Stable @id values so page-level schema can reference the same entities instead of redefining them.
export const IDS = {
  business: `${SITE_URL}/#localbusiness`,
  website: `${SITE_URL}/#website`,
}

/**
 * Build page metadata with a self-referencing canonical, complete OpenGraph/Twitter tags and the
 * default share image. Note: Next.js replaces (does not merge) a parent's `openGraph`/`twitter`
 * object when a page defines its own, so every page must supply images itself — this helper
 * guarantees that.
 *
 * @param {object} opts
 * @param {string} opts.title        Page title WITHOUT the brand — the root template appends "| Serasa Kreatif".
 * @param {string} opts.description  140–160 chars, unique per page.
 * @param {string} [opts.path]       Path starting with "/" ("" for the homepage).
 * @param {boolean} [opts.absoluteTitle] Use `title` as-is (no template suffix), e.g. the homepage.
 * @param {object|string} [opts.image]  Absolute URL, or an OpenGraph image object. Defaults to /og-image.jpg.
 * @param {'website'|'article'} [opts.type]
 * @param {object} [opts.article]    { publishedTime, modifiedTime, authors } for type "article".
 * @param {object} [opts.robots]
 */
export function buildMetadata({
  title,
  description,
  path = '',
  absoluteTitle = false,
  image,
  type = 'website',
  article,
  robots,
}) {
  const url = `${SITE_URL}${path}`
  const shareTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`
  const images = image ? [typeof image === 'string' ? { url: image } : image] : [DEFAULT_OG_IMAGE]

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      locale: 'id_ID',
      siteName: SITE_NAME,
      url,
      title: shareTitle,
      description,
      images,
      ...(type === 'article' && article ? article : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: images.map((img) => img.url),
    },
    ...(robots ? { robots } : {}),
  }
}
