(() => {
/* global React */

/* ============================================================
   CONTACT — REPLY-GUARANTEE BAND
   Light silver band between hero and form.
   ============================================================ */
function ContactGuarantee() {
  return (
    <section data-section-id="ct-guarantee" data-screen-label="01b Guarantee" style={{
      padding: "96px var(--gutter)",
      background: "var(--bg-light)",
      color: "var(--fg-light)",
      borderTop: "1px solid var(--border-light)",
      borderBottom: "1px solid var(--border-light)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--border-light-strong)",
        }}>
          <Step n="01" label="You write" body="Tell us about the project — scope, timeline, budget. The more detail, the better the response." />
          <Step n="02" label="We respond" body="A real human from SMG replies within one business day. No bots, no auto-routing." />
          <Step n="03" label="We meet" body="Site visit or video call to scope the work. Estimate follows within the week." last />
        </div>
      </div>
    </section>
  );
}

function Step({ n, label, body, last }) {
  return (
    <div style={{
      padding: "48px 36px 56px",
      borderRight: last ? "0" : "1px solid var(--border-light-strong)",
      position: "relative",
      display: "flex", flexDirection: "column", gap: 20,
    }}>
      <span aria-hidden="true" style={{
        position: "absolute", top: -1, left: 0,
        width: 56, height: 2, background: "var(--accent-pressed)",
      }} />
      <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
        <span style={{
          fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11,
          letterSpacing: ".3em", color: "var(--accent-pressed)",
        }}>{n}</span>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "var(--fg-light-subtle)",
        }}>Step {n}</span>
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(36px, 4.4vw, 64px)",
        lineHeight: 0.95, letterSpacing: "-.05em",
        textTransform: "uppercase", color: "var(--fg-light)",
        margin: 0,
      }}>{label}.</h3>

      <p style={{
        fontSize: 15, lineHeight: 1.6,
        color: "var(--fg-light-muted)",
        margin: 0, maxWidth: 320,
      }}>{body}</p>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { ContactGuarantee });

})();
