import bannerImg from '../assets/banner_0004.jpg';
import teamImg from '../assets/team.jpg';
import inrImg from '../assets/inr.jpg';
import bannerBg from '../assets/banner_bg.jpg';

export const caseStudies = [
  {
    id: '1',
    title: 'Enterprise Web Application',
    category: 'Web App',
    description:
      'Custom web application built for a growing business to manage operations, reporting, and team workflows from a single dashboard.',
    image: bannerImg,
    client: 'Confidential Client',
    technologies: ['React', 'Spring Boot', 'PostgreSQL'],
    results: [
      'Centralized business operations in one platform',
      'Reduced manual reporting time significantly',
      'Scalable architecture for future modules',
    ],
  },
  {
    id: '2',
    title: 'E-commerce Store Development',
    category: 'E-commerce',
    description:
      'Full-featured online store with product catalog, secure checkout, order management, and admin panel for inventory control.',
    image: inrImg,
    client: 'Retail Business',
    technologies: ['React', 'Node.js', 'MongoDB'],
    results: [
      'Mobile-responsive shopping experience',
      'Secure payment and order tracking',
      'Admin dashboard for product management',
    ],
  },
  {
    id: '3',
    title: 'POS Software Management',
    category: 'POS Software',
    description:
      'Subscription-based POS management system for retail outlets with billing, inventory sync, and multi-branch reporting.',
    image: teamImg,
    client: 'Retail & Hospitality',
    technologies: ['React', 'Java', 'PostgreSQL'],
    results: [
      'Real-time inventory across branches',
      'Automated billing and receipt generation',
      'Cloud-based subscription management',
    ],
  },
  {
    id: '4',
    title: 'Corporate IT Website',
    category: 'Web Design',
    description:
      'Professional corporate website with modern design, fast performance, and CMS-friendly structure for content updates.',
    image: bannerBg,
    client: 'IT & Corporate Sector',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    results: [
      'Improved brand presence online',
      'Fast page load and mobile optimization',
      'Easy content management for the client team',
    ],
  },
];
