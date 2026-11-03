# Elara Interiors website

Static Astro site: Home, About, Services, Gallery, Contact, Privacy Policy, Terms, 404. The design rationale is in `PLAN.md`.

## Run

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview   # serve the built site
```

Deploy to Netlify or Vercel: import the repo. The build command is `npm run build` and the output folder is `dist`. Both platforms detect Astro automatically.

## Where to edit content

| What | File |
|---|---|
| Phone, WhatsApp, email, address, hours, socials, map | `src/data/site.ts` |
| Packages, services, process, highlights, gallery, FAQ, form dropdowns | `src/data/content.ts` |
| Photos | `src/assets/photos/` (update the imports in `content.ts`) |
| Logo / favicon | `src/assets/brand/`, `public/favicon*`, `public/apple-touch-icon.png` |
| Colours, type scale | `src/styles/global.css` (`:root` tokens) |
| Legal text | `src/pages/privacy-policy.astro`, `src/pages/terms.astro` |

## Before launch (placeholders still in the site)

- [ ] **Contact details**: every `TODO` in `src/data/site.ts` holds a dummy phone, WhatsApp number, email, address, hours or social URL.
- [ ] **Domain**: `site` in `astro.config.mjs`, `public/robots.txt` and `public/llms.txt` use `www.elarainteriors.in`.
- [ ] **Photos**: all images are Unsplash stock placeholders. Replace them with Elara's project photos.
- [ ] **Enquiry form**: the submit is a dummy and nothing is sent. Pass `endpoint="https://api.web3forms.com/submit"` to `<EnquiryForm>` in `EnquiryBand.astro` and `contact.astro`, and add `<input type="hidden" name="access_key" value="...">` to `EnquiryForm.astro`. The script already POSTs when an endpoint is set.
- [ ] **Legal pages**: generic draft wording. The client must review or supply it.
- [ ] **Packages**: confirm the 4 BHK price (₹7,50,000) and whether a 3 BHK package exists.
- [ ] **Testimonials / figures**: none are shown until real ones are provided.
- [ ] **Font**: Gloock is a free stand-in for the brand's *The Seasons*.
