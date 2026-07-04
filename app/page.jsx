import HomePageClient from '@/components/HomePageClient'

export const metadata = {
  title: 'Creative Agency Jakarta — Branding, Social Media & Digital Campaigns',
  description:
    'Serasa Kreatif is a creative agency in Bintaro, Jakarta. We help Indonesian SMEs grow through branding, social media management, digital ads, video production, and B2B printing. Free consultation.',
  keywords: [
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
    title: 'Creative Agency Jakarta — Branding, Social Media & Digital Campaigns | Serasa Kreatif',
    description:
      'Serasa Kreatif helps Indonesian businesses grow through branding, social media management, digital ads, and video production. Located in Bintaro, Jakarta.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif — Creative Agency Jakarta',
      },
    ],
  },
  alternates: {
    canonical: 'https://serasakreatif.id',
  },
}

export default function HomePage() {
  return <HomePageClient />
}
