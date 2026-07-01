'use client'

import { useState } from 'react'
import Link from 'next/link'

const SERVICES = {
  socialMedia: {
    title: 'Social Media Management',
    description:
      'Instagram/TikTok account management, daily feed & reels content creation, and copywriting.',
    options: [
      { id: 'none', label: 'Not Needed', price: 0, details: '' },
      {
        id: 'starter',
        label: 'Starter Package',
        price: 2500000,
        details: '8 Feed Posts + 4 Reels/month',
      },
      {
        id: 'growth',
        label: 'Growth Package',
        price: 4000000,
        details: '12 Feed Posts + 8 Reels/month',
      },
      {
        id: 'premium',
        label: 'Premium Package',
        price: 6000000,
        details: '16 Feed Posts + 12 Reels/month',
      },
    ],
  },
  brandDesign: {
    title: 'Brand Design & Identity',
    description:
      'Professional logo design, color/font philosophy, complete brand guidelines, and social post templates.',
    options: [
      { id: 'none', label: 'Not Needed', price: 0, details: '' },
      {
        id: 'logo',
        label: 'Logo Only',
        price: 1500000,
        details: 'Logo design + high-res asset files',
      },
      {
        id: 'guidelines',
        label: 'Full Brand Guidelines',
        price: 3500000,
        details: 'Logo + Color Palette + Typography + Stationery design',
      },
      {
        id: 'identity',
        label: 'Complete Brand Identity',
        price: 5500000,
        details: 'Full Brand Guidelines + 9 Social Media Templates',
      },
    ],
  },
  paidAds: {
    title: 'Meta Ads Management',
    description:
      'Facebook & Instagram ad setup, audience research, ad copy writing, and custom ROAS dashboard.',
    options: [
      { id: 'none', label: 'Not Needed', price: 0, details: '' },
      {
        id: 'starter',
        label: 'Starter Campaign',
        price: 2000000,
        details: 'Ad Setup + 1 Month Optimization (Excludes ad spend)',
      },
      {
        id: 'pro',
        label: 'Pro Campaign',
        price: 5000000,
        details: 'Ad Setup + Custom Funnel Setup + 3 Months Optimization',
      },
    ],
  },
  videoProduction: {
    title: 'Creative Video Production',
    description:
      'Short-form video production (Reels/TikTok) based on UGC, including scriptwriting, shooting, and editing.',
    options: [
      { id: 'none', label: 'Not Needed', price: 0, details: '' },
      {
        id: 'starter',
        label: 'Starter (5 Videos)',
        price: 1500000,
        details: '5 Reels/TikTok Videos + Scriptwriting',
      },
      {
        id: 'growth',
        label: 'Growth (15 Videos)',
        price: 3800000,
        details: '15 Reels/TikTok Videos + Scriptwriting & UGC Talent',
      },
      {
        id: 'premium',
        label: 'Premium (30 Videos)',
        price: 7000000,
        details: '30 Reels/TikTok Videos + Scriptwriting, Talent, & Custom Edit',
      },
    ],
  },
}

