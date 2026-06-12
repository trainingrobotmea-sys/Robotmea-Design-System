# Robotmea Website — UI Kit

Pixel-faithful recreation of key surfaces of [robotmea.com](https://www.robotmea.com), built with reusable JSX components.

## Run

Open `index.html` directly in the preview pane. It loads React 18 + Babel inline and stitches the components together into a homepage walkthrough.

## Components

| File | What it renders |
|---|---|
| `Header.jsx` | Top utility bar + main nav + primary CTA |
| `Hero.jsx` | Full-bleed hero with dark-overlay photo, ALL-CAPS display headline, dual CTAs |
| `BrandDivider.jsx` | 4-tick coloured pillar bar + eyebrow + section heading |
| `Programs.jsx` | 3-column grid of program tiles with top-border accents |
| `StatsStrip.jsx` | Dark Robotmea-blue band with 5 milestone numbers |
| `WhoWeAre.jsx` | Two-column intro w/ photo grid + lead copy + CTA |
| `Testimonial.jsx` | Centered quote card with attribution |
| `PartnerStrip.jsx` | Greyscale partner logos placeholder strip |
| `Footer.jsx` | Multi-column footer with sitemap + contact |

## Notes
- All photography slots are deliberately blank/grey — drop in real photos via the `imageUrl` prop. Avoid AI-generated hero images for an institutional brand.
- Iconography uses the brand pillars + minimal SVG glyphs. We did **not** swap in Lucide here to keep the kit self-contained; for production add a CDN icon set.
- The page is **not** mobile-responsive — fixed 1280px design width to match marketing-site canvas. Use the website's own media-query stack for production.
