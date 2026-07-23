import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata = {
  title: 'Apa Itu Agensi Kreatif? Fungsi, Layanan, dan Manfaatnya — Serasa Kreatif',
  description:
    'Panduan lengkap memahami apa itu agensi kreatif (creative agency), bedanya dengan advertising agency biasa, jenis layanan, serta manfaatnya untuk pertumbuhan bisnis Anda.',
  keywords: [
    'apa itu agensi kreatif',
    'agensi kreatif adalah',
    'fungsi agensi kreatif',
    'creative agency jakarta',
    'layanan agensi kreatif',
    'perbedaan agensi kreatif dan advertising agency',
  ],
  alternates: {
    canonical: 'https://serasakreatif.id/blog/apa-itu-agensi-kreatif',
  },
  openGraph: {
    title: 'Apa Itu Agensi Kreatif? Fungsi, Layanan, dan Manfaat untuk Bisnis Anda',
    description:
      'Panduan lengkap memahami peran penting agensi kreatif dalam membangun brand dan strategi pemasaran digital bisnis Anda.',
    url: 'https://serasakreatif.id/blog/apa-itu-agensi-kreatif',
    images: ['/og-image.jpg'],
  },
}

function ArticleSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Apa Itu Agensi Kreatif? Fungsi, Layanan, dan Manfaat untuk Bisnis Anda',
    description:
      'Panduan lengkap memahami apa itu agensi kreatif (creative agency), bedanya dengan advertising agency biasa, jenis layanan, serta manfaatnya untuk pertumbuhan bisnis Anda.',
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
    mainEntityOfPage: 'https://serasakreatif.id/blog/apa-itu-agensi-kreatif',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function ArticleApaItuAgensiKreatif() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <ArticleSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: 'Blog', url: 'https://serasakreatif.id/blog' },
          {
            name: 'Apa Itu Agensi Kreatif',
            url: 'https://serasakreatif.id/blog/apa-itu-agensi-kreatif',
          },
        ]}
      />

      {/* Article Header */}
      <section className="bg-primary pb-16 pt-32 text-white md:pt-40 lg:pt-44">
        <div className="container-custom max-w-4xl">
          <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-teal">
            <span>Panduan &amp; Edukasi</span>
            <span>•</span>
            <span>23 Juli 2026</span>
          </div>
          <h1 className="mb-6 font-sans text-3xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Apa Itu Agensi Kreatif? Fungsi, Layanan, dan Manfaatnya Bagi Bisnis
          </h1>
          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            Di era digital yang serba cepat, membangun brand yang menonjol membutuhkan lebih dari
            sekadar produk bagus. Ketahui bagaimana agensi kreatif membantu akselerasi bisnis Anda.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-lg prose-neutral max-w-none">
            <p className="lead text-xl leading-relaxed text-neutral-700">
              Banyak pemilik bisnis dan pengusaha yang sering mendengar istilah{' '}
              <strong>agensi kreatif (creative agency)</strong>, namun belum sepenuhnya memahami apa
              yang membedakannya dengan penyedia jasa pemasaran lainnya.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-primary">Pengertian Agensi Kreatif</h2>
            <p>
              <strong>Agensi kreatif</strong> adalah perusahaan profesional yang menyediakan
              gabungan strategi komunikasi, ide visual, pembuatan konten, dan desain untuk membantu
              sebuah bisnis membangun identitas serta mengkomunikasikan pesan brand mereka kepada
              target audiens.
            </p>
            <p>
              Berbeda dari sekadar desainer lepas (freelancer) atau percetakan biasa, agensi kreatif
              bekerja secara holistik. Mereka memadukan pemikiran strategis bisnis dengan keahlian
              estetika visual.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Perbedaan Agensi Kreatif vs Advertising Agency
            </h2>
            <p>
              Meskipun sama-sama berada di industri pemasaran, ada perbedaan mendasar antara agensi
              kreatif dan agensi periklanan (advertising agency):
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Fokus Utama:</strong> Advertising agency lebih berfokus pada eksekusi dan
                penempatan media iklan (TV, billboard, Meta Ads, Google Ads). Sementara agensi
                kreatif berfokus pada pembentukan fondasi brand, ideasi cerita, dan konten estetis.
              </li>
              <li>
                <strong>Pendekatan:</strong> Agensi kreatif menciptakan aset brand yang dapat
                digunakan jangka panjang (identitas visual, desain kemasan, panduan konten),
                sedangkan agensi iklan fokus pada kampanye berdurasi tertentu.
              </li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Layanan Utama yang Ditawarkan Agensi Kreatif
            </h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>
                <strong>Branding &amp; Brand Strategy:</strong> Perancangan logo, warna identitas,
                panduan gaya (brand guideline), hingga positioning brand di pasar.
              </li>
              <li>
                <strong>Social Media Management:</strong> Perencanaan kalender konten, pembuatan
                desain postingan &amp; reels harian, copywriting, serta interaksi komunitas.
              </li>
              <li>
                <strong>Produksi Konten &amp; Video:</strong> Sesi foto produk komersial, pembuatan
                video reels/TikTok, dan corporate video production.
              </li>
              <li>
                <strong>Digital Marketing &amp; Campaigns:</strong> Perancangan kampanye promosi
                berbayar yang mengarahkan trafik ke website atau WhatsApp.
              </li>
            </ol>

            <h2 className="mb-4 text-2xl font-bold text-primary">
              Manfaat Bermitra dengan Agensi Kreatif Seperti Serasa Kreatif
            </h2>
            <p>
              Bagi UMKM maupun korporat di Indonesia, bermitra dengan agensi kreatif lokal
              memberikan keuntungan strategis:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Efisiensi Biaya:</strong> Anda mendapatkan akses ke tim ahli (strategist,
                designer, videographer, copywriter) tanpa harus merekrut tim in-house dalam jumlah
                besar.
              </li>
              <li>
                <strong>Konsistensi Brand:</strong> Tampilan visual dan pesan bisnis Anda terjaga
                secara profesional di seluruh saluran pemasaran.
              </li>
              <li>
                <strong>Pemahaman Pasar Lokal:</strong> Agensi lokal berbasis di Jabodetabek seperti
                Serasa Kreatif sangat memahami perilaku konsumen Indonesia modern.
              </li>
            </ul>

            <div className="my-10 border-l-4 border-brand-teal bg-neutral-50 p-6">
              <h4 className="mb-2 font-bold text-primary">Siap Melejitkan Brand Anda?</h4>
              <p className="mb-4 text-sm text-neutral-600">
                Diskusikan kebutuhan branding dan strategi media sosial Anda bersama tim ahli dari
                Serasa Kreatif Bintaro.
              </p>
              <a
                href="https://api.whatsapp.com/send?phone=6281288971453&text=Halo%20Serasa%20Kreatif%2C%20saya%20membaca%20artikel%20apa-itu-agensi-kreatif%20dan%20ingin%20konsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-teal px-6 py-3 text-sm font-bold uppercase text-primary hover:bg-brand-accent"
              >
                Hubungi Kami via WhatsApp
              </a>
            </div>
          </article>

          {/* Navigation to related */}
          <div className="mt-12 flex justify-between border-t border-neutral-200 pt-6 text-sm">
            <Link href="/blog" className="hover:text-brand-pink font-bold text-primary">
              ← Kembali ke Blog
            </Link>
            <Link
              href="/blog/jasa-social-media-management-jakarta"
              className="hover:text-brand-pink font-bold text-primary"
            >
              Panduan Social Media Management →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
