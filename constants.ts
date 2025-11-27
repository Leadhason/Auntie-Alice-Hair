import { Service, Testimonial, GalleryItem, NavItem } from './types';

// Curated high-quality images of Black women and luxury salon aesthetics
export const IMAGES = {
  // Hero background: Elegant Black woman with luxurious hair
  HERO_BG: "/alice-7.jfif",
  
  // About Section Images
  ABOUT_HERO: "https://images.unsplash.com/photo-1633681926022-84c23e8cb22a?q=80&w=2000&auto=format&fit=crop", // Warm luxury salon interior
  ABOUT_ZAI: "/auntie-alice.png", // Professional headshot
  PHILOSOPHY_BG: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2000&auto=format&fit=crop", // Texture close-up
  SALON_DETAIL: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop", // Modern salon vibe
  PROCESS: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop", // Washing hair/Process

  // Services
  SERVICES: {
    SILK_PRESS: "/alice-2.jfif", // Smooth straight hair
    BRAIDS: "/alice-3.jfif", // Intricate braids
    EXTENSIONS: "/alice-1.jfif", // Voluminous extensions
    COLOR: "/alice-7.jfif" // Colored afro texture
  },

  // Gallery: Diverse Black hairstyles
  GALLERY: [
    "/alice-3.jfif", // Styling chair
    "/alice-6.jfif", // Styling process
    "/alice-2.jfif", // Afro art
    "/alice-1.jfif"  // Texture macro
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Silk Press',
    description: 'Straighten your natural curls without damage. Includes a wash, steam treatment, and trim.',
    price: 'from $120',
    image: IMAGES.SERVICES.SILK_PRESS,
    duration: '2 - 3 Hours',
    productsUsed: ['Design Essentials Agave & Lavender', 'Olaplex No. 3', 'Mizani Thermasmooth'],
    preparation: 'Please arrive with your hair detangled. If you have recently taken down braids, please comb through thoroughly.'
  },
  {
    id: '2',
    title: 'Braids',
    description: 'Neat, long-lasting protective styles. We offer knotless braids, fulani styles, and twists.',
    price: 'from $180',
    image: IMAGES.SERVICES.BRAIDS,
    duration: '4 - 7 Hours',
    productsUsed: ['X-Pression Pre-Stretched Hair', 'Shine \'n Jam', 'Mousse Def'],
    preparation: 'Hair must be washed, blow-dried straight, and free of oils or grease before appointment.'
  },
  {
    id: '3',
    title: 'Extensions',
    description: 'Add length and volume with our natural-looking microlinks or sew-ins.',
    price: 'Consultation Required',
    image: IMAGES.SERVICES.EXTENSIONS,
    duration: '3 - 5 Hours',
    productsUsed: ['Raw Indian Bundles', 'Nylon Thread', 'Bead Links'],
    preparation: 'A consultation is mandatory at least 48 hours prior to booking this service to match texture and color.'
  },
  {
    id: '4',
    title: 'Color Services',
    description: 'Vibrant hair color that is safe for textured hair. From highlights to full coverage.',
    price: 'from $200',
    image: IMAGES.SERVICES.COLOR,
    duration: '3 - 4 Hours',
    productsUsed: ['Wella Professionals', 'Joico K-PAK', 'Olaplex Bond Builder'],
    preparation: 'Do not wash your hair 24 hours prior to the appointment. Avoid heavy styling products.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Amara Okeke',
    role: 'Client',
    content: "Auntie Alice is the only one I trust with my hair. My silk press lasted 3 weeks even in humidity!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: '2',
    name: 'Jasmine Davis',
    role: 'Client',
    content: "I flew in just for this appointment. The Center is beautiful and my hair looks perfect.",
    image: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=200&auto=format&fit=crop"
  }
];