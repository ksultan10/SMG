/* global React, SMG */
const { useState } = React;
const { Icon, Eyebrow, Button } = window.SMG;

/* ============================================================
   CONTACT PAGE — Form + locations
   ============================================================ */
function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", project: "Custom Home", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const onSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

  return (
    <main style={{ paddingTop: 84 }}>
      <section style={{ padding: "120px var(--gutter) var(--section-pad-y)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="smg-h1" style={{ marginTop: 28, marginBottom: 80, maxWidth: 1100 }}>
            Tell us what you're <span style={{ color: "var(--accent)" }}>building</span>.
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
            {submitted ? (
              <div style={{ padding: "80px 0", borderTop: "1px solid var(--accent)" }}>
                <Eyebrow>Received</Eyebrow>
                <h2 className="smg-h2" style={{ marginTop: 28, fontSize: "clamp(40px,5vw,64px)" }}>
                  Thanks, <span style={{ color: "var(--accent)" }}>{form.name.split(" ")[0] || "friend"}</span>.<br/>
                  We'll be in touch within 48 hours.
                </h2>
              </div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                <Field label="Full name" value={form.name} onChange={set("name")} placeholder="Your name" required />
                <Field label="Email" type="email" value={form.email} onChange={set("email")} placeholder="you@domain.ca" required />
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 16 }}>Project type</label>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    {["Custom Home", "Commercial", "Restoration", "Sponsorship"].map((opt) => (
                      <button type="button" key={opt} onClick={() => setForm({ ...form, project: opt })}
                              style={{
                                padding: "12px 20px", border: "1px solid",
                                borderColor: form.project === opt ? "var(--accent)" : "var(--border-strong)",
                                background: form.project === opt ? "var(--accent)" : "transparent",
                                color: form.project === opt ? "#000" : "#fff",
                                fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
                                letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer",
                                transition: "all 400ms cubic-bezier(0.4,0,0.2,1)",
                              }}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 8 }}>Message</label>
                  <textarea className="smg-textarea" rows={4} value={form.message} onChange={set("message")} placeholder="Tell us about the project, timeline, budget range." />
                </div>
                <Button as="button" type="submit">Send message</Button>
              </form>
            )}

            <aside>
              <div style={{ borderTop: "1px solid var(--accent)", paddingTop: 32, marginBottom: 48 }}>
                <Eyebrow>Fort McMurray</Eyebrow>
                <p style={{ marginTop: 18, color: "var(--fg-muted)" }}>9908 Franklin Avenue<br/>Fort McMurray, AB T9H 2K5</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
                  <a href="tel:+17805550143" className="smg-link" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <Icon name="phone" size={14} /> 1 (780) 555-0143
                  </a>
                  <a href="mailto:build@smgbuilders.ca" className="smg-link" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <Icon name="mail" size={14} /> build@smgbuilders.ca
                  </a>
                </div>
              </div>
              <div style={{ borderTop: "1px solid var(--accent)", paddingTop: 32 }}>
                <Eyebrow>Edmonton</Eyebrow>
                <p style={{ marginTop: 18, color: "var(--fg-muted)" }}>10180 101 Street NW<br/>Edmonton, AB T5J 3S4</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
                  <a href="tel:+17805550144" className="smg-link" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <Icon name="phone" size={14} /> 1 (780) 555-0144
                  </a>
                  <a href="mailto:edmonton@smgbuilders.ca" className="smg-link" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <Icon name="mail" size={14} /> edmonton@smgbuilders.ca
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, ...rest }) {
  return (
    <div>
      <label style={{ display: "block", fontSize: 11, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 600, marginBottom: 8 }}>{label}</label>
      <input className="smg-input" {...rest} />
    </div>
  );
}

window.SMG = Object.assign(window.SMG || {}, { ContactPage });
