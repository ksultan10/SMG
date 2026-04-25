(() => {
/* global React, Bits, PortfolioData */
const { useState, useEffect } = React;
const { Eyebrow, Photo, Button } = window.Bits;

/* ============================================================
   PORTFOLIO — SECTION 4 — PROJECT DETAIL TEMPLATE
   In-page route: when a project is open, this overlays the grid.
   ============================================================ */

function ProjectDetail({ id, onClose, onNext }) {
  const all = window.PortfolioData.PROJECTS;
  const project = all.find((p) => p.id === id) || all[0];
  const idx = all.findIndex((p) => p.id === project.id);
  const next = all[(idx + 1) % all.length];

  const [lightbox, setLightbox] = useState(null); // index of open gallery image

  // Esc closes detail or lightbox
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (lightbox !== null) setLightbox(null);
        else onClose && onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    // Scroll to top when opening
    window.scrollTo({ top: 0, behavior: "auto" });
    return () => window.removeEventListener("keydown", onKey);
  }, [id, lightbox, onClose]);

  // Build a 6-tile gallery using varied tones from the project's vibe
  const gallery = buildGallery(project);

  return (
    <div data-section-id="project-detail" data-screen-label={`Detail · ${project.name}`} style={{
      background: "#000", minHeight: "100vh",
    }}>
      {/* Top bar — back to grid */}
      <div style={{
        position: "sticky", top: 0, zIndex: 30,
        background: "rgba(0,0,0,.92)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto",
          padding: "20px var(--gutter)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          gap: 24, flexWrap: "wrap",
        }}>
          <button onClick={onClose} style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            padding: 0, border: 0, background: "transparent", cursor: "pointer",
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12,
            letterSpacing: ".25em", textTransform: "uppercase", color: "#fff",
          }}>
            <span style={{ display: "inline-block", transform: "rotate(180deg)" }}>→</span>
            Back to portfolio
          </button>
          <span style={{
            fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
            letterSpacing: ".3em", color: "var(--fg-subtle)",
          }}>
            {String(idx + 1).padStart(2, "0")} / {String(all.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Hero image (full-width) */}
      <div style={{ position: "relative" }}>
        <div style={{ aspectRatio: "21/9", position: "relative", overflow: "hidden", background: "#000" }}>
          <Photo tone={project.tone} ratio="21/9" hover={true} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(180deg, rgba(0,0,0,.2) 0%, rgba(0,0,0,.1) 50%, rgba(0,0,0,.85) 100%)",
          }} />
          <div style={{
            position: "absolute", left: 24, bottom: 24,
            fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
            letterSpacing: ".3em", textTransform: "uppercase",
            color: "rgba(255,255,255,.5)",
          }}>
            Hero photo placeholder · {project.location}
          </div>
        </div>
      </div>

      {/* Title block */}
      <div style={{
        padding: "80px var(--gutter) 64px",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Eyebrow>{project.category} · {project.year}</Eyebrow>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(56px, 9vw, 152px)",
            lineHeight: 0.92, letterSpacing: "-.05em",
            textTransform: "uppercase", color: "#fff",
            margin: "32px 0 0",
          }}>
            {project.name}
          </h1>
          <div style={{
            marginTop: 32, display: "flex", gap: 48, flexWrap: "wrap",
            fontFamily: "var(--font-body)", fontSize: 14,
            color: "var(--fg-muted)",
          }}>
            <MetaChip k="Location" v={project.location} />
            <MetaChip k="Client"   v={project.client} />
            <MetaChip k="Completed" v={String(project.year)} />
          </div>
        </div>
      </div>

      {/* Body — copy + sidebar */}
      <div style={{
        padding: "var(--section-pad-y) var(--gutter) 96px",
      }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gap: "clamp(48px, 7vw, 120px)",
        }}>
          <div>
            <Eyebrow>Project</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: 1.05, letterSpacing: "-.04em",
              textTransform: "uppercase", color: "#fff",
              margin: "32px 0 40px", maxWidth: 720,
            }}>
              About this <span style={{ color: "var(--accent)" }}>build</span>.
            </h2>
            <p style={{
              fontSize: 19, lineHeight: 1.65, color: "var(--fg-muted)",
              maxWidth: 720, margin: 0,
            }}>{project.desc}</p>
          </div>

          <aside style={{
            paddingTop: 32,
            borderLeft: "1px solid var(--border)",
            paddingLeft: "clamp(32px, 4vw, 56px)",
          }}>
            <DataRow k="Client" v={project.client} />
            <DataRow k="Category" v={project.category} />
            <DataRow k="Year Completed" v={String(project.year)} />
            <DataRow k="Location" v={project.location} />

            <div style={{ marginTop: 48 }}>
              <span style={{
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
                letterSpacing: ".25em", textTransform: "uppercase",
                color: "var(--fg-subtle)",
              }}>Scope</span>
              <div style={{ marginTop: 18, display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.scope.map((s) => (
                  <span key={s} style={{
                    padding: "8px 14px",
                    border: "1px solid var(--border-strong)",
                    fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
                    letterSpacing: ".15em", textTransform: "uppercase",
                    color: "var(--accent-soft)",
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Gallery */}
      <div style={{
        padding: "0 var(--gutter) var(--section-pad-y)",
      }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <div style={{
            display: "flex", justifyContent: "space-between",
            alignItems: "flex-end", flexWrap: "wrap", gap: 24,
            marginBottom: 56,
          }}>
            <div>
              <Eyebrow>Gallery</Eyebrow>
              <h3 style={{
                fontFamily: "var(--font-display)", fontWeight: 900,
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: 1.05, letterSpacing: "-.04em",
                textTransform: "uppercase", color: "#fff",
                margin: "24px 0 0",
              }}>
                Completed <span style={{ color: "var(--accent)" }}>photos</span>.
              </h3>
            </div>
            <span style={{
              fontFamily: "var(--font-body)", fontSize: 12,
              letterSpacing: ".2em", textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}>
              Click any tile · {gallery.length} photos
            </span>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "180px",
            gap: 16,
          }}>
            {gallery.map((g, i) => (
              <GalleryTile key={i} {...g} index={i + 1} onClick={() => setLightbox(i)} />
            ))}
          </div>
        </div>
      </div>

      {/* Next project */}
      <div style={{
        padding: "var(--section-pad-y) var(--gutter)",
        borderTop: "1px solid var(--border)",
        background: "#0A0A0A",
      }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto",
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 32,
        }}>
          <div>
            <span style={{
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
              letterSpacing: ".3em", textTransform: "uppercase",
              color: "var(--accent)",
            }}>Next Project</span>
            <h2 onClick={() => onNext && onNext(next.id)}
                style={{
                  fontFamily: "var(--font-display)", fontWeight: 900,
                  fontSize: "clamp(48px, 7vw, 112px)",
                  lineHeight: 0.95, letterSpacing: "-.05em",
                  textTransform: "uppercase", color: "#fff",
                  margin: "24px 0 0", cursor: "pointer", maxWidth: 1100,
                }}>
              {next.name} <span style={{ color: "var(--accent)" }}>→</span>
            </h2>
            <span style={{
              display: "block", marginTop: 16,
              fontFamily: "var(--font-body)", fontSize: 13,
              letterSpacing: ".05em", color: "var(--fg-muted)",
            }}>
              {next.category} · {next.location} · {next.year}
            </span>
          </div>
          <Button variant="primary" onClick={() => onNext && onNext(next.id)}>
            Continue
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox photos={gallery} index={lightbox}
                  onClose={() => setLightbox(null)}
                  onChange={(i) => setLightbox(i)} />
      )}
    </div>
  );
}

