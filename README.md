# SMG Builders Design System

A design system for **SMG Builders**, a general contracting company headquartered in Fort McMurray, Alberta, expanding into Edmonton. Founded 2013. Custom homes, commercial properties, and post-disaster restoration (Fort McMurray Wildfire 2016, 2020 Flood).

The brand voice is **Nike-meets-construction**: bold, aggressive, premium, masculine, established. The visual system is black-dominant with gold accents, oversized typography, and sharp edges. The intent is for SMG to feel like it has dominated the region for decades.

---

## Index — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | You are here. Brand overview, content/visual foundations, iconography. |
| `SKILL.md` | Agent skill manifest — load this when invoking the system in another project / Claude Code. |
| `colors_and_type.css` | All design tokens: colors, type, spacing, radii, shadows, motion, plus semantic classes. |
| `assets/` | Logos and brand imagery. |
| `fonts/` | Notes on font sourcing. (Inter is loaded from Google Fonts; Helvetica is system-only — see Typography note below.) |
| `preview/` | Standalone HTML cards that populate the **Design System** tab. |
| `ui_kits/website/` | Marketing site UI kit — components + interactive `index.html` covering Home, About, Portfolio, Sponsorships, Contact. |

---

## Sources provided

- `uploads/v3.png` — horizontal SMG Builders logo (logomark + "BUILDERS" wordmark + tagline). Copied to `assets/logo-horizontal.png`.
- `uploads/v4.png` — stacked SMG Builders logo. Copied to `assets/logo-stacked.png`.
- A written brief covering brand voice, palette, typography, treatment rules, content avoid-list, reference touchstones, and project context (5-page marketing site → WordPress + Bricks Builder, About-page team component to be supplied separately, hero rotating-word system, 6.7-acre development opportunity, Fort McMurray + Edmonton service area).

> No codebase, no Figma, no slide deck were attached. The system is built from the brief + provided logos.

---

## CONTENT FUNDAMENTALS

How copy is written across the brand.

**Voice.** Bold, aggressive, premium, confident. We don't ask, we declare. We don't pad with adjectives, we let the numbers speak. We never apologize. We never use cute. We are the dominant general contractor in the region — write like it.

