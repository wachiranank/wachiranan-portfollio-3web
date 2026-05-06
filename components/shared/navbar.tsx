'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

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
        <a
          href="#contact"
          className="text-sm px-4 py-2 rounded-full border border-violet-500/50 text-violet-300 hover:bg-violet-500/10 transition-colors"
        >
          Hire me
        </a>
      </nav>
    </header>
  )
}
