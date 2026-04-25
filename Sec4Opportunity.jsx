(() => {
/* global React, Bits */
const { Eyebrow, Button, Photo } = window.Bits;

/* ============================================================
   SECTION 4 — 6.7 ACRE INVESTMENT OPPORTUNITY
   ============================================================ */
function OpportunitySection() {
  const cols = [
    { t: "Location", d: "Strategic positioning in Fort McMurray's growth corridor." },
    { t: "Vision", d: "Multi-family residential development designed for the region's housing demand." },
    { t: "Opportunity", d: "Seeking aligned investors and development partners." },
  ];
  return (
    <section data-section-id="opportunity" data-screen-label="04 Opportunity" style={{
      padding: "var(--section-pad-y) 0 0",
      background: "#050505",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 var(--gutter)" }}>
        <Eyebrow>Investment opportunity</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(48px, 9vw, 144px)",
          lineHeight: 0.95, letterSpacing: "-.05em", textTransform: "uppercase",
          color: "#fff", margin: "32px 0 32px",
        }}>
          <span style={{ color: "var(--accent)" }}>6.7</span> acres.<br/>
          Infinite potential.
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--fg-muted)", maxWidth: 720, marginBottom: 64 }}>
          A premier multi-family development opportunity in Fort McMurray, ready for the right partner.
        </p>
      </div>

      {/* Aerial / site map placeholder, full-width */}
      <div style={{ width: "100%", marginBottom: 80 }}>
        <Photo tone="aerial" ratio="21/9" label="Aerial render — site map" hover />
      </div>

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 var(--gutter) var(--section-pad-y)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 1, background: "var(--border)", marginBottom: 64,
        }}>
          {cols.map((c) => (
            <div key={c.t} style={{ background: "#050505", padding: "48px 36px", borderTop: "2px solid var(--accent)" }}>
              <div style={{
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
                letterSpacing: ".25em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 20,
              }}>{c.t}</div>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0 }}>{c.d}</p>
            </div>
          ))}
        </div>
        <Button variant="primary">Request investor package</Button>
      </div>
    </section>
  );
}

window.Sections = Object.assign(window.Sections || {}, { OpportunitySection });

})();
