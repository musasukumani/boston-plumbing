import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import FAQAccordion from '@/components/contact/FAQAccordion'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Request a free plumbing quote from Boston Plumbing. Same-day response, no obligation. Call (617) 555-0192 or fill out our online form.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Free estimates. Same-day response. No obligation."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      <section className="py-20" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <FAQAccordion />
    </>
  )
}
