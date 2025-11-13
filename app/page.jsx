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
import { services } from '@/lib/copy-en'

// Work showcase data with Unsplash images
const workShowcase = [
  {
    slug: 'japo-brand-identity',
    title: 'JAPO',
    category: 'Branding & Social Media',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    description: 'Modern brand identity for local fashion brand',
  },
  {
    slug: 'pregnasia-spa-social',
    title: 'PREGNASIA SPA',
    category: 'Social Media Management',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    description: 'Wellness & spa content strategy',
  },
  {
    slug: 'local-brand-refresh',
    title: 'ANDROID',
    category: 'Digital Campaign',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    description: 'Digital campaign for tech brand',
  },
  {
    slug: 'fnb-campaign',
    title: 'F&B BRAND',
    category: 'Brand Refresh',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    description: 'Modern culinary identity refresh',
  },
]

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
            <SectionHeading>PORTFOLIO</SectionHeading>
          </div>
          <WorkGrid works={workShowcase} />
          <div className="mt-8 text-right">
            <PrimaryButton href="/portfolio">VIEW ALL WORK</PrimaryButton>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>WHAT WE DO</SectionHeading>
            <SectionDescription className="text-gray-900">
              {services.sectionIntro || services.sectionSubhead}
            </SectionDescription>
            <p className="mt-4 text-sm text-gray-900">See how we can help.</p>
          </div>
          <AccordionGrid
            items={services.items}
            openIndex={openAccordion}
            onToggle={toggleAccordion}
            previewImages={workShowcase.map((w) => w.image)}
          />
          <div className="mt-8">
            <TextLink href="/contact">{services.ctaLearnMore}</TextLink>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* NEWS Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>NEWS</SectionHeading>
          </div>
          <NewsGrid news={newsData} />
          <div className="mt-12 text-right">
            <TextLink href="/blog" className="font-bold uppercase no-underline hover:text-accent">
              SEE MORE
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
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <SectionHeading className="mb-12">Join Serasa Kreatif</SectionHeading>
            <div className="mb-16 grid gap-8 md:grid-cols-3">
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  LOCATION
                </div>
                <div className="text-lg text-primary">Bintaro, South Tangerang</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  EMAIL
                </div>
                <div className="text-lg text-primary">serasakreatif.id@gmail.com</div>
              </div>
              <div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  INSTAGRAM
                </div>
                <div className="text-lg text-primary">@serasakreatif.id</div>
              </div>
            </div>
            <PrimaryButton
              href="/contact"
              className="border-white bg-white text-black hover:bg-accent hover:text-white"
            >
              START PROJECT
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
