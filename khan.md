# AGENTS.md — Luminex Star Technical Services L.L.C

> **Read this file completely before every task.** It is the single source of truth for this project.
> If a fact you need is not in this file, **stop and ask the human.** Do not invent it.
>
> **This file is committed to git and may become public.** It contains only publication-safe information.
> Confidential company records are held separately and outside this repository — see section 3.

---

## 1. Project

A static marketing website for a Dubai-licensed technical services contractor. Brochure site — no CMS, no user accounts, no database, **no online sales or payments**. Its one job is to convert a visitor into a phone call, a WhatsApp message, or a form submission.

**Primary audience:** facilities managers, building owners, villa owners, fit-out project managers, and property management companies in Dubai.

---

## 2. Company facts — publication-safe, use verbatim

| Field | Value |
| --- | --- |
| Legal name | LUMINEX STAR TECHNICAL SERVICES L.L.C |
| Arabic name | لومينكس استار للخدمات الفنية ذ.م.م |
| Short name (UI) | Luminex Star |
| Legal status wording | Licensed by the Dubai Department of Economy and Tourism |
| Location | Dubai, United Arab Emirates |
| Phone | `+971 55 585 5033` |
| WhatsApp | `+971 55 778 2644` |
| Email | `info@luminexstar.ae` |

### Link formats

```
tel:+971555855033
https://wa.me/971557782644?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20
```

No `+`, no spaces, no dashes inside the `wa.me` number.

---

## 3. Confidential — never render, never commit

The following exist in the company's records and **must never appear** in any page, component, comment, commit message, image, alt text, meta tag, or structured data block:

- Trade licence number
- Chamber of Commerce (DCCI) membership number
- Licence issue date and expiry date
- The manager's / owner's full personal name
- Any personal Gmail address associated with the owner
- Scans or photographs of the trade licence, Emirates ID, passport, or Ejari
- P.O. Box number, parcel ID, or unit-level office address

If a task appears to require any of these, **stop and ask the human first.** Do not work around it.

### Why

A trade licence number is verifiable but not promotional. Publishing it invites impersonation — fraudulent quotations issued under a real licence number are a known problem in the UAE contracting market. The expiry date additionally signals when the company is administratively vulnerable. None of it wins work.

**Note on scope:** UAE consumer-protection rules that require an online seller to display a trade licence number apply to **e-commerce** — businesses transacting or selling through the site. This is a brochure site with no checkout, so that requirement does not apply here. Confirm with the company's PRO or business-setup consultant before changing this policy; nothing in this file is legal advice.

### What to say instead

Use the credibility claim without the identifier:

> "Licensed by the Dubai Department of Economy and Tourism · Fully insured"

If a corporate client requests verification, the company sends the licence privately during pre-qualification. That is the normal process — it does not belong on a public page.

---

## 4. Blocked strings

The agent must never write any of these. They are placeholders from the company letterhead or private records:

```
+971 55 888 8888
@gmail.com
luminexstar@gmail.com
lorem ipsum
example.com
```

Run a repository search for each of these before every deploy.

---

## 5. Hard rules

1. **Never invent a fact.** No made-up founding years, team sizes, project counts, client names, awards, or certifications.
2. **Never write fake testimonials or reviews.** Use `<TestimonialPlaceholder />`. Fabricated reviews are a legal and commercial risk for a licensed UAE contractor.
3. **Only advertise the 10 licensed activities in section 7.** Advertising unlicensed activities is a DET violation.
4. **No lorem ipsum in shipped copy.** Write real, plain English sentences.
5. **No JavaScript unless required for interaction.** Astro ships zero JS by default — keep it that way except the mobile nav toggle and the form handler.
6. **`.env` is gitignored.** No keys, tokens, or access codes in tracked files.

---

