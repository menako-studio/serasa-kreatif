'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { caseStudies } from '@/lib/case-data'

// Static page definitions
const PAGES = [
  { title: 'Home', url: '/', category: 'Page' },
  { title: 'Portfolio & Case Studies', url: '/portfolio', category: 'Page' },
  { title: 'Services', url: '/services', category: 'Page' },
  { title: 'About Us', url: '/about', category: 'Page' },
  { title: 'Contact Us', url: '/contact', category: 'Page' },
]

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const router = useRouter()
  const inputRef = useRef(null)
  const listRef = useRef(null)

  // Combined search items
  const searchItems = [
    ...PAGES,
    ...caseStudies.map((study) => ({
      title: `${study.client} - ${study.title}`,
      url: `/portfolio/${study.slug}`,
      category: 'Portfolio / Project',
    })),
  ]

  // Filter items based on query
  const filteredItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  )

  // Listen to Cmd+K / Ctrl+K and custom 'open-search' event
  useEffect(() => {
    function handleKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    function handleOpenSearch() {
      setIsOpen(true)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('open-search', handleOpenSearch)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('open-search', handleOpenSearch)
    }
  }, [])

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      setSelectedIndex(0)
      setQuery('')
      document.body.style.overflow = 'hidden' // Prevent page scroll
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Keyboard navigation inside list
  function handleKeyDown(e) {
    if (!isOpen) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (filteredItems[selectedIndex]) {
        navigate(filteredItems[selectedIndex].url)
      }
    }
  }

  function navigate(url) {
    router.push(url)
    setIsOpen(false)
  }

  // Handle clicking outside the modal
  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) {
      setIsOpen(false)
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-24 z-40 hidden items-center gap-2 rounded-full border border-gray-300 bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-gray-50 md:flex"
        aria-label="Open global search"
      >
        <svg
          className="h-4 w-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Search</span>
        <kbd className="inline-flex h-5 select-none items-center gap-0.5 rounded border border-gray-200 bg-gray-100 px-1.5 font-sans text-[10px] font-medium text-gray-400">
          <span>⌘</span>K
        </kbd>
      </button>
    )
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-[15vh] backdrop-blur-sm transition-opacity duration-200"
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-gray-800 bg-primary/95 text-white shadow-2xl shadow-black/50 backdrop-blur-md transition-all duration-300"
        role="dialog"
        aria-modal="true"
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-gray-800 px-4 py-3">
          <svg
            className="mr-3 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type to search... (e.g. 'Branding', 'Estimator')"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setSelectedIndex(0)
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent py-2 text-base text-white placeholder-gray-500 focus:outline-none"
          />
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md border border-gray-800 bg-gray-900/50 px-2 py-1 text-xs text-gray-400 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div ref={listRef} className="max-h-[350px] overflow-y-auto p-2">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-gray-400">
              No results for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const isSelected = idx === selectedIndex
                return (
                  <button
                    key={item.url}
                    onClick={() => navigate(item.url)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                      isSelected ? 'bg-brand-teal text-white' : 'text-gray-300 hover:bg-gray-800/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    <span
                      className={`rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-gray-800 text-gray-400'
                      }`}
                    >
                      {item.category}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="flex justify-between border-t border-gray-800 px-4 py-3 text-xs text-gray-500">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-gray-800 bg-gray-900 px-1.5 font-sans">↑↓</kbd>{' '}
              navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-gray-800 bg-gray-900 px-1.5 font-sans">
                Enter
              </kbd>{' '}
              open
            </span>
          </div>
          <span>Serasa Kreatif Search Palette</span>
        </div>
      </div>
    </div>
  )
}
