import Link from 'next/link'
import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react'

// Who built FairyTail. Matches the Person entity published on https://chames.tn.
const developer = {
  name: 'Chames Eddine Dhibi',
  role: 'freelance full-stack developer',
  phone: '+216 51 091 800',
  phoneHref: 'tel:+21651091800',
  whatsappHref: `https://wa.me/21651091800?text=${encodeURIComponent(
    'Hi Chames, I saw FairyTail and would like to talk about a project.',
  )}`,
  portfolioHref: 'https://chames.tn/?utm_source=ai-story-video&utm_medium=referral&utm_campaign=demo_credit',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://ai-story-video.vercel.app/#website',
      url: 'https://ai-story-video.vercel.app/',
      name: 'FairyTail',
      description: 'Transform your old photos into cinematic stories with AI',
      inLanguage: 'en',
      creator: { '@id': 'https://chames.tn/#person' },
    },
    {
      '@type': 'Person',
      '@id': 'https://chames.tn/#person',
      name: developer.name,
      alternateName: ['Chames Dhibi', 'Chams Dhibi'],
      jobTitle: 'Software Engineer & Full-Stack Developer',
      url: 'https://chames.tn',
      telephone: '+216 51091800',
      address: { '@type': 'PostalAddress', addressLocality: 'Gafsa', addressCountry: 'TN' },
      sameAs: [
        'https://github.com/chams99',
        'https://linkedin.com/in/chamesdh',
        'https://www.upwork.com/freelancers/~01ec2dc27e0c617399',
      ],
    },
  ],
}

const columns = [
  {
    title: 'Product',
    links: [
      { href: '/#features', label: 'Features' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/family', label: 'For families' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/resources', label: 'Resources' },
    ],
  },
]

const pill =
  'inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-700 px-4 text-sm text-gray-200 transition-colors hover:border-amber-400 hover:text-amber-400'

export function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-logo font-bold text-amber-400 mb-4">FAIRYTAIL</h3>
            <p className="text-gray-400 text-sm">Transform your memories into timeless cinematic stories.</p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-amber-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Who built the site, and how to reach him */}
        <section
          aria-labelledby="made-by-title"
          className="flex flex-col gap-4 border-t border-slate-800 py-6 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <h2 id="made-by-title" className="text-sm font-semibold text-white">
              Need an app like this one?
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Designed and built by{' '}
              <a
                href={developer.portfolioHref}
                rel="author"
                className="text-gray-200 underline decoration-slate-600 underline-offset-4 hover:text-amber-400"
              >
                {developer.name}
              </a>
              , {developer.role}.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2">
            <li>
              <a href={developer.phoneHref} className={pill}>
                <Phone className="h-4 w-4" aria-hidden="true" />
                {developer.phone}
              </a>
            </li>
            <li>
              <a href={developer.whatsappHref} className={pill}>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href={developer.portfolioHref} className={pill}>
                chames.tn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </section>

        <div className="border-t border-slate-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 FairyTail. Turning memories into magic.</p>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </footer>
  )
}
