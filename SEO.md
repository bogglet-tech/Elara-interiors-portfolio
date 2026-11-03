# SEO, AEO, GEO and AI readiness

What is built into the site, and what still needs real business details before launch.

## Built in

### SEO (search engines)
- Unique `<title>` and meta description on every page, one `<h1>` per page, descriptive image `alt` text.
- Canonical URL, `hreflang` (en-IN + x-default), `robots` meta (`noindex` on the 404 page).
- Open Graph + Twitter card tags with a 1200×630 share image and alt text.
- Favicons, Apple touch icon, `site.webmanifest`.
- Optimised images (AVIF/WebP, responsive sizes, lazy loading), self-hosted fonts, static HTML.
- Clean URLs (`/about`, not `/about.html`): `vercel.json` and `netlify.toml` included.

### Structured data (JSON-LD, one linked graph per page, `src/lib/seo.ts`)
- `HomeAndConstructionBusiness` / `LocalBusiness`: name, logo, phone, email, address, opening hours, contact point,
  area served, price range, social profiles, and an offer catalogue with both packages (price in INR + full inclusions)
  and every service.
- `WebSite`, plus the right page type: `WebPage`, `AboutPage`, `ContactPage`, `CollectionPage` (gallery).
- `BreadcrumbList` on inner pages, `Service` for each thing we design, `ItemList` for the 5-stage process.
- `FAQPage` on Services (matches the visible FAQ).

### Sitemap
- `/sitemap-index.xml` (auto-generated): last-modified date, change frequency and priority per page; 404 excluded.
- Linked from `robots.txt` and the page `<head>`.

### AEO (answer engines) and GEO (generative engines)
- `robots.txt` explicitly allows AI search crawlers: OpenAI (GPTBot, OAI-SearchBot, ChatGPT-User),
  Anthropic (ClaudeBot, Claude-SearchBot, Claude-User), Perplexity, Google-Extended (Gemini / AI Overviews),
  Apple, Bing/Copilot, DuckDuckGo, Meta, Common Crawl.
- `/llms.txt`: short plain-language summary for AI assistants (llmstxt.org format).
- `/llms-full.txt`: every package inclusion, the 5-stage process and all FAQ answers, in citable form.
- Both are generated from `src/data/*.ts`, so they always match the website.
- Question-and-answer FAQ with direct, factual answers (prices, inclusions, process) for AI answers and featured snippets.

### Local GEO (geographic)
- `geo.region` meta, plus `geo.placename`, `geo.position`, `ICBM` and schema `GeoCoordinates` that switch on
  automatically once real details are filled in (below).

## Needed from Elara before launch

All in `src/data/site.ts` unless noted:

- [ ] **Domain**: `SITE` in `astro.config.mjs` (everything else follows from it).
- [ ] **NAP**: exact business name, street address, city, PIN, phone. Must match Google Business Profile word for word.
- [ ] **Coordinates**: `geo: { lat, lng }` from Google Maps (right-click the studio location).
- [ ] **Region code**: e.g. `'IN-KL'` for Kerala, and `areaServed` cities.
- [ ] **Languages spoken** by the team.
- [ ] **Opening hours** and **social profile URLs**.
- [ ] **Search Console / Bing verification codes**: `verification.google`, `verification.bing`.

## After launch (off-site, the client's accounts)

- [ ] Create/claim **Google Business Profile** (biggest single factor for "interior designers near me"); add photos,
      services, the 2 BHK / 4 BHK packages, and ask happy clients for Google reviews.
- [ ] Submit `https://<domain>/sitemap-index.xml` in **Google Search Console** and **Bing Webmaster Tools**
      (Bing also feeds ChatGPT search and Copilot).
- [ ] List the business consistently (same NAP) on Justdial, Sulekha, Houzz, IndiaMART, Facebook and Instagram.
- [ ] Replace stock photos with real project photos (with descriptive file names and alt text).
- [ ] Optional: add real client testimonials; then `Review` / `AggregateRating` schema can be added. Never add ratings
      that aren't real.
