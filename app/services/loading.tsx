export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* PageHero skeleton */}
      <div
        className="w-full flex flex-col items-center justify-center gap-4 px-4"
        style={{ height: 280, backgroundColor: '#1B2F4E' }}
      >
        <div className="h-4 w-20 bg-white/10 rounded" />
        <div className="h-9 w-56 bg-white/10 rounded" />
        <div className="h-4 w-72 bg-white/10 rounded" />
      </div>

      {/* Services grid — 3 columns × 2 rows */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Section intro */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="h-4 w-28 bg-gray-200 rounded" />
          <div className="h-8 w-60 bg-gray-200 rounded" />
          <div className="h-4 w-96 bg-gray-200 rounded" />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm border border-gray-100"
            >
              {/* Icon placeholder */}
              <div className="h-14 w-14 bg-gray-200 rounded-xl" />

              {/* Title */}
              <div className="h-6 w-3/4 bg-gray-200 rounded" />

              {/* Description lines */}
              <div className="space-y-2 flex-1">
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-5/6 bg-gray-200 rounded" />
                <div className="h-3 w-4/6 bg-gray-200 rounded" />
              </div>

              {/* Feature bullets */}
              <div className="space-y-2 pt-2 border-t border-gray-100">
                {Array.from({ length: 3 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="h-3 w-3 bg-gray-200 rounded-full flex-shrink-0" />
                    <div className="h-3 bg-gray-200 rounded" style={{ width: `${60 + j * 10}%` }} />
                  </div>
                ))}
              </div>

              {/* CTA link */}
              <div className="h-4 w-28 bg-gray-200 rounded mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
