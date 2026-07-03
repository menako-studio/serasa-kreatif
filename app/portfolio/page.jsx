import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-data'
import PortfolioFilters from '@/components/PortfolioFilters'
import { sanityClient } from '@/lib/sanity'
import { allCaseStudiesQuery } from '@/lib/sanity-queries'

export const metadata = {
  title: 'Our Portfolio',
  description:
    'Explore our portfolio of successful SME branding and social media campaigns. See how Serasa Kreatif helps local brands grow and attract customers.',
  alternates: {
    canonical: '/portfolio',
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
      {/* Hero Section */}
      <section className="bg-white pb-20 pt-32 md:pt-40 lg:pt-44">
        <div className="container-custom">
          <h1 className="font-display mb-16 font-black uppercase text-primary">PORTFOLIO</h1>

          {/* Filter Component */}
          <PortfolioFilters
            filterOptions={filterOptions}
            currentFilters={{ q, service, industry }}
          />

          {/* Description */}
          <div className="max-w-xl">
            <p className="text-lg leading-relaxed text-primary">
              See our best work from various services and SME clients.{' '}
              <Link href="/contact" className="hover:text-brand-pink underline transition-colors">
                Contact
              </Link>{' '}
              Serasa Kreatif team for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="bg-brand-pink py-12">
        <div className="container-custom">
          <h2 className="font-display mb-12 text-2xl font-bold uppercase text-white">
            FEATURED WORK
          </h2>

          {/* Grid - 2 columns */}
          <FeaturedWorkGrid works={featuredWork} />
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="section-padding border-t border-gray-900">
        <div className="container-custom">
          <div className="max-w-2xl">
            <p className="text-brand-pink mb-8 text-xl leading-relaxed md:text-2xl">
              Have an idea for your business, brand, or SME? We are ready to listen and collaborate.
              Together with Serasa Kreatif, let&apos;s shape a brighter future for Indonesian SMEs.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
