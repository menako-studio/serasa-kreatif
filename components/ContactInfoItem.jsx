/**
 * ContactInfoItem - Reusable component for displaying contact information
 */
export default function ContactInfoItem({ label, children, href }) {
  const content = href ? (
    <a href={href} className="text-sm text-gray-900 transition-colors hover:text-brand-teal">
      {children}
    </a>
  ) : (
    <p className="text-sm text-gray-900">{children}</p>
  )

  return (
    <div>
      <div className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">{label}</div>
      {content}
    </div>
  )
}
