/**
 * Centralized Google Tag Manager and Google Analytics Event Tracking Utility
 * Standardizes event names and parameters to ensure best-practice analytics.
 */

export const trackEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    })
  }
}

/**
 * Tracks lead form submission attempts and successes
 * @param {string} formName
 * @param {'attempt' | 'success' | 'error'} status
 * @param {Object} details
 */
export const trackForm = (formName, status, details = {}) => {
  trackEvent(`${formName}_${status}`, {
    form_name: formName,
    submission_status: status,
    ...details,
  })
}

/**
 * Tracks outbound click activities to communications or external socials
 * @param {string} type - e.g. 'whatsapp', 'instagram', 'linkedin', 'tel', 'email'
 * @param {string} label - Context description or link label
 * @param {string} targetUrl - Destination URL
 */
export const trackOutboundClick = (type, label, targetUrl) => {
  trackEvent('outbound_click', {
    click_type: type,
    click_label: label,
    target_url: targetUrl,
  })
}

/**
 * Tracks interactions on video elements/reels
 * @param {string} videoTitle
 * @param {'play' | 'pause' | 'mute' | 'unmute'} action
 * @param {string} category - e.g. 'reels', 'showcase'
 */
export const trackVideo = (videoTitle, action, category = 'reels') => {
  trackEvent('video_interaction', {
    video_title: videoTitle,
    video_action: action,
    video_category: category,
  })
}

/**
 * Tracks generic UI engagements
 * @param {string} interactionType - e.g. 'portfolio_filter', 'command_palette_search', 'service_accordion'
 * @param {Object} details
 */
export const trackEngagement = (interactionType, details = {}) => {
  trackEvent('user_engagement', {
    interaction_type: interactionType,
    ...details,
  })
}
