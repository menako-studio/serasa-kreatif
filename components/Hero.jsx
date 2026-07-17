'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/components/LanguageContext'

export default function Hero() {
  const { language, dict } = useLanguage()
  const hero = dict?.hero || {}
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slides configuration
  const slides = [
    {
      type: 'mosaic',
    },
    {
      type: 'banner',
      client: 'BANDAR KARDUS',
      titleId: 'DARI NOL HINGGA 278K PENGUNJUNG ORGANIK',
      titleEn: 'FROM ZERO TO 278K ORGANIC VIEWS',
      tagId: 'Pertumbuhan Organik',
      tagEn: 'Organic Growth',
      categoryId: 'KAMPANYE MEDIA SOSIAL',
      categoryEn: 'SOCIAL MEDIA MARKETING',
      imageDesktop:
        '/assets/images/hero-banner/hero-serasa-bandarkardus-organic-growth-desktop.webp',
      imageMobile: '/assets/images/hero-banner/hero-serasa-bandarkardus-organic-growth-mobile.webp',
      link: '/portfolio/bandar-kardus',
      alt: 'Bandar Kardus Organic Growth Banner',
    },
    {
      type: 'banner',
      client: 'JAPO',
      titleId: 'MENINGKATKAN FREKUENSI PEMBELIAN HINGGA 400%',
      titleEn: 'BOOSTING PURCHASE FREQUENCY BY 400%',
      tagId: 'Transformasi B2B',
      tagEn: 'B2B Transformation',
      categoryId: 'PEMASARAN DIGITAL B2B',
      categoryEn: 'B2B DIGITAL MARKETING',
      imageDesktop: '/assets/images/hero-banner/hero-serasa-japo-powderdrink-revenue-desktop.webp',
      imageMobile: '/assets/images/hero-banner/hero-serasa-japo-powderdrink-revenue-mobile.webp',
      link: '/portfolio/japo',
      alt: 'Japo B2B Revenue Growth Banner',
    },
    {
      type: 'banner',
      client: 'JAPO (ALT)',
      titleId: 'OPTIMALISASI ADS & AKTIVASI BOOTH PENJUALAN',
      titleEn: 'ADS OPTIMIZATION & BOOTH SALES ACTIVATION',
      tagId: 'Skala Pendapatan',
      tagEn: 'Revenue Scaling',
      categoryId: 'STRATEGI PEMASARAN DIGITAL',
      categoryEn: 'DIGITAL MARKETING STRATEGY',
      imageDesktop:
        '/assets/images/hero-banner/hero-serasa-japo-powderdrink-revenue-desktop-alt.webp',
      imageMobile:
        '/assets/images/hero-banner/hero-serasa-japo-powderdrink-revenue-mobile-alt.webp',
      link: '/portfolio/japo',
      alt: 'Japo Creative Revenue Banner',
    },
    {
      type: 'banner',
      client: 'PREGNANSIA',
      titleId: 'TINGKAT PENUTUPAN 50% MELALUI KAMPANYE HYPERLOCAL',
      titleEn: '50% CLOSING RATE VIA HYPERLOCAL ADS',
      tagId: 'Pemasaran Hyperlocal',
      tagEn: 'Hyperlocal Marketing',
      categoryId: 'PEMASARAN DIGITAL & MEDIA SOSIAL',
      categoryEn: 'DIGITAL MARKETING & SOCIAL MEDIA',
      imageDesktop:
        '/assets/images/hero-banner/hero-serasa-pregnansia-babywellness-hyperlocal-desktop.webp',
      imageMobile:
        '/assets/images/hero-banner/hero-serasa-pregnansia-babywellness-hyperlocal-mobile.webp',
      link: '/portfolio/pregnansia',
      alt: 'Pregnansia Hyperlocal Ads Banner',
    },
  ]

  const totalSlides = slides.length

  // Auto slide effect - resets interval on slide change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide, totalSlides])

  // Mosaic hook items mapping to respective banner slide indices
  const mosaicItems = [
    {
      slideIndex: 4,
      image: '/assets/images/thumbnail/Thumbnail-Pregnansia.webp',
      alt: 'Pregnansia - Hyperlocal Wellness Campaign',
      client: 'PREGNANSIA',
      tag: language === 'id' ? 'Kampanye Hyperlocal' : 'Hyperlocal Campaign',
      className: 'col-span-8 row-span-2 md:col-span-4 md:row-span-2',
      aspect: 'aspect-[4/3]',
      sizes: '(max-width: 768px) 100vw, 50vw',
      priority: true,
    },
    {
      slideIndex: 1,
      image: '/assets/images/thumbnail/Thumbnail-Bandar-Kardus.webp',
      alt: 'Bandar Kardus - Organic Growth Campaign',
      client: 'BANDAR KARDUS',
      tag: language === 'id' ? 'Pertumbuhan Organik' : 'Organic Growth',
      className: 'col-span-4 md:col-span-2',
      aspect: 'aspect-[4/3]',
      sizes: '(max-width: 768px) 50vw, 25vw',
      priority: false,
    },
    {
      slideIndex: 2,
      image: '/assets/images/thumbnail/Thumbnail-JAPO.webp',
      alt: 'JAPO - B2B Digital Transformation',
      client: 'JAPO',
      tag: language === 'id' ? 'Transformasi Digital B2B' : 'B2B Digital Transformation',
      className: 'col-span-4 md:col-span-2',
      aspect: 'aspect-[4/3]',
      sizes: '(max-width: 768px) 50vw, 25vw',
      priority: false,
    },
    {
      slideIndex: 3,
      image: '/assets/images/hero-banner/hero-serasa-japo-powderdrink-revenue-desktop-alt.webp',
      alt: 'JAPO - Revenue Scaling Campaign',
      client: 'JAPO (ALT)',
      tag: language === 'id' ? 'Skala Pendapatan' : 'Revenue Scaling',
      className: 'col-span-4 md:col-span-2',
      aspect: 'aspect-[4/3]',
      sizes: '(max-width: 768px) 50vw, 25vw',
      priority: false,
    },
  ]

  const activeSlide = slides[currentSlide]

  return (
    <section className="relative h-auto min-h-[95vh] w-full overflow-hidden bg-primary text-white md:h-screen md:min-h-[800px]">
      <AnimatePresence mode="wait">
        {currentSlide === 0 ? (
          <motion.div
            key="slide-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex h-auto w-full items-center pb-12 pt-28 lg:absolute lg:inset-0 lg:h-full lg:py-0 lg:pt-40"
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
                <div className="scrollbar-none mb-6 flex flex-nowrap items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 font-mono text-xs font-semibold tracking-wider md:text-sm">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="group flex items-center gap-2 focus:outline-none"
                    >
                      <span
                        className={
                          currentSlide === index
                            ? 'font-bold text-white'
                            : 'text-white/40 transition-colors group-hover:text-white/80'
                        }
                      >
                        {`0${index + 1}`}
                      </span>
                      {currentSlide === index && (
                        <div className="relative h-[2px] w-8 overflow-hidden rounded-full bg-white/20 md:w-12">
                          <motion.div
                            key={currentSlide}
                            initial={{ x: '-100%' }}
                            animate={{ x: '0%' }}
                            transition={{ duration: 6, ease: 'linear' }}
                            className="absolute inset-0 bg-white"
                          />
                        </div>
                      )}
                    </button>
                  ))}
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

              {/* Mosaic Grid Hook */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-8 gap-2 md:gap-3"
              >
                {mosaicItems.map((item) => (
                  <div
                    key={item.slideIndex}
                    className={`${item.className} group cursor-pointer`}
                    onClick={() => setCurrentSlide(item.slideIndex)}
                  >
                    <div
                      className={`relative ${item.aspect} overflow-hidden rounded-xl border border-white/5 bg-neutral-900`}
                    >
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={item.sizes}
                        priority={item.priority}
                        quality={100}
                      />
                      {/* Gradient Overlay & Content on Hover */}
                      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-4">
                        <span className="mb-1 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand-teal">
                          {item.tag}
                        </span>
                        <h4 className="text-xs font-black uppercase leading-tight tracking-tight text-white md:text-sm">
                          {item.client}
                        </h4>
                        <span className="mt-1 flex items-center gap-1 text-[10px] text-white/60">
                          {language === 'id' ? 'Lihat Slide →' : 'View Slide →'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Beige text block linking to Portfolio */}
                <div className="col-span-4 md:col-span-2">
                  <Link href="/portfolio" className="group block h-full">
                    <div className="hover:bg-brand-pink group-hover:bg-brand-pink relative flex aspect-[4/3] h-full items-center justify-center rounded-xl bg-amber-50 p-6 transition-all duration-300">
                      <div className="text-center">
                        <p className="font-sans text-xs font-black uppercase tracking-wider text-primary transition-colors duration-300 group-hover:text-white md:text-sm">
                          {language === 'id' ? 'Semua Proyek' : 'All Projects'}
                        </p>
                        <span className="mt-1 block text-[10px] text-primary/60 transition-colors duration-300 group-hover:text-white/80">
                          {language === 'id' ? 'Lihat Portofolio →' : 'View Portfolio →'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`slide-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full"
          >
            {/* Background image Mobile */}
            <div className="absolute inset-0 block md:hidden">
              <Image
                src={activeSlide.imageMobile}
                alt={activeSlide.alt}
                fill
                className="animate-fade-in object-cover"
                priority
                quality={100}
              />
            </div>
            {/* Background image Desktop */}
            <div className="absolute inset-0 hidden md:block">
              <Image
                src={activeSlide.imageDesktop}
                alt={activeSlide.alt}
                fill
                className="animate-fade-in object-cover"
                priority
                quality={100}
              />
            </div>
            {/* Subtle Gradient Overlay at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom-left overlay text */}
            <div className="absolute bottom-12 left-6 z-20 max-w-2xl md:bottom-16 md:left-12 lg:left-16">
              {/* Slide Indicator in natural flow */}
              <div className="scrollbar-none mb-4 flex flex-nowrap items-center gap-3 overflow-x-auto whitespace-nowrap pb-1 font-mono text-xs font-semibold tracking-wider md:text-sm">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="group flex items-center gap-2 focus:outline-none"
                  >
                    <span
                      className={
                        currentSlide === index
                          ? 'font-bold text-white'
                          : 'text-white/40 transition-colors group-hover:text-white/80'
                      }
                    >
                      {`0${index + 1}`}
                    </span>
                    {currentSlide === index && (
                      <div className="relative h-[2px] w-8 overflow-hidden rounded-full bg-white/20 md:w-12">
                        <motion.div
                          key={currentSlide}
                          initial={{ x: '-100%' }}
                          animate={{ x: '0%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                          className="absolute inset-0 bg-white"
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <Link href={activeSlide.link} className="group inline-block">
                <div className="flex items-center gap-2">
                  <span className="text-brand-pink text-xs font-bold uppercase tracking-widest">
                    {language === 'id' ? activeSlide.tagId : activeSlide.tagEn} —{' '}
                    {language === 'id' ? activeSlide.categoryId : activeSlide.categoryEn}
                  </span>
                  <span className="bg-brand-pink h-[2px] w-6 rounded-full transition-all duration-300 group-hover:w-10" />
                </div>
                <h2 className="hover:text-brand-pink mt-3 text-2xl font-black uppercase leading-none tracking-tight text-white transition-colors duration-300 md:text-4xl lg:text-5xl">
                  {activeSlide.client} <br />
                  <span className="mt-2 block text-lg font-semibold normal-case text-white/85 md:text-2xl">
                    {language === 'id' ? activeSlide.titleId : activeSlide.titleEn}
                  </span>
                </h2>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
