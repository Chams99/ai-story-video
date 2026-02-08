'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function FamilyPage() {
  const router = useRouter()

  return (
    <main className="bg-black/70 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Family Collaboration
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Bring your family together to preserve and celebrate your shared history. Create, collaborate, and build your family's digital legacy.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
            Why Families Love FairyTail
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Share Memories Together</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Invite family members to collaborate on projects, add their own stories, and contribute to a shared digital archive.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Unlimited family members</li>
                <li>✓ Real-time collaboration</li>
                <li>✓ Secure family vault</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Build Your Legacy</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Create a beautiful, organized collection of your family's stories that can be passed down through generations.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Multi-generational access</li>
                <li>✓ Organized family trees</li>
                <li>✓ Searchable archives</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Easy Sharing</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Share individual stories or entire collections with family, friends, or the world with customizable privacy settings.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Custom privacy controls</li>
                <li>✓ Direct sharing links</li>
                <li>✓ Social integration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-amber-400 mb-4">Organize Moments</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Tag, categorize, and organize your photos by family members, events, locations, and time periods for easy discovery.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li>✓ Smart tagging</li>
                <li>✓ Family albums</li>
                <li>✓ Timeline view</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-12 text-center">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Family Reunions',
                description: 'Digitize and celebrate photos from family gatherings across generations.',
              },
              {
                title: 'Heritage Projects',
                description: 'Preserve cultural stories and family histories for future generations.',
              },
              {
                title: 'Special Occasions',
                description: 'Document anniversaries, weddings, births, and milestone moments.',
              },
              {
                title: 'Estate Planning',
                description: 'Create an organized digital estate of family memories and heirlooms.',
              },
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
                <h3 className="text-xl font-bold text-amber-400 mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">
            Start Building Your Family's Legacy
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Bring your family together and create a beautiful digital archive of your shared memories.
          </p>
          <Button 
            onClick={() => router.push('/signup')}
            className="bg-amber-400 hover:bg-amber-500 text-black font-bold text-lg px-12 py-6 rounded-lg"
          >
            Create Family Account
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
