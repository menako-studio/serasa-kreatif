import HomePageClient from '@/components/HomePageClient'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
  absoluteTitle: true,
  description:
    'Serasa Kreatif: agensi kreatif di Bintaro, Tangerang Selatan. Jasa social media management, branding, iklan digital, produksi video & cetak offset B2B untuk UMKM & korporat di Jabodetabek.',
  path: '',
})

// No `searchParams` here on purpose: reading it makes the route dynamic (no static HTML / CDN cache,
// slower TTFB). The page is prerendered in Indonesian; the language toggle is client-side.
export default function HomePage() {
  return <HomePageClient />
}
