(() => {
/* global React, Bits */
const { useState } = React;
const { Eyebrow, Photo } = window.Bits;

/* ============================================================
   ABOUT — SECTION 4 — VIDEO STORIES
   2x2 grid of YouTube embed placeholders, gold play button on hover
   ============================================================ */

const VIDEOS = [
  { title: "Meet the Founder",        runtime: "04:12", tone: "warm",   tag: "Origins" },
  { title: "Building Through the Fire", runtime: "06:48", tone: "storm",  tag: "2016 Wildfire" },
  { title: "Why Fort McMurray",        runtime: "03:55", tone: "neutral", tag: "Place" },
  { title: "The Road to Edmonton",     runtime: "05:21", tone: "gold",   tag: "Expansion" },
];

function AboutVideos() {
  return (
    <section data-section-id="about-videos" data-screen-label="04 Videos" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 32,
          marginBottom: 80,
        }}>
          <div>
            <Eyebrow>Meet the Team</Eyebrow>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 900,
              fontSize: "clamp(40px, 6vw, 96px)",
              lineHeight: 1.02, letterSpacing: "-.05em",
              textTransform: "uppercase", color: "#fff",
              margin: "32px 0 0", maxWidth: 1100,
            }}>
              Stories from<br/>
              the <span style={{ color: "var(--accent)" }}>site</span>.
            </h2>
          </div>
          <span style={{
            fontFamily: "var(--font-body)", fontSize: 11,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--fg-subtle)", paddingBottom: 12,
          }}>
            04 / Videos · 4 stories
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 32,
        }}>
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.title} index={i + 1} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoCard({ index, title, runtime, tone, tag }) {
  const [hover, setHover] = useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
         style={{
           position: "relative", cursor: "pointer",
         }}>
      {/* Thumbnail */}
      <div style={{
        position: "relative", overflow: "hidden",
        border: "1px solid",
        borderColor: hover ? "var(--accent)" : "var(--border)",
        transition: "border-color 400ms cubic-bezier(.4,0,.2,1)",
      }}>
        <Photo tone={tone} ratio="16/9" hover={hover} zoom />

        {/* Index marker top-left */}
        <span style={{
          position: "absolute", top: 16, left: 16, zIndex: 2,
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 10, letterSpacing: ".3em",
          color: "#fff", opacity: .8,
        }}>0{index}</span>

        {/* YouTube placeholder marker top-right */}
        <span style={{
          position: "absolute", top: 16, right: 16, zIndex: 2,
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "6px 10px",
          background: "rgba(0,0,0,.7)",
          fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700,
          letterSpacing: ".25em", textTransform: "uppercase",
          color: "rgba(255,255,255,.7)",
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)" }} />
          YouTube
        </span>

        {/* Runtime bottom-right */}
        <span style={{
          position: "absolute", bottom: 16, right: 16, zIndex: 2,
          padding: "4px 8px",
          background: "rgba(0,0,0,.85)",
          fontFamily: "ui-monospace, Menlo, monospace",
          fontSize: 11, color: "#fff",
        }}>{runtime}</span>

        {/* Play button — gold on hover */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, zIndex: 2,
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none",
        }}>
          <div style={{
            width: hover ? 96 : 80, height: hover ? 96 : 80,
            background: hover ? "var(--accent)" : "rgba(0,0,0,.6)",
            border: hover ? "0" : "1px solid #fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: `skewX(-12deg) ${hover ? "scale(1.05)" : "scale(1)"}`,
            transition: "all 400ms cubic-bezier(.4,0,.2,1)",
            boxShadow: hover ? "0 12px 40px -8px rgba(206,166,77,.6)" : "none",
          }}>
            <svg width="22" height="26" viewBox="0 0 22 26" fill="none"
                 style={{ transform: "skewX(12deg) translateX(2px)" }}>
              <path d="M0 0L22 13L0 26V0Z" fill={hover ? "#000" : "#fff"} />
            </svg>
          </div>
        </div>
      </div>

      {/* Caption row */}
      <div style={{
        marginTop: 24, display: "flex", justifyContent: "space-between",
        alignItems: "flex-start", gap: 16,
      }}>
        <div>
          <span style={{
            fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 11,
            letterSpacing: ".25em", textTransform: "uppercase",
            color: "var(--accent)",
          }}>{tag}</span>
          <h3 style={{
            fontFamily: "var(--font-display)", fontWeight: 900,
            fontSize: 28, lineHeight: 1.05, letterSpacing: "-.03em",
            textTransform: "uppercase", color: "#fff",
            margin: "12px 0 0",
          }}>{title}</h3>
        </div>
        <span style={{
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 11,
          letterSpacing: ".2em", textTransform: "uppercase",
          color: hover ? "var(--accent)" : "var(--fg-subtle)",
          display: "inline-flex", alignItems: "center", gap: 8,
          flexShrink: 0, paddingTop: 8,
          transition: "color 400ms cubic-bezier(.4,0,.2,1)",
        }}>
          Watch
          <span style={{ transform: hover ? "translateX(4px)" : "none", transition: "transform 400ms cubic-bezier(.4,0,.2,1)" }}>→</span>
        </span>
      </div>
    </div>
  );
}

window.Sections = Object.assign(window.Sections || {}, { AboutVideos });

})();