export default function EstimatorPage() {
  const [selections, setSelections] = useState({
    socialMedia: SERVICES.socialMedia.options[0],
    brandDesign: SERVICES.brandDesign.options[0],
    paidAds: SERVICES.paidAds.options[0],
    videoProduction: SERVICES.videoProduction.options[0],
  })

  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')

  // Calculate total price
  const totalPrice = Object.values(selections).reduce((sum, item) => sum + item.price, 0)

  // Generate WhatsApp message
  function handleWhatsAppRedirect(e) {
    e.preventDefault()
    if (!name || !brand) {
      alert('Please fill in your name and brand name first.')
      return
    }

    const message = `Hello Serasa Kreatif, I am interested in discussing my estimated pricing proposal:

Client Name: ${name}
Brand Name: ${brand}

Selected Services:
1. Social Media Management:
   - ${selections.socialMedia.label} ${selections.socialMedia.price > 0 ? `(Rp ${selections.socialMedia.price.toLocaleString('id-ID')})` : '(Not Needed)'}
2. Brand Design & Identity:
   - ${selections.brandDesign.label} ${selections.brandDesign.price > 0 ? `(Rp ${selections.brandDesign.price.toLocaleString('id-ID')})` : '(Not Needed)'}
3. Meta Ads Management:
   - ${selections.paidAds.label} ${selections.paidAds.price > 0 ? `(Rp ${selections.paidAds.price.toLocaleString('id-ID')})` : '(Not Needed)'}
4. Creative Video Production:
   - ${selections.videoProduction.label} ${selections.videoProduction.price > 0 ? `(Rp ${selections.videoProduction.price.toLocaleString('id-ID')})` : '(Not Needed)'}

----------------------------------------
Total Estimated Investment: Rp ${totalPrice.toLocaleString('id-ID')}

Please help schedule a free consultation to follow up on these details.`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281288971453&text=${encodeURIComponent(message)}`

    // Trigger custom event tracking if available
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'estimator_lead_submission',
        clientName: name,
        brandName: brand,
        totalEstimate: totalPrice,
      })
    }

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-white pb-24 pt-32 md:pt-40 lg:pt-44">
      <div className="container-custom">
        <h1 className="font-display mb-4 text-4xl font-black uppercase text-primary md:text-5xl lg:text-6xl">
          SERVICES ESTIMATOR
        </h1>
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-600">
          Select custom service combinations suited to your business needs to check the estimated
          investment. You can send this summary directly to our team via WhatsApp for a free
          consultation.
        </p>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Form Options */}
          <div className="space-y-10 lg:col-span-8">
            {Object.entries(SERVICES).map(([key, service]) => (
              <div key={key} className="rounded-xl border border-gray-200 bg-gray-50/50 p-6">
                <h3 className="font-display mb-2 text-xl font-bold uppercase text-primary">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm text-gray-500">{service.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  {service.options.map((option) => {
                    const isSelected = selections[key].id === option.id
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelections((prev) => ({ ...prev, [key]: option }))}
                        className={`flex flex-col rounded-lg border p-4 text-left transition-all ${
                          isSelected
                            ? 'border-brand-teal bg-brand-teal/5 ring-1 ring-brand-teal'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <span className="mb-1 text-sm font-bold uppercase tracking-wide text-primary">
                          {option.label}
                        </span>
                        {option.price > 0 ? (
                          <span className="text-brand-pink mb-1 text-sm font-extrabold">
                            Rp {option.price.toLocaleString('id-ID')}
                          </span>
                        ) : (
                          <span className="mb-1 text-sm text-gray-400">Free / Skip</span>
                        )}
                        <span className="line-clamp-2 text-xs text-gray-500">{option.details}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Pricing Panel / Checkout */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-xl border border-gray-900 bg-primary p-6 text-white shadow-xl">
              <h3 className="font-display mb-6 text-xl font-bold uppercase tracking-wider">
                Estimate Summary
              </h3>

              {/* Items Selected */}
              <div className="mb-6 space-y-4 border-b border-gray-800 pb-6">
                {Object.entries(selections).map(([key, item]) => {
                  if (item.price === 0) return null
                  return (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="capitalize text-gray-400">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-semibold text-brand-teal">
                        Rp {item.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  )
                })}
                {totalPrice === 0 && (
                  <p className="text-xs italic text-gray-400">No services selected yet.</p>
                )}
              </div>

              {/* Total Price Counter */}
              <div className="mb-8 flex items-baseline justify-between">
                <span className="text-sm font-semibold uppercase tracking-wider">Total</span>
                <span className="text-brand-pink text-2xl font-black">
                  Rp {totalPrice.toLocaleString('id-ID')}
                  <span className="mt-1 block text-right text-xs font-normal text-gray-400">
                    / estimate
                  </span>
                </span>
              </div>

              {/* Client Info form */}
              <form onSubmit={handleWhatsAppRedirect} className="space-y-4">
                <div>
                  <label
                    htmlFor="client-name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Your Name
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-teal focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="brand-name"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-400"
                  >
                    Brand / Business Name
                  </label>
                  <input
                    id="brand-name"
                    type="text"
                    required
                    placeholder="e.g. Serasa Co"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full rounded border border-gray-800 bg-gray-900 px-3 py-2 text-sm text-white placeholder-gray-600 focus:border-brand-teal focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={totalPrice === 0}
                  className="bg-brand-pink hover:bg-brand-pink/90 mt-6 w-full rounded py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Send to WhatsApp
                </button>
              </form>

              <div className="mt-4 text-center">
                <Link
                  href="/services"
                  className="text-xs font-bold uppercase tracking-wider text-brand-teal hover:underline"
                >
                  View Service Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
