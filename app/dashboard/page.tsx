'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    console.log('[v0] User logged out')
    router.push('/')
  }

  return (
    <main className="min-h-screen bg-black/70">
      <header className="bg-black/80 border-b border-white/10 sticky top-0">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-amber-400 font-logo text-2xl font-bold tracking-wider">
            FAIRYTAIL
          </Link>
          <Button
            onClick={handleLogout}
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold rounded-lg px-6 py-2"
          >
            Log Out
          </Button>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Your Dashboard</h1>
          <p className="text-white/60 text-lg">Welcome to FairyTail. Start transforming your memories into cinematic stories.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* New Project Card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-amber-400/50 transition-colors cursor-pointer group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">+</div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">New Project</h3>
            <p className="text-white/60">Start a new project and upload your photos</p>
          </div>

          {/* Upload Guide Card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-amber-400/50 transition-colors">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">Upload Photos</h3>
            <p className="text-white/60">Add your old photos and let AI work its magic</p>
          </div>

          {/* Results Card */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-amber-400/50 transition-colors">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-serif font-bold text-white mb-2">View Results</h3>
            <p className="text-white/60">Watch your memories transformed into stories</p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-400/10 to-amber-400/5 border border-amber-400/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-white mb-4">Ready to create?</h2>
          <p className="text-white/60 mb-6">Your first project is waiting. Transform your most cherished memories today.</p>
          <Button className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-3 rounded-lg">
            Create Your First Project
          </Button>
        </div>
      </div>
    </main>
  )
}
