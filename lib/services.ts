export interface Service {
  id: string
  icon: string
  name: string
  shortDesc: string
  fullDesc: string
  bullets: string[]
  slug: string
}

export const services: Service[] = [
  {
    id: 'drain-cleaning',
    slug: 'drain-cleaning',
    icon: 'drain',
    name: 'Drain Cleaning',
    shortDesc: 'Blockages cleared fast, guaranteed.',
    fullDesc:
      'Slow or blocked drains? We use hydro-jetting and professional-grade snaking to clear everything from kitchen grease to tree root intrusions.',
    bullets: [
      'Kitchen & bathroom drains',
      'Main sewer line cleaning',
      'Hydro-jetting service',
      'Video camera inspection',
    ],
  },
  {
    id: 'leak-repair',
    slug: 'leak-repair',
    icon: 'leak',
    name: 'Leak Detection & Repair',
    shortDesc: 'We find and fix leaks before they become floods.',
    fullDesc:
      'Hidden leaks cause mold and structural damage fast. We locate leaks with non-invasive detection equipment and repair them the same day.',
    bullets: [
      'Pipe leak repair',
      'Slab leak detection',
      'Fixture leak repair',
      'Water damage prevention',
    ],
  },
  {
    id: 'water-heater',
    slug: 'water-heater',
    icon: 'heater',
    name: 'Water Heater Services',
    shortDesc: 'Install, repair, or replace — any brand.',
    fullDesc:
      'From tank to tankless, we install, repair, and replace all major brands. Most water heater replacements completed in under 3 hours.',
    bullets: [
      'Tank & tankless installation',
      'Flush & maintenance',
      'Emergency same-day repair',
      'Energy-efficient upgrades',
    ],
  },
  {
    id: 'emergency',
    slug: 'emergency',
    icon: 'emergency',
    name: 'Emergency Plumbing',
    shortDesc: 'Day or night, we\'re on our way.',
    fullDesc:
      'Burst pipe at midnight? Flooding on a Sunday? Our emergency line is answered by a real plumber — not a voicemail.',
    bullets: [
      '24/7 availability, 365 days',
      'Burst & frozen pipes',
      'Sewage backups',
      'Flood response',
    ],
  },
  {
    id: 'pipe-installation',
    slug: 'pipe-installation',
    icon: 'pipe',
    name: 'Pipe Installation',
    shortDesc: 'New builds and full replacements.',
    fullDesc:
      'We handle full re-pipes, new construction rough-ins, and single-line replacements using copper, PEX, or CPVC.',
    bullets: [
      'Full home re-pipe',
      'PEX / copper / CPVC',
      'New construction rough-in',
      'Commercial pipe installation',
    ],
  },
  {
    id: 'bathroom-remodeling',
    slug: 'bathroom-remodeling',
    icon: 'bathroom',
    name: 'Bathroom & Kitchen Plumbing',
    shortDesc: 'Fixtures, tiling, full gut jobs.',
    fullDesc:
      'Remodeling or upgrading? We handle all fixture installation, rough-in work, and full bathroom gut jobs.',
    bullets: [
      'Toilet, sink, tub installation',
      'Garbage disposal',
      'Faucet & fixture upgrades',
      'Full bathroom remodel plumbing',
    ],
  },
]
