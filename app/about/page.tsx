'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <main className="bg-black/70 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            FairyTail was born from a simple belief: everyone's memories deserve to be celebrated. We combine cutting-edge AI technology with storytelling artistry to transform your old photographs into cinematic experiences that capture the magic of your most precious moments.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-8">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Preserve Memories</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe every photograph tells a story. Our technology breathes new life into old memories, preserving them in a format that transcends time and generations.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-amber-400 mb-4">Create Magic</h3>
              <p className="text-gray-300 leading-relaxed">
                Through AI-powered enhancement and cinematic storytelling, we transform static images into immersive experiences that move people emotionally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Innovation</h3>
              <p className="text-gray-300">
                We leverage the latest AI technology to deliver unparalleled quality and new possibilities in photo restoration.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Respect</h3>
              <p className="text-gray-300">
                We treat every memory with the utmost care and respect. Your photos and stories deserve the best.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4">Accessibility</h3>
              <p className="text-gray-300">
                We believe everyone should have access to cinematic storytelling technology, regardless of background.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Start Your Journey</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Ready to transform your memories into timeless stories? Join thousands of families preserving their legacies.
          </p>
          <Button 
            onClick={() => router.push('/signup')}
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg px-12 py-6 rounded-lg"
          >
            Get Started Free
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
