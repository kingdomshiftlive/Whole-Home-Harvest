# Monetization Guide — Whole Home Harvest

Whole Home Harvest is structured for multiple revenue paths. No earnings are guaranteed, but the site is built so a buyer can connect monetization quickly.

## 1. Affiliate revenue

Best-fit categories:

- Heirloom seeds
- Raised beds and garden tools
- Canning supplies
- Pressure canners
- Chicken coops and poultry supplies
- Natural home products
- Homesteading books and courses

Where to edit:

```text
src/data/siteData.js
```

Replace each resource URL with the buyer’s affiliate tracking link.

## 2. Display ads

Ad placements are already included as safe placeholders.

Where to edit:

```text
src/components/ui/AdSensePlaceholder.jsx
```

Replace the placeholder client ID and slot IDs after AdSense approval.

## 3. Newsletter/email list

The newsletter currently works in demo mode. Buyer can connect:

- Mailchimp
- Kit
- Beehiiv
- ConvertKit legacy forms
- Formspree
- Cloudflare Workers + email provider API

Where to edit:

```text
src/components/sections/Newsletter.jsx
```

## 4. Digital products

Potential products:

- Beginner Homestead Planner PDF
- Monthly Garden Calendar
- Canning Safety Checklist
- Pantry Inventory Sheet
- Backyard Chicken Starter Guide
- Faith-Based Harvest Declarations printable

## 5. Sponsored placements

Sponsors that fit this niche:

- Seed companies
- Garden tool brands
- Homestead course creators
- Natural living brands
- Canning supply retailers
- Chicken/poultry equipment companies

## Important disclosure

Keep the Affiliate Disclosure page visible and updated. Sponsored content and affiliate links should be clearly disclosed.
