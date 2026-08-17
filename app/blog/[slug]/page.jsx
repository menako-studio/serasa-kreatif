import Image from 'next/image'
import Link from 'next/link'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

// This would fetch from API in production
async function getBlogPost(slug, lang = 'en') {
  const isIndo = lang === 'id'

  if (isIndo) {
    return {
      id: 1,
      slug: slug,
      title: 'Masa Depan Loyalitas Pelanggan adalah Personalisasi',
      date: '14 Mei 2025',
      category: 'Wawasan',
      author: 'Tim Serasa Kreatif',
      readTime: 'Membaca 8 mnt',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
      content: `
        <p>Dalam lanskap bisnis yang terus berkembang, konsep loyalitas pelanggan telah mengalami transformasi yang signifikan. Tidak lagi cukup hanya menawarkan poin atau program diskon umum. Pelanggan modern menuntut pengalaman yang dipersonalisasi, relevan, dan bermakna.</p>

        <h2>Dari Titik Sentuh ke Sistem: Memikirkan Kembali Personalisasi</h2>
        
        <p>Selama bertahun-tahun, personalisasi telah dipandang sebagai taktik—sesuatu yang diterapkan pada titik sentuh tertentu untuk membuat pelanggan merasa istimewa. Namun, pendekatan ini terlalu sempit dan tidak konsisten. Pelanggan tidak berinteraksi dengan merek Anda di ruang hampa; mereka memiliki perjalanan kompleks di berbagai saluran, perangkat, dan konteks.</p>

        <p>Personalisasi yang efektif bukan hanya tentang menambahkan nama pelanggan ke email atau merekomendasikan produk berdasarkan pembelian sebelumnya. Ini tentang memahami konteks yang lebih luas dari kehidupan pelanggan—kebutuhan mereka saat ini, preferensi masa depan, dan nilai-nilai inti mereka.</p>

        <h2>Kekuatan Relevansi Kontekstual</h2>

        <p>Perilaku konsumen berubah terus-menerus. Apa yang relevan hari ini mungkin menjadi usang besok. Merek yang menang adalah mereka yang dapat mengantisipasi pergeseran ini dan menyesuaikan pengalaman mereka secara sesuai.</p>

        <p>Ini bukan hanya tentang mengumpulkan lebih banyak data—ini tentang bagaimana Anda menggunakan data tersebut untuk menciptakan pengalaman yang benar-benar bermakna. Merek harus berputar dari "apa yang bisa kami jual kepada pelanggan ini?" menjadi "bagaimana kami dapat menambah nilai pada kehidupan pelanggan ini?"</p>

        <h2>Dari Loyalitas Transaksional ke Emosional</h2>

        <p>Program loyalitas tradisional berfokus pada transaksi. Namun, loyalitas sejati dibangun di atas koneksi emosional. Pelanggan tidak setia pada merek karena poin hadiah—mereka setia karena merek memahami mereka, berbagi nilai-nilai mereka, dan secara konsisten memberikan pengalaman yang melebihi harapan.</p>

        <p>Ini membutuhkan pergeseran mendasar dalam cara merek memikirkan hubungan pelanggan. Alih-alih melihat setiap interaksi sebagai peluang untuk menjual, merek harus melihatnya sebagai kesempatan untuk membangun kepercayaan dan memperdalam koneksi.</p>

        <h2>Mengukur Loyalitas Melalui Transaksi</h2>

        <p>Metrik tradisional seperti frekuensi pembelian dan nilai seumur hidup pelanggan masih penting, tetapi mereka tidak memberikan gambaran lengkap. Merek perlu mengukur indikator loyalitas yang lebih mendalam:</p>

        <ul>
          <li><strong>Keterlibatan emosional:</strong> Seberapa terhubung pelanggan dengan merek Anda di luar transaksi?</li>
          <li><strong>Advokasi:</strong> Apakah pelanggan merekomendasikan merek Anda kepada orang lain?</li>
          <li><strong>Kepercayaan:</strong> Apakah pelanggan membagikan data pribadi dan memberikan umpan balik yang jujur?</li>
          <li><strong>Keterlibatan komunitas:</strong> Apakah pelanggan berpartisipasi dalam komunitas merek Anda?</li>
        </ul>

        <h2>Masa Depan adalah Personal</h2>

        <p>Saat kita melangkah maju, merek yang sukses adalah mereka yang dapat menciptakan pengalaman yang benar-benar personal—tidak hanya dipersonalisasi berdasarkan data demografis atau riwayat pembelian, tetapi dipahami dalam konteks yang lebih luas dari kehidupan pelanggan.</p>

        <p>Ini membutuhkan investasi dalam teknologi, data, dan yang paling penting, dalam memahami apa yang benar-benar penting bagi pelanggan Anda. Namun, hasilnya sangat sepadan: loyalitas yang lebih mendalam, nilai seumur hidup yang lebih tinggi, dan hubungan yang lebih bermakna antara merek dan pelanggan.</p>
      `,
    }
  }

  // Mock data for now (default English)
  return {
    id: 1,
    slug: slug,
    title: 'The Future of Customer Loyalty is Personal',
    date: 'May 14, 2025',
    category: 'Insights',
    author: 'Serasa Kreatif Team',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    content: `
      <p>In an increasingly crowded digital landscape, the concept of customer loyalty is undergoing a fundamental transformation. It's no longer enough to offer points, discounts, or generic perks. Today's consumers expect personalization that feels genuinely relevant, valuable, and seamless.</p>

      <h2>From Touchpoints to Systems: Rethinking Personalization</h2>
      
      <p>For years, personalization has been treated as a tactic—something applied to a specific touchpoint to make a customer feel recognized. But this approach is fractured and inconsistent. Customers don't experience your brand in silos; they experience it across a complex journey that spans devices, platforms, and contexts.</p>
    `,
  }
}

