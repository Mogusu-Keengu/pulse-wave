const FEATURE_ICONS = {
  modes: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M7 9h10M7 13h6" />
    </svg>
  ),
  ems: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  portable: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  usb: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="7" y="2" width="10" height="6" rx="1" />
      <path d="M12 8v9m-4 0h8" />
    </svg>
  ),
}

const FEATURES = [
  {
    icon: 'modes',
    title: '8 Modes',
    subtitle: '19 INTENSITY LEVELS',
    description: 'LED digital screen lets you dial in the exact stimulation your muscle needs.',
  },
  {
    icon: 'ems',
    title: 'EMS Technology',
    subtitle: 'DEEP TISSUE RELIEF',
    description: 'Micro-current pulses penetrate 4cm deep, reaching the root of muscle tension.',
  },
  {
    icon: 'portable',
    title: 'Ultra-Portable',
    subtitle: 'WIRELESS & WEARABLE',
    description: 'Feather-light at 65g. Worn discreetly under clothing — relief at your desk or commute.',
  },
  {
    icon: 'usb',
    title: 'USB-C Rechargeable',
    subtitle: 'SKIN-SAFE GEL PADS',
    description: 'Medical-grade hypoallergenic adhesive pads. Charges fully in 90 minutes.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: copy */}
          <div>
            <span className="text-xs font-medium text-blue-600">Key Features</span>
            <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
              Engineering meets wellness.
            </h2>
            <p className="mt-4 max-w-md text-gray-500">
              Six massage modes displayed live on the built-in LED digital
              screen. Choose Beat, Massage, Activation, Train, Knead, Shaping,
              Kneiting, or Slap — at any of 19 intensity levels.
            </p>
          </div>

          {/* Right: device image placeholder */}
          <div className="flex justify-center">
            {/*
              Device close-up image
              Recommended size: ~340x420px, portrait
            */}
            <div className="flex h-[380px] w-full max-w-[340px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400">
              Device image (340×420)
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                {FEATURE_ICONS[feature.icon]}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-[11px] font-medium tracking-wide text-blue-600">
                {feature.subtitle}
              </p>
              <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
