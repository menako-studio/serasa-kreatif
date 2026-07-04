/**
 * English Copy for Serasa Kreatif
 * All UI text and marketing content in one centralized file
 */

export const nav = {
  portfolio: 'Portfolio',
  services: 'Services',
  about: 'About',
  contact: 'Contact',
}

export const hero = {
  // Main hero - R/GA inspired with Serasa identity
  headline: 'Connecting Brands. Driving Growth.',
  subhead:
    'We create digital experiences that connect brands, engage audiences, and drive results.',

  // CTAs
  ctaPrimary: 'Start Project',
  ctaSecondary: 'View Work',
}

export const services = {
  sectionHeadline: 'WHAT WE DO',
  sectionIntro:
    'We combine creativity with strategy to create solutions that drive your business forward. From brand building to social media management and B2B printing, every service is designed to deliver real results.',
  ctaLearnMore: 'CONTACT US',
  ctaViewAll: 'VIEW ALL SERVICES',

  items: [
    {
      title: 'Social Media Management',
      shortDescription:
        'Daily content production, community building, and viral campaigns to keep your brand engaging and relevant.',
      details: [
        'Content Calendar & Planning',
        "Employee-Generated Content (BK's 278K organic views)",
        "Viral Storytelling (Arkaff's 82K Instagram views)",
        'Community Management & Growth',
        'Monthly Analytics & Performance Audits',
      ],
      preview: '/assets/images/thumbnail/Thumbnail-Arkaff.webp',
    },
    {
      title: 'Digital Marketing & Ads',
      shortDescription:
        'Data-driven advertising campaigns with strategic targeting to turn social media views into real business revenue.',
      details: [
        "Hyperlocal Targeting (Pregnansia's 29% closing rate)",
        "Lead Generation (BK's 200+ monthly leads)",
        'Meta & Google Ads Optimization',
        'High-converting Sales Copywriting',
        "Direct Revenue Scaling (Kotabi's 100M+ IDR revenue)",
      ],
      preview: '/assets/images/thumbnail/Thumbnail-Pregnansia.webp',
    },
    {
      title: 'Commercial Visual Production',
      shortDescription:
        'End-to-end video production, corporate storytelling, and social media reels that showcase your products and brand values.',
      details: [
        'Product Video Shoot & Scriptwriting (SR12 Lip Balm launch)',
        'Television Commercials (TVC) (BNI Wondr 15-second spot)',
        'Corporate Profiles (Manna Panna Company Profile)',
        'Professional Motion Graphics & Post-Editing',
      ],
      preview: '/assets/images/thumbnail/Thumbnail-SR12.webp',
    },
    {
      title: 'Brand Building & Positioning',
      shortDescription:
        'Positioning modest fashion, B2B drinks, and packaging brands from zero to market readiness with clear identities.',
      details: [
        'Brand Strategy & USP Blueprinting (Arkaff modest fashion from zero)',
        'Product Packaging Design (Bandar Kardus Custom Box layouts)',
        'Logo & Visual Identity Creation',
        'Landing Page Development & Domain Launch',
      ],
      preview: '/assets/images/thumbnail/Thumbnail-Bandar-Kardus.webp',
    },
    {
      title: 'B2B Marketing & Activations',
      shortDescription:
        'Boosting purchase frequency and wholesale outreach through event activations, user-generated content, and online lead capture.',
      details: [
        'B2B Social Content Optimization (JAPO B2B transformation)',
        'Event Booth Activations & Canvassing Support',
        'User-Generated Content (UGC) Campaigns',
        'Purchase Frequency Maximization (+400% frequency increase)',
      ],
      preview: '/assets/images/thumbnail/Thumbnail-JAPO.webp',
    },
    {
      title: 'B2B Offset & Packaging Printing',
      shortDescription:
        'Premium offset printing for custom packaging boxes, corporate stationery, and flyer catalog books via Serasa Printing.',
      details: [
        'Custom Corrugated Packaging Boxes',
        'Corporate Identity Stationery (Business Cards, envelopes)',
        'Flyers & Company Profile catalogs',
        'Dedicated B2B Account Manager & Color Precision',
      ],
      preview: '/assets/images/serasa-printing/serasa_b2b_layanan-cetak-offset_1x1_v1.jpg',
      link: '/services/printing',
      brandName: 'Serasa Printing',
    },
  ],
}

