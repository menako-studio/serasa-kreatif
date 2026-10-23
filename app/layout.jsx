import './globals.css'
import LayoutContent from '@/components/LayoutContent'
import StructuredData from '@/components/StructuredData'
import { Open_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://serasakreatif.id'),
  // No global canonical / hreflang here: every page declares its own self-referencing canonical.
  // A site-wide canonical to the homepage would be inherited by any page that forgets its own.
  // hreflang is intentionally omitted — language is a client-side preference (Indonesian is the
  // default and only crawlable version), and ?lang= URLs are disallowed in robots.txt.
  title: {
    default: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
    template: '%s | Serasa Kreatif',
  },
  applicationName: 'Serasa Kreatif',
  description:
    'Serasa Kreatif adalah agensi kreatif & social media management di Bintaro, Tangerang Selatan. Layanan: branding, manajemen sosial media, iklan digital, produksi video, dan cetak offset B2B untuk bisnis di Jabodetabek.',
  // <meta name="keywords"> removed: Google ignores it and it only exposes targeting to competitors.
  authors: [{ name: 'Serasa Kreatif', url: 'https://serasakreatif.id' }],
  creator: 'Serasa Kreatif',
  publisher: 'Serasa Kreatif',
  category: 'Creative Agency, Social Media Management, Digital Marketing',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://serasakreatif.id',
    siteName: 'Serasa Kreatif',
    title: 'Serasa Kreatif — Agensi Kreatif & Social Media Jakarta',
    description:
      'Agensi kreatif di Bintaro, Tangerang Selatan. Branding, social media management, iklan digital, produksi video & cetak B2B untuk bisnis Indonesia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif — Agensi Kreatif Jakarta',
      },
    ],
  },
  // Real raster icons (Google requires a favicon in multiples of 48px; /favicon.ico is 48/32/16).
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
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
    // lang="id": Indonesian is the server-rendered default (see LanguageContext). The client
    // updates this attribute if a visitor explicitly switches to English.
    <html lang="id" className={openSans.variable}>
      <head>
        {/* No fonts.googleapis.com / fonts.gstatic.com preconnects: next/font self-hosts the font,
            so those connections were opened and never used. */}
        <link rel="dns-prefetch" href="https://www.google.com" />
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <LayoutContent>{children}</LayoutContent>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {/*
          GoogleTagManager was removed: the GTM-NKKPT23S container is empty (no tags/triggers/
          variables), so it only added gtm.js weight and a blocking-adjacent network request.
          GA4 is loaded directly above. To use GTM again, publish tags in the container and render
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} /> here instead of the direct GA4
          tag (never both — that double-counts every event).
        */}
      </body>
    </html>
  )
}
