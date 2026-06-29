import Image from 'next/image'
import Link from 'next/link'

/**
 * WorkCard - Komponen kartu portfolio/work yang reusable
 */
export default function WorkCard({ work }) {
  return (
    <Link
      href={`/portfolio/${work.slug}`}
      className="shadow-xs group overflow-hidden rounded-xl border border-gray-100 bg-white transition hover:shadow-md"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-xl bg-gray-100">
        <Image
          src={work.image}
          alt={work.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
        />
      </div>

      <div className="border-t px-4 py-6">
        <div className="text-brand-pink mb-1 text-xs font-bold uppercase tracking-wider">
          {work.category}
        </div>
        <h3 className="font-sans text-lg font-black uppercase text-primary">{work.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{work.description}</p>
      </div>
    </Link>
  )
}
