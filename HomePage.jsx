/* global React, SMG */
const { useState, useEffect } = React;
const { Icon, Eyebrow, Button, Photo } = window.SMG;

/* ============================================================
   HOME — Hero with rotating word, services, opportunity, CTA
   ============================================================ */
function HomePage({ onNavigate }) {
  return (
    <main>
      <HeroRotating onNavigate={onNavigate} />
      <ServicesStrip />
      <FeaturedProject />
      <OpportunityBlock onNavigate={onNavigate} />
      <Stats />
      <CtaBand onNavigate={onNavigate} />
    </main>
  );
}

function HeroRotating({ onNavigate }) {
  const words = ["AMAZING", "NEW", "WONDERFUL", "BEAUTIFUL", "SMART"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "140px var(--gutter) 80px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        background:
          "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(206,166,77,.10), transparent 70%)," +
          "radial-gradient(ellipse 80% 50% at 20% 100%, rgba(206,166,77,.04), transparent 70%)",
      }} />
      <div style={{ maxWidth: 1440, margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <Eyebrow>Est. 2013 — Fort McMurray · Edmonton</Eyebrow>
            <h1 className="smg-display" style={{ marginTop: 28, marginBottom: 0 }}>
              <span>We offer</span><br/>
              <span>solutions for</span><br/>
              <span style={{ color: "var(--accent)", display: "inline-block", minWidth: "5ch" }}
                    key={idx}
                    className="rot-word">
                {words[idx]}
              </span>
            </h1>
            <p className="smg-lead" style={{ marginTop: 40, maxWidth: 520 }}>
              Custom homes, commercial properties, and post-disaster restoration across northern Alberta.
              Thirteen years on the ground. Two cities served.
            </p>
            <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
              <Button onClick={() => onNavigate("Portfolio")}>See portfolio</Button>
              <Button variant="ghost" onClick={() => onNavigate("Contact")}>Build with us</Button>
            </div>
          </div>
          <Photo tone="warm" ratio="4/5" label="Birchwood Residence · 2024" />
        </div>
        <div style={{
          position: "absolute", right: "var(--gutter)", bottom: 0,
          fontFamily: "var(--font-body)", fontSize: 10, letterSpacing: ".25em",
          textTransform: "uppercase", color: "var(--fg-subtle)",
          display: "flex", alignItems: "center", gap: 10,
        }}>
          Scroll <Icon name="arrow-down" size={14} />
        </div>
      </div>
      <style>{`
        .rot-word { animation: smgRot 600ms cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes smgRot {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}

function ServicesStrip() {
  const services = [
    { n: "01", title: "Custom Homes", desc: "Single-family residential, design-build from foundation to finish." },
    { n: "02", title: "Commercial", desc: "Retail, hospitality, and light-industrial across Wood Buffalo." },
    { n: "03", title: "Restoration", desc: "Wildfire and flood recovery. We led 2016. We led 2020." },
  ];
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>What we build</Eyebrow>
        <h2 className="smg-h2" style={{ marginTop: 28, marginBottom: 96, maxWidth: 900 }}>
          Three lines of work.<br/>One standard.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
          {services.map((s) => (
            <div key={s.n} style={{ background: "#000", padding: "48px 40px", display: "flex", flexDirection: "column", gap: 24, minHeight: 280 }}>
              <span style={{
                fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56,
                letterSpacing: "-.05em", color: "var(--accent)", lineHeight: 1,
              }}>{s.n}</span>
              <h3 className="smg-h3" style={{ fontSize: 32 }}>{s.title}</h3>
              <p style={{ color: "var(--fg-muted)", maxWidth: 320 }}>{s.desc}</p>
              <a href="#" className="smg-link" style={{ marginTop: "auto", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", fontWeight: 600 }}>
                Learn more <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <Photo tone="cool" ratio="4/5" label="Birchwood · Wood Buffalo" />
        <div>
          <Eyebrow>Featured · 2024</Eyebrow>
          <h2 className="smg-h2" style={{ marginTop: 28, marginBottom: 32 }}>Birchwood Residence.</h2>
          <p className="smg-lead" style={{ marginBottom: 32 }}>
            5,200 sq ft of single-family residential. Black-stained cedar, blackened steel, white oak interiors.
            A statement on what northern living looks like in 2024.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 40, padding: "24px 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {[
              ["Square feet", "5,200"],
              ["Bedrooms", "5"],
              ["Built", "2024"],
              ["Location", "Wood Buffalo"],
            ].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent-soft)", marginBottom: 6 }}>{k}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, letterSpacing: "-.03em", color: "#fff" }}>{v}</div>
              </div>
            ))}
          </div>
          <Button variant="outline">View case study</Button>
        </div>
      </div>
    </section>
  );
}

function OpportunityBlock({ onNavigate }) {
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)", background: "#0A0A0A" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "end" }}>
          <div>
            <Eyebrow>Investment opportunity</Eyebrow>
            <h2 className="smg-h2" style={{ marginTop: 28, fontSize: "clamp(40px, 7vw, 96px)" }}>
              <span style={{ color: "var(--accent)" }}>6.7</span> acres.<br/>
              One zoning.<br/>
              Limited window.
            </h2>
          </div>
          <div>
            <p className="smg-lead" style={{ marginBottom: 32 }}>
              A development-ready parcel inside Fort McMurray's growth corridor. Zoned for mixed-use,
              serviced, and graded. SMG is shortlisting investor-builders for a 2027 groundbreak.
            </p>
            <Button onClick={() => onNavigate("Contact")}>Request the brief</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    ["13", "Years building"],
    ["200+", "Homes delivered"],
    ["2", "Cities served"],
    ["2016 · 2020", "Disasters led"],
  ];
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
        {stats.map(([n, l]) => (
          <div key={l} style={{ borderTop: "1px solid var(--accent)", paddingTop: 24 }}>
            <div className="smg-metric" style={{ marginBottom: 16 }}>{n}</div>
            <div style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--fg-muted)", fontWeight: 600 }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ onNavigate }) {
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Eyebrow>Build with SMG</Eyebrow>
        <h2 className="smg-h1" style={{ marginTop: 32, marginBottom: 40 }}>
          Let's pour <span style={{ color: "var(--accent)" }}>the foundation</span>.
        </h2>
        <Button onClick={() => onNavigate("Contact")}>Start your project</Button>
      </div>
    </section>
  );
}

window.SMG = Object.assign(window.SMG || {}, { HomePage });
