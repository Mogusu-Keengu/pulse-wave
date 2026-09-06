const BOX_CONTENTS = [
  'EMS Butterfly Massager Unit',
  'Self-Adhesive Butterfly Gel Patch',
  'USB-C Charging Cable',
  'User Manual (EN/ES/FR)',
]

const TRUST_BADGES = [
  { label: '30-Day Money Back' },
  { label: 'Secure Checkout' },
  { label: 'Fast Shipping' },
]

export default function OrderSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-xs font-medium text-blue-600">Limited Offer</span>
          <h2 className="mt-3 text-3xl font-semibold text-gray-900 sm:text-4xl">
            Order today. Feel better tomorrow.
          </h2>
        </div>

        <div className="mt-12 grid items-start gap-10 sm:grid-cols-2">
          {/* Product image placeholder */}
          {/*
            Product + accessories flat-lay image
            Recommended size: ~380x300px
          */}
          <div className="flex h-[300px] w-full items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 text-sm text-gray-400">
            Product bundle image (380×300)
          </div>

          {/* Price + CTA */}
          <div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-gray-900">$39.00</span>
              <span className="text-lg text-gray-400 line-through">$78.00</span>
              <span className="rounded-full bg-blue-600 px-2.5 py-1 text-xs font-medium text-white">
                50% OFF
              </span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Limited time offer · Free shipping included
            </p>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                What&apos;s in the box
              </p>
              <ul className="mt-3 space-y-2">
                {BOX_CONTENTS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-blue-600">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-6 w-full rounded-full bg-gray-900 py-3.5 text-sm font-medium text-white transition-colors hover:bg-gray-800">
              Order Now — Free Shipping Today →
            </button>

            <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
              {TRUST_BADGES.map((badge) => (
                <span key={badge.label}>{badge.label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
