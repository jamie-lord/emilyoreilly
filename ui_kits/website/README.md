# Emily O'Reilly ACR — Website UI kit

A single-product UI kit recreating the redesigned **emilyoreilly.co.uk**. Click through the sections in `index.html`.

## What's here

- `index.html` — full click-through prototype with: Home, About, Services, Testimonials, Contact (Blog & FAQs are stubbed at the nav level)
- `Wordmark.jsx` — the wordmark used in nav + footer
- `Nav.jsx` — sticky top nav, active-page rust underline
- `Hero.jsx` — full-bleed-photo hero with overlapping wordmark and lede
- `SpecimenPair.jsx` — the signature before/after pair, framed and captioned
- `ServiceBlock.jsx` — a single conservation-service section (eyebrow + h3 + body + specimen pair)
- `Testimonial.jsx` — italic Garamond pull-quote with attribution
- `BlogCard.jsx` — minimal blog index card
- `Footer.jsx` — two-row footer with nav, colophon, and accreditation marks
- `AccreditationStrip.jsx` — labelled placeholders for the ICON & IIC marks
- `Button.jsx` / `Field.jsx` — primitives

## Image assets

All photo slots are placeholder mounts (warm taupe + caption). Drop real images into `../../assets/photos/` and update the `src` props to wire them up.

## How to view

Open `index.html`. The nav routes between in-page sections (single-document SPA). Resize the window — the layout collapses to a single column under 720px.
