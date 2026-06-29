'use client'

import SectionHeading from './SectionHeading'
import CaseStudyCard from './CaseStudyCard'

export default function CaseStudiesShowcase({ studies = [] }) {
  if (!studies || studies.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading className="mb-16">OUR CASE STUDIES</SectionHeading>

        {/* Case Studies Grid */}
        <div className="space-y-6">
          {studies.map((study, idx) => (
            <CaseStudyCard key={idx} study={study} />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 border-t border-gray-200 pt-16 text-center">
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-600">
            Ready to create your success story? Let&apos;s work together to transform your brand and
            drive meaningful results.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-black px-8 py-3 font-bold uppercase text-black transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
          >
            Start Your Project
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
