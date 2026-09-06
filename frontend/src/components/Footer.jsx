const PAYMENT_METHODS = ['Visa', 'Mastercard', 'Apple Pay', 'PayPal', 'Amex']

const FOOTER_LINKS = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Contact Us', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-10 text-gray-400">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a href="#" className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600">
              <span className="h-2.5 w-2.5 rounded-sm bg-white" />
            </span>
            <span className="text-sm font-semibold text-white">PulseWave</span>
          </a>

          <nav className="flex gap-6 text-sm">
            {FOOTER_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 sm:justify-start">
          {PAYMENT_METHODS.map((method) => (
            <span
              key={method}
              className="rounded-md border border-gray-700 px-3 py-1.5 text-xs text-gray-300"
            >
              {method}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 sm:text-left">
          © 2026 PulseWave. All rights reserved. Individual results may vary. Not a substitute for medical advice.
        </p>
      </div>
    </footer>
  )
}
