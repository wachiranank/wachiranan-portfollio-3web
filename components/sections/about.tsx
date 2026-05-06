'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

const icons = [Code2, Palette, Zap]

export function About() {
  const { lang } = useLang()
  const tr = t[lang].about

  return (
    <section id="about" className="py-28" style={{ backgroundColor: '#1E2761' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#02C39A' }}>
              {tr.label}
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              {tr.heading}{' '}
              <span style={{ color: '#02C39A' }}>{tr.heading_accent}</span>
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">{tr.bio1}</p>
            <p className="text-neutral-300 leading-relaxed">{tr.bio2}</p>
          </div>

          <div className="grid gap-6">
            {tr.traits.map((trait, i) => {
              const Icon = icons[i]
              return (
                <motion.div
                  key={trait.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
                  style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(2,195,154,0.15)' }}
                  >
                    <Icon size={18} style={{ color: '#02C39A' }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{trait.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{trait.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
