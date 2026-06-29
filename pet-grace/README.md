# My Pet Grace
## Complete Buyer Handoff Guide

**Live URL:** Connect to Netlify after purchase  
**Niche:** Pet care, pet loss grief support, faith-inspired pet resources  
**Built with:** React + Vite | Netlify ready | GitHub source included  
**Scripture:** "A righteous man cares for the needs of his animal." — Proverbs 12:10

---

## What You Just Bought

My Pet Grace is a faith-inspired pet care and pet loss grief support platform targeting 90.5M+ US pet-owning households. It combines practical pet care resources with deeply compassionate grief support — a combination almost entirely missing from the market.

**Why it sells on Flippa:**
- Emotional niche with high repeat traffic and newsletter potential
- 20+ affiliate partners with commission rates pre-researched
- Quality of Life Assessment tool found on NO other pet site
- AI Pet Advisor makes the site feel premium
- Full legal protection built in — disclaimer, terms, pop-up notice, footer warning
- Buyer README (this document) covers everything step by step

---

## IMMEDIATE NEXT STEPS (Do These First)

### Step 1 — Connect Affiliate Links (15 minutes each)

Every curriculum and resource link on the site needs YOUR affiliate link. Sign up for these programs and replace the URLs in `src/data/siteData.js` under the `petCareCategories` array:

| Partner | Sign Up URL | Est. Commission |
|---|---|---|
| Chewy | chewy.com/affiliates | 4–7% |
| Petco | petco.com/affiliates | Up to 7% |
| 1800PetMeds | 1800petmeds.com/affiliates | Up to 17.7% |
| Ollie (fresh dog food) | myollie.com | Up to 28% |
| JustFoodForDogs | justfoodfordogs.com | Up to 28% |
| HolistaPet (CBD/wellness) | holistapet.com/affiliates | 15–35% |
| BarkBox | barkbox.com/affiliates | $15–25/sale |
| Brain Training for Dogs | Search ClickBank | Up to 75% |
| Embrace Pet Insurance | embracepetinsurance.com | Per lead |
| Lemonade Pet Insurance | lemonade.com/affiliates | Per lead |
| Pet Perennials (memorial) | petperennials.com | 15% |
| FitBark (GPS tracker) | fitbark.com/affiliates | 12% |

**How to update a link:**
1. Open `src/data/siteData.js`
2. Find the `petCareCategories` array
3. Find the partner by name
4. Replace the `url` field with your affiliate URL
5. Save and push to GitHub — site auto-deploys

### Step 2 — Connect Google AdSense (30 minutes)

AdSense placeholder boxes are already placed on the Home and Resources pages.

1. Apply at google.com/adsense (approval takes 1–14 days)
2. Once approved, open `src/components/ui/AdSensePlaceholder.jsx`
3. Replace `YOUR-ADSENSE-CLIENT-ID` with your publisher ID (format: ca-pub-XXXXXXXXXXXXXXXX)
4. Replace `YOUR-AD-SLOT-ID` with your actual slot IDs from your AdSense dashboard
5. In `index.html`, add your AdSense script tag inside `<head>` (instructions in the AdSensePlaceholder.jsx file)
6. Push to GitHub — Netlify deploys automatically

**Pet niche AdSense CPMs are among the highest** — typically $8–$15 per 1,000 views.

### Step 3 — Connect Newsletter to Mailchimp (30 minutes)

The newsletter signup form is fully built and styled. It just needs your Mailchimp account.

1. Create a free Mailchimp account at mailchimp.com (free up to 500 subscribers)
2. Create a new Audience
3. Go to: Audience → Signup Forms → Embedded Forms
4. Copy your form action URL (looks like: `https://xxx.us1.list-manage.com/subscribe/post?u=xxx&id=xxx`)
5. Open `src/components/sections/Newsletter.jsx`
6. Replace `YOUR_MAILCHIMP_ACTION_URL` with your copied URL
7. Push to GitHub

**Alternative:** Use Kit (formerly ConvertKit) at kit.com — free up to 1,000 subscribers. Same process.

### Step 4 — Activate the AI Pet Advisor (15 minutes)

1. Get an API key at console.anthropic.com (pay-as-you-go, roughly $0.01 per conversation)
2. In Netlify: go to Site Settings → Environment Variables
3. Add new variable:
   - Key: `VITE_ANTHROPIC_API_KEY`
   - Value: your API key from Anthropic
