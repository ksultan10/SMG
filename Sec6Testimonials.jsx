(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow } = window.Bits;

/* ============================================================
   SECTION 6 — TESTIMONIALS
   ============================================================ */
function TestimonialsSection() {
  const items = [
    {
      quote: "SMG delivered our home on time, on spec, and on budget. The transparency through their portal meant zero surprises.",
      name: "Daniel & Mira Korte",
      role: "Custom Residential",
    },
    {
      quote: "After the wildfire we needed a contractor who would actually show up. SMG had a crew on-site within the week.",
      name: "Annette Beauchamp",
      role: "Restoration",
    },
    {
      quote: "We've now built three commercial properties with the SMG team. Same standard every time. That's what we pay for.",
      name: "Marcus Whitfield",
      role: "Commercial Development",
    },
  ];
  return (
    <section data-section-id="testimonials" data-screen-label="06 Testimonials" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      background: "#050505",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>What clients say</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 5.5vw, 80px)",
          lineHeight: 1.02, letterSpacing: "-.05em", textTransform: "uppercase",
          color: "#fff", margin: "32px 0 96px", maxWidth: 1100,
        }}>
          Built once.<br/><span style={{ color: "var(--accent)" }}>Said many times.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {items.map((t) => <TestimonialCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ quote, name, role }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", background: "#0A0A0A",
           border: "1px solid",
           borderColor: hover ? "var(--accent)" : "var(--border)",
           padding: "48px 40px 40px",
           transition: "border-color 600ms cubic-bezier(.4,0,.2,1)",
           display: "flex", flexDirection: "column", gap: 28,
         }}>
      <span aria-hidden="true" style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: 88, lineHeight: 0.6, letterSpacing: "-.05em",
        color: "var(--accent)",
      }}>"</span>
      <p style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: 22, lineHeight: 1.35, letterSpacing: "-.02em",
        color: "#fff", margin: 0, flex: 1,
      }}>{quote}</p>
      <div>
        <div style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14,
          color: "#fff", letterSpacing: "-.01em",
        }}>{name}</div>
        <div style={{
          marginTop: 6, fontFamily: "var(--font-body)", fontSize: 11,
          fontWeight: 600, letterSpacing: ".2em", textTransform: "uppercase",
          color: "var(--accent-soft)",
        }}>{role}</div>
      </div>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { TestimonialsSection });

})();
