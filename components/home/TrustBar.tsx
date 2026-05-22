'use client'

import { motion } from 'framer-motion'

function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function BadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

const items = [
  {
    icon: <ShieldCheckIcon />,
    label: '25+ Years',
    sub: 'Serving Boston since 2001',
  },
  {
    icon: <StarIcon />,
    label: '500+ Reviews',
    sub: 'Google & Yelp verified',
  },
  {
    icon: <BadgeIcon />,
    label: 'MA Licensed',
    sub: 'License #BP-MA-00421',
  },
  {
    icon: <ClockIcon />,
    label: '24/7 Emergency',
    sub: 'Real plumbers, any hour',
  },
]

export default function TrustBar() {
  return (
    <section className="bg-white dark:bg-dark-surface border-b border-gray-100 dark:border-dark-border py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-100 dark:divide-dark-border">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center md:items-start md:text-left gap-1.5 md:px-8"
            >
              <span className="text-brick mb-1">{item.icon}</span>
              <span className="font-bold text-dark-bg dark:text-white text-base leading-tight">{item.label}</span>
              <span className="text-gray-400 dark:text-gray-500 text-xs leading-snug">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
