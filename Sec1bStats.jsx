(() => {
/* global React */

/* ============================================================
   PORTFOLIO — STATS BAND
   Light silver section between hero and grid. By-the-numbers.
   ============================================================ */
function PortfolioStats() {
  const STATS = [
    { n: "180+", label: "Projects delivered" },
    { n: "13",   label: "Years in Wood Buffalo" },
    { n: "4",    label: "Service divisions" },
    { n: "2",    label: "Disaster recoveries led" },
  ];

  return (
    <section data-section-id="portfolio-stats" data-screen-label="01b Stats" style={{
      padding: "120px var(--gutter)",
      background: "var(--bg-light)",
      color: "var(--fg-light)",
      borderTop: "1px solid var(--border-light)",
      borderBottom: "1px solid var(--border-light)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", gap: 32, flexWrap: "wrap",
          marginBottom: 64,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
              letterSpacing: ".25em", textTransform: "uppercase",
              color: "var(--accent-pressed)",
            }}>By the numbers</span>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 88px)",
              lineHeight: 1, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "var(--fg-light)",
              margin: "24px 0 0", maxWidth: 1100,
            }}>
              A track record<br/>
              you can <span style={{ color: "var(--accent-pressed)" }}>walk through</span>.
            </h2>
          </div>
          <span style={{
            fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11,
            letterSpacing: ".3em", color: "var(--fg-light-subtle)",
            paddingBottom: 12,
          }}>
            UPDATED Q2 · 2026
          </span>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          borderTop: "1px solid var(--border-light-strong)",
        }}>
          {STATS.map((s, i) => (
            <Stat key={s.label} {...s} isLast={i === STATS.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label, isLast }) {
  return (
    <div style={{
      padding: "48px 32px 8px",
      borderRight: isLast ? "0" : "1px solid var(--border-light-strong)",
      position: "relative",
    }}>
      <span aria-hidden="true" style={{
        position: "absolute", top: -1, left: 0,
        width: 56, height: 2, background: "var(--accent-pressed)",
      }} />
      <span style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(64px, 8vw, 128px)",
        lineHeight: 0.9, letterSpacing: "-.05em",
        color: "var(--fg-light)",
        display: "block",
      }}>{n}</span>
      <span style={{
        marginTop: 16, display: "block",
        fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
        letterSpacing: ".15em", textTransform: "uppercase",
        color: "var(--fg-light-muted)",
      }}>{label}</span>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { PortfolioStats });

})();
