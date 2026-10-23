'use client'
import { useState } from 'react'
import Hero from '@/components/Hero'
import ClientLogos from '@/components/ClientLogos'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import WorkCard from '@/components/WorkCard'
import ServiceAccordionItem from '@/components/ServiceAccordionItem'
import PrimaryButton from '@/components/PrimaryButton'
import Link from 'next/link'
import VideoShowcase from '@/components/VideoShowcase'
import { caseStudies } from '@/lib/case-data'
import { useLanguage } from '@/components/LanguageContext'

// Work showcase data - featured cases
const workShowcase = caseStudies.slice(0, 4).map((study) => ({
  slug: study.slug,
  title: study.client,
  category: study.category,
  image: study.image,
  description: study.description,
}))

// Internal links to the SEO landing page + articles. These pages previously had no inbound links
// from the nav, footer or homepage, so crawlers could only discover them through the sitemap.
const guideLinks = [
  {
    href: '/agensi-kreatif-bintaro',
    id: {
      title: 'Agensi Kreatif Bintaro & Tangerang Selatan',
      desc: 'Layanan kami untuk bisnis di Bintaro dan Jabodetabek.',
    },
    en: {
      title: 'Creative Agency in Bintaro & South Tangerang',
      desc: 'Our services for businesses in Bintaro and Greater Jakarta.',
    },
  },
  {
    href: '/blog/apa-itu-agensi-kreatif',
    id: {
      title: 'Apa Itu Agensi Kreatif?',
      desc: 'Fungsi, layanan, dan manfaatnya untuk pertumbuhan bisnis.',
    },
    en: {
      title: 'What Is a Creative Agency?',
      desc: 'Functions, services, and benefits for business growth (Indonesian).',
    },
  },
  {
    href: '/blog/jasa-social-media-management-jakarta',
    id: {
      title: 'Jasa Social Media Management Jakarta',
      desc: 'Lingkup kerja, komponen harga, dan cara memilih agensi.',
    },
    en: {
      title: 'Social Media Management in Jakarta',
      desc: 'Scope of work, pricing components, and how to choose (Indonesian).',
    },
  },
  {
    href: '/blog/cara-memilih-agensi-sosial-media',
    id: {
      title: '7 Tips Memilih Agensi Sosial Media',
      desc: 'Kriteria penting agar tidak salah pilih partner pemasaran.',
    },
    en: {
      title: '7 Tips for Choosing a Social Media Agency',
      desc: 'Key criteria for choosing a marketing partner (Indonesian).',
    },
  },
]

export default function HomePageClient() {
  const { language, dict } = useLanguage()
  const [openAccordion, setOpenAccordion] = useState(null)

  const isIndo = language === 'id'

  const currentDict = dict || {}
  const servicesData = currentDict.services || {}
  const portfolioData = currentDict.portfolio || {}
  const contactData = currentDict.contact || {}

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  // Contact information data localized
  const contactInfo = [
    {
      label: contactData.locationLabel || 'LOCATION',
      value: contactData.locationValue || 'Bintaro, South Tangerang',
      href: 'https://maps.app.goo.gl/f3Avw7DGNYniCCST6',
      isExternal: true,
    },
    {
      label: contactData.emailLabel || 'EMAIL',
      value: contactData.emailValue || 'serasakreatif.id@gmail.com',
      href: 'mailto:serasakreatif.id@gmail.com',
      isExternal: false,
    },
    {
      label: isIndo ? 'INSTAGRAM' : 'INSTAGRAM',
      value: '@serasakreatif.id',
      href: 'https://www.instagram.com/serasakreatif.id/',
      isExternal: true,
    },
  ]

  return (
    <>
      <Hero />

      {/* Client Logos */}
      <ClientLogos />

      {/* PORTFOLIO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex items-center justify-between">
            <SectionHeading>{portfolioData.sectionHeadline || 'Selected Work'}</SectionHeading>
          </div>
          <WorkGrid works={workShowcase} />
          <div className="mt-8 text-right">
            <PrimaryButton href="/portfolio">
              {portfolioData.ctaViewAll || 'VIEW ALL WORK'}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* WHAT WE DO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>{servicesData.sectionHeadline || 'WHAT WE DO'}</SectionHeading>
            <SectionDescription className="text-gray-900">
              {servicesData.sectionIntro || servicesData.sectionSubhead}
            </SectionDescription>
            <p className="text-brand-pink mt-4 text-sm">
              {isIndo ? 'Lihat bagaimana kami dapat membantu.' : 'See how we can help.'}
            </p>
          </div>
          <AccordionGrid
            items={servicesData.items || []}
            openIndex={openAccordion}
            onToggle={toggleAccordion}
            previewImages={workShowcase.map((w) => w.image)}
          />
        </div>
      </section>

      {/* Guides & local landing page — crawlable internal links (server-rendered in the HTML) */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-primary mb-8 font-sans text-2xl font-black uppercase tracking-tight md:text-3xl">
            {isIndo ? 'Panduan & Insight Agensi Kreatif' : 'Guides & Insights'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {guideLinks.map((item) => {
              const copy = isIndo ? item.id : item.en
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:border-primary group block border border-neutral-200 bg-white p-6 transition-colors"
                >
                  <h3 className="text-primary mb-2 font-sans text-lg font-bold group-hover:underline">
                    {copy.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{copy.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading>
              {isIndo ? 'Mencari Partner Kreatif?' : 'Looking for a Creative Partner?'}
            </SectionHeading>
            <SectionDescription className="mb-8 text-white">
              {isIndo ? 'Mari Tingkatkan Brand Anda.' : "Let's Elevate Your Brand."}
            </SectionDescription>
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              {contactInfo.map((item) => (
                <ContactInfoItem key={item.label} {...item} />
              ))}
            </div>
            <PrimaryButton
              href="/contact"
              className="text-primary border-white bg-white hover:text-white"
            >
              {contactData.ctaStartProject || "LET'S TALK"}
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper components

function WorkGrid({ works }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
      {works.map((work) => (
        <WorkCard key={work.slug} work={work} />
      ))}
    </div>
  )
}

function ContactInfoItem({ label, value, href, isExternal }) {
  return (
    <div>
      <div className="text-primary mb-2 text-xs font-bold uppercase tracking-wider">{label}</div>
      {href ? (
        <Link
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="hover:text-brand-pink text-primary text-lg underline transition-colors"
        >
          {value}
        </Link>
      ) : (
        <div className="text-primary text-lg">{value}</div>
      )}
    </div>
  )
}

function AccordionGrid({ items, openIndex, onToggle, previewImages }) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((service, i) => (
        <ServiceAccordionItem
          key={i}
          service={service}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => onToggle(i)}
          previewImage={previewImages[i % previewImages.length]}
          variant="light"
        />
      ))}
    </div>
  )
}
