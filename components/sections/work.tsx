'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

const tags = [
  ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
  ['React', 'Recharts', 'shadcn/ui', 'Zustand'],
  ['Next.js', 'MDX', 'Framer Motion', 'Vercel'],
  ['Next.js', 'Spline', 'Framer Motion', 'GSAP'],
]

const cards = [
  { accent: '#02C39A', gradient: 'rgba(2,195,154,0.08), rgba(30,39,97,0.4)' },
  { accent: '#CC785C', gradient: 'rgba(204,120,92,0.08), rgba(30,39,97,0.4)' },
  { accent: '#02C39A', gradient: 'rgba(2,195,154,0.08), rgba(8,14,45,0.6)' },
  { accent: '#CC785C', gradient: 'rgba(204,120,92,0.08), rgba(8,14,45,0.6)' },
]

export function Work() {
  const { lang } = useLang()
  const tr = t[lang].work

  return (
    <section id="work" className="py-28" style={{ backgroundColor: '#0D1440' }}>
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: '#CC785C' }}>
            {tr.label}
          </p>
          <h2 className="text-4xl font-bold text-white">{tr.heading}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {tr.projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group p-7 rounded-3xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
              style={{ background: `linear-gradient(135deg, ${cards[i].gradient})` }}
            >
              <div className="w-2 h-2 rounded-full mb-5" style={{ backgroundColor: cards[i].accent }} />
              <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags[i].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-white/10 text-neutral-400"
                    style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors">
                  <GitBranch size={14} /> {tr.source}
                </button>
                <button className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors">
                  <ExternalLink size={14} /> {tr.live}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
