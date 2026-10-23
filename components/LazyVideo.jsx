'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Autoplaying, looping, muted-by-default video that does not download anything until it is near the
 * viewport. The portfolio/printing videos are 1.5–10 MB MP4s; as plain `<video autoPlay src>` every
 * one of them started downloading on page load, competing with the LCP image and hurting
 * LCP/TBT on mobile connections.
 */
export default function LazyVideo({ src, className, muted = true, rootMargin = '200px', ...rest }) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setActive(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  useEffect(() => {
    if (active && ref.current) {
      ref.current.play().catch(() => {
        // Autoplay can be blocked (e.g. data-saver); the video stays paused.
      })
    }
  }, [active])

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      preload="none"
      loop
      playsInline
      muted={muted}
      className={className}
      {...rest}
    />
  )
}
