'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import ServiceAccordionItem from '@/components/ServiceAccordionItem'
import PrimaryButton from '@/components/PrimaryButton'
import { servicesPage } from '@/lib/copy-id'

export default function ServicesPageClient() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="section-padding pb-20 pt-32 text-white">
        <div className="container-custom">
          <SectionHeading white className="mb-8 text-4xl md:text-5xl lg:text-6xl">
            {servicesPage.heroHeadline}
          </SectionHeading>
          <SectionDescription white className="max-w-4xl text-gray-300">
            {servicesPage.heroDescription}
          </SectionDescription>
        </div>
      </section>

      {/* Services List (Accordion) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>APA YANG KAMI LAKUKAN</SectionHeading>
            <SectionDescription>{servicesPage.servicesIntro}</SectionDescription>
            <p className="mt-4 text-sm text-gray-400">Lihat bagaimana kami dapat membantu.</p>
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
            <PrimaryButton href="/kontak">
              {servicesPage.ctaLearnMore || 'HUBUNGI KAMI'}
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding border-t border-white/10 bg-brand-teal py-20 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Siap Memulai?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl">
            Mari diskusikan bagaimana layanan kami dapat membantu merek Anda mencapai tujuannya.
          </p>

          <a
            href="/kontak"
            className="inline-flex items-center border-2 border-white px-8 py-4 font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  )
}
