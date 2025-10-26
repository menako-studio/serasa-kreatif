/**
 * SectionHeading - Komponen heading konsisten untuk semua section
 */
export default function SectionHeading({ children, className = '' }) {
  return (
    <h2
      className={`font-sans text-3xl font-black uppercase tracking-tight text-black md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  )
}
