import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import StickyWhatsApp from '@/components/StickyWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Serasa Kreatif | Digital Branding & Social Media Agency',
    template: '%s | Serasa Kreatif',
  },
  description:
    'Serasa Kreatif is a multidisciplinary digital branding and social media agency. We transform brands into irresistible forces with creative campaigns and data-driven insights.',
  keywords: [
    'branding agency',
    'social media management',
    'digital branding',
    'creative agency',
    'graphic design',
    'Bintaro',
    'Jakarta',
    'Indonesia',
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">
        <NavBar />
        <main>{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  )
}