**Tone calibration:**
- Confident, not arrogant.
- Direct, not curt.
- Premium, not luxurious. (We *build* premium. We don't *sell* luxury.)
- Established, not nostalgic.

**Person.** Mostly first-person plural ("We build…", "We led restoration of…") to communicate team scale and capability. Second-person ("you") shows up only in calls-to-action and the hero rotating-word system ("We offer solutions for [you / amazing / new / wonderful / beautiful / smart]").

**Casing.**
- All display headlines are **UPPERCASE**. This is the Nike-meets-construction signature.
- Eyebrows are uppercase, small, wide-tracked.
- Body copy is sentence case. Title Case is reserved for proper nouns and project names.
- Buttons: ALL CAPS, wide-tracked, short verbs. ("BUILD WITH US", "SEE PORTFOLIO", "GET ESTIMATE".)

**Sentence rhythm.** Short. Declarative. Confident. Use fragments for impact. ("Sharp edges. Generous space. Built to last.") Pair a fragment with one full sentence that earns it.

**Numbers and proof.** Lean on them. "13 YEARS", "6.7 ACRES", "200+ HOMES", "2 CITIES". Numbers go in display weight, gold or white. Stats are decoration AND content.

**No emoji. No exclamation points. No marketing fluff.** No "amazing," "incredible," "world-class" used by us about us — let the work say it. Avoid "passionate," "innovative," "synergy," "solutions" (except the hero), "world-class," "best-in-class," "your trusted partner," "dream home" stock-construction phrasing.

**What to lean into.** Place names ("Fort McMurray", "Edmonton", "Wood Buffalo"), specific years ("Since 2013", "Wildfire 2016"), specific scale ("6.7 acres"), trade-specific verbs ("frame", "pour", "restore", "deliver").

**Examples — yes.**
- *Eyebrow:* `EST. 2013 — FORT MCMURRAY`
- *Headline:* `WE BUILD WHAT LASTS.`
- *Lead:* `Custom homes, commercial properties, and post-disaster restoration across northern Alberta. Thirteen years on the ground, two cities served.`
- *Button:* `BUILD WITH US →`
- *Stat:* `200+ HOMES DELIVERED`
- *Section title:* `THE 6.7-ACRE OPPORTUNITY.`

**Examples — no.**
- ~~"Welcome to SMG Builders! We're passionate about turning your dreams into reality. 🏠✨"~~
- ~~"Our innovative, world-class team delivers solutions tailored just for you."~~
- ~~"At SMG, we believe every home tells a story…"~~

---

## VISUAL FOUNDATIONS

### Color
Black is not a background, it is the brand. **#000000** dominates every surface; gold **#CEA64D** is the only accent that earns ink. Light gold **#DDC17C** handles secondary states (role labels, muted accents). White **#FFFFFF** is for primary text on black; silver **#E6E6E6** for secondary text. There are no third colors. No reds, blues, greens. No semantic green/red for success/error states — those are handled with gold (positive) and white-on-black-with-rule (warning), or fall back to system defaults only inside form validation.

Avoid: soft beiges, warm earth tones, pastels, orange/safety-vest "construction" oranges, and gradient washes between hues. The only acceptable gradient is a **black → transparent protection gradient** under hero text on imagery.

### Type
**Display:** Helvetica Bold. Web fallback: **Inter Black (900)**. Letter-spacing **−0.05em** is non-negotiable on display sizes — it is the signature look. Display copy is **UPPERCASE** by default.
**Body:** Inter regular (400) at 16px, 1.55 line-height.
**Eyebrow:** Inter semibold, 12px, **letter-spacing 0.2em**, **uppercase**, **gold**, with a 24px gold rule preceding it.
**Scale:** display 180 / h1 112 / h2 72 / h3 48 / h4 32 / lead 22 / body 16 / caption 13. Hero copy goes huge — clamp to 13vw on a 1440 canvas.

> **Substitution flag:** Helvetica is not freely web-licensed. We use Inter Black as the loaded display fallback. If you have a licensed Helvetica web kit (or a desktop license to host self-hosted), drop the `.woff2` files into `fonts/` and update `--font-display` in `colors_and_type.css`. **Please confirm the licensing path** so we can swap to true Helvetica in production.

### Spacing
4px base. Section padding clamps from 96px (mobile) to 200px (1440+). Generous gutters (clamp 24–64px). **Never crowd.** Whitespace is part of the premium signal. Layouts breathe; section transitions are wide.

### Backgrounds
Predominantly flat black. **No repeating patterns, no textures, no hand-drawn illustrations.** Imagery is full-bleed or 50/50-split with text. The only consistent decoration is the **gold rule** — a 64px × 2px line that signals section starts, often paired with the eyebrow.

### Imagery
**Grayscale by default, full-color on hover or active state.** This is a key motion moment. Photography is high-contrast architectural — exteriors at golden hour, interiors with strong directional light, construction in-progress with clean staging. No people staring at the camera. No stock photography. No circular crops. No avatars.

### Motion
Premium and deliberate. **Easing: `cubic-bezier(0.4, 0, 0.2, 1)`** (or the more pronounced `(0.16, 1, 0.3, 1)` for entrances). **Durations: 400–600ms** for most transitions, 200ms for micro-interactions, 900ms for the photo grayscale-to-color reveal. **Fade-up-on-scroll** is the entrance animation: opacity 0 → 1, translateY 24px → 0. Subtle parallax on hero imagery (translateY at 0.3× scroll). No bounces, no overshoots, no slide-from-side, no spring physics.

### Hover states
- Buttons (primary gold): background → light gold (`#DDC17C`).
- Buttons (ghost white): background fills white, text inverts to black.
- Links: gold underline grows from left to right (`background-size: 0% → 100%`).
- Cards: 1px gold border replaces ink border, photography reveals color.
- Nav items: gold underline, no color shift on the text itself.

### Press states
- Primary button: background → deep gold `#A6802F`, `translateY(1px)` for tactile feedback.
- No scale-down on tap — we don't bounce.

### Borders
**1px solid `--border` (`#1F1F1F`)** by default on dark surfaces. Stronger borders use `--border-strong` (`#2A2A2A`). The **gold accent border** (`--border-accent`) appears on hover and on the active card in a list.

### Shadows
Used sparingly — black-on-black has nowhere to throw shadow. The two cases that exist:
- `--shadow-2`: soft ambient under elevated cards on lighter sections (rare).
- `--shadow-gold`: a tinted glow under primary CTAs on hover, low-opacity (rgba 206,166,77,0.35).

### Corner radii
**Sharp by default** (`0px`). Allowed: `2px` for inputs, `4px` maximum anywhere. **Never round buttons or cards beyond 4px.** No pill shapes except in tag chips.

### Cards
Black or `#0A0A0A` background, 1px `#1F1F1F` border, 0–4px radius, 32px internal padding. No drop shadows by default. The whole card is the link target on hover; treat it as one unit.

### Transparency & blur
Used only for the **fixed top nav** (translucent black with backdrop-blur on scroll) and **hero text protection gradients** (linear-gradient black 60% → transparent). Never on cards, never on body content.

### Layout rules
- **Asymmetric where it earns impact** — hero with text-left/image-right 50/50 split, oversized headline breaking the column grid, stat blocks aligned to the right rail.
- **Centered for moments only** — section eyebrows + section titles stacked left or center based on context; testimonials and contact CTAs are typically left-aligned, not centered.
- **Fixed elements:** top nav (60px tall, translucent, blurs on scroll), bottom-right scroll indicator on hero, occasionally a left-rail social column on desktop.
- **Grid:** 12-column at 1440 max-width, 64px gutter desktop, 24px mobile.

### What "premium" actually means here
Restraint. One typeface. Two colors. Sharp edges. Long pauses between elements. The camera moves slowly. The gold appears rarely enough that you notice every time it does.

---

## ICONOGRAPHY

The brand does not lean on iconography. The **logo's geometric S/M/B logomark** is the dominant graphic element — a single circular gold mark that does most of the visual work. Icons elsewhere are minimal, line-based, and consistently weighted.

**Icon system:** **Lucide** (via CDN — `https://unpkg.com/lucide-static`). Lucide's stroke-based, 24px-grid, 2px-stroke vocabulary matches the sharp/minimal treatment of the rest of the system. Icons render in **white** (default), **gold** (active / accent), or **silver** (subtle). Stroke width stays at 2px; never fill-only.

**Allowed icons (curated):**
- `arrow-right`, `arrow-up-right` — CTAs, link affordances.
- `phone`, `mail`, `map-pin` — contact module.
- `instagram`, `facebook`, `linkedin` — social rail.
- `chevron-down`, `menu`, `x` — nav primitives.
- `play` — video poster (rare).
- `plus` — accordion / FAQ disclosure.

**Banned, even though they'd be tempting for a construction brand:**
- Hard hats, hammers, wrenches, cranes, blueprints, gears, safety vests, traffic cones. Any cliché construction icon.
- Filled icons of any kind.
- Multi-color icons.
- Emoji. Anywhere. Ever.
- Unicode characters as icons (no `→`, `★`, `■`). The one exception is the typographic **arrow `→`** appearing INSIDE button labels, where it's set in the same uppercase weight as the button text — that's typographic, not iconographic.

**SVG vs. font.** Lucide is consumed as inline SVG in JSX (or via CDN `<img>` for static HTML). No icon font.

**Logo usage:**
- Horizontal logo (`assets/logo-horizontal.png`) — for nav, footer, headers.
- Stacked logo (`assets/logo-stacked.png`) — for square placements (favicons, watermarks, social cards, hero corner marks).
- Minimum size: horizontal 120px wide, stacked 64px wide. Don't go smaller — the logomark loses its gaps.
- Always on black. The wordmark "BUILDERS" is silver in artwork; do not recolor it.

> **Iconography note:** since SMG didn't ship a custom icon set, Lucide is a **substitution** chosen to match the visual treatment. If a future engagement produces a custom icon set, drop the SVGs into `assets/icons/` and update `ICONOGRAPHY` and the components that consume them.

---

## Typography font-file note

**Helvetica is not freely web-licensed.** This system uses **Inter** (loaded from Google Fonts) as the display fallback under the name `--font-display`. Where Helvetica is desired in production, the client must provide a licensed Helvetica web kit (`.woff2` files), to be placed in `fonts/` with the appropriate `@font-face` declarations.

**Inter Black 900** approximates Helvetica Bold's stance closely at large display sizes once `letter-spacing: -0.05em` is applied — but Helvetica's terminals and `R` leg are unmistakable, and pixel-level differences will show up under scrutiny. **Please confirm whether to procure a Helvetica license or proceed with Inter Black as the production display face.**

---
