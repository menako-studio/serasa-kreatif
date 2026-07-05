import Image from 'next/image'
import Link from 'next/link'

// This would fetch from API in production
async function getBlogPost(slug) {
  // Mock data for now
  return {
    id: 1,
    slug: slug,
    title: 'The Future of Loyalty is Personal',
    date: 'May 14, 2025',
    category: 'Insights',
    author: 'Serasa Kreatif Team',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=800&fit=crop',
    content: `
      <p>In the continuously evolving business landscape, the concept of customer loyalty has undergone a significant transformation. It is no longer enough to just offer points or generic discount programs. Modern customers demand personalized, relevant, and meaningful experiences.</p>

      <h2>From Touchpoint to System: Rethinking Personalization</h2>
      
      <p>For years, personalization has been viewed as a tactic—something applied to specific touchpoints to make customers feel special. However, this approach is too narrow and inconsistent. Customers do not interact with your brand in a vacuum; they have complex journeys across multiple channels, devices, and contexts.</p>

      <p>Effective personalization is not just about adding a customer's name to an email or recommending products based on prior purchases. It is about understanding the broader context of the customer's life—their current needs, future preferences, and core values.</p>

      <h2>The Power of Contextual Relevance</h2>

      <p>Consumer behavior changes constantly. What is relevant today may be obsolete tomorrow. Winning brands are those that can anticipate these shifts and adapt their experiences accordingly.</p>

      <p>This is not just about gathering more data—it is about how you use that data to create truly meaningful experiences. Brands must pivot from "what can we sell to this customer?" to "how can we add value to this customer's life?"</p>

      <h2>From Transactional to Emotional Loyalty</h2>

      <p>Traditional loyalty programs focus on transactions. However, true loyalty is built on emotional connections. Customers are not loyal to brands for reward points—they are loyal because the brand understands them, shares their values, and consistently delivers experiences that exceed expectations.</p>

      <p>This requires a fundamental shift in how brands think about customer relationships. Rather than seeing every interaction as an opportunity to sell, brands should view it as an opportunity to build trust and deepen connection.</p>

      <h2>Measuring Loyalty Beyond Transactions</h2>

      <p>Traditional metrics like purchase frequency and customer lifetime value are still important, but they do not provide the full picture. Brands need to measure deeper indicators of loyalty:</p>

      <ul>
        <li><strong>Emotional engagement:</strong> How connected are customers to your brand outside of transactions?</li>
        <li><strong>Advocacy:</strong> Do customers recommend your brand to others?</li>
        <li><strong>Trust:</strong> Do customers share personal data and provide honest feedback?</li>
        <li><strong>Community involvement:</strong> Do customers participate in your brand community?</li>
      </ul>

      <h2>The Future is Personal</h2>

      <p>As we move forward, successful brands will be those that can create truly personal experiences—not just personalized based on demographic data or purchase history, but understood within the broader context of the customer's life.</p>

      <p>This requires investment in technology, data, and most importantly, in understanding what truly matters to your customers. However, the results are worth it: deeper loyalty, higher lifetime value, and more meaningful relationships between the brand and the customer.</p>
    `,
  }
}

export default async function BlogPostPage({ params }) {
  const post = await getBlogPost(params.slug)

  return (
    <div className="bg-white text-neutral-900 antialiased">
      {/* Hero Image */}
      <section className="relative h-[60vh] bg-gray-900">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-90"
          priority
        />
      </section>

      {/* Article Content */}
      <article className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-12 border-b border-gray-200 pb-12">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm">
                <Link href="/blog" className="hover:text-brand-pink text-gray-500">
                  Blog
                </Link>
                <span className="mx-2 text-gray-300">/</span>
                <span className="text-gray-900">{post.category}</span>
              </nav>

              {/* Meta */}
              <div className="mb-4 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wider text-gray-500">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="mb-6 font-sans text-4xl font-black uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {post.title}
              </h1>

              {/* Author */}
              <div className="text-sm text-gray-600">
                By <span className="font-semibold text-gray-900">{post.author}</span>
              </div>
            </header>

            {/* Article Body */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                '--tw-prose-body': '#374151',
                '--tw-prose-headings': '#111827',
                '--tw-prose-links': '#04104b',
                '--tw-prose-bold': '#111827',
                '--tw-prose-counters': '#6b7280',
                '--tw-prose-bullets': '#6b7280',
              }}
            />

            {/* Footer */}
            <footer className="mt-16 border-t border-gray-200 pt-8">
              <Link
                href="/blog"
                className="hover:text-brand-pink inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-wider transition-colors"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>
            </footer>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding border-t border-gray-200 bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-8 font-sans text-2xl font-black uppercase tracking-tight">
            Related Articles
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="group">
                <Link href={`/blog/article-${i}`} className="block">
                  <div className="relative mb-4 aspect-[4/3] overflow-hidden bg-gray-900">
                    <Image
                      src={`https://images.unsplash.com/photo-${1542744173 + i * 1000}-8e7e53415bb0?w=800&h=600&fit=crop`}
                      alt={`Article ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="bg-brand-pink absolute right-0 top-0 z-10 h-12 w-12"></div>
                  </div>
                  <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                    11.{10 + i}.25
                  </p>
                  <h3 className="group-hover:text-brand-pink font-sans text-lg font-bold leading-tight tracking-tight transition-colors">
                    More Exciting Articles About Digital Strategy {i}
                  </h3>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
