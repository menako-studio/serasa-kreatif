import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Agensi Kreatif Bintaro & Tangerang Selatan — Serasa Kreatif',
  description:
    'Serasa Kreatif, agensi kreatif terpercaya di Bintaro, Tangerang Selatan. Jasa social media management, branding, iklan digital & produksi video untuk UMKM dan korporat di Jabodetabek. Konsultasi gratis!',
  keywords: [
    'agensi kreatif bintaro',
    'agensi kreatif tangerang selatan',
    'agensi sosial media bintaro',
    'jasa social media management bintaro',
    'jasa branding tangerang selatan',
    'creative agency bintaro',
    'agensi kreatif jabodetabek',
    'agensi digital marketing bintaro',
  ],
  alternates: {
    canonical: 'https://serasakreatif.id/agensi-kreatif-bintaro',
  },
  openGraph: {
    title: 'Agensi Kreatif Bintaro & Tangerang Selatan — Serasa Kreatif',
    description:
      'Agensi kreatif Bintaro dengan layanan social media, branding, dan iklan digital untuk bisnis Jabodetabek.',
    url: 'https://serasakreatif.id/agensi-kreatif-bintaro',
    images: ['/og-image.jpg'],
  },
}

// Structured data for this local landing page
function LocalLandingSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://serasakreatif.id/#localbusiness',
    name: 'Serasa Kreatif',
    alternateName: 'Klinik Kreatif Serasa',
    description:
      'Agensi kreatif dan social media management di Bintaro, Tangerang Selatan melayani Jabodetabek.',
    url: 'https://serasakreatif.id',
    telephone: '+6281288971453',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bintaro',
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      postalCode: '15220',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.25913,
      longitude: 106.707277,
    },
    hasMap: 'https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

const SERVICES = [
  {
    icon: '📱',
    title: 'Social Media Management',
    desc: 'Pengelolaan akun Instagram, TikTok & platform lainnya dengan konten kreatif harian, strategi konten bulanan, dan laporan performa.',
  },
  {
    icon: '🎨',
    title: 'Branding & Identitas Visual',
    desc: 'Pembangunan identitas merek dari nol: logo, panduan merek, desain kemasan, dan semua materi visual yang konsisten.',
  },
  {
    icon: '📢',
    title: 'Iklan Digital (Meta & Google Ads)',
    desc: 'Kampanye iklan berbayar dengan targeting strategis untuk menjangkau audiens yang tepat dan meningkatkan konversi.',
  },
  {
    icon: '🎬',
    title: 'Produksi Video & Konten',
    desc: 'Produksi video komersial, reels kreatif, dan konten visual premium untuk media sosial dan kebutuhan korporat.',
  },
  {
    icon: '🖨️',
    title: 'Cetak Offset B2B',
    desc: 'Layanan cetak offset premium: kemasan custom, alat tulis perusahaan, katalog, dan materi marketing.',
  },
]

const WHY_US = [
  {
    stat: '48+',
    label: 'Ulasan Google',
    desc: 'Rating 5.0 bintang dari klien puas',
  },
  {
    stat: '3+',
    label: 'Tahun Berpengalaman',
    desc: 'Membantu brand lokal tumbuh di era digital',
  },
  {
    stat: '20+',
    label: 'Brand Dilayani',
    desc: 'Dari UMKM hingga korporat di Jabodetabek',
  },
]

