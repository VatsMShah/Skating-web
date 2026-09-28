# CURBTRICK — React/Next.js rebuild

This is a Next.js 14 (App Router) conversion of the site originally built on
10Web (WordPress), generated from the WordPress export
`curbtrick_WordPress_2026-09-26.xml`.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production / deploy to Vercel:

```bash
npm run build
npm start
```

Pushing this repo to GitHub and importing it in Vercel will also work with
zero config — it's a standard Next.js app.

## What was converted

- **Pages**: Home, About, Facilities, Events, Contact — extracted from the
  WordPress export's `content:encoded` fields (10Web had baked the site down
  to static Tailwind-classed HTML with inline SVG icons).
- **Header / Footer**: hand-rebuilt as real React components (`components/Header.jsx`,
  `components/Footer.jsx`). The original site loaded its nav menu dynamically
  through 10Web's own JS runtime (`MenuProvider`), which no longer applies —
  these now use real Next.js `<Link>`s to About / Facilities / Events / Contact.
- **Contact form**: the original form loaded dynamically at runtime and wasn't
  present at all in the static export. I recovered its field schema (Name,
  Email, Phone, Message) from the export's Formidable Forms data and rebuilt
  it as a plain HTML form that posts to `app/api/contact/route.js`.

## Known limitations — things you'll want to fix

1. **Images are still remote.** Every image (`<img>` src, logo, favicon) still
   points at `https://destined-weevil.10web.cloud/...`. I couldn't download
   them into this project (that host wasn't reachable from the environment
   I built this in), so they'll only keep working as long as that 10Web site
   stays live. Download them from your 10Web media library and swap the URLs
   for local files in `/public`, or point them at wherever you re-host them.

2. **This project uses Tailwind v4** (CSS-first config in `app/globals.css`, no `tailwind.config.js`), because the extracted markup uses v4 utility names like `shadow-xs`, `outline-hidden`, and `backdrop-blur-xs` — these don't exist in Tailwind v3 and are silently dropped there. If you add new utility classes, keep using v4 syntax.

3. **Theme colors are a best guess.** The real color tokens live in per-page
   CSS files 10Web generated (`Header.css`, `Footer.css`, etc.) that weren't
   included in the WordPress export, so `app/globals.css` uses a reconstructed
   dark theme (near-black background, orange accent) inferred from context.
   Adjust the CSS variables in `app/globals.css` to match your real brand
   colors if they're different.

3. **The contact form doesn't send email yet.** `app/api/contact/route.js`
   currently just logs the submission and redirects back with a "sent"
   banner. Wire it up to an email provider (Resend, Postmark, SendGrid) or a
   forms service (Formspree) before relying on it.

4. **Page content is HTML strings, not componentized.** Each page's unique
   content (in `content/*.js`) is rendered via a small `RawHtml` helper
   (`components/RawHtml.jsx`) using `dangerouslySetInnerHTML`. This works and
   is fully styleable (all the original Tailwind classes carried over), but
   it isn't broken into individual React components section-by-section.
   That's a reasonable next step if you want to make individual sections
   easier to edit — happy to help with that incrementally, page by page.

5. **Sample Page and the default Privacy Policy page were skipped** — both
   were still the default WordPress boilerplate text, not real content.
