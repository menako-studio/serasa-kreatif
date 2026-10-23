import Image from 'next/image'
import Link from 'next/link'
import SectionHeading from '@/components/SectionHeading'
import SectionDescription from '@/components/SectionDescription'
import PrintingContactForm from '@/components/PrintingContactForm'
import PrintingReels from '@/components/PrintingReels'
import TrackedLink from '@/components/TrackedLink'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { buildMetadata, IDS } from '@/lib/seo'
import { Lang } from '@/components/LanguageContext'

export const metadata = buildMetadata({
  title: 'Cetak Offset B2B Jakarta — Serasa Printing',
  description:
    'Jasa cetak offset B2B premium oleh Serasa Printing di Jakarta. Spesialis kemasan custom, alat tulis perusahaan, katalog, dan materi marketing. Percetakan offset di Bintaro, Jabodetabek.',
  path: '/services/printing',
  image: {
    url: '/assets/images/serasa-printing/serasa_b2b_layanan-cetak-offset_1x1_v1.jpg',
    width: 800,
    height: 800,
    alt: 'Serasa Printing — Cetak Offset B2B Jakarta',
  },
})

function PrintingServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'B2B Offset Printing & Packaging',
    // Same legal entity and address as the sitewide LocalBusiness node (no second, conflicting one).
    provider: { '@id': IDS.business },
    brand: { '@type': 'Brand', name: 'Serasa Printing' },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    description:
      'Jasa cetak offset B2B premium: kemasan custom, stationery kantor, company profile, dan materi promosi.',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function SerasaPrintingPage() {
  return (
    <div className="bg-white text-neutral-900 antialiased">
      <PrintingServiceSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: 'Layanan', url: 'https://serasakreatif.id/services' },
          { name: 'Cetak Offset B2B', url: 'https://serasakreatif.id/services/printing' },
        ]}
      />
      {/* 1. HERO SECTION - R/GA Style with Dark Navy Background */}
      <section className="bg-primary relative overflow-hidden pb-16 pt-32 text-white md:pb-24 md:pt-40 lg:pt-44">
        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Headline & Copy */}
            <div className="animate-slide-up space-y-8 lg:col-span-7">
              <div className="space-y-3">
                <span className="text-brand-teal block text-xs font-black uppercase tracking-[0.3em]">
                  PART OF @SERASAKREATIF.ID
                </span>
                {/* Indonesian keyword H1 by default ("cetak offset B2B Jakarta"); English on toggle. */}
                <h1 className="font-sans text-[2.75rem] font-black uppercase leading-[0.9] tracking-tighter md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem]">
                  <Lang
                    id={
                      <>
                        CETAK OFFSET B2B <br className="hidden md:block" />
                        <span className="text-brand-teal">JAKARTA</span>
                      </>
                    }
                    en={
                      <>
                        B2B PRINTING <br className="hidden md:block" />
                        <span className="text-brand-teal">SPECIALIST</span>
                      </>
                    }
                  />
                </h1>
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-gray-300 md:text-xl">
                <Lang
                  id="Serasa Printing melayani cetak offset berkualitas untuk kebutuhan perusahaan: dari alat tulis kantor, katalog, hingga kemasan custom dengan presisi warna yang terjaga. Berbasis di Bintaro, melayani Jakarta & Jabodetabek."
                  en="Partner with us for affordable, high-quality offset printing. We support corporate needs from standard corporate stationery to custom packaging with rigorous color precision."
                />
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#quotation-form"
                  className="bg-brand-pink border-brand-pink hover:text-brand-pink inline-flex items-center border-2 px-8 py-4 font-bold uppercase text-white transition-all duration-300 hover:bg-transparent"
                >
                  Get Corporate Quotation
                </Link>
                <TrackedLink
                  href="https://api.whatsapp.com/send?phone=6281288971453&text=Hello%20Serasa%20Printing%2C%20I%20would%20like%20to%20consult%20about%20our%20company%27s%20B2B%20printing%20needs."
                  type="whatsapp"
                  label="printing_hero_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary inline-flex items-center border-2 border-white px-8 py-4 font-bold uppercase text-white transition-all duration-300 hover:bg-white"
                >
                  Consult with Specialist
                </TrackedLink>
                <TrackedLink
                  href="https://www.instagram.com/serasaprinting/"
                  type="instagram"
                  label="printing_hero_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-brand-teal text-brand-teal hover:bg-brand-teal inline-flex items-center border-2 px-8 py-4 font-bold uppercase transition-all duration-300 hover:text-white"
                >
                  @serasaprinting
                </TrackedLink>
              </div>
            </div>

            {/* Right: Mosaic Layout Grid Placeholder */}
            <div className="animation-delay-200 animate-fade-in lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="border-brand-teal/20 bg-brand-blue relative aspect-[4/5] overflow-hidden border">
                  <Image
                    src="/assets/images/serasa-printing/serasa_b2b_mesin-offset-kualitas_1x1_v1.jpg"
                    alt="Serasa Printing Offset Press"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority
                  />
                  <div className="border-brand-teal bg-primary/80 absolute bottom-4 left-4 right-4 border-l-4 p-4 backdrop-blur-sm">
                    <p className="text-brand-teal text-xs font-bold uppercase tracking-wider">
                      Production Line
                    </p>
                    <p className="mt-1 text-sm font-black text-white">HEIDELBERG SPEEDMASTER</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="border-brand-pink/20 bg-brand-blue relative aspect-[4/3] overflow-hidden border">
                    <Image
                      src="/assets/images/serasa-printing/serasa_b2b_hook-takut-hasil-zonk_1x1_v1.jpg"
                      alt="Custom Corrugated Packaging Boxes"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="from-primary/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-4">
                      <span className="text-brand-pink text-xs font-black uppercase tracking-wider">
                        Packaging Box
                      </span>
                    </div>
                  </div>

                  <div className="bg-brand-teal text-primary hover:bg-brand-accent flex aspect-[4/3] flex-col justify-between p-6 transition-colors">
                    <span className="text-primary/80 text-xs font-black uppercase tracking-[0.2em]">
                      Ecosystem
                    </span>
                    <div>
                      <h3 className="text-2xl font-black uppercase leading-tight tracking-tight">
                        CMYK
                      </h3>
                      <p className="mt-1 text-xs font-medium leading-snug">
                        International color precision standards for consistent B2B client
                        satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background grid pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </section>

      {/* 2. B2B CORE BENEFITS GRID - White Background */}
      <section className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-pink mb-2 block text-xs font-black uppercase tracking-[0.25em]">
              WHY PARTNER WITH US
            </span>
            <SectionHeading>CORE B2B ADVANTAGES</SectionHeading>
            <SectionDescription>
              We understand corporate needs for consistent quality, reliable timelines, and
              reasonable pricing. Serasa Printing operates as a seamless extension of your creative
              team.
            </SectionDescription>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefit 1: Offset Precision */}
            <div className="hover:border-brand-teal group space-y-6 border border-neutral-200 p-8 transition-all duration-300">
              <div className="border-brand-teal text-primary group-hover:bg-brand-teal flex h-12 w-12 items-center justify-center border-l-4 bg-neutral-100 transition-colors duration-300 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-primary font-sans text-xl font-bold uppercase tracking-tight">
                  Industrial Precision
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Powered by a large-capacity Heidelberg offset press for sharp detail,
                  high-standard CMYK color consistency, and precise post-print finishing on every
                  job.
                </p>
              </div>
            </div>

            {/* Benefit 2: Wholesale/Bulk Affordability */}
            <div className="hover:border-brand-pink group space-y-6 border border-neutral-200 p-8 transition-all duration-300">
              <div className="border-brand-pink group-hover:bg-brand-pink text-primary flex h-12 w-12 items-center justify-center border-l-4 bg-neutral-100 transition-colors duration-300 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-primary font-sans text-xl font-bold uppercase tracking-tight">
                  Wholesale Affordability
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  Progressive wholesale pricing that benefits your business. The larger the print
                  volume, the lower the per-unit production cost — with full pricing transparency.
                </p>
              </div>
            </div>

            {/* Benefit 3: Dedicated Corporate Partnership */}
            <div className="hover:border-brand-yellow group space-y-6 border border-neutral-200 p-8 transition-all duration-300">
              <div className="border-brand-yellow group-hover:bg-brand-yellow text-primary flex h-12 w-12 items-center justify-center border-l-4 bg-neutral-100 transition-colors duration-300 group-hover:text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-primary font-sans text-xl font-bold uppercase tracking-tight">
                  Dedicated Account Manager
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  A single point of contact for all communications — ensuring print specifications,
                  physical sample approvals, and delivery timelines run without friction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES CATALOG GRID - Light Grey Background */}
      <section className="section-padding relative border-b border-t border-neutral-200 bg-neutral-50">
        <div className="container-custom">
          <div className="mb-16 max-w-3xl">
            <span className="text-brand-teal mb-2 block text-xs font-black uppercase tracking-[0.25em]">
              OUR SOLUTIONS
            </span>
            <SectionHeading>SERVICES CATALOG</SectionHeading>
            <SectionDescription>
              A wide range of offset print products with variable material specifications and
              premium finishing options to elevate your brand&apos;s aesthetic value.
            </SectionDescription>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Category 1: Corporate Stationery */}
            <div className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/assets/images/serasa-printing/serasa_b2b_layanan-cetak-offset_1x1_v1.jpg"
                  alt="Corporate Stationery Printing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="border-brand-teal border-l-2 pl-3">
                  <h3 className="text-primary font-sans text-lg font-bold uppercase tracking-tight">
                    Corporate Stationery
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Office Identity
                  </p>
                </div>
                <p className="text-sm text-neutral-600">
                  Premium business cards, letterheads, official company envelopes, folder maps, and
                  self-adhesive office notepads.
                </p>
              </div>
            </div>

            {/* Category 2: Custom Packaging */}
            <div className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/assets/images/serasa-printing/serasa_b2b_hook-takut-hasil-zonk_1x1_v1.jpg"
                  alt="Custom Packaging Box Printing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="border-brand-pink border-l-2 pl-3">
                  <h3 className="text-primary font-sans text-lg font-bold uppercase tracking-tight">
                    Custom Packaging
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Boxes & Sleeves
                  </p>
                </div>
                <p className="text-sm text-neutral-600">
                  Corrugated boxes, corrugated packaging, product sleeves, cosmetic boxes, souvenir
                  hardboxes, and custom paper bags.
                </p>
              </div>
            </div>

            {/* Category 3: Marketing Collaterals */}
            <div className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/assets/images/serasa-printing/serasa_b2b_pain-point-vendor-molor_1x1_v1.jpg"
                  alt="Marketing Collaterals Printing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="border-brand-yellow border-l-2 pl-3">
                  <h3 className="text-primary font-sans text-lg font-bold uppercase tracking-tight">
                    Marketing Collateral
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Flyers & Brochures
                  </p>
                </div>
                <p className="text-sm text-neutral-600">
                  Folded brochures, promotional flyers, product catalogs, corporate company
                  profiles, promotional posters, and desk calendars.
                </p>
              </div>
            </div>

            {/* Category 4: Books & Corporate Magazines */}
            <div className="group overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                <Image
                  src="/assets/images/serasa-printing/serasa_b2b_cta-pria-tunjuk_1x1_v1.jpg"
                  alt="Books and Corporate Magazines Printing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="border-primary border-l-2 pl-3">
                  <h3 className="text-primary font-sans text-lg font-bold uppercase tracking-tight">
                    Books & Magazines
                  </h3>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Editorial Print
                  </p>
                </div>
                <p className="text-sm text-neutral-600">
                  Annual reports, corporate magazines, product manuals, and hardcover or softcover
                  book printing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Video Reels Section */}
      <PrintingReels />

      {/* 4. STEP-BY-STEP B2B WORKFLOW TIMELINE - Dark Navy Background */}
      <section className="section-padding bg-primary-dark relative text-white">
        <div className="container-custom">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-brand-yellow mb-2 block text-xs font-black uppercase tracking-[0.25em]">
              OUR PROCESS
            </span>
            <SectionHeading white={true}>B2B WORKFLOW TIMELINE</SectionHeading>
            <p className="mt-4 text-sm text-gray-400">
              How we systematically guide and serve corporate clients from initial inquiry through
              to final delivery.
            </p>
          </div>

          {/* Workflow Timeline */}
          <div className="relative space-y-12 border-l border-white/10 pl-6 md:grid md:grid-cols-5 md:gap-4 md:space-y-0 md:border-l-0 md:pl-0">
            {/* Step 1 */}
            <div className="group relative space-y-4 md:text-center">
              <div className="border-brand-teal bg-primary text-brand-teal group-hover:bg-brand-teal group-hover:text-primary flex h-12 w-12 items-center justify-center border-2 text-lg font-black transition-colors duration-300 md:mx-auto">
                01
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-base font-bold uppercase tracking-wider text-white">
                  Inquiry & Specs
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 md:px-4">
                  Client provides detailed specifications: material, paper weight, finishing, size,
                  and print quantity.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative space-y-4 md:text-center">
              <div className="border-brand-pink text-brand-pink group-hover:bg-brand-pink bg-primary group-hover:text-primary flex h-12 w-12 items-center justify-center border-2 text-lg font-black transition-colors duration-300 md:mx-auto">
                02
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-base font-bold uppercase tracking-wider text-white">
                  Quick Quotation
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 md:px-4">
                  We issue a transparent and competitive official quotation within 24 hours of
                  receiving your specifications.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative space-y-4 md:text-center">
              <div className="border-brand-yellow text-brand-yellow group-hover:bg-brand-yellow bg-primary group-hover:text-primary flex h-12 w-12 items-center justify-center border-2 text-lg font-black transition-colors duration-300 md:mx-auto">
                03
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-base font-bold uppercase tracking-wider text-white">
                  Sample Proofing
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 md:px-4">
                  Production of print samples (digital dummy or physical offset proof) for color and
                  layout approval before mass run.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="group relative space-y-4 md:text-center">
              <div className="border-brand-accent bg-primary text-brand-accent group-hover:bg-brand-accent group-hover:text-primary flex h-12 w-12 items-center justify-center border-2 text-lg font-black transition-colors duration-300 md:mx-auto">
                04
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-base font-bold uppercase tracking-wider text-white">
                  Mass Production
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 md:px-4">
                  High-speed mass offset printing run with constant quality monitoring throughout
                  the entire production process.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="group relative space-y-4 md:text-center">
              <div className="bg-primary group-hover:text-primary flex h-12 w-12 items-center justify-center border-2 border-white text-lg font-black text-white transition-colors duration-300 group-hover:bg-white md:mx-auto">
                05
              </div>
              <div className="space-y-2">
                <h4 className="font-sans text-base font-bold uppercase tracking-wider text-white">
                  QC & Delivery
                </h4>
                <p className="text-xs leading-relaxed text-gray-400 md:px-4">
                  Final quality control on every printed sheet, followed by neat packaging and
                  direct delivery to your office or warehouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LEAD CAPTURE / CONTACT SECTION - White Background */}
      <section id="quotation-form" className="section-padding relative bg-white">
        <div className="container-custom">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            {/* Left Column: Direct Info & Support */}
            <div className="space-y-8 lg:col-span-5">
              <div className="space-y-3">
                <span className="text-brand-pink block text-xs font-black uppercase tracking-[0.25em]">
                  CORPORATE REQUEST
                </span>
                <SectionHeading>REQUEST A QUOTE</SectionHeading>
                <SectionDescription>
                  Contact us now to discuss your company&apos;s printing needs. Our specialist team
                  is ready to help find the most efficient materials and finishing options for your
                  corporate budget.
                </SectionDescription>
              </div>

              <div className="space-y-6 border-t border-neutral-200 pt-8">
                <div>
                  <h4 className="text-brand-pink mb-2 text-xs font-bold uppercase tracking-wider">
                    Ecosystem Partnership
                  </h4>
                  <p className="text-sm text-neutral-600">
                    Serasa Printing is part of{' '}
                    <span className="text-primary font-bold">Serasa Kreatif</span>, a branding
                    studio and digital agency in Jabodetabek. We serve corporates formally and can
                    issue official tax invoices (Faktur Pajak) and service agreements (SPK).
                  </p>
                </div>

                <div>
                  <h4 className="text-brand-pink mb-2 text-xs font-bold uppercase tracking-wider">
                    Direct Support
                  </h4>
                  <div className="space-y-4">
                    <TrackedLink
                      href="https://api.whatsapp.com/send?phone=6281288971453&text=Hello%20Serasa%20Printing%2C%20I%20would%20like%20to%20request%20a%20printing%20price%20list."
                      type="whatsapp"
                      label="printing_direct_support_whatsapp"
                      className="text-primary hover:text-brand-teal flex items-center gap-2 text-lg font-black underline underline-offset-4 transition-colors"
                    >
                      +62 812-8897-1453 (WhatsApp)
                    </TrackedLink>
                    <TrackedLink
                      href="https://www.instagram.com/serasaprinting/"
                      type="instagram"
                      label="printing_direct_support_instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-brand-teal flex items-center gap-2 text-lg font-black underline underline-offset-4 transition-colors"
                    >
                      @serasaprinting (Instagram)
                    </TrackedLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: B2B Contact Form Component */}
            <div className="border border-neutral-200 bg-neutral-50 p-8 shadow-sm lg:col-span-7">
              <h3 className="text-primary mb-6 font-sans text-2xl font-black uppercase tracking-tight">
                PRINTING INQUIRY FORM
              </h3>
              <PrintingContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
