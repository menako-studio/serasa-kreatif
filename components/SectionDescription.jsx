/**
 * SectionDescription - Komponen deskripsi konsisten untuk intro section
 */
export default function SectionDescription({ children, className = '', white = false }) {
  const color = white ? 'text-gray-300' : 'text-gray-700'
  return (
    <p className={`mt-6 max-w-3xl text-base leading-relaxed ${color} ${className}`}>{children}</p>
  )
}
