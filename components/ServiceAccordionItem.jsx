import Image from 'next/image'

/**
 * ServiceAccordionItem - Komponen item accordion untuk services
 * Adjusted for dark theme: white headings, stronger contrast, larger typography
 */
export default function ServiceAccordionItem({
  service,
  _index,
  isOpen,
  onToggle,
  previewImage,
  variant = 'dark',
}) {
  const isDark = variant === 'dark'
  const headerText = isDark ? 'text-white' : 'text-primary'
  const headerHover = isDark ? 'hover:text-gray-200' : 'hover:text-gray-800'
  const descText = isDark ? 'text-gray-300' : 'text-primary'
  const detailsText = isDark ? 'text-gray-400' : 'text-primary'
  const imageBg = isDark ? 'bg-white/5' : 'bg-gray-100'

  return (
    <div className="group transition-all duration-300 hover:bg-gray-50">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between px-4 py-8 text-left transition-all duration-300 ${headerHover} hover:px-6`}
      >
        <span
          className={`font-sans text-2xl font-medium tracking-tight transition-all duration-300 group-hover:translate-x-2 md:text-3xl ${headerText}`}
        >
          {service.title}
        </span>

        <svg
          className={`ml-4 h-6 w-6 flex-shrink-0 transform transition-all duration-300 group-hover:scale-110 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="animate-fade-in px-4 pb-10 pt-4">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="animate-slide-up space-y-6">
              <p className={`text-base leading-relaxed ${descText}`}>
                {service.shortDescription || service.description}
              </p>
              {service.details && (
                <ul className={`grid gap-2 text-sm ${detailsText}`}>
                  {service.details.map((d, i) => (
                    <li
                      key={d + i}
                      className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"
                    >
                      <span className="mt-1 text-brand-teal">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.link && (
                <div className="pt-4">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 bg-brand-teal px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:scale-105 hover:bg-brand-accent"
                  >
                    <span>Explore {service.brandName || service.title}</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              )}
            </div>

            <div
              className={`relative aspect-video w-full overflow-hidden rounded ${imageBg} transition-all duration-300 group-hover:shadow-lg`}
            >
              {(service.preview || previewImage) && (
                <Image
                  src={service.preview || previewImage}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={100}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
