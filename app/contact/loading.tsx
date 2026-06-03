export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* PageHero skeleton */}
      <div
        className="w-full flex flex-col items-center justify-center gap-4 px-4"
        style={{ height: 280, backgroundColor: 'var(--navy)' }}
      >
        <div className="h-4 w-20 bg-white/10 rounded" />
        <div className="h-9 w-52 bg-white/10 rounded" />
        <div className="h-4 w-72 bg-white/10 rounded" />
      </div>

      {/* Two-column: form + contact info */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Form skeleton */}
          <div className="flex flex-col gap-6">
            <div className="h-7 w-48 bg-gray-200 rounded" />

            {/* Name row */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="h-3 w-20 bg-gray-200 rounded" />
                <div className="h-11 w-full bg-gray-200 rounded-lg" />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <div className="h-3 w-24 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            {/* Service select */}
            <div className="flex flex-col gap-2">
              <div className="h-3 w-32 bg-gray-200 rounded" />
              <div className="h-11 w-full bg-gray-200 rounded-lg" />
            </div>

            {/* Message textarea */}
            <div className="flex flex-col gap-2">
              <div className="h-3 w-28 bg-gray-200 rounded" />
              <div className="h-32 w-full bg-gray-200 rounded-lg" />
            </div>

            {/* Submit button */}
            <div className="h-12 w-full bg-gray-300 rounded-lg" />
          </div>

          {/* Contact info skeleton */}
          <div className="flex flex-col gap-8">
            <div className="h-7 w-44 bg-gray-200 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />

            {/* Info items */}
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="h-12 w-12 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex flex-col gap-2 flex-1">
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-3 w-40 bg-gray-200 rounded" />
                  <div className="h-3 w-36 bg-gray-200 rounded" />
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="h-56 w-full bg-gray-200 rounded-xl mt-2" />
          </div>
        </div>
      </div>
    </div>
  )
}
