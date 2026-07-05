import HomePageClient from '@/components/HomePageClient'

export const metadata = {
  title: 'Creative Agency Jakarta — Branding, Social Media & Digital Campaigns',
  description:
    'Creative agency in Bintaro, Jakarta helping brands scale. Services: branding, social media management, digital ads, video production & offset printing.',
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
      'Creative agency in Bintaro, Jakarta helping brands scale. Services: branding, social media management, digital ads, video production & offset printing.',
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
