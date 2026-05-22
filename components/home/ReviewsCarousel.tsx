'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import { reviews } from '@/lib/reviews'

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#BF4E22" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % reviews.length)
      }, 4000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const visible = [
    reviews[current % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ]

  return (
    <section className="py-20 bg-white dark:bg-dark-surface">
      <div
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <SectionHeading title="What customers say" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-cream dark:bg-[#162436] rounded-lg p-6 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-1">&ldquo;{review.quote}&rdquo;</p>
              <div className="flex items-center justify-between pt-3 border-t border-dark-bg/8 dark:border-dark-border">
                <div>
                  <span className="font-bold text-dark-bg dark:text-white text-sm">{review.author}</span>
                  <span className="text-gray-400 text-xs ml-1">â€” {review.neighborhood}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400">
                  <GoogleIcon />
                  <span>Google</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current ? 'bg-brick w-6' : 'bg-gray-200 hover:bg-gray-300 w-1.5'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-border hover:border-brick hover:text-brick transition-colors cursor-pointer"
            aria-label="Previous review"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => setCurrent((c) => (c + 1) % reviews.length)}
            className="p-2 rounded-full border border-gray-200 dark:border-dark-border hover:border-brick hover:text-brick transition-colors cursor-pointer"
            aria-label="Next review"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
