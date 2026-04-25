(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   SECTION 3 — SERVICES (Four divisions)
   LIGHT SECTION — silver #E6E6E6 background
   ============================================================ */
function ServicesSection() {
  const services = [
    { tag: "Design Build", tone: "warm",
      title: "Design Build",
      desc: "Integrated project delivery from concept to completion, ensuring cost-efficient and coordinated outcomes." },
    { tag: "Residential", tone: "gold",
      title: "Residential Construction",
      desc: "Custom homes, additions, and high-quality renovations that reflect each client's vision and lifestyle." },
    { tag: "Commercial", tone: "cool",
      title: "Commercial Projects",
      desc: "Hotels, health centres, office buildings, and institutional facilities — complex developments demanding both functionality and lasting architectural value." },
    { tag: "Restoration", tone: "storm",
      title: "Restoration & Rebuilds",
      desc: "Experienced in rebuilding homes and facilities after major disasters, including the Fort McMurray Wildfire (2016) and 2020 Flood." },
  ];

  return (
    <section data-section-id="services" data-screen-label="03 Services" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      background: "var(--bg-light)",
      color: "var(--fg-light)",
      borderTop: "1px solid var(--border-light)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "var(--accent-pressed)",
        }}>What we build</span>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 6.5vw, 96px)",
          lineHeight: 1.02, letterSpacing: "-.05em", textTransform: "uppercase",
          color: "var(--fg-light)", margin: "32px 0 96px", maxWidth: 1300,
        }}>
          Four divisions.<br/><span style={{ color: "var(--accent-pressed)" }}>One standard.</span>
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}>
          {services.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ tag, tone, title, desc }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         display: "flex", flexDirection: "column",
         textDecoration: "none", color: "inherit", cursor: "pointer",
         position: "relative",
         background: "#0A0A0A",
         border: "1px solid",
         borderColor: hover ? "var(--accent)" : "#0A0A0A",
         transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
       }}>
      <div style={{ overflow: "hidden" }}>
        <Photo tone={tone} ratio="4/3" hover={hover} zoom />
      </div>
      <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 16, flex: 1 }}>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
          letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)",
        }}>{tag}</span>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24,
          lineHeight: 1.05, letterSpacing: "-.03em", textTransform: "uppercase",
          color: "#fff", margin: 0,
        }}>{title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--fg-muted)", margin: 0, flex: 1 }}>{desc}</p>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
          letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}>
          Learn more <span style={{ transform: hover ? "translateX(4px)" : "none", transition: "transform 400ms cubic-bezier(.4,0,.2,1)" }}>→</span>
        </span>
      </div>
      <span aria-hidden="true" style={{
        position: "absolute", left: 0, bottom: 0, height: 2,
        width: hover ? "100%" : "0%",
        background: "var(--accent)",
        transition: "width 600ms cubic-bezier(.4,0,.2,1)",
      }} />
    </a>
  );
}

window.Sections = Object.assign(window.Sections || {}, { ServicesSection });

})();
