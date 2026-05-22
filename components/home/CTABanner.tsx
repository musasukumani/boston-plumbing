'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export default function CTABanner() {
  return (
    <section className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="font-display font-normal text-dark-bg dark:text-white mb-4"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3rem)', lineHeight: 1.1 }}
          >
            Plumbing problem?<br />
            <em>We&apos;re on our way.</em>
          </h2>
          <p className="text-dark-bg/50 dark:text-white/50 mb-10" style={{ fontSize: '1.05rem' }}>
            Same-day appointments available. Call or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6175550192"
              className="inline-flex items-center justify-center gap-3 bg-brick text-white font-bold text-base px-8 py-4 rounded-md hover:bg-brick/90 transition-colors cursor-pointer"
            >
              <PhoneIcon />
              Call (617) 555-0192
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-dark-bg/30 text-dark-bg dark:border-white/30 dark:text-white font-semibold text-base px-8 py-4 rounded-md hover:border-dark-bg/60 dark:hover:border-white/60 hover:bg-dark-bg/5 dark:hover:bg-white/10 transition-colors"
            >
              Book Online
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
