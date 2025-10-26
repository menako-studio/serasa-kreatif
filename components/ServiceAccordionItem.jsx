import Image from 'next/image'

/**
 * ServiceAccordionItem - Komponen item accordion untuk services
 */
export default function ServiceAccordionItem({ service, index, isOpen, onToggle, previewImage }) {
  return (
    <div className="group">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-gray-600"
      >
        <span className="font-sans text-xl font-normal tracking-tight text-black md:text-2xl">
          {service.title}
        </span>

        <svg
          className={`ml-4 h-5 w-5 flex-shrink-0 transform transition-transform duration-300 ${
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
        <div className="pb-8 pt-2">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-gray-700">{service.description}</p>
              <p className="text-sm leading-relaxed text-gray-600">
                Kami membantu menyusun strategi, desain, dan eksekusi yang berfokus pada hasil
                bisnis — menggabungkan data, insight, dan kreativitas untuk mencapai target Anda.
              </p>
            </div>

            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <Image
                src={previewImage}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
