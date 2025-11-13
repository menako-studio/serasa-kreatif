/**
 * ProcessStep - Reusable component for displaying process steps
 */
export default function ProcessStep({ number, title, description }) {
  return (
    <div className="border-b border-white/10 py-8 transition-all hover:bg-white/5">
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-2">
          <div className="text-6xl font-black text-brand-teal">{number}</div>
        </div>
        <div className="md:col-span-10">
          <h3 className="mb-3 font-sans text-xl font-bold uppercase tracking-tight md:text-2xl">
            {title}
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  )
}
