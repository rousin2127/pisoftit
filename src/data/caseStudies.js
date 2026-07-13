import veloraImg from '../assets/cl.png';
import creativeSourceImg from '../assets/cp.png';
import unityTourismImg from '../assets/tr.png';

export const caseStudies = [
  {
    id: 'velora-cotton',
    title: 'Velora Cotton',
    category: 'E-commerce',
    status: 'completed',
    statusLabel: 'Completed & Handed Over',
    description:
      'A full-featured online clothing store for Velora Cotton — a premium cotton apparel brand. Includes product catalog, category browsing, search, wishlist, cart, and order tracking. Project completed and successfully handed over to the client.',
    image: veloraImg,
    client: 'Velora Cotton',
    technologies: ['React', 'Node.js', 'Tailwind CSS'],
    results: [
      'Modern storefront for premium cotton apparel',
      'Category browsing, search, wishlist & cart',
      'Order tracking and customer-ready checkout flow',
      'Fully completed and handed over to the client',
    ],
  },
  {
    id: 'creative-source',
    title: 'Creative Source',
    category: 'E-commerce',
    status: 'developing',
    statusLabel: 'In Development',
    description:
      'An e-commerce platform for computers and accessories — laptops, desktops, monitors, PC components, gaming gear, and more. Currently under active development with hot deals, product filtering, and store locator features.',
    image: creativeSourceImg,
    client: 'Creative Source',
    technologies: ['React', 'Node.js', 'MongoDB'],
    results: [
      'Product catalog for computers & accessories',
      'Hot deals, offers, and category navigation',
      'Search, cart, and store locator modules',
      'Currently in active development',
    ],
  },
  {
    id: 'unity-tourism',
    title: 'Unity Tourism Limited',
    category: 'Web App',
    status: 'developing',
    statusLabel: 'In Development',
    description:
      'A tourism website for Unity Tourism Limited focused on Hajj & Umrah packages, medical and student travel services. Currently in development with package browsing, booking flows, and customer login.',
    image: unityTourismImg,
    client: 'Unity Tourism Limited',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    results: [
      'Hajj & Umrah package showcase',
      'Quick search and booking-ready layout',
      'Services for medical & student travel',
      'Currently in active development',
    ],
  },
];
