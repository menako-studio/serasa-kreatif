'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function CreativeReels({ reels = [] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const autoPlayIntervalRef = useRef(null)

  // Auto-scroll carousel
  useEffect(() => {
    if (!isAutoPlay || reels.length === 0) return

    autoPlayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reels.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(autoPlayIntervalRef.current)
  }, [isAutoPlay, reels.length])

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reels.length) % reels.length)
    setIsAutoPlay(false)
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reels.length)
    setIsAutoPlay(false)
  }

  const handleDotClick = (index) => {
    setActiveIndex(index)
    setIsAutoPlay(false)
  }

  if (!reels || reels.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading className="mb-16">CREATIVE DIRECTING & VIDEO PRODUCTION</SectionHeading>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="flex-shrink-0 border border-black p-3 transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
              aria-label="Previous reel"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Carousel Content */}
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="w-full max-w-sm"
                  >
                    {/* Instagram Embed Container */}
                    <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                      <iframe
                        src={`${reels[activeIndex].url}embed`}
                        width="100%"
                        height="100%"
                        className="h-full w-full"
                        title={`Reel from ${reels[activeIndex].client}`}
                        allowFullScreen
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex-shrink-0 border border-black p-3 transition-all duration-300 hover:bg-black hover:text-white active:scale-95"
              aria-label="Next reel"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Reel Info */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-600">
              {reels[activeIndex].client}
            </p>
            <p className="mt-2 text-lg text-black">{reels[activeIndex].title}</p>
          </motion.div>

          {/* Navigation Dots */}
          <div className="mt-12 flex items-center justify-center gap-2">
            {reels.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex
                    ? 'h-2 w-8 bg-black'
                    : 'h-2 w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to reel ${index + 1}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`text-xs font-medium uppercase tracking-widest transition-colors ${
                isAutoPlay ? 'text-black' : 'text-gray-400'
              }`}
            >
              {isAutoPlay ? '⏸' : '▶'} Auto-play
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
