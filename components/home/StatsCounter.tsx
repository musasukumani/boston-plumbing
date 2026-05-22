'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface Stat {
  value: number
  suffix: string
  prefix?: string
  label: string
}

const stats: Stat[] = [
  { value: 4200, suffix: '+', label: 'Jobs Completed' },
  { value: 25, suffix: '+', label: 'Years in Boston' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 60, suffix: ' min', prefix: '<', label: 'Avg Response Time' },
]

function Counter({ value, suffix, prefix = '' }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="font-display text-dark-bg dark:text-white" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.25rem)', lineHeight: 1 }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="py-20 bg-cream dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <span className="text-dark-bg/40 dark:text-white/40 font-medium text-xs uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
