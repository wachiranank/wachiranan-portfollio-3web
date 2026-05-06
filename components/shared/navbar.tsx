'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang } = useLang()
  const tr = t[lang].nav

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: tr.about, href: '#about' },
    { label: tr.work, href: '#work' },
    { label: tr.skills, href: '#skills' },
    { label: tr.contact, href: '#contact' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'backdrop-blur-md border-b border-white/5' : 'bg-transparent',
      )}
      style={scrolled ? { backgroundColor: 'rgba(8,14,45,0.85)' } : {}}
    >
      <nav className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-semibold tracking-tight text-lg">
          W<span style={{ color: '#02C39A' }}>.</span>K
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors font-medium"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
            <span className="text-neutral-600">/</span>
            <span style={lang === 'th' ? { color: '#02C39A' } : { color: '#6b7280' }}>TH</span>
          </button>

          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full border text-white hover:opacity-80 transition-opacity font-medium"
            style={{ borderColor: '#02C39A', color: '#02C39A' }}
          >
            {tr.hire}
          </a>
        </div>
      </nav>
    </header>
  )
}
