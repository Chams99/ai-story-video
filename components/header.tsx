'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function Header() {
  const router = useRouter()

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-logo font-bold text-amber-400 tracking-wider">
          FAIRYTAIL
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/family" className="text-white/80 hover:text-white transition-colors text-sm">
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

        {/* CTA Button */}
        <Button 
          onClick={() => router.push('/signup')}
          className="bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg px-8 py-2"
        >
          Start for Free
        </Button>
      </nav>
    </header>
  )
}
