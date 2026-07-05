import ServicesPageClient from './ServicesPageClient'

export const metadata = {
  title: 'Branding, Social Media & Digital Services for Indonesian SMEs',
  description:
    'Branding, social media management, digital campaigns, video production, and offset printing services for Indonesian SMEs with measurable results.',
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
      'Branding, social media management, digital campaigns, video production, and offset printing services for Indonesian SMEs with measurable results.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://serasakreatif.id/services',
    languages: {
      'en-US': 'https://serasakreatif.id/services',
      'id-ID': 'https://serasakreatif.id/services?lang=id',
      'x-default': 'https://serasakreatif.id/services',
    },
  },
}

export default function ServicesPage({ searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  return <ServicesPageClient lang={lang} />
}
