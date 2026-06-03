export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* PageHero skeleton */}
      <div
        className="w-full flex flex-col items-center justify-center gap-4 px-4"
        style={{ height: 280, backgroundColor: 'var(--navy)' }}
      >
        <div className="h-4 w-20 bg-white/10 rounded" />
        <div className="h-9 w-48 bg-white/10 rounded" />
        <div className="h-4 w-64 bg-white/10 rounded" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filter pill skeletons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {[80, 100, 96, 88, 104].map((w, i) => (
            <div
              key={i}
              className="h-9 bg-gray-200 rounded-full"
              style={{ width: w }}
            />
          ))}
        </div>

        {/* Masonry-style 3-col grid of 12 image placeholders */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, i) => {
            // Vary heights to suggest masonry
            const heights = [240, 300, 200, 280, 220, 320, 260, 200, 300, 240, 280, 220]
            return (
              <div
                key={i}
                className="w-full bg-gray-200 rounded-xl"
                style={{ height: heights[i] }}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
