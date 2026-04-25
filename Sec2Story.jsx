(() => {
/* global React, Bits */
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   ABOUT — SECTION 2 — OUR STORY
   Two-column: founder photo (L) + story copy (R)
   ============================================================ */
function AboutStory() {
  return (
    <section data-section-id="about-story" data-screen-label="02 Our Story" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1.15fr",
        gap: "clamp(48px, 7vw, 120px)",
        alignItems: "start",
      }}>
        {/* Photo column — sticky-feel asymmetric */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", top: -24, left: -24,
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: 220, lineHeight: 0.85, letterSpacing: "-.05em",
            color: "rgba(206,166,77,.08)", pointerEvents: "none",
            userSelect: "none",
          }}>2013</div>
          <Photo tone="warm" ratio="4/5" label="Founder · Early days" zoom
                 style={{ position: "relative", zIndex: 1 }} />
          {/* Caption strip */}
          <div style={{
            marginTop: 20, display: "flex", justifyContent: "space-between",
            fontFamily: "var(--font-body)", fontSize: 11,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--fg-subtle)",
          }}>
            <span>Khurram Sultan · Founder</span>
            <span style={{ color: "var(--accent)" }}>Yr. 01</span>
          </div>
        </div>

        {/* Copy column */}
        <div style={{ paddingTop: 24 }}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 1.02, letterSpacing: "-.05em",
            textTransform: "uppercase", color: "#fff",
            margin: "32px 0 56px",
          }}>
            From one build<br/>
            to <span style={{ color: "var(--accent)" }}>many</span>.
          </h2>

          <p style={{
            fontSize: 22, lineHeight: 1.55, color: "var(--fg-muted)",
            maxWidth: 640, margin: 0,
          }}>
            Founded in 2013, SMG Builders is a design-build construction firm proudly
            serving the Regional Municipality of Wood Buffalo and surrounding areas.
          </p>
          <p style={{
            fontSize: 17, lineHeight: 1.65, color: "var(--fg-muted)",
            maxWidth: 600, margin: "32px 0 0",
          }}>
            Headquartered in Fort McMurray, Alberta, we provide full-spectrum construction
            services — from custom residential homes and renovations to large-scale commercial
            and institutional projects. Today we're expanding into Edmonton, bringing northern
            resilience to a new market.
          </p>

          {/* Stat strip */}
          <div style={{
            marginTop: 80, paddingTop: 40,
            borderTop: "1px solid var(--border)",
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32,
          }}>
            <Stat n="13" unit="years" label="Building since 2013" />
            <Stat n="2" unit="markets" label="Fort McMurray + Edmonton" />
            <Stat n="100%" unit="" label="Locally owned & operated" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, unit, label }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 64, lineHeight: 0.95, letterSpacing: "-.05em",
        color: "var(--accent)",
        display: "flex", alignItems: "baseline", gap: 8,
      }}>
        {n}
        {unit && <span style={{ fontSize: 14, color: "var(--fg-subtle)", fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase" }}>{unit}</span>}
      </div>
      <div style={{
        marginTop: 12, fontSize: 13, color: "var(--fg-muted)",
        letterSpacing: ".05em",
      }}>{label}</div>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { AboutStory });

})();
