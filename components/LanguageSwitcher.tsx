'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentLocale = pathname.split('/')[1] || 'en'

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function changeLocale(newLocale: string) {
    if (newLocale === currentLocale) return
    const segments = pathname.split('/')
    if (locales.some(l => l.code === segments[1])) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }
    const newPath = segments.join('/') + (searchParams ? `?${searchParams.toString()}` : '')
    router.push(newPath)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left w-16" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-sm px-2 py-1 border border-gray-300 rounded"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {locales.find(l => l.code === currentLocale)?.label || 'Lang'}
        <span className="ml-1">▼</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-full bg-white border border-gray-300 rounded shadow-md z-10">
          {locales.map(({ code, label }) => (
            <button
              key={code}
              onClick={() => changeLocale(code)}
              className={`block w-full text-left px-2 py-1 text-xs ${
                code === currentLocale ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
