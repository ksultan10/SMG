(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow, Button } = window.Bits;

/* ============================================================
   CONTACT — SECTION 2 — FORM + CONTACT INFO
   Two-column. Left: form. Right: contact info.
   ============================================================ */

const REASONS = [
  "General Inquiry",
  "Request a Quote",
  "Investment Opportunity (6.7 Acres)",
  "Sponsorship Request",
  "Careers",
  "Media",
];

const AREAS = ["Fort McMurray", "Edmonton", "Other"];

function ContactLayout() {
  return (
    <section data-section-id="ct-layout" data-screen-label="02 Form" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      background: "#000",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "clamp(48px, 7vw, 120px)",
          alignItems: "start",
        }}>
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

/* ----- FORM ----- */
function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", phone: "",
    reason: "", area: "", message: "",
  });
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));

  if (submitted) {
    return (
      <div style={{
        border: "1px solid var(--accent)", padding: "64px 48px",
        background: "rgba(206,166,77,.04)",
      }}>
        <span style={{
          fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
          letterSpacing: ".3em", color: "var(--accent)",
        }}>MESSAGE SENT · 01 / 01</span>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(32px, 4vw, 56px)",
          lineHeight: 1.05, letterSpacing: "-.04em",
          textTransform: "uppercase", color: "#fff",
          margin: "20px 0 16px",
        }}>
          Thanks, <span style={{ color: "var(--accent)" }}>{data.name || "we got it"}</span>.
        </h3>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--fg-muted)", maxWidth: 480 }}>
          We've received your message and will be in touch within one business day.
        </p>
        <div style={{ marginTop: 32 }}>
          <Button variant="ghost" onClick={() => { setSubmitted(false); setData({ name: "", email: "", phone: "", reason: "", area: "", message: "" }); }}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <Eyebrow>Project Inquiry</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(32px, 4vw, 56px)",
        lineHeight: 1.02, letterSpacing: "-.05em",
        textTransform: "uppercase", color: "#fff",
        margin: "24px 0 56px",
      }}>
        Send a message.
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
        <Field label="Name" required value={data.name} onChange={set("name")} placeholder="Your full name" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          <Field label="Email" required type="email" value={data.email} onChange={set("email")} placeholder="you@company.com" />
          <Field label="Phone" type="tel" value={data.phone} onChange={set("phone")} placeholder="780 000 0000" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36 }}>
          <Select label="Reason for contact" required value={data.reason} onChange={set("reason")} options={REASONS} placeholder="Select a reason" />
          <Select label="Service area" required value={data.area} onChange={set("area")} options={AREAS} placeholder="Select region" />
        </div>

        <Textarea label="Project description" value={data.message} onChange={set("message")} placeholder="Scope, timeline, budget — anything that helps us prepare." />
      </div>

      {/* Submit row */}
      <div style={{
        marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--border)",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 24,
      }}>
        <span style={{
          fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11,
          letterSpacing: ".25em", color: "var(--fg-subtle)",
        }}>
          ⓘ &nbsp; Required: name · email · reason · area
        </span>
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </div>
    </form>
  );
}

/* ----- FIELD PRIMITIVES ----- */
function FieldShell({ label, required, children }) {
  return (
    <label style={{ display: "block" }}>
      <span style={{
        display: "block", marginBottom: 12,
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".25em", textTransform: "uppercase",
        color: "var(--fg-muted)",
      }}>
        {label}{required && <span style={{ color: "var(--accent)", marginLeft: 6 }}>*</span>}
      </span>
      {children}
    </label>
  );
}

function Field({ label, required, type = "text", value, onChange, placeholder }) {
  const [focus, setFocus] = useState(false);
  return (
    <FieldShell label={label} required={required}>
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}
             onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
             style={inputStyle(focus)} />
    </FieldShell>
  );
}

function Select({ label, required, value, onChange, options, placeholder }) {
  const [focus, setFocus] = useState(false);
  return (
    <FieldShell label={label} required={required}>
      <div style={{ position: "relative" }}>
        <select value={value} onChange={onChange}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                style={{
                  ...inputStyle(focus),
                  appearance: "none", WebkitAppearance: "none", MozAppearance: "none",
                  paddingRight: 44,
                  color: value ? "#fff" : "var(--fg-subtle)",
                  cursor: "pointer",
                }}>
          <option value="" disabled style={{ color: "#888" }}>{placeholder}</option>
          {options.map((o) => <option key={o} value={o} style={{ color: "#fff", background: "#0a0a0a" }}>{o}</option>)}
        </select>
        <span aria-hidden="true" style={{
          position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)",
          color: focus ? "var(--accent)" : "var(--fg-muted)",
          pointerEvents: "none", fontSize: 14,
          transition: "color 300ms cubic-bezier(.4,0,.2,1)",
        }}>▾</span>
      </div>
    </FieldShell>
  );
}

