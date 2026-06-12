/* global React */

/* ============ Network Hero ============ */
function NetHero() {
  return (
    <section className="rm-net-hero" data-screen-label="01 Network Hero">
      <div className="rm-pillar-strip" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="rm-container rm-net-hero__inner">
        <div className="rm-eyebrow rm-eyebrow--white">Our Network</div>
        <h1 className="rm-net-hero__title">
          The Schools, Institutions<br />
          <span className="rm-net-hero__title-accent">& Partners On The Ground.</span>
        </h1>
        <p className="rm-net-hero__lead">
          Robotmea is delivered through a network of institutions across Pakistan and beyond — universities, school chains, residential schools, community foundations, and learning centres. Each operates Robotmea programmes inside its own brand, on its own ground, to a shared global standard.
        </p>
      </div>
    </section>
  );
}

/* ============ Stats strip ============ */
function NetStats() {
  const stats = [
    { c: "var(--rm-orange)", n: "250+", l: "Discovery & Innovation Hubs" },
    { c: "var(--rm-blue)",   n: "120+", l: "Institutions" },
    { c: "var(--rm-green)",  n: "All",  l: "Levels — K-12 To University" },
    { c: "var(--rm-red)",    n: "1",    l: "Shared Robotron Standard" },
  ];
  return (
    <section className="rm-net-stats">
      <div className="rm-container">
        <div className="rm-net-stats__grid">
          {stats.map(s => (
            <div key={s.l} className="rm-net-stat" style={{ "--accent": s.c }}>
              <div className="rm-net-stat__n">{s.n}</div>
              <div className="rm-net-stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Tier 2 — Long-tail school network grid ============ */
function NetGrid() {
  // Curated, uniform partner logos ("Logos for our partners section" set)
  const slugs = [
    "01","02","03","04","05","07","08","09","10","11","12","13","14","15","16","17","18",
    "20","21","22","23","24","26","27","28","29","30","31","32","33","34","35",
    "37","38","39","40","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58"
  ];
  // Additional partner logos from the full logo library
  const extras = [
    "extra-001.png","extra-002.png","extra-003.png","extra-004.jfif","extra-005.png",
    "extra-006.png","extra-007.png","extra-008.png","extra-009.png","extra-010.png",
    "extra-011.png","extra-012.png","extra-013.png","extra-014.png","extra-015.png",
    "extra-016.jpg","extra-017.png","extra-018.png","extra-019.png","extra-020.jpg",
    "extra-021.png","extra-022.png","extra-023.png","extra-024.png","extra-025.png",
    "extra-026.png","extra-027.png","extra-028.png","extra-029.png","extra-030.png",
    "extra-031.png","extra-032.png","extra-033.png","extra-034.png","extra-035.png",
    "extra-036.png","extra-037.png","extra-038.png","extra-039.png","extra-040.png",
    "extra-041.png","extra-042.png","extra-043.png","extra-044.png","extra-045.png",
    "extra-046.png","extra-047.png","extra-048.png","extra-049.png","extra-050.png",
    "extra-051.png","extra-052.png","extra-053.jpeg","extra-054.jpeg","extra-055.jpeg",
    "extra-056.jpeg","extra-057.jpeg","extra-058.jpeg"
  ];
  const total = slugs.length + extras.length;
  return (
    <section className="rm-net-tier rm-net-tier--alt" data-screen-label="03 Network Grid">
      <div className="rm-container">
        <div className="rm-net-tier__head">
          <RM_Divider
            align="left"
            eyebrow="Extended Network"
            heading={<>Schools, centres &<br />learning partners.</>}
          />
          <div>
            <p className="rm-net-tier__lead">
              The wider Robotmea network — schools, technical centres, NGOs, and learning institutions across Pakistan implementing our STEAM, Robotics, AI, and emerging-technologies programmes.
            </p>
            <span className="rm-net-tier__count" style={{ "--accent": "var(--rm-blue)" }}>
              {total}+ Institutions
            </span>
          </div>
        </div>
        <div className="rm-net-grid">
          {slugs.map(s => (
            <div key={`p-${s}`} className="rm-net-grid__cell">
              <img src={`../assets/network/partner-${s}.png`} alt={`Network partner ${s}`} loading="lazy" />
            </div>
          ))}
          {extras.map(f => (
            <div key={f} className="rm-net-grid__cell">
              <img src={`../assets/network/${f}`} alt="Network partner" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Final CTA ============ */
function NetCTA() {
  return (
    <section className="rm-net-cta" data-screen-label="04 Network CTA">
      <div className="rm-container rm-net-cta__inner">
        <div className="rm-eyebrow rm-eyebrow--center rm-eyebrow--white" style={{ color: "rgba(255,255,255,.92)" }}>
          Join The Network
        </div>
        <h2 className="rm-net-cta__h">
          Add your institution<br />to the Robotmea network.
        </h2>
        <p className="rm-net-cta__sub">
          Whether you run a single campus, a school chain, a university, or a foundation — Robotmea partners with institutions of every scale. Start with a 90-minute feasibility session.
        </p>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="contact.html" className="rm-btn rm-btn--primary rm-btn--lg">
            Talk To Us<span className="rm-btn__arrow">→</span>
          </a>
          <a href="institute.html#transform" className="rm-btn rm-btn--ghost-light rm-btn--lg">
            See The 6-Step Plan
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { NetHero, NetStats, NetGrid, NetCTA });
