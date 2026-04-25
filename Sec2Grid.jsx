(() => {
/* global React, Bits, PortfolioData */
const { useState, useEffect, useRef } = React;
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   PORTFOLIO — SECTIONS 2 + 3 — STICKY FILTER + PROJECT GRID
   Filter pills become sticky on scroll. Grid is masonry-style
   via CSS columns so tile heights vary naturally for rhythm.
   ============================================================ */

const FILTERS = ["All", "Residential", "Commercial", "Restoration", "Design Build"];

function PortfolioGridSection({ onOpen }) {
  const [active, setActive] = useState("All");
  const [stuck, setStuck] = useState(false);
  const sentinelRef = useRef(null);

  // Scroll observer for sticky-state detection (so we can shift styles)
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px", threshold: [1] }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const projects = window.PortfolioData.PROJECTS;
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Sentinel — when this scrolls out of view, the bar is "stuck" */}
      <div ref={sentinelRef} aria-hidden="true" style={{ height: 1 }} />

      {/* SECTION 2 — FILTER BAR (sticky) */}
      <section data-section-id="portfolio-filters" data-screen-label="02 Filters" style={{
        position: "sticky", top: 0, zIndex: 50,
        background: stuck ? "rgba(0,0,0,.92)" : "#000",
        backdropFilter: stuck ? "blur(12px)" : "none",
        WebkitBackdropFilter: stuck ? "blur(12px)" : "none",
        borderBottom: `1px solid ${stuck ? "var(--border-strong)" : "var(--border)"}`,
        transition: "background 400ms cubic-bezier(.4,0,.2,1), border-color 400ms cubic-bezier(.4,0,.2,1)",
      }}>
        <div style={{
          maxWidth: 1440, margin: "0 auto",
          padding: stuck ? "20px var(--gutter)" : "32px var(--gutter)",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 32, flexWrap: "wrap",
          transition: "padding 400ms cubic-bezier(.4,0,.2,1)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "ui-monospace, Menlo, monospace",
              fontSize: 11, letterSpacing: ".25em", textTransform: "uppercase",
              color: "var(--fg-subtle)",
            }}>
              Filter <span style={{ color: "var(--accent)" }}>—</span>
            </span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {FILTERS.map((f) => {
                const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
                return (
                  <FilterPill key={f} label={f} count={count}
                              active={active === f} onClick={() => setActive(f)} />
                );
              })}
            </div>
          </div>

          <span style={{
            fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
            letterSpacing: ".15em", textTransform: "uppercase",
            color: "var(--fg-muted)",
          }}>
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>

      {/* SECTION 3 — MASONRY GRID */}
      <section data-section-id="portfolio-grid" data-screen-label="03 Grid" style={{
        padding: "96px var(--gutter) var(--section-pad-y)",
      }}>
        <div style={{ maxWidth: 1440, margin: "0 auto" }}>
          <Eyebrow>Selected work</Eyebrow>
          <h2 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: "clamp(40px, 6vw, 96px)",
            lineHeight: 1.02, letterSpacing: "-.05em",
            textTransform: "uppercase", color: "#fff",
            margin: "32px 0 80px",
          }}>
            <span style={{ color: "var(--accent)" }}>{active === "All" ? "Every" : active}</span><br/>
            project we've built.
          </h2>

          <div className="smg-masonry">
            {filtered.map((p, idx) => (
              <ProjectCard key={p.id} project={p} index={idx} onOpen={onOpen} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{
              padding: "120px 0", textAlign: "center",
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: 48, letterSpacing: "-.05em", color: "var(--fg-subtle)",
              textTransform: "uppercase",
            }}>
              No projects under this filter.
            </div>
          )}
        </div>

        <style>{`
          .smg-masonry {
            column-count: 3;
            column-gap: 24px;
          }
          @media (max-width: 1024px) { .smg-masonry { column-count: 2; } }
          @media (max-width: 640px) { .smg-masonry { column-count: 1; } }
          .smg-masonry > * {
            break-inside: avoid;
            margin-bottom: 24px;
            display: block;
          }
          .smg-card-fade {
            animation: smgCardFade 600ms cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes smgCardFade {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: none; }
          }
        `}</style>
      </section>
    </>
  );
}

