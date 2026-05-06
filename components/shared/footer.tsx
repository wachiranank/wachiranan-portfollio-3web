'use client'

import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

export function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <footer className="border-t border-white/5 py-8" style={{ backgroundColor: '#080E2D' }}>
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Wachiranan Khanngern. {tr.rights}
        </span>
        <span className="text-xs" style={{ color: '#02C39A', opacity: 0.6 }}>{tr.built}</span>
      </div>
    </footer>
  )
}
