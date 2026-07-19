export default function StructuredData() {
  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://serasakreatif.id/#organization',
    name: 'Serasa Kreatif',
    alternateName: 'Serasa Creative Studio',
    legalName: 'PT Selaras Makmur Perkasa',
    description:
      'Creative agency specializing in branding, social media management, digital campaigns, video production, and B2B offset printing for Indonesian SMEs and corporates.',
    url: 'https://serasakreatif.id',
    logo: 'https://serasakreatif.id/assets/images/logo-serasa.png',
    image: 'https://serasakreatif.id/og-image.jpg',
    telephone: '+6281288971453',
    email: 'serasakreatif.id@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bintaro',
      addressLocality: 'South Tangerang',
      addressRegion: 'Banten',
      postalCode: '15220',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.25913,
      longitude: 106.707277,
    },
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
    areaServed: [
      { '@type': 'City', name: 'Jakarta' },
      { '@type': 'City', name: 'South Tangerang' },
      { '@type': 'State', name: 'Banten' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Creative Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description:
              'Daily content production, community building, and viral campaigns to keep your brand engaging and relevant.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Digital Marketing & Ads',
            description:
              'Data-driven advertising campaigns with strategic targeting to turn social media views into real business revenue.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Visual Production',
            description:
              'End-to-end video production, corporate storytelling, and social media reels.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Brand Building & Positioning',
            description:
              'Brand strategy, visual identity, packaging design, and landing page development.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'B2B Offset & Packaging Printing',
            description:
              'Premium offset printing for custom packaging boxes, corporate stationery, and marketing collateral.',
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
    },
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
    </>
  )
}
