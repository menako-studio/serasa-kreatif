import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Portofolio Kami',
  description:
    'Jelajahi portofolio kampanye branding dan media sosial UMKM yang sukses. Lihat bagaimana Serasa Kreatif membantu merek lokal tumbuh dan menarik pelanggan.',
}

// Data karya unggulan dengan gambar Unsplash
const featuredWork = [
  {
    slug: 'japo-fashion-brand',
    title: 'JAPO',
    subtitle: 'Identitas merek untuk brand fashion lokal',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c4571?w=1200&q=80',
    category: 'DESAIN BRAND',
  },
  {
    slug: 'pregnansia-spa-social',
    title: 'PREGNASIA SPA',
    subtitle: 'Strategi media sosial untuk bisnis wellness',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80',
    category: 'MANAJEMEN MEDIA SOSIAL',
  },
  {
    slug: 'fnb-restaurant',
    title: 'F&B LOKAL',
    subtitle: 'Pembaruan brand untuk restoran UMKM',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    category: 'REFRESH BRAND',
  },
  {
    slug: 'tech-startup',
    title: 'TEKNOLOGI UMKM',
    subtitle: 'Kampanye digital untuk startup teknologi',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    category: 'KAMPANYE DIGITAL',
  },
]

const filterOptions = {
  regions: ['SEMUA WILAYAH', 'JABODETABEK', 'JAWA BARAT', 'JAWA TENGAH'],
  services: [
    'SEMUA LAYANAN',
    'DESAIN BRAND',
    'MANAJEMEN MEDIA SOSIAL',
    'KAMPANYE DIGITAL',
    'KONTEN KREATIF',
  ],
  industries: ['SEMUA INDUSTRI', 'FASHION', 'F&B', 'WELLNESS', 'TEKNOLOGI'],
}

function FilterSelect({ options }) {
  return (
    <div className="relative">
      <select className="w-full px-4 py-3 text-sm tracking-wider text-white uppercase transition-colors bg-black border border-gray-700 appearance-none cursor-pointer hover:border-gray-500">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <div className="absolute -translate-y-1/2 pointer-events-none right-4 top-1/2">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

function FeaturedWorkGrid({ works }) {
  return (
    <div className="grid gap-1 md:grid-cols-2">
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/portfolio/${work.slug}`}
          className="group relative aspect-[4/3] overflow-hidden bg-gray-900"
        >
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 transition-colors bg-black/30 group-hover:bg-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mb-2 text-xs tracking-widest text-gray-300 uppercase">
              {work.category}
            </div>
            <h3 className="mb-2 text-3xl font-black text-white uppercase font-display md:text-4xl lg:text-5xl">
              {work.title}
            </h3>
            <p className="text-sm text-gray-200 md:text-base">{work.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function WorkPage() {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container-custom">
          <h1 className="mb-16 font-black text-white uppercase font-display">PORTOFOLIO</h1>

          {/* Filter */}
          <div className="grid max-w-2xl grid-cols-1 gap-4 mb-12 md:grid-cols-3">
            <FilterSelect options={filterOptions.regions} />
            <FilterSelect options={filterOptions.services} />
            <FilterSelect options={filterOptions.industries} />
          </div>

          {/* Deskripsi */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-gray-300">
              Lihat karya terbaik kami dari berbagai layanan, wilayah, dan klien UMKM.{' '}
              <Link href="/kontak" className="underline transition-colors hover:text-white">
                Hubungi
              </Link>{' '}
              tim Serasa Kreatif untuk konsultasi gratis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          <h2 className="mb-12 text-2xl font-bold uppercase font-display">KARYA UNGGULAN</h2>

          {/* Grid - 2 columns */}
          <FeaturedWorkGrid works={featuredWork} />

          {/* Tombol Lihat Lebih Banyak */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 text-white transition-colors group hover:text-gray-300">
              <span className="text-sm tracking-wider uppercase">Lihat Lebih Banyak</span>
              <svg
                className="w-5 h-5 transition-transform transform group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black border-t border-gray-900 section-padding">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
              Punya ide untuk bisnis, merek, atau UMKM Anda? Kami siap mendengarkan dan
              berkolaborasi. Bersama Serasa Kreatif, kita bisa membangun masa depan yang lebih baik
              untuk UMKM Indonesia.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
