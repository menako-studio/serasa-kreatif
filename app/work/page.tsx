import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
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
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container-custom">
          <h1 className="font-display font-black text-white uppercase mb-16">WORK</h1>
          
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl">
            <div className="relative">
              <select className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm uppercase tracking-wider appearance-none cursor-pointer hover:border-gray-500 transition-colors">
                <option>ALL REGIONS</option>
                <option>JABODETABEK</option>
                <option>JAWA BARAT</option>
                <option>JAWA TENGAH</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm uppercase tracking-wider appearance-none cursor-pointer hover:border-gray-500 transition-colors">
                <option>ALL SERVICES</option>
                <option>BRAND DESIGN</option>
                <option>SOCIAL MEDIA</option>
                <option>DIGITAL CAMPAIGN</option>
                <option>CONTENT CREATION</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
            <div className="relative">
              <select className="w-full bg-black border border-gray-700 text-white px-4 py-3 text-sm uppercase tracking-wider appearance-none cursor-pointer hover:border-gray-500 transition-colors">
                <option>ALL INDUSTRIES</option>
                <option>FASHION</option>
                <option>F&B</option>
                <option>WELLNESS</option>
                <option>TECHNOLOGY</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Explore our work highlights across services, regions and clients.{' '}
              <Link href="/contact" className="underline hover:text-white transition-colors">
                Contact
              </Link>{' '}
              the team to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-12 bg-black">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-bold uppercase mb-12">FEATURED WORK</h2>
          
          {/* Grid - 2 columns */}
          <div className="grid md:grid-cols-2 gap-1">
            {featuredWork.map((work, index) => (
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
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="text-xs uppercase tracking-widest mb-2 text-gray-300">
                    {work.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-black uppercase text-white mb-2">
                    {work.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {work.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors group">
              <span className="text-sm uppercase tracking-wider">Show More</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding bg-black border-t border-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              If you have ideas for your brand, your business, or the world at large, we&apos;re here to listen and collaborate. We can design a more human future together.
            </p>
            
            <div className="space-y-3">
              <a 
                href="https://wa.me/6281288971453" 
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">WhatsApp</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/serasakreatif.id/" 
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-sm">Instagram</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors group"
              >
                <span className="text-sm">LinkedIn</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
