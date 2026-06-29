'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

// SVG Icons for Metrics
const EyeIcon = () => (
  <svg
    className="h-6 w-6 text-emerald-600 md:h-8 md:w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const CommentIcon = () => (
  <svg
    className="h-6 w-6 text-emerald-600 md:h-8 md:w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    />
  </svg>
)

const RoasIcon = () => (
  <svg
    className="h-6 w-6 text-emerald-600 md:h-8 md:w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
)

const SalesIcon = () => (
  <svg
    className="h-6 w-6 text-emerald-600 md:h-8 md:w-8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12m0-4.5H17.25"
    />
  </svg>
)

export default function Hero() {
  const slide = {
    id: 'japo',
    slug: 'japo',
    client: 'JAPO POWDER DRINK',
    category: 'CASE STUDY',
    theme: {
      bg: 'bg-[#f4f7f5]',
      text: 'text-neutral-900',
      primaryGreen: '#137f44',
    },
    ctaText: 'See Japo Case Study',
    ctaLink: '/portfolio/japo',
    content: {
      titlePart1: 'Turning Content',
      titleCursive: 'Into',
      titlePart2: 'Revenue',
      badge: 'Social Media',
      bullets: ['Shopee Ads', 'Marketplace Growth'],
      description:
        'Helping brands achieve measurable growth through data-driven content, performance advertising, and marketplace optimization.',
    },
    metrics: [
      { value: '739K+', label: 'Instagram Reel Views', icon: <EyeIcon /> },
      { value: '654', label: 'Comments', icon: <CommentIcon /> },
      { value: '35x', label: 'Shopee ROAS', icon: <RoasIcon /> },
      { value: '100M+', label: 'Monthly Sales', icon: <SalesIcon /> },
    ],
  }

  return (
    <section
      className={`relative min-h-[92vh] w-full overflow-hidden ${slide.theme.bg} flex flex-col justify-between pb-12 pt-32`}
    >
      {/* Background Subtle Accent */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-3xl" />

      {/* Header Info */}
      <div className="container-custom z-10 flex items-center justify-between pt-4">
        <div className="flex items-center gap-4">
          <span className="rounded bg-emerald-100/80 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-800">
            {slide.client}
          </span>
          <span className="text-xs font-semibold tracking-wider text-neutral-500">
            {slide.category}
          </span>
        </div>
      </div>

      {/* Main Slide Content Area */}
      <div className="container-custom z-10 my-auto grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* LEFT COLUMN: Dynamic Text Layout */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Title Section */}
            <h1 className="font-sans text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
              {slide.content.titlePart1}
              <div className="my-1 flex items-center gap-3">
                <span className="-my-2 block pr-2 font-serif text-5xl font-light lowercase normal-case italic tracking-normal text-emerald-600 md:text-6xl lg:text-7xl">
                  {slide.content.titleCursive}
                </span>
                <span className="block text-5xl font-black text-emerald-600 md:text-6xl lg:text-7xl">
                  {slide.content.titlePart2}
                </span>
              </div>
            </h1>

            {/* Sub-badge & Bullet Points */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="rounded bg-emerald-800 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                {slide.content.badge}
              </span>
              <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-neutral-700">
                {slide.content.bullets.map((bullet, idx) => (
                  <span key={idx} className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-600" />
                    {bullet}
                  </span>
                ))}
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-neutral-600 md:text-base">
              {slide.content.description}
            </p>

            {/* CTA Action */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition duration-300 hover:bg-emerald-700"
              >
                {slide.ctaText}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-neutral-300 px-8 py-4 text-xs font-bold uppercase tracking-widest text-neutral-800 transition duration-300 hover:bg-neutral-100"
              >
                See Full Portfolio
              </Link>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Reconstructed Visual Mockups */}
        <div className="relative flex min-h-[380px] w-full select-none items-center justify-center md:min-h-[460px] lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative flex w-full items-center justify-center"
          >
            {/* Reconstructed Dynamic Japo Mockups */}
            <div className="relative flex h-[420px] w-full max-w-2xl items-center justify-center md:h-[480px]">
              {/* Left Tilted Card */}
              <div className="absolute left-[3%] top-[12%] z-10 flex aspect-[3/4] w-[150px] -rotate-6 flex-col justify-between overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900 p-4 shadow-2xl transition-transform duration-300 hover:-rotate-3 md:left-[8%] md:w-[190px]">
                <div className="flex items-center gap-1.5">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[8px] font-bold text-white">
                    J
                  </div>
                  <span className="text-[9px] font-semibold tracking-tight text-neutral-400">
                    japo.powderdrink
                  </span>
                </div>
                <div className="relative my-2 flex-grow overflow-hidden rounded-lg bg-neutral-800">
                  <Image
                    src="/assets/images/portfolio/japo-2.webp"
                    alt="Japo Business Content"
                    fill
                    className="object-cover opacity-90"
                  />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase leading-tight tracking-tight text-amber-400 md:text-xs">
                    BUKA USAHA ANOTHER LEVEL SEKARANG!
                  </h4>
                  <p className="mt-1 text-[8px] font-semibold leading-tight text-emerald-400">
                    Jangan sampai keduluan tetangga
                  </p>
                </div>
              </div>

              {/* Central Smartphone Mockup */}
              <div className="absolute z-20 aspect-[9/19] w-[190px] rounded-[36px] border-[5px] border-neutral-900 bg-black p-2.5 shadow-2xl md:w-[240px]">
                {/* Speaker Notch */}
                <div className="absolute left-1/2 top-3 z-30 flex h-4 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-black">
                  <div className="absolute right-4 h-1.5 w-1.5 rounded-full bg-neutral-800" />
                </div>
                {/* Screen Content */}
                <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[28px] bg-[#0a2215] p-3.5 pt-6 text-white">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-[9px] text-white/80">
                    <div className="flex items-center gap-1">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[7px] font-black text-white">
                        J
                      </div>
                      <span className="text-[8px] font-semibold">japo.powderdrink</span>
                    </div>
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                      />
                    </svg>
                  </div>

                  {/* Middle overlay video caption */}
                  <div className="my-auto flex flex-col gap-2">
                    <span className="inline-block self-start rounded bg-emerald-600/90 px-2 py-1 text-[9px] font-bold leading-tight text-white md:text-[10px]">
                      Supplier Matcha yang aman & terpercaya
                    </span>

                    <div className="backdrop-blur-xs rounded-lg border border-white/10 bg-black/40 p-2">
                      <p className="text-[8px] font-black uppercase tracking-wider text-emerald-300">
                        BISNIS MINUMAN
                      </p>
                      <p className="mt-0.5 text-[8px] font-semibold leading-tight text-white/95">
                        BUTUH SUPPLIER MATCHA YANG AMAN & TERPERCAYA?
                      </p>
                    </div>

                    <span className="mt-1 inline-block self-start rounded border border-emerald-400 bg-emerald-500/90 px-2 py-0.5 text-[8px] font-bold text-white hover:bg-emerald-600">
                      hubungi kami!
                    </span>
                  </div>

                  {/* Bottom Profile and Reel UI */}
                  <div className="mt-auto flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1">
                        <div className="h-3 w-3 rounded-full bg-emerald-500" />
                        <span className="text-[7px] font-bold">japo.powderdrink</span>
                      </div>
                      <span className="mt-0.5 block text-[6px] text-white/60">Add comment...</span>
                    </div>

                    {/* Interactive items overlay right */}
                    <div className="flex flex-col items-center gap-2 text-[8px]">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px]">❤️</span>
                        <span className="text-[6px] font-bold">Likes</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px]">💬</span>
                        <span className="text-[6px] font-bold">654</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-[10px]">↗️</span>
                        <span className="text-[6px] font-bold">540</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Tilted Card 1 (Coffee Bike) */}
              <div className="absolute right-[12%] top-[8%] z-10 flex aspect-[4/5] w-[130px] rotate-3 flex-col justify-between overflow-hidden rounded-2xl border border-emerald-800/50 bg-emerald-950 p-3.5 text-white shadow-2xl transition-transform duration-300 hover:rotate-0 md:right-[15%] md:w-[170px]">
                <div>
                  <p className="text-[8px] font-black uppercase tracking-wider text-emerald-400 md:text-[9px]">
                    TANPA MESIN MAHAL
                  </p>
                  <h4 className="mt-0.5 text-[10px] font-black uppercase leading-tight text-white md:text-xs">
                    BISA JUALAN KOPI KEKINIAN
                  </h4>
                  <p className="mt-1 text-[7px] leading-tight text-emerald-300/90">
                    Modal Tipis, Cuan manis dengan pilihan varian kopi
                  </p>
                </div>
                {/* Bike Graphic Placeholder */}
                <div className="relative my-2 flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-emerald-800 bg-emerald-900/60">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 to-emerald-900" />
                  <span className="text-[8px] font-black uppercase tracking-widest text-emerald-500/30">
                    BIKE DELIV
                  </span>
                  <div className="absolute bottom-1 rounded bg-red-600 px-1.5 py-0.5 text-[6px] font-bold uppercase leading-none text-white">
                    GRATIS BLACK COFFEE
                  </div>
                </div>
              </div>

              {/* Far Right Tilted Card 2 (Modal 2 Sendok) */}
              <div className="absolute right-[-4%] top-[20%] z-0 flex aspect-[4/5] w-[120px] rotate-6 flex-col justify-between overflow-hidden rounded-2xl border border-emerald-800/40 bg-emerald-900 p-3 text-white shadow-2xl transition-transform duration-300 hover:rotate-3 md:right-[0%] md:w-[155px]">
                <div>
                  <p className="text-[7px] font-black uppercase tracking-wider text-amber-300 md:text-[8px]">
                    MODAL 2 SENDOK JAPO
                  </p>
                  <h4 className="mt-0.5 text-[9px] font-black leading-tight text-white md:text-[10px]">
                    BISA UNTUNG RP15 RIBU
                  </h4>
                </div>
                {/* List Items */}
                <div className="my-1.5 space-y-1 text-[6px] text-neutral-200/95 md:text-[7px]">
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span>35 gr JAPO</span>
                    <span className="font-bold text-emerald-300">Rp1.995</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span>50 gr air</span>
                    <span className="font-bold text-emerald-300">Rp21</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span>1 set cup</span>
                    <span className="font-bold text-emerald-300">Rp500</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-0.5">
                    <span>150 gr es</span>
                    <span className="font-bold text-emerald-300">Rp167</span>
                  </div>
                  <div className="flex justify-between">
                    <span>100 gr susu</span>
                    <span className="font-bold text-emerald-300">Rp1.800</span>
                  </div>
                </div>
                <div className="rounded-lg border border-emerald-800 bg-emerald-950 p-1.5 text-[6px] leading-tight text-emerald-200/80">
                  Cukup modal Rp4.500-Rp5.000, kamu bisa cuan!
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ROW: Anchored Key Performance Metrics */}
      <div className="container-custom z-10 mt-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="flex w-full flex-col gap-6 divide-y divide-neutral-100 rounded-2xl border border-neutral-200/80 bg-white px-6 py-6 shadow-lg md:flex-row md:items-center md:justify-around md:gap-4 md:divide-x md:divide-y-0 md:px-8 md:py-8"
        >
          {slide.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-1 items-center justify-center gap-4 py-3 first:pl-0 first:pt-0 last:pb-0 last:pr-0 md:justify-start md:px-6 md:py-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                {metric.icon}
              </div>
              <div>
                <h3 className="text-xl font-black leading-none text-neutral-900 md:text-2xl lg:text-3xl">
                  {metric.value}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 md:text-xs">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
