'use client'

import { motion } from 'framer-motion'

const categories = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    label: 'UI & Design',
    skills: ['Figma', 'shadcn/ui', 'Radix UI', 'GSAP', 'Spline'],
  },
  {
    label: 'Tooling',
    skills: ['Bun', 'Vite', 'ESLint', 'Prettier', 'Vercel'],
  },
  {
    label: 'Backend basics',
    skills: ['Node.js', 'REST APIs', 'Prisma', 'PostgreSQL', 'Supabase'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-neutral-950 py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl font-bold text-white">Skills & tools</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-5">
                {cat.label}
              </p>
              <ul className="space-y-2.5">
                {cat.skills.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-neutral-300 text-sm">
                    <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
