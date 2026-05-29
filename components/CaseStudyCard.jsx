'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function CaseStudyCard({ study }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const services = Array.isArray(study.tags) ? study.tags.slice(0, 3) : []

  return (
    <motion.div
      className="border border-gray-200 transition-all duration-300 hover:border-black hover:shadow-lg"
      whileHover={{ y: -4 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Header */}
      <div className="cursor-pointer border-b border-gray-200 p-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <h3 className="mb-3 text-xl font-bold uppercase tracking-tight text-black">
              {study.client}
            </h3>
            <div className="mb-6 flex flex-wrap gap-2">
              {services.map((service, idx) => (
                <span
                  key={idx}
                  className="border border-gray-300 px-3 py-1 text-xs font-medium uppercase tracking-widest text-gray-700"
                >
                  {service}
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-gray-600">{study.description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="mt-1 flex-shrink-0"
          >
            <svg
              className="h-5 w-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gray-50 p-8">
              {/* Story Grid */}
              <div className="mb-8 grid gap-8 md:grid-cols-3">
                {/* Challenge */}
                <div className="border-l-2 border-black pl-6">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-600">
                    Challenge
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-800">{study.challenge}</p>
                </div>

                {/* Strategy */}
                <div className="border-l-2 border-black pl-6">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-600">
                    Strategy
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-800">{study.approach}</p>
                </div>

                {/* Impact */}
                <div className="border-l-2 border-brand-teal pl-6">
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-600">
                    Impact
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-800">{study.results}</p>
                </div>
              </div>

              {/* Metrics */}
              {study.metrics && study.metrics.length > 0 && (
                <div className="mb-8 border-t border-gray-300 pt-8">
                  <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-gray-600">
                    Key Metrics
                  </h4>
                  <div className="grid gap-6 md:grid-cols-4">
                    {study.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <p className="mb-2 text-2xl font-bold text-brand-teal">{metric.value}</p>
                        <p className="text-xs font-medium uppercase tracking-widest text-gray-600">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {study.instagramLinks && study.instagramLinks.length > 0 && (
                <div className="border-t border-gray-300 pt-8">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-600">
                    Video Content
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {study.instagramLinks.map((link, idx) => (
                      <Link
                        key={idx}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-black px-4 py-2 text-sm font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.011 4.85.07 1.366.062 2.633.338 3.608 1.313.975.975 1.251 2.242 1.313 3.608.059 1.266.07 1.646.07 4.85s-.011 3.584-.07 4.85c-.062 1.366-.338 2.633-1.313 3.608-.975.975-2.242 1.251-3.608 1.313-1.266.059-1.646.07-4.85.07s-3.584-.011-4.85-.07c-1.366-.062-2.633-.338-3.608-1.313-.975-.975-1.251-2.242-1.313-3.608-.059-1.266-.07-1.646-.07-4.85s.011-3.584.07-4.85c.062-1.366.338-2.633 1.313-3.608.975-.975 2.242-1.251 3.608-1.313 1.266-.059 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.058-2.447.431-3.728 1.713-1.281 1.281-1.655 2.447-1.713 3.728-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.058 1.281.431 2.447 1.713 3.728 1.281 1.281 2.447 1.655 3.728 1.713 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.058 2.447-.431 3.728-1.713 1.281-1.281 1.655-2.447 1.713-3.728.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.281-.431-2.447-1.713-3.728-1.281-1.281-2.447-1.655-3.728-1.713-1.28-.058-1.688-.072-4.947-.072z" />
                        </svg>
                        View Reel {idx + 1}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* View Full Case Study Link */}
              <div className="border-t border-gray-300 pt-8">
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold uppercase text-black transition-all duration-300 hover:border-brand-teal hover:text-brand-teal"
                >
                  View Full Case Study
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
