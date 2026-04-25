(() => {
/* global React, Bits */
const { Eyebrow } = window.Bits;

/* ============================================================
   ABOUT — SECTION 5 — VALUES
   Three pillars, gold accent lines between
   ============================================================ */

const PILLARS = [
  { num: "01", title: "Quality",    desc: "Built to last. No shortcuts. No exceptions." },
  { num: "02", title: "Community",  desc: "Invested in Wood Buffalo since day one." },
  { num: "03", title: "Resilience", desc: "Rebuilding through wildfire, flood, and beyond." },
];

function AboutValues() {
  return (
    <section data-section-id="about-values" data-screen-label="05 Values" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border-light)",
      background: "var(--bg-light)",
      color: "var(--fg-light)",
      position: "relative",
    }}>
      {/* Faint background watermark */}
      <div aria-hidden="true" style={{
        position: "absolute", left: "var(--gutter)", top: "calc(var(--section-pad-y) - 40px)",
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 280, lineHeight: 0.85, letterSpacing: "-.05em",
        color: "rgba(0,0,0,.04)", pointerEvents: "none", userSelect: "none",
      }}>
        WHAT
      </div>

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "var(--accent-pressed)",
        }}>What we stand for</span>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 6vw, 96px)",
          lineHeight: 1.02, letterSpacing: "-.05em",
          textTransform: "uppercase", color: "var(--fg-light)",
          margin: "32px 0 96px", maxWidth: 1100,
        }}>
          Three pillars.<br/>
          One <span style={{ color: "var(--accent-pressed)" }}>standard</span>.
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--border-light-strong)",
        }}>
          {PILLARS.map((p, i) => (
            <Pillar key={p.title} {...p} isLast={i === PILLARS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Pillar({ num, title, desc, isLast }) {
  return (
    <div style={{
      padding: "56px 48px 64px",
      borderRight: isLast ? "0" : "1px solid var(--border-light-strong)",
      position: "relative",
      display: "flex", flexDirection: "column", gap: 32,
      minHeight: 380,
    }}>
      {/* Top gold accent line */}
      <span aria-hidden="true" style={{
        position: "absolute", top: -1, left: 0,
        width: 80, height: 2, background: "var(--accent)",
      }} />

      {/* Number */}
      <span style={{
        fontFamily: "ui-monospace, Menlo, monospace",
        fontSize: 12, letterSpacing: ".3em",
        color: "var(--accent-pressed)",
      }}>{num} / 03</span>

      {/* Title — oversized */}
      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(56px, 7vw, 104px)",
        lineHeight: 0.95, letterSpacing: "-.05em",
        textTransform: "uppercase", color: "var(--fg-light)",
        margin: 0,
      }}>{title}</h3>

      {/* Description */}
      <p style={{
        fontSize: 17, lineHeight: 1.55, color: "var(--fg-light-muted)",
        maxWidth: 320, margin: "auto 0 0",
      }}>{desc}</p>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { AboutValues });

})();
