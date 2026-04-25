(() => {
/* global React, Bits */
const { Eyebrow } = window.Bits;

/* ============================================================
   SPONSORSHIPS — SECTION 2 — INTRO
   "INVESTED IN THE NORTH." — large body paragraph statement
   ============================================================ */
function SponsIntro() {
  return (
    <section data-section-id="sp-intro" data-screen-label="02 Intro" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      position: "relative",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "clamp(48px, 7vw, 120px)",
          alignItems: "start",
        }}>
          <div style={{ paddingTop: 16 }}>
            <Eyebrow>Our Commitment</Eyebrow>
            {/* Indicators row — paint a sense of scope at a glance */}
            <div style={{ marginTop: 64, display: "flex", flexDirection: "column", gap: 24 }}>
              <Indicator n="20+" label="Sponsored teams & programs" />
              <Indicator n="13"  label="Years of community giving" />
              <Indicator n="2"   label="Disaster recoveries led" />
            </div>
          </div>

          <div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(48px, 7vw, 120px)",
              lineHeight: 0.96, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "#fff",
              margin: 0, maxWidth: 1100,
            }}>
              Invested in<br/>
              the <span style={{ color: "var(--accent)" }}>North</span>.
            </h2>
            <p style={{
              marginTop: 56, fontSize: 22, lineHeight: 1.55, color: "#fff",
              fontWeight: 400, maxWidth: 760,
            }}>
              Giving back isn't an afterthought at SMG — it's the foundation. Since 2013, we've
              put real dollars and real time into the people, programs, and places that make
              Wood Buffalo what it is.
            </p>
            <p style={{
              marginTop: 32, fontSize: 17, lineHeight: 1.7, color: "var(--fg-muted)",
              maxWidth: 720,
            }}>
              Sponsorships, donations, youth programs, and disaster response — when the region
              shows up for itself, SMG is on the ground. We were here through the 2016 Wildfire
              and the 2020 Flood. We're here for every basketball season, every fundraiser,
              every benefit. The same crews who frame your home help frame the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Indicator({ n, label }) {
  return (
    <div style={{
      display: "flex", alignItems: "baseline", gap: 20,
      paddingBottom: 24, borderBottom: "1px solid var(--border)",
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 64, lineHeight: 1, letterSpacing: "-.05em",
        color: "var(--accent)", flexShrink: 0, minWidth: 120,
      }}>{n}</span>
      <span style={{
        fontSize: 13, color: "var(--fg-muted)",
        letterSpacing: ".05em",
      }}>{label}</span>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { SponsIntro });

})();