export default function AgencyBintaroPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <LocalLandingSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          {
            name: 'Agensi Kreatif Bintaro',
            url: 'https://serasakreatif.id/agensi-kreatif-bintaro',
          },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary pb-16 pt-32 text-white md:pt-40 lg:pt-44">
        <div className="container-custom">
          <div className="max-w-4xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-brand-teal">
              📍 Bintaro, Tangerang Selatan — Melayani Jabodetabek
            </span>
            <h1 className="mb-6 font-sans text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl lg:text-7xl">
              AGENSI KREATIF <span className="text-brand-teal">BINTARO</span> &amp; TANGERANG
              SELATAN
            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
              Serasa Kreatif adalah agensi sosial media dan creative agency lokal di Bintaro yang
              membantu bisnis Anda tumbuh. Social media management, branding, iklan digital, dan
              produksi konten — semuanya dalam satu tim yang berpengalaman.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif%2C%20saya%20ingin%20konsultasi%20gratis%20untuk%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-teal px-8 py-4 font-bold uppercase text-primary transition-colors hover:bg-brand-accent"
              >
                💬 Konsultasi Gratis via WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white px-8 py-4 font-bold uppercase text-white transition-colors hover:bg-white hover:text-primary"
              >
                Lihat Layanan Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose local agency */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16">
        <div className="container-custom">
          <h2 className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
            Mengapa Pilih Agensi Kreatif Lokal?
          </h2>
          <p className="mb-12 max-w-3xl text-2xl font-bold leading-snug text-primary md:text-3xl">
            Kami paham pasar Indonesia karena kami bagian darinya — berbasis di Bintaro, melayani
            Jabodetabek dan seluruh Indonesia.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {WHY_US.map((item) => (
              <div key={item.stat} className="border border-neutral-200 bg-white p-8">
                <div className="mb-2 font-sans text-5xl font-black text-brand-teal">
                  {item.stat}
                </div>
                <div className="mb-1 font-bold uppercase tracking-wide text-primary">
                  {item.label}
                </div>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
            Layanan Kami
          </h2>
          <p className="mb-12 max-w-2xl text-3xl font-black uppercase leading-tight text-primary md:text-4xl">
            SOLUSI KREATIF UNTUK BISNIS ANDA
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="group border border-neutral-200 p-8 transition-all duration-300 hover:border-brand-teal hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-3 font-sans text-lg font-bold uppercase tracking-tight text-primary">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Map */}
      <section className="bg-neutral-50 py-20">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
                Lokasi Kami
              </h2>
              <p className="mb-6 text-3xl font-black uppercase leading-tight text-primary">
                STUDIO DI BINTARO,
                <br />
                TANGERANG SELATAN
              </p>
              <div className="mb-8 space-y-4 text-neutral-700">
                <p>
                  <strong className="text-primary">Alamat:</strong> Bintaro, Tangerang Selatan,
                  Banten 15220
                </p>
                <p>
                  <strong className="text-primary">Telepon / WhatsApp:</strong>{' '}
                  <a href="tel:+6281288971453" className="underline hover:text-brand-teal">
                    +62 812-8897-1453
                  </a>
                </p>
                <p>
                  <strong className="text-primary">Email:</strong>{' '}
                  <a
                    href="mailto:serasakreatif.id@gmail.com"
                    className="underline hover:text-brand-teal"
                  >
                    serasakreatif.id@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-primary">Jam Operasional:</strong> Senin–Jumat,
                  09.00–18.00 WIB
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-primary/90"
                >
                  📍 Buka di Google Maps
                </a>
                <a
                  href="https://share.google/13159QdwsmxTI0F4g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary px-6 py-3 text-sm font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  ⭐ Ulas di Google Business
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
                className="h-[400px] w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serasa Kreatif — Agensi Kreatif Bintaro, Tangerang Selatan"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section — Local SEO signal */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="mb-3 font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
            Pertanyaan Umum
          </h2>
          <p className="mb-12 text-3xl font-black uppercase text-primary">FAQ</p>
          <div className="max-w-3xl space-y-0 divide-y divide-neutral-200 border-t border-neutral-200">
            {[
              {
                q: 'Apa itu agensi kreatif dan mengapa bisnis saya membutuhkannya?',
                a: 'Agensi kreatif adalah mitra strategis yang membantu bisnis Anda membangun identitas merek, mengelola media sosial, dan menjalankan kampanye digital. Dengan agensi kreatif seperti Serasa Kreatif, Anda mendapatkan tim profesional yang fokus pada pertumbuhan bisnis Anda.',
              },
              {
                q: 'Apakah Serasa Kreatif hanya melayani klien di Bintaro?',
                a: 'Tidak! Meskipun berbasis di Bintaro, Tangerang Selatan, kami melayani klien di seluruh Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan Indonesia. Kami bisa bekerja secara remote maupun tatap langsung.',
              },
              {
                q: 'Berapa estimasi biaya jasa social media management?',
                a: 'Biaya disesuaikan dengan kebutuhan spesifik bisnis Anda — termasuk jumlah platform, frekuensi posting, dan lingkup konten. Hubungi kami untuk konsultasi gratis dan penawaran yang transparan.',
              },
              {
                q: 'Bagaimana cara memulai kerja sama dengan Serasa Kreatif?',
                a: 'Mudah! Hubungi via WhatsApp +62 812-8897-1453 atau isi formulir di halaman Kontak. Tim kami akan merespons dalam 1x24 jam untuk menjadwalkan sesi konsultasi gratis.',
              },
            ].map((item) => (
              <div key={item.q} className="py-8">
                <h3 className="mb-3 font-sans text-lg font-bold text-primary">{item.q}</h3>
                <p className="leading-relaxed text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-teal py-20 text-primary">
        <div className="container-custom text-center">
          <h2 className="mb-6 font-sans text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl">
            SIAP BERKEMBANG?
            <br />
            KONSULTASI GRATIS SEKARANG
          </h2>
          <p className="mb-10 text-lg text-primary/80">
            Agensi kreatif Bintaro siap membantu bisnis Anda tumbuh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary px-10 py-5 font-bold uppercase text-white transition-colors hover:bg-primary/90"
            >
              💬 Chat WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center border-2 border-primary px-10 py-5 font-bold uppercase text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
