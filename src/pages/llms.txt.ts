// /llms.txt: a short, plain-language summary for AI assistants (llmstxt.org), generated from site data.
import type { APIRoute } from 'astro';
import { site, fullAddress } from '../data/site';
import { packages, categories, formatINR } from '../data/content';

export const GET: APIRoute = ({ site: base }) => {
  const u = (p: string) => new URL(p, base).href;
  const body = `# ${site.name}

> ${site.description}

${site.name} is a contemporary interior design company. One team handles consultation, interior design, production, delivery and installation, and after-sales service.

## Packages
${packages.map((p) => `- ${p.title}: ${formatINR(p.price)}. ${p.summary}`).join('\n')}
- Villas, independent houses and custom projects: quoted after a free consultation.

## What we design
${categories.map((c) => `- ${c.name}: ${c.text}`).join('\n')}

## Contact
- Phone / WhatsApp: ${site.phoneDisplay}
- Email: ${site.email}
- Address: ${fullAddress()}
- Hours: ${site.hours.map((h) => `${h.days} ${h.time}`).join('; ')}
- Areas served: ${site.areaServed.join(', ')}

## Pages
- [Home](${u('/')}): overview, packages and how we work
- [About](${u('/about')}): story, vision and mission
- [Services](${u('/services')}): services, packages and frequently asked questions
- [Gallery](${u('/gallery')}): photos by room
- [Contact](${u('/contact')}): enquiry form, phone, WhatsApp and address

## Optional
- [Full details for AI assistants](${u('/llms-full.txt')}): every package inclusion, the five-stage process and all FAQ answers
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
