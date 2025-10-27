import Image from 'next/image'
import Link from 'next/link'

// This would fetch from API in production
async function getBlogPost(slug) {
  // Mock data for now
  return {
    id: 1,
    slug: slug,
    title: 'Masa Depan Loyalitas adalah Personal',
    date: 'May 14, 2025',
    category: 'Insights',
    author: 'Tim Serasa Kreatif',
    readTime: '8 menit baca',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    content: `
      <p>Dalam lanskap bisnis yang terus berkembang, konsep loyalitas pelanggan telah mengalami transformasi yang signifikan. Tidak lagi cukup untuk hanya menawarkan program poin atau diskon generik. Pelanggan modern menuntut pengalaman yang dipersonalisasi, relevan, dan bermakna.</p>

      <h2>Dari Touchpoint ke Sistem: Memikirkan Ulang Personalisasi</h2>
      
      <p>Selama bertahun-tahun, personalisasi telah dipandang sebagai taktik - sesuatu yang diterapkan pada titik-titik kontak tertentu untuk membuat pelanggan merasa istimewa. Namun, pendekatan ini terlalu sempit dan tidak konsisten. Pelanggan tidak berinteraksi dengan merek Anda dalam ruang hampa; mereka memiliki perjalanan kompleks yang mencakup berbagai saluran, perangkat, dan konteks.</p>

      <p>Personalisasi yang efektif bukan hanya tentang menambahkan nama pelanggan di email atau merekomendasikan produk berdasarkan pembelian sebelumnya. Ini tentang memahami konteks yang lebih luas dari kehidupan pelanggan - kebutuhan mereka saat ini, preferensi masa depan, dan nilai-nilai inti mereka.</p>

      <h2>Kekuatan Relevansi Kontekstual</h2>

      <p>Perilaku konsumen terus berubah. Apa yang relevan hari ini mungkin sudah usang besok. Merek yang menang adalah mereka yang dapat mengantisipasi perubahan ini dan menyesuaikan pengalaman mereka sesuai kebutuhan.</p>

      <p>Ini bukan hanya tentang mengumpulkan lebih banyak data - ini tentang bagaimana Anda menggunakan data tersebut untuk menciptakan pengalaman yang benar-benar bermakna. Merek harus beralih dari "apa yang dapat kami jual kepada pelanggan ini?" menjadi "bagaimana kami dapat menambah nilai dalam kehidupan pelanggan ini?"</p>

      <h2>Dari Transaksional ke Loyalitas Emosional</h2>

      <p>Program loyalitas tradisional berfokus pada transaksi. Namun, loyalitas sejati dibangun atas koneksi emosional. Pelanggan tidak loyal kepada merek karena poin rewards - mereka loyal karena merek tersebut memahami mereka, berbagi nilai-nilai mereka, dan secara konsisten memberikan pengalaman yang melebihi ekspektasi.</p>

      <p>Ini memerlukan pergeseran fundamental dalam cara merek berpikir tentang hubungan pelanggan. Alih-alih melihat setiap interaksi sebagai peluang untuk menjual, merek harus melihatnya sebagai peluang untuk membangun kepercayaan dan memperdalam koneksi.</p>

      <h2>Mengukur Loyalitas di Luar Transaksi</h2>

      <p>Metrik tradisional seperti frekuensi pembelian dan nilai seumur hidup pelanggan masih penting, tetapi mereka tidak memberikan gambaran lengkap. Merek perlu mengukur indikator loyalitas yang lebih dalam:</p>

      <ul>
        <li><strong>Keterlibatan emosional:</strong> Seberapa terhubung pelanggan dengan merek Anda di luar transaksi?</li>
        <li><strong>Advokasi:</strong> Apakah pelanggan merekomendasikan merek Anda kepada orang lain?</li>
        <li><strong>Kepercayaan:</strong> Apakah pelanggan berbagi data pribadi dan memberikan umpan balik yang jujur?</li>
        <li><strong>Keterlibatan komunitas:</strong> Apakah pelanggan berpartisipasi dalam komunitas merek Anda?</li>
      </ul>

      <h2>Masa Depan adalah Personal</h2>

      <p>Saat kita bergerak maju, merek yang berhasil adalah mereka yang dapat menciptakan pengalaman yang benar-benar personal - bukan hanya dipersonalisasi berdasarkan data demografis atau riwayat pembelian, tetapi dipahami dalam konteks kehidupan pelanggan yang lebih luas.</p>

      <p>Ini memerlukan investasi dalam teknologi, data, dan yang paling penting - dalam memahami apa yang benar-benar penting bagi pelanggan Anda. Namun, hasilnya sepadan: loyalitas yang lebih dalam, nilai seumur hidup yang lebih tinggi, dan hubungan yang lebih bermakna antara merek dan pelanggan.</p>
    `,
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)

  return (
    <div className="min-h-screen bg-white">
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
                <Link href="/blog" className="text-gray-500 hover:text-primary">
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
                Oleh <span className="font-semibold text-gray-900">{post.author}</span>
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
                href="/blog"
                className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Kembali ke Blog
              </Link>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding border-t border-gray-200 bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 font-sans text-2xl font-black uppercase tracking-tight">
            Artikel Terkait
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group">
                <Link href={`/blog/artikel-${i}`} className="block">
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-gray-900">
                    <Image
                      src={`https://images.unsplash.com/photo-${1542744173 + i * 1000}-8e7e53415bb0?w=800&h=600&fit=crop`}
                      alt={`Artikel ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute right-0 top-0 z-10 h-12 w-12 bg-red-600"></div>
                  </div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                    11.{10 + i}.25
                  </p>
                  <h3 className="font-sans text-lg font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
                    Artikel Menarik Lainnya Tentang Strategi Digital {i}
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
