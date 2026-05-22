'use client'

import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2
        className={`font-display font-normal mb-4 ${light ? 'text-white' : 'text-dark-bg dark:text-white'}`}
        style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', lineHeight: 1.1 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-gray-300' : 'text-gray-600 dark:text-gray-400'}`}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-0.5 w-12 bg-brick ${centered ? 'mx-auto' : ''}`}
      />
    </motion.div>
  )
}
