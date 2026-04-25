(() => {
/* global React, Bits */
const { Eyebrow, Photo, Button } = window.Bits;

/* ============================================================
   SPONSORSHIPS — SECTION 4 — ITD ACADEMY SPOTLIGHT
   Two-column: 4-photo grid (L) + description (R)
   Featured program — most prominent block on the page.
   ============================================================ */
function SponsITD() {
  return (
    <section data-section-id="sp-itd" data-screen-label="04 ITD Academy" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      background: "#0A0A0A",
      position: "relative",
    }}>
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: "absolute", right: "var(--gutter)", top: "calc(var(--section-pad-y) - 60px)",
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 280, lineHeight: 0.85, letterSpacing: "-.05em",
        color: "rgba(206,166,77,.04)", pointerEvents: "none", userSelect: "none",
      }}>ITD</div>

      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1fr",
          gap: "clamp(48px, 7vw, 120px)",
          alignItems: "start",
        }}>
          {/* Photo collage — 4 small images, asymmetric grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gridTemplateRows: "260px 200px",
            gap: 16,
          }}>
            <div style={{ gridRow: "span 2", position: "relative", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Photo tone="warm" ratio="auto" zoom hover style={{ position: "absolute", inset: 0, aspectRatio: "auto" }} />
              <PhotoBadge n="01" label="Practice · Saprae Creek" />
            </div>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Photo tone="gold" ratio="auto" zoom hover style={{ position: "absolute", inset: 0, aspectRatio: "auto" }} />
              <PhotoBadge n="02" label="Tip-off" />
            </div>
            <div style={{ position: "relative", overflow: "hidden", border: "1px solid var(--border)" }}>
              <Photo tone="cool" ratio="auto" zoom hover style={{ position: "absolute", inset: 0, aspectRatio: "auto" }} />
              <PhotoBadge n="03" label="Locker room" />
            </div>
            {/* Strip across bottom */}
            <div style={{
              gridColumn: "span 2", height: 140, marginTop: 4,
              position: "relative", overflow: "hidden", border: "1px solid var(--border)",
            }}>
              <Photo tone="neutral" ratio="auto" zoom hover style={{ position: "absolute", inset: 0, aspectRatio: "auto" }} />
              <PhotoBadge n="04" label="Game day · Wood Buffalo" />
            </div>
          </div>

          {/* Copy column */}
          <div style={{ paddingTop: 24 }}>
            <Eyebrow>Featured Program</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(56px, 9vw, 144px)",
              lineHeight: 0.92, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "#fff",
              margin: "32px 0 0",
            }}>
              ITD<br/>
              <span style={{ color: "var(--accent)" }}>Academy</span>.
            </h2>
            <p style={{
              marginTop: 48, fontSize: 19, lineHeight: 1.6,
              color: "var(--fg-muted)", maxWidth: 560,
            }}>
              Founded by SMG President <span style={{ color: "#fff", fontWeight: 600 }}>Khurram Sultan</span>,
              ITD Academy is a basketball training program that has scaled to{" "}
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>20 teams</span> across the region.
            </p>

            {/* Three-line credo */}
            <div style={{
              marginTop: 48, paddingTop: 32, paddingBottom: 32,
              borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
              display: "flex", flexDirection: "column", gap: 8,
            }}>
              <Credo>Building athletes.</Credo>
              <Credo>Building character.</Credo>
              <Credo accent>Building community.</Credo>
            </div>

            <div style={{ marginTop: 48 }}>
              <Button variant="primary" as="a" href="#" onClick={(e) => e.preventDefault()}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credo({ children, accent }) {
  return (
    <span style={{
      fontFamily: "var(--font-display)", fontWeight: 900,
      fontSize: "clamp(28px, 3.4vw, 48px)",
      lineHeight: 1.02, letterSpacing: "-.04em",
      textTransform: "uppercase",
      color: accent ? "var(--accent)" : "#fff",
    }}>{children}</span>
  );
}

function PhotoBadge({ n, label }) {
  return (
    <>
      <span style={{
        position: "absolute", top: 12, left: 12, zIndex: 2,
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9,
        letterSpacing: ".3em", color: "rgba(255,255,255,.7)",
      }}>{n}</span>
      <span style={{
        position: "absolute", bottom: 12, left: 12, zIndex: 2,
        fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
        letterSpacing: ".2em", textTransform: "uppercase",
        color: "rgba(255,255,255,.75)",
      }}>{label}</span>
    </>
  );
}

window.Sections = Object.assign(window.Sections || {}, { SponsITD });

})();
