import Image from 'next/image'

export const metadata = {
  title: 'About Us',
  description:
    'Learn more about Serasa Kreatif, a digital branding agency and social media management based in Bintaro, Jakarta.',
}

const TEAM_MEMBERS = [
  {
    name: 'Muhamad Yaser Ali',
    role: 'Creative Director',
    location: 'Jakarta',
    image: '/assets/images/team/muhamad-yaser-ali-creative-director.png',
  },
  {
    name: 'Ervitasari',
    role: 'Project Manager',
    location: 'Jakarta',
    image: '/assets/images/team/ervitasari-project-manager.png',
  },
  {
    name: 'Ersita Shaliha',
    role: 'Senior Graphic Designer',
    location: 'Jakarta',
    image: '/assets/images/team/ersita-shaliha-senior-graphic-designer.png',
  },
  {
    name: 'Hamdara Luthi',
    role: 'Video Editor',
    location: 'Jakarta',
    image: '/assets/images/team/hamdara-luthi-video-editor.png',
  },
  {
    name: 'Aldy Efrianzah',
    role: 'Advertiser',
    location: 'Jakarta',
    image: '/assets/images/team/aldy-efrianzah-advertiser.png',
  },
  {
    name: 'Raudhatul Jannah',
    role: 'Team Member',
    location: 'Jakarta',
    image: '/assets/images/team/raudhatul-jannah.png',
  },
]

const WORK_PROCESS = [
  {
    number: '1',
    title: 'We Discover',
    description: 'We discover new insights and opportunities through strategic perspectives.',
  },
  {
    number: '2',
    title: 'We Explore	',
    description: 'We explore ideas and concepts to find what works best for your brand.',
  },
  {
    number: '3',
    title: 'We Focus',
    description: 'We strategize with clear goals to drive meaningful commercial impact.',
  },
  {
    number: '4',
    title: 'We Create',
    description: 'We create with precision and purpose to build brands that stand out.',
  },
  {
    number: '5',
    title: 'We Reflect',
    description:
      'We optimize and report monthly, refining each strategy through performance insights and client feedback.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - R/GA style geometric visual */}
      <section className="section-padding bg-white pt-32">
        <div className="container-custom">
          <h1 className="mb-16 font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            ABOUT US
          </h1>

          {/* Statement */}
          <div className="max-w-3xl">
            <p className="mb-8 text-lg leading-relaxed text-gray-900 md:text-xl">
              Scale faster. Stand out stronger. With Serasa Kreatif.
            </p>
            <p className="text-lg leading-relaxed text-gray-900 md:text-xl">
              We believe every brand has a story worth telling. Through creativity and strategy, we
              help brands thrive in the digital era, stand out, and drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement - Light background */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm leading-relaxed text-gray-700">
                Our commitment is reflected in years of experience collaborating with diverse
                companies across various industries: enhancing brand identity, elevating digital
                presence, driving growth, and bringing businesses closer to their ultimate goals.
                Your growth journey starts with Serasa Kreatif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Dark section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="mb-16 font-sans text-3xl font-black uppercase tracking-tight md:text-4xl lg:text-5xl">
            Our Framework
          </h2>

          <div className="mb-12 max-w-3xl">
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              We integrate strategic thinking, creative excellence, and technical expertise to
              consistently deliver impactful results for brands.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-0 border-t border-white/10">
            {WORK_PROCESS.map((step) => (
              <div
                key={step.number}
                className="border-b border-white/10 py-8 transition-all hover:bg-white/5"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <div className="text-6xl font-black text-brand-teal">{step.number}</div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="mb-3 font-sans text-xl font-bold uppercase tracking-tight md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Light section with team grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h3 className="mb-12 font-sans text-2xl font-black uppercase tracking-tight">Our Team</h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 aspect-square overflow-hidden bg-gray-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    quality={100}
                    className="object-cover grayscale transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <h4 className="mb-1 font-sans text-sm font-bold uppercase tracking-tight">
                  {member.name}
                </h4>
                <p className="mb-1 text-xs text-gray-600">{member.role}</p>
                <p className="text-xs text-gray-500">{member.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-sans text-3xl font-black uppercase tracking-tight md:text-4xl">
                OUR LOCATION
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Based in Bintaro, South Tangerang, we serve clients in Jakarta and throughout
                Jabodetabek. Our local presence helps us understand the market and deliver solutions
                that resonate with your audience.
              </p>
              <div className="space-y-4 border-t border-gray-200 pt-6">
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Address
                  </div>
                  <p className="text-sm text-gray-900">Bintaro, South Tangerang, Indonesia</p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Phone
                  </div>
                  <a
                    href="tel:+6281288971453"
                    className="text-sm text-gray-900 transition-colors hover:text-brand-teal"
                  >
                    +62 812-8897-1453
                  </a>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                    Email
                  </div>
                  <a
                    href="mailto:serasakreatif.id@gmail.com"
                    className="text-sm text-gray-900 transition-colors hover:text-brand-teal"
                  >
                    serasakreatif.id@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps - grayscale for R/GA aesthetic */}
            <div className="overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
                width="600"
                height="500"
                style={{
                  border: 0,
                  width: '100%',
                  height: '500px',
                  filter: 'grayscale(100%)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Dark navy background */}
      <section className="section-padding bg-brand-teal text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            Ready to grow? Let&apos;s make it happen with Serasa
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center border-2 border-white px-8 py-4 font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-primary"
          >
            Start Project
          </a>
        </div>
      </section>
    </div>
  )
}
