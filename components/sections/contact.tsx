'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, Link, X } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

const socials = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com' },
  { icon: Link, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: X, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:wachiranan.khanngern@gmail.com' },
]

export function Contact() {
  const { lang } = useLang()
  const tr = t[lang].contact

  return (
    <section id="contact" className="py-28" style={{ backgroundColor: '#0D1440' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#CC785C' }}>
            {tr.label}
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">{tr.heading}</h2>
          <p className="text-neutral-400 leading-relaxed mb-10">{tr.description}</p>

          <a
            href="mailto:wachiranan.khanngern@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-lg mb-12 hover:opacity-80 transition-opacity"
            style={{ backgroundColor: '#02C39A', color: '#080E2D' }}
          >
            <Mail size={18} />
            {tr.cta}
          </a>

          <div className="flex justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors"
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
