'use client'

import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    title: 'Book a plumber in seconds',
    description:
      'Call now or submit a quick form and we’ll dispatch a licensed Boston plumber to your address today.',
  },
  {
    title: 'Clear estimate before work starts',
    description:
      'We inspect the problem, explain the repair options, and give you a transparent price before we begin.',
  },
  {
    title: 'Fix it right, guaranteed',
    description:
      'From leaks to water heaters, the job is completed with a satisfaction guarantee and clean, courteous service.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-white dark:bg-dark-bg py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          title="Fast plumbing service with predictable results"
          subtitle="A simple, local process designed to stop damage fast and keep your home dry."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-gray-200/80 bg-cream/80 p-6 shadow-sm shadow-slate-200/60 dark:border-white/10 dark:bg-[#111827]">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy text-white font-bold text-lg">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-dark-bg dark:text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-dark-bg/75 dark:text-white/75">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
