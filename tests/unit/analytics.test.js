import { describe, it, expect, beforeEach, vi } from 'vitest'
import {
  trackEvent,
  trackPageView,
  trackForm,
  trackOutboundClick,
  trackVideo,
  trackEngagement,
  trackSearch,
  trackLanguageChange,
} from '@/lib/analytics'

describe('Analytics Utility (GTM dataLayer & GA4 gtag)', () => {
  beforeEach(() => {
    window.dataLayer = []
    window.gtag = vi.fn()
  })

  it('trackEvent pushes event to dataLayer and calls gtag', () => {
    trackEvent('custom_event', { key: 'value' })

    expect(window.dataLayer).toContainEqual({
      event: 'custom_event',
      key: 'value',
    })
    expect(window.gtag).toHaveBeenCalledWith('event', 'custom_event', { key: 'value' })
  })

  it('trackPageView pushes page_view event with URL and metadata', () => {
    trackPageView('/services', 'Services — Serasa Kreatif', { language: 'id' })

    const lastEvent = window.dataLayer[window.dataLayer.length - 1]
    expect(lastEvent.event).toBe('page_view')
    expect(lastEvent.page_path).toBe('/services')
    expect(lastEvent.page_title).toBe('Services — Serasa Kreatif')
    expect(lastEvent.language).toBe('id')
  })

  it('trackForm pushes attempt and error without generate_lead', () => {
    trackForm('contact_form', 'attempt', { company: 'PT Test' })

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'contact_form_attempt',
        form_name: 'contact_form',
        submission_status: 'attempt',
        company: 'PT Test',
      })
    )

    trackForm('contact_form', 'error', { error_type: 'bad_request' })
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'contact_form_error',
        form_name: 'contact_form',
        submission_status: 'error',
      })
    )
  })

  it('trackForm on success triggers both form_success and generate_lead conversion', () => {
    trackForm('contact_form', 'success', { company: 'PT Sukses', budget: '25M - 50M' })

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'contact_form_success',
        form_name: 'contact_form',
        submission_status: 'success',
      })
    )

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'generate_lead',
        lead_source: 'contact_form',
        company: 'PT Sukses',
        budget: '25M - 50M',
      })
    )
  })

  it('trackOutboundClick dispatches outbound_click and conversion aliases', () => {
    // WhatsApp click
    trackOutboundClick('whatsapp', 'hero_cta', 'https://wa.me/6281288971453', 'hero')
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'outbound_click',
        click_type: 'whatsapp',
        click_label: 'hero_cta',
        click_location: 'hero',
      })
    )
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'whatsapp_click',
        click_label: 'hero_cta',
        click_location: 'hero',
      })
    )

    // Tel click
    trackOutboundClick('tel', 'footer_phone', 'tel:+6281288971453', 'footer')
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'phone_call_click',
        click_label: 'footer_phone',
      })
    )

    // Email click
    trackOutboundClick('email', 'footer_email', 'mailto:serasakreatif.id@gmail.com', 'footer')
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'email_inquiry_click',
        click_label: 'footer_email',
      })
    )
  })

  it('trackVideo pushes video_interaction with video details', () => {
    trackVideo('Bandar Kardus Reel', 'play', 'showcase')

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'video_interaction',
        video_title: 'Bandar Kardus Reel',
        video_action: 'play',
        video_category: 'showcase',
      })
    )
  })

  it('trackEngagement pushes user_engagement with details', () => {
    trackEngagement('portfolio_filter', { filter_key: 'service', filter_value: 'branding' })

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'user_engagement',
        interaction_type: 'portfolio_filter',
        filter_key: 'service',
        filter_value: 'branding',
      })
    )
  })

  it('trackSearch pushes search event with query and result count', () => {
    trackSearch('social media', 'command_palette', 5)

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'search',
        search_term: 'social media',
        search_context: 'command_palette',
        results_count: 5,
      })
    )
  })

  it('trackLanguageChange pushes language_change event', () => {
    trackLanguageChange('id', 'navbar_desktop')

    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'language_change',
        selected_language: 'id',
        change_source: 'navbar_desktop',
      })
    )
  })
})
