'use client'

import Link from 'next/link'

export default function StickyContactBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-slate-200/70 dark:bg-slate-950/95 dark:border-slate-700/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Need a plumber now?</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">Same-day Boston service, 24/7 dispatch.</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="tel:6175550192"
            className="inline-flex items-center justify-center rounded-full bg-brick px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brick/20 hover:bg-brick/95 transition-colors"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
          >
            Free Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
