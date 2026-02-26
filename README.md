# Iddura Honda Static Landing Page

Production-ready static landing page for **Iddura Honda** (Honda car sales advisor), optimized for WhatsApp lead conversion, mobile responsiveness, and fast deployment on Cloudflare Pages.

## Project Structure

- `index.html` - Main landing page markup and content
- `styles.css` - Responsive design system, layout, and animations
- `script.js` - Interactions: mobile navbar, reveal animation, loan calculator, WhatsApp message generation
- `assets/icons/*.svg` - Local icon assets (replace with final Flaticon downloads if needed)
- `assets/model-*.jpg` - Placeholder model image paths (replace with real promo/model images)

## Local Preview

No build step is required.

1. Quick open: open `index.html` in browser.
2. Preferred local server:
   - `python3 -m http.server 8080`
   - open `http://localhost:8080`

## Cloudflare Pages Deployment

Use the following settings:

- Framework preset: `None`
- Build command: `none`
- Build output directory: `/`

Because this is a pure static site, Cloudflare will serve files directly from the project root.

## Asset Replacement Guide

1. Replace model placeholders:
   - `assets/model-city.jpg`
   - `assets/model-hrv.jpg`
   - `assets/model-crv.jpg`
   - `assets/model-wrv.jpg`
   - `assets/model-civic.jpg`

2. Replace/confirm icon set in `assets/icons/` with approved Flaticon SVGs:
   - `whatsapp.svg`, `email.svg`, `location.svg`, `phone.svg`, `car.svg`, `shield.svg`, `document.svg`, `tradein.svg`, `instagram.svg`, `facebook.svg`, `tiktok.svg`

3. Update social URLs in `index.html` when exact links are available (currently marked as Coming soon).

4. Optional SEO polish before go-live:
   - Update `og:image` with a real social share image.
   - Update canonical URL if using a custom domain.

## Notes

- Loan calculator uses a flat-rate hire purchase approximation and is labeled as an estimate.
- All primary conversion actions use the configured WhatsApp deep link.
- Footer includes icon attribution: **Icons by Flaticon**.
