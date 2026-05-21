export interface Review {
  id: number
  quote: string
  author: string
  neighborhood: string
  rating: number
}

export const reviews: Review[] = [
  {
    id: 1,
    quote:
      'Called at 7am with a burst pipe. Tech was at my door by 8:15. Fixed in under an hour. Absolute lifesavers.',
    author: 'Sarah L.',
    neighborhood: 'Beacon Hill',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Fair price, no upselling, clean work. Replaced our water heater in 3 hours flat.',
    author: 'James R.',
    neighborhood: 'Charlestown',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Used them twice now. Both times: on time, professional, left the place spotless.',
    author: 'Maria C.',
    neighborhood: 'Back Bay',
    rating: 5,
  },
  {
    id: 4,
    quote:
      'The emergency line is real — they actually picked up at midnight and had someone here by 1am.',
    author: 'Tom B.',
    neighborhood: 'Dorchester',
    rating: 5,
  },
]
