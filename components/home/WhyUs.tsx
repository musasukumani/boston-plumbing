'use client'

import { motion } from 'framer-motion'

function PriceTagIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

const reasons = [
  {
    num: '01',
    icon: <PriceTagIcon />,
    title: 'Upfront Pricing',
    desc: 'Full quote before we touch anything. Zero surprises on your bill.',
  },
  {
    num: '02',
    icon: <CalendarIcon />,
    title: 'Same-Day Service',
    desc: 'Most jobs booked and completed the same day you call.',
  },
  {
    num: '03',
    icon: <ShieldIcon />,
    title: '1-Year Guarantee',
    desc: 'All work backed by our 12-month labor warranty, no fine print.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-brick font-semibold text-xs tracking-[0.18em] uppercase mb-4"
          >
            Why Boston Plumbing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-display text-dark-bg dark:text-white mb-14"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
          >
            Built on three promises.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-12">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="pt-8 border-t border-dark-bg/10 dark:border-white/10"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-brick mt-0.5">{r.icon}</span>
                  <span className="font-display text-dark-bg/20 dark:text-white/20 text-3xl leading-none">{r.num}</span>
                </div>
                <h3 className="font-bold text-dark-bg dark:text-white text-lg mb-2">{r.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