/* ─── Filter pill ─── */
function FilterPill({ label, count, active, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick}
            onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
            style={{
              position: "relative", padding: 0, border: 0,
              background: "transparent", cursor: "pointer",
            }}>
      <span aria-hidden="true" style={{
        position: "absolute", inset: 0,
        transform: "skewX(-12deg)",
        background: active ? "var(--accent)" : (hover ? "rgba(206,166,77,.08)" : "transparent"),
        border: `1px solid ${active ? "var(--accent)" : (hover ? "var(--accent-soft)" : "var(--border-strong)")}`,
        transition: "all 300ms cubic-bezier(.4,0,.2,1)",
      }} />
      <span style={{
        position: "relative", zIndex: 1,
        display: "inline-flex", alignItems: "center", gap: 10,
        padding: "12px 22px",
        fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 12,
        letterSpacing: ".2em", textTransform: "uppercase",
        color: active ? "#000" : "#fff",
        transition: "color 300ms cubic-bezier(.4,0,.2,1)",
      }}>
        {label}
        <span style={{
          fontSize: 10, fontWeight: 600,
          color: active ? "rgba(0,0,0,.55)" : "var(--fg-subtle)",
        }}>{String(count).padStart(2, "0")}</span>
      </span>
    </button>
  );
}

/* ─── Masonry tile ─── */
const HEIGHTS = { tall: "5/7", medium: "4/3", wide: "16/10" };

function ProjectCard({ project, index, onOpen }) {
  const [hover, setHover] = useState(false);
  const ratio = HEIGHTS[project.height] || "4/3";

  return (
    <div className="smg-card-fade"
         onClick={() => onOpen && onOpen(project.id)}
         onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", cursor: "pointer",
           background: "#0A0A0A",
           border: "1px solid",
           borderColor: hover ? "var(--accent)" : "var(--border)",
           transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
           animationDelay: `${Math.min(index * 60, 300)}ms`,
         }}>
      <div style={{ overflow: "hidden", position: "relative" }}>
        <Photo tone={project.tone} ratio={ratio} hover={hover} zoom />

        {/* Index marker */}
        <span style={{
          position: "absolute", top: 16, left: 16, zIndex: 2,
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 10, letterSpacing: ".3em",
          color: "rgba(255,255,255,.7)",
        }}>{String(index + 1).padStart(2, "0")}</span>

        {/* Year */}
        <span style={{
          position: "absolute", top: 16, right: 16, zIndex: 2,
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 10, letterSpacing: ".25em",
          color: "rgba(255,255,255,.7)",
        }}>{project.year}</span>

        {/* View overlay on hover */}
        <div aria-hidden="true" style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          padding: "20px 24px",
          background: "linear-gradient(0deg, rgba(0,0,0,.85), transparent)",
          display: "flex", justifyContent: "flex-end", alignItems: "center",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(8px)",
          transition: "all 400ms cubic-bezier(.4,0,.2,1)",
          zIndex: 2,
        }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--accent)",
          }}>
            View Project <span>→</span>
          </span>
        </div>
      </div>

      <div style={{
        padding: "24px 24px 28px",
        display: "flex", flexDirection: "column", gap: 10,
      }}>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "var(--accent)",
        }}>{project.category}</span>
        <h3 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: 26, lineHeight: 1.02, letterSpacing: "-.04em",
          textTransform: "uppercase", color: "#fff",
          margin: 0,
        }}>{project.name}</h3>
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 12,
          letterSpacing: ".05em",
          color: "var(--fg-muted)",
        }}>{project.location}</span>
      </div>

      {/* Bottom accent draw */}
      <span aria-hidden="true" style={{
        position: "absolute", left: 0, bottom: 0, height: 2,
        width: hover ? "100%" : "0%",
        background: "var(--accent)",
        transition: "width 600ms cubic-bezier(.4,0,.2,1)",
      }} />
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { PortfolioGridSection });

})();