## 6. Tech stack

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | [Astro](https://docs.astro.build) | Static output, zero JS by default |
| Styling | [Tailwind CSS](https://tailwindcss.com/docs) | Via `@astrojs/tailwind` |
| Fonts | [Fontsource](https://fontsource.org) | Self-hosted, no external font CDN call |
| Icons | [Lucide](https://lucide.dev/icons) | Via `astro-icon` or inline SVG |
| Forms | [Web3Forms](https://web3forms.com) | Free, no backend, access key in `.env` |
| Hosting | [Cloudflare Pages](https://developers.cloudflare.com/pages) | Free tier, build `npm run build`, output `dist` |
| Analytics | [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics) | Cookieless — no consent banner needed |

**Do not add:** React, Vue, a CMS, a database, jQuery, Bootstrap, or an animation library. If a task seems to need one, ask first.

---

## 7. Services — the 10 licensed activities

| # | Slug | Page title | Target search phrase |
| --- | --- | --- | --- |
| 1 | `carpentry-wood-flooring` | Carpentry & Wood Flooring Works | carpentry services Dubai |
| 2 | `building-cleaning` | Building Cleaning Services | building cleaning services Dubai |
| 3 | `glass-aluminium` | Glass & Aluminium Installation & Maintenance | aluminium and glass works Dubai |
| 4 | `hvac-ventilation` | Air Conditioning, Ventilation & Air Filtration | AC installation and maintenance Dubai |
| 5 | `electromechanical` | Electromechanical Equipment Installation & Maintenance | electromechanical works Dubai |
| 6 | `plaster-works` | Plaster Works | plastering services Dubai |
| 7 | `floor-wall-tiling` | Floor & Wall Tiling Works | tiling contractor Dubai |
| 8 | `sanitary-pipe-repairs` | Sanitary Installation & Pipe Repairs | pipe repair services Dubai |
| 9 | `plumbing-sanitary` | Plumbing & Sanitary Installation | plumbing services Dubai |
| 10 | `false-ceiling-partitions` | False Ceiling & Light Partitions | false ceiling installation Dubai |

> **Flag for the human:** items 8 and 9 overlap heavily. Recommend positioning **9 as new installation** and **8 as repair and maintenance** so the two pages do not compete for the same search results. Confirm before writing that copy.

### Service page template

1. Breadcrumb — `Home / Services / [name]`
2. H1 = service name + " in Dubai"
3. Intro paragraph, 2–3 sentences, plain English
4. "What's included" — 5–7 bullets specific to that trade
5. "Where we work" — Business Bay, JLT, Deira, Al Quoz, Dubai Marina, Jumeirah, DIP
6. Photo grid, 3 images (placeholders for now — section 10)
7. CTA band — *Request a Free Site Visit* + WhatsApp button

---

## 8. Design system

Brand reference is the company's printed letterhead: gold and charcoal on white, geometric, restrained, generous whitespace. The current live site uses navy blue — **that is superseded.**

### Colour tokens

Put these in `tailwind.config.mjs` under `theme.extend.colors`. Never hardcode a hex value in a component.

```js
colors: {
  gold:       '#C9A227',  // accent — buttons, rules, active states
  'gold-soft':'#E4C77A',  // hover, subtle fills
  charcoal:   '#3A3A3C',  // header bar, footer bar
  ink:        '#1C1C1E',  // headings and body text
  slate:      '#6B7280',  // secondary text, captions
  bg:         '#FFFFFF',
  'bg-alt':   '#F7F6F3',  // alternating section background
  line:       '#E5E3DE',  // hairline borders
}
```

**Gold is an accent, not a fill.** Large gold blocks look cheap and fight the letterhead.

### Typography

| Role | Face | Usage |
| --- | --- | --- |
| Display | Poppins (600, 700) | H1–H3, buttons, nav |
| Body | Inter (400, 500) | Paragraphs, lists, captions |
| Arabic | Cairo (400, 600) | Only if Arabic content is added |

```css
h1 { font-size: clamp(2rem, 5vw, 3.5rem);     line-height: 1.1; letter-spacing: -0.02em; }
h2 { font-size: clamp(1.5rem, 3.5vw, 2.5rem); line-height: 1.2; letter-spacing: -0.01em; }
h3 { font-size: clamp(1.15rem, 2vw, 1.5rem);  line-height: 1.3; }
p  { font-size: 1.0625rem; line-height: 1.7; max-width: 68ch; }
```

### Layout rules

- Max content width `1200px`, gutters `1.25rem` mobile / `2rem` desktop
- Section padding `py-16` mobile, `py-24` desktop — be consistent, this is where spacing drifts
- Corner radius `rounded-lg` (8px). No pills, no mixing
- One elevation only: `shadow-sm` on cards, `shadow-md` on hover. No glows
- Alternate `bg` → `bg-alt` → `bg` for rhythm

### Signature element

Each section heading gets a **short gold rule (48px × 3px) directly above it**, echoing the horizontal rule in the letterhead lockup. This is the only decorative device on the site. No gradient meshes, no floating blobs, no animated counters.

### Motion

Fade-and-rise on scroll for section entry (16px, 400ms, ease-out) and a 150ms colour transition on interactive elements. Nothing else. Respect `prefers-reduced-motion: reduce`.

---

## 9. Sitemap

```
/                              Home
/about                         About & credibility
/services                      All 10 services, card grid
/services/[slug]               10 individual service pages
/projects                      Photo gallery
/contact                       Form, details, map, WhatsApp
/thank-you                     Post-submit confirmation (noindex)
/privacy                       Privacy policy
/404                           Not found
```

### Home page sections, in order

1. **Hero** — H1, one-line subhead, two buttons (*Get a Free Quote* / *WhatsApp Us*). Full-bleed photo, charcoal overlay at 55%.
2. **Trust bar** — `Dubai DET Licensed · Fully Insured · Multi-Trade In-House Team · 24/7 Emergency Response`. Charcoal background, gold dividers. **No licence number.**
3. **Services grid** — 10 cards: icon, name, one-line description, link.
4. **Why Luminex Star** — licensed & insured, in-house multi-trade team, transparent fixed quotations, post-handover maintenance.
5. **Process** — 5 numbered steps: Enquiry → Site Visit → Quotation → Execution → Handover. *(Numbering is justified — it is a genuine sequence.)*
6. **Projects strip** — 6 photos, link to `/projects`.
7. **Testimonials** — `<TestimonialPlaceholder />` until real ones exist.
8. **CTA band**
9. **Footer** — contact block, service links, copyright. **No licence number.**

---

## 10. Placeholder images — current policy

Real project photography does not exist yet. Use deterministic placeholders now, structured so swapping them later is a one-file change.

### Rules

1. **Never hardcode a placeholder URL in a page.** All images go through `src/data/images.js`.
2. Use **seeded** [Lorem Picsum](https://picsum.photos) URLs so the same image appears on every build — random images that change per build make review impossible.
3. Every image needs real `alt` text describing what it *will* show, plus `width`, `height`, and `loading="lazy"` (hero is `eager`).
4. Render `<PlaceholderBadge />` in dev mode only, so nobody ships a placeholder by accident.

### `src/data/images.js`

```js
// PLACEHOLDERS — replace the `src` values with real photos before launch.
// Keep the keys and alt text unchanged.
const P = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const images = {
  hero:      { src: P('luminex-hero', 1920, 1080), w: 1920, h: 1080,
               alt: 'Luminex Star technicians working on a commercial fit-out in Dubai' },
  aboutTeam: { src: P('luminex-team', 1200, 800), w: 1200, h: 800,
               alt: 'The Luminex Star technical services team on site' },
  services: {
    'carpentry-wood-flooring':  [P('lux-carp-1',800,600),  P('lux-carp-2',800,600),  P('lux-carp-3',800,600)],
    'building-cleaning':        [P('lux-clean-1',800,600), P('lux-clean-2',800,600), P('lux-clean-3',800,600)],
    'glass-aluminium':          [P('lux-glass-1',800,600), P('lux-glass-2',800,600), P('lux-glass-3',800,600)],
    'hvac-ventilation':         [P('lux-hvac-1',800,600),  P('lux-hvac-2',800,600),  P('lux-hvac-3',800,600)],
    'electromechanical':        [P('lux-emech-1',800,600), P('lux-emech-2',800,600), P('lux-emech-3',800,600)],
    'plaster-works':            [P('lux-plast-1',800,600), P('lux-plast-2',800,600), P('lux-plast-3',800,600)],
    'floor-wall-tiling':        [P('lux-tile-1',800,600),  P('lux-tile-2',800,600),  P('lux-tile-3',800,600)],
    'sanitary-pipe-repairs':    [P('lux-sanit-1',800,600), P('lux-sanit-2',800,600), P('lux-sanit-3',800,600)],
    'plumbing-sanitary':        [P('lux-plumb-1',800,600), P('lux-plumb-2',800,600), P('lux-plumb-3',800,600)],
    'false-ceiling-partitions': [P('lux-ceil-1',800,600),  P('lux-ceil-2',800,600),  P('lux-ceil-3',800,600)],
  },
  projects: Array.from({ length: 12 }, (_, i) => ({
    src: P(`luminex-project-${i + 1}`, 900, 700), w: 900, h: 700,
    alt: `Completed Luminex Star project in Dubai — photo ${i + 1}`,
  })),
};
```

### Logo placeholder

The real logo (building mark + four-point star, gold on charcoal) is not yet available as SVG. For now render a text lockup: **LUMINEX STAR** in Poppins 700, with `TECHNICAL SERVICES L.L.C` beneath in Inter 500, letter-spaced `0.18em`, at 60% size. Leave a `<!-- LOGO: replace with SVG -->` comment.

### Swap checklist for later

Replace `src` values with local files in `src/assets/images/`, convert to WebP under 200 KB, switch to Astro's `<Image />` component, delete `<PlaceholderBadge />`.

---

## 11. Components

```
src/components/
  Header.astro              Sticky, charcoal, mobile hamburger
  Footer.astro              Contact block, links
  Button.astro              variant: primary (gold) | secondary (outline) | whatsapp (green)
  SectionHeading.astro      Gold rule + H2 + optional subhead
  ServiceCard.astro
  ProcessStep.astro
  StatBar.astro             The trust bar
  PhotoGrid.astro
  ContactForm.astro
  CtaBand.astro
  FloatingActions.astro     Call + WhatsApp, mobile only, bottom-right
  TestimonialPlaceholder.astro
  PlaceholderBadge.astro    Dev-only
  SEO.astro                 Meta, OG, canonical, JSON-LD
```

**`FloatingActions` must not cover form fields.** The current live site has exactly this bug — the floating buttons sit on top of the "Your Full Name" input. Add `padding-bottom: 6rem` to the form container on mobile.

---

## 12. Forms

[Web3Forms](https://web3forms.com). Access key in `.env` as `PUBLIC_WEB3FORMS_KEY`, never committed.

**Fields:** Full name (required) · Email (required) · Phone (required) · Service (select, the 10 options) · Message (required).

**Requirements:** honeypot field named `botcheck`, `redirect` to `/thank-you`, HTML5 validation, visible inline errors, disabled submit with "Sending…" state, `aria-live="polite"` on the status message.

---

## 13. SEO

- Title format: `[Page] in Dubai | Luminex Star Technical Services`
- Meta description 150–160 characters, unique per page, includes the target phrase and Dubai
- One `<h1>` per page
- `sitemap.xml` via `@astrojs/sitemap`, `robots.txt` allowing all
- Canonical URL on every page
- Open Graph + Twitter card tags
- `/thank-you` gets `<meta name="robots" content="noindex">`

### JSON-LD — sitewide, in `Layout.astro`

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Luminex Star Technical Services L.L.C",
  "image": "https://luminexstar.ae/og-image.jpg",
  "telephone": "+971555855033",
  "email": "info@luminexstar.ae",
  "address": { "@type": "PostalAddress", "addressLocality": "Dubai", "addressCountry": "AE" },
  "areaServed": "Dubai, United Arab Emirates",
  "url": "https://luminexstar.ae"
}
```

Do **not** add a `identifier`, `taxID`, `vatID`, `duns`, or `leiCode` property. Add a `Service` schema block to each service page — see [schema.org/Service](https://schema.org/Service).

---

## 14. Quality floor — every page

- Responsive from **320px** with no horizontal scroll
- Tap targets **44×44px** minimum
- Visible keyboard focus ring (gold, 2px offset) — never `outline: none`
- Contrast **4.5:1** for body text (gold `#C9A227` on white **fails** — use `ink` for text; reserve gold for large headings, borders, and button fills with dark text)
- All images have `alt`, `width`, `height`
- `prefers-reduced-motion` respected
- Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO 100
- No console errors

---

## 15. Copy voice

Plain, direct, competent. Write like an experienced site foreman explaining the job, not a marketing agency.

- **Yes:** "We install and maintain false ceilings and light partitions for offices, retail units, and villas across Dubai."
- **No:** "We deliver world-class, cutting-edge ceiling solutions that redefine excellence."

Buttons say what happens: *Get a Free Quote*, *WhatsApp Us*, *Request a Site Visit*. Not *Submit*, not *Learn More*, not *Click Here*. Sentence case for body, title case for buttons. No exclamation marks.

---

## 16. Build order

Run as **separate tasks**, not one prompt. Use Plan mode for 2, 3, and 5.

1. Scaffold Astro + Tailwind, config tokens, install Fontsource, create `images.js`
2. `Layout`, `Header`, `Footer`, `Button`, `SectionHeading`, `FloatingActions`
3. Home page — one section per sub-task
4. `/services` index
5. Service page template + dynamic route, then all 10
6. `/about`, `/projects`, `/contact`, `/thank-you`, `/privacy`, `/404`
7. SEO pass — `SEO.astro`, sitemap, robots, JSON-LD
8. QA pass — run the site, drive the browser at 375px and 1440px, fix overflow and contrast
9. Deploy to Cloudflare Pages

After each task: run the dev server, open the browser, verify visually, report what changed.

---

## 17. Definition of done

- [ ] Every page renders at 320px with no horizontal scroll
- [ ] Contact form submits and the email arrives
- [ ] `tel:` opens the dialer on a real phone
- [ ] WhatsApp link opens a chat with the correct number
- [ ] **Repository search for every string in section 4 returns zero results**
- [ ] **Repository search confirms no licence number, DCCI number, or personal name appears anywhere**
- [ ] No lorem ipsum, no fabricated testimonials
- [ ] All 10 service pages exist with unique titles and meta descriptions
- [ ] Lighthouse targets met
- [ ] `sitemap.xml` and `robots.txt` generated
- [ ] `.env` is gitignored

---

## 18. Open questions — ask the human before guessing

1. Year founded and approximate team size
2. Confirm the split between services 8 and 9 (repairs vs new installation)
3. Real project photos — how many are available, and when
4. Logo as SVG or transparent PNG
5. Final domain: `.ae` or `.com`
6. Is Arabic support required at launch, or later
7. Does the company want a physical office address published, or keep it to "Dubai, UAE"
8. Does the company want the manager named in an "About the founder" section — **default is no**

---

*Last updated: 27 July 2026 · Sanitised: confidential licence and personal data removed from this file and from all site output.*
