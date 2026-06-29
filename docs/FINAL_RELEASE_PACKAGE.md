# Final Release Package — Whole Home Harvest

Use this file when preparing the final ZIP or GitHub transfer for the buyer.

## Release contents

- Source code
- `README.md`
- `docs/BUYER_QUICK_START.md`
- `docs/ADMIN_CONFIGURATION_GUIDE.md`
- `docs/MONETIZATION_GUIDE.md`
- `docs/TRANSFER_CHECKLIST.md`
- `docs/SELLER_HANDOFF.md`
- `docs/BUYER_SUPPORT_BOUNDARIES.md`
- `docs/QA_CHECKLIST.md`
- `docs/ROADMAP.md`
- `FLIPPA_LISTING.md`
- `SEO_KEYWORDS.md`
- `SOCIAL_MEDIA_POSTS.md`
- `EMAIL_WELCOME_SEQUENCE.md`
- `.env.example`

## Seller pre-delivery checklist

1. Confirm latest Cloudflare deployment is successful.
2. Confirm GitHub `main` is up to date.
3. Run `npm run build` locally.
4. Confirm `/`, `/tools`, `/ai-coach`, `/resources`, `/blog`, `/contact`, `/legal`, and `/admin-config` load.
5. Confirm README and docs reflect what is included.
6. Export or ZIP the repository without `node_modules` and without `.git` if sending as files.
7. Transfer GitHub repository or provide ZIP after Flippa escrow/payment terms are satisfied.

## Buyer first-day setup

1. Install dependencies with `npm install`.
2. Run locally with `npm run dev`.
3. Build with `npm run build`.
4. Deploy to Cloudflare Pages with output directory `dist`.
5. Open `/admin-config` and record buyer settings.
6. Connect buyer domain, analytics, email provider, affiliate accounts, AdSense, Gumroad, and AI provider if desired.

## Important boundary

The seller delivers the digital asset and documentation. The buyer is responsible for their own accounts, approvals, billing, domains, and third-party services.
