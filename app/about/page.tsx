import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import OurStory from '@/components/about/OurStory'
import TeamGrid from '@/components/about/TeamGrid'
import CredentialsBar from '@/components/about/CredentialsBar'
import CTABanner from '@/components/home/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Boston Plumbing has served Boston since 2001. Meet our licensed team of plumbers, learn our story, and find out why 500+ homeowners trust us.',
}

const values = [
  {
    icon: '🤝',
    title: 'Honesty',
    desc: "We give you a straight answer and a fair price. Always. No bait-and-switch, no hidden fees.",
  },
  {
    icon: '⚙️',
    title: 'Quality',
    desc: "We only use professional-grade parts and back every job with a 1-year labor warranty.",
  },
  {
    icon: '🏘️',
    title: 'Community',
    desc: "We live and work in Boston. We sponsor Little League teams and donate to local food banks every year.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />
      <OurStory />
      <TeamGrid />
      <CredentialsBar />

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" subtitle="Three principles that guide every job we do." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-xl border border-gray-100 shadow-sm border-l-4"
                style={{ borderLeftColor: 'var(--gold)' }}
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-extrabold text-navy text-xl mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
