import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-data'

interface CaseDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: CaseDetailPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.title} | ${caseStudy.client}`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | ${caseStudy.client}`,
      description: caseStudy.description,
      images: [caseStudy.image],
    },
  }
}

export default function CaseDetailPage({ params }: CaseDetailPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent" />
        
        <div className="container-custom relative h-full flex flex-col justify-end pb-16">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-white hover:text-accent-cyan transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Work
          </Link>
          
          <div className="inline-block px-4 py-2 bg-accent-cyan text-near-black rounded-full font-medium mb-4">
            {caseStudy.category}
          </div>
          <h1 className="text-white mb-4">{caseStudy.title}</h1>
          <p className="text-2xl text-gray-300">{caseStudy.client}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">Client</h4>
              <p className="text-xl font-display font-bold">{caseStudy.client}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">Timeline</h4>
              <p className="text-xl font-display font-bold">{caseStudy.timeline}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase text-gray-500 mb-2">Our Role</h4>
              <p className="text-xl font-display font-bold">{caseStudy.role}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed mb-8">{caseStudy.description}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="text-center mb-12">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-display font-bold text-accent-cyan mb-2">
                  {metric.value}
                </div>
                <div className="text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">The Challenge</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Our Approach</h2>
          <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.approach}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-12">Project Gallery</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudy.gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={image}
                  alt={`${caseStudy.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding bg-near-black text-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">The Results</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">{caseStudy.results}</p>
          
          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-charcoal rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-cyan">
        <div className="container-custom text-center">
          <h2 className="text-near-black mb-6">Want Similar Results?</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help your brand achieve its goals.
          </p>
          <Link href="/contact" className="btn bg-near-black text-white hover:bg-charcoal">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </div>
  )
}
