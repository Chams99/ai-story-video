'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-image.jpg"
        alt="Young girl in a vintage car"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight text-balance">
          TIME TO <br className="hidden md:block" /> TELL YOUR <br className="hidden md:block" /> STORY
        </h1>

        {/* Project Card */}
        <button 
          onClick={() => router.push('/signup')}
          className="absolute bottom-12 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:bg-white/20 transition-colors cursor-pointer"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-amber-400/20 to-black flex items-center justify-center">
            <div className="text-center">
              <p className="text-white/60 text-xs md:text-sm font-semibold mb-1">START A PROJECT</p>
              <div className="flex gap-1 justify-center">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-400/30 rounded" />
                <div className="w-8 h-8 md:w-10 md:h-10 bg-amber-400/30 rounded" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </section>
  )
}
