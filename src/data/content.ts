import type { ImageMetadata } from 'astro';

import heroTeakBedroom from '../assets/photos/hero-teak-bedroom.jpg';
import livingArched from '../assets/photos/living-arched-windows.jpg';
import livingLeather from '../assets/photos/living-leather.jpg';
import livingPendants from '../assets/photos/living-pendants.jpg';
import livingBlue from '../assets/photos/living-blue-wall.jpg';
import livingTan from '../assets/photos/living-tan-sofa.jpg';
import livingRug from '../assets/photos/living-rug-baskets.jpg';
import livingCane from '../assets/photos/living-cane-mirrors.jpg';
import livingWide from '../assets/photos/living-wide.jpg';
import kitchenWhite from '../assets/photos/kitchen-white.jpg';
import kitchenGreen from '../assets/photos/kitchen-green.jpg';
import kitchenMarble from '../assets/photos/kitchen-marble.jpg';
import bedroomSage from '../assets/photos/bedroom-sage.jpg';
import bedroomVelvet from '../assets/photos/bedroom-velvet.jpg';
import bedroomDark from '../assets/photos/bedroom-dark.jpg';
import bedroomGrey from '../assets/photos/bedroom-grey.jpg';
import wardrobeWood from '../assets/photos/wardrobe-wood.jpg';
import diningGreen from '../assets/photos/dining-green.jpg';
import diningGarden from '../assets/photos/dining-garden.jpg';
import furnitureWall from '../assets/photos/furniture-wall-unit.jpg';
import furnitureConsole from '../assets/photos/furniture-console.jpg';
import studyGreen from '../assets/photos/study-green.jpg';
import officeStudio from '../assets/photos/office-studio.jpg';
import bedroomSlats from '../assets/photos/bedroom-slats.jpg';
import loungeDark from '../assets/photos/lounge-dark.jpg';
import bedroomSunlit from '../assets/photos/bedroom-sunlit.jpg';
import diningPendant from '../assets/photos/dining-pendant.jpg';
import bedroomLamps from '../assets/photos/bedroom-lamps.jpg';
import livingDark from '../assets/photos/living-dark.jpg';
import villaPool from '../assets/photos/villa-pool.jpg';
import diningDarkwall from '../assets/photos/dining-darkwall.jpg';
// Renders from the client's brand book (low resolution, ~740px wide: use at medium sizes only)
import goldenLiving from '../assets/brand-photos/golden-living.png';
import sofaCorner from '../assets/brand-photos/sofa-corner.png';
import greenLounge from '../assets/brand-photos/green-lounge.png';

// PLACEHOLDER PHOTOS: all images are Unsplash stock (free licence) until Elara supplies project photography.
export const photos = {
  heroTeakBedroom,
  livingArched,
  livingLeather,
  livingPendants,
  livingBlue,
  livingTan,
  livingRug,
  livingCane,
  livingWide,
  kitchenWhite,
  kitchenGreen,
  kitchenMarble,
  bedroomSage,
  bedroomVelvet,
  bedroomDark,
  bedroomGrey,
  wardrobeWood,
  diningGreen,
  diningGarden,
  furnitureWall,
  furnitureConsole,
  studyGreen,
  officeStudio,
  bedroomSlats,
  loungeDark,
  bedroomSunlit,
  diningPendant,
  bedroomLamps,
  livingDark,
  villaPool,
  diningDarkwall,
  goldenLiving,
  sofaCorner,
  greenLounge,
};

/* ---------- Packages (from the client's basic details PDF) ---------- */

export type Room = { name: string; items: string[] };
export type Package = {
  id: string;
  name: string;
  title: string;
  price: number;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
  rooms: Room[];
};

const sharedRooms: Room[] = [
  { name: 'Living room', items: ['Stylish TV unit', 'Comfortable 5-seater sofa set'] },
  { name: 'Dining area', items: ['Modern 6-seater dining table with chairs'] },
  {
    name: 'Modular kitchen',
    items: [
      'Custom-designed base and wall cabinets',
      '3 tandem drawers',
      '1 cutlery tray',
      '1 bottle pull-out',
      '1 GTPT unit',
    ],
  },
  { name: 'Common wash area', items: ['Functional wash storage unit', 'Mirror'] },
];

const bedroom = (name: string, bed = 'King-size cot'): Room => ({
  name,
  items: [bed, 'Side table', '3-door wardrobe', 'Dressing table with mirror'],
});

