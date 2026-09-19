// Central business configuration for Garuda Cleaning Services
// All editable fields are flagged with [EDIT] for client customization.

export interface ServiceItem {
  id: string;
  name: string;
  icon: string;
  image: string;
  category: 'Residential' | 'Deep Cleaning' | 'Specialized' | 'Commercial';
  description: string;
  features: string[];
}

export interface Locality {
  name: string;
  highlight?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  businessName: 'Garuda Cleaning Services',
  tagline: 'Tirupati’s Trusted Deep Cleaning Specialists',
  city: 'Tirupati',
  state: 'Andhra Pradesh',
  
  // Real client phone number
  phone: '+91 77995 52084',
  phoneRaw: '+917799552084',
  
  // Real WhatsApp number for wa.me links
  whatsappNumber: '917799552084',
  whatsappPrefillText: 'Hello Garuda Cleaning Services, I would like to book a free inspection in Tirupati.',
  
  // [EDIT: Client to provide official email]
  email: 'contact@garudacleaning.com',
  
  // [EDIT: Client to provide physical address for schema and footer]
  address: {
    street: 'AIR Bypass Road, Near Alipiri Circle',
    locality: 'Tirupati',
    state: 'Andhra Pradesh',
    postalCode: '517501',
    country: 'IN'
  },
  
  // Business operating hours
  hours: '7:00 AM – 8:30 PM, 7 Days a Week',
  
  // Client social media profiles
  socials: {
    facebook: 'https://facebook.com/garudacleaningtirupati',
    instagram: 'https://instagram.com/garudacleaningtirupati',
    whatsapp: 'https://wa.me/917799552084'
  },

  // Trust Badges for TrustBar (Honest qualitative trust points - zero fabricated stats)
  trustBadges: [
    {
      title: 'Verified & Trained Staff',
      subtitle: 'Background-checked, trained, and uniformed crew',
      icon: 'shield'
    },
    {
      title: 'Free On-Site Inspection',
      subtitle: 'Transparent assessment before work begins',
      icon: 'clipboard'
    },
    {
      title: 'On-Time Guarantee',
      subtitle: 'Prompt arrival at your scheduled hour',
      icon: 'clock'
    },
    {
      title: '7 Days a Week Service',
      subtitle: 'Flexible morning & evening slots available',
      icon: 'calendar'
    }
  ],

