'use client'

import { useState } from 'react'

export default function PrintingContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'packaging', // default category
    quantity: '1000',
    specs: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Package the printing-specific fields into the message field expected by /api/contact
    const combinedMessage = `
Product Category: ${formData.category.toUpperCase()}
Target Quantity: ${formData.quantity}
Specifications: ${formData.specs || 'None provided'}
Additional Notes: ${formData.notes || 'None'}
    `.trim()

    const payload = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      budget: 'B2B Printing Quote', // Tagging the budget field
      message: combinedMessage,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setSubmitStatus('success')
        if (typeof window !== 'undefined' && window.dataLayer) {
          window.dataLayer.push({
            event: 'printing_contact_success',
            category: formData.category,
            quantity: formData.quantity,
          })
        }
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          category: 'packaging',
          quantity: '1000',
          specs: '',
          notes: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            Contact Person *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label
            htmlFor="company"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
            placeholder="Your Company Name"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            Corporate Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            WhatsApp / Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
            placeholder="+62 812 xxxx xxxx"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="category"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            Product Category *
          </label>
          <select
            id="category"
            name="category"
            required
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
          >
            <option value="stationery">Corporate Stationery (Cards, letterheads, envelopes)</option>
            <option value="packaging">Custom Packaging & Corrugated Boxes</option>
            <option value="collateral">Marketing Collateral (Brochures, flyers, catalogs)</option>
            <option value="editorial">Books & Corporate Magazines</option>
            <option value="custom">Other Custom Offset Printing</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="quantity"
            className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
          >
            Estimated Print Quantity *
          </label>
          <select
            id="quantity"
            name="quantity"
            required
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 bg-white px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
          >
            <option value="500">500 pcs (Minimum Tier)</option>
            <option value="1000">1,000 pcs (Standard Wholesale Tier)</option>
            <option value="5000">5,000 pcs (Bulk Tier)</option>
            <option value="10000">10,000+ pcs (Enterprise Tier)</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="specs"
          className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
        >
          Printing Specifications (e.g. Dimensions, Paper Weight, Finishing)
        </label>
        <textarea
          id="specs"
          name="specs"
          rows={3}
          value={formData.specs}
          onChange={handleChange}
          className="w-full resize-none border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
          placeholder="E.g., A5 size, Art Paper 150gsm, Matte Lamination, Spot UV on cover..."
        />
      </div>

      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-sm font-bold uppercase tracking-wider text-gray-700"
        >
          Project Brief / Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={formData.notes}
          onChange={handleChange}
          className="w-full resize-none border border-gray-300 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-0"
          placeholder="Describe your design readiness, targeted deadlines, or recurring printing needs..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="border border-green-200 bg-green-50 px-4 py-3 text-green-800">
          Thank you! Your quotation request has been received. Our Specialist will reach out to you
          within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="border border-danger/20 bg-danger/5 px-4 py-3 text-danger">
          An error occurred while sending your request. Please try again or contact us directly via
          WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending Request...' : 'Request Custom Quote'}
      </button>
    </form>
  )
}
