'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Service } from '@/lib/services'

const iconMap: Record<string, JSX.Element> = {
  drain: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  ),
  leak: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  ),
  heater: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12h6M9 8h6M9 16h6" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
  emergency: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  pipe: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  bathroom: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#BF4E22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 6 C9 4.3 10.3 3 12 3 C13.7 3 15 4.3 15 6 L15 8 L9 8 Z" />
      <rect x="5" y="8" width="14" height="3" rx="1" />
      <path d="M5 11 L5 19 C5 20.1 5.9 21 7 21 L17 21 C18.1 21 19 20.1 19 19 L19 11" />
    </svg>
  ),
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white dark:bg-dark-surface rounded-xl p-7 border border-gray-100 dark:border-dark-border flex flex-col"
    >
      <div className="mb-5">{iconMap[service.icon]}</div>
      <h3 className="font-bold text-dark-bg dark:text-white text-lg mb-2">{service.name}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">{service.fullDesc}</p>
      <ul className="space-y-2 mb-7 flex-1">
        {service.bullets.map((b) => (
          <li key={b} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-brick flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center w-full bg-brick text-white font-bold py-3 rounded-md hover:bg-brick/90 transition-colors text-sm cursor-pointer"
      >
        Get a Quote
      </Link>
    </motion.div>
  )
}
