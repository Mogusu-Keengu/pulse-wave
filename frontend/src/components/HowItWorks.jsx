const STEPS = [
  {
    number: '01',
    title: 'Attach',
    description:
      'Peel and press the self-adhesive butterfly pad onto any target area — neck, lower back, shoulder, arm, or leg.',
    imageLabel: 'Attach step image (280×200)',
  },
  {
    number: '02',
    title: 'Select',
    description:
      'Power on and navigate the LED touchscreen to choose from 8 massage modes and 19 intensity levels.',
    imageLabel: 'Select step image (280×200)',
  },
  {
    number: '03',
    title: 'Relax',
    description:
      'Sit back as the 15-minute automated session delivers targeted pulse therapy for fast pain relief and improved circulation.',
    imageLabel: 'Relax step image (280×200)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-medium text-blue-600">How It Works</span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Three steps to relief.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="rounded-xl bg-white p-4 shadow-sm">
              {/*
                Step image placeholder — swap with real photo/screenshot
              */}
              <div className="flex h-[180px] w-full items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400">
                {step.imageLabel}
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-[11px] font-medium text-white">
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
