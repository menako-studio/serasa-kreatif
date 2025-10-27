'use client'
import { useState } from 'react'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import WorkCard from '@/components/WorkCard'
import NewsCard from '@/components/NewsCard'
import ServiceAccordionItem from '@/components/ServiceAccordionItem'
import PrimaryButton from '@/components/PrimaryButton'
import TextLink from '@/components/TextLink'
import { services, footer } from '@/lib/copy-id'

// Work showcase data with Unsplash images
const workShowcase = [
  {
    slug: 'japo-brand-identity',
    title: 'JAPO',
    category: 'Branding & Media Sosial',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    description: 'Identitas merek modern untuk brand fashion lokal',
  },
  {
    slug: 'pregnasia-spa-social',
    title: 'PREGNASIA SPA',
    category: 'Manajemen Media Sosial',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    description: 'Strategi konten wellness & spa',
  },
  {
    slug: 'local-brand-refresh',
    title: 'ANDROID',
    category: 'Kampanye Digital',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    description: 'Kampanye digital untuk tech brand',
  },
  {
    slug: 'fnb-campaign',
    title: 'F&B BRAND',
    category: 'Refresh Merek',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    description: 'Pembaruan identitas kuliner modern',
  },
]

// News data
const newsData = [
  {
    category: 'WAWASAN',
    title: 'Tren Branding UMKM 2025',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
  },
  {
    category: 'PROYEK',
    title: 'Kampanye Digital yang Sukses',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  },
  {
    category: 'BUDAYA',
    title: 'Di Balik Aktivitas Serasa',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  },
  {
    category: 'PENGUMUMAN',
    title: 'Kolaborasi Baru 2025',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
  },
]

export default function HomePage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <>
      <Hero />

      {/* PORTOFOLIO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex items-center justify-between">
            <SectionHeading>PORTOFOLIO</SectionHeading>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {workShowcase.map((work) => (
              <WorkCard key={work.slug} work={work} />
            ))}
          </div>

          <div className="mt-8 text-right">
            <PrimaryButton href="/portfolio">LIHAT SEMUA KARYA</PrimaryButton>
          </div>
        </div>
      </section>

      {/* APA YANG KAMI LAKUKAN Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>APA YANG KAMI LAKUKAN</SectionHeading>
            <SectionDescription>
              {services.sectionIntro || services.sectionSubhead}
            </SectionDescription>
            <p className="mt-4 text-sm text-gray-600">Lihat bagaimana kami dapat membantu.</p>
          </div>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {services.items.map((service, i) => (
              <ServiceAccordionItem
                key={i}
                service={service}
                index={i}
                isOpen={openAccordion === i}
                onToggle={() => toggleAccordion(i)}
                previewImage={workShowcase[i % workShowcase.length].image}
              />
            ))}
          </div>

          <div className="mt-8">
            <TextLink href="/kontak">{services.ctaLearnMore}</TextLink>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* BERITA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>BERITA</SectionHeading>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {newsData.map((news, index) => (
              <NewsCard key={index} news={news} />
            ))}
          </div>

          <div className="mt-12 text-right">
            <TextLink href="/blog" className="font-bold uppercase no-underline hover:text-accent">
              LIHAT LAINNYA
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </TextLink>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading className="mb-12 text-white">Gabung Serasa Kreatif</SectionHeading>

            <div className="mb-16 grid gap-8 md:grid-cols-3">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  LOKASI
                </div>
                <div className="text-lg">Bintaro, Tangerang Selatan</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  EMAIL
                </div>
                <div className="text-lg">hello@serasakreatif.id</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                  INSTAGRAM
                </div>
                <div className="text-lg">@serasakreatif.id</div>
              </div>
            </div>

            <PrimaryButton
              href="/kontak"
              className="border-white bg-white text-black hover:bg-accent hover:text-white"
            >
              MULAI PROYEK
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Footer Text - R/GA-style bold statement */}
      <section className="border-t border-gray-800 bg-black py-16 text-white">
        <div className="container-custom">
          <div className="font-sans text-3xl font-black uppercase leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
            {footer.copyright}
            <br />
            {footer.statement.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
