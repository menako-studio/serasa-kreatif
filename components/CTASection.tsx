import Link from 'next/link'

interface CTASectionProps {
  title?: string
  description?: string
  primaryCTA?: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
  background?: 'primary' | 'accent' | 'gradient'
}

export default function CTASection({
  title = 'Mari Ciptakan Sesuatu yang Menakjubkan Bersama',
  description = 'Siap mentransformasi merek Anda? Hubungi kami dan mari diskusikan bagaimana kami dapat membantu bisnis Anda menonjol.',
  primaryCTA = { text: 'Mulai Proyek', href: '/contact' },
  secondaryCTA = { text: 'Lihat Portofolio', href: '/work' },
  background = 'primary',
}: CTASectionProps) {
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className={`${textClasses[background]}`}>{title}</h2>
          <p className={`text-xl ${background === 'accent' ? 'text-gray-800' : 'text-gray-300'}`}>
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryCTA.href}
              className={`btn ${
                background === 'accent'
                  ? 'bg-near-black text-white hover:bg-charcoal'
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
                    ? 'border-2 border-near-black text-near-black hover:bg-near-black hover:text-white'
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
