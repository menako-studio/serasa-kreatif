/**
 * SectionHeading - Komponen heading konsisten untuk semua section
 * `as` selects the heading level (default h2). Use as="h1" exactly once per page.
 */
export default function SectionHeading({
  children,
  className = '',
  white = false,
  as: Tag = 'h2',
}) {
  const color = white ? 'text-white' : 'text-primary'
  return (
    <Tag
      className={`font-sans text-3xl font-black uppercase tracking-tight ${color} md:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </Tag>
  )
}
