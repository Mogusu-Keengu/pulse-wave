const ROWS = [
  { feature: 'Portability', traditional: 'Bulky, heavy, cord-bound', pulsewave: 'Fits in your palm, wireless' },
  { feature: 'Noise', traditional: 'Loud motor vibration', pulsewave: 'Completely silent operation' },
  { feature: 'Targeted relief', traditional: 'Surface-level kneading only', pulsewave: '4cm deep-tissue EMS pulses' },
  { feature: 'Session time', traditional: '30–60 min setup + use', pulsewave: '15-minute hands-free therapy' },
  { feature: 'Price', traditional: '$150–$400+', pulsewave: 'Affordable direct-to-you pricing' },
  { feature: 'Wearability', traditional: 'Stationary use only', pulsewave: 'Use anywhere, anytime' },
]

export default function ComparisonTable() {
  return (
    <section id="benefits" className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs font-medium text-blue-600">Why EMS</span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Not all massagers are equal.
        </h2>

        <div className="mt-10 overflow-hidden rounded-xl border border-gray-200 text-left">
          {/* Header row */}
          <div className="grid grid-cols-3 bg-gray-900 text-xs font-medium uppercase tracking-wide text-gray-300">
            <div className="px-5 py-3">Feature</div>
            <div className="px-5 py-3">Traditional</div>
            <div className="flex items-center gap-1.5 px-5 py-3 text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              PulseWave EMS
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 text-sm ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50'
              }`}
            >
              <div className="px-5 py-4 font-medium text-gray-900">{row.feature}</div>
              <div className="px-5 py-4 text-gray-400">{row.traditional}</div>
              <div className="px-5 py-4 font-medium text-blue-600">{row.pulsewave}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
