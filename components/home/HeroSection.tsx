'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section className="flex overflow-hidden" style={{ minHeight: '100vh' }}>

      {/* Left: text panel */}
      <div
        className="relative z-10 flex flex-col justify-center w-full lg:w-1/2 px-8 sm:px-14 lg:px-20 py-32"
        style={{ backgroundColor: '#1C1410' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/50 text-xs font-semibold tracking-[0.2em] uppercase mb-8"
        >
          Licensed &amp; Insured — Boston, MA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-white mb-8"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)', lineHeight: 1.0 }}
        >
          When a pipe<br />
          <em>can&apos;t wait.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42 }}
          className="text-white/70 mb-10"
          style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', maxWidth: '38ch', lineHeight: 1.75 }}
        >
          Same-day service across Boston. Upfront quotes, no surprises. Real plumbers available any hour.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.56 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:6175550192"
            className="inline-flex items-center justify-center gap-3 bg-brick text-white font-bold text-base px-8 py-4 rounded-md hover:bg-brick/90 transition-colors cursor-pointer"
          >
            <PhoneIcon />
            (617) 555-0192
          </a>
          <Link
            href="/services"
            className="inline-flex items-center justify-center border-2 border-white/50 text-white font-semibold text-base px-8 py-4 rounded-md hover:border-white hover:bg-white/10 transition-colors"
          >
            Our Services
          </Link>
        </motion.div>

        {/* scroll indicator — anchored to bottom of text panel on desktop */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          className="hidden lg:flex absolute bottom-8 left-20 text-white/35"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>

      {/* Right: image panel */}
      <div className="hidden lg:block relative w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=85"
          alt="Professional plumber at work"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: '35% center' }}
          sizes="50vw"
        />
      </div>

    </section>
  )
}
