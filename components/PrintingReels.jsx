'use client'

import { useState } from 'react'
import SectionHeading from './SectionHeading'
import SectionDescription from './SectionDescription'

const printingReels = [
  {
    src: '/assets/videos/serasa-printing/serasa-printing.mp4',
    title: 'Hasil Cetak Presisi & Tepat Waktu',
    copy: 'Hasil cetak sering kurang rapi atau deadline molor? Padahal kualitas print mencerminkan profesionalitas brand Anda.\n\nSerasa Printing siap jadi partner percetakan offset terpercaya untuk kebutuhan:\n✅ Brosur\n✅ Katalog\n✅ Company Profile\n✅ Kalender Perusahaan\n\nHasil lebih rapi, warna presisi, dan pengerjaan tepat waktu.',
  },
  {
    src: '/assets/videos/serasa-printing/serasa-printing-1.mp4',
    title: 'Cetak Banyak Nggak Harus Mahal',
    copy: 'Cetak banyak nggak harus mahal ✨\n\nDengan offset printing, hasil tetap tajam, rapi, dan warna konsisten walaupun dalam jumlah besar 👀\nDi Serasa Printing, kamu bisa cetak lebih hemat tanpa ngorbanin kualitas.\n\nCocok untuk katalog, brosur, sampai kebutuhan promosi bisnis kamu 🚀',
  },
  {
    src: '/assets/videos/serasa-printing/serasa-printing-2.mp4',
    title: 'Solusi Cetak Tanpa Khawatir',
    copy: 'Udah pernah cetak brosur, tapi hasilnya nggak sesuai ekspektasi?\n\nWarna meleset, bahan tipis, atau jumlah kurang 😓\nMakanya, jangan asal pilih percetakan. Di Serasa Printing, kamu nggak cuma cetak, kamu juga dapet solusi:\n✔ Free konsultasi sebelum cetak\n✔ Bisa bantu desain (cukup kasih referensi)\n✔ Bahan berkualitas\n✔ Bahkan cetak 500, kita bantu jadi 700 pcs',
  },
  {
    src: '/assets/videos/serasa-printing/serasa-printing-4.mp4',
    title: 'Presisi & Efisiensi Pon Desain',
    copy: 'Ketika nge-Pon 700 lebih desain yang berbeda dan meminimalisir hasil yang rusak 💪☺️\n\nYang semangat dong yang semangat dong 🤗🤗',
  },
  {
    src: '/assets/videos/serasa-printing/serasa-printing-3.mp4',
    title: 'Tips Sampel Packaging Custom',
    copy: 'Tips & trick sepele untuk kalian yang lagi bikin sampel packaging sebelum produksi banyak.\n\nKalo sudah produksi massal tentunya pakai REL MESIN 😄👍',
  },
]

export default function PrintingReels() {
  const [mutedStates, setMutedStates] = useState(new Array(printingReels.length).fill(true))

  const toggleMute = (index) => {
    setMutedStates((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      return next
    })
  }

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      {/* Background patterns */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:3rem_3rem]" />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="mb-16 max-w-3xl">
          <span className="text-brand-pink mb-3 block text-xs font-black uppercase tracking-[0.25em]">
            Portfolio & Production
          </span>
          <SectionHeading>OUR PRINTING SHOWCASE</SectionHeading>
          <SectionDescription className="text-neutral-600">
            Intip proses produksi offset, tips & trik cetak sampel packaging, serta komitmen
            kualitas Serasa Printing langsung lewat rangkuman video reels kami di bawah ini.
          </SectionDescription>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {printingReels.map((reel, index) => (
            <div key={reel.src + index} className="group flex h-full flex-col">
              {/* Phone Container */}
              <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[32px] border-[6px] border-neutral-900 bg-black shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                {/* Status Bar */}
                <div className="pointer-events-none absolute left-0 right-0 top-1 z-20 flex items-center justify-between px-5 text-[8px] font-semibold text-white/90">
                  <span>10:00</span>
                  <div className="flex items-center gap-1">
                    <span className="flex h-1.5 items-end gap-[1px]">
                      <span className="h-0.5 w-[1px] bg-white/90" />
                      <span className="h-1 w-[1px] bg-white/90" />
                      <span className="h-1.5 w-[1px] bg-white/90" />
                    </span>
                    <div className="h-1.5 w-3 rounded-[2px] border border-white/60 p-[0.2px]">
                      <div className="h-full w-full rounded-[1px] bg-white" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Island */}
                <div className="pointer-events-none absolute left-1/2 top-1 z-30 h-3 w-12 -translate-x-1/2 rounded-full bg-black" />

                {/* Video */}
                <video
                  src={reel.src}
                  autoPlay
                  loop
                  playsInline
                  muted={mutedStates[index]}
                  className="h-full w-full object-cover"
                />

                {/* Mute Button Overlay */}
                <button
                  onClick={() => toggleMute(index)}
                  className="backdrop-blur-xs absolute bottom-4 right-4 z-20 rounded-full border border-white/10 bg-black/60 p-2 text-white transition-colors hover:bg-black active:scale-95"
                  title={mutedStates[index] ? 'Unmute' : 'Mute'}
                >
                  {mutedStates[index] ? (
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    <svg
                      className="h-4 w-4 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 5.586v13c0 .891-1.077 1.337-1.707.707L5.586 15z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Copy & Details */}
              <div className="mt-4 flex flex-grow flex-col justify-between p-2">
                <div>
                  <h4 className="group-hover:text-brand-pink font-sans text-sm font-black uppercase tracking-tight text-primary transition-colors duration-300">
                    {reel.title}
                  </h4>
                  <p className="mt-2 whitespace-pre-line text-xs font-medium leading-relaxed text-neutral-600">
                    {reel.copy}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
