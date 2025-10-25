import Hero from '@/components/Hero'
import Image from 'next/image'
import Link from 'next/link'
import ClientLogos from '@/components/ClientLogos'
import CTASection from '@/components/CTASection'

// Work showcase data with Unsplash images
const workShowcase = [
  {
    slug: 'japo-brand-identity',
    title: 'JAPO',
    category: 'Branding & Social Media',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
    description: 'Identitas merek modern untuk brand fashion lokal',
  },
  {
    slug: 'pregnasia-spa-social',
    title: 'PREGNASIA SPA',
    category: 'Social Media Management',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    description: 'Strategi konten wellness & spa',
  },
  {
    slug: 'local-brand-refresh',
    title: 'ANDROID',
    category: 'Digital Campaign',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    description: 'Kampanye digital untuk tech brand',
  },
  {
    slug: 'fnb-campaign',
    title: 'F&B BRAND',
    category: 'Brand Refresh',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    description: 'Pembaruan identitas kuliner modern',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* WORK Section - R/GA Style Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-black uppercase mb-8">WORK:</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {workShowcase.map((work, index) => (
              <Link 
                key={work.slug} 
                href={`/work/${work.slug}`}
                className="group relative aspect-[4/3] overflow-hidden bg-gray-900"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="text-sm uppercase tracking-wider mb-2 text-gray-300">
                    {work.category}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {work.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link 
              href="/work" 
              className="inline-flex items-center text-lg hover:text-red-600 transition-colors"
            >
              SEE MORE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE DO Section - Minimal List Style */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-black uppercase mb-8">WHAT WE DO:</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Kami menggabungkan kreativitas dengan strategi berbasis data untuk menciptakan
              kampanye yang menggerakkan audiens dan menghasilkan hasil nyata.
            </p>
          </div>

          <div className="space-y-1 max-w-4xl">
            {[
              {
                title: 'Brand Design',
                description: 'Identitas visual, logo, brand guidelines, dan sistem desain lengkap',
              },
              {
                title: 'Product & Experience Design',
                description: 'UI/UX design, prototype, dan pengalaman digital yang intuitif',
              },
              {
                title: 'Campaign & Content Design',
                description: 'Kampanye kreatif, konten media sosial, fotografi, dan videografi',
              },
              {
                title: 'CRM & Relationship Design',
                description: 'Strategi engagement, community management, dan customer journey',
              },
              {
                title: 'Commerce Design',
                description: 'E-commerce strategy, website design, dan optimisasi konversi',
              },
            ].map((service, index) => (
              <details 
                key={index} 
                className="group border-b border-gray-300 py-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center list-none">
                  <h3 className="text-2xl md:text-3xl font-display font-normal group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <svg 
                    className="w-6 h-6 transform group-open:rotate-45 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-lg max-w-2xl">
                  {service.description}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* NEWS Section - Card Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-16">
            <h2 className="text-black uppercase mb-8">NEWS:</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'INSIGHT',
                title: 'Tren Branding UMKM 2025',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=80',
                color: 'bg-gray-900',
              },
              {
                category: 'WORK',
                title: 'Kampanye Digital yang Sukses',
                image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80',
                color: 'bg-red-600',
              },
              {
                category: 'CULTURE',
                title: 'Behind The Scenes Serasa',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80',
                color: 'bg-gray-900',
              },
              {
                category: 'ANNOUNCEMENT',
                title: 'Kolaborasi Baru 2025',
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&q=80',
                color: 'bg-blue-600',
              },
            ].map((news, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-4">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                  {news.category}
                </div>
                <h3 className="text-lg font-display font-bold group-hover:text-red-600 transition-colors">
                  {news.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-right">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-lg hover:text-red-600 transition-colors"
            >
              SEE MORE
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Join Section - Black Background */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-white uppercase mb-12">Join Serasa Kreatif</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">LOKASI</div>
                <div className="text-lg">Bintaro, Tangerang Selatan</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">EMAIL</div>
                <div className="text-lg">hello@serasakreatif.id</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">INSTAGRAM</div>
                <div className="text-lg">@serasakreatif.id</div>
              </div>
            </div>

            <Link 
              href="/contact"
              className="inline-block bg-white text-black px-12 py-4 text-lg font-bold uppercase hover:bg-red-600 hover:text-white transition-colors"
            >
              MULAI PROYEK
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Text - R/GA Style */}
      <section className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container-custom">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-tight">
            ©SERASA KREATIF 2022–SEKARANG<br />
            KAMI MENDESAIN BISNIS<br />
            DAN MEREK UNTUK<br />
            MASA DEPAN YANG LEBIH MANUSIAWI
            <span className="text-red-600">■</span>
          </div>
        </div>
      </section>
    </>
  )
}
