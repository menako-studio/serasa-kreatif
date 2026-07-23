export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://serasakreatif.id/#localbusiness',
    name: 'Serasa Kreatif',
    // alternateName links to Google Business Profile name "Klinik Kreatif Serasa"
    // so Google understands these two entities are the same business.
    alternateName: ['Klinik Kreatif Serasa', 'Serasa Creative Studio'],
    legalName: 'PT Selaras Makmur Perkasa',
    description:
      'Agensi kreatif & social media management di Bintaro, Tangerang Selatan. Layanan: branding, manajemen media sosial, kampanye digital, produksi video, dan cetak offset B2B untuk bisnis Indonesia.',
    url: 'https://serasakreatif.id',
    logo: {
      '@type': 'ImageObject',
      url: 'https://serasakreatif.id/assets/images/logo-serasa.png',
      width: 200,
      height: 200,
    },
    image: 'https://serasakreatif.id/og-image.jpg',
    telephone: '+6281288971453',
    email: 'serasakreatif.id@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bintaro',
      addressLocality: 'Tangerang Selatan',
      addressRegion: 'Banten',
      postalCode: '15220',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.25913,
      longitude: 106.707277,
    },
    // Expanded to cover full Jabodetabek service area
    areaServed: [
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'City', name: 'Jakarta Selatan' },
      { '@type': 'City', name: 'Jakarta Barat' },
      { '@type': 'City', name: 'Jakarta Pusat' },
      { '@type': 'City', name: 'Jakarta Timur' },
      { '@type': 'City', name: 'Jakarta Utara' },
      { '@type': 'City', name: 'Tangerang Selatan' },
      { '@type': 'City', name: 'Tangerang' },
      { '@type': 'City', name: 'Bogor' },
      { '@type': 'City', name: 'Depok' },
      { '@type': 'City', name: 'Bekasi' },
      { '@type': 'State', name: 'Banten' },
      { '@type': 'State', name: 'Jawa Barat' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    hasMap: 'https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9',
    sameAs: [
      'https://www.instagram.com/serasakreatif.id/',
      'https://www.instagram.com/serasaprinting/',
      'https://www.tiktok.com/@serasakreatif.id',
      'https://www.linkedin.com/company/serasa-kreatif/',
      'https://maps.app.goo.gl/R9YvwZzhmrfFNoDM9',
      'https://share.google/13159QdwsmxTI0F4g',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '48',
      bestRating: '5',
      worstRating: '1',
    },
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Bank Transfer, Cash',
    knowsAbout: [
      'Social Media Management',
      'Brand Strategy',
      'Digital Marketing',
      'Content Creation',
      'Video Production',
      'Offset Printing',
      'Branding Agency',
      'Creative Agency',
      'Instagram Marketing',
      'TikTok Marketing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Agensi Kreatif',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description:
              'Manajemen media sosial harian: pembuatan konten, community building, dan kampanye viral untuk menjaga brand tetap relevan dan engaging.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing & Iklan',
            description:
              'Kampanye iklan berbasis data dengan targeting strategis untuk mengubah tayangan media sosial menjadi pendapatan bisnis nyata.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Produksi Visual Komersial',
            description:
              'Produksi video end-to-end, corporate storytelling, dan social media reels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Building & Positioning',
            description:
              'Strategi merek, identitas visual, desain kemasan, dan pengembangan landing page.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cetak Offset & Packaging B2B',
            description:
              'Cetak offset premium untuk kotak kemasan custom, alat tulis perusahaan, dan materi marketing.',
          },
        },
      ],
    },
  }

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://serasakreatif.id/#organization',
    name: 'Serasa Kreatif',
    legalName: 'PT Selaras Makmur Perkasa',
    url: 'https://serasakreatif.id',
    logo: {
      '@type': 'ImageObject',
      url: 'https://serasakreatif.id/assets/images/logo-serasa.png',
      width: 200,
      height: 200,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+6281288971453',
      contactType: 'customer service',
      availableLanguage: ['Indonesian', 'English'],
      areaServed: 'ID',
    },
    sameAs: [
      'https://www.instagram.com/serasakreatif.id/',
      'https://www.tiktok.com/@serasakreatif.id',
      'https://www.linkedin.com/company/serasa-kreatif/',
    ],
  }

  // WebSite schema enables Google Sitelinks Searchbox in SERP
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://serasakreatif.id/#website',
    name: 'Serasa Kreatif',
    url: 'https://serasakreatif.id',
    publisher: {
      '@id': 'https://serasakreatif.id/#organization',
    },
    inLanguage: ['id-ID', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://serasakreatif.id/portfolio?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  // FAQPage schema targeting high-value Indonesian local search queries
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apa itu agensi kreatif dan apa bedanya dengan advertising agency biasa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Agensi kreatif adalah perusahaan yang menggabungkan strategi merek, desain visual, dan eksekusi konten dalam satu layanan terintegrasi. Berbeda dengan advertising agency yang fokus pada pemasangan iklan, agensi kreatif seperti Serasa Kreatif membantu bisnis membangun identitas merek yang kuat, mengelola media sosial secara konsisten, dan menciptakan konten yang relevan untuk audiens target mereka.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa biaya jasa social media management di Jakarta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Biaya jasa social media management di Jakarta bervariasi tergantung lingkup pekerjaan, jumlah platform, dan frekuensi posting. Di Serasa Kreatif, kami menawarkan paket manajemen media sosial yang disesuaikan dengan kebutuhan dan anggaran bisnis Anda — mulai dari UMKM hingga korporat. Hubungi kami untuk konsultasi gratis dan penawaran yang transparan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah Serasa Kreatif melayani klien di luar Jakarta?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, Serasa Kreatif melayani klien di seluruh area Jabodetabek (Jakarta, Bogor, Depok, Tangerang, Bekasi) dan Indonesia. Berbasis di Bintaro, Tangerang Selatan, kami telah berhasil bermitra dengan brand dari berbagai kota di Indonesia secara remote maupun langsung.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apa saja layanan agensi sosial media yang ditawarkan Serasa Kreatif?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Serasa Kreatif menawarkan layanan lengkap agensi sosial media: manajemen akun Instagram & TikTok, pembuatan konten foto & video, copywriting, iklan berbayar (Meta Ads, Google Ads), laporan performa bulanan, dan strategi konten. Kami juga menyediakan layanan branding, produksi video komersial, dan cetak offset B2B.',
        },
      },
      {
        '@type': 'Question',
        name: 'Bagaimana cara memulai proyek dengan Serasa Kreatif?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mudah! Anda bisa menghubungi kami melalui WhatsApp di +62 812-8897-1453, email serasakreatif.id@gmail.com, atau mengisi formulir di halaman Kontak kami. Tim kami akan merespons dalam 1x24 jam untuk menjadwalkan sesi konsultasi gratis dan mendiskusikan kebutuhan bisnis Anda.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
