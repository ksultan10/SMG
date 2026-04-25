(() => {
/* global React, Bits */
const { useState, useEffect } = React;
const { Eyebrow } = window.Bits;

/* ============================================================
   SPONSORSHIPS — SECTION 6 — COMMUNITY GALLERY
   Masonry photo grid · click to lightbox
   ============================================================ */

const TONE_BG = {
  warm:    "linear-gradient(135deg, #4a3a1a 0%, #2a2010 55%, #0a0a0a 100%)",
  cool:    "linear-gradient(140deg, #2a3140 0%, #15191f 55%, #050505 100%)",
  neutral: "linear-gradient(140deg, #3a3a3a 0%, #1a1a1a 55%, #050505 100%)",
  gold:    "linear-gradient(135deg, #6a5224 0%, #2a2010 60%, #0a0a0a 100%)",
  storm:   "linear-gradient(160deg, #2a2820 0%, #15140e 60%, #000 100%)",
};

const PHOTOS = [
  { tone: "warm",    label: "Holiday Food Drive · 2024",          ratio: "4/5" },
  { tone: "gold",    label: "ITD Academy · Tip-off",              ratio: "1/1" },
  { tone: "cool",    label: "Habitat for Humanity Build",         ratio: "16/10" },
  { tone: "neutral", label: "Lights of Hope Gala",                ratio: "3/4" },
  { tone: "warm",    label: "Boys & Girls Club Trades Day",       ratio: "4/3" },
  { tone: "storm",   label: "Flood Recovery · 2020",              ratio: "5/7" },
  { tone: "gold",    label: "WBMHA Tournament",                   ratio: "16/9" },
  { tone: "cool",    label: "United Way Workplace Drive",         ratio: "3/4" },
  { tone: "neutral", label: "Court Dedication · MacIsland",       ratio: "4/3" },
  { tone: "warm",    label: "Curling Bonspiel Sponsorship",       ratio: "1/1" },
  { tone: "gold",    label: "ITD Academy · Coaching Clinic",      ratio: "4/5" },
  { tone: "storm",   label: "2016 Wildfire Aid Distribution",     ratio: "16/10" },
];

function SponsCommunity() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section data-section-id="sp-community" data-screen-label="06 Community" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      background: "#000",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 24,
          marginBottom: 80,
        }}>
          <div>
            <Eyebrow>In the Community</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 1.02, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "#fff",
              margin: "32px 0 0",
            }}>
              <span style={{ color: "var(--accent)" }}>Boots</span> on<br/>
              the ground.
            </h2>
          </div>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 12,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--fg-subtle)", paddingBottom: 12,
          }}>
            {PHOTOS.length} moments · click any
          </span>
        </div>

        {/* Masonry — CSS columns, varied tile aspect ratios */}
        <div className="smg-spons-masonry">
          {PHOTOS.map((p, i) => (
            <PhotoTile key={i} index={i + 1} {...p} onClick={() => setLightbox(i)} />
          ))}
        </div>

        {lightbox !== null && (
          <Lightbox photos={PHOTOS} index={lightbox}
                    onClose={() => setLightbox(null)}
                    onChange={(i) => setLightbox(i)} />
        )}
      </div>

      <style>{`
        .smg-spons-masonry {
          column-count: 3;
          column-gap: 16px;
        }
        @media (max-width: 1024px) { .smg-spons-masonry { column-count: 2; } }
        @media (max-width: 640px)  { .smg-spons-masonry { column-count: 1; } }
        .smg-spons-masonry > * {
          break-inside: avoid;
          margin-bottom: 16px;
          display: block;
        }
      `}</style>
    </section>
  );
}

function PhotoTile({ tone, label, ratio, index, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", aspectRatio: ratio,
           cursor: "pointer", overflow: "hidden",
           border: "1px solid",
           borderColor: hover ? "var(--accent)" : "var(--border)",
           transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
         }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: TONE_BG[tone],
        filter: hover ? "none" : "grayscale(1) contrast(1.05)",
        transform: hover ? "scale(1.04)" : "scale(1)",
        transition: "filter 600ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1)",
      }} />
      <span style={{
        position: "absolute", top: 12, left: 12, zIndex: 2,
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
        letterSpacing: ".3em", color: "rgba(255,255,255,.7)",
      }}>{String(index).padStart(2, "0")}</span>
      <div aria-hidden="true" style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        padding: "16px 16px",
        background: "linear-gradient(0deg, rgba(0,0,0,.85), transparent)",
        opacity: hover ? 1 : 0,
        transition: "opacity 400ms cubic-bezier(.4,0,.2,1)",
        zIndex: 2,
      }}>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
          letterSpacing: ".2em", textTransform: "uppercase",
          color: "var(--accent)",
        }}>{label}</span>
      </div>
    </div>
  );
}

function Lightbox({ photos, index, onClose, onChange }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft")  onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onClose, onChange]);

  const p = photos[index];
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: "rgba(0,0,0,.95)",
      backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "80px 64px",
      animation: "smgFadeIn 300ms cubic-bezier(.4,0,.2,1)",
    }}>
      <button onClick={onClose} style={{
        position: "absolute", top: 24, right: 24,
        background: "transparent", border: "1px solid var(--border-strong)",
        color: "#fff", padding: "10px 14px", cursor: "pointer",
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".25em", textTransform: "uppercase",
      }}>Close · Esc</button>

      <div style={{
        position: "absolute", top: 24, left: 24,
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11,
        letterSpacing: ".3em", color: "var(--fg-muted)",
      }}>
        <span style={{ color: "var(--accent)" }}>{String(index + 1).padStart(2, "0")}</span>
        <span> / {String(photos.length).padStart(2, "0")}</span>
      </div>

      <div onClick={(e) => e.stopPropagation()} style={{
        position: "relative", width: "min(1100px, 88vw)", aspectRatio: "16/10",
        background: "#0a0a0a", border: "1px solid var(--border)",
      }}>
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0,
          background: TONE_BG[p.tone],
        }} />
        <span style={{
          position: "absolute", left: 16, bottom: 16,
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
          letterSpacing: ".2em", textTransform: "uppercase",
          color: "rgba(255,255,255,.85)",
        }}>{p.label}</span>
      </div>

      <button onClick={(e) => { e.stopPropagation(); onChange((index - 1 + photos.length) % photos.length); }}
              style={{
                position: "absolute", left: 24, top: "50%", transform: "translateY(-50%)",
                background: "transparent", border: "1px solid var(--border-strong)",
                color: "#fff", width: 56, height: 56, cursor: "pointer", fontSize: 24,
              }}>←</button>
      <button onClick={(e) => { e.stopPropagation(); onChange((index + 1) % photos.length); }}
              style={{
                position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)",
                background: "transparent", border: "1px solid var(--border-strong)",
                color: "#fff", width: 56, height: 56, cursor: "pointer", fontSize: 24,
              }}>→</button>

      <style>{`
        @keyframes smgFadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { SponsCommunity });

})();
