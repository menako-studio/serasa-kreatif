import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import { buildMetadata, IDS, SITE_URL } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Blog & Tips Social Media dan Branding',
  description:
    'Artikel, panduan, dan insight dari Serasa Kreatif tentang agensi kreatif, social media management, branding, dan digital marketing untuk bisnis di Jakarta dan Jabodetabek.',
  path: '/blog',
})

// Real articles only. The previous index listed eight placeholder posts (stock photos, an
// invented "Best Creative Agency Award 2025", "new Jakarta office") that all resolved to one mock
// article via a catch-all /blog/[slug] route. Add new articles here when they are published.
const articles = [
  {
    slug: 'apa-itu-agensi-kreatif',
    title: 'Apa Itu Agensi Kreatif? Fungsi, Layanan, dan Manfaat untuk Bisnis Anda',
    description:
      'Panduan lengkap memahami apa itu agensi kreatif (creative agency), bedanya dengan advertising agency biasa, jenis layanan, serta manfaatnya untuk pertumbuhan bisnis Anda.',
    date: '2026-07-23',
    dateLabel: '23 Juli 2026',
    category: 'Panduan',
  },
  {
    slug: 'jasa-social-media-management-jakarta',
    title: 'Jasa Social Media Management Jakarta: Panduan & Estimasi Harga 2026',
    description:
      'Panduan lengkap jasa social media management di Jakarta & Bintaro. Ketahui lingkup kerja, komponen harga, manfaat untuk bisnis, dan cara memilih agensi yang tepat.',
    date: '2026-07-23',
    dateLabel: '23 Juli 2026',
    category: 'Social Media',
  },
  {
    slug: 'cara-memilih-agensi-sosial-media',
    title: '7 Tips Cara Memilih Agensi Sosial Media yang Tepat untuk Bisnis Anda',
    description:
      'Panduan praktis cara memilih agensi sosial media terbaik di Jakarta. Hindari salah pilih partner pemasaran dengan 7 kriteria penting ini.',
    date: '2026-07-23',
    dateLabel: '23 Juli 2026',
    category: 'Tips',
  },
]

function BlogSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'Blog Serasa Kreatif',
    url: `${SITE_URL}/blog`,
    inLanguage: 'id-ID',
    publisher: { '@id': IDS.business },
    isPartOf: { '@id': IDS.website },
    blogPost: articles.map((a) => ({
      '@type': 'BlogPosting',
      headline: a.title,
      url: `${SITE_URL}/blog/${a.slug}`,
      datePublished: a.date,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function BlogPage() {
  return (
    <div className="bg-white text-neutral-900 antialiased">
      <BlogSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />

      {/* Hero */}
      <section className="bg-primary pb-16 pt-32 text-white md:pb-24 md:pt-40 lg:pt-44">
        <div className="container-custom">
          <h1 className="font-sans text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
            BLOG & WAWASAN
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-xl">
            Panduan seputar agensi kreatif, social media management, dan branding untuk bisnis di
            Jakarta, Bintaro, dan Jabodetabek.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="border-primary group flex flex-col border-t-4 pt-6"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                  {article.category} · <time dateTime={article.date}>{article.dateLabel}</time>
                </p>
                <h2 className="text-primary mb-3 font-sans text-xl font-bold leading-tight tracking-tight">
                  <Link href={`/blog/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600">
                  {article.description}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-primary text-sm font-bold uppercase tracking-wider underline"
                >
                  Baca Artikel
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-gray-200 pt-8">
            <p className="text-gray-700">
              Mencari agensi kreatif di Bintaro?{' '}
              <Link href="/agensi-kreatif-bintaro" className="text-primary font-bold underline">
                Lihat layanan kami untuk Bintaro &amp; Tangerang Selatan
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
