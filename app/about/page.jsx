import Image from 'next/image'
import PageSection from '@/components/PageSection'
import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'
import ProcessStep from '@/components/ProcessStep'
import ContactInfoItem from '@/components/ContactInfoItem'

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
    title: 'We Explore',
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
      {/* Hero */}
      <PageSection bgColor="bg-white" paddingSize="xlarge">
        <div className="container-custom">
          <h1 className="mb-12 font-sans text-5xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-7xl">
            ABOUT US
          </h1>
          <div className="max-w-4xl">
            <p className="mb-6 text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl lg:text-4xl">
              Scale faster. Stand out stronger. With Serasa Kreatif.
            </p>
            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              We believe every brand has a story worth telling. Through creativity and strategy, we
              help brands thrive in the digital era, stand out, and drive real business results.
            </p>
          </div>
        </div>
      </PageSection>

      {/* Mission Statement */}
      <PageSection bgColor="bg-gray-50">
        <div className="container-custom">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="mb-6 font-sans text-xs font-bold uppercase tracking-widest text-gray-500">
                Our Commitment
              </h2>
              <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
                Our commitment is reflected in years of experience collaborating with diverse
                companies across various industries: enhancing brand identity, elevating digital
                presence, driving growth, and bringing businesses closer to their ultimate goals.
                Your growth journey starts with Serasa Kreatif.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How We Work */}
      <PageSection bgColor="bg-primary text-white" paddingSize="large">
        <div className="container-custom">
          <SectionHeading white className="mb-6">
            Our Framework
          </SectionHeading>
          <div className="mb-16 max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-300">
              We integrate strategic thinking, creative excellence, and technical expertise to
              consistently deliver impactful results for brands.
            </p>
          </div>
          <div className="space-y-0 border-t border-white/10">
            {WORK_PROCESS.map((step) => (
              <ProcessStep
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* Team */}
      <PageSection bgColor="bg-gray-50" paddingSize="large">
        <div className="container-custom">
          <div className="mb-16">
            <SectionHeading className="mb-4">Our Team</SectionHeading>
            <p className="max-w-2xl text-lg text-gray-600">
              Meet the creative minds behind Serasa Kreatif
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                role={member.role}
                location={member.location}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </PageSection>

      {/* Location */}
      <PageSection bgColor="bg-white" paddingSize="large">
        <div className="container-custom">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading className="mb-8">Our Location</SectionHeading>
              <p className="mb-12 text-lg leading-relaxed text-gray-700 md:text-xl">
                Based in Bintaro, South Tangerang, we serve clients in Jakarta and throughout
                Jabodetabek. Our local presence helps us understand the market and deliver solutions
                that resonate with your audience.
              </p>
              <div className="space-y-6 pt-8 ">
                <ContactInfoItem label="Address">
                  Bintaro, South Tangerang, Indonesia
                </ContactInfoItem>
                <ContactInfoItem label="Phone" href="tel:+6281288971453">
                  +62 812-8897-1453
                </ContactInfoItem>
                <ContactInfoItem label="Email" href="mailto:serasakreatif.id@gmail.com">
                  serasakreatif.id@gmail.com
                </ContactInfoItem>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.034922619612!2d106.7072774775167!3d-6.259130293729463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb0014bc1b3b%3A0xe8270de58c702a2c!2sKlinik%20Kreatif%20Serasa!5e0!3m2!1sen!2sid!4v1761229643021!5m2!1sen!2sid"
                width="600"
                height="500"
                style={{
                  border: 0,
                  width: '100%',
                  height: '500px',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bgColor="bg-brand-teal text-white" paddingSize="xlarge">
        <div className="container-custom text-center">
          <h2 className="mb-8 font-sans text-4xl font-black uppercase leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            Ready to grow?
            <br />
            Let&apos;s make it happen with Serasa
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center border-2 border-white bg-white px-12 py-5 text-lg font-bold uppercase text-primary transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            Start Project
          </a>
        </div>
      </PageSection>
    </div>
  )
}
