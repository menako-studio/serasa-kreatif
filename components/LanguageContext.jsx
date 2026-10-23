'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { getDictionary } from '@/lib/language'

const LanguageContext = createContext(null)

// Indonesian is the default (and the only language crawlers ever see): the server HTML and the
// first client render are always 'id', so there is no hydration mismatch and Googlebot indexes the
// Indonesian copy that matches the site's titles, descriptions and keyword targets.
// English is an explicit, user-chosen preference (?lang=en, localStorage or cookie). We deliberately
// do NOT auto-detect navigator.language: Googlebot reports en-US and would otherwise render (and
// index) the English version after hydration.
const DEFAULT_LANGUAGE = 'id'

export function LanguageProvider({ children }) {
  const pathname = usePathname()
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE)
  const [isLoaded, setIsLoaded] = useState(false)

  // Get current active dictionary
  const dict = getDictionary(language)

  useEffect(() => {
    // NOTE: read window.location instead of useSearchParams(). useSearchParams() in a layout-level
    // client component forces every statically prerendered page into client-side rendering
    // (empty HTML for crawlers) or makes the page fully dynamic.
    const langParam = new URLSearchParams(window.location.search).get('lang')
    let resolved = DEFAULT_LANGUAGE

    try {
      if (langParam === 'id' || langParam === 'en') {
        resolved = langParam
        localStorage.setItem('lang', langParam)
        document.cookie = `lang=${langParam}; path=/; max-age=31536000; SameSite=Lax`
      } else {
        const savedLang = localStorage.getItem('lang')
        if (savedLang === 'id' || savedLang === 'en') {
          resolved = savedLang
        } else {
          const match = document.cookie.match(/(^| )lang=([^;]+)/)
          if (match && (match[2] === 'id' || match[2] === 'en')) resolved = match[2]
        }
      }
    } catch {
      // Storage can be blocked (private mode / in-app browsers) — keep the default.
    }

    setLanguageState(resolved)
    setIsLoaded(true)
  }, [pathname])

  // Keep <html lang> in sync for screen readers and browser translation prompts.
  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const setLanguage = (newLang) => {
    if (newLang !== 'en' && newLang !== 'id') return

    setLanguageState(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {
      // ignore blocked storage
    }
    document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`

    // Reflect the choice in the URL (shareable deep link) without a navigation or re-render.
    const params = new URLSearchParams(window.location.search)
    if (newLang === 'en') {
      params.set('lang', 'en')
    } else {
      params.delete('lang')
    }
    const queryString = params.toString()
    window.history.replaceState(
      window.history.state,
      '',
      `${window.location.pathname}${queryString ? `?${queryString}` : ''}${window.location.hash}`
    )
  }

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, dict, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

/**
 * Language switch for statically rendered server pages.
 * Both variants are passed from the server component; the HTML contains only the active one
 * (Indonesian by default), and English swaps in on the client when the visitor has chosen it.
 *
 *   <Lang id="Tentang Kami" en="About Us" />
 */
export function Lang({ id, en }) {
  const { language } = useLanguage()
  return language === 'en' ? en : id
}
