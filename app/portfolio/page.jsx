import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Our Portfolio',
  description:
    'Explore our portfolio of successful SME branding and social media campaigns. See how Serasa Kreatif helps local brands grow and attract customers.',
}

// Featured work data with Unsplash images
const featuredWork = [
  {
    slug: 'japo-fashion-brand',
    title: 'JAPO',
    subtitle: 'Brand identity for local fashion brand',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c4571?w=1200&q=80',
    category: 'BRAND DESIGN',
  },
  {
    slug: 'pregnansia-spa-social',
    title: 'PREGNASIA SPA',
    subtitle: 'Social media strategy for wellness business',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80',
    category: 'SOCIAL MEDIA MANAGEMENT',
  },
  {
    slug: 'fnb-restaurant',
    title: 'LOCAL F&B',
    subtitle: 'Brand refresh for SME restaurant',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    category: 'BRAND REFRESH',
  },
  {
    slug: 'tech-startup',
    title: 'SME TECHNOLOGY',
    subtitle: 'Digital campaign for tech startup',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    category: 'DIGITAL CAMPAIGN',
  },
]

const filterOptions = {
  regions: ['ALL REGIONS', 'JABODETABEK', 'WEST JAVA', 'CENTRAL JAVA'],
  services: [
    'ALL SERVICES',
    'BRAND DESIGN',
    'SOCIAL MEDIA MANAGEMENT',
    'DIGITAL CAMPAIGN',
    'CREATIVE CONTENT',
  ],
  industries: ['ALL INDUSTRIES', 'FASHION', 'F&B', 'WELLNESS', 'TECHNOLOGY'],
}

function FilterSelect({ options }) {
  return (
    <div className="relative">
      <select className="w-full cursor-pointer appearance-none border border-gray-700 bg-black px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mb-2 text-xs uppercase tracking-widest text-gray-300">
              {work.category}
            </div>
            <h3 className="font-display mb-2 text-3xl font-black uppercase text-white md:text-4xl lg:text-5xl">
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
      <section className="bg-black pb-20 pt-32">
        <div className="container-custom">
          <h1 className="font-display mb-16 font-black uppercase text-white">PORTFOLIO</h1>

          {/* Filter */}
          <div className="mb-12 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
            <FilterSelect options={filterOptions.regions} />
            <FilterSelect options={filterOptions.services} />
            <FilterSelect options={filterOptions.industries} />
          </div>

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-gray-300">
              See our best work from various services, regions, and SME clients.{' '}
              <Link href="/contact" className="underline transition-colors hover:text-white">
                Contact
              </Link>{' '}
              Serasa Kreatif team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-black py-12">
        <div className="container-custom">
          <h2 className="font-display mb-12 text-2xl font-bold uppercase">FEATURED WORK</h2>

          {/* Grid - 2 columns */}
          <FeaturedWorkGrid works={featuredWork} />

          {/* Load More Button */}
          <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-2 text-white transition-colors hover:text-gray-300">
              <span className="text-sm uppercase tracking-wider">Load More</span>
              <svg
                className="h-5 w-5 transform transition-transform group-hover:translate-y-1"
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
      <section className="section-padding border-t border-gray-900 bg-black">
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
