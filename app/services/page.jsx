import Link from 'next/link'

export const metadata = {
  title: 'Layanan Kami',
  description:
    'Kami menawarkan layanan branding, manajemen media sosial, konten kreatif, dan desain website. Transformasikan merek Anda bersama Serasa Kreatif.',
}

const services = [
  {
    id: 'branding',
    icon: '🎨',
    title: 'Branding & Identitas',
    description:
      'Kami menciptakan identitas merek yang khas dan relevan bagi audiens target Anda agar menonjol di pasar.',
    features: [
      'Strategi & Posisi Merek',
      'Desain Logo & Identitas Visual',
      'Panduan Merek',
      'Desain Kemasan',
      'Materi Pendukung Merek',
      'Pembaruan & Rebranding',
    ],
  },
  {
    id: 'social-media',
    icon: '📱',
    title: 'Manajemen Media Sosial',
    description:
      'Layanan media sosial menyeluruh untuk membangun kehadiran online dan melibatkan komunitas Anda.',
    features: [
      'Strategi Media Sosial',
      'Perencanaan Konten & Kalender',
      'Manajemen Komunitas',
      'Iklan Media Sosial',
      'Analitik & Pelaporan',
      'Kerja Sama Influencer',
    ],
  },
  {
    id: 'content',
    icon: '✨',
    title: 'Konten Kreatif',
    description:
      'Konten visual berkualitas tinggi yang menceritakan kisah merek Anda dan menarik perhatian.',
    features: [
      'Fotografi & Videografi',
      'Desain Grafis',
      'Motion Graphics',
      'Penulisan Naskah (Copywriting)',
      'Template Media Sosial',
      'Kreatif Kampanye',
    ],
  },
  {
    id: 'website',
    icon: '🌐',
    title: 'Desain & Pengembangan Website',
    description:
      'Website modern dan responsif yang mengubah pengunjung menjadi pelanggan dan meningkatkan kehadiran digital Anda.',
    features: [
      'Desain Website (UI/UX)',
      'Pengembangan Responsif',
      'Solusi E-commerce',
      'Integrasi CMS',
      'Optimisasi SEO',
      'Pemeliharaan Website',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary via-charcoal to-near-black text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">Layanan Kami</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl">
            Dari pemikiran strategis hingga eksekusi kreatif, kami menawarkan layanan lengkap untuk
            mentransformasi merek Anda dan memperkuat pesan Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="mb-6 text-6xl">{service.icon}</div>
                <h2 className="mb-4">{service.title}</h2>
                <p className="mb-8 text-xl text-gray-700">{service.description}</p>

                <h3 className="mb-4 font-display text-xl font-bold">Yang Termasuk:</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <svg
                        className="mt-1 h-6 w-6 flex-shrink-0 text-accent-cyan"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-lg text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Placeholder */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-accent-cyan/20 via-accent-amber/20 to-primary/20">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="mb-4">Proses Kami</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Kami mengikuti proses teruji untuk memastikan setiap proyek menghasilkan hasil yang
              luar biasa.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals and audience',
              },
              { step: '02', title: 'Strategy', description: 'Planning the approach and execution' },
              {
                step: '03',
                title: 'Creation',
                description: 'Bringing ideas to life with creativity',
              },
              {
                step: '04',
                title: 'Launch & Optimize',
                description: 'Deploy and refine for success',
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent-cyan">
                  <span className="font-display text-3xl font-bold text-near-black">
                    {phase.step}
                  </span>
                </div>
                <h3 className="mb-3 font-display text-2xl font-bold">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Siap Memulai?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Mari diskusikan bagaimana layanan kami dapat membantu merek Anda mencapai tujuannya.
            Hubungi kami untuk konsultasi gratis.
          </p>
          <Link href="/contact" className="btn-accent">
            Minta Konsultasi
          </Link>
        </div>
      </section>
    </div>
  )
}
