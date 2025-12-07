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
    title: `${caseStudy.client} - ${caseStudy.category}`,
    description: caseStudy.description,
    keywords: [
      `case study ${caseStudy.client.toLowerCase()}`,
      caseStudy.category.toLowerCase(),
      'portfolio serasa kreatif',
      'studi kasus umkm',
      ...caseStudy.tags.map((tag) => tag.toLowerCase()),
    ],
    openGraph: {
      title: `${caseStudy.client} - ${caseStudy.title}`,
      description: caseStudy.description,
      images: [
        {
          url: caseStudy.image,
          width: 1200,
          height: 630,
          alt: `${caseStudy.client} - ${caseStudy.title}`,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${caseStudy.client} - ${caseStudy.title}`,
      description: caseStudy.description,
      images: [caseStudy.image],
    },
    alternates: {
      canonical: `https://serasakreatif.id/portfolio/${caseStudy.slug}`,
    },
  }
}

export default function CaseDetailPage({ params }) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="bg-black">
      {/* Hero Section - Full Screen */}
      <section className="relative flex min-h-screen items-end bg-black">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover opacity-50"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="container-custom relative pb-16 pt-32 text-white">
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="mb-8 inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white transition-colors hover:text-gray-300"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            BACK TO WORK
          </Link>

          {/* Category Tag */}
          <div className="mb-6 inline-block border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-widest">
            {caseStudy.category}
          </div>

          {/* Title - Extra Large */}
          <h1 className="font-display mb-6 text-5xl font-black uppercase leading-none text-white md:text-7xl lg:text-8xl">
            {caseStudy.title}
          </h1>

          {/* Client Name */}
          <p className="text-2xl font-light uppercase tracking-wide text-gray-300 md:text-3xl">
            {caseStudy.client}
          </p>
        </div>
      </section>

      {/* Overview - White Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-custom max-w-6xl">
          {/* Meta Info Grid */}
          <div className="mb-16 grid gap-12 border-b border-gray-200 pb-16 md:grid-cols-3">
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                CLIENT
              </h4>
              <p className="font-display text-2xl font-black uppercase">{caseStudy.client}</p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                TIMELINE
              </h4>
              <p className="font-display text-2xl font-black uppercase">{caseStudy.timeline}</p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-500">
                OUR ROLE
              </h4>
              <p className="font-display text-2xl font-black uppercase">{caseStudy.role}</p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-4xl">
            <p className="text-xl leading-relaxed text-gray-800 md:text-2xl">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Results - Black Background */}
      <section className="bg-black py-20 text-white md:py-32">
        <div className="container-custom max-w-6xl">
          <h2 className="font-display mb-16 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            KEY RESULTS
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index}>
                <div className="font-display mb-3 text-5xl font-black text-white md:text-6xl lg:text-7xl">
                  {metric.value}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge - White */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display mb-12 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            THE CHALLENGE
          </h2>
          <p className="text-xl leading-relaxed text-gray-800 md:text-2xl md:leading-relaxed">
            {caseStudy.challenge}
          </p>
        </div>
      </section>

      {/* First Gallery Image - Full Width */}
      <section className="relative h-[60vh] min-h-[500px] md:h-[80vh]">
        <Image
          src={caseStudy.gallery[0]}
          alt={`${caseStudy.title} - Image 1`}
          fill
          className="object-cover"
        />
      </section>

      {/* Our Approach - White */}
      <section className="bg-white py-20 md:py-32">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display mb-12 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            OUR APPROACH
          </h2>
          <p className="text-xl leading-relaxed text-gray-800 md:text-2xl md:leading-relaxed">
            {caseStudy.approach}
          </p>
        </div>
      </section>

      {/* Gallery Grid - 2 Images Side by Side */}
      {caseStudy.gallery.length > 2 && (
        <section className="grid md:grid-cols-2">
          <div className="relative h-[50vh] min-h-[400px] md:h-[70vh]">
            <Image
              src={caseStudy.gallery[1]}
              alt={`${caseStudy.title} - Image 2`}
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-[50vh] min-h-[400px] md:h-[70vh]">
            <Image
              src={caseStudy.gallery[2]}
              alt={`${caseStudy.title} - Image 3`}
              fill
              className="object-cover"
            />
          </div>
        </section>
      )}

      {/* The Results - Black */}
      <section className="bg-black py-20 text-white md:py-32">
        <div className="container-custom max-w-5xl">
          <h2 className="font-display mb-12 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            THE RESULTS
          </h2>
          <p className="mb-16 text-xl leading-relaxed text-gray-300 md:text-2xl md:leading-relaxed">
            {caseStudy.results}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Gallery Images - Full Width Stack */}
      {caseStudy.gallery.length > 3 && (
        <>
          {caseStudy.gallery.slice(3).map((image, index) => (
            <section key={index} className="relative h-[60vh] min-h-[500px] md:h-[80vh]">
              <Image
                src={image}
                alt={`${caseStudy.title} - Image ${index + 4}`}
                fill
                className="object-cover"
              />
            </section>
          ))}
        </>
      )}

      {/* CTA Section - Red Accent */}
      <section className="bg-brand-teal py-20 text-white md:py-32">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="font-display mb-8 text-4xl font-black uppercase md:text-5xl lg:text-6xl">
            WANT SIMILAR RESULTS?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed md:text-2xl">
            Let&apos;s discuss how we can help your brand achieve its goals and transform your
            digital presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-white bg-white px-12 py-4 font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white"
          >
            START PROJECT
          </Link>
        </div>
      </section>
    </div>
  )
}
