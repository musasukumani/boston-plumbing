'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'gold' | 'navy' | 'brick' | 'dark-bg' | 'outline-white' | 'outline-navy'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'brick',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-bold rounded-md px-6 py-3 text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    gold: 'bg-brick text-white hover:bg-brick/90 focus:ring-brick',
    navy: 'bg-dark-bg text-white hover:bg-dark-bg/90 focus:ring-dark-bg',
    brick: 'bg-brick text-white hover:bg-brick/90 focus:ring-brick',
    ink: 'bg-dark-bg text-white hover:bg-dark-bg/90 focus:ring-dark-bg',
    'outline-white': 'border-2 border-white/60 text-white hover:border-white hover:bg-white/10 focus:ring-white',
    'outline-navy': 'border-2 border-dark-bg text-dark-bg hover:bg-dark-bg hover:text-white focus:ring-dark-bg',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.97 },
    transition: { duration: 0.15 },
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      {...motionProps}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  )
}
