(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow } = window.Bits;

/* ============================================================
   CONTACT — SECTION 3 — SERVICE AREA MAP
   Stylized map of northern Alberta with two pins.
   Fort McMurray (HQ, primary gold) + Edmonton (secondary gold-light)
   ============================================================ */

function ContactMap() {
  const [active, setActive] = useState("fmm");

  // Approximate normalized coords on our 1000x720 map viewBox
  // Fort McMurray ~ NE, Edmonton ~ S central
  const PINS = {
    fmm: { x: 720, y: 220, label: "FORT MCMURRAY", role: "HEADQUARTERS", color: "var(--accent)",      radius: 110 },
    edm: { x: 480, y: 540, label: "EDMONTON",      role: "NEW SERVICE AREA", color: "var(--accent-soft)", radius: 90  },
  };

  return (
    <section data-section-id="ct-map" data-screen-label="03 Map" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      background: "#0A0A0A",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24,
          marginBottom: 64,
        }}>
          <div>
            <Eyebrow>Where We Work</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(40px, 6.5vw, 104px)",
              lineHeight: 1, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "#fff",
              margin: "32px 0 0", maxWidth: 1200,
            }}>
              Now servicing<br/>
              <span style={{ color: "var(--accent)" }}>two regions</span>.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, paddingBottom: 12 }}>
            <Toggle label="Fort McMurray" sub="HQ" color="var(--accent)" active={active === "fmm"} onClick={() => setActive("fmm")} />
            <Toggle label="Edmonton"      sub="New" color="var(--accent-soft)" active={active === "edm"} onClick={() => setActive("edm")} />
          </div>
        </div>

        {/* Map frame */}
        <div style={{
          position: "relative", width: "100%",
          border: "1px solid var(--border)",
          background: "#050505",
          overflow: "hidden",
          aspectRatio: "1000 / 620",
        }}>
          {/* Grid background */}
          <div aria-hidden="true" style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          {/* SVG map */}
          <svg viewBox="0 0 1000 620" preserveAspectRatio="xMidYMid meet"
               style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <defs>
              <radialGradient id="fmmGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#CEA64D" stopOpacity="0.25" />
                <stop offset="60%" stopColor="#CEA64D" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#CEA64D" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="edmGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#DDC17C" stopOpacity="0.18" />
                <stop offset="60%" stopColor="#DDC17C" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#DDC17C" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Stylized Alberta-ish landmass — abstract polygon, not geographically accurate */}
            <path d="M180,80 L760,60 L840,150 L880,300 L850,470 L820,560 L300,580 L200,520 L160,360 Z"
                  fill="rgba(255,255,255,.025)"
                  stroke="rgba(255,255,255,.12)"
                  strokeWidth="1" />

            {/* Inner province outline detail */}
            <path d="M280,140 L700,130 L780,220 L800,360 L760,490 L380,510 L260,440 L240,290 Z"
                  fill="none"
                  stroke="rgba(206,166,77,.15)"
                  strokeWidth="1"
                  strokeDasharray="4 6" />

            {/* Connecting line FMM → EDM */}
            <line x1={PINS.fmm.x} y1={PINS.fmm.y} x2={PINS.edm.x} y2={PINS.edm.y}
                  stroke="var(--accent)" strokeOpacity="0.25"
                  strokeWidth="1" strokeDasharray="3 5" />

            {/* Service radius — FMM */}
            <circle cx={PINS.fmm.x} cy={PINS.fmm.y} r={PINS.fmm.radius}
                    fill="url(#fmmGlow)"
                    opacity={active === "fmm" ? 1 : 0.55}
                    style={{ transition: "opacity 500ms cubic-bezier(.4,0,.2,1)" }} />
            <circle cx={PINS.fmm.x} cy={PINS.fmm.y} r={PINS.fmm.radius}
                    fill="none" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1"
                    strokeDasharray="2 4" />

            {/* Service radius — EDM */}
            <circle cx={PINS.edm.x} cy={PINS.edm.y} r={PINS.edm.radius}
                    fill="url(#edmGlow)"
                    opacity={active === "edm" ? 1 : 0.55}
                    style={{ transition: "opacity 500ms cubic-bezier(.4,0,.2,1)" }} />
            <circle cx={PINS.edm.x} cy={PINS.edm.y} r={PINS.edm.radius}
                    fill="none" stroke="var(--accent-soft)" strokeOpacity="0.4" strokeWidth="1"
                    strokeDasharray="2 4" />

            {/* Map ticks */}
            <g stroke="rgba(255,255,255,.2)" strokeWidth="1">
              <line x1="40" y1="40" x2="60" y2="40" />
              <line x1="40" y1="40" x2="40" y2="60" />
              <line x1="940" y1="40" x2="960" y2="40" />
              <line x1="960" y1="40" x2="960" y2="60" />
              <line x1="40" y1="560" x2="40" y2="580" />
              <line x1="40" y1="580" x2="60" y2="580" />
              <line x1="940" y1="580" x2="960" y2="580" />
              <line x1="960" y1="580" x2="960" y2="560" />
            </g>
            <text x="60" y="50" fill="rgba(255,255,255,.35)" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" letterSpacing="3">N 56°</text>
            <text x="60" y="600" fill="rgba(255,255,255,.35)" fontFamily="ui-monospace,Menlo,monospace" fontSize="10" letterSpacing="3">N 53°</text>
          </svg>

          {/* Pins (HTML overlay so labels are crisp) */}
          <Pin {...PINS.fmm} active={active === "fmm"} primary onClick={() => setActive("fmm")} />
          <Pin {...PINS.edm} active={active === "edm"} onClick={() => setActive("edm")} />

          {/* Map meta */}
          <div style={{
            position: "absolute", top: 16, left: 16,
            display: "flex", alignItems: "center", gap: 10,
            fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10,
            letterSpacing: ".3em", color: "rgba(255,255,255,.45)",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)" }} />
            ALBERTA · SERVICE COVERAGE
          </div>
          <div style={{
            position: "absolute", bottom: 16, right: 16,
            fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10,
            letterSpacing: ".3em", color: "rgba(255,255,255,.45)",
          }}>
            ~430 KM HQ → EDM
          </div>
        </div>

        {/* Caption */}
        <p style={{
          marginTop: 32, fontSize: 18, lineHeight: 1.55,
          color: "var(--fg-muted)", maxWidth: 880,
        }}>
          From our Fort McMurray headquarters, we now extend full-service
          contracting to <span style={{ color: "#fff", fontWeight: 600 }}>Edmonton</span> and surrounding areas.
        </p>
      </div>
    </section>
  );
}

