export type GalleryCategory = 'all' | 'drain' | 'heater' | 'pipe' | 'bathroom'

export interface GalleryItem {
  id: number
  src: string
  title: string
  result: string
  category: Exclude<GalleryCategory, 'all'>
  description: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1607400201515-c2c41c07d307?w=800&q=80',
    title: 'Sewer Line Inspection — Dorchester',
    result: 'Completed in 2 hours. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'drain',
    description:
      'Video camera inspection revealed root intrusion 30 feet into sewer line. Roots cleared and pipe reinforced.',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    title: 'Emergency Heater Repair — Jamaica Plain',
    result: 'Completed in 1 hour. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'heater',
    description:
      'Failed heating element replaced on same-day emergency call. Hot water restored before end of day.',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    title: 'Full Re-Pipe — North End',
    result: 'Completed in 2 days. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'pipe',
    description:
      '100-year-old galvanized pipes replaced with modern PEX throughout a 3-bedroom condo. All walls patched and painted.',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80',
    title: 'Copper Pipe Repair — South End',
    result: 'Completed in 2 hours. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'pipe',
    description:
      'Pinhole leak in copper supply line repaired with professional solder joint. Area dried and tested for 48 hours.',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80',
    title: 'Burst Pipe Emergency — Fenway',
    result: 'Completed in 3 hours. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'pipe',
    description:
      'Frozen pipe burst in exterior wall. Pipe replaced, insulation upgraded, and water damage assessed.',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    title: 'Full Bathroom Remodel — Brookline',
    result: 'Completed in 3 days. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'bathroom',
    description:
      'Complete gut and remodel including new shower, double vanity, freestanding tub, and all plumbing rough-in.',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    title: 'Vanity & Faucet Upgrade — Allston',
    result: 'Completed in 4 hours. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'bathroom',
    description:
      'Double vanity installation with undermount sinks and brushed nickel faucets. All supply and drain lines updated.',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1564540583246-934409427776?w=800&q=80',
    title: 'Kitchen Sink Replacement — Brighton',
    result: 'Completed in 2 hours. Customer rating: ⭐⭐⭐⭐⭐',
    category: 'bathroom',
    description:
      'Farmhouse sink installation with garbage disposal, new faucet, and updated P-trap and supply lines.',
  },
]

export const categories: { value: GalleryCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'drain', label: 'Drain Work' },
  { value: 'heater', label: 'Water Heaters' },
  { value: 'pipe', label: 'Pipe Work' },
  { value: 'bathroom', label: 'Bathrooms' },
]