export async function generateMetadata({ params, searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  const post = await getBlogPost(params.slug, lang)

  return {
    title: `${post.title} — Serasa Kreatif`,
    description: `Baca artikel: ${post.title}. Insight dan strategi pemasaran digital dari Serasa Kreatif.`,
    alternates: {
      canonical: `https://serasakreatif.id/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — Serasa Kreatif`,
      description: `Baca artikel: ${post.title}. Insight dan strategi pemasaran digital dari Serasa Kreatif.`,
      url: `https://serasakreatif.id/blog/${post.slug}`,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} — Serasa Kreatif`,
      description: `Baca artikel: ${post.title}.`,
      images: [post.image],
    },
  }
}

function ArticleSchema({ post }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: `Insight dan strategi pemasaran digital: ${post.title}`,
    image: post.image,
    author: {
      '@type': 'Organization',
      name: post.author || 'Serasa Kreatif',
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
    mainEntityOfPage: `https://serasakreatif.id/blog/${post.slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default async function BlogPostPage({ params, searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  const isIndo = lang === 'id'
  const post = await getBlogPost(params.slug, lang)

  return (
    <div className="bg-white text-neutral-900 antialiased">
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: 'Beranda', url: 'https://serasakreatif.id' },
          { name: 'Blog', url: 'https://serasakreatif.id/blog' },
          { name: post.title, url: `https://serasakreatif.id/blog/${post.slug}` },
        ]}
      />
      {/* Hero Image */}
      <section className="relative h-[60vh] bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-90"
          priority
        />
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 border-b border-gray-200 pb-12">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm">
                <Link
                  href={`/blog${isIndo ? '?lang=id' : ''}`}
                  className="hover:text-brand-pink text-gray-500"
                >
                  Blog
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900">{post.category}</span>
              </nav>

              {/* Meta */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="mb-6 font-sans text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              {/* Author */}
              <div className="text-sm text-gray-600">
                {isIndo ? 'Oleh' : 'By'}{' '}
                <span className="font-semibold text-gray-900">{post.author}</span>
              </div>
            </header>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '--tw-prose-body': '#374151',
                '--tw-prose-headings': '#111827',
                '--tw-prose-links': '#04104b',
                '--tw-prose-bold': '#111827',
                '--tw-prose-counters': '#6b7280',
                '--tw-prose-bullets': '#6b7280',
              }}
            />

            {/* Footer */}
            <footer className="mt-16 border-t border-gray-200 pt-8">
              <Link
                href={`/blog${isIndo ? '?lang=id' : ''}`}
                className="hover:text-brand-pink inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {isIndo ? 'Kembali ke Blog' : 'Back to Blog'}
              </Link>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding border-t border-gray-200 bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 font-sans text-2xl font-black uppercase tracking-tight">
            {isIndo ? 'Artikel Terkait' : 'Related Articles'}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group">
                <Link href={`/blog/article-${i}${isIndo ? '?lang=id' : ''}`} className="block">
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-gray-900">
                    <Image
                      src={`https://images.unsplash.com/photo-${1542744173 + i * 1000}-8e7e53415bb0?w=800&h=600&fit=crop`}
                      alt={`Article ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-brand-pink absolute right-0 top-0 z-10 h-12 w-12"></div>
                  </div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                    11.{10 + i}.25
                  </p>
                  <h3 className="group-hover:text-brand-pink font-sans text-lg font-bold leading-tight tracking-tight transition-colors">
                    {isIndo
                      ? `Artikel Lebih Menarik Tentang Strategi Digital ${i}`
                      : `More Exciting Articles About Digital Strategy ${i}`}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
