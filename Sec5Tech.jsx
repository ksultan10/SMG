(() => {
/* global React, Bits */
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   SECTION 5 — TECHNOLOGY (alternating rows)
   ============================================================ */
function TechSection() {
  const points = [
    { n: "01", t: "Transparent Communication",
      d: "Real-time timelines, milestones, photos, updates. No chasing phone calls.", tone: "cool" },
    { n: "02", t: "Fast Approvals & Easy Payments",
      d: "Estimates, change orders, invoices shared digitally. Approve and pay from your phone.", tone: "gold" },
    { n: "03", t: "Real-Time Progress",
      d: "Site progress, photos, notes logged from the job site. Full visibility without site visits.", tone: "warm" },
    { n: "04", t: "Organized Project Records",
      d: "Every plan, document, record stored in your client portal. Drawings, invoices, warranties — all accessible after completion.", tone: "neutral" },
  ];
  return (
    <section data-section-id="technology" data-screen-label="05 Technology" style={{
      padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>Why SMG</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 6vw, 88px)",
          lineHeight: 1.02, letterSpacing: "-.05em", textTransform: "uppercase",
          color: "#fff", margin: "32px 0 32px", maxWidth: 1300,
        }}>
          Technology that makes<br/>
          <span style={{ color: "var(--accent)" }}>your life easier.</span>
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--fg-muted)", maxWidth: 720, marginBottom: 120 }}>
          We use a secure project management platform that keeps your build organized, transparent,
          and stress-free from concept to completion.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {points.map((p, i) => <TechRow key={p.n} {...p} flip={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}

function TechRow({ n, t, d, tone, flip }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80, alignItems: "center",
    }}>
      <div style={{ order: flip ? 2 : 1 }}>
        <DashboardMock tone={tone} num={n} />
      </div>
      <div style={{ order: flip ? 1 : 2 }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 64,
          letterSpacing: "-.05em", color: "var(--accent)", lineHeight: 1, display: "block", marginBottom: 24,
        }}>{n}</span>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 40,
          lineHeight: 1.05, letterSpacing: "-.04em", textTransform: "uppercase",
          color: "#fff", margin: "0 0 20px",
        }}>{t}</h3>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--fg-muted)", maxWidth: 480, margin: 0 }}>{d}</p>
      </div>
    </div>
  );
}

function DashboardMock({ tone, num }) {
  return (
    <div style={{
      position: "relative", background: "#0A0A0A",
      border: "1px solid var(--border)", padding: 20,
      aspectRatio: "5/4",
    }}>
      {/* Faux window chrome */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#2A2A2A" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#2A2A2A" }} />
        <span style={{ width: 8, height: 8, borderRadius: 999, background: "#2A2A2A" }} />
        <span style={{ marginLeft: "auto", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, color: "var(--fg-subtle)", letterSpacing: ".15em" }}>
          SMG · CLIENT PORTAL
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, height: "calc(100% - 28px)" }}>
        {/* Sidebar */}
        <div style={{ background: "#050505", border: "1px solid var(--border)", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
          {["Overview", "Timeline", "Documents", "Invoices", "Photos"].map((l, i) => (
            <span key={l} style={{
              fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 600,
              letterSpacing: ".1em", textTransform: "uppercase",
              color: i === 0 ? "var(--accent)" : "var(--fg-muted)",
              borderLeft: i === 0 ? "2px solid var(--accent)" : "2px solid transparent",
              paddingLeft: 8,
            }}>{l}</span>
          ))}
        </div>
        {/* Content area */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Photo tone={tone} ratio="16/9" hover />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[1,2,3].map((i) => (
              <div key={i} style={{ height: 36, background: "#141414", border: "1px solid var(--border)", padding: 6 }}>
                <span style={{ display: "block", height: 4, width: "60%", background: i === 1 ? "var(--accent)" : "#2A2A2A", marginBottom: 4 }} />
                <span style={{ display: "block", height: 4, width: "30%", background: "#2A2A2A" }} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[80, 64, 48].map((w, i) => (
              <span key={i} style={{ height: 6, width: `${w}%`, background: i === 0 ? "var(--accent)" : "#2A2A2A" }} />
            ))}
          </div>
        </div>
      </div>
      <span style={{
        position: "absolute", top: 16, right: 16, fontFamily: "var(--font-display)",
        fontWeight: 900, fontSize: 13, color: "var(--accent-soft)", letterSpacing: "-.02em",
      }}>{num}</span>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { TechSection });

})();
