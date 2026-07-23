import HomePageClient from '@/components/HomePageClient'

export const metadata = {
  title: 'Serasa Kreatif — Agensi Kreatif & Social Media Management Jakarta',
  description:
    'Serasa Kreatif: agensi kreatif terpercaya di Bintaro, Jakarta. Jasa social media management, branding, iklan digital, produksi video & cetak offset B2B untuk UMKM & korporat di Jabodetabek.',
  keywords: [
    // Indonesian primary
    'agensi kreatif jakarta',
    'agensi sosial media jakarta',
    'jasa social media management jakarta',
    'jasa branding bintaro',
    'agensi kreatif bintaro',
    'agensi kreatif tangerang selatan',
    'jasa digital marketing jakarta',
    // English secondary
    'creative agency jakarta',
    'branding agency indonesia',
    'social media management jakarta',
    'digital marketing agency jakarta',
    'brand strategy indonesia',
    'video production jakarta',
    'creative studio bintaro',
    'serasa kreatif',
  ],
  openGraph: {
    title: 'Serasa Kreatif — Agensi Kreatif & Social Media Management Jakarta',
    description:
      'Agensi kreatif di Bintaro, Jakarta. Jasa branding, social media management, iklan digital & produksi video untuk bisnis Indonesia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif — Agensi Kreatif Jakarta',
      },
    ],
  },
  alternates: {
    canonical: 'https://serasakreatif.id',
    languages: {
      'en-US': 'https://serasakreatif.id',
      'id-ID': 'https://serasakreatif.id/?lang=id',
      'x-default': 'https://serasakreatif.id',
    },
  },
}

export default function HomePage({ searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  return <HomePageClient lang={lang} />
}
