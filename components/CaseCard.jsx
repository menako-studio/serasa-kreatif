import Image from 'next/image'
import Link from 'next/link'

export default function CaseCard({ slug, title, client, category, image, description, metrics }) {
  return (
    <Link href={`/work/${slug}`} className="group block">
      <article className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Category tag */}
          <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm">
            <span className="text-sm font-medium text-primary">{category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-6">
          <div>
            <p className="mb-1 text-sm text-gray-500">{client}</p>
            <h3 className="font-display text-near-black group-hover:text-accent-cyan text-2xl font-bold transition-colors">
              {title}
            </h3>
          </div>

          <p className="line-clamp-2 text-gray-600">{description}</p>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex gap-6 border-t border-gray-100 pt-4">
              {metrics.map((metric, index) => (
                <div key={index}>
                  <div className="font-display text-accent-cyan text-2xl font-bold">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="flex items-center gap-2 pt-2 font-medium text-primary transition-all group-hover:gap-4">
            <span>View Case Study</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
