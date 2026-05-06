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
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent',
      )}
    >
      <nav className="container max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-semibold tracking-tight">
          W<span className="text-violet-400">.</span>K
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
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:border-white/30 transition-colors font-medium"
          >
            <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
            <span className="text-neutral-600">/</span>
            <span className={lang === 'th' ? 'text-violet-400' : 'text-neutral-500'}>TH</span>
          </button>

          <a
            href="#contact"
            className="text-sm px-4 py-2 rounded-full border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 transition-colors"
          >
            {tr.hire}
          </a>
        </div>
      </nav>
    </header>
  )
}