/* ─── helpers ─── */
function MetaChip({ k, v }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{
        fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 10,
        letterSpacing: ".3em", textTransform: "uppercase",
        color: "var(--fg-subtle)",
      }}>{k}</span>
      <span style={{ fontSize: 16, color: "#fff", fontWeight: 600 }}>{v}</span>
    </div>
  );
}

function DataRow({ k, v }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", gap: 24,
      padding: "18px 0",
      borderBottom: "1px solid var(--border)",
    }}>
      <span style={{
        fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
        letterSpacing: ".25em", textTransform: "uppercase",
        color: "var(--fg-subtle)",
      }}>{k}</span>
      <span style={{ fontSize: 14, color: "#fff", fontWeight: 600, textAlign: "right" }}>{v}</span>
    </div>
  );
}

const GAL_TONES = {
  warm:    "linear-gradient(135deg, #4a3a1a 0%, #2a2010 55%, #0a0a0a 100%)",
  cool:    "linear-gradient(140deg, #2a3140 0%, #15191f 55%, #050505 100%)",
  neutral: "linear-gradient(140deg, #3a3a3a 0%, #1a1a1a 55%, #050505 100%)",
  gold:    "linear-gradient(135deg, #6a5224 0%, #2a2010 60%, #0a0a0a 100%)",
  storm:   "linear-gradient(160deg, #2a2820 0%, #15140e 60%, #000 100%)",
};

