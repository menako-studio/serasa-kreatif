import Link from 'next/link'

export default function CTASection({
  title = "Let's Create Something Amazing Together",
  description = "Ready to transform your brand? Contact us and let's discuss how we can help your business stand out.",
  primaryCTA = { text: 'Start Project', href: '/contact' },
  secondaryCTA = { text: 'View Portfolio', href: '/work' },
  background = 'primary',
}) {
  const bgClasses = {
    primary: 'bg-primary',
    accent: 'bg-accent-cyan',
    gradient: 'bg-gradient-to-r from-primary via-charcoal to-near-black',
  }

  const textClasses = {
    primary: 'text-white',
    accent: 'text-near-black',
    gradient: 'text-white',
  }

  return (
    <section className={`section-padding ${bgClasses[background]}`}>
      <div className="container-custom">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <h2 className={`${textClasses[background]}`}>{title}</h2>
          <p className={`text-xl ${background === 'accent' ? 'text-gray-800' : 'text-gray-300'}`}>
            {description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCTA.href}
              className={`btn ${
                background === 'accent'
                  ? 'bg-near-black hover:bg-charcoal text-white'
                  : 'bg-accent-cyan text-near-black hover:bg-opacity-90'
              } hover:scale-105`}
            >
              {primaryCTA.text}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className={`btn ${
                  background === 'accent'
                    ? 'border-near-black text-near-black hover:bg-near-black border-2 hover:text-white'
                    : 'border-2 border-white text-white hover:bg-white hover:text-primary'
                }`}
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
