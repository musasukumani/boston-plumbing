'use client'

import { motion } from 'framer-motion'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const credentials = [
  { text: 'MA Licensed Master Plumber (#BP-MA-00421)' },
  { text: 'Fully Insured & Bonded' },
  { text: 'Google 4.9 — 500+ reviews' },
  { text: 'BBB Accredited Business' },
  { text: 'EPA WaterSense Partner' },
]

export default function CredentialsBar() {
  return (
    <section className="py-12 bg-white dark:bg-dark-surface border-y border-gray-100 dark:border-dark-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2.5 bg-cream dark:bg-dark-surface border border-gray-200 dark:border-dark-border rounded-full px-5 py-2"
            >
              <CheckIcon />
              <span className="text-ink dark:text-gray-300 font-medium text-sm">{cred.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
