import { NextResponse } from 'next/server'

// In-memory storage (replace with database in production)
// This should be shared with the main route.js
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

// GET single blog post by ID
export async function GET(request, { params }) {
  try {
    const id = parseInt(params.id)
    const post = blogPosts.find((p) => p.id === id)

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found',
        },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: post,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog post',
      },
      { status: 500 }
    )
  }
}

// PUT update blog post
export async function PUT(request, { params }) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()

    const index = blogPosts.findIndex((p) => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found',
        },
        { status: 404 }
      )
    }

    // Check if slug is being changed and if it already exists
    if (body.slug && body.slug !== blogPosts[index].slug) {
      if (blogPosts.some((post) => post.slug === body.slug)) {
        return NextResponse.json(
          {
            success: false,
            error: 'Slug already exists',
          },
          { status: 400 }
        )
      }
    }

    const updatedPost = {
      ...blogPosts[index],
      ...body,
      id: id, // Ensure ID doesn't change
      updatedAt: new Date().toISOString(),
    }

    blogPosts[index] = updatedPost

    return NextResponse.json({
      success: true,
      data: updatedPost,
      message: 'Blog post updated successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update blog post',
      },
      { status: 500 }
    )
  }
}

// DELETE blog post
export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id)
    const index = blogPosts.findIndex((p) => p.id === id)

    if (index === -1) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog post not found',
        },
        { status: 404 }
      )
    }

    const deletedPost = blogPosts[index]
    blogPosts.splice(index, 1)

    return NextResponse.json({
      success: true,
      data: deletedPost,
      message: 'Blog post deleted successfully',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete blog post',
      },
      { status: 500 }
    )
  }
}
