/**
 * SectionHeading - Komponen heading konsisten untuk semua section
 */
export default function SectionHeading({ children, className = '', white = false }) {
  const color = white ? 'text-white' : 'text-primary'
  return (
    <h2
      className={`font-sans text-3xl font-black uppercase tracking-tight ${color} md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </h2>
  )
}
