/* global React, SMG */
const { useState } = React;
const { Icon, Eyebrow, Button, Photo } = window.SMG;

/* ============================================================
   PORTFOLIO PAGE — Filterable project grid
   ============================================================ */
const PROJECTS = [
  { name: "Birchwood Residence", cat: "Custom", year: 2024, loc: "Wood Buffalo", tone: "warm" },
  { name: "Highway 63 Reconstruction", cat: "Restoration", year: 2021, loc: "Fort McMurray", tone: "storm" },
  { name: "Northstar Plaza", cat: "Commercial", year: 2023, loc: "Fort McMurray", tone: "cool" },
  { name: "Cedar Crest Estate", cat: "Custom", year: 2022, loc: "Edmonton", tone: "warm" },
  { name: "MacKenzie Tower Lobby", cat: "Commercial", year: 2024, loc: "Edmonton", tone: "neutral" },
  { name: "Athabasca Recovery", cat: "Restoration", year: 2020, loc: "Wood Buffalo", tone: "storm" },
  { name: "Foundry Loft Conversion", cat: "Commercial", year: 2023, loc: "Edmonton", tone: "gold" },
  { name: "Beaufort Lakehouse", cat: "Custom", year: 2025, loc: "Wood Buffalo", tone: "cool" },
];

function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const cats = ["All", "Custom", "Commercial", "Restoration"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  return (
    <main style={{ paddingTop: 84 }}>
      <section style={{ padding: "120px var(--gutter) 60px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Eyebrow>Portfolio</Eyebrow>
          <h1 className="smg-h1" style={{ marginTop: 28, marginBottom: 60 }}>
            Two hundred plus.<br/>
            <span style={{ color: "var(--accent)" }}>Each one finished.</span>
          </h1>
          <div style={{ display: "flex", gap: 8, borderBottom: "1px solid var(--border)", paddingBottom: 0 }}>
            {cats.map((c) => (
              <button key={c} onClick={() => setFilter(c)} style={{
                background: "transparent", border: 0, cursor: "pointer",
                padding: "16px 24px", fontFamily: "var(--font-body)",
                fontSize: 12, fontWeight: 700, letterSpacing: ".2em",
                textTransform: "uppercase",
                color: filter === c ? "var(--accent)" : "#fff",
                borderBottom: filter === c ? "2px solid var(--accent)" : "2px solid transparent",
                marginBottom: -1,
                transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}>{c}</button>
            ))}
          </div>
        </div>
      </section>
      <section style={{ padding: "0 var(--gutter) var(--section-pad-y)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {filtered.map((p) => <ProjectCard key={p.name} {...p} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function ProjectCard({ name, cat, year, loc, tone }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="#" onClick={(e) => e.preventDefault()}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{ display: "block", textDecoration: "none", color: "inherit", cursor: "pointer" }}>
      <Photo tone={tone} ratio="4/5" hover={hover} label={`${loc} · ${year}`} />
      <div style={{ marginTop: 20, display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
        <div>
          <div style={{ fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent-soft)", marginBottom: 8 }}>{cat} · {year}</div>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22, letterSpacing: "-.03em",
            textTransform: "uppercase",
            color: hover ? "var(--accent)" : "#fff",
            transition: "color 400ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}>{name}</h3>
        </div>
        <Icon name="arrow-up-right" size={20} className="" />
      </div>
    </a>
  );
}

window.SMG = Object.assign(window.SMG || {}, { PortfolioPage });
