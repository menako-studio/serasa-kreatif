'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { trackForm, trackEngagement } from '@/lib/analytics'
import { useLanguage } from '@/components/LanguageContext'

export default function StickyWhatsApp() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    message: '',
  })
  const [showTooltip, setShowTooltip] = useState(false)
  const pathname = usePathname()

  const isIndo = language === 'id'

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      if (!isDismissed && !isOpen) {
        setShowTooltip(true)
      }
    }, 5000)
    return () => clearTimeout(timer)
  }, [isDismissed, isOpen])

  // Hide on contact page
  if (pathname === '/contact' || isDismissed) {
    return null
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    trackForm('whatsapp_lead_capture', 'attempt', {
      page_path: pathname,
    })

    // Construct the WhatsApp API message
    const line1 = isIndo ? `Halo Serasa Kreatif! 👋` : `Hello Serasa Kreatif! 👋`
    const line2 = isIndo ? `Nama: ${formData.name}` : `Name: ${formData.name}`
    const line3 = formData.company
      ? isIndo
        ? `Perusahaan: ${formData.company}`
        : `Company: ${formData.company}`
      : ''
    const line4 = isIndo ? `Pesan: ${formData.message}` : `Message: ${formData.message}`

    const combinedMessage = [line1, line2, line3, line4].filter(Boolean).join('\n')

    const whatsappMessage = encodeURIComponent(combinedMessage)
    const whatsappUrl = `https://api.whatsapp.com/send?phone=6281288971453&text=${whatsappMessage}`

    // Push events using centralized utility
    trackForm('whatsapp_lead_capture', 'success', {
      name: formData.name,
      company: formData.company,
      page_path: pathname,
    })

    // Reset and close
    setFormData({ name: '', company: '', message: '' })
    setIsOpen(false)

    // Open WhatsApp URL
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* 1. Tooltip Pop-up */}
      {showTooltip && !isOpen && (
        <div className="mb-3 animate-bounce rounded-lg border border-brand-teal/20 bg-primary/95 p-3 text-xs font-medium text-white shadow-xl backdrop-blur-sm sm:max-w-xs">
          <div className="flex items-start justify-between gap-4">
            <p>
              {isIndo
                ? '👋 Butuh partner kreatif? Yuk ngobrol di WhatsApp!'
                : "👋 Need a creative partner? Let's chat on WhatsApp!"}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowTooltip(false)
              }}
              className="text-white/50 hover:text-white"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* 2. Interactive Lead Capture Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[360px] animate-fade-in overflow-hidden rounded-2xl border border-white/10 bg-primary/95 text-white shadow-2xl backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between bg-brand-teal p-4 text-primary">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-black text-brand-teal">
                  SK
                </div>
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-brand-teal bg-emerald-500" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold uppercase tracking-wide">
                  Serasa Support
                </h4>
                <p className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                  {isIndo ? 'Biasanya membalas cepat' : 'Typically replies in minutes'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-primary/70 transition-colors hover:text-primary"
              aria-label="Close Chat Window"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Chat Body & Form */}
          <div className="max-h-[380px] space-y-4 overflow-y-auto p-4">
            <div className="rounded-lg bg-white/5 p-3 text-xs leading-relaxed text-white/90">
              <p className="font-semibold text-brand-teal">
                {isIndo ? 'Halo! 💫' : 'Hi there! 💫'}
              </p>
              <p className="mt-1">
                {isIndo
                  ? 'Silakan perkenalkan diri Anda singkat untuk memulai konsultasi langsung dengan Spesialis Kreatif kami di WhatsApp.'
                  : 'Please introduce yourself briefly to start a direct consultation with our Creative Specialist on WhatsApp.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                  {isIndo ? 'Nama Anda *' : 'Your Name *'}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isIndo ? 'Contoh: Alex Wijaya' : 'e.g., Alex Johnson'}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-brand-teal focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                  {isIndo ? 'Nama Perusahaan (opsional)' : 'Company Name (optional)'}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={isIndo ? 'Contoh: PT Maju Jaya' : 'e.g., Acme Corp'}
                  className="w-full rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-brand-teal focus:outline-none"
                />
              </div>

              <div>
                <label className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-white/60">
                  {isIndo ? 'Pesan / Brief Proyek *' : 'Message / Brief *'}
                </label>
                <textarea
                  name="message"
                  required
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isIndo ? 'Tuliskan kebutuhan bisnis Anda...' : 'Tell us what you need...'
                  }
                  className="w-full resize-none rounded border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 focus:border-brand-teal focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#20BA5A]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {isIndo ? 'Kirim ke WhatsApp' : 'Send to WhatsApp'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {/* Simple Close Dismiss Button (only shows when window is closed) */}
        {!isOpen && (
          <button
            onClick={() => setIsDismissed(true)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-primary text-white/50 transition-all hover:bg-white/5 hover:text-white"
            aria-label="Never show chat widget again"
          >
            ×
          </button>
        )}

        <button
          onClick={() => {
            const nextState = !isOpen
            setIsOpen(nextState)
            setShowTooltip(false)
            trackEngagement('whatsapp_widget_toggle', {
              action: nextState ? 'open' : 'close',
              page_path: pathname,
            })
          }}
          className="flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-xl transition-all hover:scale-105 hover:bg-[#20BA5A] hover:shadow-2xl"
          aria-label="Toggle WhatsApp Chat Box"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
