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
      <section className="relative flex min-h-screen items-end bg-black pt-32 ">
        <Image
          src={caseStudy.image}
          alt={caseStudy.title}
          fill
          className="object-cover opacity-50"
          priority
          quality={100}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        <div className="container-custom relative pb-16 pt-32 text-white">
          <div className="mb-6 flex flex-col gap-3">
            {/* Back Button */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-white transition-colors hover:text-gray-300"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              BACK TO PORTFOLIO
            </Link>

            {/* Category Tag */}
            <div className="inline-block w-fit border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              {caseStudy.category}
            </div>
          </div>

          {/* Title - Extra Large */}
          <h1 className="font-display mb-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
            {caseStudy.title}
          </h1>

          {/* Client Name */}
          <p className="text-lg font-medium uppercase tracking-wider text-gray-300 md:text-xl">
            {caseStudy.client}
          </p>
        </div>
      </section>

      {/* Overview - White Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom max-w-6xl">
          {/* Meta Info Grid */}
          <div className="mb-12 grid gap-8 border-b border-gray-200 pb-12 md:grid-cols-3 md:gap-10">
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                CLIENT
              </h4>
              <p className="font-display text-xl font-black uppercase leading-tight md:text-2xl">
                {caseStudy.client}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                TIMELINE
              </h4>
              <p className="font-display text-xl font-black uppercase leading-tight md:text-2xl">
                {caseStudy.timeline}
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
                OUR ROLE
              </h4>
              <p className="font-display text-xl font-black uppercase leading-tight md:text-2xl">
                {caseStudy.role}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
              {caseStudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Results - Black Background */}
      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-custom max-w-6xl">
          <h2 className="font-display mb-12 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            KEY RESULTS
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index}>
                <div className="font-display mb-2 text-4xl font-black leading-none text-white md:text-5xl lg:text-5xl">
                  {metric.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-gray-400 ">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Challenge - White */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display mb-8 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            THE CHALLENGE
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
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
          quality={100}
        />
      </section>

      {/* Our Approach - White */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display mb-8 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            OUR APPROACH
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 md:text-xl md:leading-relaxed">
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
              quality={100}
            />
          </div>
          <div className="relative h-[50vh] min-h-[400px] md:h-[70vh]">
            <Image
              src={caseStudy.gallery[2]}
              alt={`${caseStudy.title} - Image 3`}
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </section>
      )}

      {/* The Results - Black */}
      <section className="bg-black py-16 text-white md:py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="font-display mb-8 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            THE RESULTS
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-300 md:mb-12 md:text-xl md:leading-relaxed">
            {caseStudy.results}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="border border-white/30 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
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
                quality={100}
              />
            </section>
          ))}
        </>
      )}

      {/* CTA Section - Red Accent */}
      <section className="bg-brand-teal py-16 text-white md:py-24">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="font-display mb-6 text-3xl font-black uppercase leading-tight md:text-4xl lg:text-5xl">
            WANT SIMILAR RESULTS?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed md:mb-10 md:text-lg">
            Let&apos;s discuss how we can help your brand achieve its goals and transform your
            digital presence.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center border-2 border-white bg-white px-10 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-white md:px-12 md:py-4"
          >
            START PROJECT
          </Link>
        </div>
      </section>
    </div>
  )
}
