import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
let blogPosts = [
  {
    id: 1,
    slug: 'masa-depan-loyalitas-adalah-personal',
    title: 'Masa Depan Loyalitas adalah Personal',
    date: '2025-05-14',
    category: 'Insights',
    author: 'Tim Serasa Kreatif',
    readTime: '8 menit baca',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    excerpt:
      'Dalam lanskap bisnis yang terus berkembang, konsep loyalitas pelanggan telah mengalami transformasi yang signifikan.',
    content: '<p>Konten lengkap artikel...</p>',
    published: true,
    createdAt: '2025-05-14T10:00:00Z',
    updatedAt: '2025-05-14T10:00:00Z',
  },
]

let nextId = 2

// GET all blog posts
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const published = searchParams.get('published')

    let filteredPosts = blogPosts

    if (published !== null) {
      filteredPosts = blogPosts.filter((post) => post.published === (published === 'true'))
    }

    return NextResponse.json({
      success: true,
      data: filteredPosts,
      count: filteredPosts.length,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog posts',
      },
      { status: 500 }
    )
  }
}

// POST create new blog post
export async function POST(request) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'slug', 'category', 'content', 'image']
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
    if (blogPosts.some((post) => post.slug === body.slug)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Slug already exists',
        },
        { status: 400 }
      )
    }

    const newPost = {
      id: nextId++,
      slug: body.slug,
      title: body.title,
      date: body.date || new Date().toISOString().split('T')[0],
      category: body.category,
      author: body.author || 'Tim Serasa Kreatif',
      readTime: body.readTime || '5 menit baca',
      image: body.image,
      excerpt: body.excerpt || '',
      content: body.content,
      published: body.published !== undefined ? body.published : true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    blogPosts.push(newPost)

    return NextResponse.json(
      {
        success: true,
        data: newPost,
        message: 'Blog post created successfully',
      },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create blog post',
      },
      { status: 500 }
    )
  }
}
