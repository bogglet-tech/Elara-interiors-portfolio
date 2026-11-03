// Structured data (JSON-LD) for search engines and AI answer engines.
// One linked graph: Organisation/LocalBusiness + WebSite + WebPage (+ breadcrumbs, services, offers).
import { site } from '../data/site';
import { packages, categories, process } from '../data/content';

export type PageKind = 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';

const DAY = { Mo: 'Monday', Tu: 'Tuesday', We: 'Wednesday', Th: 'Thursday', Fr: 'Friday', Sa: 'Saturday', Su: 'Sunday' } as const;
const ORDER = Object.keys(DAY) as (keyof typeof DAY)[];

/** 'Mo-Sa 09:30-18:30' → OpeningHoursSpecification */
const hoursSpec = () =>
  site.hours
    .filter((h) => h.schema)
    .map((h) => {
      const [days, times] = h.schema.split(' ');
      const [a, b] = days.split('-') as (keyof typeof DAY)[];
      const range = b ? ORDER.slice(ORDER.indexOf(a), ORDER.indexOf(b) + 1) : [a];
      const [opens, closes] = times.split('-');
      return { '@type': 'OpeningHoursSpecification', dayOfWeek: range.map((d) => DAY[d]), opens, closes };
    });

export function buildGraph(opts: {
  siteUrl: URL;
  pageUrl: string;
  title: string;
  description: string;
  imageUrl: string;
  logoUrl: string;
  kind: PageKind;
  breadcrumb: { name: string; url: string }[];
}) {
  const { siteUrl, pageUrl, title, description, imageUrl, logoUrl, kind, breadcrumb } = opts;
  const id = (frag: string) => new URL(`/#${frag}`, siteUrl).href;
  const abs = (path: string) => new URL(path, siteUrl).href;
  const hasGeo = site.geo.lat !== null && site.geo.lng !== null;

  const business = {
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    '@id': id('business'),
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    slogan: site.tagline,
    url: siteUrl.href,
    logo: { '@type': 'ImageObject', url: logoUrl },
    image: imageUrl,
    telephone: site.phoneDisplay.replace(/\s/g, ''),
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: 'INR',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    ...(hasGeo && { geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng } }),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapQuery)}`,
    areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: hoursSpec(),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneDisplay.replace(/\s/g, ''),
      email: site.email,
      contactType: 'customer service',
      areaServed: site.address.country,
      availableLanguage: site.languages,
    },
    sameAs: site.socials.map((s) => s.href),
    knowsAbout: [
      'Interior design',
      'Home interiors',
      'Modular kitchens',
      'Bedroom interiors',
      'Wardrobes',
      'Living and dining room interiors',
      'Bespoke furniture',
      'Apartment interiors',
      'Villa interiors',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home interior packages and services',
      itemListElement: [
        ...packages.map((p) => ({
          '@type': 'Offer',
          name: p.title,
          description: `${p.summary} Includes: ${p.rooms.map((r) => `${r.name} (${r.items.join(', ')})`).join('; ')}.`,
          price: p.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: abs('/#packages'),
          itemOffered: { '@type': 'Service', name: p.title, serviceType: 'Home interior design and execution' },
        })),
        ...categories.map((c) => ({
          '@type': 'Offer',
          itemOffered: { '@id': id(`service-${c.id}`) },
        })),
      ],
    },
  };

  const services = categories.map((c) => ({
    '@type': 'Service',
    '@id': id(`service-${c.id}`),
    name: c.name,
    serviceType: c.name,
    description: c.text,
    provider: { '@id': id('business') },
    areaServed: site.areaServed,
    url: abs(`/services#${c.id}`),
  }));

  const howWeWork = {
    '@type': 'ItemList',
    '@id': id('process'),
    name: 'How Elara Interiors delivers a home interior project',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: process.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, description: s.text })),
  };

  const website = {
    '@type': 'WebSite',
    '@id': id('website'),
    url: siteUrl.href,
    name: site.name,
    description: site.description,
    inLanguage: 'en-IN',
    publisher: { '@id': id('business') },
  };

  const crumbs =
    breadcrumb.length > 1
      ? {
          '@type': 'BreadcrumbList',
          '@id': `${pageUrl}#breadcrumb`,
          itemListElement: breadcrumb.map((b, i) => ({ '@type': 'ListItem', position: i + 1, name: b.name, item: b.url })),
        }
      : null;

  const page = {
    '@type': kind,
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'en-IN',
    isPartOf: { '@id': id('website') },
    about: { '@id': id('business') },
    primaryImageOfPage: { '@type': 'ImageObject', url: imageUrl },
    dateModified: new Date().toISOString().slice(0, 10),
    ...(crumbs && { breadcrumb: { '@id': crumbs['@id'] } }),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, website, page, ...services, howWeWork, ...(crumbs ? [crumbs] : [])],
  };
}
