/**
 * Centralized Google Tag Manager (GTM) and Google Analytics 4 (GA4) Event Tracking Utility
 * Provides standardized event dispatcher for dataLayer (GTM) and gtag (GA4)
 * with complete type safety, SSR protection, and e-commerce/lead parameters.
 */

/**
 * Dispatches an event to both GTM dataLayer and GA4 (gtag) if available.
 * @param {string} eventName - Name of the custom or standard event
 * @param {Object} params - Event parameters
 */
export const trackEvent = (eventName, params = {}) => {
  if (typeof window === 'undefined') return

  // Ensure dataLayer array is initialized
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: eventName,
    ...params,
  })

  // Direct gtag call if initialized by @next/third-parties or custom tag
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  }
}

/**
 * Tracks a virtual pageview on SPA client-side route transitions
 * @param {string} pagePath - e.g. '/services', '/portfolio'
 * @param {string} pageTitle - Document title
 * @param {Object} extra - Extra parameters such as language, query, etc.
 */
export const trackPageView = (pagePath, pageTitle = '', extra = {}) => {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== 'undefined' ? document.title : ''),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    ...extra,
  })
}

/**
 * Tracks lead form submission attempts, successes, and validation errors
 * @param {string} formName - e.g. 'contact_form', 'printing_contact_form', 'whatsapp_lead_capture'
 * @param {'attempt' | 'success' | 'error'} status - Submission status
 * @param {Object} details - Additional form context (company, budget, category, etc.)
 */
export const trackForm = (formName, status, details = {}) => {
  trackEvent(`${formName}_${status}`, {
    event_category: 'Form',
    form_name: formName,
    submission_status: status,
    ...details,
  })

  // If successfully submitted, trigger standard GA4 'generate_lead' event
  if (status === 'success') {
    trackEvent('generate_lead', {
      event_category: 'Conversions',
      lead_source: formName,
      ...details,
    })
  }
}

/**
 * Tracks outbound clicks to communication channels or external links
 * @param {string} type - 'whatsapp' | 'instagram' | 'tiktok' | 'linkedin' | 'tel' | 'email' | 'maps' | 'review' | 'link'
 * @param {string} label - Context description or link label
 * @param {string} targetUrl - Destination URL
 * @param {string} [location] - Section where the link was clicked (e.g. 'hero', 'footer', 'contact_page')
 */
export const trackOutboundClick = (type, label, targetUrl, location = '') => {
  trackEvent('outbound_click', {
    event_category: 'Outbound',
    click_type: type,
    click_label: label,
    target_url: targetUrl,
    click_location: location,
  })

  // Standard conversion alias for direct communication clicks
  if (type === 'whatsapp') {
    trackEvent('whatsapp_click', {
      event_category: 'Conversions',
      click_label: label,
      target_url: targetUrl,
      click_location: location,
    })
  } else if (type === 'tel') {
    trackEvent('phone_call_click', {
      event_category: 'Conversions',
      click_label: label,
      target_url: targetUrl,
      click_location: location,
    })
  } else if (type === 'email') {
    trackEvent('email_inquiry_click', {
      event_category: 'Conversions',
      click_label: label,
      target_url: targetUrl,
      click_location: location,
    })
  }
}

/**
 * Tracks interactions on video elements, reels, and showcases
 * @param {string} videoTitle - Title or caption of the video
 * @param {'play' | 'pause' | 'view_reel' | 'mute' | 'unmute'} action - Video interaction type
 * @param {string} [category='reels'] - Category of video (e.g. 'reels', 'showcase', 'printing')
 */
export const trackVideo = (videoTitle, action, category = 'reels') => {
  trackEvent('video_interaction', {
    event_category: 'Video',
    video_title: videoTitle,
    video_action: action,
    video_category: category,
  })
}

/**
 * Tracks generic UI engagements, filters, and accordions
 * @param {string} interactionType - e.g. 'portfolio_filter', 'command_palette_search', 'service_accordion'
 * @param {Object} details - Interaction details
 */
export const trackEngagement = (interactionType, details = {}) => {
  trackEvent('user_engagement', {
    event_category: 'Engagement',
    interaction_type: interactionType,
    ...details,
  })
}

/**
 * Tracks search actions (e.g. in command palette or portfolio search)
 * @param {string} searchTerm - Query text
 * @param {string} searchContext - e.g. 'command_palette', 'portfolio_search'
 * @param {number} [resultsCount] - Number of search results
 */
export const trackSearch = (searchTerm, searchContext, resultsCount = null) => {
  trackEvent('search', {
    event_category: 'Search',
    search_term: searchTerm,
    search_context: searchContext,
    ...(resultsCount !== null ? { results_count: resultsCount } : {}),
  })
}

/**
 * Tracks language toggle (e.g. ID -> EN or EN -> ID)
 * @param {'en' | 'id'} newLang - Newly selected language
 * @param {string} source - e.g. 'navbar', 'url_param'
 */
export const trackLanguageChange = (newLang, source = 'navbar') => {
  trackEvent('language_change', {
    event_category: 'Localization',
    selected_language: newLang,
    change_source: source,
  })
}
