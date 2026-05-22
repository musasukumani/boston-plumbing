import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  breadcrumb?: { label: string; href: string }[]
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center diagonal-texture"
      style={{ minHeight: 280, backgroundColor: '#0F1C2E' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">/</span>}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-brick">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1
          className="font-display font-normal text-white"
          style={{ fontSize: 'clamp(2.25rem, 6vw, 3.5rem)', lineHeight: 1.05 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-gray-400 max-w-xl" style={{ fontSize: 'clamp(1rem, 2vw, 1.125rem)' }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
