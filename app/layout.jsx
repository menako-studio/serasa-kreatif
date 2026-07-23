import './globals.css'
import LayoutContent from '@/components/LayoutContent'
import StructuredData from '@/components/StructuredData'
import { Open_Sans } from 'next/font/google'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://serasakreatif.id'),
  alternates: {
    canonical: 'https://serasakreatif.id',
    languages: {
      'en-US': 'https://serasakreatif.id',
      'id-ID': 'https://serasakreatif.id/?lang=id',
      'x-default': 'https://serasakreatif.id',
    },
  },
  title: {
    default: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
    template: '%s | Serasa Kreatif',
  },
  applicationName: 'Serasa Kreatif',
  description:
    'Serasa Kreatif adalah agensi kreatif & social media management terpercaya di Bintaro, Tangerang Selatan. Layanan: branding, manajemen sosial media, iklan digital, produksi video, dan cetak offset B2B untuk bisnis Indonesia. Creative agency Jakarta trusted by local brands.',
  keywords: [
    // Bahasa Indonesia — primary local SEO targets
    'agensi kreatif jakarta',
    'agensi kreatif bintaro',
    'agensi kreatif tangerang selatan',
    'agensi sosial media jakarta',
    'jasa social media management jakarta',
    'jasa branding jakarta',
    'agensi digital marketing indonesia',
    'agensi kreatif jabodetabek',
    'jasa iklan digital jakarta',
    'studio kreatif bintaro',
    // English — secondary
    'creative agency jakarta',
    'creative agency indonesia',
    'branding agency jakarta',
    'social media management jakarta',
    'digital marketing indonesia',
    'creative studio bintaro',
    'brand design jakarta',
    'b2b printing jakarta',
    'serasa kreatif',
    'tangerang selatan creative agency',
  ],
  authors: [{ name: 'Serasa Kreatif', url: 'https://serasakreatif.id' }],
  creator: 'Serasa Kreatif',
  publisher: 'Serasa Kreatif',
  category: 'Creative Agency, Social Media Management, Digital Marketing',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    url: 'https://serasakreatif.id',
    siteName: 'Serasa Kreatif',
    title: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
    description:
      'Agensi kreatif di Bintaro, Jakarta Selatan. Branding, social media management, iklan digital, produksi video & cetak B2B untuk bisnis Indonesia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif — Agensi Kreatif Jakarta',
      },
    ],
  },
  icons: {
    icon: '/assets/images/logo-serasa.png',
    shortcut: '/assets/images/logo-serasa-blue.jpg',
    apple: '/assets/images/logo-serasa-white.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
    description:
      'Agensi kreatif di Bintaro, Jakarta. Branding, social media, iklan digital & video produksi untuk bisnis Indonesia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'lfIU-Zm4oh9gQVqO8U4ZaJm1pumqC6FKlZ_lNMsZDUM',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <LayoutContent>{children}</LayoutContent>
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      {process.env.NEXT_PUBLIC_GTM_ID && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      )}
    </html>
  )
}
