(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   SPONSORSHIPS — SECTION 3 — FEATURED VIDEO
   Full-width YouTube embed placeholder, gold play on hover
   ============================================================ */
function SponsFeaturedVideo() {
  const [hover, setHover] = useState(false);
  return (
    <section data-section-id="sp-video" data-screen-label="03 Video" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", gap: 32, flexWrap: "wrap",
          marginBottom: 56,
        }}>
          <Eyebrow>Watch</Eyebrow>
          <span style={{
            fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
            letterSpacing: ".3em", color: "var(--fg-subtle)",
          }}>
            FEATURE · 06:24
          </span>
        </div>

        {/* Massive video frame */}
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
             style={{
               position: "relative", overflow: "hidden", cursor: "pointer",
               border: "1px solid",
               borderColor: hover ? "var(--accent)" : "var(--border)",
               transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
             }}>
          <Photo tone="gold" ratio="21/9" hover={hover} zoom />

          {/* YouTube badge */}
          <span style={{
            position: "absolute", top: 24, left: 24, zIndex: 2,
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 14px",
            background: "rgba(0,0,0,.7)",
            fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "rgba(255,255,255,.85)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)" }} />
            YouTube · Featured
          </span>

          {/* Bottom caption gradient */}
          <div aria-hidden="true" style={{
            position: "absolute", left: 0, right: 0, bottom: 0,
            padding: "32px 48px",
            background: "linear-gradient(0deg, rgba(0,0,0,.85) 0%, transparent 100%)",
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap", gap: 24,
          }}>
            <span style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(28px, 3.4vw, 48px)",
              lineHeight: 1.05, letterSpacing: "-.04em",
              textTransform: "uppercase", color: "#fff",
              maxWidth: 720,
            }}>
              Watch how SMG <span style={{ color: "var(--accent)" }}>gives back</span>.
            </span>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
              letterSpacing: ".3em", textTransform: "uppercase",
              color: hover ? "var(--accent)" : "rgba(255,255,255,.6)",
              transition: "color 400ms cubic-bezier(.4,0,.2,1)",
            }}>
              Press play
            </span>
          </div>

          {/* Gold play button — large, parallelogram pane */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0, zIndex: 3,
            display: "flex", alignItems: "center", justifyContent: "center",
            pointerEvents: "none",
          }}>
            <div style={{
              width: hover ? 168 : 144, height: hover ? 168 : 144,
              background: hover ? "var(--accent)" : "rgba(0,0,0,.55)",
              border: hover ? "0" : "1px solid rgba(255,255,255,.7)",
              display: "flex", alignItems: "center", justifyContent: "center",
              transform: `skewX(-12deg) ${hover ? "scale(1.04)" : "scale(1)"}`,
              transition: "all 500ms cubic-bezier(.4,0,.2,1)",
              boxShadow: hover ? "0 16px 56px -8px rgba(206,166,77,.55)" : "none",
            }}>
              <svg width="38" height="44" viewBox="0 0 22 26" fill="none"
                   style={{ transform: "skewX(12deg) translateX(3px)" }}>
                <path d="M0 0L22 13L0 26V0Z" fill={hover ? "#000" : "#fff"} />
              </svg>
            </div>
          </div>
        </div>

        {/* Below-video caption */}
        <div style={{
          marginTop: 28, display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: 16,
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--fg-muted)", letterSpacing: ".05em",
        }}>
          <span>A short film on community impact, sponsorships, and the people behind the SMG name.</span>
          <span style={{
            fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--fg-subtle)",
          }}>2025 · 06:24 · Eng</span>
        </div>
      </div>
    </section>
  );
}

window.Sections = Object.assign(window.Sections || {}, { SponsFeaturedVideo });

})();
