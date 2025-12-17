'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { hero } from '@/lib/copy-en'

export default function Hero() {
  return (
    <section className="relative bg-primary pb-12 pt-32 text-white md:pb-20 md:pt-40 lg:pt-44">
      <div className="container-custom">
        {/* Hero headline - R/GA style: massive, tight, uppercase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h1 className="font-sans text-[2.75rem] font-black uppercase leading-[0.9] tracking-tighter md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]">
            {hero.headline}
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-4 md:gap-6">
            <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
              {hero.subhead}
            </p>
          </div>
        </motion.div>

        {/* Mosaic Grid - R/GA style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-8 gap-2 md:gap-3"
        >
          {/* Large image left */}
          <div className="col-span-8 row-span-2 md:col-span-4 md:row-span-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-red-600">
              <Image
                src="/assets/images/portfolio/jobstreet.webp"
                alt="karya kreatif"
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
            <div className="relative aspect-[4/3] overflow-hidden bg-blue-600">
              <Image
                src="/assets/images/portfolio/lazadafashion.webp"
                alt="karya kreatif"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={100}
              />
            </div>
          </div>

          <div className="col-span-4 md:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-green-600">
              <Image
                src="/assets/images/portfolio/sr12-web.webp"
                alt="karya kreatif"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={100}
              />
            </div>
          </div>

          {/* Bottom right image */}
          <div className="col-span-4 md:col-span-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-purple-600">
              <Image
                src="/assets/images/portfolio/sharp-indonesia.webp"
                alt="karya kreatif"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={100}
              />
            </div>
          </div>

          {/* Beige text block */}
          <div className="col-span-4 md:col-span-2">
            <div className="relative flex aspect-[4/3] items-center justify-center bg-amber-50 p-6">
              <div className="text-center">
                <p className="font-sans text-sm font-black uppercase text-black md:text-base">
                  New Projects
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
