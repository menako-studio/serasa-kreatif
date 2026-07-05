import * as en from './copy-en'
import * as id from './copy-id'

export const dictionaries = { en, id }

/**
 * Get translations helper
 * @param {string} lang - 'en' | 'id'
 */
export function getDictionary(lang) {
  return dictionaries[lang === 'id' ? 'id' : 'en']
}

/**
 * Returns alternate hreflang and canonical configurations for a path
 * @param {string} pathname - current page path (e.g. '/about')
 * @returns {object} metadata alternates object
 */
export function getAlternateUrls(pathname = '') {
  const baseUrl = 'https://serasakreatif.id'
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`

  return {
    canonical: `${baseUrl}${cleanPath}`,
    languages: {
      'en-US': `${baseUrl}${cleanPath}`,
      'id-ID': `${baseUrl}${cleanPath}?lang=id`,
      'x-default': `${baseUrl}${cleanPath}`,
    },
  }
}
