import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navy top section */}
      <div
        className="flex flex-col items-center justify-center gap-6 px-4 text-center"
        style={{ minHeight: '50vh', backgroundColor: '#1B2F4E' }}
      >
        {/* Wrench icon */}
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
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>

        {/* 404 */}
        <p
          className="font-bold leading-none"
          style={{ fontSize: 'clamp(5rem, 20vw, 9rem)', color: '#E8A020' }}
        >
          404
        </p>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Page Not Found
        </h1>
      </div>

      {/* White bottom section */}
      <div
        className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16 text-center"
        style={{ backgroundColor: '#F7F8FA' }}
      >
        <p className="max-w-md text-lg text-gray-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-block rounded-lg px-8 py-3 text-base font-semibold transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: '#E8A020',
              color: '#1B2F4E',
            }}
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-block rounded-lg border-2 px-8 py-3 text-base font-semibold transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              borderColor: '#1B2F4E',
              color: '#1B2F4E',
            }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
