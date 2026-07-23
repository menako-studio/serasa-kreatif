import ServicesPageClient from './ServicesPageClient'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Jasa Social Media & Branding Jakarta — Serasa Kreatif',
  description:
    'Layanan agensi kreatif Serasa Kreatif: social media management, branding, kampanye digital, produksi video, dan cetak offset B2B. Hasil terukur untuk UMKM & korporat di Jakarta dan Jabodetabek.',
  keywords: [
    'jasa social media management jakarta',
    'jasa branding jakarta',
    'agensi sosial media bintaro',
    'paket social media management',
    'jasa instagram management jakarta',
    'jasa iklan digital indonesia',
    'layanan branding umkm jakarta',
    'sme branding services jakarta',
    'social media management indonesia',
    'social media management pricing',
  ],
  openGraph: {
    title: 'Jasa Social Media & Branding Jakarta | Serasa Kreatif',
    description:
      'Social media management, branding, iklan digital & cetak offset untuk UMKM dan korporat Indonesia. Hasil terukur dari agensi kreatif Bintaro.',
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
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          {
            name: lang === 'id' ? 'Layanan' : 'Services',
            url: 'https://serasakreatif.id/services',
          },
        ]}
      />
      <ServicesPageClient lang={lang} />
    </>
  )
}
