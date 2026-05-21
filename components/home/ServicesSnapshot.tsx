'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '@/lib/services'

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function ServicesSnapshot() {
  return (
    <section className="py-20 bg-cream dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-brick font-semibold text-xs tracking-[0.18em] uppercase mb-4"
          >
            What We Fix
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-ink dark:text-white mb-12"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
          >
            Every plumbing job,<br /><em>handled right.</em>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <Link href="/services" className="flex items-start gap-5 py-5 border-b border-ink/10 dark:border-white/10 group cursor-pointer">
                  <span className="font-display text-ink/20 dark:text-white/20 text-lg shrink-0 w-7 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-ink dark:text-white text-base group-hover:text-brick dark:group-hover:text-brick transition-colors leading-snug">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-0.5 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>
                  <span className="text-brick opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5">
                    <ArrowIcon />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-10"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-ink dark:text-white font-semibold text-sm hover:text-brick dark:hover:text-brick transition-colors group"
            >
              View all services
              <span className="group-hover:translate-x-1 transition-transform">
                <ArrowIcon />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