4. Open `src/pages/AICoach.jsx` and add these two lines to the fetch headers:
```javascript
"x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
"anthropic-version": "2023-06-01",
```
5. Push to GitHub — Netlify rebuilds automatically

### Step 5 — Connect Google Analytics (15 minutes)

1. Create a free GA4 property at analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to `index.html` inside `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```
4. Push to GitHub

---

## How to Edit Content

### Edit Site Data
All pet care resources, affiliate links, testimonials, FAQs, and grief stages live in one file:

**`src/data/siteData.js`**
- `petCareCategories` — all affiliate partner categories and links
- `testimonials` — update with real testimonials as you collect them
- `faqs` — add or edit FAQ questions
- `griefStages` — the 6 grief stage cards on the Grief Support page

### Edit or Add Blog Posts
All blog posts live in: **`src/data/blogPosts.js`**

To add a new blog post, copy this template and add it to the array:
```javascript
{
  id: 7,  // increment from last post
  slug: 'your-url-friendly-title',
  title: 'Your Full Blog Post Title',
  excerpt: 'A 1-2 sentence summary shown on the blog page.',
  category: 'Pet Care',  // or: Grief Support, New Pet, Pet Health, Faith & Pets
  author: 'My Pet Grace',
  date: '2026-01-15',
  readTime: '8 min read',
  featured: false,  // set true to show on home page
  metaDescription: 'SEO meta description for Google (150-160 characters)',
  content: `
  # Your Blog Post Title

  Your content here in markdown-style format.
  `,
},
```

