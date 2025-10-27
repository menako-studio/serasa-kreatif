import Image from 'next/image'
import Link from 'next/link'

/**
 * WorkCard - Komponen kartu portfolio/work yang reusable
 */
export default function WorkCard({ work }) {
  return (
    <Link href={`/portfolio/${work.slug}`} className="group overflow-hidden bg-white">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="border-t px-4 py-6">
        <div className="mb-1 text-xs font-bold uppercase tracking-wider text-gray-500">
          {work.category}
        </div>
        <h3 className="font-sans text-lg font-black uppercase text-black">{work.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{work.description}</p>
      </div>
    </Link>
  )
}
