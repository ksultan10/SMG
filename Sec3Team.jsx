(() => {
/* global React, Bits */
const { useEffect, useRef } = React;
const { Eyebrow } = window.Bits;

/* ============================================================
   ABOUT — SECTION 3 — TEAM SHOWCASE
   Ported from the SMG Elementor v3 snippet, reskinned dark.
   Preserves: 3-column asymmetric photo grid, hover-linked sidebar,
   grayscale → color treatment, CEO pinning, ?sm-edit=1 editor mode.
   ============================================================ */

const TEAM_MEMBERS = [
  { id: "ks", name: "Khurram Sultan", role: "President / CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=480&h=480&fit=crop&crop=faces", linkedin: "#", ceo: true },
  { id: "nicole", name: "Nicole", role: "Office Admin / Project Coordinator", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=480&h=480&fit=crop&crop=faces", linkedin: "#" },
  { id: "dustin", name: "Dustin", role: "Maintenance & Restoration Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=480&h=480&fit=crop&crop=faces", linkedin: "#" },
  { id: "max", name: "Max", role: "Drywall", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=480&h=480&fit=crop&crop=faces", linkedin: "#" },
  { id: "owen", name: "Owen", role: "Electrical", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=480&h=480&fit=crop&crop=faces", linkedin: "#" },
  { id: "tim", name: "Tim", role: "HVAC", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&h=480&fit=crop&crop=faces", linkedin: "#" },
];

function AboutTeam() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const ICONS = {
      linkedin: '<svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.3C24.09 107.7 0 83.5 0 53.8 0 24.09 24.09 0 53.84 0s53.84 24.09 53.84 53.8c0 29.7-24.09 53.9-53.84 53.9zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89V190h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>',
      twitter:  '<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231z"/></svg>',
      instagram:'<svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8z"/></svg>',
    };
    const SOCIAL_KEYS = ["linkedin", "twitter", "instagram"];
    const sizeByCol = { 1: "s1", 2: "s2", 3: "s3" };
    const spread = [1, 3, 2];
    const editMode = /[?&]sm-edit=1\b/.test(location.search);

    const grid = root.querySelector("[data-grid]");
    const cols = {
      1: root.querySelector('[data-col="1"]'),
      2: root.querySelector('[data-col="2"]'),
      3: root.querySelector('[data-col="3"]'),
    };
    const listEl = root.querySelector("[data-list]");

    function setActive(id) {
      if (id) root.classList.add("is-hovering");
      else root.classList.remove("is-hovering");
      root.querySelectorAll(".sm-ts-card, .sm-ts-row").forEach((el) => {
        el.classList.toggle("is-active", el.getAttribute("data-id") === id);
      });
    }

    function render() {
      cols[1].innerHTML = "";
      cols[2].innerHTML = "";
      cols[3].innerHTML = "";
      listEl.innerHTML = "";

      const ceo = TEAM_MEMBERS.find((m) => m.ceo);
      const rest = TEAM_MEMBERS.filter((m) => !m.ceo);
      const placements = [];
      if (ceo) placements.push({ m: ceo, col: 2 });
      rest.forEach((m, i) => placements.push({ m, col: spread[i % spread.length] }));

      placements.forEach(({ m, col }) => {
        const card = document.createElement("div");
        card.className = "sm-ts-card sm-ts-card--" + sizeByCol[col];
        card.setAttribute("data-id", m.id);
        const img = document.createElement("img");
        img.src = m.image; img.alt = m.name; img.loading = "lazy";
        card.appendChild(img);
        cols[col].appendChild(card);
      });

      // Sidebar — CEO first, rest in source order
      const sidebar = TEAM_MEMBERS.slice().sort((a, b) => (a.ceo ? -1 : b.ceo ? 1 : 0));
      sidebar.forEach((m) => {
        const row = document.createElement("div");
        row.className = "sm-ts-row";
        row.setAttribute("data-id", m.id);

        const head = document.createElement("div");
        head.className = "sm-ts-row-head";

        const dot = document.createElement("span");
        dot.className = "sm-ts-dot";

        const name = document.createElement("span");
        name.className = "sm-ts-name";
        name.textContent = m.name;
        if (m.ceo) {
          const tag = document.createElement("span");
          tag.className = "sm-ts-ceo-tag";
          tag.textContent = "CEO";
          head.appendChild(dot);
          head.appendChild(name);
          head.appendChild(tag);
        } else {
          head.appendChild(dot);
          head.appendChild(name);
        }

        const social = document.createElement("div");
        social.className = "sm-ts-social";
        SOCIAL_KEYS.forEach((k) => {
          if (m[k]) {
            const a = document.createElement("a");
            a.href = m[k]; a.target = "_blank"; a.rel = "noopener noreferrer";
            a.title = k;
            a.innerHTML = ICONS[k];
            social.appendChild(a);
          }
        });
        head.appendChild(social);
        row.appendChild(head);

        const role = document.createElement("p");
        role.className = "sm-ts-role";
        role.textContent = m.role;
        row.appendChild(role);

        listEl.appendChild(row);
      });

      // Hover linking
      root.querySelectorAll("[data-id]").forEach((el) => {
        const id = el.getAttribute("data-id");
        el.addEventListener("mouseenter", () => setActive(id));
        el.addEventListener("mouseleave", () => setActive(null));
        el.addEventListener("touchstart", () => setActive(id), { passive: true });
      });

      if (editMode) {
        // Lightweight edit-mode badge — full editor lives in the Elementor snippet
        const bar = document.createElement("div");
        bar.className = "sm-edit-toolbar";
        bar.textContent = "Edit mode preview — full editor in Elementor snippet";
        root.appendChild(bar);
      }
    }

    render();
  }, []);

  return (
    <section data-section-id="about-team" data-screen-label="03 Team" style={{
      padding: "var(--section-pad-y) var(--gutter)",
      borderTop: "1px solid var(--border)",
      background: "#000",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Eyebrow>The Team</Eyebrow>
        <h2 style={{
          fontFamily: "var(--font-display)", fontWeight: 900,
          fontSize: "clamp(40px, 6vw, 96px)",
          lineHeight: 1.02, letterSpacing: "-.05em",
          textTransform: "uppercase", color: "#fff",
          margin: "32px 0 80px", maxWidth: 1300,
        }}>
          The people<br/>
          behind the <span style={{ color: "var(--accent)" }}>build</span>.
        </h2>

        {/* Showcase root — SMG dark reskin of the v3 snippet */}
        <div className="sm-team-showcase" id="sm-team-showcase" ref={rootRef}>
          <div className="sm-ts-grid" data-grid>
            <div className="sm-ts-col sm-ts-col--1" data-col="1"></div>
            <div className="sm-ts-col sm-ts-col--2" data-col="2"></div>
            <div className="sm-ts-col sm-ts-col--3" data-col="3"></div>
          </div>
          <div className="sm-ts-list" data-list></div>
        </div>
      </div>

      <style>{`
        .sm-team-showcase {
          --sm-fg: #ffffff;
          --sm-fg-mute: rgba(255,255,255,.55);
          --sm-muted: var(--accent-soft);
          --sm-accent: var(--accent);
          color: var(--sm-fg);
          display: flex; flex-direction: column; align-items: flex-start;
          gap: 2.5rem; user-select: none;
          width: 100%; max-width: 1280px; margin: 0;
          padding: 0;
          font-family: var(--font-body);
          box-sizing: border-box;
        }
        @media (min-width: 768px) {
          .sm-team-showcase { flex-direction: row; gap: 4rem; }
        }
        @media (min-width: 1024px) {
          .sm-team-showcase { gap: 6rem; }
        }
        .sm-team-showcase *, .sm-team-showcase *::before, .sm-team-showcase *::after { box-sizing: border-box; }

        .sm-ts-grid {
          display: flex; gap: 12px; flex-shrink: 0;
          padding-bottom: 0;
        }
        @media (min-width: 768px) { .sm-ts-grid { gap: 16px; } }
        .sm-ts-col { display: flex; flex-direction: column; gap: 12px; }
        @media (min-width: 768px) { .sm-ts-col { gap: 16px; } }
        .sm-ts-col--2 { margin-top: 64px; }
        .sm-ts-col--3 { margin-top: 28px; }
        @media (min-width: 768px) {
          .sm-ts-col--2 { margin-top: 96px; }
          .sm-ts-col--3 { margin-top: 40px; }
        }

        .sm-ts-card {
          position: relative; overflow: hidden;
          border-radius: 2px;
          cursor: pointer; flex-shrink: 0;
          transition: opacity 400ms var(--ease-premium);
          opacity: 1;
          background: #0a0a0a;
        }
        .sm-ts-card img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: filter 600ms var(--ease-premium), transform 600ms var(--ease-premium);
          filter: grayscale(1) contrast(1.05) brightness(.72);
        }
        .sm-team-showcase.is-hovering .sm-ts-card:not(.is-active) { opacity: .35; }
        .sm-ts-card.is-active img { filter: grayscale(0) contrast(1) brightness(1); transform: scale(1.03); }
        .sm-ts-card.is-active { box-shadow: 0 0 0 1px var(--sm-accent); }

        .sm-ts-card--s1 { width: 160px; height: 200px; }
        .sm-ts-card--s2 { width: 200px; height: 250px; }
        .sm-ts-card--s3 { width: 175px; height: 220px; }
        @media (min-width: 768px) {
          .sm-ts-card--s1 { width: 200px; height: 250px; }
          .sm-ts-card--s2 { width: 240px; height: 300px; }
          .sm-ts-card--s3 { width: 215px; height: 270px; }
        }

        .sm-ts-list {
          display: flex; flex-direction: column; gap: 28px;
          padding-top: 32px; flex: 1; width: 100%;
        }
        @media (min-width: 768px) { .sm-ts-list { padding-top: 16px; gap: 24px; } }

        .sm-ts-row {
          position: relative; cursor: pointer;
          transition: opacity 400ms var(--ease-premium);
          opacity: 1;
          padding-left: 0;
        }
        .sm-team-showcase.is-hovering .sm-ts-row:not(.is-active) { opacity: .35; }

        .sm-ts-row-head {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
        }
        .sm-ts-dot {
          width: 16px; height: 2px; border-radius: 0;
          flex-shrink: 0;
          background: rgba(255,255,255,.3);
          transition: all 400ms var(--ease-premium);
        }
        .sm-ts-row.is-active .sm-ts-dot {
          background: var(--sm-accent);
          width: 32px;
        }

        .sm-ts-name {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 900;
          line-height: 1; letter-spacing: -.03em;
          text-transform: uppercase;
          color: rgba(255,255,255,.7);
          transition: color 400ms var(--ease-premium);
        }
        @media (min-width: 768px) { .sm-ts-name { font-size: 26px; } }
        .sm-ts-row.is-active .sm-ts-name { color: #fff; }

        .sm-ts-ceo-tag {
          font-family: var(--font-body);
          font-size: 9px; font-weight: 700;
          letter-spacing: .25em; text-transform: uppercase;
          color: var(--sm-accent);
          padding: 4px 8px;
          border: 1px solid var(--sm-accent);
          line-height: 1;
        }

        .sm-ts-social {
          display: flex; align-items: center; gap: 6px;
          margin-left: 4px;
          opacity: 0; transform: translateX(-8px); pointer-events: none;
          transition: all 300ms var(--ease-premium);
        }
        .sm-ts-row.is-active .sm-ts-social {
          opacity: 1; transform: translateX(0); pointer-events: auto;
        }
        .sm-ts-social a {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 6px;
          color: var(--sm-muted); text-decoration: none;
          transition: all 200ms var(--ease-premium);
        }
        .sm-ts-social a:hover {
          color: var(--sm-accent);
          transform: scale(1.15);
        }
        .sm-ts-social svg { width: 12px; height: 12px; display: block; fill: currentColor; }

        .sm-ts-role {
          margin: 12px 0 0;
          padding-left: 30px;
          font-size: 10px; font-weight: 500;
          text-transform: uppercase; letter-spacing: .25em;
          color: var(--sm-muted);
        }
        @media (min-width: 768px) { .sm-ts-role { font-size: 11px; padding-left: 46px; } }

        /* Edit-mode preview badge */
        .sm-edit-toolbar {
          position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%);
          background: var(--accent); color: #000;
          padding: 10px 14px;
          font-family: var(--font-body); font-size: 11px;
          letter-spacing: .2em; text-transform: uppercase; font-weight: 700;
          z-index: 99999;
        }
      `}</style>
    </section>
  );
}

window.Sections = Object.assign(window.Sections || {}, { AboutTeam });

})();
