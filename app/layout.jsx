import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StickyWhatsApp from '@/components/StickyWhatsApp'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Serasa Kreatif — Creative Agency Indonesia',
    template: '%s | Serasa Kreatif',
  },
  description:
    'Studio kreatif yang menggabungkan strategi dan estetika untuk hasil yang nyata. Brand design, digital campaign, dan social media untuk bisnis Indonesia.',
  keywords: [
    'creative agency indonesia',
    'brand design',
    'social media management',
    'digital marketing',
    'creative studio jakarta',
    'branding agency',
    'Bintaro',
    'Tangerang Selatan',
  ],
  authors: [{ name: 'Serasa Kreatif' }],
  creator: 'Serasa Kreatif',
  publisher: 'Serasa Kreatif',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://serasakreatif.id',
    siteName: 'Serasa Kreatif',
    title: 'Serasa Kreatif | Digital Branding & Social Media Agency',
    description:
      'Transform your brand with creative campaigns and data-driven insights. From thinking to creating.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Serasa Kreatif',
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
    title: 'Serasa Kreatif | Digital Branding & Social Media Agency',
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
    <html lang="id" className={inter.variable}>
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  )
}
