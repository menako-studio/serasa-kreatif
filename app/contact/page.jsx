import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Kontak',
  description:
    'Hubungi Serasa Kreatif. Kami siap mentransformasi merek Anda. Berlokasi di Bintaro, melayani Jakarta dan Jabodetabek.',
}

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary to-near-black text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">Mari Berkarya Bersama</h1>
          <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl">
            Siap membuka potensi merek Anda? Ceritakan proyek Anda kepada kami.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="space-y-8 lg:col-span-2">
              <div>
                <h2 className="mb-6">Hubungi Kami</h2>
                <p className="text-lg text-gray-600">
                  Kami siap menjawab pertanyaan Anda dan mendiskusikan bagaimana kami dapat membantu
                  merek Anda menonjol.
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-cyan/10">
                  <svg
                    className="h-6 w-6 text-accent-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold">Telepon</h3>
                  <a
                    href="tel:+6281288971453"
                    className="text-gray-600 transition-colors hover:text-accent-cyan"
                  >
                    +62 812-8897-1453
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-cyan/10">
                  <svg
                    className="h-6 w-6 text-accent-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold">Lokasi</h3>
                  <p className="text-gray-600">Klinik Kreatif Serasa</p>
                  <p className="text-gray-600">Bintaro, Tangerang Selatan</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent-cyan/10">
                  <svg
                    className="h-6 w-6 text-accent-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-display text-lg font-bold">Media Sosial</h3>
                  <a
                    href="https://www.instagram.com/serasakreatif.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-accent-cyan"
                  >
                    @serasakreatif.id
                  </a>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="rounded-xl border border-[#25D366]/20 bg-[#25D366]/10 p-6">
                <h3 className="mb-2 font-display text-lg font-bold">Prefer WhatsApp?</h3>
                <p className="mb-4 text-gray-600">Chat with us directly for quick responses.</p>
                <a
                  href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif,%20saya%20tertarik%20diskusi%20tentang%20branding%20%26%20social%20media."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-flex items-center gap-2 bg-[#25D366] text-white hover:bg-[#20BA5A]"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-gray-50 p-8 lg:p-12">
                <h3 className="mb-6 font-display text-2xl font-bold">Kirim Pesan</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Visit Our Studio</h2>
            <p className="text-xl text-gray-600">Located in the heart of Bintaro</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '500px' }}
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
