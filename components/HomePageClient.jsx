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

export default function HomePageClient({ lang }) {
  const { language, dict } = useLanguage()
  const [openAccordion, setOpenAccordion] = useState(null)

  const activeLang = lang || language
  const isIndo = activeLang === 'id'

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
              className="border-white bg-white text-primary hover:text-white"
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
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{label}</div>
      {href ? (
        <Link
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="hover:text-brand-pink text-lg text-primary underline transition-colors"
        >
          {value}
        </Link>
      ) : (
        <div className="text-lg text-primary">{value}</div>
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
