export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* PageHero skeleton */}
      <div
        className="w-full flex flex-col items-center justify-center gap-4 px-4"
        style={{ height: 280, backgroundColor: 'var(--navy)' }}
      >
        <div className="h-4 w-20 bg-white/10 rounded" />
        <div className="h-9 w-64 bg-white/10 rounded" />
        <div className="h-4 w-80 bg-white/10 rounded" />
      </div>

      {/* Two-column content: text + image */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-4">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-3/4 bg-gray-200 rounded" />
            <div className="space-y-2 mt-2">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-4/5 bg-gray-200 rounded" />
            </div>
            <div className="space-y-2 mt-2">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
            </div>
            <div className="h-11 w-36 bg-gray-200 rounded-lg mt-4" />
          </div>

          {/* Image placeholder */}
          <div className="h-80 w-full bg-gray-200 rounded-2xl" />
        </div>
      </div>

      {/* Team cards — 4 in a row */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-48 bg-gray-200 rounded" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="h-56 w-full bg-gray-200" />
                <div className="p-4 flex flex-col gap-2">
                  <div className="h-5 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />
                  <div className="h-3 w-2/3 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
