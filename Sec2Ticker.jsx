(() => {
/* global React, Bits */
const { Eyebrow } = window.Bits;

/* ============================================================
   SECTION 2 — CLIENT LOGO TICKER
   ============================================================ */
function TickerSection() {
  const logos = [
    "SUNCOR", "KEYANO COLLEGE", "MACDONALD ISLAND PARK", "DEXTERRA",
    "TAWAW", "MERIT", "PRIME SOCIAL", "RADISSON", "MR. MIKES", "MRS. B'S",
  ];
  /* Duplicate for seamless loop */
  const loop = [...logos, ...logos];

  return (
    <section data-section-id="ticker" data-screen-label="02 Ticker" style={{
      padding: "80px 0 96px", borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)", overflow: "hidden",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 var(--gutter)", marginBottom: 56 }}>
        <Eyebrow>Trusted by</Eyebrow>
      </div>
      <div style={{ position: "relative", width: "100%" }}>
        {/* Edge fades */}
        <div style={{ position: "absolute", inset: "0 auto 0 0", width: 120, background: "linear-gradient(90deg, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: "0 0 0 auto", width: 120, background: "linear-gradient(270deg, #000, transparent)", zIndex: 2, pointerEvents: "none" }} />

        <div style={{
          display: "flex", gap: 80,
          animation: "smgTicker 38s linear infinite",
          width: "max-content",
        }}>
          {loop.map((l, i) => <LogoChip key={i} name={l} />)}
        </div>
      </div>
      <style>{`
        @keyframes smgTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function LogoChip({ name }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
          style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            minWidth: 220, height: 56,
            fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22,
            letterSpacing: "-.02em", textTransform: "uppercase",
            color: hover ? "var(--accent)" : "#E6E6E6",
            transform: hover ? "scale(1.04)" : "scale(1)",
            transition: "color 400ms cubic-bezier(.4,0,.2,1), transform 400ms cubic-bezier(.4,0,.2,1)",
            whiteSpace: "nowrap", flexShrink: 0,
          }}>
      {name}
    </span>
  );
}

window.Sections = Object.assign(window.Sections || {}, { TickerSection });

})();
