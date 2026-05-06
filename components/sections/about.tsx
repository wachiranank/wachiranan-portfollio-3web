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
    <section id="about" className="bg-neutral-950 py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              {tr.label}
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              {tr.heading}{' '}
              <span className="text-violet-400">{tr.heading_accent}</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">{tr.bio1}</p>
            <p className="text-neutral-400 leading-relaxed">{tr.bio2}</p>
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
                  className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{trait.title}</h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{trait.description}</p>
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
