'use client'

import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

export function Footer() {
  const { lang } = useLang()
  const tr = t[lang].footer

  return (
    <footer className="bg-neutral-950 border-t border-white/5 py-8">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Wachiranan Khanngern. {tr.rights}
        </span>
        <span className="text-neutral-600 text-xs">{tr.built}</span>
      </div>
    </footer>
  )
}
