'use client'

import { useState } from 'react'

export default function PortfolioVideoGrid({ videos = [] }) {
  const [mutedStates, setMutedStates] = useState(new Array(videos.length).fill(true))

  const toggleMute = (index) => {
    setMutedStates((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  if (!videos || videos.length === 0) return null

  // Layout container classes based on number of videos
  const containerClass =
    videos.length === 1
      ? 'max-w-[380px] md:max-w-[420px] mx-auto px-4'
      : 'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto px-4'

  return (
    <section className="bg-white py-12 md:py-20">
      <div className={containerClass}>
        {videos.map((src, index) => (
          <div
            key={src + index}
            className="group relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-2xl border border-gray-100 bg-black shadow-xl transition-all duration-300 hover:shadow-2xl"
          >
            {/* Video element */}
            <video
              src={src}
              autoPlay
              loop
              playsInline
              muted={mutedStates[index]}
              className="h-full w-full object-cover"
            />

            {/* Mute/Unmute toggle button */}
            <button
              onClick={() => toggleMute(index)}
              className="absolute bottom-6 right-6 z-20 rounded-full border border-white/10 bg-black/60 p-3 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-black active:scale-95"
              title={mutedStates[index] ? 'Unmute video' : 'Mute video'}
            >
              {mutedStates[index] ? (
                // Muted Icon
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                // Unmuted Icon
                <svg
                  className="h-5 w-5 text-brand-teal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
