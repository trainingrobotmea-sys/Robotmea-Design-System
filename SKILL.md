---
name: robotmea-design
description: Use this skill to generate well-branded interfaces and assets for Robotmea, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Brand colors:** Blue `#449eb8`, Orange `#ff870b`, Red `#eb4848`, Green `#7d9e3e`.
- **Fonts:** Century Gothic (display, ALL CAPS, bold) + Montserrat (body). Fall back to Questrial for Century Gothic if not licensed.
- **Voice:** Serious, institutional, mission-driven. No emoji, no cutesy language. Audience is school boards and ministries, not kids.
- **Logo:** `assets/logo-full.png` — keep the wordmark on blue; never recolor the four pillar tiles.
- **Tokens:** `colors_and_type.css` — `--brand`, `--action`, `--fg-1`, `--rm-blue` etc. Always import this from any artifact.
- **UI kit:** `ui_kits/website/` — homepage components ready to compose.

When designing something new, start by reading `README.md` in full — it covers visual foundations, iconography rules, and content/tone guidelines that aren't obvious from just the tokens.
