'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'

const team = [
  {
    name: 'Kevin Donovan',
    title: 'Founder & Master Plumber',
    bio: '30+ years experience. MA Licensed Master Plumber.',
    img: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=85',
    pos: 'center',
  },
  {
    name: 'Angela Torres',
    title: 'Operations Manager',
    bio: 'Keeps every job on time, on budget, and stress-free.',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85',
    pos: 'top',
  },
  {
    name: 'Derek Walsh',
    title: 'Senior Technician',
    bio: 'Specialist in complex re-pipes and emergency response.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85',
    pos: '50% 40%',
  },
  {
    name: 'Priya Mehta',
    title: 'Customer Service Lead',
    bio: 'Your first call, last call, and everything in between.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=85',
    pos: '50% 15%',
  },
]

export default function TeamGrid() {
  return (
    <section className="py-20 bg-cream dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Meet the Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 text-center transition-all duration-200"
            >
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.pos }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-dark-bg dark:text-white text-base mb-1">{member.name}</h3>
                <p className="text-brick text-xs font-semibold uppercase tracking-wide mb-3">{member.title}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
