/* global React */
const { useState, useEffect, useRef } = React;

/* ============================================================
   ICONS — inline Lucide-style 2px stroke
   ============================================================ */
function Icon({ name, size = 20, className = "" }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    "arrow-right": <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    "arrow-up-right": <><path d="M7 7h10v10"/><path d="M7 17 17 7"/></>,
    "arrow-down": <><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></>,
    "phone": <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    "mail": <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    "map-pin": <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
    "menu": <><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></>,
    "x": <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    "plus": <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    "minus": <line x1="5" y1="12" x2="19" y2="12"/>,
    "instagram": <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    "facebook": <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    "linkedin": <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} {...stroke} className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/* ============================================================
   PRIMITIVES
   ============================================================ */
function Eyebrow({ children, className = "" }) {
  return <span className={`smg-eyebrow ${className}`}>{children}</span>;
}

function Button({ as = "button", variant = "primary", children, icon = "arrow-right", iconBefore = false, ...rest }) {
  const Tag = as;
  const cls = {
    primary: "smg-btn",
    ghost: "smg-btn smg-btn--ghost",
    outline: "smg-btn smg-btn--gold-outline",
  }[variant];
  return (
    <Tag className={cls} {...rest}>
      {iconBefore && icon && <Icon name={icon} size={16} />}
      <span>{children}</span>
      {!iconBefore && icon && <Icon name={icon} size={16} />}
    </Tag>
  );
}

function GoldRule({ className = "", style }) {
  return <span className={`smg-rule ${className}`} style={style} aria-hidden="true" />;
}

/* ============================================================
   PHOTO PLACEHOLDER — gradient block with project label
   (We never have real photos — placeholders by design.)
   ============================================================ */
function Photo({ tone = "warm", label, hover = false, ratio = "4/3", className = "", style }) {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const tones = {
    warm:    "linear-gradient(135deg, #4a3a1a 0%, #2a2010 55%, #0a0a0a 100%)",
    cool:    "linear-gradient(140deg, #2a3140 0%, #15191f 55%, #050505 100%)",
    neutral: "linear-gradient(140deg, #3a3a3a 0%, #1a1a1a 55%, #050505 100%)",
    gold:    "linear-gradient(135deg, #6a5224 0%, #2a2010 60%, #0a0a0a 100%)",
    storm:   "linear-gradient(160deg, #2a2820 0%, #15140e 60%, #000 100%)",
  };
  const showColor = hover || isHover;
  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`smg-photo-frame ${className}`}
      style={{
        position: "relative",
        aspectRatio: ratio,
        background: tones[tone],
        overflow: "hidden",
        filter: showColor ? "none" : "grayscale(1) contrast(1.05)",
        transition: "filter 900ms cubic-bezier(0.4, 0, 0.2, 1)",
        ...style,
      }}
    >
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 30% 80%, rgba(206,166,77,.08), transparent 60%)",
      }} />
      {label && (
        <div style={{
          position: "absolute", left: 18, bottom: 18,
          fontFamily: "var(--font-body)", fontSize: 10,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "rgba(255,255,255,.6)",
        }}>
          {label}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function TopNav({ active, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const items = ["Home", "About", "Portfolio", "Sponsorships", "Contact"];
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition: "all 400ms cubic-bezier(0.4,0,0.2,1)",
    }}>
      <div style={{
        maxWidth: 1440, margin: "0 auto", padding: "0 var(--gutter)",
        height: 84, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("Home"); }}
           style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="../../assets/logo-stacked.png" alt="SMG Builders" style={{ height: 44, width: "auto" }} />
          <span style={{
            fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 14,
            letterSpacing: "-.02em", textTransform: "uppercase", color: "#fff",
            lineHeight: 1, borderLeft: "1px solid #2A2A2A", paddingLeft: 12,
          }}>
            Builders<br/>
            <span style={{ color: "var(--accent-soft)", fontSize: 9, letterSpacing: ".2em", fontWeight: 600 }}>EST. 2013</span>
          </span>
        </a>
        <nav style={{ display: "flex", gap: 32 }}>
          {items.map((item) => (
            <a key={item} href="#"
               onClick={(e) => { e.preventDefault(); onNavigate(item); }}
               style={{
                 fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
                 letterSpacing: ".2em", textTransform: "uppercase",
                 color: "#fff", textDecoration: "none", paddingBottom: 4,
                 borderBottom: active === item ? "2px solid var(--accent)" : "2px solid transparent",
                 transition: "border-color 400ms cubic-bezier(0.4,0,0.2,1)",
               }}>
              {item}
            </a>
          ))}
        </nav>
        <Button as="a" href="#" onClick={(e) => { e.preventDefault(); onNavigate("Contact"); }} variant="primary">
          Get estimate
        </Button>
      </div>
    </header>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ onNavigate }) {
  return (
    <footer style={{
      background: "#000",
      borderTop: "1px solid var(--border)",
      padding: "var(--space-9) var(--gutter) var(--space-7)",
      marginTop: 0,
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 64, paddingBottom: 80 }}>
          <div>
            <img src="../../assets/logo-horizontal.png" alt="SMG Builders" style={{ height: 56, width: "auto", marginBottom: 24 }}/>
            <p style={{ maxWidth: 320, color: "var(--fg-muted)", fontSize: 14 }}>
              General contracting and post-disaster restoration. Fort McMurray and Edmonton, Alberta.
            </p>
          </div>
          <div>
            <Eyebrow>Site</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18 }}>
              {["Home", "About", "Portfolio", "Sponsorships", "Contact"].map((s) => (
                <a key={s} href="#" onClick={(e) => { e.preventDefault(); onNavigate(s); }} className="smg-link" style={{ fontSize: 14 }}>{s}</a>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Contact</Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 18, color: "var(--fg-muted)", fontSize: 14 }}>
              <span>1 (780) 555-0143</span>
              <span>build@smgbuilders.ca</span>
              <span>Fort McMurray · Edmonton</span>
            </div>
          </div>
          <div>
            <Eyebrow>Follow</Eyebrow>
            <div style={{ display: "flex", gap: 14, marginTop: 18 }}>
              <a href="#" style={{ color: "#fff" }} aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="#" style={{ color: "#fff" }} aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="#" style={{ color: "#fff" }} aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>
        </div>
        <div style={{
          paddingTop: 32, borderTop: "1px solid var(--border)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: ".15em",
          textTransform: "uppercase", color: "var(--fg-subtle)",
        }}>
          <span>© 2026 SMG Builders Ltd.</span>
          <span>Wood Buffalo · Treaty 8 Territory</span>
        </div>
      </div>
    </footer>
  );
}

window.SMG = Object.assign(window.SMG || {}, {
  Icon, Eyebrow, Button, GoldRule, Photo, TopNav, Footer,
});
