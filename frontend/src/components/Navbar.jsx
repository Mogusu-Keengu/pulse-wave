import { useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900">
            {/* placeholder logo mark — swap for real icon/image */}
            <span className="h-3 w-3 rounded-sm bg-white" />
          </span>
          <span className="text-base font-semibold text-gray-900">PulseWave</span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: cart, auth, CTA */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Cart"
            className="hidden text-gray-600 hover:text-gray-900 sm:block"
          >
            {/* simple cart icon, swap for your preferred icon set */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

          <div className="hidden items-center gap-3 sm:flex">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sign up
                </button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>

          <button
            type="button"
            className="hidden rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 sm:block"
          >
            Buy Now
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="text-gray-700 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-gray-900"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
            <Show when="signed-out">
              <SignInButton mode="modal">
                <button className="text-sm font-medium text-gray-700">Sign in</button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="text-sm font-medium text-gray-700">Sign up</button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton afterSignOutUrl="/" />
            </Show>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-full bg-gray-900 px-5 py-2.5 text-sm font-medium text-white"
          >
            Buy Now
          </button>
        </div>
      )}
    </header>
  )
}
