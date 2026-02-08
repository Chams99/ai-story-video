'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

export default function PricingPage() {
  const router = useRouter()

  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      description: 'Perfect for trying out FairyTail',
      features: [
        '1 project per month',
        'Basic AI enhancement',
        'Standard export quality',
        'Community support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Creator',
      price: '$9.99',
      period: '/month',
      description: 'Ideal for casual storytellers',
      features: [
        '10 projects per month',
        'Advanced AI enhancement',
        '4K export quality',
        'Priority email support',
        'Custom music library',
        'Family collaboration',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Archivist',
      price: '$24.99',
      period: '/month',
      description: 'For dedicated memory keepers',
      features: [
        'Unlimited projects',
        'Premium AI enhancement',
        '8K export quality',
        '24/7 priority support',
        'Advanced editing tools',
        'Team collaboration',
        'Batch processing',
        'Cloud storage',
      ],
      cta: 'Start Free Trial',
      highlighted: false,
    },
  ]

  return (
    <main className="bg-black/70 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Choose the perfect plan for your storytelling needs. All plans include a free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-amber-400/20 to-black border-2 border-amber-400 transform md:scale-105'
                    : 'bg-gray-900/50 border border-gray-800'
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                <Button
                  onClick={() => router.push('/signup')}
                  className={`w-full mb-8 py-6 rounded-lg font-bold text-lg transition-colors ${
                    plan.highlighted
                      ? 'bg-amber-400 hover:bg-amber-500 text-black'
                      : 'bg-gray-800 hover:bg-gray-700 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900/20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-300">
                Yes, absolutely. You can cancel your subscription at any time with no penalties or hidden fees.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">What's included in the free trial?</h3>
              <p className="text-gray-300">
                The free trial gives you full access to the Creator plan features for 14 days.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Do you offer refunds?</h3>
              <p className="text-gray-300">
                We offer a 30-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Can I upgrade or downgrade?</h3>
              <p className="text-gray-300">
                You can change your plan at any time. Changes take effect immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