function Textarea({ label, value, onChange, placeholder }) {
  const [focus, setFocus] = useState(false);
  return (
    <FieldShell label={label}>
      <textarea value={value} onChange={onChange} placeholder={placeholder} rows={6}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                style={{ ...inputStyle(focus), minHeight: 160, resize: "vertical", lineHeight: 1.55 }} />
    </FieldShell>
  );
}

function inputStyle(focus) {
  return {
    width: "100%",
    padding: "16px 18px",
    background: "transparent",
    border: "1px solid",
    borderColor: focus ? "var(--accent)" : "var(--border-strong)",
    borderRadius: 0,
    color: "#fff",
    fontFamily: "var(--font-body)",
    fontSize: 16,
    letterSpacing: ".005em",
    outline: "none",
    boxShadow: focus ? "inset 0 -1px 0 0 var(--accent)" : "none",
    transition: "border-color 400ms cubic-bezier(.4,0,.2,1), box-shadow 400ms cubic-bezier(.4,0,.2,1)",
  };
}

/* ----- INFO COLUMN ----- */
function ContactInfo() {
  return (
    <aside style={{ paddingTop: 8 }}>
      <Eyebrow>Direct</Eyebrow>
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 900,
        fontSize: "clamp(32px, 4vw, 56px)",
        lineHeight: 1.02, letterSpacing: "-.05em",
        textTransform: "uppercase", color: "#fff",
        margin: "24px 0 56px",
      }}>
        Get in touch.
      </h2>

      {/* Phone */}
      <InfoBlock label="Call">
        <a href="tel:7803704333" style={bigLink}>
          780 · 370 · 4333
        </a>
      </InfoBlock>

      {/* Email */}
      <InfoBlock label="Email">
        <a href="mailto:info@smg.ca" style={bigLink}>
          info@smg.ca
        </a>
      </InfoBlock>

      {/* Address */}
      <InfoBlock label="Visit">
        <p style={addressStyle}>
          Bay 9, 280 TaigaNova Crescent<br/>
          Fort McMurray, AB
        </p>
      </InfoBlock>

      {/* Hours */}
      <InfoBlock label="Hours">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <HourRow day="Mon — Fri" time="9 AM — 5 PM" />
          <HourRow day="Sat — Sun" time="Closed" muted />
        </div>
      </InfoBlock>

      {/* Social */}
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
        <span style={{
          display: "block", marginBottom: 20,
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "var(--fg-muted)",
        }}>Follow</span>
        <div style={{ display: "flex", gap: 12 }}>
          <Social label="Facebook"  href="#" path="M9.5 21v-7H7v-3h2.5V8.5c0-2.5 1.5-4 3.8-4 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.7.8-1.7 1.6V11h2.8l-.5 3h-2.3v7" />
          <Social label="LinkedIn"  href="#" path="M5 4.5C5 5.3 4.3 6 3.5 6S2 5.3 2 4.5 2.7 3 3.5 3 5 3.7 5 4.5zM2.5 7.5h2v9h-2v-9zm4 0h2v1.3c.4-.7 1.4-1.5 2.7-1.5 2.2 0 2.8 1.4 2.8 3.4v5.8h-2v-5.2c0-1.3-.5-2-1.6-2-1 0-1.7.6-1.9 1.5-.1.3-.1.6-.1 1v4.7h-2v-9z" />
          <Social label="Instagram" href="#" path="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7zm10 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
        </div>
      </div>
    </aside>
  );
}

function InfoBlock({ label, children }) {
  return (
    <div style={{ paddingBottom: 32, marginBottom: 32, borderBottom: "1px solid var(--border)" }}>
      <span style={{
        display: "block", marginBottom: 12,
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".25em", textTransform: "uppercase",
        color: "var(--fg-muted)",
      }}>{label}</span>
      {children}
    </div>
  );
}

const bigLink = {
  fontFamily: "var(--font-display)", fontWeight: 900,
  fontSize: "clamp(28px, 3vw, 40px)",
  lineHeight: 1.05, letterSpacing: "-.04em",
  color: "var(--accent)", textDecoration: "none",
  borderBottom: "1px solid transparent",
  transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
};

const addressStyle = {
  fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.55,
  color: "#fff", margin: 0,
};

function HourRow({ day, time, muted }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15 }}>
      <span style={{ color: muted ? "var(--fg-subtle)" : "#fff" }}>{day}</span>
      <span style={{ color: muted ? "var(--fg-subtle)" : "var(--fg-muted)", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 13 }}>{time}</span>
    </div>
  );
}

function Social({ label, href, path }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} aria-label={label} title={label}
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       style={{
         width: 44, height: 44,
         display: "inline-flex", alignItems: "center", justifyContent: "center",
         border: "1px solid",
         borderColor: hover ? "var(--accent)" : "var(--border-strong)",
         color: hover ? "var(--accent)" : "#fff",
         transition: "all 300ms cubic-bezier(.4,0,.2,1)",
         transform: hover ? "translateY(-2px)" : "translateY(0)",
       }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
    </a>
  );
}

window.Sections = Object.assign(window.Sections || {}, { ContactLayout });

})();
