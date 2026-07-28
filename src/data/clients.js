import clientTechStack from '../assets/client.png';
import clientTechStackAlt from '../assets/clients1.png';

export const clients = [
  { id: 'velora-cotton', name: 'Velora Cotton', initials: 'VC' },
  { id: 'creative-source', name: 'Creative Source', initials: 'CS' },
];

export const clientShowcases = [
  {
    id: 'velora-cotton',
    name: 'Velora Cotton',
    brandColor: '#0d9488',
    techStack: clientTechStack,
    quote:
      'PaiSoft IT built our e-commerce platform from the ground up — product catalog, checkout, order tracking, and admin tools all in one place. The site is fast, easy for our team to manage, and our customers love the shopping experience. They understood our brand from day one and delivered a store we are proud to run every day.',
    caseStudyId: 'velora-cotton',
  },
  {
    id: 'creative-source',
    name: 'Creative Source',
    brandColor: '#ea580c',
    techStack: clientTechStackAlt,
    quote:
      'We needed a full-featured online store for computers and accessories — with categories, deals, search, and a smooth checkout flow. PaiSoft IT delivered a scalable platform with clean design, reliable performance, and the backend tools our team needs to manage inventory and orders without friction. A strong partner for growing retail businesses.',
    caseStudyId: 'creative-source',
  },
];
