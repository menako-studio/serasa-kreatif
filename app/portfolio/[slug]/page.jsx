import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { caseStudies } from '@/lib/case-data'

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }) {
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

export default function CaseDetailPage({ params }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] bg-gray-900">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-near-black via-transparent to-transparent" />

        <div className="container-custom relative flex h-full flex-col justify-end pb-16">
          <Link
            href="/work"
            className="mb-6 inline-flex items-center gap-2 text-white transition-colors hover:text-accent-cyan"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Work
          </Link>

          <div className="mb-4 inline-block rounded-full bg-accent-cyan px-4 py-2 font-medium text-near-black">
            {caseStudy.category}
          </div>
          <h1 className="mb-4 text-white">{caseStudy.title}</h1>
          <p className="text-2xl text-gray-300">{caseStudy.client}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase text-gray-500">Client</h4>
              <p className="font-display text-xl font-bold">{caseStudy.client}</p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase text-gray-500">Timeline</h4>
              <p className="font-display text-xl font-bold">{caseStudy.timeline}</p>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-bold uppercase text-gray-500">Our Role</h4>
              <p className="font-display text-xl font-bold">{caseStudy.role}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="mb-8 text-2xl leading-relaxed text-gray-700">{caseStudy.description}</p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <h2 className="mb-12 text-center">Key Results</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 font-display text-5xl font-bold text-accent-cyan md:text-6xl">
                  {metric.value}
                </div>
                <div className="font-medium text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">The Challenge</h2>
          <p className="text-xl leading-relaxed text-gray-700">{caseStudy.challenge}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8">Our Approach</h2>
          <p className="text-xl leading-relaxed text-gray-700">{caseStudy.approach}</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <h2 className="mb-12 text-center">Project Gallery</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {caseStudy.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
              >
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
          <p className="mb-8 text-xl leading-relaxed text-gray-300">{caseStudy.results}</p>

          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag, index) => (
              <span key={index} className="rounded-full bg-charcoal px-4 py-2 text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-cyan">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-near-black">Want Similar Results?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-800">
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
