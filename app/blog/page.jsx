import Image from 'next/image'

export const metadata = {
  title: 'Berita',
  description:
    'Berita terbaru, artikel, dan pembaruan dari Serasa Kreatif. Ikuti perkembangan terbaru dari agensi kreatif kami.',
}

// Sample news data - replace with actual CMS data
const newsData = [
  {
    id: 1,
    title: 'Serasa Kreatif Luncurkan Kampanye Brand Identity untuk Klien Lokal',
    date: '12.08.25',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Strategi Konten Kreatif di Era Digital',
    date: '11.28.25',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Tim Serasa Kreatif Raih Penghargaan Best Creative Agency 2025',
    date: '11.15.25',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Masa Depan Desain Brand: Tren dan Prediksi',
    date: '10.30.25',
    category: 'Insights',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Serasa Kreatif Membuka Kantor Baru di Jakarta',
    date: '10.18.25',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Ketika Brand Menjadi Nyata: Studi Kasus Kampanye Digital',
    date: '10.05.25',
    category: 'Case Study',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Workshop: Membangun Brand Identity yang Kuat',
    date: '09.22.25',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Bagaimana Serasa Kreatif Menggunakan AI untuk Kampanye yang Lebih Baik',
    date: '09.08.25',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
]

const categories = ['Semua', 'Brand Identity', 'Digital Strategy', 'Awards', 'Insights', 'Company News', 'Case Study', 'Events', 'Technology']
const years = ['2025', '2024', '2023']

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <h1 className="font-sans text-6xl font-black tracking-tight uppercase md:text-7xl lg:text-8xl">
            BERITA
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-3">
              <div className="sticky space-y-8 top-24">
                {/* Sort By */}
                <div>
                  <h3 className="mb-4 font-sans text-xs font-bold tracking-wider text-gray-500 uppercase">
                    Urutkan Berdasarkan
                  </h3>
                  <div className="space-y-2">
                    <button className="block w-full text-sm text-left text-gray-900 transition-colors hover:text-primary">
                      Semua
                    </button>
                  </div>
                </div>

                {/* Categories */}
                <div>
                  <h3 className="mb-4 font-sans text-xs font-bold tracking-wider text-gray-500 uppercase">
                    Kategori
                  </h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-sm text-left text-gray-700 transition-colors hover:text-primary"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Years */}
                <div>
                  <h3 className="mb-4 font-sans text-xs font-bold tracking-wider text-gray-500 uppercase">
                    Tahun
                  </h3>
                  <div className="space-y-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        className="block w-full text-sm text-left text-gray-700 transition-colors hover:text-primary"
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* News Grid */}
            <div className="lg:col-span-9">
              <div className="grid gap-12 md:grid-cols-2">
                {newsData.map((news) => (
                  <article key={news.id} className="group">
                    <a href={`/blog/${news.id}`} className="block">
                      {/* Image */}
                      <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-gray-900">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Red accent corner */}
                        <div className="absolute top-0 right-0 z-10 w-12 h-12 bg-red-600"></div>
                      </div>

                      {/* Date */}
                      <p className="mb-2 text-xs tracking-wider text-gray-500 uppercase">
                        {news.date}
                      </p>

                      {/* Title */}
                      <h2 className="mb-2 font-sans text-xl font-bold leading-tight tracking-tight transition-colors group-hover:text-primary">
                        {news.title}
                      </h2>

                      {/* Category */}
                      <p className="text-sm text-gray-600">{news.category}</p>
                    </a>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="flex justify-center pt-8 mt-16 border-t border-gray-200">
                <button className="flex items-center gap-2 font-sans text-sm font-bold tracking-wider uppercase transition-colors group hover:text-primary">
                  <span>Tampilkan Lebih Banyak</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
