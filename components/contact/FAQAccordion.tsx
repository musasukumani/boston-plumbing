'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: 'Do you offer free estimates?',
    a: 'Yes, all quotes are completely free with no obligation. We assess the job, give you a full written quote, and only proceed with your approval.',
  },
  {
    q: 'How quickly can you come out?',
    a: 'Same-day service for most calls. Emergency calls are responded to within 60 minutes, 24 hours a day, 7 days a week.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. MA Master Plumber License #BP-MA-00421. We carry full general liability insurance and are bonded for your protection.',
  },
  {
    q: 'Do you charge extra for evenings or weekends?',
    a: 'Weekend rates apply Saturday and Sunday. We always disclose any surcharges upfront before starting work — no hidden fees, ever.',
  },
  {
    q: 'What areas do you serve?',
    a: 'All Boston neighborhoods and surrounding suburbs including Brookline, Cambridge, Somerville, Quincy, and more.',
  },
  {
    q: 'Do you guarantee your work?',
    a: 'Absolutely. All completed work is backed by our 1-year labor warranty. If anything we fixed fails within a year, we come back and fix it at no charge.',
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <SectionHeading title="Common Questions" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 dark:border-dark-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-navy dark:text-white text-sm pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-navy text-white flex items-center justify-center text-lg font-light"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-gray-100 dark:border-dark-border">
                      <p className="pt-4">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
