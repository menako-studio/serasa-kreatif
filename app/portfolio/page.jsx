import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-data'
import PortfolioFilters from '@/components/PortfolioFilters'
import PortfolioVideoGrid from '@/components/PortfolioVideoGrid'
import { sanityClient } from '@/lib/sanity'
import { allCaseStudiesQuery } from '@/lib/sanity-queries'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Portofolio — Hasil Kerja Agensi Kreatif | Serasa Kreatif',
  description:
    'Lihat portofolio Serasa Kreatif: hasil kampanye social media, branding, dan iklan digital yang sukses untuk UMKM & korporat. Studi kasus nyata dari agensi kreatif Bintaro, Jakarta.',
  keywords: [
    'portofolio agensi kreatif jakarta',
    'contoh hasil social media management',
    'studi kasus branding indonesia',
    'portfolio creative agency bintaro',
    'hasil kerja social media agency',
  ],
  alternates: {
    canonical: 'https://serasakreatif.id/portfolio',
    languages: {
      'en-US': 'https://serasakreatif.id/portfolio',
      'id-ID': 'https://serasakreatif.id/portfolio?lang=id',
      'x-default': 'https://serasakreatif.id/portfolio',
    },
  },
}

const filterOptions = {
  services: [
    'ALL SERVICES',
    'BRANDING STRATEGY',
    'WEBSITE DEVELOPMENT',
    'SOCIAL MEDIA MANAGEMENT',
    'DIGITAL MARKETING',
    'KOL MANAGEMENT',
  ],
  industries: ['ALL INDUSTRIES', 'FASHION', 'F&B', 'WELLNESS', 'MANUFACTURING'],
}

const clientIndustries = {
  pregnansia: 'WELLNESS',
  sr12: 'WELLNESS',
  arkaff: 'FASHION',
  kotabi: 'FASHION',
  japo: 'F&B',
  'bandar-kardus': 'MANUFACTURING',
}

const clientServices = {
  pregnansia: ['DIGITAL MARKETING', 'SOCIAL MEDIA MANAGEMENT', 'BRANDING STRATEGY'],
  sr12: ['SOCIAL MEDIA MANAGEMENT'],
  arkaff: [
    'BRANDING STRATEGY',
    'WEBSITE DEVELOPMENT',
    'SOCIAL MEDIA MANAGEMENT',
    'DIGITAL MARKETING',
    'KOL MANAGEMENT',
  ],
  kotabi: ['SOCIAL MEDIA MANAGEMENT', 'DIGITAL MARKETING'],
  japo: ['DIGITAL MARKETING', 'SOCIAL MEDIA MANAGEMENT', 'BRANDING STRATEGY'],
  'bandar-kardus': ['SOCIAL MEDIA MANAGEMENT'],
}

