import ServicesPageClient from './ServicesPageClient'

export const metadata = {
  title: 'Branding & Social Media Services for SMEs',
  description:
    'Complete branding, social media management, digital campaigns, and creative content services for Indonesian SMEs. Packages start from Rp 3M/month with measurable results and free consultation.',
  keywords: [
    'sme branding services',
    'social media management indonesia',
    'sme social media packages',
    'business instagram services',
    'sme digital campaigns',
    'sme brand identity',
    'business creative content',
    'social media management pricing',
  ],
  openGraph: {
    title: 'SME Branding & Social Media Services | Serasa Kreatif',
    description:
      'Increase sales up to 240% with professional branding and social media services for SMEs. Free consultation, measurable results.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://serasakreatif.id/services',
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
