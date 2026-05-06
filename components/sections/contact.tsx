'use client'

import { motion } from 'framer-motion'
import { Mail, GitBranch, Link, X } from 'lucide-react'

const socials = [
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com' },
  { icon: Link, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: X, label: 'Twitter / X', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', href: 'mailto:wachiranan.khanngern@gmail.com' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-black py-28">
      <div className="container max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl font-bold text-white mb-6">
            Let&apos;s work together
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-10">
            I&apos;m currently open to new opportunities. Whether you have a project in mind or just
            want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:wachiranan.khanngern@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium transition-colors text-lg mb-12"
          >
            <Mail size={18} />
            Say hello
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
