const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    location: 'New York, NY',
    quote:
      'After years of chronic neck tension from desk work, this is the first thing that actually works. I wear it during meetings and nobody even notices.',
  },
  {
    name: 'James T.',
    location: 'Austin, TX',
    quote:
      'The 19 intensity levels mean it works for both my wife and me. The LED screen is really intuitive. Battery lasts the whole week.',
  },
  {
    name: 'Priya K.',
    location: 'London, UK',
    quote:
      'I was skeptical but after one session the tightness in my shoulders was noticeably reduced. Now it\u2019s part of my nightly wind-down ritual.',
  },
  {
    name: 'David L.',
    location: 'Chicago, IL',
    quote:
      'The portability is the killer feature. I travel weekly and this replaced the $200 massage chair attachment I used to lug around.',
  },
  {
    name: 'Maria G.',
    location: 'Miami, FL',
    quote:
      'Postpartum back pain was killing me. This has been a lifesaver \u2014 gentle enough to use daily, strong enough to actually feel it.',
  },
  {
    name: 'Ryan O.',
    location: 'Seattle, WA',
    quote:
      'Two weeks in and I\u2019ve stopped relying on ibuprofen for my daily back aches. The EMS really does work. Worth every penny.',
  },
]

function StarRow() {
  return <div className="text-amber-400 text-sm">★★★★★</div>
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-xs font-medium text-blue-600">Social Proof</span>
        <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
          Real people. Real relief.
        </h2>
        <p className="mt-3 text-sm text-gray-500">4.9 out of 5 (2,500+ reviews)</p>

        <div className="mt-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="flex items-center gap-3">
                {/*
                  Avatar image placeholder — recommended 40x40px, circular
                */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-gray-300 bg-gray-50 text-[9px] text-gray-400">
                  40×40
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
                      Verified Buyer
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>

              <div className="mt-3">
                <StarRow />
              </div>
              <p className="mt-3 text-sm text-gray-600">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
