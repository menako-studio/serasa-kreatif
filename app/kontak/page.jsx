import ContactForm from '@/components/ContactForm'
import SectionHeading from '@/components/SectionHeading'

export const metadata = {
  title: 'Kontak - Serasa Kreatif',
  description:
    'Hubungi Serasa Kreatif. Kami siap mentransformasi merek Anda. Berlokasi di Bintaro, melayani Jakarta dan Jabodetabek.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black pt-24 text-white">
      {/* Hero Section - R/GA Style */}
      <section className="section-padding border-b border-gray-800">
        <div className="container-custom">
          <div className="mb-16">
            <SectionHeading className="mb-8 text-white">HUBUNGI KAMI</SectionHeading>
            <p className="max-w-3xl text-xl leading-relaxed text-gray-400 md:text-2xl">
              Siap membuka potensi merek Anda? Mari diskusikan bagaimana kami dapat membantu bisnis
              Anda berkembang.
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
                <h3 className="mb-1 font-sans text-xl font-black uppercase tracking-tight">ID</h3>
                <div className="mt-4 space-y-2 text-gray-400">
                  <p>Klinik Kreatif Serasa</p>
                  <p>Bintaro, Tangerang Selatan</p>
                  <p>Indonesia 15220</p>
                </div>
                <a
                  href="mailto:serasakreatif.id@gmail.com"
                  className="mt-4 inline-block text-sm text-white underline transition-colors hover:text-gray-400"
                >
                  serasakreatif.id@gmail.com
                </a>
              </div>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    TELEPON
                  </h4>
                  <a
                    href="tel:+6281288971453"
                    className="text-lg text-white transition-colors hover:text-gray-400"
                  >
                    +62 812-8897-1453
                  </a>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    INSTAGRAM
                  </h4>
                  <a
                    href="https://www.instagram.com/serasakreatif.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-white transition-colors hover:text-gray-400"
                  >
                    @serasakreatif.id
                  </a>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                    WHATSAPP
                  </h4>
                  <a
                    href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif,%20saya%20tertarik%20diskusi%20tentang%20branding%20%26%20social%20media."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#20BA5A]"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Chat di WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <h3 className="mb-8 font-sans text-2xl font-black uppercase tracking-tight">
                Kirim Pesan
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding border-t border-gray-800">
        <div className="container-custom">
          <div className="mb-8">
            <h3 className="font-sans text-2xl font-black uppercase tracking-tight">
              Kunjungi Studio Kami
            </h3>
            <p className="mt-2 text-gray-400">Berlokasi di Bintaro, Tangerang Selatan</p>
          </div>
          <div className="overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '500px', filter: 'grayscale(100%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
