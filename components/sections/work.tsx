'use client'

import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured storefront with product filters, cart, and checkout — built for speed and conversion.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    gradient: 'from-violet-600/20 to-pink-600/20',
    accent: 'bg-violet-500',
  },
  {
    title: 'SaaS Dashboard',
    description:
      'Analytics-heavy admin panel with real-time charts, data tables, and role-based access.',
    tags: ['React', 'Recharts', 'shadcn/ui', 'Zustand'],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    accent: 'bg-blue-500',
  },
  {
    title: 'Portfolio & Blog',
    description:
      'Content-first personal site with MDX blog, dark mode, and optimized Core Web Vitals.',
    tags: ['Next.js', 'MDX', 'Framer Motion', 'Vercel'],
    gradient: 'from-emerald-600/20 to-teal-600/20',
    accent: 'bg-emerald-500',
  },
  {
    title: '3D Product Showcase',
    description:
      'Interactive 3D product viewer with Spline integration and animated feature highlights.',
    tags: ['Next.js', 'Spline', 'Framer Motion', 'GSAP'],
    gradient: 'from-orange-600/20 to-yellow-600/20',
    accent: 'bg-orange-500',
  },
]

export function Work() {
  return (
    <section id="work" className="bg-black py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Featured work
          </p>
          <h2 className="text-4xl font-bold text-white">
            Projects I&apos;ve built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative group p-7 rounded-3xl border border-white/5 bg-gradient-to-br ${p.gradient} overflow-hidden hover:border-white/10 transition-colors`}
            >
              <div className={`w-2 h-2 rounded-full ${p.accent} mb-5`} />
              <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-5">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors">
                  <GitBranch size={14} /> Source
                </button>
                <button className="flex items-center gap-1.5 text-sm text-neutral-300 hover:text-white transition-colors">
                  <ExternalLink size={14} /> Live
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
