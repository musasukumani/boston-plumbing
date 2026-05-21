'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import type { GalleryItem, GalleryCategory } from '@/lib/gallery'

interface GalleryGridProps {
  items: GalleryItem[]
  activeCategory: GalleryCategory
}

interface LightboxProps {
  item: GalleryItem
  onClose: () => void
}

function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
      >
        <div className="relative h-72 sm:h-96">
          <Image src={item.src} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 672px" />
        </div>
        <div className="p-6">
          <h3 className="font-extrabold text-navy text-lg mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>
          <p className="text-sm font-medium text-gray-500">{item.result}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-9 h-9 flex items-center justify-center text-gray-700 hover:bg-white shadow-md"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryGrid({ items, activeCategory }: GalleryGridProps) {
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null)

  const filtered = activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory)

  return (
    <>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm"
              style={{ aspectRatio: '4/3' }}
              onClick={() => setLightboxItem(item)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/70 transition-all duration-300 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100">
                <h3 className="font-bold text-white text-sm mb-1 leading-tight">{item.title}</h3>
                <p className="text-gray-300 text-xs">{item.result}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