export const packages: Package[] = [
  {
    id: '2bhk',
    name: '2 BHK',
    title: 'Complete 2 BHK home interior',
    price: 500000,
    summary: 'Living, dining, kitchen, wash area and both bedrooms, furnished and fitted.',
    image: photos.livingDark,
    imageAlt: 'Living room with a dark feature wall, low sofa and warm lamp light',
    rooms: [...sharedRooms, bedroom('Master bedroom'), bedroom('Guest bedroom')],
  },
  {
    id: '4bhk',
    name: '4 BHK',
    title: 'Complete 4 BHK home interior',
    price: 750000,
    summary: 'Everything in the 2 BHK package, plus a kids’ bedroom and a fourth bedroom.',
    image: photos.bedroomSlats,
    imageAlt: 'Bedroom with dark wooden wall slats, a deep teal throw and warm bedside lighting',
    rooms: [
      ...sharedRooms,
      bedroom('Master bedroom'),
      bedroom('Guest bedroom'),
      bedroom('Kids’ bedroom', 'Kids’ bed'),
      bedroom('Additional bedroom', 'Bed'),
    ],
  },
];

export const formatINR = (n: number) =>
  '₹' + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);

/* ---------- What we design ---------- */

export const categories = [
  {
    id: 'kitchen',
    name: 'Modular kitchens',
    text: 'Base and wall cabinets planned around how you cook, with tandem drawers, pull-outs and tall units that keep the counter clear.',
    image: photos.kitchenGreen,
    alt: 'Modular kitchen with deep green cabinets, open shelving and a window over the sink',
  },
  {
    id: 'bedroom',
    name: 'Bedrooms',
    text: 'Beds, side tables, dressing units and lighting chosen together, so the room is calm to wake up in.',
    image: photos.bedroomSlats,
    alt: 'Bedroom with dark wooden wall slats and warm bedside lighting',
  },
  {
    id: 'living',
    name: 'Living and dining',
    text: 'TV units, seating and dining sets sized to your room, with space left to move and gather.',
    image: photos.diningPendant,
    alt: 'Dining table under a black pendant light beside a dark lounge',
  },
  {
    id: 'wardrobe',
    name: 'Wardrobes',
    text: 'Hinged and sliding wardrobes with the drawers, shelves and hanging space your clothes actually need.',
    image: photos.wardrobeWood,
    alt: 'Tall wooden wardrobe with panelled doors against a white wall',
  },
  {
    id: 'furniture',
    name: 'Bespoke furniture',
    text: 'Consoles, wall units and study tables made to fit the corners standard furniture leaves empty.',
    image: photos.furnitureConsole,
    alt: 'Entrance with a slatted wooden ceiling, slim console table and round mirror',
  },
];

/* ---------- The five-stage service (from "Services" in the client brief) ---------- */

export const process = [
  {
    name: 'Consultation',
    text: 'We visit your home, take measurements and listen to how your family uses each room. Budget and priorities are agreed here.',
  },
  {
    name: 'Interior design',
    text: 'You get room-by-room layouts with materials and finishes to choose from. We revise until the plan feels right.',
  },
  {
    name: 'Production',
    text: 'Cabinets, wardrobes and furniture are made to your measurements in the materials you approved.',
  },
  {
    name: 'Execution',
    text: 'Our team installs everything on site, with one coordinator keeping you updated at every stage.',
  },
  {
    name: 'After-sales service',
    text: 'If something needs adjusting after you move in, call us and we come back to set it right.',
  },
];

/* ---------- Why Elara (drawn from the company description) ---------- */

export const promises = [
  { icon: 'team', title: 'One team, start to finish', text: 'Design, production and installation' },
  { icon: 'ruler', title: 'Made to measure', text: 'Built for your exact room sizes' },
  { icon: 'gem', title: 'Quality materials', text: 'Boards, hardware and finishes that last' },
  { icon: 'support', title: 'After-sales service', text: 'We come back if anything needs fixing' },
];

export const highlights = [
  {
    title: 'Every square foot planned',
    text: 'Layouts are drawn to make the best use of the space you have, especially in compact city apartments.',
  },
  {
    title: 'Materials you can trust',
    text: 'Quality boards, hardware and finishes, chosen to last through daily family life.',
  },
  {
    title: 'One team, start to finish',
    text: 'Design, production and installation are coordinated by us, so you don’t manage separate vendors.',
  },
  {
    title: 'Designed for your family',
    text: 'Your routines, storage needs and taste shape each room, not a catalogue template.',
  },
];

/* ---------- Gallery ---------- */

export type GalleryItem = { image: ImageMetadata; alt: string; room: string; caption: string };

export const galleryRooms = ['Living', 'Bedroom', 'Kitchen', 'Dining', 'Wardrobe', 'Study & office', 'Villas'];

