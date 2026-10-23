import { describe, it, expect } from 'vitest'
import { buildMetadata, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/seo'
import sitemap from '@/app/sitemap'
import robots from '@/app/robots'
import { caseStudies } from '@/lib/case-data'

describe('buildMetadata', () => {
  it('sets a self-referencing absolute canonical', () => {
    const meta = buildMetadata({ title: 'Tentang Kami', description: 'd', path: '/about' })
    expect(meta.alternates.canonical).toBe(`${SITE_URL}/about`)
    expect(meta.openGraph.url).toBe(`${SITE_URL}/about`)
  })

  it('never emits hreflang alternates (language is a client-side preference)', () => {
    const meta = buildMetadata({ title: 'x', description: 'd', path: '/about' })
    expect(meta.alternates.languages).toBeUndefined()
  })

  it('always supplies an OG/Twitter image (Next replaces the parent openGraph object)', () => {
    const meta = buildMetadata({ title: 'x', description: 'd' })
    expect(meta.openGraph.images).toEqual([DEFAULT_OG_IMAGE])
    expect(meta.twitter.images).toEqual([DEFAULT_OG_IMAGE.url])
  })

  it('leaves the brand suffix to the root title template unless absoluteTitle is set', () => {
    expect(buildMetadata({ title: 'Blog', description: 'd' }).title).toBe('Blog')
    expect(buildMetadata({ title: 'Home', description: 'd', absoluteTitle: true }).title).toEqual({
      absolute: 'Home',
    })
  })
})

describe('sitemap', () => {
  const entries = sitemap()
  const urls = entries.map((e) => e.url)

  it('contains every case study (derived from the same data as the pages)', () => {
    caseStudies.forEach((study) => {
      expect(urls).toContain(`${SITE_URL}/portfolio/${study.slug}`)
    })
  })

  it('has no ?lang= duplicates and no duplicate URLs', () => {
    expect(urls.some((u) => u.includes('?'))).toBe(false)
    expect(new Set(urls).size).toBe(urls.length)
  })

  it('lists the local landing page and the real blog articles', () => {
    expect(urls).toContain(`${SITE_URL}/agensi-kreatif-bintaro`)
    expect(urls).toContain(`${SITE_URL}/blog/apa-itu-agensi-kreatif`)
  })
})

describe('robots', () => {
  const rules = robots().rules[0]

  it('does not block ?lang= URLs (so Google can read their canonical)', () => {
    expect(rules.disallow.some((p) => p.includes('lang='))).toBe(false)
  })

  it('keeps API, studio and admin out of the index', () => {
    expect(rules.disallow).toEqual(expect.arrayContaining(['/api/', '/studio', '/admin.html']))
  })
})
