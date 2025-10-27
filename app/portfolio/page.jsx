import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Portofolio Kami',
  description:
    'Jelajahi portofolio kampanye branding dan media sosial kami yang sukses. Lihat bagaimana kami mentransformasi merek menjadi kekuatan yang menarik.',
}

// Featured work data dengan Unsplash images
const featuredWork = [
  {
    slug: 'japo-fashion-brand',
    title: 'JAPO',
    subtitle: 'Brand identity untuk fashion brand lokal',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c4571?w=1200&q=80',
    category: 'BRAND DESIGN',
  },
  {
    slug: 'pregnasia-wellness',
    title: 'PREGNASIA SPA',
    subtitle: 'Strategi media sosial untuk wellness brand',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80',
    category: 'SOCIAL MEDIA STRATEGY',
  },
  {
    slug: 'fnb-restaurant',
    title: 'LOCAL F&B',
    subtitle: 'Brand refresh untuk restoran lokal',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    category: 'BRAND REFRESH',
  },
  {
    slug: 'tech-startup',
    title: 'TECH STARTUP',
    subtitle: 'Digital campaign untuk tech startup',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80',
    category: 'DIGITAL CAMPAIGN',
  },
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="bg-black pb-20 pt-32">
        <div className="container-custom">
          <h1 className="mb-16 font-display font-black uppercase text-white">WORK</h1>

          {/* Filters */}
          <div className="mb-12 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <select className="w-full cursor-pointer appearance-none border border-gray-700 bg-black px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500">
                <option>ALL REGIONS</option>
                <option>JABODETABEK</option>
                <option>JAWA BARAT</option>
                <option>JAWA TENGAH</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="w-full cursor-pointer appearance-none border border-gray-700 bg-black px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500">
                <option>ALL SERVICES</option>
                <option>BRAND DESIGN</option>
                <option>SOCIAL MEDIA</option>
                <option>DIGITAL CAMPAIGN</option>
                <option>CONTENT CREATION</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="relative">
              <select className="w-full cursor-pointer appearance-none border border-gray-700 bg-black px-4 py-3 text-sm uppercase tracking-wider text-white transition-colors hover:border-gray-500">
                <option>ALL INDUSTRIES</option>
                <option>FASHION</option>
                <option>F&B</option>
                <option>WELLNESS</option>
                <option>TECHNOLOGY</option>
              </select>
              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-gray-300">
              Explore our work highlights across services, regions and clients.{' '}
              <Link href="/contact" className="underline transition-colors hover:text-white">
                Contact
              </Link>{' '}
              the team to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-black py-12">
        <div className="container-custom">
          <h2 className="mb-12 font-display text-2xl font-bold uppercase">FEATURED WORK</h2>

          {/* Grid - 2 columns */}
          <div className="grid gap-1 md:grid-cols-2">
            {featuredWork.map((work, _index) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
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
                  <h3 className="mb-2 font-display text-3xl font-black uppercase text-white md:text-4xl lg:text-5xl">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-200 md:text-base">{work.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More Button */}
          <div className="mt-16 text-center">
            <button className="group inline-flex items-center gap-2 text-white transition-colors hover:text-gray-300">
              <span className="text-sm uppercase tracking-wider">Show More</span>
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
              If you have ideas for your brand, your business, or the world at large, we&apos;re
              here to listen and collaborate. We can design a more human future together.
            </p>

            <div className="space-y-3">
              <a
                href="https://wa.me/6281288971453"
                className="group flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">WhatsApp</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/serasakreatif.id/"
                className="group flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">Instagram</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="group flex items-center gap-2 text-white transition-colors hover:text-gray-300"
              >
                <span className="text-sm">LinkedIn</span>
                <svg
                  className="h-4 w-4 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