  // 22 Curated Services with Real High-Resolution Photography (Strictly zero prices displayed)
  services: [
    {
      id: '1-bhk-deep-cleaning',
      name: '1 BHK Deep Cleaning',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Comprehensive sanitization of living room, bedroom, kitchen, bathroom, and balconies.',
      features: ['Dusting & cobweb clearing', 'Floor scrubbing', 'Window glass wiping', 'Switchboard sanitization']
    },
    {
      id: '2-bhk-deep-cleaning',
      name: '2 BHK Deep Cleaning',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Complete home deep-clean for 2-bedroom flats, revitalizing every room and surface.',
      features: ['Dual-bedroom deep clean', 'Kitchen degreasing', 'Tile and grout buffing', 'Balcony pressure wash']
    },
    {
      id: 'villa-deep-cleaning',
      name: 'Villa Deep Cleaning',
      icon: '🏡',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Multi-level independent villa and duplex cleaning from terrace to parking entrance.',
      features: ['Multi-floor dusting', 'High-ceiling detail cleaning', 'Staircase & railing polishing', 'Driveway wash']
    },
    {
      id: 'office-deep-cleaning',
      name: 'Office Deep Cleaning',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      description: 'Professional hygiene solutions for workstations, executive cabins, and conference rooms.',
      features: ['Cubicle sanitization', 'Carpet vacuuming', 'Keyboard & desk disinfection', 'Pantry scrubbing']
    },
    {
      id: 'shop-cleaning',
      name: 'Shop Cleaning',
      icon: '🏪',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      description: 'Retail stores, showrooms, and commercial outlets cleaned to welcome shoppers.',
      features: ['Display glass polishing', 'Floor buffing', 'Inventory rack dusting', 'Entrance showcase shine']
    },
    {
      id: 'bathroom-deep-cleaning',
      name: 'Bathroom Deep Cleaning',
      icon: '🚿',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
      category: 'Deep Cleaning',
      description: 'Heavy limescale, hard-water stain removal, tile buffing, and anti-bacterial sanitization.',
      features: ['Acid-free tile scrubbing', 'Hard-water stain removal', 'Chrome fitting shine', 'Exhaust fan degreasing']
    },
    {
      id: 'kitchen-deep-cleaning',
      name: 'Kitchen Deep Cleaning',
      icon: '🍳',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
      category: 'Deep Cleaning',
      description: 'Removal of stubborn grease, chimney exterior cleaning, tile degreasing, and platform sanitization.',
      features: ['Chimney hood degreasing', 'Gas stove detailing', 'Cabinet exterior scrubbing', 'Sink descaling']
    },
    {
      id: 'sofa-cleaning',
      name: 'Sofa Cleaning',
      icon: '🛋️',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Deep foam shampooing and high-power extraction cleaning for fabric and leather sofas.',
      features: ['Dust mite removal', 'Fabric shampooing', 'Deep stain spot-treatment', 'Rapid dry extraction']
    },
    {
      id: 'window-cleaning',
      name: 'Window Cleaning',
      icon: '🪟',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Detailed mesh screen washing, frame track dust extraction, and streak-free glass shine.',
      features: ['Sliding track vacuuming', 'Mosquito net cleaning', 'Frame detailing', 'Streak-free finish']
    },
    {
      id: 'fan-cleaning',
      name: 'Fan Cleaning',
      icon: '🌀',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Safe dust and oil film removal from ceiling fans, exhaust fans, and decorative fixtures.',
      features: ['Blade dust trapping', 'Motor casing wipe', 'Exhaust mesh cleaning', 'No floor splatter']
    },
    {
      id: 'floor-deep-cleaning',
      name: 'Floor Deep Cleaning',
      icon: '🧹',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=800&q=80',
      category: 'Deep Cleaning',
      description: 'Single-disc machine scrubbing and restoration for vitrified tiles, marble, and granite.',
      features: ['Machine scrub pass', 'Grout line dirt extraction', 'Stain fading treatment', 'Neutral pH buffing']
    },
    {
      id: 'water-tank-cleaning',
      name: 'Water Tank Cleaning',
      icon: '🚰',
      image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: '6-stage scientific tank sanitization: sludge extraction, high-pressure washing, and UV disinfection.',
      features: ['Sludge removal', 'High-pressure wash', 'Anti-bacterial treatment', 'UV sanitization pass']
    },
    {
      id: 'mattress-cleaning',
      name: 'Mattress Cleaning',
      icon: '🛏️',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Allergen extraction, dust-mite suction, and deodorizing fabric sanitization for healthy sleep.',
      features: ['Allergen extraction', 'Spot stain treatment', 'Deep vacuuming', 'Fabric freshening']
    },
    {
      id: 'glass-cleaning',
      name: 'Glass Cleaning',
      icon: '🪟',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Crystal-clear streak-free polishing for facade glass, partitions, mirrors, and French doors.',
      features: ['Mineral deposit removal', 'Rubber blade squeegee finish', 'Interior & exterior', 'Mirror polishing']
    },
    {
      id: 'post-construction-cleaning',
      name: 'Post-Construction Cleaning',
      icon: '🏗️',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
      category: 'Deep Cleaning',
      description: 'Removal of cement splatters, paint drops, drywall dust, and debris for newly built spaces.',
      features: ['Paint spot scraping', 'Cement haze removal', 'Deep fine-dust vacuum', 'Window track clearance']
    },
    {
      id: 'move-in-cleaning',
      name: 'Move-In Cleaning',
      icon: '🔑',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Thorough top-to-bottom sanitization so your family steps into a sparkling, hygienic new home.',
      features: ['Cupboard interior wipe', 'Kitchen appliance prep', 'Bathroom disinfection', 'Floor sanitization']
    },
    {
      id: 'move-out-cleaning',
      name: 'Move-Out Cleaning',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1502005229762-ee1b2b93e007?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Flawless handover cleaning ensuring you leave the property in impeccable inspection-ready shape.',
      features: ['Wall spot cleaning', 'Appliance degreasing', 'Fixtures polishing', 'Trash haul-out ready']
    },
    {
      id: 'school-classroom-cleaning',
      name: 'School/Classroom Cleaning',
      icon: '🏫',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      description: 'Child-safe hygiene protocols for classrooms, desks, whiteboards, libraries, and laboratories.',
      features: ['Desk & bench sanitization', 'Chalk/marker residue removal', 'Restroom deep-clean', 'Safe non-toxic agents']
    },
    {
      id: 'hotel-guest-house-cleaning',
      name: 'Hotel/Guest House Cleaning',
      icon: '🏨',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      description: 'Hospitality-standard turnover cleaning for Tirupati pilgrim guest houses, lodges, and resorts.',
      features: ['Turnover sanitization', 'Linen area freshening', 'Bathroom descaling', 'Odor neutralization']
    },
    {
      id: 'commercial-cleaning',
      name: 'Commercial Cleaning',
      icon: '🏭',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      category: 'Commercial',
      description: 'Custom industrial & commercial cleaning contracts for warehouses, clinics, and banks.',
      features: ['High-traffic floor care', 'Equipment surface wipe', 'Waste handling', 'Scheduled routine visits']
    },
    {
      id: 'carpet-cleaning',
      name: 'Carpet Cleaning',
      icon: '🛋️',
      image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80',
      category: 'Specialized',
      description: 'Industrial hot-water extraction and shampooing for residential rugs and commercial carpets.',
      features: ['Deep pile suction', 'Stain lifting treatment', 'Color-safe detergents', 'Quick moisture reduction']
    },
    {
      id: 'full-home-deep-cleaning-package',
      name: 'Full Home Deep Cleaning Package',
      icon: '🧼',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      category: 'Residential',
      description: 'Our flagship all-inclusive transformation covering every room, corner, glass, and surface.',
      features: ['All rooms & balconies', 'All bathrooms & kitchen', 'Fan & glass detailing', 'Floor machine scrub']
    }
  ] as ServiceItem[],

