'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of uploading your photos and creating your first story.',
      category: 'Tutorial',
    },
    {
      title: 'Photo Quality Tips',
      description: 'Best practices for scanning and preparing your old photos for optimal results.',
      category: 'Guide',
    },
    {
      title: 'Storytelling Best Practices',
      description: 'Tips for crafting compelling narratives around your most cherished memories.',
      category: 'Guide',
    },
    {
      title: 'AI Enhancement Explained',
      description: 'Understanding how our AI technology works to restore and enhance your photos.',
      category: 'Tutorial',
    },
    {
      title: 'Sharing Your Stories',
      description: 'Multiple ways to share your cinematic stories with family and friends.',
      category: 'Guide',
    },
    {
      title: 'FAQ',
      description: 'Frequently asked questions about FairyTail features and capabilities.',
      category: 'Help',
    },
  ]

  return (
    <main className="bg-black/70 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Resources
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Everything you need to master the art of transforming your memories into cinematic stories.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 hover:border-amber-400/50 transition-colors"
              >
                <span className="inline-block px-3 py-1 bg-amber-400/10 text-amber-400 text-sm font-semibold rounded-full mb-4">
                  {resource.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-8">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="mailto:support@fairytail.com"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-black font-bold px-8 py-3 rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
