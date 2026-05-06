'use client'

import { motion } from 'framer-motion'
import { Code2, Palette, Zap } from 'lucide-react'

const traits = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured code that scales with your product.',
  },
  {
    icon: Palette,
    title: 'Design Sense',
    description: 'Translating designs into pixel-perfect, accessible interfaces.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized builds, fast load times, and smooth interactions.',
  },
]

export function About() {
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
              About me
            </p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Passionate about building{' '}
              <span className="text-violet-400">great things</span>
            </h2>
            <p className="text-neutral-400 leading-relaxed mb-4">
              I&apos;m Wachiranan Khanngern, a frontend developer based in Thailand with a passion
              for creating beautiful, functional web experiences. I specialize in React and Next.js,
              with a strong eye for UI/UX design.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              When I&apos;m not coding, I&apos;m exploring new design trends, contributing to
              open-source, and finding ways to make the web a more visually compelling place.
            </p>
          </div>

          <div className="grid gap-6">
            {traits.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center">
                  <t.icon size={18} className="text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{t.title}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{t.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
