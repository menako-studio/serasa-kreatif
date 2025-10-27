export const metadata = {
  title: 'Pemberitahuan Privasi',
  description:
    'Pemberitahuan privasi situs web Serasa Kreatif. Pelajari bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.',
}

export default function PrivacyNoticePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-white pb-8 pt-32">
        <div className="container-custom">
          <h1 className="mb-4 font-sans text-4xl font-black uppercase tracking-tight md:text-5xl lg:text-6xl">
            PEMBERITAHUAN PRIVASI SITUS WEB SERASA KREATIF
          </h1>
          <p className="text-sm text-gray-600">Terakhir diperbarui: 1 Januari 2025</p>
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
                  SERASA KREATIF MENGHORMATI PRIVASI ANDA. PEMBERITAHUAN PRIVASI SITUS WEB INI
                  MENJELASKAN JENIS INFORMASI YANG KAMI KUMPULKAN TENTANG INDIVIDU YANG MENGUNJUNGI
                  SITUS WEB KAMI, DENGAN SIAPA KAMI MEMBAGIKAN INFORMASI TERSEBUT, DAN PILIHAN YANG
                  TERSEDIA BAGI ANDA MENGENAI PENGGUNAAN KAMI ATAS INFORMASI TERSEBUT.
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Pemberitahuan Privasi ini juga menjelaskan langkah-langkah yang kami ambil untuk
                  mengamankan informasi pribadi, berapa lama kami menyimpannya, dan bagaimana
                  menghubungi kami tentang praktik privasi kami dan untuk menjalankan hak Anda.
                </p>
              </div>

              {/* Information We Provide */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Informasi yang Kami Berikan
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami menyediakan pemberitahuan privasi ini untuk menjelaskan kepada Anda praktik
                  informasi online kami, termasuk jenis informasi yang dikumpulkan, bagaimana
                  informasi digunakan, kepada siapa informasi dibagikan, pilihan yang tersedia bagi
                  Anda, dan bagaimana Anda dapat mengakses dan memperbarui informasi yang kami
                  simpan tentang Anda.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Situs web ini disediakan oleh Serasa Kreatif, sebuah agensi kreatif yang berlokasi
                  di Bintaro, Tangerang Selatan, Indonesia.
                </p>
              </div>

              {/* Information We Receive About You from Sources */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Informasi yang Kami Terima Tentang Anda dari Berbagai Sumber
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami dapat mengumpulkan informasi tentang Anda dari berbagai sumber online dan
                  offline, termasuk ketika Anda menggunakan situs web kami, menghubungi kami, atau
                  berinteraksi dengan kami secara lainnya.
                </p>
              </div>

              {/* Automated Collection of Information */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Pengumpulan Informasi Otomatis
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Ketika Anda mengunjungi Situs ini, kami dapat mengumpulkan informasi tertentu
                  secara otomatis dari perangkat Anda. Dalam beberapa yurisdiksi, termasuk negara di
                  Wilayah Ekonomi Eropa, informasi ini mungkin dianggap sebagai informasi pribadi
                  berdasarkan undang-undang perlindungan data yang berlaku.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Secara khusus, informasi yang kami kumpulkan secara otomatis dapat mencakup
                  informasi seperti alamat IP Anda, jenis perangkat, pengenal unik perangkat, jenis
                  browser, geografi umum (misalnya, negara atau kota), dan informasi teknis lainnya.
                  Kami juga dapat mengumpulkan informasi tentang bagaimana perangkat Anda
                  berinteraksi dengan Situs kami, termasuk halaman yang diakses dan tautan yang
                  diklik.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Mengumpulkan informasi ini memungkinkan kami untuk lebih memahami pengunjung yang
                  datang ke Situs kami, dari mana mereka berasal, dan konten apa yang menarik minat
                  mereka. Kami menggunakan informasi ini untuk tujuan analitik internal kami dan
                  untuk meningkatkan kualitas dan relevansi Situs kami kepada pengunjung kami.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Beberapa informasi ini dapat dikumpulkan menggunakan cookie dan teknologi
                  pelacakan serupa, seperti dijelaskan di bawah ini.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Bagaimana Kami Menggunakan Informasi Anda
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami dapat menggunakan informasi yang kami kumpulkan tentang Anda untuk:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-gray-700">
                  <li>Menyediakan, mengoperasikan, dan meningkatkan Situs kami</li>
                  <li>Menanggapi pertanyaan dan permintaan Anda</li>
                  <li>Mengirimkan informasi administratif kepada Anda</li>
                  <li>Melakukan analitik data untuk meningkatkan layanan kami</li>
                  <li>Mematuhi kewajiban hukum dan regulasi</li>
                  <li>Mencegah penipuan dan meningkatkan keamanan</li>
                  <li>Tujuan lain dengan persetujuan Anda atau sebagaimana diizinkan oleh hukum</li>
                </ul>
              </div>

              {/* How We Share Personal Information */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Bagaimana Kami Membagikan Informasi Pribadi
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami dapat membagikan informasi Anda dalam keadaan berikut:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-gray-700">
                  <li>
                    <strong>Penyedia Layanan:</strong> Kami dapat membagikan informasi Anda dengan
                    penyedia layanan pihak ketiga yang melakukan layanan atas nama kami, seperti
                    hosting situs web, analitik data, dukungan pelanggan, dan layanan IT.
                  </li>
                  <li>
                    <strong>Persyaratan Hukum:</strong> Kami dapat mengungkapkan informasi pribadi
                    jika diwajibkan oleh hukum atau jika kami dengan itikad baik percaya bahwa
                    tindakan tersebut diperlukan untuk mematuhi kewajiban hukum.
                  </li>
                  <li>
                    <strong>Perlindungan Hak:</strong> Kami dapat mengungkapkan informasi untuk
                    melindungi dan mempertahankan hak, properti, atau keselamatan Serasa Kreatif,
                    pengguna kami, atau pihak lain.
                  </li>
                  <li>
                    <strong>Transaksi Bisnis:</strong> Dalam hal merger, akuisisi, atau penjualan
                    aset, informasi pribadi Anda dapat ditransfer.
                  </li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Cookie dan Teknologi Pelacakan
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami menggunakan cookie dan teknologi pelacakan serupa untuk mengumpulkan dan
                  melacak informasi tentang layanan kami dan untuk meningkatkan serta menganalisis
                  layanan kami.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Cookie adalah file dengan sejumlah kecil data yang dapat mencakup pengenal unik
                  anonim. Cookie dikirim ke browser Anda dari situs web dan disimpan di perangkat
                  Anda. Teknologi pelacakan lain yang juga digunakan adalah beacon, tag, dan skrip
                  untuk mengumpulkan dan melacak informasi serta untuk meningkatkan dan menganalisis
                  layanan kami.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Anda dapat menginstruksikan browser Anda untuk menolak semua cookie atau untuk
                  menunjukkan ketika cookie sedang dikirim. Namun, jika Anda tidak menerima cookie,
                  Anda mungkin tidak dapat menggunakan beberapa bagian dari layanan kami.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Keamanan Data
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Keamanan informasi pribadi Anda penting bagi kami. Kami menggunakan
                  langkah-langkah teknis dan organisasi yang dirancang untuk melindungi informasi
                  pribadi yang kami kumpulkan dan proses tentang Anda. Langkah-langkah yang kami
                  gunakan dirancang untuk memberikan tingkat keamanan yang sesuai dengan risiko
                  pemrosesan informasi pribadi Anda.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Namun, tidak ada metode transmisi melalui Internet atau metode penyimpanan
                  elektronik yang 100% aman. Meskipun kami berusaha menggunakan cara yang dapat
                  diterima secara komersial untuk melindungi informasi pribadi Anda, kami tidak
                  dapat menjamin keamanan absolutnya.
                </p>
              </div>

              {/* Data Retention */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Penyimpanan Data
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami akan menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan
                  yang ditetapkan dalam Pemberitahuan Privasi ini. Kami akan menyimpan dan
                  menggunakan informasi pribadi Anda sejauh yang diperlukan untuk mematuhi kewajiban
                  hukum kami, menyelesaikan sengketa, dan menegakkan perjanjian dan kebijakan hukum
                  kami.
                </p>
              </div>

              {/* Your Rights and Choices */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Hak dan Pilihan Anda
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Tergantung pada lokasi Anda, Anda mungkin memiliki hak-hak tertentu terkait
                  informasi pribadi Anda, termasuk:
                </p>
                <ul className="mb-4 ml-6 list-disc space-y-2 text-sm leading-relaxed text-gray-700">
                  <li>
                    <strong>Hak Akses:</strong> Anda dapat meminta akses ke informasi pribadi yang
                    kami miliki tentang Anda
                  </li>
                  <li>
                    <strong>Hak Koreksi:</strong> Anda dapat meminta kami untuk memperbaiki atau
                    memperbarui informasi pribadi Anda yang tidak akurat
                  </li>
                  <li>
                    <strong>Hak Penghapusan:</strong> Anda dapat meminta kami untuk menghapus
                    informasi pribadi Anda dalam keadaan tertentu
                  </li>
                  <li>
                    <strong>Hak Pembatasan:</strong> Anda dapat meminta kami untuk membatasi
                    pemrosesan informasi pribadi Anda dalam keadaan tertentu
                  </li>
                  <li>
                    <strong>Hak Portabilitas Data:</strong> Anda dapat meminta salinan informasi
                    pribadi Anda dalam format yang terstruktur dan dapat dibaca mesin
                  </li>
                  <li>
                    <strong>Hak Menolak:</strong> Anda dapat menolak pemrosesan informasi pribadi
                    Anda dalam keadaan tertentu
                  </li>
                </ul>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Untuk menjalankan hak-hak ini, silakan hubungi kami menggunakan detail kontak yang
                  disediakan di bawah ini.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Privasi Anak-anak
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Situs kami tidak ditujukan kepada siapa pun yang berusia di bawah 18 tahun
                  (&quot;Anak-anak&quot;). Kami tidak secara sadar mengumpulkan informasi identitas
                  pribadi dari siapa pun yang berusia di bawah 18 tahun. Jika Anda adalah orang tua
                  atau wali dan Anda mengetahui bahwa anak Anda telah memberikan kami informasi
                  pribadi, silakan hubungi kami. Jika kami mengetahui bahwa kami telah mengumpulkan
                  informasi pribadi dari anak-anak tanpa verifikasi persetujuan orang tua, kami
                  mengambil langkah-langkah untuk menghapus informasi tersebut dari server kami.
                </p>
              </div>

              {/* Changes to Privacy Notice */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Perubahan pada Pemberitahuan Privasi Ini
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami dapat memperbarui Pemberitahuan Privasi kami dari waktu ke waktu. Kami akan
                  memberi tahu Anda tentang perubahan apa pun dengan memposting Pemberitahuan
                  Privasi baru di halaman ini dan memperbarui tanggal &quot;Terakhir
                  diperbarui&quot; di bagian atas Pemberitahuan Privasi ini.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Anda disarankan untuk meninjau Pemberitahuan Privasi ini secara berkala untuk
                  setiap perubahan. Perubahan pada Pemberitahuan Privasi ini efektif ketika mereka
                  diposting di halaman ini.
                </p>
              </div>

              {/* International Data Transfers */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Transfer Data Internasional
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Informasi Anda, termasuk informasi pribadi, dapat ditransfer ke — dan dipelihara
                  di — komputer yang terletak di luar negara bagian, provinsi, negara, atau
                  yurisdiksi pemerintah lainnya di mana undang-undang perlindungan data mungkin
                  berbeda dari yang ada di yurisdiksi Anda.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika Anda berada di luar Indonesia dan memilih untuk memberikan informasi kepada
                  kami, harap perhatikan bahwa kami mentransfer data, termasuk informasi pribadi, ke
                  Indonesia dan memprosesnya di sana.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-12 border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Tautan ke Situs Web Lain
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Situs kami dapat berisi tautan ke situs web lain yang tidak dioperasikan oleh
                  kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak
                  ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Pemberitahuan Privasi
                  dari setiap situs yang Anda kunjungi.
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Kami tidak memiliki kontrol atas dan tidak bertanggung jawab atas konten,
                  kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.
                </p>
              </div>

              {/* Contact */}
              <div className="border-t border-gray-200 pt-8">
                <h3 className="mb-4 font-sans text-lg font-bold uppercase tracking-tight">
                  Hubungi Kami
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-700">
                  Jika Anda memiliki pertanyaan tentang Pemberitahuan Privasi ini atau ingin
                  menjalankan hak privasi Anda, silakan hubungi kami di:
                </p>
                <div className="text-sm text-gray-700">
                  <p className="mb-2">
                    <strong>Serasa Kreatif</strong>
                  </p>
                  <p className="mb-2">Bintaro, Tangerang Selatan, Indonesia</p>
                  <p className="mb-2">
                    Email:{' '}
                    <a
                      href="mailto:privacy@serasakreatif.id"
                      className="hover:text-brand-teal text-primary underline"
                    >
                      privacy@serasakreatif.id
                    </a>
                  </p>
                  <p className="mb-2">
                    Telepon:{' '}
                    <a
                      href="tel:+6281288971453"
                      className="hover:text-brand-teal text-primary underline"
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
                    href="#informasi"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Informasi yang Kami Berikan
                  </a>
                  <a
                    href="#sumber"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Informasi dari Sumber
                  </a>
                  <a
                    href="#otomatis"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Pengumpulan Otomatis
                  </a>
                  <a
                    href="#penggunaan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Penggunaan Informasi
                  </a>
                  <a
                    href="#berbagi"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Berbagi Informasi
                  </a>
                  <a
                    href="#cookie"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Cookie dan Pelacakan
                  </a>
                  <a
                    href="#keamanan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Keamanan Data
                  </a>
                  <a
                    href="#penyimpanan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Penyimpanan Data
                  </a>
                  <a
                    href="#hak"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Hak Anda
                  </a>
                  <a
                    href="#anak"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Privasi Anak-anak
                  </a>
                  <a
                    href="#perubahan"
                    className="block text-sm text-gray-700 transition-colors hover:text-primary"
                  >
                    Perubahan
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
