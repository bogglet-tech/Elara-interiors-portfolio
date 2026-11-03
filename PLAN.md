# Elara Interiors: website plan (v2 redesign, 2026-11-04)

> v1 (arch motif, white/grey bands, Gloock + Open Sans) was rejected as old and dull. v2 follows DLife's
> section order more closely and lifts its look directly from the brand book. The v1 plan is kept below for reference.

## Direction: "the brand book, as a website"

The brand book already looks premium: a cream page, very large mocha serif type, moody golden-lit interiors, and photos
that overlap each other and colour blocks. v2 recreates those compositions on the web instead of inventing a new motif.

| Brand book slide | Becomes |
|---|---|
| Cover: cream left with huge serif, square photo plus a full-height photo on the right, mocha bar along the bottom | **Home hero.** The full-height photo is a slow crossfade slider (DLife rotating banners). The mocha bar holds DLife's feature strip. |
| Brand introduction: photo with an overlapping sand square holding the logo | **About intro** block |
| Colour palette: a huge faded ELARA logo watermark | **Footer** watermark |
| Thank you: "Let’s create something amazing together" | **Consultation CTA** headline |

### Tokens
- Colour: cream `#F7EFE8` (page), mocha `#674230` (type, buttons), espresso `#3F2A1F` (dark sections), sand `#BC9A77` (accent and price), warm grey `#DEDFDA` (fields and hairlines), white.
- Type: **Bodoni Moda** 400/500 for display (closest free match to the brand's The Seasons at large sizes). **Jost** 300–500 for body and UI (geometric, echoing the logo’s INTERIOS lettering). Very large display sizes, up to 112px.
- Photography: dark, warm, golden-lit rooms. The bright white catalogue photos were dropped.
- Shape: square corners on photos. A 999px pill radius on buttons and chips only.
- Motion: the hero crossfade slider, a single clip-reveal on editorial photos as they enter the viewport, and a header that turns solid on scroll. Reduced motion turns all of it off.

### Home (DLife order)
1. Hero: brand cover composition with a crossfading slider. CTAs are Free estimate and WhatsApp.
2. Mocha strip: 4 promises with icons (DLife stats row, without invented numbers).
3. Package offers: 2 BHK and 4 BHK, plus a third "custom / villa" card (DLife shows 3 offers). Full inclusions open in a dialog.
4. Intro: editorial overlap of two photos plus the brand tagline.
5. What we design: large hover rows that swap a preview photo (thumbnails on mobile), and a "Talk to a designer" CTA.
6. Process: espresso band with 5 numbered steps (a real sequence).
7. Made to measure: full-bleed moody photo with production copy (the DLife "factory" section analogue).
8. Our work: horizontal photo rail linking to the gallery.
9. Consultation: "Let’s create something amazing together" with photo and form (DLife "Book a free consultation").
10. Footer: espresso with a giant faded logo watermark.

Inner pages open with a DLife-style full-width photo banner (title bottom-left, dark gradient).

---

## v1 plan (superseded)

Astro static site, 5 pages plus 2 legal pages, built to the scope in the Citex quotation (01/10/2026).
DLife Interiors is the main structural reference; Lemon Interiors is secondary.

## 1. The idea

**The arch is the doorway into the home.**

Look at the logo: each "A" is a rounded arch with a diamond set inside it, like a temple doorway with a lamp at its threshold, or the arched openings of a Chettinad or Kerala tharavad home. The site takes this one shape and uses it everywhere it means something:

- Photographs of finished rooms sit inside arch-topped frames, so you look *through a doorway* into each home.
- The small diamond from the logo marks the active nav item, list bullets in package inclusions, and the step markers in the process.
- Nothing else is decorative. No paisley borders, mandalas, or gold foil. The Indian character comes from the architecture of the frame, the materials in the photos (teak, cane, brass, stone), and restraint.

This is where the boldness goes. Everything else stays quiet.

## 2. Tokens

### Color (brand book palette only)

| Token | Hex | Role |
|---|---|---|
| `--mocha` | `#674230` | Primary text on light, headings, primary buttons, dark section backgrounds |
| `--mocha-deep` | `#3F2A1F` | Footer and the dark "icon collection" ground in the brand book; body text |
| `--sand` | `#BC9A77` | Accent: diamonds, arch outlines, prices, hover states. Never used for body text (fails contrast on white) |
| `--stone` | `#DEDFDA` | Warm grey section grounds, form fields, alternating bands |
| `--white` | `#FFFFFF` | Main page ground |
| `--blush` | `#F6EEE7` | Brand book page tint, used sparingly behind the packages band only |

Grounds alternate white → stone → mocha. This avoids the generic warm-cream site and matches the brand book's own primary-logo slide (mocha on warm grey).

### Type

- **Display:** *The Seasons* (the brand book typeface). It is a commercial font (Adobe Fonts). If there is no license, use **Gloock** (Google Fonts), which has the same soft, high-contrast serif feel.
- **Body and UI:** **Open Sans** (brand book), 400/600, 17px base, 1.65 line height, 68ch max measure.
- Scale (1.333, perfect fourth): 14 / 17 / 22 / 30 / 40 / 53 / 71 px. The hero headline goes to 71–88px on desktop and 40px on mobile.
- Headings use sentence case. No all-caps eyebrow labels. The only spaced capitals are in the logo's own "INTERIOS" wordmark.

### Shape and motion

- Radius is used deliberately. Arch frames: `border-radius: 50% 50% 0 0 / 30% 30% 0 0` on images. Buttons and inputs: 2px. Cards: none, separated by space and the stone ground.
- One orchestrated moment: on load, the hero arch "opens". The photo scales from 1.08 to 1 inside the arch while the headline settles in. No scroll-triggered fades on every section.
- Motion only responds to the user after that: gallery lightbox, package "what's included" expand, mobile menu. `prefers-reduced-motion` disables the hero animation.

## 3. Site map

| Page | URL | From quotation |
|---|---|---|
| Home | `/` | Hero, intro, services, featured works, highlights, CTAs, WhatsApp, footer |
| About | `/about` | Story, vision, mission, approach |
| Services | `/services` | 5-stage service + 5 interior categories + packages |
| Gallery | `/gallery` | Filterable by room: Living, Kitchen, Bedroom, Wardrobe, Dining, Commercial |
| Contact | `/contact` | Details, form, map, hours, socials |
| Privacy Policy | `/privacy-policy` | Footer link |
| Terms & Conditions | `/terms` | Footer link |

Always present: a utility bar (call / WhatsApp / email), a sticky header with a "Get a free estimate" button, a floating WhatsApp button, and on mobile a bottom bar with Call, WhatsApp and Estimate.

## 4. Home page layout (DLife order, adapted)

DLife leads with packages straight after the hero and puts an enquiry form beside nearly every CTA. We keep that sales logic but with far fewer, better-composed sections.

```
┌───────────────────────────────────────────────────────────────┐
│ ☎ +91 …   WhatsApp   hello@…                 [stone, 36px]    │
├───────────────────────────────────────────────────────────────┤
│ ELARA logo     Home About Services Gallery Contact  [Estimate]│
├───────────────────────────────────────────────────────────────┤
│  Homes designed                        ╭───────────╮          │
│  around how you live.                 ╱      ◆      ╲         │  1 HERO
│                                      │   room photo  │        │  white ground, left-aligned text,
│  Interiors for apartments, villas    │   inside the  │        │  arch photo right
│  and independent homes, from first   │     arch      │        │
│  sketch to handover.                 │               │        │
│  [Get a free estimate] [WhatsApp us] └───────────────┘        │
├───────────────────────────────────────────────────────────────┤
│  Complete home packages                         [blush]       │  2 PACKAGES
│  ┌──────────────────────┐  ┌──────────────────────┐           │  two side-by-side offers
│  │ 2 BHK      ₹5,00,000 │  │ 4 BHK      ₹7,50,000 │           │  "What's included" expands to
│  │ 6 rooms covered      │  │ 8 rooms covered      │           │  the real room-by-room list
│  │ ◆ Living ◆ Dining …  │  │ ◆ Living ◆ Dining …  │           │
│  │ [What's included ▾]  │  │ [What's included ▾]  │           │
│  │ [Get this package]   │  │ [Get this package]   │           │
│  └──────────────────────┘  └──────────────────────┘           │
├───────────────────────────────────────────────────────────────┤
│  ╭────╮                                                       │  3 INTRO
│  │img │   Houses become homes when they're                    │  stone ground, short about +
│  │    │   planned around the people in them.                  │  link to /about
│  ╰────╯   (company description, 2 short paragraphs)           │
├───────────────────────────────────────────────────────────────┤
│  What we design                                               │  4 SERVICES
│  ╭──╮ Modular kitchens  ╭──╮ Bedrooms  ╭──╮ Living & dining   │  5 arch-topped tiles,
│  ╭──╮ Wardrobes         ╭──╮ Bespoke furniture                │  horizontal scroll on mobile
├───────────────────────────────────────────────────────────────┤
│  From first visit to after-sales           [mocha ground]     │  5 PROCESS
│  ◆1 Consultation ─ ◆2 Design ─ ◆3 Production ─               │  numbered because it IS a
│  ◆4 Execution ─ ◆5 After-sales service                        │  sequence (their service list)
│                              [Book a consultation]            │
├───────────────────────────────────────────────────────────────┤
│  Recent homes                                                 │  6 FEATURED WORK
│  ╭─────────╮ ╭────╮ ╭────╮                                    │  asymmetric grid, 6 images,
│  │  large  │ │    │ │    │                                    │  link to /gallery
│  ╰─────────╯ ╰────╯ ╰────╯                                    │
├───────────────────────────────────────────────────────────────┤
│  Why homeowners choose Elara                                  │  7 HIGHLIGHTS
│  Space planning · Quality materials · One coordinator ·       │  4 short statements,
│  Transparent pricing                                          │  no icons-in-circles
├───────────────────────────────────────────────────────────────┤
│  What clients say  (only when real testimonials exist)        │  8 TESTIMONIALS
├───────────────────────────────────────────────────────────────┤
│  Tell us about your home.   │ Name / Phone / Email            │  9 ENQUIRY
│  We'll call you back within │ Home type ▾  Requirement ▾      │  mocha ground, form right
│  one working day.           │ Message      [Request a call]   │
├───────────────────────────────────────────────────────────────┤
│  logo + line │ Pages │ Services │ Contact │ socials           │  FOOTER (mocha-deep)
│  © 2026 Elara Interiors · Privacy · Terms                     │
└───────────────────────────────────────────────────────────────┘
```

Alignment: text is left-aligned throughout. The only centered element is the process row on desktop. Content width is 1240px, gutters 24px on mobile and 48px on desktop.

### Other pages

- **About:** an arch hero image, the company story, vision and mission as two columns (mirrors the brand book slide), and the approach in 3 short paragraphs. Ends with the enquiry block.
- **Services:** a 5-stage service timeline (Consultation, Interior design, Production, Execution, After-sales), each with a 2-line plain description. Then 5 interior categories with arch images and what each includes, then the packages block reused from home.
- **Gallery:** filter chips by room, a masonry grid, and a lightbox with keyboard navigation. Images are Astro-optimized (AVIF/WebP, lazy).
- **Contact:** the full enquiry form, phone, WhatsApp, email, address, hours, an embedded Google Map (click-to-load so it doesn't slow the page), and socials.

## 5. Technical plan

- **Astro 5**, static output, no UI framework. Small vanilla JS islands for the menu, package expand, gallery filter and lightbox, and form submit.
- `astro:assets` `<Image>`/`<Picture>` for every photo. Fonts self-hosted with `font-display: swap`.
- **Content:** packages, services, gallery items and business info live in `src/data/*.ts`. The client can update a price or add photos without touching layout code.
- **Enquiry form + email notification:** Web3Forms (free, static-friendly, emails each enquiry to the business address) with a honeypot field. A success state reads "Thanks, we've got your request. We'll call you within one working day."
- **SEO / GEO / AGO (from the quotation):** per-page title and meta description, `@astrojs/sitemap`, `robots.txt`, OpenGraph image, and `LocalBusiness` + `HomeAndConstructionBusiness` JSON-LD with address, hours, phone and `Offer` entries for the two packages. Add an FAQ section on Services with `FAQPage` schema for AI answer engines, and `llms.txt`.
- **Accessibility:** visible focus rings in sand on mocha and mocha on white, alt text on every image, form labels, and a 44px minimum tap target.
- **Hosting:** Netlify or Vercel free tier, or any static host / cPanel (Astro builds to plain HTML).

## 6. Review against the brief: what I changed

1. **Cream-and-serif default.** I first drafted a cream background with a serif display, which is the generic "luxury interior" page. I changed it to white and warm-grey grounds with mocha bands, which is what the brand book's own logo slides do. Blush is now limited to the packages band.
2. **"Indian aesthetic" via ornament.** My first idea was jaali-pattern section dividers and gold mandala corners. That is decoration any Indian-themed template would add. I replaced it with the arch-and-diamond taken directly from the logo letterforms, so the Indian architectural reference belongs to *this* brand.
3. **Stats strip.** Both reference sites lead with big numbers ("15+ years", "300+ projects"). Elara hasn't given us any figures, and invented numbers would be dishonest, so there is no stats strip until real ones exist.
4. **Testimonials.** These are hidden until real client quotes are supplied, for the same reason.
5. **Numbered markers.** These are used only for the 5-stage process, which really is a sequence. Package room lists use diamonds, not 01/02/03.

## 7. Content gaps and inconsistencies to resolve

- **Name spelling:** the logo and brand book say "ELARA INTERIOS", but the company details say "ELARA INTERIORS". The plan uses "Elara Interiors" in text and the logo artwork as supplied.
- **Packages:** there are only 2 BHK (₹5,00,000) and 4 BHK (₹7,50,000), with no 3 BHK. The 4 BHK price in the PDF is written "₹750000.lakh", so the site shows ₹7,50,000. The 4 BHK list has the same living, dining and kitchen as the 2 BHK. Confirm both.
- **Missing:** phone, WhatsApp number, email, address, city, business hours, social links, project photos, testimonials, years and projects figures, and Privacy/Terms text (the quotation says the client provides or approves these).

## 8. Decisions (confirmed 2026-11-03)

- **Photos:** licensed Unsplash interiors as marked placeholders in `src/data/`, to be swapped for the client's real project photos.
- **Display font:** Gloock (free, self-hosted) in place of The Seasons. Body: Open Sans.
- **Enquiry form:** dummy handler for now (client-side success state, no delivery). Wire to Web3Forms or similar later.
- **Hosting:** Netlify or Vercel, static build.
