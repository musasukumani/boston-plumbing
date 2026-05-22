'use client'

import type { GalleryCategory } from '@/lib/gallery'
import { categories } from '@/lib/gallery'

interface GalleryFilterProps {
  active: GalleryCategory
  onChange: (cat: GalleryCategory) => void
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2.5 justify-center mb-10">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer ${
            active === cat.value
              ? 'bg-brick text-white border-brick'
              : 'bg-white dark:bg-dark-surface text-dark-bg dark:text-gray-300 border-gray-200 dark:border-dark-border hover:border-brick hover:text-brick dark:hover:text-brick'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
