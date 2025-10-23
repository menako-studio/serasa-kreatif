import Image from 'next/image'
import Link from 'next/link'

interface CaseCardProps {
  slug: string
  title: string
  client: string
  category: string
  image: string
  description: string
  metrics?: {
    label: string
    value: string
  }[]
}

export default function CaseCard({
  slug,
  title,
  client,
  category,
  image,
  description,
  metrics,
}: CaseCardProps) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category tag */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-sm font-medium text-primary">{category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">{client}</p>
            <h3 className="text-2xl font-display font-bold text-near-black group-hover:text-accent-cyan transition-colors">
              {title}
            </h3>
          </div>

          <p className="text-gray-600 line-clamp-2">{description}</p>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex gap-6 pt-4 border-t border-gray-100">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="text-2xl font-display font-bold text-accent-cyan">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 text-primary font-medium pt-2 group-hover:gap-4 transition-all">
            <span>Lihat Studi Kasus</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
