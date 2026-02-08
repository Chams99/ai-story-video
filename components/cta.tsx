'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function CTA() {
  const router = useRouter()

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
          Ready to Tell Your Story?
        </h2>
        <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
          Join thousands who have transformed their memories into timeless cinematic stories. Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => router.push('/signup')}
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg px-12 py-6 rounded-lg"
          >
            Start a Project
          </Button>
          <Button
            onClick={() => router.push('/about')}
            variant="outline"
            className="border-amber-400 text-amber-400 hover:bg-amber-400/10 font-bold text-lg px-12 py-6 rounded-lg bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
