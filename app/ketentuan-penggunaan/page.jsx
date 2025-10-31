export const metadata = {
  title: 'Ketentuan Penggunaan',
  description:
    'Ketentuan penggunaan situs web Serasa Kreatif. Baca syarat dan ketentuan kami sebelum menggunakan layanan kami.',
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white pb-8 pt-32">
        <div className="container-custom">
          <h1 className="mb-4 font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            KETENTUAN PENGGUNAAN
          </h1>
          <p className="text-sm text-gray-600">Efektif sejak: 1 Januari 2025</p>
        </div>
      </section>

      {/* Two Column Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Introduction */}
              <div className="prose prose-sm mb-12 max-w-none">
                <h2 className="mb-6 font-sans text-2xl font-black uppercase tracking-tight">
                  SERASA KREATIF MENYEDIAKAN SITUS WEB INI UNTUK INFORMASI PRIBADI, PENDIDIKAN, DAN
                  PENGGUNAAN HIBURAN ANDA.
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Serasa Kreatif menyediakan akses ke situs web ini (&quot;Situs&quot;) untuk
                  informasi pribadi, pendidikan, dan hiburan Anda. Berikut adalah syarat dan
                  ketentuan yang mengatur penggunaan Anda atas Situs kami dan semua konten yang
                  tersedia melalui Situs ini (baik &quot;Konten&quot; atau &quot;Konten Kami&quot;).
                  Dengan mengakses dan menggunakan Situs, Anda setuju untuk terikat dengan Ketentuan
                  Penggunaan ini. Jika Anda tidak setuju dengan ketentuan ini, jangan gunakan Situs
                  ini.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Ketika digunakan dalam Ketentuan Penggunaan ini, &quot;kami&quot; atau &quot;milik
                  kami&quot; atau istilah serupa mengacu pada Serasa Kreatif, dan istilah
                  &quot;Anda&quot; dan &quot;milik Anda&quot; mengacu kepada setiap orang atau
                  entitas yang mengakses atau menggunakan Situs ini.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Penerimaan Ketentuan Penggunaan
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Dengan mengakses dan menggunakan Situs ini, Anda setuju untuk tunduk pada
                  Ketentuan Penggunaan ini. Jika Anda tidak setuju dengan Ketentuan Penggunaan ini,
                  jangan gunakan Situs ini. Jika Anda di bawah 18 tahun, Anda harus mendapatkan izin
                  dari orang tua atau wali Anda sebelum menggunakan Situs ini.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Serasa Kreatif dapat merevisi Ketentuan Penggunaan ini kapan saja tanpa
                  pemberitahuan kepada Anda. Ini adalah versi terkini, seperti yang ditunjukkan oleh
                  tanggal &quot;Efektif sejak&quot; di bagian atas halaman ini. Dengan terus
                  menggunakan Situs setelah perubahan, Anda setuju bahwa Ketentuan Penggunaan yang
                  direvisi akan berlaku untuk penggunaan Anda selanjutnya.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Serasa Kreatif berhak untuk menolak akses ke Situs kepada siapa pun atau entitas
                  mana pun, atau untuk mengakhiri akses, kapan saja atas kebijakannya sendiri.
                </p>
              </div>

              {/* Privacy Notice */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Pemberitahuan Privasi
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Informasi yang disediakan melalui Situs ini dapat diakses tanpa biaya oleh
                  pengguna, dengan ketentuan bahwa informasi tersebut hanya akan digunakan untuk
                  tujuan pribadi, non-komersial Anda. Silakan lihat{' '}
                  <a
                    href="/pemberitahuan-privasi"
                    className="text-primary underline hover:text-brand-teal"
                  >
                    Pemberitahuan Privasi
                  </a>{' '}
                  kami untuk informasi tentang bagaimana kami mengumpulkan dan menggunakan informasi
                  di Situs ini.
                </p>
              </div>

              {/* General Use Restrictions */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Batasan Penggunaan Umum dan Merek Dagang
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Anda mungkin mengunduh dan mencetak Konten hanya untuk penggunaan pribadi,
                  non-komersial Anda sendiri, dan tidak untuk dipublikasikan kembali,
                  didistribusikan ulang, ditransmisikan ulang, dijual, dilisensikan, atau digunakan
                  secara komersial dengan cara apa pun. &quot;Serasa Kreatif,&quot; logo, nama,
                  segel, dan lambang kami adalah merek dagang milik Serasa Kreatif dan tidak boleh
                  digunakan atau ditampilkan tanpa izin tertulis sebelumnya dari Serasa Kreatif.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Anda tidak boleh mengunduh atau menyimpan salinan, menampilkan, melakukan,
                  mendistribusikan, atau memodifikasi konten apa pun di Situs ini, baik seluruhnya
                  atau sebagian, kecuali dalam keadaan berikut (&quot;Pengecualian&quot;):
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-gray-700">
                  <li>
                    Anda dapat menyimpan dan menampilkan Konten di layar komputer Anda, mencetak
                    salinan individual dari bagian diskrit Konten hanya untuk penggunaan pribadi,
                    non-komersial Anda sendiri, atau untuk tujuan pendidikan internal, dengan
                    ketentuan bahwa Anda tidak mengubah atau menghapus hak cipta atau pemberitahuan
                    hak milik lainnya.
                  </li>
                  <li>
                    Jika Anda adalah pendidik di institusi pendidikan atau lembaga nirlaba, Anda
                    dapat mengirimkan URL dan mencetak salinan Konten untuk tujuan instruksi
                    langsung, bukan untuk tujuan komersial. Penggunaan ini juga terbatas pada
                    penggandaan tidak lebih dari 30 salinan dari halaman diskrit Konten.
                  </li>
                </ul>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kecuali sebagaimana diizinkan secara tegas dalam Pengecualian atau sebagaimana
                  ditetapkan di tempat lain di Situs ini, Anda tidak diizinkan untuk menyalin,
                  mereproduksi, mengunduh, mengunggah ulang, mengirim, menampilkan, mengirimkan,
                  menjual, melisensikan, atau mengeksploitasi Konten apa pun untuk tujuan apa pun
                  tanpa izin tertulis sebelumnya dari kami atau pemilik hak cipta lainnya yang
                  diidentifikasi di Situs ini.
                </p>
              </div>

              {/* Links to Third-Party Sites */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Tautan ke Situs Web Pihak Ketiga
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Tautan dari dan ke situs pihak ketiga disediakan hanya sebagai kenyamanan bagi
                  Anda. Jika Anda menggunakan tautan ini, Anda akan meninggalkan Situs ini. Kami
                  belum meninjau semua situs pihak ketiga ini dan tidak mengendalikan dan tidak
                  bertanggung jawab atas situs web atau kontennya. Oleh karena itu, kami tidak
                  mendukung atau membuat pernyataan apa pun tentang mereka, atau informasi,
                  perangkat lunak, atau produk lain yang ditemukan di sana, atau hasil apa pun yang
                  mungkin diperoleh dari menggunakannya.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika Anda memutuskan untuk mengakses situs web pihak ketiga yang ditautkan dari
                  Situs ini, Anda melakukannya sepenuhnya atas risiko Anda sendiri dan tunduk pada
                  syarat dan ketentuan penggunaan untuk situs tersebut.
                </p>
              </div>

              {/* Disclaimer of Warranties */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Penafian Jaminan
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Serasa Kreatif tidak membuat pernyataan apa pun tentang kesesuaian, keandalan,
                  ketersediaan, ketepatan waktu, dan akurasi dari informasi, perangkat lunak,
                  produk, layanan, dan grafik terkait yang terdapat di Situs ini untuk tujuan apa
                  pun. Sejauh diizinkan oleh hukum yang berlaku, semua informasi, perangkat lunak,
                  produk, layanan, dan grafik terkait disediakan &quot;apa adanya&quot; tanpa
                  jaminan atau ketentuan apa pun.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, SERASA KREATIF DAN/ATAU PEMASOKNYA
                  DENGAN INI MENOLAK SEMUA JAMINAN DAN KETENTUAN SEHUBUNGAN DENGAN INFORMASI,
                  PERANGKAT LUNAK, PRODUK, LAYANAN, DAN GRAFIK TERKAIT INI, TERMASUK SEMUA JAMINAN
                  ATAU KETENTUAN TERSIRAT TENTANG DAPAT DIPERJUALBELIKAN, KESESUAIAN UNTUK TUJUAN
                  TERTENTU, KEPEMILIKAN, DAN NON-PELANGGARAN.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Batasan Tanggung Jawab
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  SEJAUH DIIZINKAN OLEH HUKUM YANG BERLAKU, DALAM KEADAAN APA PUN SERASA KREATIF
                  DAN/ATAU PEMASOKNYA TIDAK AKAN BERTANGGUNG JAWAB ATAS KERUSAKAN APA PUN (TERMASUK,
                  TANPA BATASAN, KERUSAKAN ATAS KEHILANGAN DATA ATAU KEUNTUNGAN, ATAU KARENA
                  GANGGUAN BISNIS) YANG TIMBUL DARI PENGGUNAAN ATAU KETIDAKMAMPUAN UNTUK MENGGUNAKAN
                  BAHAN-BAHAN DI SITUS WEB INI, BAHKAN JIKA SERASA KREATIF ATAU PERWAKILAN YANG SAH
                  SERASA KREATIF TELAH DIBERI TAHU SECARA LISAN ATAU TERTULIS TENTANG KEMUNGKINAN
                  KERUSAKAN TERSEBUT.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika penggunaan Anda atas materi dari Situs ini mengharuskan servis atau
                  penggantian peralatan atau data, Serasa Kreatif tidak bertanggung jawab atas biaya
                  tersebut.
                </p>
              </div>

              {/* Unlawful or Prohibited Activity */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Aktivitas yang Melanggar Hukum atau Dilarang
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Sebagai syarat penggunaan Situs ini, Anda setuju bahwa Anda tidak akan menggunakan
                  Situs ini untuk tujuan apa pun yang melanggar hukum atau dilarang oleh syarat,
                  ketentuan, pemberitahuan, atau pernyataan ini. Anda dapat menggunakan layanan kami
                  hanya untuk tujuan yang sah. Anda tidak boleh menggunakan layanan kami dengan cara
                  yang dapat merusak, melumpuhkan, membebani, atau mengganggu layanan kami atau
                  mengganggu pihak lain untuk menggunakan layanan kami.
                </p>
              </div>

              {/* Governing Law and Dispute Resolution */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Hukum yang Berlaku dan Penyelesaian Sengketa
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Ketentuan Penggunaan ini dan penggunaan Anda atas Situs ini akan diatur oleh dan
                  ditafsirkan sesuai dengan hukum Republik Indonesia, tanpa memperhatikan ketentuan
                  konflik hukumnya. Setiap sengketa yang timbul dari atau berkaitan dengan Ketentuan
                  Penggunaan ini akan diselesaikan melalui arbitrase di Jakarta, Indonesia.
                </p>
              </div>

              {/* Security */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Keamanan
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika Anda mengakses Situs ini, Anda bertanggung jawab untuk menjaga kerahasiaan
                  akun dan kata sandi Anda (jika ada) dan untuk membatasi akses ke komputer Anda.
                  Anda setuju untuk menerima tanggung jawab atas semua aktivitas yang terjadi di
                  bawah akun atau kata sandi Anda. Serasa Kreatif berhak untuk menolak layanan,
                  menghentikan akun, menghapus atau mengedit konten, atau membatalkan pesanan
                  menurut kebijakannya sendiri.
                </p>
              </div>

              {/* No Waiver */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Tidak Ada Pengabaian
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kegagalan Serasa Kreatif untuk menegakkan ketentuan apa pun dari Ketentuan
                  Penggunaan ini tidak akan dianggap sebagai pengabaian atas ketentuan tersebut atau
                  hak apa pun. Jika ketentuan apa pun dari Ketentuan Penggunaan ini dianggap tidak
                  berlaku atau tidak dapat dilaksanakan oleh pengadilan, ketentuan lainnya tetap
                  berlaku dan dapat dilaksanakan.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Hubungi Kami
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika Anda memiliki pertanyaan tentang Ketentuan Penggunaan ini, silakan hubungi
                  kami di:
                </p>
                <div className="text-sm text-gray-700">
                  <p className="mb-2">
                    <strong>Serasa Kreatif</strong>
                  </p>
                  <p className="mb-2">Bintaro, Tangerang Selatan, Indonesia</p>
                  <p className="mb-2">
                    Email:{' '}
                    <a
                      href="mailto:serasakreatif.id@gmail.com"
                      className="text-primary underline hover:text-brand-teal"
                    >
                      serasakreatif.id@gmail.com
                    </a>
                  </p>
                  <p>
                    Telepon:{' '}
                    <a
                      href="tel:+6281288971453"
                      className="text-primary underline hover:text-brand-teal"
                    >
                      +62 812-8897-1453
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <h4 className="mb-6 font-sans text-sm font-bold uppercase tracking-wider text-gray-500">
                  Pada Halaman Ini
                </h4>
                <nav className="space-y-3">
                  <a
                    href="#penerimaan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Penerimaan Ketentuan
                  </a>
                  <a
                    href="#privasi"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Pemberitahuan Privasi
                  </a>
                  <a
                    href="#batasan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Batasan Penggunaan
                  </a>
                  <a
                    href="#tautan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Tautan Pihak Ketiga
                  </a>
                  <a
                    href="#penafian"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Penafian Jaminan
                  </a>
                  <a
                    href="#tanggung-jawab"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Batasan Tanggung Jawab
                  </a>
                  <a
                    href="#hukum"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Hukum yang Berlaku
                  </a>
                  <a
                    href="#kontak"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Hubungi Kami
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
