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
import CreativeReels from '@/components/CreativeReels'
import CaseStudiesShowcase from '@/components/CaseStudiesShowcase'
import Link from 'next/link'
import { services } from '@/lib/copy-en'

// Import case studies data
import { caseStudies } from '@/lib/case-data'

// Work showcase data - featured cases
const workShowcase = caseStudies.slice(0, 4).map((study) => ({
  slug: study.slug,
  title: study.client,
  category: study.category,
  image: study.image,
  description: study.description,
}))

// News data
const newsData = [
  {
    category: 'INSIGHTS',
    title: 'SME Branding Trends 2025',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
  },
  {
    category: 'PROJECT',
    title: 'Successful Digital Campaign',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
  },
  {
    category: 'CULTURE',
    title: 'Behind Serasa Activities',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
  },
  {
    category: 'ANNOUNCEMENT',
    title: 'New Collaboration 2025',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
  },
]

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

// Creative Reels data - extracted from case studies
const creativeReels = caseStudies
  .filter((study) => study.instagramLinks && study.instagramLinks.length > 0)
  .flatMap((study) =>
    study.instagramLinks.map((url) => ({
      url,
      client: study.client,
      title: study.title,
    }))
  )

export default function HomePage() {
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
            <SectionHeading>Trusted by these IMPACTFUL brands</SectionHeading>
          </div>
          <WorkGrid works={workShowcase} />
          <div className="mt-8 text-right">
            <PrimaryButton href="/portfolio">VIEW ALL WORK</PrimaryButton>
          </div>
        </div>
      </section>

      {/* Creative Reels Section */}
      {/* <CreativeReels reels={creativeReels} /> */}

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

      {/* Case Studies Section */}
      {/* <CaseStudiesShowcase studies={caseStudies} /> */}

      {/* Client Logos */}
      <ClientLogos />

      {/* NEWS Section */}
      {/* <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>NEWS</SectionHeading>
          </div>
          <NewsGrid news={newsData} />
          <div className="mt-12 text-right">
            <TextLink href="/blog" className="font-bold no-underline uppercase hover:text-accent">
              SEE MORE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </section> */}

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

// Helper components (must be outside HomePage)

function WorkGrid({ works }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      {works.map((work) => (
        <WorkCard key={work.slug} work={work} />
      ))}
    </div>
  )
}

function NewsGrid({ news }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {news.map((item, idx) => (
        <NewsCard key={idx} news={item} />
      ))}
    </div>
  )
}

// Helper components (must be outside HomePage)

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
