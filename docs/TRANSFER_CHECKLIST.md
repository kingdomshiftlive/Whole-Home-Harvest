# Transfer Checklist — Whole Home Harvest

Use this checklist when selling or handing off the asset.

## Before transfer

- [ ] Confirm latest code is pushed to GitHub.
- [ ] Confirm `npm run build` succeeds.
- [ ] Confirm live Cloudflare site loads.
- [ ] Confirm sitemap and robots.txt load.
- [ ] Remove any personal API keys or accounts.
- [ ] Make sure contact email is generic or buyer-ready.
- [ ] Export any email list if one exists.
- [ ] Prepare any screenshots for listing.

## GitHub transfer

- [ ] Add buyer as collaborator or transfer repository.
- [ ] Confirm buyer can clone the repository.
- [ ] Confirm buyer can run `npm install` and `npm run build`.

## Cloudflare transfer

- [ ] Transfer Cloudflare Pages project if applicable.
- [ ] Or help buyer reconnect the GitHub repo to their own Cloudflare account.
- [ ] Confirm deployment settings: `npm run build`, output `dist`.

## Domain transfer

- [ ] Unlock domain.
- [ ] Send authorization code to buyer.
- [ ] Confirm DNS records after transfer.

## Post-transfer buyer tasks

- [ ] Replace affiliate links.
- [ ] Connect newsletter provider.
- [ ] Add analytics.
- [ ] Add AdSense after approval.
- [ ] Review legal pages.
- [ ] Update contact email.
