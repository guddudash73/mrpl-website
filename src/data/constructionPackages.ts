import { ConstructionPackage } from '@/types';

export const CONSTRUCTION_PACKAGES: ConstructionPackage[] = [
  {
    id: 'pkg-essential',
    name: 'Essential Standard',
    ratePerSqFt: 1850,
    badge: 'Popular for Rentals',
    description: 'High-quality foundational construction standard ideal for dependable residential builds and investment properties.',
    specifications: [
      'Structure: M20 Grade RCC Framed Structure with TMT Steel (Tata/Jindal)',
      'Walls: Red Clay Bricks / AAC Blocks (9" Outer, 4.5" Inner)',
      'Flooring: Premium Vitrified Tiles (2ft x 2ft - Somany/Kajaria)',
      'Plumbing: CPVC/PVC Pipes (Astral/Supreme) & Jaquar Fixtures',
      'Electrical: Modular Switches (Anchor/Havells) & Fire-resistant wiring',
      'Painting: Asian Paints Tractor Emulsion (Interior) & Apex (Exterior)'
    ],
    idealFor: 'Residential homes, rental units, first-time builders',
    warrantyYears: 5
  },
  {
    id: 'pkg-premium',
    name: 'MRPL Premium Standard',
    ratePerSqFt: 2350,
    badge: 'Most Preferred',
    description: 'Our signature turnkey package combining architectural refined finishes, premium sanitation, and custom ceiling work.',
    specifications: [
      'Structure: M25 Grade Earthquake-Resistant RCC Structure',
      'Walls: First-class Wire Cut Red Bricks with Weatherproof Plaster',
      'Flooring: Large Format Vitrified Tiles (4ft x 2ft) or Engineered Granite',
      'Plumbing: Concealed Diverters, Wall-Hung Toilets (Jaquar/Kohler)',
      'Ceiling: Designer POP False Ceiling with LED Cove Lighting',
      'Doors & Windows: Teakwood Main Door & UPVC Windows with Mosquito Mesh',
      'Painting: Asian Paints Royale Luxury Emulsion (Interior)'
    ],
    idealFor: 'Custom family villas, duplex residences',
    warrantyYears: 10
  },
  {
    id: 'pkg-luxury',
    name: 'Architectural Ultra Luxury',
    ratePerSqFt: 2950,
    badge: 'Ultra High-End',
    description: 'Bespeak structural craftsmanship with Italian marble flooring, smart home integration, and double-height structural glass.',
    specifications: [
      'Structure: Heavy-Duty M30 Grade Reinforced Structural Design',
      'Flooring: Imported Italian Botticino/Dyna Marble in Living & Dining',
      'Kitchen: Modular Acrylic Kitchen with Soft-Close Hardware (Hettich)',
      'Bathrooms: Full-height Marble Finish Tiles, Thermostatic Showers (Grohe)',
      'Automation: Smart Lighting, Video Door Phone, Keyless Entry Locks',
      'Windows: Heavy-duty Soundproof Double-Glazed UPVC System'
    ],
    idealFor: 'High-end duplex estates & luxury residences',
    warrantyYears: 15
  }
];
