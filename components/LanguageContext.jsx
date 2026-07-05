'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { getDictionary } from '@/lib/language'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [language, setLanguageState] = useState('en')
  const [isLoaded, setIsLoaded] = useState(false)

  // Get current active dictionary
  const dict = getDictionary(language)

  useEffect(() => {
    // 1. Check URL search param first (most authoritative for SEO/direct links)
    const langParam = searchParams.get('lang')
    if (langParam === 'id' || langParam === 'en') {
      setLanguageState(langParam)
      // Save to localStorage and cookie
      localStorage.setItem('lang', langParam)
      document.cookie = `lang=${langParam}; path=/; max-age=31536000; SameSite=Lax`
      setIsLoaded(true)
      return
    }

    // 2. Check localStorage
    const savedLang = localStorage.getItem('lang')
    if (savedLang === 'id' || savedLang === 'en') {
      setLanguageState(savedLang)
      setIsLoaded(true)
      return
    }

    // 3. Check cookie
    const match = document.cookie.match(/(^| )lang=([^;]+)/)
    if (match && (match[2] === 'id' || match[2] === 'en')) {
      setLanguageState(match[2])
      setIsLoaded(true)
      return
    }

    // 4. Check browser language
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = window.navigator.language || window.navigator.userLanguage
      if (browserLang.startsWith('id')) {
        setLanguageState('id')
      }
    }
    setIsLoaded(true)
  }, [searchParams])

  const setLanguage = (newLang) => {
    if (newLang !== 'en' && newLang !== 'id') return

    setLanguageState(newLang)
    localStorage.setItem('lang', newLang)
    document.cookie = `lang=${newLang}; path=/; max-age=31536000; SameSite=Lax`

    // Update query parameter dynamically to allow search engine crawlability and deep linking
    const params = new URLSearchParams(window.location.search)
    if (newLang === 'id') {
      params.set('lang', 'id')
    } else {
      params.delete('lang')
    }

    const queryString = params.toString()
    const newUrl = `${pathname}${queryString ? `?${queryString}` : ''}`

    router.push(newUrl, { scroll: false })
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
