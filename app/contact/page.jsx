import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'
import TrackedLink from '@/components/TrackedLink'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Konsultasi Gratis — Agensi Kreatif Jakarta | Serasa Kreatif',
  description:
    'Hubungi Serasa Kreatif untuk konsultasi gratis. Agensi kreatif di Bintaro, Tangerang Selatan, melayani Jakarta & Jabodetabek. Mulai proyek branding dan social media Anda hari ini.',
  keywords: [
    'konsultasi gratis agensi kreatif jakarta',
    'hubungi agensi kreatif bintaro',
    'kontak serasa kreatif',
    'contact creative agency jakarta',
  ],
  alternates: {
    canonical: 'https://serasakreatif.id/contact',
    languages: {
      'en-US': 'https://serasakreatif.id/contact',
      'id-ID': 'https://serasakreatif.id/contact?lang=id',
      'x-default': 'https://serasakreatif.id/contact',
    },
  },
}

function ContactPageSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Kontak Serasa Kreatif',
    url: 'https://serasakreatif.id/contact',
    mainEntity: {
      '@type': 'LocalBusiness',
      name: 'Serasa Kreatif',
      telephone: '+6281288971453',
      email: 'serasakreatif.id@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Bintaro',
        addressLocality: 'Tangerang Selatan',
        addressRegion: 'Banten',
        postalCode: '15220',
        addressCountry: 'ID',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ContactPage({ searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  const isIndo = lang === 'id'

  return (
    <div className="min-h-screen bg-brand-teal pt-32 text-primary">
      <ContactPageSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: isIndo ? 'Kontak' : 'Contact', url: 'https://serasakreatif.id/contact' },
        ]}
      />
      {/* Hero Section - R/GA Style */}
      <section className="section-padding border-b border-teal-900">
        <div className="container-custom">
          <div className="mb-16">
            <SectionHeading className="mb-8 text-primary">
              {isIndo ? 'HUBUNGI KAMI' : 'CONTACT US'}
            </SectionHeading>
            <p className="max-w-3xl text-xl leading-relaxed text-white md:text-2xl">
              {isIndo
                ? 'Siap membuka potensi terbaik brand Anda? Mari diskusikan bagaimana kami dapat membantu bisnis Anda tumbuh.'
                : "Ready to unlock your brand's potential? Let's discuss how we can help your business grow."}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid - R/GA Style */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left: Contact Info */}
            <div className="space-y-12">
              {/* Indonesia Office */}
              <div>
                <div className="mt-4 space-y-2 text-white">
                  <p className="font-semibold text-accent">PT Selaras Makmur Perkasa</p>
                  <p>Klinik Kreatif Serasa</p>
                  <p>Bintaro, Tangerang Selatan</p>
                  <p>Indonesia 15220</p>
                </div>
                <TrackedLink
                  href="mailto:serasakreatif.id@gmail.com"
                  type="email"
                  label="contact_page_email"
                  className="hover:text-brand-yellow mt-4 inline-block text-sm text-primary underline transition-colors"
                >
                  serasakreatif.id@gmail.com
                </TrackedLink>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-brand-pink mb-3 text-xs font-bold uppercase tracking-wider">
                    {isIndo ? 'TELEPON' : 'PHONE'}
                  </h4>
                  <TrackedLink
                    href="tel:+6281288971453"
                    type="tel"
                    label="contact_page_phone"
                    className="hover:text-brand-yellow text-lg text-primary transition-colors"
                  >
                    +62 812-8897-1453
                  </TrackedLink>
                </div>

                <div>
                  <h4 className="text-brand-pink mb-3 text-xs font-bold uppercase tracking-wider">
                    INSTAGRAM
                  </h4>
                  <TrackedLink
                    href="https://www.instagram.com/serasakreatif.id/"
                    type="instagram"
                    label="contact_page_instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-pink text-lg text-primary transition-colors"
                  >
                    @serasakreatif.id
                  </TrackedLink>
                </div>

                <div>
                  <h4 className="text-brand-pink mb-3 text-xs font-bold uppercase tracking-wider">
                    WHATSAPP
                  </h4>
                  <TrackedLink
                    href="https://api.whatsapp.com/send?phone=6281288971453&text=Hello%20Serasa%20Kreatif,%20I'm%20interested%20in%20discussing%20branding%20%26%20social%20media."
                    type="whatsapp"
                    label="contact_page_whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-bold uppercase text-primary transition-colors hover:bg-[#20BA5A]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat on WhatsApp
                  </TrackedLink>
                </div>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    📍 {isIndo ? 'Buka di Google Maps' : 'Open on Google Maps'}
                  </a>
                  <a
                    href="https://share.google/13159QdwsmxTI0F4g"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
                  >
                    ⭐ {isIndo ? 'Ulas di Google Business' : 'Review on Google Business'}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h3 className="mb-8 font-sans text-2xl font-black uppercase tracking-tight">
                {isIndo ? 'Kirim Pesan' : 'Send Message'}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding border-t border-teal-900">
        <div className="container-custom">
          <div className="mb-8">
            <h3 className="font-sans text-2xl font-black uppercase tracking-tight text-primary">
              {isIndo ? 'Kunjungi Studio Kami' : 'Visit Our Studio'}
            </h3>
            <p className="mt-2 text-teal-100">
              {isIndo
                ? 'Berlokasi di Bintaro, Tangerang Selatan'
                : 'Located in Bintaro, South Tangerang'}
            </p>
          </div>
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
              className="h-[400px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Serasa Kreatif Studio Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
