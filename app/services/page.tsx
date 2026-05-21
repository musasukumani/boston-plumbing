import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ServiceCard from '@/components/services/ServiceCard'
import ServiceAreas from '@/components/services/ServiceAreas'
import CTABanner from '@/components/home/CTABanner'
import { services } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Plumbing Services',
  description:
    'Boston Plumbing offers drain cleaning, leak detection, water heater service, emergency plumbing, pipe installation, and bathroom remodeling across all Boston neighborhoods.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Residential & commercial plumbing across all Boston neighborhoods."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
        ]}
      />

      <section className="py-20" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas />
      <CTABanner />
    </>
  )
}
