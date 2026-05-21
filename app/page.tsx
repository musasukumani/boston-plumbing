import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import TrustBar from '@/components/home/TrustBar'
import ServicesSnapshot from '@/components/home/ServicesSnapshot'
import WhyUs from '@/components/home/WhyUs'
import ReviewsCarousel from '@/components/home/ReviewsCarousel'
import StatsCounter from '@/components/home/StatsCounter'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  title: 'Boston Plumbing | Licensed Plumbers in Boston, MA',
  description:
    'Boston Plumbing — licensed, insured plumbers serving all Boston neighborhoods. Same-day service, 24/7 emergency, upfront pricing. Call (617) 555-0192.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Boston Plumbing',
  image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800',
  url: 'https://bostonplumbing.com',
  telephone: '+16175550192',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '47 Tremont St',
    addressLocality: 'Boston',
    addressRegion: 'MA',
    postalCode: '02108',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 42.3584,
    longitude: -71.0598,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
  },
  priceRange: '$$',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <ServicesSnapshot />
      <WhyUs />
      <ReviewsCarousel />
      <StatsCounter />
      <CTABanner />
    </>
  )
}
