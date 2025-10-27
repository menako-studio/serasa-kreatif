'use client'

import { useState } from 'react'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import ServiceAccordionItem from '@/components/ServiceAccordionItem'
import PrimaryButton from '@/components/PrimaryButton'
import { servicesPage } from '@/lib/copy-id'

export default function ServicesPage() {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-white section-padding">
        <div className="container-custom">
          <SectionHeading white className="mb-8 text-4xl md:text-5xl lg:text-6xl">
            {servicesPage.heroHeadline}
          </SectionHeading>
          <SectionDescription white className="max-w-4xl text-gray-300">{servicesPage.heroDescription}</SectionDescription>
        </div>
      </section>

      {/* Services List (Accordion) */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="mb-12">
            <SectionHeading>APA YANG KAMI LAKUKAN</SectionHeading>
            <SectionDescription>{servicesPage.servicesIntro}</SectionDescription>
            <p className="mt-4 text-sm text-gray-400">Lihat bagaimana kami dapat membantu.</p>
          </div>

          <div className="border-t border-gray-200 divide-y divide-gray-200">
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
      <section className="py-20 text-white bg-black border-t section-padding border-white/10">
        <div className="text-center container-custom">
          <h2 className="mb-6 text-4xl font-bold font-display md:text-5xl lg:text-6xl">
            Siap Memulai?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-400 md:text-xl">
            Mari diskusikan bagaimana layanan kami dapat membantu merek Anda mencapai tujuannya.
          </p>
          <PrimaryButton href="/kontak">HUBUNGI KAMI</PrimaryButton>
        </div>
      </section>
    </div>
  )
}