export const servicesPage = {
  pageTitle: 'Services',
  heroHeadline: 'SERASA KREATIF SERVICES',
  heroDescription:
    'We partner with clients for Brand Building, Social Media Management, Digital Campaigns, Video Production, and B2B Offset Printing. We have expertise across various sectors to help SMEs grow and compete.',

  servicesHeadline: 'SERVICES',
  servicesIntro:
    'We work across disciplines to find creative solutions that are measurable and relevant to local business needs.',

  items: services.items,
}

export const portfolio = {
  sectionHeadline: 'PORTFOLIO',
  sectionSubhead: 'Successful brand transformations for our clients',
  ctaViewDetail: 'View Detail',
  ctaViewAll: 'VIEW ALL WORK',
}

export const clientLogos = {
  sectionHeadline: 'Trusted by Leading Brands',
  sectionSubhead:
    'We are proud to work with visionary local and international brands, helping them grow and thrive through the right creative strategies.',
}

export const news = {
  sectionHeadline: 'NEWS',
  ctaSeeMore: 'SEE MORE',

  items: [
    {
      category: 'PROJECT',
      title: 'STONELAND BRAND IDENTITY',
      description: 'Building premium visual identity for a leading property developer',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    },
    {
      category: 'PARTNER',
      title: 'NEW COLLABORATION WITH LOCAL BRANDS',
      description: "Strategic partnership to strengthen Indonesia's creative ecosystem",
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
    },
    {
      category: 'PROJECT',
      title: 'JAKARTA LAUNCHES AI LEAD CREATIVE STRATEGY',
      description: 'AI innovation in digital campaigns for maximum efficiency',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    },
    {
      category: 'PRESS',
      title: 'NIKE BRAZIL ART AGENCY THE YEAR',
      description: 'International award for breakthrough campaign of the year',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
    },
    {
      category: 'WORK',
      title: '+ ADDITION',
      description: 'Technology-based creative startup incubation program',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    },
    {
      category: 'PRESS',
      title: 'COMMERCE IS SHIFTING',
      description: 'E-commerce trends 2025 and adaptation strategies for local brands',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&q=80',
    },
  ],
}

export const contact = {
  sectionHeadline: 'JOIN SERASA KREATIF',
  introText:
    'We are always looking for passionate creative talent to join our team. Contact us to start a project that will impact your business.',

  offices: [
    { city: 'AH', country: 'ABU DHABI' },
    { city: 'AU', country: 'AUSTIN' },
    { city: 'BA', country: 'BUENOS AIRES' },
    { city: 'CN', country: 'SHENZHEN' },
    { city: 'DE', country: 'SYDNEY' },
    { city: 'JK', country: 'JAKARTA' },
    { city: 'LN', country: 'LONDON' },
    { city: 'NY', country: 'NEW YORK' },
    { city: 'SG', country: 'SINGAPORE' },
    { city: 'UK', country: 'LONDON' },
    { city: 'US', country: 'PORTLAND' },
  ],

  locationLabel: 'LOCATION',
  locationValue: 'Bintaro, South Tangerang',
  emailLabel: 'EMAIL',
  emailValue: 'serasakreatif.id@gmail.com',
  instagramLabel: 'INSTAGRAM',
  instagramValue: '@serasakreatif.id',
  phoneLabel: 'WHATSAPP',
  phoneValue: '+62 812-8897-1453',
  ctaStartProject: 'START PROJECT',

  // Form labels
  formCompanyName: 'Company Name',
  formContactName: 'Contact Name',
  formEmail: 'Email',
  formPhone: 'Phone (optional)',
  formMessage: 'Brief message (scope / timeline / budget)',
  formSubmit: 'Send Message',
}

export const footer = {
  // Big statement - Serasa Kreatif identity
  statement: "WE DESIGN BRANDS\nAND EXPERIENCES\nFOR A BETTER\nINDONESIA'S FUTURE",
  statementEmoji: '■',
  copyright: '©SERASA KREATIF 2022–PRESENT',
}
