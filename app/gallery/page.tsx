'use client'

import { useState } from 'react'
import PageHero from '@/components/ui/PageHero'
import GalleryFilter from '@/components/gallery/GalleryFilter'
import GalleryGrid from '@/components/gallery/GalleryGrid'
import CTABanner from '@/components/home/CTABanner'
import { galleryItems, type GalleryCategory } from '@/lib/gallery'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all')

  return (
    <>
      <PageHero
        title="Our Work"
        subtitle="Real jobs. Real results."
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Gallery', href: '/gallery' },
        ]}
      />

      <section className="py-20 bg-cream dark:bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
          <GalleryGrid items={galleryItems} activeCategory={activeCategory} />
        </div>
      </section>

<CTABanner />
    </>
  )
}
