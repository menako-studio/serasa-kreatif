'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          budget: '',
          message: '',
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
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="Your company name"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="+62 812 xxxx xxxx"
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-700">
          Budget Range (optional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
        >
          <option value="">Select range</option>
          <option value="< 10M">Under 10 Million</option>
          <option value="10M - 25M">10 - 25 Million</option>
          <option value="25M - 50M">25 - 50 Million</option>
          <option value="50M - 100M">50 - 100 Million</option>
          <option value="> 100M">Over 100 Million</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Project Summary *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
          Thank you! We will contact you within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
          An error occurred. Please try again or contact us via WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      <p className="text-center text-sm text-gray-500">
        By submitting this form, you agree to our privacy policy.
      </p>
    </form>
  )
}
