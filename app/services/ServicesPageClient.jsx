'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import ServiceAccordionItem from '@/components/ServiceAccordionItem'
import PrimaryButton from '@/components/PrimaryButton'
import { servicesPage } from '@/lib/copy-en'

export default function ServicesPageClient() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="section-padding pb-20 pt-32 text-white">
        <div className="container-custom">
          <SectionHeading white className="mb-8 text-4xl md:text-5xl lg:text-6xl">
            We blend strategy and storytelling to create digital experiences that drive sales and
            growth.
          </SectionHeading>
        </div>
      </section>

      {/* Services List (Accordion) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>WHAT WE DO</SectionHeading>
            <SectionDescription>{servicesPage.servicesIntro}</SectionDescription>
            <p className="mt-4 text-sm text-gray-400">See how we can help.</p>
          </div>

          <div className="divide-y divide-gray-200 border-t border-gray-200">
            {servicesPage.items.map((service, i) => (
              <ServiceAccordionItem
                key={service.title + i}
                index={i}
                service={service}
                isOpen={openAccordion === i}
                onToggle={() => toggleAccordion(i)}
                previewImage={service.preview}
                variant="light"
              />
            ))}
          </div>

          <div className="mt-8">
            <PrimaryButton href="/contact">
              {servicesPage.ctaLearnMore || 'CONTACT US'}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-white/10 bg-brand-teal py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display mb-6 text-4xl font-bold text-primary md:text-5xl lg:text-6xl">
            Ready to Start?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary md:text-xl">
            Let&apos;s discuss how our services can help your brand achieve its goals.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center border-2 border-primary px-8 py-4 font-bold uppercase text-primary transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}
