export const metadata = {
  title: 'Tentang Kami',
  description:
    'Pelajari lebih lanjut tentang Serasa Kreatif, agensi branding digital dan manajemen media sosial berbasis di Bintaro, Jakarta.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero - R/GA style geometric visual */}
      <section className="pt-32 bg-white section-padding">
        <div className="container-custom">
          {/* Geometric Visual Grid */}
          <div className="grid grid-cols-2 gap-2 mb-16 md:grid-cols-4 md:gap-3">
            <div className="bg-black aspect-square"></div>
            <div className="bg-white aspect-square"></div>
            <div className="bg-black aspect-square"></div>
            <div className="bg-white aspect-square"></div>
            <div className="bg-white aspect-square"></div>
            <div className="bg-black aspect-square">
              <div className="flex items-center justify-center h-full">
                <div className="w-1/3 h-1/3 bg-accent"></div>
              </div>
            </div>
            <div className="bg-white aspect-square"></div>
            <div className="bg-black aspect-square"></div>
          </div>

          {/* Statement */}
          <div className="max-w-3xl">
            <p className="mb-8 text-lg leading-relaxed text-gray-900 md:text-xl">
              Serasa Kreatif adalah agensi untuk transformasi merek.
            </p>
            <p className="text-lg leading-relaxed text-gray-900 md:text-xl">
              Ketika teknologi mengubah dunia, kami merangkulnya dan berkembang.
            </p>
            <p className="text-lg leading-relaxed text-gray-900 md:text-xl">
              Kami membantu merek menyesuaikan diri dan menonjol di era digital.
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
                Nilai-nilai kami menggerakkan dan membentuk karakter dari tim Serasa Kreatif. Kami
                adalah orang-orang yang penasaran, berani, dan berkomitmen untuk menjalankan bisnis
                secara bertanggung jawab.
              </p>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-gray-700">
                Penawaran desain dan keahlian kami bekerja bersama di berbagai disiplin, praktik,
                dan sektor. Ini memungkinkan kami untuk merancang dan memberikan sistem operasi
                merek yang kohesif yang memanfaatkan potensi teknologi kunci, platform, dan budaya
                untuk memberikan nilai lebih kepada bisnis, orang, dan planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - Dark section */}
      <section className="text-white section-padding bg-primary">
        <div className="container-custom">
          <h2 className="mb-16 font-sans text-3xl font-black tracking-tight uppercase md:text-4xl lg:text-5xl">
            CARA KAMI BEKERJA
          </h2>

          <div className="max-w-3xl mb-12">
            <p className="mb-6 text-sm leading-relaxed text-gray-300">
              Serasa Kreatif adalah budaya kolaborasi yang mengintegrasikan kemampuan strategis,
              kreatif, dan teknis untuk memberikan pertumbuhan dengan tujuan. Kami percaya bahwa
              yang terbaik dari perspektif yang berbeda mengalahkan perspektif terbaik dari yang
              terbaik.
            </p>
            <p className="text-sm leading-relaxed text-gray-300">
              Cara kerja kami yang menciptakan nilai strategis dan komersial—melalui ide yang
              berpengaruh; ide yang mengembangkan merek dan bisnis, serta membentuk dampak konsumen
              di mana pun mereka berada.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-0 border-t border-white/10">
            {[
              {
                number: '1',
                title: 'WE REFRAME',
                description:
                  'Kami mengubah cara kita melihat dunia dan menemukan peluang baru. Dipimpin oleh kepala strategi.',
              },
              {
                number: '2',
                title: 'WE EXPERIMENT',
                description:
                  'Kami mengadaptasi teknologi dan strategi untuk merek Anda dengan ide baru.',
              },
              {
                number: '3',
                title: 'WE THINK COMMERCIALLY',
                description:
                  'Kami fokus pada tujuan dan kemampuan untuk nilai komersial yang bertahan lama.',
              },
              {
                number: '4',
                title: 'WE CRAFT',
                description:
                  'Kami tidak hanya bicara desain; kami menciptakan dan membangun dengan standar tinggi.',
              },
            ].map((step) => (
              <div
                key={step.number}
                className="py-8 transition-all border-b border-white/10 hover:bg-white/5"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <div className="text-6xl font-black text-brand-teal">{step.number}</div>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="mb-3 font-sans text-xl font-bold tracking-tight uppercase md:text-2xl">
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
          <h3 className="mb-12 font-sans text-2xl font-black tracking-tight uppercase">
            Global Leadership
          </h3>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'M. Yaser Ali',
                role: 'Chief Executive Officer',
                location: 'Jakarta',
              },
              {
                name: 'TEAM MEMBER',
                role: 'Creative Director',
                location: 'Jakarta',
              },
              {
                name: 'TEAM MEMBER',
                role: 'Strategy Lead',
                location: 'Jakarta',
              },
              {
                name: 'TEAM MEMBER',
                role: 'Design Director',
                location: 'Jakarta',
              },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="mb-4 overflow-hidden bg-gray-300 aspect-square">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary to-brand-teal/20">
                    <span className="text-4xl text-white opacity-40">👤</span>
                  </div>
                </div>
                <h4 className="mb-1 font-sans text-sm font-bold tracking-tight uppercase">
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
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-sans text-3xl font-black tracking-tight uppercase md:text-4xl">
                LOKASI KAMI
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-700">
                Berbasis di Bintaro, Tangerang Selatan, kami melayani klien di Jakarta dan seluruh
                Jabodetabek. Kehadiran lokal membantu kami memahami pasar dan menyampaikan solusi
                yang sesuai dengan audiens Anda.
              </p>
              <div className="pt-6 space-y-4 border-t border-gray-200">
                <div>
                  <div className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Alamat
                  </div>
                  <p className="text-sm text-gray-900">Bintaro, Tangerang Selatan, Indonesia</p>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Telepon
                  </div>
                  <a
                    href="tel:+6281288971453"
                    className="text-sm text-gray-900 transition-colors hover:text-brand-teal"
                  >
                    +62 812-8897-1453
                  </a>
                </div>
                <div>
                  <div className="mb-1 text-xs font-medium tracking-wider text-gray-500 uppercase">
                    Email
                  </div>
                  <a
                    href="mailto:hello@serasakreatif.id"
                    className="text-sm text-gray-900 transition-colors hover:text-brand-teal"
                  >
                    hello@serasakreatif.id
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
      <section className="text-white section-padding bg-brand-teal">
        <div className="text-center container-custom">
          <h2 className="mb-6 font-sans text-4xl font-black tracking-tight uppercase md:text-5xl lg:text-6xl">
            Bergabunglah dengan Serasa
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-base leading-relaxed ">
            Anda memiliki ide untuk merek Anda, bisnis, atau dunia secara luas. Kami di sini untuk
            mendengarkan dan berkolaborasi.
          </p>
          <a
            href="/kontak"
            className="inline-flex items-center px-8 py-4 font-bold text-white uppercase transition-all duration-300 border-2 border-white hover:bg-white hover:text-primary"
          >
            Mulai Proyek
          </a>
        </div>
      </section>
    </div>
  )
}