function GalleryTile({ tone, span, rowSpan, label, index, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <div onClick={onClick}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           gridColumn: `span ${span}`,
           gridRow: `span ${rowSpan}`,
           position: "relative", cursor: "pointer", overflow: "hidden",
           border: "1px solid",
           borderColor: hover ? "var(--accent)" : "var(--border)",
           transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
         }}>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        background: GAL_TONES[tone] || GAL_TONES.neutral,
        filter: hover ? "none" : "grayscale(1) contrast(1.05)",
        transform: hover ? "scale(1.04)" : "scale(1)",
        transition: "filter 600ms cubic-bezier(.4,0,.2,1), transform 600ms cubic-bezier(.4,0,.2,1)",
      }} />
      <span style={{
        position: "absolute", top: 12, left: 12, zIndex: 2,
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10,
        letterSpacing: ".3em", color: "rgba(255,255,255,.7)",
      }}>{String(index).padStart(2, "0")}</span>
      <span style={{
        position: "absolute", bottom: 12, left: 12, zIndex: 2,
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 600,
        letterSpacing: ".15em", textTransform: "uppercase",
        color: hover ? "var(--accent)" : "rgba(255,255,255,.65)",
        transition: "color 400ms cubic-bezier(.4,0,.2,1)",
      }}>{label}</span>
    </div>
  );
}

function Lightbox({ photos, index, onClose, onChange }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") onChange((index + 1) % photos.length);
      if (e.key === "ArrowLeft")  onChange((index - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length, onChange]);

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
      {/* Close */}
      <button onClick={onClose} style={{
        position: "absolute", top: 24, right: 24,
        background: "transparent", border: "1px solid var(--border-strong)",
        color: "#fff", padding: "10px 14px", cursor: "pointer",
        fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700,
        letterSpacing: ".25em", textTransform: "uppercase",
      }}>Close · Esc</button>

      {/* Counter */}
      <div style={{
        position: "absolute", top: 24, left: 24,
        fontFamily: "ui-monospace, Menlo, monospace", fontSize: 11,
        letterSpacing: ".3em", color: "var(--fg-muted)",
      }}>
        <span style={{ color: "var(--accent)" }}>{String(index + 1).padStart(2, "0")}</span>
        <span> / {String(photos.length).padStart(2, "0")}</span>
      </div>

      {/* Image */}
      <div onClick={(e) => e.stopPropagation()} style={{
        position: "relative", width: "min(1200px, 90vw)", aspectRatio: "16/10",
        background: "#0a0a0a", border: "1px solid var(--border)",
      }}>
        <Photo tone={p.tone} ratio="16/10" hover={true} />
        <span style={{
          position: "absolute", left: 16, bottom: 16,
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600,
          letterSpacing: ".2em", textTransform: "uppercase",
          color: "rgba(255,255,255,.85)",
        }}>{p.label}</span>
      </div>

      {/* Prev / Next */}
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

function buildGallery(p) {
  const tones = ["warm", "neutral", "cool", "gold", "storm", "warm"];
  const labels = ["Exterior", "Site Approach", "Interior · Main", "Detail", "Aerial", "Interior · Detail"];
  // Layout pattern across 6-col grid: [3w 1h] [3w 1h] [2w 2h] [2w 2h] [2w 2h] is overkill;
  // use a simpler tested pattern — rows cleanly wrap at 6 cols.
  const layout = [
    { span: 4, rowSpan: 2 },
    { span: 2, rowSpan: 1 },
    { span: 2, rowSpan: 1 },
    { span: 2, rowSpan: 2 },
    { span: 2, rowSpan: 1 },
    { span: 2, rowSpan: 1 },
  ];
  return layout.map((l, i) => ({
    ...l,
    tone: i === 0 ? p.tone : tones[i % tones.length],
    label: labels[i],
  }));
}

window.Sections = Object.assign(window.Sections || {}, { ProjectDetail });

})();
