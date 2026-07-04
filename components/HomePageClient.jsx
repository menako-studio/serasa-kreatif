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
import { services } from '@/lib/copy-en'
import VideoShowcase from '@/components/VideoShowcase'
import { caseStudies } from '@/lib/case-data'

// Work showcase data - featured cases
const workShowcase = caseStudies.slice(0, 4).map((study) => ({
  slug: study.slug,
  title: study.client,
  category: study.category,
  image: study.image,
  description: study.description,
}))

// Contact information data
const contactInfo = [
  {
    label: 'LOCATION',
    value: 'Bintaro, South Tangerang',
    href: 'https://maps.app.goo.gl/f3Avw7DGNYniCCST6',
    isExternal: true,
  },
  {
    label: 'EMAIL',
    value: 'serasakreatif.id@gmail.com',
    href: 'mailto:serasakreatif.id@gmail.com',
    isExternal: false,
  },
  {
    label: 'INSTAGRAM',
    value: '@serasakreatif.id',
    href: 'https://www.instagram.com/serasakreatif.id/',
    isExternal: true,
  },
]

export default function HomePageClient() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <>
      <Hero />

      {/* PORTFOLIO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 flex items-center justify-between">
            <SectionHeading>Selected Work</SectionHeading>
          </div>
          <WorkGrid works={workShowcase} />
          <div className="mt-8 text-right">
            <PrimaryButton href="/portfolio">VIEW ALL WORK</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <VideoShowcase />

      {/* WHAT WE DO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>WHAT WE DO</SectionHeading>
            <SectionDescription className="text-gray-900">
              {services.sectionIntro || services.sectionSubhead}
            </SectionDescription>
            <p className="text-brand-pink mt-4 text-sm">See how we can help.</p>
          </div>
          <AccordionGrid
            items={services.items}
            openIndex={openAccordion}
            onToggle={toggleAccordion}
            previewImages={workShowcase.map((w) => w.image)}
          />
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Join Section */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading>Looking for a Creative Partner?</SectionHeading>
            <SectionDescription className="mb-8 text-white">
              Let&apos;s Elevate Your Brand.
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
              LET&apos;S TALK
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
