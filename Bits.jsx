(() => {
/* global React */
const { useState, useEffect, useRef } = React;

/* === Reusable bits used across sections === */

function Eyebrow({ children, color = "gold" }) {
  const c = color === "gold" ? "var(--accent)" : "var(--accent-soft)";
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 12,
      fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 12,
      letterSpacing: ".2em", textTransform: "uppercase", color: c, lineHeight: 1,
    }}>
      <span style={{ width: 28, height: 1, background: c }} />
      {children}
    </span>
  );
}

/* Italic-window button — skewed pane, upright text. Matches design system. */
function Button({ children, variant = "primary", onClick, as = "button", href }) {
  const Tag = as;
  const palette = {
    primary: { fg: "#000", bgIdle: "var(--accent)", bgHover: "var(--accent-soft)", border: "var(--accent)" },
    ghost:   { fg: "#fff", bgIdle: "transparent",  bgHover: "#fff",                border: "#fff",         fgHover: "#000" },
    outline: { fg: "var(--accent)", bgIdle: "transparent", bgHover: "var(--accent)", border: "var(--accent)", fgHover: "#000" },
  }[variant];
  const [hover, setHover] = useState(false);
  const fg = hover && palette.fgHover ? palette.fgHover : palette.fg;
  return (
    <Tag onClick={onClick} href={href}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", display: "inline-block", padding: 0, border: 0,
           background: "transparent", cursor: "pointer", textDecoration: "none",
         }}>
      <span style={{
        position: "absolute", inset: 0,
        transform: "skewX(-12deg)",
        background: hover ? palette.bgHover : palette.bgIdle,
        border: `1px solid ${palette.border}`,
        boxShadow: hover && variant === "primary" ? "0 8px 24px -8px rgba(206,166,77,.5)" : "none",
        transition: "all 400ms cubic-bezier(.4,0,.2,1)",
      }} />
      <span style={{
        position: "relative", zIndex: 1,
        display: "inline-flex", alignItems: "center", gap: 14,
        padding: "18px 32px",
        fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13,
        letterSpacing: ".2em", textTransform: "uppercase",
        color: fg, transition: "color 400ms cubic-bezier(.4,0,.2,1)",
      }}>
        {children} <span style={{ display: "inline-block", transform: hover ? "translateX(4px)" : "none", transition: "transform 400ms cubic-bezier(.4,0,.2,1)" }}>→</span>
      </span>
    </Tag>
  );
}

function Photo({ tone = "warm", ratio = "4/3", label, hover: forceHover = false, zoom = false, style }) {
  const [hover, setHover] = useState(false);
  const tones = {
    warm:    "linear-gradient(135deg, #4a3a1a 0%, #2a2010 55%, #0a0a0a 100%)",
    cool:    "linear-gradient(140deg, #2a3140 0%, #15191f 55%, #050505 100%)",
    neutral: "linear-gradient(140deg, #3a3a3a 0%, #1a1a1a 55%, #050505 100%)",
    gold:    "linear-gradient(135deg, #6a5224 0%, #2a2010 60%, #0a0a0a 100%)",
    storm:   "linear-gradient(160deg, #2a2820 0%, #15140e 60%, #000 100%)",
    aerial:  "radial-gradient(ellipse at 30% 40%, #3a3a30 0%, #1a1a14 40%, #050505 100%)",
  };
  const showColor = hover || forceHover;
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", aspectRatio: ratio, overflow: "hidden",
           background: "#000", ...style,
         }}>
      <div style={{
        position: "absolute", inset: 0, background: tones[tone],
        filter: showColor ? "none" : "grayscale(1) contrast(1.05)",
        transform: zoom && hover ? "scale(1.04)" : "scale(1)",
        transition: "filter 900ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1)",
      }} />
      {label && (
        <div style={{
          position: "absolute", left: 16, bottom: 16, zIndex: 1,
          fontFamily: "var(--font-body)", fontSize: 10,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "rgba(255,255,255,.6)",
        }}>{label}</div>
      )}
    </div>
  );
}

window.Bits = { Eyebrow, Button, Photo };

})();