### Change Colors or Branding
All colors are in: **`src/styles/variables.css`**
- Primary terracotta: `--accent-primary` (#B8684A)
- Sage green: `--accent-secondary` (#5C8A5C)
- To rebrand: change the hex values in this one file

---

## How Deployment Works

**Your setup:**
- Code on GitHub: `kingdomshiftlive/kingdomshiftlive-pet-grace`
- Netlify watches GitHub and auto-deploys every push

**To make any change:**
1. Edit the file on your computer
2. Open Git Bash or Terminal in the project folder
3. Run:
```bash
git add .
git commit -m "describe your change"
git push origin main
```
4. Netlify deploys automatically in about 60 seconds
5. Visit your Netlify URL to confirm the change is live

---

## How to Transfer to a Buyer (Flippa Sale)

When My Pet Grace sells on Flippa, follow these exact steps. The transfer takes about 20 minutes and the site stays live the entire time — zero downtime.

### Step 1 — Transfer the GitHub Repository
1. Go to github.com and log in
2. Go to the My Pet Grace repository
3. Click **Settings** tab
4. Scroll all the way to the bottom — **Danger Zone**
5. Click **Transfer**
6. Type the repository name to confirm
7. Enter the buyer's GitHub username
8. Click **I understand, transfer this repository**
9. Buyer receives an email invitation — they must accept it
10. Once accepted, they own the code

### Step 2 — Transfer the Netlify Site
1. Log in to netlify.com
2. Click on the My Pet Grace site
3. Go to **Site Settings** → **General**
4. Scroll to the bottom — **Transfer site**
5. Click **Transfer site to another team**
6. Enter the buyer's Netlify account email address
7. Click **Transfer**
8. Buyer receives an email — they must accept in their Netlify account
9. Site transfers instantly — stays live throughout

### Step 3 — Transfer Domain (if you added a custom domain)
Transfer through your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
- Unlock the domain
- Get the transfer authorization code
- Send to buyer
- They initiate transfer on their end (takes 5–7 days)

### Step 4 — Affiliate Accounts
**Important:** Affiliate accounts cannot be transferred. They are tied to your tax ID and payment information.
- You close or keep your existing affiliate accounts
- Buyer must sign up for their own accounts at each affiliate program
- Buyer updates the links in `src/data/siteData.js` with their own affiliate URLs
- This is standard practice for all website sales — disclose this clearly on Flippa

### Step 5 — Email List (if you built one)
If you connected Mailchimp and built a subscriber list:
1. Log in to Mailchimp
2. Go to Audience → Manage Audience → Export Audience
3. Download the CSV file
4. Send the CSV to the buyer
5. Buyer imports into their own Mailchimp account
**Note:** Subscribers must be notified of ownership change per CAN-SPAM and GDPR.

### Step 6 — Analytics Data
If you connected Google Analytics:
1. Go to GA4 → Admin → Account Access Management
2. Add buyer's Google account as Administrator
3. Remove yourself after they confirm access

### Step 7 — API Keys and Environment Variables
The buyer will need to create their own:
- Anthropic API key (console.anthropic.com)
- Google Analytics property
- AdSense publisher account
These cannot be transferred — they are personal accounts tied to payment and identity.

---

## Legal Protection — What Is Built In

My Pet Grace has five layers of legal protection that protect you as the seller, the buyer, and the platform:

1. **First-visit pop-up notice** — user must click "I Understand" before using the site
2. **Disclaimer banner** on all tool pages — visible before any tool is used
3. **Warning inside the Quality of Life tool** — right at the point of use
4. **Warning inside the AI Pet Advisor** — prominent sidebar notice
5. **Persistent footer disclaimer** — on every single page at all times
6. **Full Disclaimer page** — covers veterinary, AI, grief, product, and liability
7. **Full Terms of Use** — includes Section 10 specifically protecting the original builder after sale

**The platform position:** This is information and research. These are tools. What the user does with it is their own decision. The platform is not advising, diagnosing, or treating anything.

**Buyer's obligation:** Terms of Use Section 10 requires the buyer to keep all disclaimers and legal notices in place. The buyer may not use this platform to provide professional veterinary or medical advice.

---

## Site Structure

```
pet-grace/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          ← Main landing page
│   │   ├── Tools.jsx         ← Grief support: stages, QoL tool, memorial, books, hotlines
│   │   ├── AICoach.jsx       ← AI Pet Advisor chat
│   │   ├── Resources.jsx     ← Pet care resources + affiliate links
│   │   ├── Blog.jsx          ← Blog listing page
│   │   ├── BlogPost.jsx      ← Individual blog post
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Legal.jsx         ← Privacy, Terms, Disclaimer, Affiliate Disclosure
│   ├── data/
│   │   ├── siteData.js       ← ALL editable content: affiliates, FAQs, grief stages
│   │   └── blogPosts.js      ← ALL blog posts
│   ├── components/
│   │   ├── layout/           ← Navbar, Footer (with legal strip)
│   │   ├── sections/         ← Hero, Features, Newsletter
│   │   └── ui/               ← AdSense placeholder, SiteNotice popup, CookieBanner
│   └── styles/
│       └── variables.css     ← Change all colors and fonts here
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── index.html                ← SEO meta tags
```

---

## Growth Roadmap for the Buyer

**Week 1–2:**
- Connect all affiliate links (biggest immediate revenue impact)
- Connect newsletter to Mailchimp
- Add Anthropic API key for AI Advisor
- Apply for Google AdSense
- Add Google Analytics

**Month 1–3:**
- Share in pet loss Facebook groups (search "pet loss support" on Facebook — thousands of active groups)
- Share in dog and cat owner communities on Reddit (r/dogs, r/cats, r/petloss)
- Write 2 new blog posts per month targeting Google keywords
- Build email list with weekly pet care tips

**Month 3–6:**
- Apply to Mediavine (1,000 sessions/month minimum) for premium ad rates
- Reach out to Chewy, Petco, and The Farmer's Dog for sponsored content
- Add a "Pet Loss Memorial" digital download product ($9–$27)

**Month 6–12:**
- Launch a pet loss grief email course (5 emails, $27–$47)
- Add a printable pet care binder or journal as a digital product
- Consider adding a private Facebook community for newsletter subscribers

---

## Estimated Revenue at Scale

| Traffic Level | Affiliate Est. | AdSense Est. | Total Est. |
|---|---|---|---|
| 5,000 visits/mo | $150–$400 | $40–$75 | $190–$475/mo |
| 10,000 visits/mo | $300–$800 | $80–$150 | $380–$950/mo |
| 25,000 visits/mo | $750–$2,000 | $200–$375 | $950–$2,375/mo |

*Estimates based on industry averages for pet niche. Results vary.*

---

## Support During Flippa Transfer Window

Questions about the codebase during the Flippa escrow or transfer window? Message through Flippa. The code is clean, well-structured, and built on standard React/Vite — any developer can maintain and extend it.

---

*Built by KingdomShift Media Corp*  
*"A righteous man cares for the needs of his animal." — Proverbs 12:10*
