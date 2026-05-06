'use client'

import { motion } from 'framer-motion'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { ArrowDown } from 'lucide-react'
import { useLang } from '@/lib/language-context'
import { t } from '@/lib/i18n'

export function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="violet" />

      <div className="container max-w-6xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            {tr.role}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            {tr.greeting}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-pink-400">
              {tr.name}
            </span>
          </h1>
          <p className="mt-6 text-neutral-400 text-lg leading-relaxed max-w-lg">
            {tr.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors"
            >
              {tr.cta_work}
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 font-medium transition-colors"
            >
              {tr.cta_contact}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[420px] md:h-[520px]"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-500 hover:text-white transition-colors flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest uppercase">{tr.scroll}</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
