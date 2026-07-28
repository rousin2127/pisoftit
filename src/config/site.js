export const siteConfig = {
  name: 'PAISOFT IT',
  tagline: 'Thoughtful software for businesses that want to grow with confidence.',
  contact: {
    email: 'info@paisoftit.com',
    phone: '+8801755191900',
    phoneDisplay: '+880 1755-191900',
    address: 'House 4, Lane 10, Mirpur 2, Dhaka-1216, Bangladesh',
    hours: 'Sunday – Thursday: 9:00 AM – 6:00 PM (GMT+6)',
  },
  stats: [
    { value: '100+', label: 'Projects Delivered' },
    { value: '10+', label: 'Years Experience' },
    { value: '20+', label: 'Team Members' },
    { value: '24/7', label: 'Technical Support' },
  ],
  navigation: [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'Web App Solutions', path: '/services#web-app-solutions' },
        { name: 'E-commerce Development', path: '/services#ecommerce-development' },
        { name: 'Corporate Web Design', path: '/services#corporate-web-design' },
        { name: 'POS Software Management', path: '/services#pos-software-management' },
        { name: 'ERP Solution', path: '/services#ml-deep-learning' },
        { name: 'Mobile App Development', path: '/services#flask-api-development' },
      ],
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Blog', path: '/blog' },
    { name: 'Career', path: '/career' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
};
