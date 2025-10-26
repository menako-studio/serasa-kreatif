/**
 * SectionDescription - Komponen deskripsi konsisten untuk intro section
 */
export default function SectionDescription({ children, className = '' }) {
  return (
    <p className={`mt-6 max-w-3xl text-base leading-relaxed text-gray-700 ${className}`}>
      {children}
    </p>
  )
}
