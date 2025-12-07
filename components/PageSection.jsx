/**
 * PageSection - Reusable section wrapper with consistent padding and background
 */
export default function PageSection({
  children,
  className = '',
  bgColor = 'bg-white',
  paddingSize = 'default',
}) {
  const paddingSizes = {
    default: 'py-20 section-padding',
    large: 'py-24 section-padding',
    xlarge: 'py-32 section-padding',
    small: 'py-16 section-padding',
  }

  const paddingClass = paddingSizes[paddingSize] || paddingSizes.default

  return <section className={`${bgColor} ${paddingClass} ${className}`}>{children}</section>
}
