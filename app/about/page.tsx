import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Pelajari lebih lanjut tentang Serasa Kreatif, agensi branding digital dan manajemen media sosial berbasis di Bintaro, Jakarta.',
}

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6">Tentang Serasa Kreatif</h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                Kami Serasa Kreatif, sebuah agensi multidisiplin untuk branding digital dan pemasaran
                media sosial. Anggap kami sebagai tempat berkumpulnya ide-ide segar, di mana
                kreativitas membuka peluang dan melahirkan kampanye yang berenergi.
              </p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-accent-cyan">
              <div className="absolute inset-0 flex items-center justify-center text-white text-8xl opacity-30">
                🥚
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="mb-8">Passion Kami</h2>
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            Mentransformasi merek menjadi kekuatan yang menarik. Kami ahli dalam brand, strategi
            sosial, dan pembuatan konten digital. Kami memadukan desain, cerita, dan data untuk
            menghadirkan kampanye yang berkesan.
          </p>
        </div>
      </section>

      {/* Why the Egg */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4">Mengapa Telur?</h2>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Ini adalah simbol potensi yang tersembunyi dalam kulit yang rapuh. Ini janji sesuatu yang
            luar biasa menunggu untuk menetas—dan itulah yang kami lakukan di Serasa Kreatif. Kami
            merawat, membuka, dan melepaskan potensi tersembunyi merek agar bisa menonjol.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2022', label: 'Founded' },
              { value: '50+', label: 'Projects Completed' },
              { value: '30+', label: 'Happy Clients' },
              { value: '8', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-5xl md:text-6xl font-display font-bold text-accent-cyan mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Specialties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive suite of services to elevate your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Design & Graphic Design',
              'Social Media Management',
              'Digital Branding',
              'Creative Content Creator',
              'Printing Services',
              'Website Design',
              'Creative Strategy',
              'Branding',
            ].map((specialty, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl border-2 border-transparent hover:border-accent-cyan transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full" />
                  <span className="text-lg font-medium text-gray-800">{specialty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Lokasi Kami</h2>
                  <p className="text-xl text-gray-700 mb-6">
                    Berbasis di Bintaro, Tangerang Selatan, kami melayani klien di Jakarta dan seluruh
                    Jabodetabek. Kehadiran lokal membantu kami memahami pasar dan menyampaikan solusi
                    yang sesuai dengan audiens Anda.
                  </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1"
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
                  <div>
                    <p className="font-medium text-gray-800">Klinik Kreatif Serasa</p>
                    <p className="text-gray-600">Bintaro, Tangerang Selatan, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-accent-cyan flex-shrink-0 mt-1"
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
                  <div>
                    <a
                      href="tel:+6281288971453"
                      className="font-medium text-gray-800 hover:text-accent-cyan transition-colors"
                    >
                      +62 812-8897-1453
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
                width="600"
                height="450"
                style={{ border: 0, width: '100%', height: '450px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent-cyan">
        <div className="container-custom text-center">
          <h2 className="text-near-black mb-6">Mari Bekerja Sama</h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Siap membuka potensi merek Anda? Hubungi kami dan mari ciptakan sesuatu yang luar biasa.
          </p>
          <a href="/contact" className="btn bg-near-black text-white hover:bg-charcoal">
            Kontak
          </a>
        </div>
      </section>
    </div>
  )
}
