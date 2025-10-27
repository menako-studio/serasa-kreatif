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

// GET single portfolio item by ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    const item = portfolioItems.find((p) => p.id === id)

    if (!item) {
      return NextResponse.json(
        {
          success: false,
          error: 'Portfolio item not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: item,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch portfolio item',
      },
      { status: 500 }
    )
  }
}

// PUT update portfolio item
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()

    const index = portfolioItems.findIndex((p) => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Portfolio item not found',
        },
        { status: 404 }
      )
    }

    // Check if slug is being changed and if it already exists
    if (body.slug && body.slug !== portfolioItems[index].slug) {
      if (portfolioItems.some((item) => item.slug === body.slug)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Slug already exists',
          },
          { status: 400 }
        )
      }
    }

    const updatedItem = {
      ...portfolioItems[index],
      ...body,
      id: id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    }

    portfolioItems[index] = updatedItem

    return NextResponse.json({
      success: true,
      data: updatedItem,
      message: 'Portfolio item updated successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update portfolio item',
      },
      { status: 500 }
    )
  }
}

// DELETE portfolio item
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)
    const index = portfolioItems.findIndex((p) => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Portfolio item not found',
        },
        { status: 404 }
      )
    }

    const deletedItem = portfolioItems[index]
    portfolioItems.splice(index, 1)

    return NextResponse.json({
      success: true,
      data: deletedItem,
      message: 'Portfolio item deleted successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete portfolio item',
      },
      { status: 500 }
    )
  }
}
