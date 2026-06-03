export default function Loading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton — full viewport height, navy */}
      <div className="w-full h-screen" style={{ backgroundColor: 'var(--navy)' }}>
        <div className="flex flex-col items-center justify-center h-full gap-6 px-4">
          <div className="h-6 w-32 bg-white/10 rounded" />
          <div className="h-14 w-2/3 max-w-xl bg-white/10 rounded" />
          <div className="h-14 w-1/2 max-w-sm bg-white/10 rounded" />
          <div className="h-5 w-1/3 max-w-xs bg-white/10 rounded" />
          <div className="flex gap-4 mt-4">
            <div className="h-12 w-36 bg-white/20 rounded-lg" />
            <div className="h-12 w-36 bg-white/10 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Trust bar skeleton — 4 boxes */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6 sm:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="h-12 w-12 bg-gray-200 rounded-full" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-3 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Services section skeleton — 3×2 grid */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="h-4 w-24 bg-gray-200 rounded" />
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="h-4 w-80 bg-gray-200 rounded" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm"
              >
                <div className="h-12 w-12 bg-gray-200 rounded-lg" />
                <div className="h-5 w-3/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-gray-200 rounded" />
                  <div className="h-3 w-5/6 bg-gray-200 rounded" />
                  <div className="h-3 w-4/6 bg-gray-200 rounded" />
                </div>
                <div className="h-4 w-24 bg-gray-200 rounded mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
