/* global React, SMG */
const { useState } = React;
const { Icon, Eyebrow, Button, Photo } = window.SMG;

/* ============================================================
   ABOUT PAGE — Story, team, values
   ============================================================ */
function AboutPage({ onNavigate }) {
  return (
    <main style={{ paddingTop: 84 }}>
      <AboutHero />
      <StoryBlock />
      <ValuesGrid />
      <TeamShowcase />
      <TimelineBlock />
    </main>
  );
}

function AboutHero() {
  return (
    <section style={{ padding: "120px var(--gutter) 80px" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>About</Eyebrow>
        <h1 className="smg-h1" style={{ marginTop: 28, maxWidth: 1100 }}>
          Thirteen years. <span style={{ color: "var(--accent)" }}>Two cities.</span><br/>
          One standard.
        </h1>
      </div>
    </section>
  );
}

function StoryBlock() {
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
        <Eyebrow>Our story</Eyebrow>
        <div>
          <p className="smg-lead" style={{ marginBottom: 32 }}>
            SMG Builders was founded in Fort McMurray in 2013. We started with one residential build and a refusal to cut corners.
          </p>
          <p style={{ marginBottom: 24 }}>
            In 2016, when the wildfire took 2,400 structures with it, we were on the ground inside the week. Restoration became
            a third pillar of the business — not by plan, but by need. The 2020 flood added a chapter. Both events sharpened how
            we work.
          </p>
          <p>
            Today we deliver custom homes, commercial properties, and post-disaster restoration across northern Alberta. In 2026
            we're expanding into Edmonton — same standard, new ground.
          </p>
        </div>
      </div>
    </section>
  );
}

function ValuesGrid() {
  const values = [
    { n: "01", t: "We finish.", d: "On time, on spec, on budget. The number that matters is the date you move in." },
    { n: "02", t: "We show up.", d: "When the wildfire hit, we were there in seven days. When the flood came, six. Reputation is built in weeks like those." },
    { n: "03", t: "We over-build.", d: "Northern Alberta is unforgiving. Specs that meet code aren't the specs we use." },
    { n: "04", t: "We hire local.", d: "Wood Buffalo trades, Edmonton trades. We don't fly in crews. The people building your home live in it too." },
  ];
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>What we believe</Eyebrow>
        <h2 className="smg-h2" style={{ marginTop: 28, marginBottom: 96 }}>Four principles. No exceptions.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
          {values.map((v) => (
            <div key={v.n} style={{ background: "#000", padding: "56px 48px" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14, letterSpacing: ".25em", color: "var(--accent)", marginBottom: 24 }}>{v.n}</div>
              <h3 className="smg-h3" style={{ marginBottom: 20 }}>{v.t}</h3>
              <p style={{ maxWidth: 460 }}>{v.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamShowcase() {
  const team = [
    { name: "Steve M. Greene", role: "Founder · Principal", tone: "warm" },
    { name: "Marcus Olsen", role: "Director — Commercial", tone: "neutral" },
    { name: "Renée Caron", role: "Director — Residential", tone: "cool" },
    { name: "Thomas Beaver", role: "Lead — Restoration", tone: "storm" },
  ];
  const [active, setActive] = useState(0);
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)", background: "#0A0A0A" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>The team</Eyebrow>
        <h2 className="smg-h2" style={{ marginTop: 28, marginBottom: 96 }}>People who finish.</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {team.map((p, i) => (
            <div key={p.name}
                 onMouseEnter={() => setActive(i)}
                 style={{ cursor: "pointer" }}>
              <Photo tone={p.tone} ratio="3/4" hover={active === i} />
              <div style={{ marginTop: 20 }}>
                <span className="smg-role">{p.role}</span>
                <h4 style={{
                  fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22,
                  letterSpacing: "-.03em", textTransform: "uppercase", marginTop: 8,
                  color: active === i ? "var(--accent)" : "#fff",
                  transition: "color 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}>{p.name}</h4>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 40, color: "var(--fg-subtle)", fontSize: 13, fontStyle: "italic" }}>
          Placeholder — final team component will be supplied separately by the client.
        </p>
      </div>
    </section>
  );
}

function TimelineBlock() {
  const events = [
    ["2013", "Founded", "First custom residential build in Fort McMurray."],
    ["2016", "Wildfire", "Led restoration on 47 properties post Horse River fire."],
    ["2018", "Commercial", "First retail and hospitality builds delivered."],
    ["2020", "Flood", "Returned to restoration after the Athabasca flood."],
    ["2024", "200th home", "Birchwood Residence completed."],
    ["2026", "Edmonton", "Service area expansion."],
  ];
  return (
    <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="smg-h2" style={{ marginTop: 28, marginBottom: 80 }}>Thirteen years on the ground.</h2>
        <div>
          {events.map(([year, t, d], i) => (
            <div key={year} style={{
              display: "grid", gridTemplateColumns: "180px 1fr 2fr 60px",
              gap: 40, padding: "32px 0",
              borderTop: i === 0 ? "1px solid var(--border)" : "none",
              borderBottom: "1px solid var(--border)",
              alignItems: "baseline",
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, letterSpacing: "-.05em", color: "var(--accent)", lineHeight: 1 }}>{year}</div>
              <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 24, letterSpacing: "-.03em", textTransform: "uppercase" }}>{t}</h4>
              <p style={{ color: "var(--fg-muted)" }}>{d}</p>
              <Icon name="arrow-up-right" size={18} className="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.SMG = Object.assign(window.SMG || {}, { AboutPage });