function FeaturedWorkGrid({ works }) {
  if (works.length === 0) {
    return (
      <div className="py-12 text-center text-white">
        <p className="text-lg">No case studies matched the selected filters.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 md:gap-12">
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/portfolio/${work.slug}`}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900 shadow-md transition-shadow duration-300 hover:shadow-xl"
        >
          <Image
            src={work.image}
            alt={work.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/10" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="mb-2 text-xs uppercase tracking-widest text-white">{work.category}</div>
            <h3 className="font-display mb-2 text-3xl font-black uppercase text-white md:text-4xl lg:text-5xl">
              {work.title}
            </h3>
            <p className="text-sm text-white md:text-base">{work.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default async function WorkPage({ searchParams }) {
  const { q, service, industry } = searchParams || {}

  // Fetch from CMS if Sanity is configured
  let data = caseStudies
  if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    try {
      const cmsStudies = await sanityClient.fetch(allCaseStudiesQuery)
      if (cmsStudies && cmsStudies.length > 0) {
        data = cmsStudies
      }
    } catch (err) {
      console.warn('Failed to load data from Sanity CMS, falling back to local files:', err.message)
    }
  }

  // Filter case studies based on query parameters
  const filteredStudies = data.filter((study) => {
    // Search query match
    if (q) {
      const query = q.toLowerCase()
      const matchClient = study.client.toLowerCase().includes(query)
      const matchTitle = study.title.toLowerCase().includes(query)
      const matchCategory = study.category.toLowerCase().includes(query)
      const matchTags = study.tags.some((tag) => tag.toLowerCase().includes(query))
      if (!matchClient && !matchTitle && !matchCategory && !matchTags) {
        return false
      }
    }

    // Service match
    if (service && service.toLowerCase() !== 'all services') {
      const clientSer = clientServices[study.slug]
      if (Array.isArray(clientSer)) {
        const matches = clientSer.some((s) => s.toLowerCase() === service.toLowerCase())
        if (!matches) return false
      } else if (clientSer?.toLowerCase() !== service.toLowerCase()) {
        return false
      }
    }

    // Industry match
    if (industry && industry.toLowerCase() !== 'all industries') {
      const clientInd = clientIndustries[study.slug]?.toLowerCase()
      if (clientInd !== industry.toLowerCase()) {
        return false
      }
    }

    return true
  })

  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  const isIndo = lang === 'id'

  // Format work data
  const featuredWork = filteredStudies.map((study) => ({
    slug: study.slug,
    title: study.client,
    subtitle: study.title,
    image: study.image,
    category: study.category,
  }))

  return (
    <div className="min-h-screen">
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          {
            name: isIndo ? 'Portofolio' : 'Portfolio',
            url: 'https://serasakreatif.id/portfolio',
          },
        ]}
      />
      {/* Hero Section */}
      <section className="bg-white pb-20 pt-32 md:pt-40 lg:pt-44">
        <div className="container-custom">
          <h1 className="font-display mb-16 font-black uppercase text-primary">
            {isIndo ? 'PORTOFOLIO' : 'PORTFOLIO'}
          </h1>

          {/* Filter Component */}
          <PortfolioFilters
            filterOptions={filterOptions}
            currentFilters={{ q, service, industry }}
          />

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-primary">
              {isIndo ? (
                <>
                  Lihat karya terbaik kami dari berbagai layanan dan klien UMKM.{' '}
                  <Link
                    href="/contact"
                    className="hover:text-brand-pink underline transition-colors"
                  >
                    Hubungi
                  </Link>{' '}
                  tim Serasa Kreatif untuk konsultasi gratis.
                </>
              ) : (
                <>
                  See our best work from various services and SME clients.{' '}
                  <Link
                    href="/contact"
                    className="hover:text-brand-pink underline transition-colors"
                  >
                    Contact
                  </Link>{' '}
                  Serasa Kreatif team for a free consultation.
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-brand-pink py-12">
        <div className="container-custom">
          <h2 className="font-display mb-12 text-2xl font-bold uppercase text-white">
            {isIndo ? 'KARYA PILIHAN' : 'FEATURED WORK'}
          </h2>

          {/* Grid - 2 columns */}
          <FeaturedWorkGrid works={featuredWork} />
        </div>
      </section>

      {/* Creative Reels Section */}
      <section className="border-t border-gray-200 bg-white py-16">
        <div className="container-custom">
          <h2 className="font-display mb-4 text-3xl font-black uppercase text-primary">
            {isIndo ? 'ARAHAN KREATIF & REELS' : 'CREATIVE DIRECTING & REELS'}
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-neutral-600">
            {isIndo
              ? 'Intip beberapa konten pendek, kampanye media sosial, dan kisah merek yang kami buat untuk klien kami.'
              : 'Take a look at some of our short-form content, social media campaigns, and brand stories created for our clients.'}
          </p>
          <PortfolioVideoGrid
            videos={[
              'https://youtube.com/shorts/lDkOli2oh4w', // Latifa Spa Academy
              'https://youtube.com/shorts/OpZvybA_hLw', // Coreside
              'https://youtube.com/shorts/Yr1szFvZe9M', // Charita Spa
            ]}
          />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding border-t border-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-brand-pink mb-8 text-xl leading-relaxed md:text-2xl">
              {isIndo
                ? 'Punya ide untuk bisnis, merek, atau UMKM Anda? Kami siap mendengarkan dan berkolaborasi. Bersama Serasa Kreatif, mari kita bentuk masa depan cerah bagi UMKM Indonesia.'
                : "Have an idea for your business, brand, or SME? We are ready to listen and collaborate. Together with Serasa Kreatif, let's shape a brighter future for Indonesian SMEs."}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