export const gallery: GalleryItem[] = [
  { image: photos.goldenLiving, room: 'Living', caption: 'Double-height living room', alt: 'Double-height living room with marble floor, cream sectional sofa and golden cove lighting' },
  { image: photos.bedroomSlats, room: 'Bedroom', caption: 'Bedroom with wooden wall slats', alt: 'Bedroom with dark wooden wall slats, teal throw and bedside lamps' },
  { image: photos.kitchenGreen, room: 'Kitchen', caption: 'Green modular kitchen', alt: 'Modular kitchen with green cabinets and light wooden flooring' },
  { image: photos.loungeDark, room: 'Living', caption: 'Lounge with a dark palette', alt: 'Tall lounge with dark walls, low sofa and pendant light' },
  { image: photos.heroTeakBedroom, room: 'Bedroom', caption: 'Teak-panelled master bedroom', alt: 'Bedroom with teak wall panelling, warm cove lighting and a dark wooden bed' },
  { image: photos.diningPendant, room: 'Dining', caption: 'Dining under a statement pendant', alt: 'Dining table under a black pendant light' },
  { image: photos.greenLounge, room: 'Living', caption: 'Lounge with green velvet sofa', alt: 'Lounge with a green velvet sofa, wooden wall slats and a low wooden table' },
  { image: photos.wardrobeWood, room: 'Wardrobe', caption: 'Panelled wooden wardrobe', alt: 'Tall wooden wardrobe with panelled doors' },
  { image: photos.bedroomSunlit, room: 'Bedroom', caption: 'Sunlit guest bedroom', alt: 'Bedroom with wooden floor, low bed and evening sun through tall windows' },
  { image: photos.livingDark, room: 'Living', caption: 'Living room with a dark feature wall', alt: 'Living room with a dark feature wall, low sofa and framed art' },
  { image: photos.diningDarkwall, room: 'Dining', caption: 'Dining with a deep blue wall', alt: 'Dining table and chairs against a deep blue wall with a chandelier' },
  { image: photos.kitchenWhite, room: 'Kitchen', caption: 'Kitchen with marble counters', alt: 'Kitchen with marble counters, glass-front wall cabinets and a range cooker' },
  { image: photos.bedroomLamps, room: 'Bedroom', caption: 'Bedroom with reading lamps', alt: 'Bedroom with an upholstered bench, reading lamps and long curtains' },
  { image: photos.sofaCorner, room: 'Living', caption: 'Reading corner', alt: 'Low beige sofa with throws beside a dark wooden wall and a plant' },
  { image: photos.studyGreen, room: 'Study & office', caption: 'Home study', alt: 'Home study with a green wall, wooden desk and shelves' },
  { image: photos.furnitureConsole, room: 'Living', caption: 'Entrance console', alt: 'Entrance with a slatted wooden ceiling, console table and round mirror' },
  { image: photos.livingLeather, room: 'Living', caption: 'Lounge with leather seating', alt: 'Sunlit lounge with a tan leather sofa, gallery wall and indoor plants' },
  { image: photos.villaPool, room: 'Villas', caption: 'Villa with pool terrace', alt: 'Modern white villa with a pool terrace and timber soffits' },
];

/* ---------- FAQ (Services page; also emitted as FAQPage structured data) ---------- */

export const faqs = [
  {
    q: 'What does Elara Interiors do?',
    a: 'We design and build complete home interiors for apartments, villas and independent homes. That covers modular kitchens, bedrooms, living and dining spaces, wardrobes and bespoke furniture, from the first consultation through production, installation and after-sales service.',
  },
  {
    q: 'How much does a complete home interior cost?',
    a: 'Our complete 2 BHK home interior package is ₹5,00,000 and our complete 4 BHK package is ₹7,50,000. Each package lists exactly what is included room by room. Custom projects are quoted after a consultation.',
  },
  {
    q: 'What is included in the 2 BHK package?',
    a: 'A TV unit and 5-seater sofa for the living room, a 6-seater dining set, a modular kitchen with base and wall cabinets, 3 tandem drawers, a cutlery tray, a bottle pull-out and a GTPT unit, a wash-area storage unit with mirror, and for both bedrooms a king-size cot, side table, 3-door wardrobe and dressing table with mirror.',
  },
  {
    q: 'Can I customise a package?',
    a: 'Yes. Packages are a starting point. Tell us what you would like to add, remove or change and we will adjust the design and quote.',
  },
  {
    q: 'Do you work on villas and independent houses?',
    a: 'Yes. Along with apartments, we design interiors for villas and independent homes, and can take on individual rooms such as a kitchen or bedroom.',
  },
  {
    q: 'What happens after installation?',
    a: 'After-sales service is part of every project. If anything needs adjusting after you move in, contact us and our team will come back to fix it.',
  },
  {
    q: 'How do I get started?',
    a: 'Send an enquiry through the website, call us or message us on WhatsApp. We will arrange a consultation to understand your home, your needs and your budget.',
  },
];

export const requirementOptions = [
  'Complete 2 BHK package',
  'Complete 4 BHK package',
  'Full home (custom)',
  'Modular kitchen',
  'Bedroom',
  'Living and dining',
  'Wardrobes',
  'Bespoke furniture',
  'Something else',
];

export const homeTypeOptions = ['Apartment', 'Villa', 'Independent house', 'Office or commercial space'];
