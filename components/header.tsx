'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const router = useRouter()
  const mobileNavRef = useRef<HTMLDetailsElement>(null)
  const mobileNavSummaryRef = useRef<HTMLElement>(null)
  const mobileNavHadFocusRef = useRef(false)
  const desktopNavRef = useRef<HTMLDivElement>(null)
  const desktopNavHadFocusRef = useRef(false)
  const desktopFamilyLinkRef = useRef<HTMLAnchorElement>(null)

  const closeMobileNav = () => {
    if (mobileNavRef.current) mobileNavRef.current.open = false
    mobileNavHadFocusRef.current = false
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)')
    const handleBreakpointChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        const hadMobileNavFocus = mobileNavHadFocusRef.current || Boolean(
          mobileNavRef.current?.contains(document.activeElement),
        )
        if (mobileNavRef.current) mobileNavRef.current.open = false
        mobileNavHadFocusRef.current = false
        if (hadMobileNavFocus) desktopFamilyLinkRef.current?.focus()
      } else {
        const hadDesktopNavFocus = desktopNavHadFocusRef.current || Boolean(
          desktopNavRef.current?.contains(document.activeElement),
        )
        desktopNavHadFocusRef.current = false
        if (hadDesktopNavFocus) mobileNavSummaryRef.current?.focus()
      }
    }

    desktopQuery.addEventListener('change', handleBreakpointChange)
    return () => desktopQuery.removeEventListener('change', handleBreakpointChange)
  }, [])

  return (
    <header
      className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && mobileNavRef.current?.open) {
          event.preventDefault()
          closeMobileNav()
          mobileNavSummaryRef.current?.focus()
        }
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-logo font-bold text-amber-400 tracking-wider">
          FAIRYTAIL
        </Link>

        {/* Navigation Links */}
        <div
          ref={desktopNavRef}
          className="hidden md:flex items-center gap-8"
          onFocusCapture={() => { desktopNavHadFocusRef.current = true }}
          onBlurCapture={(event) => {
            if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) {
              desktopNavHadFocusRef.current = false
            }
          }}
        >
          <Link ref={desktopFamilyLinkRef} href="/family" className="text-white/80 hover:text-white transition-colors text-sm">
            Family
          </Link>
          <Link href="/resources" className="text-white/80 hover:text-white transition-colors text-sm">
            Resources
          </Link>
          <button onClick={() => router.push('/login')} className="text-white/80 hover:text-white transition-colors text-sm">
            Log In
          </button>
          <Link href="/pricing" className="text-white/80 hover:text-white transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/about" className="text-white/80 hover:text-white transition-colors text-sm">
            About Us
          </Link>
        </div>

        <details
          ref={mobileNavRef}
          className="md:hidden relative"
          onFocusCapture={() => { mobileNavHadFocusRef.current = true }}
          onBlurCapture={(event) => {
            if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget as Node)) {
              mobileNavHadFocusRef.current = false
            }
          }}
        >
          <summary
            ref={mobileNavSummaryRef}
            className="inline-flex cursor-pointer list-none items-center justify-center rounded-md p-2.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 [&::-webkit-details-marker]:hidden"
          >
            <Menu aria-hidden="true" size={24} />
            <span className="sr-only">Navigation</span>
          </summary>
          <div id="mobile-primary-navigation" className="absolute right-0 top-full w-[calc(100vw-3rem)] bg-black/95 px-6 py-6">
            <div className="flex flex-col gap-4">
              <Link href="/family" onClick={closeMobileNav} className="text-white/80 hover:text-white text-sm">
                Family
              </Link>
              <Link href="/resources" onClick={closeMobileNav} className="text-white/80 hover:text-white text-sm">
                Resources
              </Link>
              <Link href="/login" onClick={closeMobileNav} className="text-white/80 hover:text-white text-sm">
                Log In
              </Link>
              <Link href="/pricing" onClick={closeMobileNav} className="text-white/80 hover:text-white text-sm">
                Pricing
              </Link>
              <Link href="/about" onClick={closeMobileNav} className="text-white/80 hover:text-white text-sm">
                About Us
              </Link>
            </div>
          </div>
        </details>

        {/* CTA Button */}
        <Button 
          onClick={() => router.push('/signup')}
          className="bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg px-3 py-2 md:px-8"
        >
          Start for Free
        </Button>
      </nav>
    </header>
  )
}
