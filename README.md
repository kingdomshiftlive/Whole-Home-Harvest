# Whole Home Harvest

**Whole Home Harvest** is a faith-rooted homesteading website built as a sellable digital asset. It includes educational content, practical tools, legal pages, SEO foundations, monetization placeholders, and buyer handoff documentation.

**Live demo:** https://whole-home-harvest.pages.dev/  
**Tech stack:** React + Vite + Cloudflare Pages  
**Niche:** Homesteading, gardening, food preservation, backyard chickens, family preparedness, Christian stewardship

> “The Lord God took the man and put him in the Garden of Eden to work it and keep it.” — Genesis 2:15

---

## What is included

- React + Vite frontend
- Home, About, Blog, Blog Post, Tools, Resources, FAQ, Contact, AI Advisor, and Legal pages
- Buyer-safe demo AI Harvest Advisor
- Planting calendar and growing-zone guidance
- Canning and preservation guidance with safety disclaimers
- Community board demo
- Kingdom harvest calendar and declaration tool
- Affiliate resource page structure
- Newsletter capture demo mode
- AdSense/sponsor placement components
- Privacy Policy, Terms, Disclaimer, and Affiliate Disclosure
- Sitemap, robots.txt, Cloudflare SPA redirects, and manifest
- Buyer docs in `/docs`

---

## Quick start

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Cloudflare Pages deployment

Use these settings:

```text
Framework preset: Vite
Build command: npm run build
Build output directory: dist
Root directory: whole-home-harvest
```

If the repository root is already the project folder, leave root directory blank.

---

## Buyer setup after purchase

1. Replace affiliate links in `src/data/siteData.js`.
2. Connect an email provider in `src/components/sections/Newsletter.jsx`.
3. Add Google Analytics or Plausible if desired.
4. Replace AdSense placeholder values in `src/components/ui/AdSensePlaceholder.jsx` after approval.
5. Replace contact email in `src/data/siteData.js`, `src/pages/Contact.jsx`, and `src/pages/Legal.jsx`.
6. Register or connect a custom domain.
7. Update legal pages for the buyer’s business location and preferred policies.

---

## Important AI note

The AI Harvest Advisor currently runs in **buyer-safe demo mode**. It gives helpful canned guidance without exposing API keys in the browser.

For a real paid AI integration, the buyer should connect Claude, OpenAI, or another model through a secure backend endpoint such as:

- Cloudflare Workers
- Netlify Functions
- Vercel Serverless Functions
- A private API server

Do **not** place private API keys directly in the frontend.

---

## Monetization paths

See `docs/MONETIZATION_GUIDE.md` for details.

The site is structured for:

- Affiliate links
- Display ads
- Sponsored resource placements
- Email list growth
- Digital products and printables
- Premium seasonal guides
- Brand partnerships

No revenue is guaranteed. Earnings depend on traffic, offers, conversion, SEO, and buyer execution.

---

## Safety and legal notes

Whole Home Harvest provides general educational content only. Gardening, livestock, canning, and food preservation decisions can involve safety risks. Users should verify safety-critical information with USDA-tested recipes, cooperative extension offices, veterinarians, local laws, and qualified professionals.

Legal pages are included as a starting point. A buyer should review them with appropriate counsel before operating commercially.

---

## Project structure

```text
src/components      Reusable UI, layout, newsletter, ads
src/data            Blog posts, FAQs, affiliate resources, calendars
src/pages           Route-level pages
src/styles          Global styles and theme variables
public              Static SEO/deployment files
docs                Buyer handoff, monetization, transfer, and QA docs
```

---

## Seller notes

This project was prepared as a transferable digital asset. Before listing or handing off, run:

```bash
npm run build
git status
```

The project should build cleanly and the working tree should be clean.

## Buyer Control Center

This asset includes a buyer configuration page at `/admin-config`. The buyer can record brand, domain, email, AI, analytics, ad, affiliate, social, and digital product settings without searching through the codebase.

See:
- `docs/ADMIN_CONFIGURATION_GUIDE.md`
- `docs/SELLER_HANDOFF.md`
- `docs/BUYER_SUPPORT_BOUNDARIES.md`
- `docs/KINGDOMSHIFT_ASSET_STANDARD.md`

