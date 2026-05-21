'use client'

import { useState } from 'react'

function AlertIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      className="relative z-50 flex items-center justify-center gap-2.5 px-4 py-2 text-white text-sm font-medium"
      style={{ backgroundColor: '#D94F3D' }}
    >
      <a
        href="tel:6175550192"
        className="flex items-center gap-2 hover:underline"
        aria-label="Call emergency plumbing line"
      >
        <AlertIcon />
        <span>24/7 Emergency Plumbing — Call (617) 555-0192</span>
      </a>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1 cursor-pointer"
        aria-label="Dismiss emergency banner"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  )
}
