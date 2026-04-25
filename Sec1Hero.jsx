(() => {
/* global React, Bits */
const { useState, useEffect, useRef } = React;
const { Eyebrow, Button, Photo } = window.Bits;

/* ============================================================
   SECTION 1 — HERO
   ============================================================ */
function HeroSection() {
  const words = ["AMAZING", "NEW", "WONDERFUL", "BEAUTIFUL", "SMART"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section data-section-id="hero" data-screen-label="01 Hero" style={{
      position: "relative", minHeight: "100vh", overflow: "hidden",
      display: "flex", alignItems: "center",
      padding: "140px var(--gutter) 120px",
    }}>
      {/* Video background placeholder */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 0,
        background:
          "linear-gradient(135deg, #1a1612 0%, #0a0805 40%, #000 100%)",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse 50% 35% at 75% 25%, rgba(206,166,77,.18), transparent 70%)," +
            "radial-gradient(ellipse 70% 50% at 25% 90%, rgba(206,166,77,.06), transparent 70%)",
        }} />
        {/* Faux video play indicator */}
        <div style={{
          position: "absolute", top: 100, right: "var(--gutter)",
          display: "flex", alignItems: "center", gap: 10,
          fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
          letterSpacing: ".25em", color: "rgba(255,255,255,.35)",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />
          VIDEO BG · LOOP
        </div>
      </div>

      {/* Dark overlay for legibility */}
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(180deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.85) 100%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1440, margin: "0 auto", width: "100%" }}>
        <Eyebrow>Est. 2013 — Fort McMurray · Edmonton</Eyebrow>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(64px, 11vw, 168px)",
          lineHeight: 0.92, letterSpacing: "-.05em",
          textTransform: "uppercase", color: "#fff",
          margin: "32px 0 0", maxWidth: 1200,
        }}>
          We offer<br/>
          solutions for{" "}
          <span key={idx} style={{
            color: "var(--accent)", display: "inline-block", minWidth: "5ch",
            animation: "smgRot 600ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}>{words[idx]}</span>
        </h1>
        <p style={{
          marginTop: 48, maxWidth: 640, fontSize: 18, lineHeight: 1.6,
          color: "var(--fg-muted)",
        }}>
          Managing a small business today is already tough. Avoid further complications by ditching
          outdated, tedious trade methods. Our goal is to streamline SMB trade, making it easier and
          faster than ever.
        </p>
        <div style={{ display: "flex", gap: 20, marginTop: 56, flexWrap: "wrap" }}>
          <Button variant="primary">Jump on a call</Button>
          <Button variant="ghost">Sign up here</Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", left: "50%", bottom: 32, zIndex: 3,
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
        fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".3em",
        textTransform: "uppercase", color: "var(--fg-muted)",
      }}>
        <span>Scroll</span>
        <span style={{
          width: 1, height: 56, background: "linear-gradient(180deg, var(--accent), transparent)",
          animation: "smgScroll 1.6s ease-in-out infinite",
        }} />
      </div>

      <style>{`
        @keyframes smgRot {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes smgScroll {
          0%, 100% { transform: scaleY(0.4); transform-origin: top; opacity: 0.4; }
          50% { transform: scaleY(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}

window.Sections = Object.assign(window.Sections || {}, { HeroSection });

})();
