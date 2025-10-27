import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
let portfolioItems = [
  {
    id: 1,
    slug: 'japo-brand-identity',
    title: 'JAPO - Brand Identity Redesign',
    client: 'JAPO Coffee',
    category: 'Brand Identity',
    year: '2025',
    services: ['Brand Strategy', 'Visual Identity', 'Packaging Design'],
    thumbnail: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
    featured: true,
    description:
      'Redesign identitas brand untuk coffee shop lokal yang ingin memperkuat positioning di pasar premium.',
    challenge:
      'JAPO membutuhkan identitas visual yang lebih modern dan dapat bersaing dengan brand kopi internasional.',
    solution:
      'Kami menciptakan sistem identitas yang menggabungkan elemen tradisional Indonesia dengan estetika kontemporer.',
    results: [
      'Peningkatan brand awareness 150%',
      'Peningkatan penjualan 85% dalam 6 bulan pertama',
      'Featured di 5 publikasi desain internasional',
    ],
    images: [
      'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=1200&h=800&fit=crop',
    ],
    published: true,
    createdAt: '2025-01-15T10:00:00Z',
    updatedAt: '2025-01-15T10:00:00Z',
  },
  {
    id: 2,
    slug: 'pregnasia-spa-social',
    title: 'Pregnasia Spa - Social Media Campaign',
    client: 'Pregnasia Spa',
    category: 'Digital Marketing',
    year: '2024',
    services: ['Social Media Strategy', 'Content Creation', 'Campaign Management'],
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
    featured: true,
    description:
      'Kampanye media sosial untuk spa khusus ibu hamil dengan fokus pada edukasi dan engagement.',
    challenge: 'Membangun awareness untuk layanan spa khusus dengan target market yang spesifik.',
    solution:
      'Strategi konten yang mengedukasi sekaligus menghibur, dengan pendekatan human-centric.',
    results: [
      'Pertumbuhan followers 300% dalam 3 bulan',
      'Engagement rate meningkat dari 2% menjadi 8.5%',
      'Konversi booking meningkat 120%',
    ],
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1200&h=800&fit=crop',
    ],
    published: true,
    createdAt: '2024-11-20T10:00:00Z',
    updatedAt: '2024-11-20T10:00:00Z',
  },
]

let nextId = 3

// GET all portfolio items
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')
    const featured = searchParams.get('featured')
    const category = searchParams.get('category')

    let filteredItems = portfolioItems

    if (published !== null) {
      filteredItems = filteredItems.filter((item) => item.published === (published === 'true'))
    }

    if (featured !== null) {
      filteredItems = filteredItems.filter((item) => item.featured === (featured === 'true'))
    }

    if (category) {
      filteredItems = filteredItems.filter((item) => item.category === category)
    }

    return NextResponse.json({
      success: true,
      data: filteredItems,
      count: filteredItems.length,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch portfolio items',
      },
      { status: 500 }
    )
  }
}

// POST create new portfolio item
export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'slug', 'client', 'category', 'thumbnail', 'description']
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`,
          },
          { status: 400 }
        )
      }
    }

    // Check if slug already exists
    if (portfolioItems.some((item) => item.slug === body.slug)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Slug already exists',
        },
        { status: 400 }
      )
    }

    const newItem = {
      id: nextId++,
      slug: body.slug,
      title: body.title,
      client: body.client,
      category: body.category,
      year: body.year || new Date().getFullYear().toString(),
      services: body.services || [],
      thumbnail: body.thumbnail,
      featured: body.featured !== undefined ? body.featured : false,
      description: body.description,
      challenge: body.challenge || '',
      solution: body.solution || '',
      results: body.results || [],
      images: body.images || [body.thumbnail],
      published: body.published !== undefined ? body.published : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    portfolioItems.push(newItem)

    return NextResponse.json(
      {
        success: true,
        data: newItem,
        message: 'Portfolio item created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create portfolio item',
      },
      { status: 500 }
    )
  }
}
