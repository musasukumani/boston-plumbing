'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const neighborhoods = [
  'Back Bay', 'Beacon Hill', 'South Boston', 'Charlestown', 'Dorchester',
  'Roxbury', 'Jamaica Plain', 'Allston', 'Brighton', 'East Boston',
  'North End', 'South End', 'Fenway', 'Hyde Park', 'Roslindale',
]

export default function ServiceAreas() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading title="Serving All of Boston" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {neighborhoods.map((n) => (
            <span
              key={n}
              className="bg-navy text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              {n}
            </span>
          ))}
        </motion.div>
        <p className="text-gray-500 text-sm">
          Not sure if we cover your area?{' '}
          <a href="tel:6175550192" className="text-gold font-semibold hover:underline">
            Call us
          </a>{' '}
          — we probably do.
        </p>
      </div>
    </section>
  )
}
