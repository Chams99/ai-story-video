import { Card, CardContent } from '@/components/ui/card'

export function Features() {
  const features = [
    {
      title: 'Upload Photos',
      description: 'Share your cherished memories and old photographs with ease',
      icon: '📸',
    },
    {
      title: 'AI Story Generation',
      description: 'Watch as our AI crafts compelling narratives from your images',
      icon: '✨',
    },
    {
      title: 'Cinematic Video',
      description: 'Transform stories into breathtaking cinematic videos with motion and effects',
      icon: '🎬',
    },
    {
      title: 'Voice-Over Options',
      description: 'Add narration to bring your stories to life with professional voice talent',
      icon: '🎙️',
    },
  ]

  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">
          Transform Memories Into Art
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg max-w-2xl mx-auto">
          Our AI-powered platform turns your old photographs into stunning cinematic stories that honor
          your most precious moments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-amber-400/20 hover:border-amber-400/50 transition-colors">
              <CardContent className="p-8">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
