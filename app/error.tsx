'use client'

import Link from 'next/link'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navy top section */}
      <div
        className="flex flex-col items-center justify-center gap-6 px-4 text-center"
        style={{ minHeight: '50vh', backgroundColor: '#1B2F4E' }}
      >
        {/* Warning icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#E8A020"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>

        {/* Error code */}
        <p
          className="font-bold leading-none"
          style={{ fontSize: 'clamp(5rem, 20vw, 9rem)', color: '#E8A020' }}
        >
          500
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Something Went Wrong
        </h1>

        {/* Digest */}
        {error.digest && (
          <p className="font-mono text-xs text-white/50">
            Error ID: {error.digest}
          </p>
        )}
      </div>

      {/* White bottom section */}
      <div
        className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16 text-center"
        style={{ backgroundColor: '#F7F8FA' }}
      >
        <p className="max-w-md text-lg text-gray-600">
          An unexpected error occurred. You can try again or return to the home
          page.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-block rounded-lg px-8 py-3 text-base font-semibold transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer"
            style={{ backgroundColor: '#E8A020', color: '#1B2F4E' }}
          >
            Try Again
          </button>

          <Link
            href="/"
            className="inline-block rounded-lg border-2 px-8 py-3 text-base font-semibold transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{ borderColor: '#1B2F4E', color: '#1B2F4E' }}
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
