# Whole Home Harvest
## Complete Buyer Handoff Guide

**Niche:** Faith-rooted homesteading — garden planning, canning, chickens, food preservation
**Built with:** React + Vite | Cloudflare Pages ready | GitHub source included
**Scripture:** "The Lord God took the man and put him in the Garden of Eden to work it and keep it." — Genesis 2:15
**Domain to purchase:** wholehomeharvest.com

---

## What You Just Bought

Whole Home Harvest is a faith-rooted homesteading platform targeting the massive and growing homesteading market — 44% of US families now plan to grow their own food, a 24% increase since 2020.

**The combination no competitor has:**
- AI Harvest Advisor trained with Kingdom/biblical stewardship framework
- Planting Calendar covering 14 common vegetables across all zones
- Canning Safety Guide following USDA-tested methods
- Growing Zones reference for all 8 major USDA zones
- Kingdom Harvest Calendar — 12 months of biblical rhythms for the homestead
- Kingdom Declaration Tool — 6 faith declarations for homesteaders
- Community Prayer Board — homesteaders share harvest wins and prayers
- 6 original blog articles (not AI-scraped)
- 20+ affiliate partners researched with commission rates

---

## IMMEDIATE NEXT STEPS

### Step 1 — Connect Affiliate Links
Replace URLs in `src/data/siteData.js` → `harvestCategories` array with your affiliate links:

| Partner | Sign Up | Commission |
|---|---|---|
| Seeds Now | seedsnow.com/affiliates | 25% |
| True Leaf Market | trueleafmarket.com/affiliates | 10% |
| Eartheasy | eartheasy.com/affiliate | 8% |
| Hoss Tools | hosstools.com/affiliates | 10% |
| Homestead Honey | homesteadhoney.com | 40% |
| Healing Harvest Homestead | healingharvesthomestead.com | 50% |
| Grove Collaborative | grove.co/affiliates | $10-15/sale |
| Mountain Rose Herbs | mountainroseherbs.com | 10% |

### Step 2 — Connect Google AdSense
AdSense placeholder boxes already placed. Add your publisher ID in `src/components/ui/AdSensePlaceholder.jsx`

### Step 3 — Connect Newsletter
Add Mailchimp form action URL in `src/components/sections/Newsletter.jsx` where it says `YOUR_MAILCHIMP_ACTION_URL`

### Step 4 — Add AI API Key
In Cloudflare Pages settings → Environment Variables → add `VITE_ANTHROPIC_API_KEY`

### Step 5 — Register Domain
Register `wholehomeharvest.com` at Namecheap or GoDaddy (~$12/yr). Add to Cloudflare Pages as custom domain.

---

## How to Edit Content

**`src/data/siteData.js`** — affiliate partners, growing zones, canning guide, testimonials, FAQs
**`src/data/blogPosts.js`** — all 6 blog posts
**`src/data/calendarData.js`** — 12-month Kingdom harvest calendar
**`src/data/declarationData.js`** — 6 faith declarations

---

## How to Deploy

1. Push to GitHub repo `kingdomshiftlive/kingdomshiftlive-whole-home-harvest`
2. Connect to Cloudflare Pages
3. Build command: `npm run build` | Output: `dist`
4. Add environment variable `VITE_ANTHROPIC_API_KEY`

---

## Transfer to Buyer

1. GitHub: Settings → Transfer → enter buyer's GitHub username
2. Cloudflare Pages: Settings → Transfer site
3. Domain: Unlock at registrar, send auth code to buyer
4. Affiliate accounts: NOT transferable — buyer signs up for their own
5. Email list: Export CSV from Mailchimp, send to buyer

---

## Legal Protection

- Disclaimer in footer on every page
- Full Disclaimer page — covers AI advice and canning safety
- Terms of Use — protects original builder AND buyer after sale
- Affiliate Disclosure — FTC compliant
- Section 10 of Terms: original builder has no ongoing liability after transfer

---

## Revenue Projections

| Traffic | Affiliate Est. | AdSense Est. | Total |
|---|---|---|---|
| 5,000/mo | $200-$500 | $40-$75 | $240-$575/mo |
| 10,000/mo | $400-$1,000 | $80-$150 | $480-$1,150/mo |
| 25,000/mo | $1,000-$2,500 | $200-$375 | $1,200-$2,875/mo |

**Note:** Homesteading niche has very high AdSense CPMs ($8-$15/1,000 views) due to affluent audience.

---

*Built by KingdomShift Media Corp*
*"Tend the Earth. Feed Your Family. Honor God." — Genesis 2:15*
