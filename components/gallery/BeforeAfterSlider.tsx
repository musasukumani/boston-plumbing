'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'

interface SliderProps {
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
  title: string
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt, afterAlt, title }: SliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(Math.max(pct, 2), 98))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    dragging.current = true
    updatePosition(e.clientX)
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX)
  }
  const onMouseUp = () => { dragging.current = false }

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX)
  }

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPosition(prev => Math.max(2, prev - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPosition(prev => Math.min(98, prev + 5))
    }
  }

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <div className="p-4 bg-white border-b border-gray-100">
        <h4 className="font-bold text-navy text-sm">{title}</h4>
      </div>
      <div
        ref={containerRef}
        className="relative select-none cursor-col-resize focus:outline-none focus:ring-2 focus:ring-[#E8A020] focus:ring-offset-2"
        style={{ height: 300 }}
        tabIndex={0}
        role="slider"
        aria-label="Before and after comparison slider. Use arrow keys to compare."
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(position)}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
        onKeyDown={onKeyDown}
      >
        {/* After (full width, bottom layer) */}
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />

        {/* Before (clipped via clip-path — no conflicting width style) */}
        <div className="absolute inset-0">
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Divider */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-xl"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-navy">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 3l-5 9 5 9M16 3l5 9-5 9" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-emergency text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
        <div className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
      </div>
    </div>
  )
}
