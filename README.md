# Robotmea Design System

A complete brand & UI system for **Robotmea**, an international EdTech brand that delivers STEAM, robotics, and AI education across schools, technical colleges, and innovation hubs. Robotmea is the education arm of Time Dimension Middle East and is positioned as a serious, professional partner to ministries of education, school boards, and parents — not a kids' toy brand.

---

## Sources used

- **Logo (uploaded):** `uploads/Robotmea.png` — full lockup, 4-quadrant icon + wordmark.
- **Website studied:** [https://www.robotmea.com/](https://www.robotmea.com/) — content, tone, page structure, partner ecosystem, program list and visual treatments referenced from the live site.
- **Brand colors (user-specified):** Blue `#449eb8`, Orange `#ff870b`, Red `#eb4848`, Green `#7d9e3e`.
- **Brand fonts (uploaded & self-hosted):** Century Gothic (Regular + Bold) for display, and the full Montserrat family (300–900 + italics) for body/UI. Loaded via `@font-face` from `fonts/` — no external Google Fonts dependency.

> If you have view access to a Figma file, additional codebase, or the original ttf bundles, drop them in via Import and we'll re-run the system against them.

---

## Index — what's in this folder

| File / folder | Purpose |
|---|---|
| `colors_and_type.css` | All design tokens — colors, type, spacing, radii, shadow, motion. Import this from any artifact. |
| `fonts/` | Self-hosted brand webfonts: Century Gothic (Regular + Bold) and the Montserrat family. Wired via `@font-face` in `colors_and_type.css`. |
| `assets/` | Logos and brand imagery. |
| `preview/` | Static HTML cards that populate the Design System review tab. |
| `ui_kits/website/` | Pixel-faithful recreation of the Robotmea marketing website (homepage + key sections). |
| `SKILL.md` | Agent Skill entry point — read this if loading the system as a Claude skill. |

---

## Brand at a glance

Robotmea is the umbrella over a portfolio of school-facing programs:

- **School Program** — full K-12 robotics & STEAM curriculum.
- **Technical College Program** — applied-tech pipeline for upper-secondary.
- **Madrassa Reform Program** — modernization track for traditional religious schools.
- **Robotics & STEAM Club** — extracurricular delivery.
- **Hybrid Schools / Hi-Tech School** — full school models.
- **Tech Centers, Accelerated STEAM Learning, Discovery & Innovation Hub, Innovation & Entrepreneurship Centre.**

Markets: Dubai (HQ), USA, Pakistan, South Korea, Tanzania.

The brand voice is **mission-driven and institutional**. Audience skews B2B (governments, school boards, principals, donors) more than B2C (parents/kids), so the design system avoids cartoonish or playful tropes that other EdTech brands lean on.

---

## CONTENT FUNDAMENTALS

### Tone
**Serious, missionary, capability-driven.** The brand frames itself as nation-building infrastructure, not a tutoring service. Copy reads more like a development bank or a UNESCO report than a consumer app.

### Voice
- **Third-person & institutional** when describing the company ("Robotmea is…", "Our mission is…").
- **Second-person ("you/your future")** only in calls to action and hero copy aimed directly at students or parents.
- Almost never first-person singular. Never colloquial.

### Casing
- **Big headings: ALL CAPS, BOLD.** This is the single strongest brand signature on the site. Example: `TRANSFORMING THE FUTURE OF YOUTH`.
- Eyebrow/section labels: ALL CAPS, smaller, often in orange.
- Body copy: sentence case.
- Buttons: Title Case OR ALL CAPS — both appear on the site. Default to **ALL CAPS** for primary CTAs in this system.

### Vocabulary
Recurring words that signal the brand: **transforming, empowering, innovation, future, 21st century, STEAM, robotics, AI, hands-on, real-world, industry-aligned, certified, world-class, accelerated, hybrid.**

### Emoji & punctuation
- **No emoji.** Robotmea is institutional; emoji would undercut trust with ministries and donors.
- No exclamation marks in long-form copy. Reserve them only for student-facing CTAs.
- Em dashes and ampersands are fine. Avoid sentence fragments in body copy.

### Examples (verbatim style)
- Headline: **TRANSFORMING THE FUTURE OF YOUTH**
- Subhead: *Empowering the next generation with 21st-century skills through STEAM, robotics, and AI.*
- Section eyebrow: **WHAT WE OFFER**
- CTA: **EXPLORE PROGRAMS** · **PARTNER WITH US** · **REQUEST A DEMO**

### Anti-patterns (avoid)
- ❌ Cutesy phrasings ("Let's go!", "Yay!")
- ❌ Quirky/playful kid-brand language ("super-fun coding adventure")
- ❌ Heavy slang or memes
- ❌ Long, marketing-hype run-on sentences

---

## VISUAL FOUNDATIONS

### Color
- **Primary:** Robotmea Blue `#449eb8` (the wordmark color) and Robotmea Orange `#ff870b` (the action / energy color).
- **Secondary:** Red `#eb4848`, Green `#7d9e3e` — used sparingly, mostly as category coding on the logo and on stat tiles.
- **Neutrals:** Off-white paper `#f7f9fb`, mist `#eef2f5` for section backgrounds, ink scale `#14202b → #5b6770 → #9aa3ad` for type.
- The four logo colors map directly to the **four "pillars"** in the mark (idea, education, IoT, innovation) — when you need to color-code categories, reach for these.
- **Don't introduce purple or pink.** They're not in the system.
- Avoid bluish-purple gradients (a common AI-design tic). When a gradient is needed, fade blue → blue-deep (`#449eb8 → #226b81`), or use the warm orange gradient (`#ff870b → #e57400`).

### Typography
- **Display:** Century Gothic Bold, ALL CAPS, slight letter-spacing. Geometric, friendly-but-confident.
- **Body / UI:** Montserrat, 400–600 weights, sentence case.
- Headings carry **all** the personality; body type stays calm and neutral.
- Don't mix multiple display fonts. Don't use serifs anywhere.

### Backgrounds
- Primary surface is white. Section breaks switch to `--bg-3` (mist) or solid Robotmea Blue.
- Hero panels often use **full-bleed classroom / workshop photography** with a dark overlay (~40% navy multiply) so white display type sits cleanly.
- Decorative **element bars** (thin colored ticks in the four brand colors) accent section dividers — included as `assets/element-bar.svg`.
- No hand-drawn illustration. No texture/grain. No repeating patterns.

### Imagery vibe
- Real photography of students working with hardware (Arduino, drones, 3D-printers, lab setups).
- Color treatment is **warm-neutral, slightly cool in shadows** — not over-saturated, no Instagram-style filters.
- Diverse student bodies — uniforms common.
- Logos of partners ("As Featured On" strip) shown in greyscale at low opacity.

### Borders & dividers
- 1px hairlines in `--rm-line` (`#dde3e8`) on light surfaces.
- A decorative **4-color tick bar** (blue / orange / green / red) acts as a brand divider above section headings.

### Corner radii
- Cards: **14px** (`--radius-lg`). Buttons: **8px** (`--radius-md`) for default; **999px pill** for highlight CTAs and chips.
- Icon/avatar containers: pill or full circle.
- Avoid hard 0px corners on content cards — the brand reads softer than that.

### Shadows / elevation
- Light, neutral shadows. **Never** colored shadows by default.
- For "pop" moments (featured cards, hovering CTA), use a tinted shadow: `--shadow-pop` (blue glow) for cool sections, `--shadow-warm` (orange) for action moments.

### Buttons
- **Primary:** solid orange `#ff870b`, white text, 8px radius (or pill), ALL CAPS, bold.
- **Secondary:** solid blue `#449eb8`, white text.
- **Outline:** transparent bg, blue border + blue text.
- **Ghost on dark:** transparent bg, white border + white text — for hero overlays.
- Hover: darken bg by ~10%, very small translate-y (-1px) — no scaling, no glow.
- Press: scale 0.98, no color shift.

### Hover & motion
- Default hover: color darken or `opacity 0.85` on images.
- Card hover: lift `translateY(-2px)` + `--shadow-2 → --shadow-3`.
- Easing: `cubic-bezier(.2,.7,.2,1)` — calm, never bouncy.
- Duration: 140ms for state changes, 240ms for entrance.
- No spring/bounce animations. No "wow" parallax. This is an institutional brand.

### Transparency & blur
- Used **sparingly**. Header on dark hero uses a 4px backdrop-blur with `rgba(15,26,36,.4)`.
- Avoid frosted-glass card stacks — too consumer-y for the brand.

### Layout rules
- Max content width 1200px, body text width capped ~720px.
- Generous vertical rhythm: 64–96px between sections.
- Grids run on 12 columns, 24–32px gutters.
- Section pattern is **eyebrow → display heading → lead paragraph → grid of cards/photos → CTA**.

---

## ICONOGRAPHY

Robotmea does **not** ship a custom icon font. The site uses a mix of:

1. **Custom illustrated PNG icons** for big concept tiles (school program, technical college, etc.) — full-color, painterly, ~300×300px. These act more as *illustration thumbnails* than UI icons. We've mirrored this with placeholder slots in the UI kit (drop the user's own PNGs in).
2. **FontAwesome line/solid icons** for small UI affordances — arrows, phone, email, social. Loaded via Elementor's bundled icon set on the live site.
3. The **four brand pillars** in the logo function as informal category icons: lightbulb (idea), graduation cap (learning), factory + IoT (industry), gears/innovation (R&D).

In this system we:
- Load **Lucide Icons** via CDN as the working UI icon set — same stroke weight (1.5–2px) and minimal style FontAwesome's outline set uses. This is **a substitution** — flag if pixel-fidelity to the live site matters and we'll swap to a FontAwesome CDN.
- Render the **4 brand pillars** as flat-color SVG glyphs when used as category badges (`assets/pillar-*.svg` — TBD on next pass).
- **No emoji.** **No unicode glyphs** as icons. **No hand-drawn SVG illustrations** — drop in real PNG illustrations from the marketing team or commission them.

---

## UI Kits available

- **`ui_kits/website/`** — marketing site recreation. Homepage hero, program tiles, stats strip, who-we-are, testimonials, footer. See `ui_kits/website/index.html`.

---

## Quick-start for a new artifact

```html
<link rel="stylesheet" href="../colors_and_type.css">
```

Then use the semantic CSS variables (`--brand`, `--action`, `--fg-1` …) and the typographic classes (`.eyebrow`, `.h1`, `.lead`, `.body`) — never re-declare colors or sizes inline.
