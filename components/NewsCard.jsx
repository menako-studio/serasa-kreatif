import Image from 'next/image'

/**
 * NewsCard - Komponen kartu berita yang reusable
 */
export default function NewsCard({ news }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden bg-gray-900">
        <Image
          src={news.image}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gray-500">
        {news.category}
      </div>
      <h3 className="font-sans text-lg font-black uppercase transition-colors group-hover:text-accent">
        {news.title}
      </h3>
    </div>
  )
}
