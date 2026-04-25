# SMG Builders — Website UI Kit

Hi-fidelity, click-through React recreation of the 5-page SMG Builders marketing site.
Black-dominant, gold-accented, oversized type, sharp edges. Built against the tokens in `../../colors_and_type.css`.

## Run it
Open `index.html`. Click the top nav to move between Home, About, Portfolio, Sponsorships, Contact.

## What's here

| File | Purpose |
|---|---|
| `index.html` | Mounts the React app and the page router. |
| `Primitives.jsx` | Shared parts: `Icon`, `Eyebrow`, `Button`, `GoldRule`, `Photo`, `TopNav`, `Footer`. |
| `HomePage.jsx` | Hero with rotating word, services strip, featured project, 6.7-acre opportunity, stats, CTA band. |
| `AboutPage.jsx` | Story, four values, team showcase (placeholder — final component supplied separately), timeline. |
| `PortfolioPage.jsx` | Filterable project grid (Custom / Commercial / Restoration). |
| `SponsorshipsPage.jsx` | Three flagship sponsorships and the quarterly application CTA. |
| `ContactPage.jsx` | Two-column form + dual-location contact card. Submits to a thank-you state. |

## Notes
- **Photography is placeholders by design.** All `<Photo>` components render gradient blocks tinted to suggest mood (warm/cool/neutral/storm/gold). Replace with real architectural photography when available.
- **Team showcase is a placeholder.** The brief mentions a custom team showcase component will be supplied separately.
- All copy follows the voice rules in the root `README.md` — direct, declarative, no emoji, fragments allowed.
- WordPress / Bricks Builder port: each page-level `<section>` is a clean unit; lift them as Bricks blocks.