/* ----- Pin component ----- */
function Pin({ x, y, label, role, primary, active, onClick }) {
  // Convert SVG coords (0–1000 wide, 0–620 tall) to %
  const left = `${(x / 1000) * 100}%`;
  const top  = `${(y / 620) * 100}%`;
  const accent = primary ? "var(--accent)" : "var(--accent-soft)";

  return (
    <button onClick={onClick}
            style={{
              position: "absolute", left, top,
              transform: "translate(-50%, -100%)",
              background: "transparent", border: 0, padding: 0,
              cursor: "pointer",
              display: "flex", flexDirection: "column", alignItems: "center",
              filter: active ? "none" : "opacity(.85)",
              transition: "filter 300ms cubic-bezier(.4,0,.2,1)",
            }}>
      {/* Label tag — sits above the pin */}
      <div style={{
        marginBottom: 12, padding: "8px 12px",
        background: active ? accent : "rgba(0,0,0,.85)",
        border: "1px solid",
        borderColor: active ? accent : "var(--border-strong)",
        whiteSpace: "nowrap",
        transition: "all 300ms cubic-bezier(.4,0,.2,1)",
      }}>
        <span style={{
          display: "block",
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: 13, lineHeight: 1, letterSpacing: ".02em",
          textTransform: "uppercase",
          color: active ? "#000" : "#fff",
        }}>{label}</span>
        <span style={{
          display: "block", marginTop: 4,
          fontFamily: "ui-monospace,Menlo,monospace", fontSize: 9,
          letterSpacing: ".3em",
          color: active ? "#000" : accent,
          opacity: active ? .75 : 1,
        }}>{role}</span>
      </div>

      {/* Pin marker — diamond, skewed to match brand button */}
      <div style={{ position: "relative", width: 24, height: 36 }}>
        <span style={{
          position: "absolute", top: 0, left: "50%",
          width: 18, height: 18,
          transform: "translateX(-50%) rotate(45deg)",
          background: accent,
          boxShadow: active ? `0 0 0 6px ${primary ? "rgba(206,166,77,.18)" : "rgba(221,193,124,.18)"}` : "none",
          transition: "box-shadow 400ms cubic-bezier(.4,0,.2,1)",
        }} />
        <span style={{
          position: "absolute", top: 6, left: "50%",
          width: 6, height: 6,
          transform: "translateX(-50%) rotate(45deg)",
          background: "#000",
        }} />
        {/* Stem */}
        <span style={{
          position: "absolute", bottom: 0, left: "50%",
          width: 1, height: 14,
          transform: "translateX(-50%)",
          background: accent,
        }} />
      </div>

      {/* Ground dot */}
      <span style={{
        width: 6, height: 6, borderRadius: 999,
        background: accent,
        marginTop: 0,
      }} />
    </button>
  );
}

/* ----- Region toggle (top-right of map header) ----- */
function Toggle({ label, sub, color, active, onClick }) {
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", gap: 12,
      padding: "8px 14px",
      background: active ? "rgba(255,255,255,.04)" : "transparent",
      border: "1px solid",
      borderColor: active ? color : "var(--border)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      transition: "all 300ms cubic-bezier(.4,0,.2,1)",
    }}>
      <span style={{
        width: 10, height: 10, transform: "rotate(45deg)",
        background: color,
      }} />
      <span style={{
        fontSize: 12, fontWeight: 700,
        letterSpacing: ".15em", textTransform: "uppercase",
        color: "#fff",
      }}>{label}</span>
      <span style={{
        fontSize: 10, letterSpacing: ".25em",
        color: active ? color : "var(--fg-subtle)",
      }}>{sub}</span>
    </button>
  );
}

window.Sections = Object.assign(window.Sections || {}, { ContactMap });

})();
