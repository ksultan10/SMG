(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow } = window.Bits;

/* ============================================================
   SPONSORSHIPS — SECTION 5 — ORGANIZATIONS GRID
   Logo tiles. Hover: gold/full color + description fades in.
   ============================================================ */

const ORGS = [
  { name: "Wood Buffalo Minor Hockey",  short: "WBMHA",  desc: "Multi-year jersey sponsorship and tournament backing across U7–U18 divisions." },
  { name: "Fort McMurray Food Bank",    short: "FMFB",   desc: "Quarterly donations and an annual holiday food drive run from the SMG yard." },
  { name: "Northern Lights Foundation", short: "NLF",    desc: "Title-tier sponsor of the annual Lights of Hope gala benefitting families in crisis." },
  { name: "United Way Wood Buffalo",    short: "UWWB",   desc: "Workplace giving partner since 2016." },
  { name: "Habitat for Humanity",       short: "HFH",    desc: "On-site framing crews and material donations for two regional builds." },
  { name: "MacDonald Island Park",      short: "MIP",    desc: "Court sponsorship and youth basketball clinics through ITD Academy." },
  { name: "Oilsands Curling Club",      short: "OCC",    desc: "Community ice-time and bonspiel sponsorships through the winter season." },
  { name: "Boys & Girls Club",          short: "BGC",    desc: "Mentorship trades-day and equipment grants for the Wood Buffalo chapter." },
];

function SponsOrgs() {
  return (
    <section data-section-id="sp-orgs" data-screen-label="05 Organizations" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border-light)",
      background: "var(--bg-light)",
      color: "var(--fg-light)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24,
          marginBottom: 80,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
              letterSpacing: ".25em", textTransform: "uppercase",
              color: "var(--accent-pressed)",
            }}>Organizations We Support</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 1.02, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "var(--fg-light)",
              margin: "32px 0 0", maxWidth: 1200,
            }}>
              Backed by SMG.
            </h2>
          </div>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--fg-light-subtle)", paddingBottom: 12,
          }}>
            {ORGS.length} partners · ongoing
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--border-light-strong)",
          borderLeft: "1px solid var(--border-light-strong)",
        }}>
          {ORGS.map((o, i) => <OrgTile key={o.name} {...o} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function OrgTile({ name, short, desc, index }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", padding: 32,
           borderRight: "1px solid var(--border-light-strong)",
           borderBottom: "1px solid var(--border-light-strong)",
           minHeight: 280,
           background: hover ? "#0A0A0A" : "transparent",
           color: hover ? "#fff" : "var(--fg-light)",
           cursor: "pointer",
           transition: "background 400ms cubic-bezier(.4,0,.2,1), color 400ms cubic-bezier(.4,0,.2,1)",
           display: "flex", flexDirection: "column",
         }}>
      {/* Top accent that draws on hover */}
      <span aria-hidden="true" style={{
        position: "absolute", top: -1, left: 0,
        height: 2, width: hover ? "100%" : 0,
        background: "var(--accent)",
        transition: "width 600ms cubic-bezier(.4,0,.2,1)",
      }} />

      {/* Index */}
      <span style={{
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
        letterSpacing: ".3em",
        color: hover ? "var(--accent)" : "var(--fg-light-subtle)",
        transition: "color 400ms cubic-bezier(.4,0,.2,1)",
      }}>
        {String(index + 1).padStart(2, "0")} / {String(ORGS.length).padStart(2, "0")}
      </span>

      {/* Logo placeholder — short-form mark */}
      <div style={{
        marginTop: "auto", marginBottom: 20,
        height: 84, display: "flex", alignItems: "center",
      }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: 56, lineHeight: 0.9, letterSpacing: "-.05em",
          color: hover ? "var(--accent)" : "rgba(0,0,0,.28)",
          filter: hover ? "none" : "saturate(0)",
          transition: "color 500ms cubic-bezier(.4,0,.2,1), filter 500ms cubic-bezier(.4,0,.2,1)",
        }}>{short}</span>
      </div>

      {/* Org name (always visible) */}
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 18, lineHeight: 1.15, letterSpacing: "-.02em",
        textTransform: "uppercase",
        color: hover ? "#fff" : "var(--fg-light)",
        margin: 0,
        transition: "color 400ms cubic-bezier(.4,0,.2,1)",
      }}>{name}</h3>

      {/* Description (fades in on hover) */}
      <p style={{
        marginTop: 12, fontSize: 13, lineHeight: 1.55,
        color: "var(--fg-muted)",
        opacity: hover ? 1 : 0,
        maxHeight: hover ? 200 : 0,
        transform: hover ? "translateY(0)" : "translateY(8px)",
        transition: "all 400ms cubic-bezier(.4,0,.2,1)",
      }}>{desc}</p>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { SponsOrgs });

})();
