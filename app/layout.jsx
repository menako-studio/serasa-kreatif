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
  },
  title: {
    default: 'Creative Agency Jakarta, Indonesia — Serasa Kreatif',
    template: '%s | Serasa Kreatif',
  },
  description:
    'Serasa Kreatif is a creative studio in Bintaro, Jakarta combining brand strategy and aesthetics for real results. Branding, social media management, digital campaigns, and B2B printing for Indonesian businesses.',
  keywords: [
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
  authors: [{ name: 'Serasa Kreatif' }],
  creator: 'Serasa Kreatif',
  publisher: 'Serasa Kreatif',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://serasakreatif.id',
    siteName: 'Serasa Kreatif',
    title: 'Creative Agency Jakarta, Indonesia — Serasa Kreatif',
    description:
      'Transform your brand with creative campaigns and data-driven insights. Branding, social media, digital ads, and B2B printing from Bintaro, Jakarta.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif — Creative Agency Jakarta',
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
    title: 'Creative Agency Jakarta, Indonesia — Serasa Kreatif',
    description:
      'Transform your brand with creative campaigns and data-driven insights. From thinking to creating.',
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
    google: 'your-google-verification-code',
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
