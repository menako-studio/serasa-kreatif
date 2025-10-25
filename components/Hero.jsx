'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero({
  title = 'AGENSI KREATIF INDEPENDEN UNTUK ERA DIGITAL',
  subtitle = 'Kami menciptakan merek yang kuat dan kampanye yang berdampak untuk UMKM Indonesia',
  primaryCTA = { text: 'Minta Proposal', href: '/contact' },
  secondaryCTA = { text: 'Lihat Portofolio', href: '/work' },
}) {
  return (
    <section className="relative flex min-h-screen items-center bg-black pb-20 pt-32 text-white">
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-6xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h1 className="max-w-5xl animate-fade-in font-display font-black uppercase text-white">
              {title}
            </h1>

            {/* Red accent box like R/GA */}
            <div className="h-48 w-48 bg-red-600" />

            <p className="animation-delay-200 max-w-xl animate-slide-up text-xl leading-relaxed text-gray-300 md:text-2xl">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-8"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