  // Local SEO Coverage - Tirupati Localities
  localities: [
    { name: 'Alipiri Road', highlight: true },
    { name: 'AIR Bypass Road', highlight: true },
    { name: 'Balaji Colony', highlight: true },
    { name: 'Bhavani Nagar', highlight: false },
    { name: 'Chandragiri Road', highlight: true },
    { name: 'K.T. Road', highlight: true },
    { name: 'Korlagunta', highlight: false },
    { name: 'Leela Mahal Circle', highlight: false },
    { name: 'M.R. Palle', highlight: true },
    { name: 'Mangalam', highlight: false },
    { name: 'Padmavathi Puram', highlight: false },
    { name: 'Renigunta Road', highlight: true },
    { name: 'S.V. University Area', highlight: true },
    { name: 'Tiruchanoor Road', highlight: true },
    { name: 'Tirupati Bypass Road', highlight: true },
    { name: 'Vinayaka Nagar', highlight: true }
  ] as Locality[],

  // Frequently Asked Questions
  faqs: [
    {
      question: 'How do you determine the cost of cleaning without fixed prices online?',
      answer: 'We provide a 100% free, zero-obligation on-site inspection across Tirupati. Our supervisor evaluates the exact scope, square footage, tile/marble condition, and stain depth, then presents an upfront, transparent quote before any work starts. There are never any hidden charges.'
    },
    {
      question: 'Are your cleaning professionals verified and trained?',
      answer: 'Yes, absolutely. Every member of the Garuda Cleaning Services crew undergoes background verification, identity checks, and rigorous hands-on training with professional equipment and surface-safe techniques. Our staff arrives in uniform with proper credentials.'
    },
    {
      question: 'What cleaning equipment and chemicals do you bring?',
      answer: 'Our teams come fully equipped with industrial single-disc floor scrubbers, high-pressure washers, extraction vacuum machines, microfiber tools, and professional-grade solutions. We prioritize surface-safe, low-odor, eco-conscious agents that are safe for kids and pets.'
    },
    {
      question: 'Which areas in Tirupati do you serve?',
      answer: 'We cover the entire Tirupati municipal region and surrounding suburban zones, including Alipiri, AIR Bypass Road, Renigunta Road, Tiruchanoor, Balaji Colony, M.R. Palle, Chandragiri Road, Bhavani Nagar, and beyond.'
    },
    {
      question: 'How do I book an inspection or service?',
      answer: 'You can book instantly by calling our team at +91 77995 52084, messaging us directly on WhatsApp, or submitting the booking form on this website. We confirm your preferred date and time slot within minutes.'
    },
    {
      question: 'What happens if I am not completely satisfied with the result?',
      answer: 'We offer an On-Site Satisfaction Guarantee. Before wrapping up, our supervisor conducts a walk-through inspection with you. If any spot or area does not meet your expectations, we re-clean it immediately at no additional charge.'
    }
  ] as FAQItem[]
};
