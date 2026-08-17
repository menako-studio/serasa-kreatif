import TrackedLink from '@/components/TrackedLink'

/**
 * ContactInfoItem - Reusable component for displaying contact information
 */
export default function ContactInfoItem({ label, children, href }) {
  const type = href?.startsWith('tel:') ? 'tel' : href?.startsWith('mailto:') ? 'email' : 'link'
  const content = href ? (
    <TrackedLink
      href={href}
      type={type}
      label={`contact_info_${label.toLowerCase().replace(/\s+/g, '_')}`}
      className="text-sm text-gray-900 transition-colors hover:text-brand-teal"
    >
      {children}
    </TrackedLink>
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
