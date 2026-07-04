'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { hero } from '@/lib/copy-en'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0))
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-auto min-h-[95vh] w-full overflow-hidden bg-primary text-white md:h-screen md:min-h-[800px]">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="slide1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex h-auto w-full items-center pb-12 pt-28 lg:absolute lg:inset-0 lg:h-full lg:py-0 lg:pt-16"
          >
            <div className="container-custom w-full">
              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 md:mb-12"
              >
                {/* Slide Indicator in natural flow */}
                <div className="pointer-events-none mb-6 flex items-center gap-3 font-mono text-xs font-semibold tracking-wider md:text-sm">
                  <span className={currentSlide === 0 ? 'text-white' : 'text-white/40'}>01</span>
                  <div className="relative h-[2px] w-12 overflow-hidden rounded-full bg-white/20 md:w-16">
                    <motion.div
                      key={currentSlide}
                      initial={{ x: '-100%' }}
                      animate={{ x: '0%' }}
                      transition={{ duration: 6, ease: 'linear' }}
                      className="absolute inset-0 bg-white"
                    />
                  </div>
                  <span className={currentSlide === 1 ? 'text-white' : 'text-white/40'}>02</span>
                </div>

                <h1 className="font-sans text-[2.5rem] font-black uppercase leading-[0.9] tracking-tighter md:text-[4rem] lg:text-[5.5rem] xl:text-[7rem]">
                  {hero.headline}
                </h1>
                <div className="mt-6">
                  <p className="max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                    {hero.subhead}
                  </p>
                </div>
              </motion.div>

              {/* Mosaic Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-8 gap-2 md:gap-3"
              >
                {/* Large image left */}
                <div className="col-span-8 row-span-2 md:col-span-4 md:row-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-red-600">
                    <Image
                      src="/assets/images/portfolio/jobstreet.webp"
                      alt="Jobstreet Express 2nd Anniversary campaign by Serasa Kreatif"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                      quality={100}
                    />
                  </div>
                </div>

                {/* Small image top right */}
                <div className="col-span-4 md:col-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-blue-600">
                    <Image
                      src="/assets/images/portfolio/lazadafashion.webp"
                      alt="Lazada fashion creative campaign by Serasa Kreatif"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={100}
                    />
                  </div>
                </div>

                <div className="col-span-4 md:col-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-green-600">
                    <Image
                      src="/assets/images/portfolio/sr12-web.webp"
                      alt="SR12 skincare product video production by Serasa Kreatif"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={100}
                    />
                  </div>
                </div>

                {/* Bottom right image */}
                <div className="col-span-4 md:col-span-2">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-purple-600">
                    <Image
                      src="/assets/images/portfolio/sharp-indonesia.webp"
                      alt="Sharp Indonesia brand campaign by Serasa Kreatif"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                      quality={100}
                    />
                  </div>
                </div>

                {/* Beige text block */}
                <div className="col-span-4 md:col-span-2">
                  <div className="relative flex aspect-[4/3] items-center justify-center rounded-xl bg-amber-50 p-6">
                    <div className="text-center">
                      <p className="font-sans text-xs font-black uppercase tracking-wider text-primary md:text-sm">
                        New Projects
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="slide2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Background image */}
            <Image
              src="/assets/images/hero-banner/japo.webp"
              alt="Japo Banner"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            {/* Subtle Gradient Overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Bottom-left overlay text using Serasa global styling */}
            <div className="absolute bottom-12 left-6 z-20 max-w-lg md:bottom-16 md:left-12 lg:left-16">
              {/* Slide Indicator in natural flow */}
              <div className="pointer-events-none mb-4 flex items-center gap-3 font-mono text-xs font-semibold tracking-wider md:text-sm">
                <span className={currentSlide === 0 ? 'text-white' : 'text-white/40'}>01</span>
                <div className="relative h-[2px] w-12 overflow-hidden rounded-full bg-white/20 md:w-16">
                  <motion.div
                    key={currentSlide}
                    initial={{ x: '-100%' }}
                    animate={{ x: '0%' }}
                    transition={{ duration: 6, ease: 'linear' }}
                    className="absolute inset-0 bg-white"
                  />
                </div>
                <span className={currentSlide === 1 ? 'text-white' : 'text-white/40'}>02</span>
              </div>

              <Link href="/portfolio/japo" className="group inline-block">
                <div className="flex items-center gap-2">
                  <span className="text-brand-pink text-xs font-bold uppercase tracking-widest">
                    Featured Project
                  </span>
                  <span className="bg-brand-pink h-[2px] w-6 rounded-full transition-all duration-300 group-hover:w-10" />
                </div>
                <h2 className="hover:text-brand-pink mt-3 text-2xl font-black uppercase tracking-tight text-white transition-colors duration-300 md:text-3xl">
                  JAPO — The Golden Powder Drink Brand
                </h2>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
