// robots.txt, generated so the domain comes from astro.config `site`.
// AI search / answer-engine crawlers are explicitly welcomed (GEO): being readable by them is how the
// business gets cited in ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews.
import type { APIRoute } from 'astro';

const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', // OpenAI
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', // Anthropic
  'PerplexityBot', 'Perplexity-User', // Perplexity
  'Google-Extended', // Gemini / AI Overviews
  'Applebot', 'Applebot-Extended', // Apple
  'Bingbot', // Bing + Copilot
  'DuckAssistBot', 'meta-externalagent', 'CCBot',
];

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('/sitemap-index.xml', site).href;
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /404',
    '',
    '# AI search and answer engines are welcome',
    ...aiBots.map((b) => `User-agent: ${b}\nAllow: /`),
    '',
    `Sitemap: ${sitemap}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
