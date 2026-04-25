(() => {
/* global React, Bits */
const { Eyebrow } = window.Bits;

/* ============================================================
   SECTION 7 — FOOTER
   ============================================================ */
function FooterSection() {
  return (
    <footer data-section-id="footer" data-screen-label="07 Footer" style={{
      background: "#000",
      borderTop: "1px solid var(--border)",
      padding: "var(--space-9) var(--gutter) var(--space-7)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 64, paddingBottom: 80,
        }}>
          <div>
            <img src="../assets/logo-horizontal.png" alt="SMG Builders"
                 style={{ height: 64, width: "auto", marginBottom: 28 }} />
            <p style={{ maxWidth: 360, color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              General contracting and post-disaster restoration.
              Fort McMurray and Edmonton, Alberta.
            </p>
          </div>

          <div>
            <Eyebrow>Office</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22, color: "var(--fg-muted)", fontSize: 14, lineHeight: 1.55 }}>
              <a href="tel:7803704333" style={{ color: "#fff", textDecoration: "none", fontWeight: 700 }}>780-370-4333</a>
              <a href="mailto:info@smg.ca" style={{ color: "#fff", textDecoration: "none" }}>info@smg.ca</a>
              <span>Bay 9, 280 TaigaNova Crescent<br/>Fort McMurray, AB</span>
            </div>
          </div>

          <div>
            <Eyebrow>Hours</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 22, color: "var(--fg-muted)", fontSize: 14 }}>
              <span style={{ color: "#fff" }}>Mon — Fri</span>
              <span>9 AM – 5 PM</span>
            </div>
            <div style={{ marginTop: 28 }}>
              <Eyebrow>Service areas</Eyebrow>
              <div style={{ display: "flex", gap: 12, marginTop: 18, color: "#fff", fontFamily: "var(--font-display)", fontWeight: 900, letterSpacing: "-.02em", textTransform: "uppercase", fontSize: 16 }}>
                Fort McMurray <span style={{ color: "var(--accent)" }}>|</span> Edmonton
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>Follow</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 22 }}>
              <FooterLink href="#" label="Facebook" />
              <FooterLink href="#" label="LinkedIn" />
              <FooterLink href="#" label="Instagram" />
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: 32, borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".2em",
          textTransform: "uppercase", color: "var(--fg-subtle)",
        }}>
          <span>© 2026 SMG Builders Ltd.</span>
          <span>Wood Buffalo · Treaty 8 Territory</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         color: hover ? "var(--accent)" : "#fff",
         textDecoration: "none", fontFamily: "var(--font-body)",
         fontSize: 13, fontWeight: 600, letterSpacing: ".15em",
         textTransform: "uppercase",
         display: "inline-flex", alignItems: "center", gap: 12,
         transition: "color 400ms cubic-bezier(.4,0,.2,1)",
       }}>
      <span style={{
        width: hover ? 28 : 16, height: 1, background: "currentColor",
        transition: "width 400ms cubic-bezier(.4,0,.2,1)",
      }} />
      {label}
    </a>
  );
}

window.Sections = Object.assign(window.Sections || {}, { FooterSection });

})();
