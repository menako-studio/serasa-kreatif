'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
}

export default function Hero({
  title = 'AGENSI KREATIF INDEPENDEN UNTUK ERA DIGITAL',
  subtitle = 'Kami menciptakan merek yang kuat dan kampanye yang berdampak untuk UMKM Indonesia',
  primaryCTA = { text: 'Minta Proposal', href: '/contact' },
  secondaryCTA = { text: 'Lihat Portofolio', href: '/work' },
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white pt-32 pb-20">
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-6xl">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            <h1 className="font-display font-black text-white max-w-5xl animate-fade-in uppercase">
              {title}
            </h1>
            
            {/* Red accent box like R/GA */}
            <div className="w-48 h-48 bg-red-600" />
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl animate-slide-up animation-delay-200">
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
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-white"
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
