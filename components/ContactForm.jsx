'use client'

import { useState, useEffect } from 'react'
import { trackForm } from '@/lib/analytics'
import { useLanguage } from '@/components/LanguageContext'

export default function ContactForm() {
  const { language, dict } = useLanguage()
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
  const [turnstileToken, setTurnstileToken] = useState('')

  const isIndo = language === 'id'
  const cDict = dict?.contact || {}
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if (!siteKey) return

    let widgetId = null

    const renderTurnstile = () => {
      if (window.turnstile) {
        widgetId = window.turnstile.render('#turnstile-container', {
          sitekey: siteKey,
          callback: (token) => {
            setTurnstileToken(token)
          },
          'expired-callback': () => {
            setTurnstileToken('')
          },
          'error-callback': () => {
            setTurnstileToken('')
          },
        })
      }
    }

    if (!window.turnstile) {
      let script = document.querySelector('script[src*="challenges.cloudflare.com"]')
      if (!script) {
        script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.defer = true
        document.head.appendChild(script)
      }
      script.addEventListener('load', renderTurnstile)
    } else {
      renderTurnstile()
    }

    return () => {
      if (widgetId !== null && window.turnstile) {
        try {
          window.turnstile.remove(widgetId)
        } catch (e) {
          console.warn('Failed to clean up Turnstile widget:', e)
        }
      }
    }
  }, [siteKey])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    trackForm('contact_form', 'attempt', {
      company: formData.company,
      budget: formData.budget,
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(turnstileToken ? { 'X-Turnstile-Token': turnstileToken } : {}),
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        trackForm('contact_form', 'success', {
          company: formData.company,
          budget: formData.budget,
        })
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          budget: '',
          message: '',
        })
        setTurnstileToken('')
        if (window.turnstile) {
          window.turnstile.reset('#turnstile-container')
        }
      } else {
        setSubmitStatus('error')
        trackForm('contact_form', 'error', {
          company: formData.company,
          budget: formData.budget,
          error_type: 'bad_response',
        })
        if (window.turnstile) {
          window.turnstile.reset('#turnstile-container')
        }
      }
    } catch (error) {
      setSubmitStatus('error')
      trackForm('contact_form', 'error', {
        company: formData.company,
        budget: formData.budget,
        error_type: error?.message || 'network_error',
      })
      if (window.turnstile) {
        window.turnstile.reset('#turnstile-container')
      }
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

  const isSubmitDisabled = isSubmitting || (!!siteKey && !turnstileToken)

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
            {cDict.formContactName || 'Full Name'} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder={isIndo ? 'Nama Anda' : 'Your Name'}
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            {cDict.formCompanyName || 'Company'}
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder={isIndo ? 'Nama perusahaan Anda' : 'Your company name'}
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
            {cDict.formEmail || 'Email'} *
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
            {cDict.formPhone || 'Phone Number'} *
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
          {isIndo ? 'Kisaran Anggaran (opsional)' : 'Budget Range (optional)'}
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
        >
          <option value="">{isIndo ? 'Pilih kisaran' : 'Select range'}</option>
          <option value="< 10M">{isIndo ? 'Di bawah 10 Juta' : 'Under 10 Million'}</option>
          <option value="10M - 25M">10 - 25 Million</option>
          <option value="25M - 50M">25 - 50 Million</option>
          <option value="50M - 100M">50 - 100 Million</option>
          <option value="> 100M">{isIndo ? 'Di atas 100 Juta' : 'Over 100 Million'}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          {isIndo ? 'Ringkasan Proyek *' : 'Project Summary *'}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
          placeholder={
            isIndo
              ? 'Jelaskan proyek, tujuan, dan linimasa Anda...'
              : 'Tell us about your project, goals, and timeline...'
          }
        />
      </div>

      {/* Cloudflare Turnstile Captcha */}
      {siteKey && (
        <div className="flex justify-center py-2">
          <div id="turnstile-container" />
        </div>
      )}

      {submitStatus === 'success' && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
          {isIndo
            ? 'Terima kasih! Kami akan menghubungi Anda dalam waktu 24 jam.'
            : 'Thank you! We will contact you within 24 hours.'}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
          {isIndo
            ? 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami lewat WhatsApp.'
            : 'An error occurred. Please try again or contact us via WhatsApp.'}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitDisabled}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting
          ? isIndo
            ? 'Mengirim...'
            : 'Sending...'
          : cDict.formSubmit || 'Send Message'}
      </button>

      <p className="text-center text-sm text-gray-500">
        {isIndo
          ? 'Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.'
          : 'By submitting this form, you agree to our privacy policy.'}
      </p>
    </form>
  )
}
