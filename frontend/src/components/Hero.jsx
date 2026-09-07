const STATS = [
  { value: '8', label: 'Modes' },
  { value: '19', label: 'Intensity Levels' },
  { value: '15', label: 'Min Sessions' },
  { value: '65', label: 'Grams' },
]

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-14 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              EMS Muscle Therapy
            </span>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
              Instant Targeted
              <br />
              Muscle Relief.
              <br />
              <span className="text-blue-600">Anywhere.</span>
            </h1>

            <p className="mt-5 max-w-md text-gray-500">
              Advanced EMS micro-current technology engineered to melt away
              neck, shoulder, and back tension in 15 minutes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700">
                Claim 50% Off
                <span aria-hidden>→</span>
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-400">
                <a href="#how-it-works">Watch How It Works</a>
              </button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
              <span className="text-amber-400">★★★★★</span>
              <span>4.9 / 5 · 2,500+ Happy Customers</span>
            </div>
          </div>

          {/* Right: hero image placeholder */}
          <div className="flex justify-center">
            {/*
              Hero product image
              Recommended size: ~520x460px, roughly 8:7 ratio
              Shows: device worn on neck + remote + folded device
            */}
            <div className="flex h-[380px] w-full max-w-[520px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white text-sm text-gray-400">
              Hero image (5200×4600)
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-gray-200 bg-white py-6 text-center"
            >
              <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
              <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
