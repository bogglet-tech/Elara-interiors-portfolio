// Business details used across the site, footer, contact page and structured data.
// DUMMY VALUES: every field marked TODO must be replaced with Elara's real details before launch.

export const site = {
  name: 'Elara Interiors',
  legalName: 'Elara Interiors',
  tagline: 'Homes designed around the way you live.',
  description:
    'Elara Interiors designs and builds complete home interiors for apartments, villas and independent homes: modular kitchens, bedrooms, living and dining spaces, wardrobes and bespoke furniture.',

  phoneDisplay: '+91 98765 43210', // TODO: real phone
  phoneHref: 'tel:+919876543210', // TODO
  whatsappNumber: '919876543210', // TODO: WhatsApp number, country code, no "+" or spaces
  email: 'hello@elarainteriors.in', // TODO

  address: {
    street: 'Studio address line', // TODO
    locality: 'City', // TODO
    region: 'State', // TODO
    postalCode: '000000', // TODO
    country: 'IN',
  },
  mapQuery: 'Elara Interiors', // TODO: exact address or Google Maps place name

  /* ---- SEO / local GEO ---- */
  // Map coordinates of the studio. Geo meta tags and schema GeoCoordinates only render once both are set.
  geo: { lat: null as number | null, lng: null as number | null }, // TODO e.g. { lat: 9.9312, lng: 76.2673 }
  regionCode: 'IN', // TODO: ISO 3166-2 once the state is known, e.g. 'IN-KL'
  areaServed: ['City'], // TODO: cities / districts served, e.g. ['Kochi', 'Thrissur', 'Kottayam']
  languages: ['English'], // TODO: add 'Malayalam', 'Hindi', etc. if the team speaks them
  priceRange: '₹₹',
  // Search engine verification codes (leave empty until you have them)
  verification: { google: '', bing: '' }, // TODO

  hours: [
    { days: 'Monday to Saturday', time: '9:30 am to 6:30 pm', schema: 'Mo-Sa 09:30-18:30' }, // TODO
    { days: 'Sunday', time: 'By appointment', schema: '' },
  ],

  socials: [
    // TODO: real profile URLs. Remove any the client doesn't use.
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Pinterest', href: 'https://www.pinterest.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
};

export const whatsappLink = (text = 'Hi Elara Interiors, I would like to discuss interiors for my home.') =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const fullAddress = () => {
  const a = site.address;
  return `${a.street}, ${a.locality}, ${a.region} ${a.postalCode}`;
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];
