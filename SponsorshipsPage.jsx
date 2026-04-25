/* global React, SMG */
const { useState } = React;
const { Icon, Eyebrow, Button, Photo } = window.SMG;

/* ============================================================
   SPONSORSHIPS PAGE — Community programs
   ============================================================ */
function SponsorshipsPage({ onNavigate }) {
  return (
    <main style={{ paddingTop: 84 }}>
      <section style={{ padding: "120px var(--gutter) var(--section-pad-y)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Eyebrow>Sponsorships</Eyebrow>
          <h1 className="smg-h1" style={{ marginTop: 28, marginBottom: 60, maxWidth: 1100 }}>
            We build buildings.<br/>
            <span style={{ color: "var(--accent)" }}>And the towns around them.</span>
          </h1>
          <p className="smg-lead" style={{ maxWidth: 720 }}>
            Wood Buffalo gave SMG its start. Thirteen years on, sponsorship is how we say so. We back local hockey,
            youth trades, and emergency response — the work that keeps a northern community standing.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 var(--gutter) var(--section-pad-y)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--border)" }}>
            {[
              { eb: "2014 — Present", t: "Fort McMurray Oil Barons", d: "Title sponsor of the AJHL franchise. Fourteen seasons and counting." , tone: "warm" },
              { eb: "2018 — Present", t: "Wood Buffalo Trades Bursary", d: "Annual $25,000 bursary for local apprentices entering carpentry, electrical, or plumbing.", tone: "gold" },
              { eb: "2017 — Present", t: "Wildfire Recovery Fund", d: "Quarterly contributions to the regional Red Cross post-2016. Restoration we can't do with hammers.", tone: "storm" },
            ].map((s) => (
              <div key={s.t} style={{ background: "#000", padding: "0 0 32px" }}>
                <Photo tone={s.tone} ratio="4/3" />
                <div style={{ padding: "32px 32px 0" }}>
                  <Eyebrow>{s.eb}</Eyebrow>
                  <h3 className="smg-h3" style={{ fontSize: 28, marginTop: 20, marginBottom: 16 }}>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "var(--section-pad-y) var(--gutter)", borderTop: "1px solid var(--border)", background: "#0A0A0A" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>Apply</Eyebrow>
          <h2 className="smg-h2" style={{ marginTop: 32, marginBottom: 32 }}>
            Sponsorship requests open <span style={{ color: "var(--accent)" }}>quarterly</span>.
          </h2>
          <p className="smg-lead" style={{ marginBottom: 40, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            We review applications four times a year. We back work rooted in northern Alberta,
            tied to trades, sport, or emergency response. Brevity helps.
          </p>
          <Button onClick={() => onNavigate("Contact")}>Submit a request</Button>
        </div>
      </section>
    </main>
  );
}

window.SMG = Object.assign(window.SMG || {}, { SponsorshipsPage });
