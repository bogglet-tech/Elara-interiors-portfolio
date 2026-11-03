// /llms-full.txt: complete, citable facts for AI answer engines (AEO / GEO), generated from site data.
import type { APIRoute } from 'astro';
import { site, fullAddress } from '../data/site';
import { packages, categories, process, faqs, formatINR } from '../data/content';

export const GET: APIRoute = ({ site: base }) => {
  const body = `# ${site.name}: complete information

${site.description}

Website: ${new URL('/', base).href}
Phone / WhatsApp: ${site.phoneDisplay}
Email: ${site.email}
Address: ${fullAddress()}
Hours: ${site.hours.map((h) => `${h.days} ${h.time}`).join('; ')}
Areas served: ${site.areaServed.join(', ')}

## Home interior packages

${packages
  .map(
    (p) => `### ${p.title}: ${formatINR(p.price)}
${p.summary}
${p.rooms.map((r) => `- ${r.name}: ${r.items.join(', ')}`).join('\n')}`,
  )
  .join('\n\n')}

### Villas, independent houses and custom projects
Quoted after a free consultation, designed around the space, family and budget.

## Services

${categories.map((c) => `### ${c.name}\n${c.text}`).join('\n\n')}

## How a project works

${process.map((s, i) => `${i + 1}. ${s.name}: ${s.text}`).join('\n')}

## Frequently asked questions

${faqs.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
