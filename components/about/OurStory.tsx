'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-extrabold text-navy mb-6"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Boston-Born.<br />Boston-Proud.
            </h2>
            <div className="w-16 h-1 bg-gold rounded-full mb-8" />
            <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.0625rem)' }}>
              <p>
                Founded in 2001 by master plumber Kevin Donovan, a Dorchester native with 30 years of hands-on experience. Kevin started with one truck, a toolbox, and a simple promise: honest work at a fair price.
              </p>
              <p>
                What started as a one-truck operation has grown into a 12-person team serving all 23 Boston neighborhoods. We&apos;ve handled everything from century-old brownstone pipes to brand-new luxury condo builds.
              </p>
              <p>
                We&apos;re not a franchise. Every job is handled by our own licensed, background-checked technicians — not subcontractors. When you call Boston Plumbing, you get Boston Plumbing.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=85"
              alt="Boston Plumbing plumber in worksuit holding tools"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">K</div>
                <div>
                  <div className="text-white font-bold text-sm">Kevin Donovan</div>
                  <div className="text-gold text-xs">Founder & Master Plumber</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
