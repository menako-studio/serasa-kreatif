import PageSection from '@/components/PageSection'
import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'
import ProcessStep from '@/components/ProcessStep'
import ContactInfoItem from '@/components/ContactInfoItem'

export const metadata = {
  title: 'About Us — Serasa Kreatif',
  description:
    'Discover Serasa Kreatif, a branding agency & social media management studio in Bintaro, Jakarta. Meet our creative team and explore our framework.',
  alternates: {
    canonical: 'https://serasakreatif.id/about',
    languages: {
      'en-US': 'https://serasakreatif.id/about',
      'id-ID': 'https://serasakreatif.id/about?lang=id',
      'x-default': 'https://serasakreatif.id/about',
    },
  },
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
    name: 'Raudhatul Jannah',
    role: 'Team Member',
    location: 'Jakarta',
    image: '/assets/images/team/raudhatul-jannah.png',
  },
]

const WORK_PROCESS_EN = [
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

const WORK_PROCESS_ID = [
  {
    number: '1',
    title: 'Kami Menemukan',
    description: 'Kami menemukan wawasan baru dan peluang melalui perspektif strategis.',
  },
  {
    number: '2',
    title: 'Kami Mengeksplorasi',
    description:
      'Kami mengeksplorasi ide dan konsep untuk menemukan apa yang terbaik untuk merek Anda.',
  },
  {
    number: '3',
    title: 'Kami Fokus',
    description:
      'Kami menyusun strategi dengan tujuan jelas untuk mendorong dampak komersial yang berarti.',
  },
  {
    number: '4',
    title: 'Kami Menciptakan',
    description: 'Kami menciptakan dengan presisi dan tujuan untuk membangun merek yang menonjol.',
  },
  {
    number: '5',
    title: 'Kami Merefleksikan',
    description:
      'Kami mengoptimalkan dan melaporkan setiap bulan, menyempurnakan strategi melalui wawasan kinerja dan umpan balik klien.',
  },
]

export default function AboutPage({ searchParams }) {
  const lang = searchParams?.lang === 'id' ? 'id' : 'en'
  const isIndo = lang === 'id'
  const workProcess = isIndo ? WORK_PROCESS_ID : WORK_PROCESS_EN

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <PageSection bgColor="bg-white" paddingSize="xlarge" className="pt-32 md:pt-40 lg:pt-44">
        <div className="container-custom">
          <h1 className="mb-12 font-sans text-5xl font-black uppercase leading-none tracking-tight md:text-6xl lg:text-7xl">
            {isIndo ? 'TENTANG KAMI' : 'ABOUT US'}
          </h1>
          <div className="max-w-4xl">
            <p className="mb-6 text-2xl font-medium leading-relaxed text-gray-900 md:text-3xl lg:text-4xl">
              {isIndo
                ? 'Tumbuh lebih cepat. Menonjol lebih kuat. Bersama Serasa Kreatif.'
                : 'Scale faster. Stand out stronger. With Serasa Kreatif.'}
            </p>
            <p className="text-xl leading-relaxed text-gray-700 md:text-2xl">
              {isIndo
                ? 'Kami percaya setiap merek memiliki cerita yang layak dibagikan. Melalui kreativitas dan strategi, kami membantu merek berkembang di era digital, menonjol di pasar, dan menghasilkan dampak bisnis nyata.'
                : 'We believe every brand has a story worth telling. Through creativity and strategy, we help brands thrive in the digital era, stand out, and drive real business results.'}
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
                {isIndo ? 'Komitmen Kami' : 'Our Commitment'}
              </h2>
              <p className="text-lg leading-relaxed text-gray-800 md:text-xl">
                {isIndo
                  ? 'Komitmen kami tercermin dalam pengalaman bertahun-tahun berkolaborasi dengan berbagai perusahaan lintas industri: memperkuat identitas merek, meningkatkan kehadiran digital, mendorong pertumbuhan, dan mendekatkan bisnis ke tujuan utama mereka. Perjalanan tumbuh Anda dimulai dari Serasa Kreatif.'
                  : 'Our commitment is reflected in years of experience collaborating with diverse companies across various industries: enhancing brand identity, elevating digital presence, driving growth, and bringing businesses closer to their ultimate goals. Your growth journey starts with Serasa Kreatif.'}
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* How We Work */}
      <PageSection bgColor="bg-primary text-white" paddingSize="large">
        <div className="container-custom">
          <SectionHeading white className="mb-6">
            {isIndo ? 'Metodologi Kami' : 'Our Framework'}
          </SectionHeading>
          <div className="mb-16 max-w-3xl">
            <p className="text-lg leading-relaxed text-gray-300">
              {isIndo
                ? 'Kami mengintegrasikan pemikiran strategis, keunggulan kreatif, dan keahlian teknis untuk memberikan hasil yang konsisten bagi merek.'
                : 'We integrate strategic thinking, creative excellence, and technical expertise to consistently deliver impactful results for brands.'}
            </p>
          </div>
          <div className="space-y-0 border-t border-white/10">
            {workProcess.map((step) => (
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
            <SectionHeading className="mb-4">{isIndo ? 'Tim Kami' : 'Our Team'}</SectionHeading>
            <p className="max-w-2xl text-lg text-gray-600">
              {isIndo
                ? 'Kenali talenta kreatif di balik Serasa Kreatif'
                : 'Meet the creative minds behind Serasa Kreatif'}
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
              <SectionHeading className="mb-8">
                {isIndo ? 'Lokasi Kami' : 'Our Location'}
              </SectionHeading>
              <p className="mb-12 text-lg leading-relaxed text-gray-700 md:text-xl">
                {isIndo
                  ? 'Berbasis di Bintaro, Tangerang Selatan, kami melayani klien di Jakarta dan seluruh wilayah Jabodetabek. Kehadiran lokal membantu kami memahami pasar dan menghadirkan solusi yang relevan dengan audiens Anda.'
                  : 'Based in Bintaro, South Tangerang, we serve clients in Jakarta and throughout Jabodetabek. Our local presence helps us understand the market and deliver solutions that resonate with your audience.'}
              </p>
              <div className="space-y-6 pt-8 ">
                <ContactInfoItem label={isIndo ? 'Perusahaan' : 'Company'}>
                  PT Selaras Makmur Perkasa
                </ContactInfoItem>
                <ContactInfoItem label={isIndo ? 'Alamat' : 'Address'}>
                  Bintaro, South Tangerang, Indonesia
                </ContactInfoItem>
                <ContactInfoItem label={isIndo ? 'Telepon' : 'Phone'} href="tel:+6281288971453">
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
                className="h-[400px] w-full border-0 lg:h-[500px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Serasa Kreatif Studio Location"
              />
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection bgColor="bg-brand-teal text-white" paddingSize="xlarge">
        <div className="container-custom text-center">
          <h2 className="mb-8 font-sans text-4xl font-black uppercase leading-tight tracking-tight text-primary md:text-5xl lg:text-6xl">
            {isIndo ? (
              <>
                SIAP UNTUK TUMBUH?
                <br />
                MARI MEWUJUDKANNYA BERSAMA SERASA
              </>
            ) : (
              <>
                Ready to grow?
                <br />
                Let&apos;s make it happen with Serasa
              </>
            )}
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center border-2 border-white bg-white px-12 py-5 text-lg font-bold uppercase text-primary transition-all duration-300 hover:bg-transparent hover:text-white"
          >
            {isIndo ? 'Mulai Proyek' : 'Start Project'}
          </a>
        </div>
      </PageSection>
    </div>
  )
}
