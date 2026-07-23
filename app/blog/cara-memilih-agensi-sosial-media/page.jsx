import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: '7 Tips Cara Memilih Agensi Sosial Media yang Tepat untuk Bisnis Anda — Serasa Kreatif',
  description:
    'Panduan praktis cara memilih agensi sosial media terbaik di Jakarta. Hindari salah pilih partner pemasaran dengan 7 kriteria penting ini.',
  keywords: [
    'cara memilih agensi sosial media',
    'tips memilih social media agency',
    'agensi sosial media terbaik jakarta',
    'kriteria agensi kreatif',
    'memilih social media agency indonesia',
  ],
  alternates: {
    canonical: 'https://serasakreatif.id/blog/cara-memilih-agensi-sosial-media',
  },
  openGraph: {
    title: '7 Tips Cara Memilih Agensi Sosial Media yang Tepat untuk Bisnis Anda',
    description:
      'Panduan memilih mitra agensi sosial media yang berpengalaman dan transparan untuk pertumbuhan brand Anda.',
    url: 'https://serasakreatif.id/blog/cara-memilih-agensi-sosial-media',
    images: ['/og-image.jpg'],
  },
}

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: '7 Tips Cara Memilih Agensi Sosial Media yang Tepat untuk Bisnis Anda',
    description:
      'Panduan praktis cara memilih agensi sosial media terbaik di Jakarta. Hindari salah pilih partner pemasaran dengan 7 kriteria penting ini.',
    author: {
      '@type': 'Organization',
      name: 'Serasa Kreatif',
      url: 'https://serasakreatif.id',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Serasa Kreatif',
      logo: {
        '@type': 'ImageObject',
        url: 'https://serasakreatif.id/assets/images/logo-serasa.png',
      },
    },
    datePublished: '2026-07-23',
    dateModified: '2026-07-23',
    mainEntityOfPage: 'https://serasakreatif.id/blog/cara-memilih-agensi-sosial-media',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ArticleCaraMemilihAgensi() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ArticleSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: 'Blog', url: 'https://serasakreatif.id/blog' },
          {
            name: 'Cara Memilih Agensi Sosial Media',
            url: 'https://serasakreatif.id/blog/cara-memilih-agensi-sosial-media',
          },
        ]}
      />

      {/* Article Header */}
      <section className="bg-primary pb-16 pt-32 text-white md:pt-40 lg:pt-44">
        <div className="container-custom max-w-4xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-teal">
            <span>Panduan Bisnis</span>
            <span>•</span>
            <span>23 Juli 2026</span>
          </div>
          <h1 className="mb-6 font-sans text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            7 Tips Cara Memilih Agensi Sosial Media yang Tepat Bagi Bisnis Anda
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            Salah memilih mitra agensi bisa menghamburkan anggaran pemasaran tanpa hasil nyata.
            Pelajari 7 kriteria utama sebelum menandatangani kesepakatan.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl leading-relaxed text-neutral-700">
              Memilih <strong>agensi sosial media (social media agency)</strong> yang tepat adalah
              salah satu keputusan paling penting bagi pemilik usaha. Partner yang tepat akan
              mempercepat pertumbuhan brand, sedangkan mitra yang kurang tepat hanya akan menambah
              masalah operasional.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              7 Kriteria Memilih Agensi Sosial Media Terbaik
            </h2>

            <h3 className="text-xl font-bold text-neutral-900">
              1. Periksa Portofolio &amp; Studi Kasus Nyata
            </h3>
            <p>
              Jangan hanya tergiur oleh janji manis. Minta agensi menunjukkan portofolio proyek yang
              pernah mereka tangani. Lihat apakah mereka memiliki pengalaman di industri yang
              relevan atau telah membuktikan hasil yang terukur.
            </p>

            <h3 className="text-xl font-bold text-neutral-900">
              2. Pahami Estetika &amp; Kualitas Visual Mereka
            </h3>
            <p>
              Buka akun media sosial agensi itu sendiri atau karya klien mereka. Apakah desain
              visualnya menarik, modern, dan konsisten? Kualitas konten yang mereka buat untuk diri
              mereka sendiri adalah cerminan dari apa yang akan Anda dapatkan.
            </p>

            <h3 className="text-xl font-bold text-neutral-900">
              3. Transparansi Komunikasi &amp; Harga
            </h3>
            <p>
              Agensi yang baik selalu transparan mengenai perincian biaya, deliverable (apa saja
              yang dikerjakan), dan alur kerja. Pastikan tidak ada biaya tersembunyi.
            </p>

            <h3 className="text-xl font-bold text-neutral-900">
              4. Kemampuan Menggabungkan Strategi &amp; Eksekusi
            </h3>
            <p>
              Membuat gambar bagus saja tidak cukup. Agensi harus bisa menjelaskan <em>mengapa</em>{' '}
              konten tersebut dibuat dan bagaimana dampaknya terhadap tujuan bisnis Anda (misal:
              awareness, leads, atau sales).
            </p>

            <h3 className="text-xl font-bold text-neutral-900">
              5. Ketersediaan Laporan Analisis Bulanan
            </h3>
            <p>
              Pastikan agensi menyediakan laporan performa berkala (monthly performance report) yang
              menjelaskan angka-angka penting seperti reach, engagement, dan saran perbaikan untuk
              bulan berikutnya.
            </p>

            <h3 className="text-xl font-bold text-neutral-900">
              6. Lokasi dan Kemudahan Komunikasi
            </h3>
            <p>
              Memilih agensi berbasis lokal di Jakarta/Bintaro seperti Serasa Kreatif mempermudah
              koordinasi, baik sesi meeting langsung, koordinasi shooting konten, maupun pemahaman
              budaya konsumen lokal.
            </p>

            <h3 className="text-xl font-bold text-neutral-900">7. Testimoni &amp; Ulasan Klien</h3>
            <p>
              Cek ulasan di Google Business Profile agensi tersebut. Ulasan positif dari klien asli
              adalah bukti komitmen layanan mereka.
            </p>

            <div className="my-10 border-l-4 border-brand-teal bg-neutral-50 p-6">
              <h4 className="mb-2 font-bold text-primary">
                Siap Berdiskusi Dengan Tim Serasa Kreatif?
              </h4>
              <p className="mb-4 text-sm text-neutral-600">
                Kami siap mendengarkan tantangan bisnis Anda dan memberikan rekomendasi strategi
                media sosial yang transparan.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif%2C%20saya%20membaca%20artikel%207%20tips%20memilih%20agensi%20dan%20inisiatif%20diskusi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-teal px-6 py-3 text-sm font-bold uppercase text-primary hover:bg-brand-accent"
              >
                Mulai Diskusi via WhatsApp
              </a>
            </div>
          </article>

          {/* Navigation to related */}
          <div className="mt-12 flex justify-between border-t border-neutral-200 pt-6 text-sm">
            <Link
              href="/blog/jasa-social-media-management-jakarta"
              className="hover:text-brand-pink font-bold text-primary"
            >
              ← Panduan Social Media Management
            </Link>
            <Link href="/blog" className="hover:text-brand-pink font-bold text-primary">
              Kembali ke Blog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
