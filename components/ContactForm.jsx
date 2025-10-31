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
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-700">
            Perusahaan
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
            placeholder="Nama perusahaan Anda"
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
            Nomor Telepon *
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
          Kisaran Anggaran (opsional)
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
        >
          <option value="">Pilih kisaran</option>
          <option value="< 10M">Di bawah 10 Juta</option>
          <option value="10M - 25M">10 - 25 Juta</option>
          <option value="25M - 50M">25 - 50 Juta</option>
          <option value="50M - 100M">50 - 100 Juta</option>
          <option value="> 100M">Di atas 100 Juta</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
          Ringkasan Proyek *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="focus:ring-accent-cyan w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2"
          placeholder="Ceritakan tentang proyek, tujuan, dan timeline Anda..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800">
          Terima kasih! Kami akan menghubungi Anda dalam 24 jam.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800">
          Terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
      </button>

      <p className="text-center text-sm text-gray-500">
        Dengan mengirimkan formulir ini, Anda menyetujui kebijakan privasi kami.
      </p>
    </form>
  )
}
