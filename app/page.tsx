import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { CTA } from '@/components/cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="bg-black/70">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
