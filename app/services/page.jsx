import ServicesPageClient from './ServicesPageClient'

export const metadata = {
  title: 'Branding, Social Media & Digital Services for Indonesian SMEs',
  description:
    'Complete branding, social media management, digital campaigns, video production, and B2B printing services for Indonesian SMEs. Measurable results and free consultation.',
  keywords: [
    'sme branding services jakarta',
    'social media management indonesia',
    'sme social media packages',
    'business instagram services jakarta',
    'sme digital campaigns indonesia',
    'sme brand identity jakarta',
    'business creative content',
    'social media management pricing',
  ],
  openGraph: {
    title: 'Branding, Social Media & Digital Services for SMEs | Serasa Kreatif',
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
