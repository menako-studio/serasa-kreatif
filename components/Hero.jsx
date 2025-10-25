'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero({
  title = 'AGENSI KREATIF INDEPENDEN UNTUK ERA DIGITAL',
  subtitle = 'Kami menciptakan merek yang kuat dan kampanye yang berdampak untuk UMKM Indonesia (fast-refresh test)',
  primaryCTA = { text: 'Minta Proposal', href: '/contact' },
  secondaryCTA = { text: 'Lihat Portofolio', href: '/work' },
}) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-near-black pb-20 pt-32 text-white">
      {/* Decorative infinity symbol */}
      <div className="absolute right-10 top-20 h-64 w-64 opacity-5">
        <svg viewBox="0 0 200 100" className="h-full w-full">
          <path
            d="M50,50 Q20,20 50,50 T100,50 Q130,80 100,50 T50,50"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-accent-cyan"
          />
        </svg>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-6xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Small label */}
            <div className="inline-block rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-6 py-2">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent-cyan">
                Creative Agency Bintaro
              </span>
            </div>

            <h1 className="max-w-5xl animate-fade-in font-display font-black text-white">
              {title}
            </h1>

            {/* Cyan accent bar - different from RGA's red square */}
            <div className="flex items-center gap-4">
              <div className="h-2 w-24 rounded-full bg-gradient-to-r from-accent-cyan to-transparent" />
              <div className="h-2 w-12 rounded-full bg-gradient-to-r from-accent-cyan to-transparent" />
            </div>

            <p className="animation-delay-200 max-w-2xl animate-slide-up text-xl leading-relaxed text-gray-300 md:text-2xl">
              {subtitle}
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col gap-4 pt-4 sm:flex-row"
            >
              <Link
                href={primaryCTA.href}
                className="btn bg-accent-cyan font-bold text-near-black shadow-lg shadow-accent-cyan/20 hover:scale-105 hover:bg-opacity-90"
              >
                {primaryCTA.text}
              </Link>
              <Link
                href={secondaryCTA.href}
                className="btn border-2 border-white/30 text-white hover:border-white hover:bg-white/10"
              >
                {secondaryCTA.text}
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-8"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-gray-400">Scroll</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                className="h-6 w-6 text-accent-cyan"
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
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
