'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'
import SectionDescription from './SectionDescription'
import Image from 'next/image'

const showcaseVideos = [
  {
    id: 'HQVQKvZvwLQ',
    title: 'Company Profile Manna Panna',
    description: 'High-quality brand storytelling highlighting culinary excellence and operations.',
    category: 'COMPANY PROFILE',
    thumbnail: 'https://img.youtube.com/vi/HQVQKvZvwLQ/maxresdefault.jpg',
  },
  {
    id: 'srfuYzYIECY',
    title: '2nd Anniversary Jobstreet Express',
    description: 'Creative anniversary event recap and brand milestone campaign video.',
    category: 'EVENT CAMPAIGN',
    thumbnail: 'https://img.youtube.com/vi/srfuYzYIECY/maxresdefault.jpg',
  },
  {
    id: 'tfxyoAwjQL0',
    title: 'TVC BNI Wondr',
    description:
      '15-second television commercial for BNI Wondr featuring QRIS transaction benefits.',
    category: 'TV COMMERCIAL (TVC)',
    thumbnail: 'https://img.youtube.com/vi/tfxyoAwjQL0/maxresdefault.jpg',
  },
]

export default function VideoShowcase() {
  const [activeVideoId, setActiveVideoId] = useState(null)

  return (
    <section className="section-padding relative overflow-hidden bg-primary-dark text-white">
      {/* Dynamic Background Accents */}
      <div className="absolute right-0 top-0 -mr-64 -mt-64 h-96 w-96 rounded-full bg-brand-teal/10 blur-3xl" />
      <div className="bg-brand-pink/10 absolute bottom-0 left-0 -mb-64 -ml-64 h-96 w-96 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl text-center md:text-left">
          <span className="mb-3 block text-xs font-black uppercase tracking-[0.25em] text-brand-teal">
            Creative Directing & Video Production
          </span>
          <SectionHeading white>VIDEO SHOWCASE</SectionHeading>
          <SectionDescription className="mt-4 text-white/70">
            We craft visual stories that capture attention, convey messages, and drive engagement.
            From corporate profiles to high-energy commercials.
          </SectionDescription>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {showcaseVideos.map((video) => {
            const isPlaying = activeVideoId === video.id

            return (
              <div
                key={video.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-primary/40 transition-all duration-300 hover:border-brand-teal hover:shadow-[0_0_30px_rgba(0,214,182,0.15)]"
              >
                {/* Media Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <AnimatePresence mode="wait">
                    {!isPlaying ? (
                      <motion.button
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setActiveVideoId(video.id)}
                        className="group/btn absolute inset-0 h-full w-full focus:outline-none"
                      >
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={90}
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover/btn:bg-black/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-primary shadow-lg transition-transform duration-300 group-hover/btn:scale-110 group-hover/btn:bg-brand-accent">
                            <svg
                              className="h-8 w-8 translate-x-0.5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </motion.button>
                    ) : (
                      <motion.div
                        key="iframe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full w-full"
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=0&rel=0`}
                          title={video.title}
                          className="h-full w-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Details Container */}
                <div className="flex flex-grow flex-col justify-between p-6">
                  <div>
                    <span className="text-brand-pink mb-2 block text-xs font-bold uppercase tracking-wider">
                      {video.category}
                    </span>
                    <h3 className="font-sans text-lg font-black uppercase tracking-tight text-white transition-colors duration-300 group-hover:text-brand-teal">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-white/70">
                      {video.description}
                    </p>
                  </div>

                  {/* Watch on YouTube Link */}
                  <div className="mt-6 flex justify-end border-t border-white/5 pt-4">
                    <a
                      href={`https://youtu.be/${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-brand-teal transition-colors duration-200 hover:text-brand-accent"
                    >
                      <span>Watch on YouTube</span>
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
