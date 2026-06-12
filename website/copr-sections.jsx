/* global React */

/* ============ COPR Hero ============ */
function CoprHero() {
  return (
    <section className="rm-copr-hero" data-screen-label="01 COPR Hero">
      <video
        className="rm-copr-hero__video"
        src="copr-bg.mp4"
        autoPlay muted loop playsInline
        preload="auto"
      ></video>
      <div className="rm-copr-hero__bg"></div>
      <div className="rm-pillar-strip" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="rm-container rm-copr-hero__inner">
        <div className="rm-copr-hero__layout">
          <div>
            <div className="rm-copr-hero__brand">
              <span className="rm-copr-hero__brand-tag">C</span>
              <span className="rm-copr-hero__brand-txt">Communication · Outreach · Public Relations</span>
            </div>
            <h1 className="rm-copr-hero__title">
              COPR<br />
              <span className="rm-copr-hero__title-accent">Nexus.</span>
            </h1>
            <p className="rm-copr-hero__tagline">From Transactional to Transformational.</p>
            <p className="rm-copr-hero__sub">
              COPR Nexus is Robotmea's engine for taking the work of the Institute — schools, diplomas, curriculum, research — and turning it into voice, visibility, and durable relationships with the public, the press, the ministries, and the partners who scale us.
            </p>
            <div className="rm-copr-hero__ctas">
              <a href="#finder" className="rm-btn rm-btn--primary rm-btn--lg">
                Build Your Solution<span className="rm-btn__arrow">→</span>
              </a>
              <a href="#nexus" className="rm-btn rm-btn--ghost-light rm-btn--lg">
                Explore the Nexus
              </a>
            </div>
          </div>
          <div className="rm-copr-hero__logo">
            <img src="../assets/copr-logo.png" alt="COPR Nexus" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Nexus Constellation (9 formulas around the globe) ============ */
function CoprNexus() {
  // 8 chips around the globe (positions in CSS percent within the stage),
  // 9th formula renders as the featured bar below.
  const chips = [
    { num: "01", a: "Hardwork + Exposure",                          r: "Excellence",  c: "var(--rm-orange)", top: "6%",   left: "5%"  },
    { num: "02", a: "Unity + Faith",                                r: "Discipline",  c: "var(--rm-blue)",   top: "0%",   left: "58%" },
    { num: "03", a: "Communication + Creativity",                   r: "Innovation",  c: "var(--rm-green)",  top: "32%",  left: "-2%" },
    { num: "04", a: "Heterogeneous Connectivity + Local Understanding", r: "Real Change", c: "var(--rm-red)", top: "26%",  left: "68%" },
    { num: "05", a: "Market Research + Business Intelligence",      r: "Success",     c: "var(--rm-orange)", top: "60%",  left: "-2%" },
    { num: "06", a: "Transparency + Leadership",                    r: "Vision",      c: "var(--rm-blue)",   top: "58%",  left: "70%" },
    { num: "07", a: "Strategic Thinking + Skills",                  r: "Impact",      c: "var(--rm-green)",  top: "85%",  left: "8%"  },
    { num: "08", a: "Passion + Pragmatic Approach",                 r: "Value Creation", c: "var(--rm-red)", top: "85%",  left: "64%" },
  ];

  /* Clean SVG globe — teal/blue gradient sphere with meridians, parallels, and a continent silhouette */
  const Globe = (
    <svg className="rm-nexus__globe-svg" viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <radialGradient id="globeFill" cx="35%" cy="32%" r="75%">
          <stop offset="0%"   stopColor="#7ed3e1"/>
          <stop offset="35%"  stopColor="#2f9bb6"/>
          <stop offset="72%"  stopColor="#176b85"/>
          <stop offset="100%" stopColor="#0b3849"/>
        </radialGradient>
        <radialGradient id="globeShine" cx="30%" cy="24%" r="36%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity=".55"/>
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {/* sphere */}
      <circle cx="100" cy="100" r="92" fill="url(#globeFill)" stroke="#0e1419" strokeWidth="3"/>
      {/* meridians (vertical great circles) */}
      <g fill="none" stroke="#0e1419" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="100" cy="100" rx="92" ry="92"/>
        <ellipse cx="100" cy="100" rx="60" ry="92"/>
        <ellipse cx="100" cy="100" rx="28" ry="92"/>
      </g>
      {/* parallels (horizontal) */}
      <g fill="none" stroke="#0e1419" strokeWidth="2" strokeLinecap="round" opacity=".85">
        <ellipse cx="100" cy="100" rx="92" ry="60"/>
        <ellipse cx="100" cy="100" rx="92" ry="28"/>
      </g>
      {/* abstract continents */}
      <g fill="#1a6d85" opacity=".62">
        <path d="M70 60 Q85 50 100 60 Q120 64 130 80 Q124 96 108 96 Q90 96 78 88 Q66 80 70 60 Z"/>
        <path d="M124 110 Q140 110 150 124 Q150 140 132 142 Q116 144 116 128 Q116 116 124 110 Z"/>
        <path d="M62 130 Q80 124 88 140 Q86 154 70 154 Q56 152 58 140 Q56 134 62 130 Z"/>
      </g>
      {/* highlight */}
      <circle cx="100" cy="100" r="92" fill="url(#globeShine)"/>
    </svg>
  );

  /* Orange orbit ring (tilted) */
  const Orbit = (
    <svg className="rm-nexus__orbit-svg" viewBox="0 0 600 250" aria-hidden="true">
      <defs>
        <linearGradient id="orbitG" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"  stopColor="#ff870b" stopOpacity=".85"/>
          <stop offset="55%" stopColor="#ff870b"/>
          <stop offset="100%" stopColor="#ff870b" stopOpacity=".95"/>
        </linearGradient>
      </defs>
      <g transform="rotate(-12 300 125)">
        <ellipse cx="300" cy="125" rx="285" ry="95"
                 fill="none" stroke="url(#orbitG)" strokeWidth="6" strokeLinecap="round"/>
        {/* arrow head */}
        <path d="M580 130 L600 124 L580 116 Z" fill="#ff870b"/>
      </g>
    </svg>
  );

  return (
    <section id="nexus" className="rm-nexus" data-screen-label="02 Nexus Constellation">
      <div className="rm-container">
        <RM_Divider
          eyebrow="How We Think"
          heading="Nine formulas that govern how we work."
          lead="The COPR Nexus operating system — nine equations we apply to every conversation, every campaign, every partnership."
        />
        <div className="rm-nexus__stage">
          {Globe}
          {Orbit}
          {chips.map(ch => (
            <div key={ch.num}
                 className="rm-nexus__chip"
                 style={{ top: ch.top, left: ch.left, "--accent": ch.c }}>
              <span className="rm-nexus__chip-num">Formula {ch.num}</span>
              <span className="rm-nexus__chip-eq">{ch.a} = <strong>{ch.r}</strong></span>
            </div>
          ))}
        </div>

        <div className="rm-nexus__featured">
          <div className="rm-nexus__featured-badge">
            <span className="rm-nexus__featured-badge-num">09</span>
          </div>
          <div className="rm-nexus__featured-body">
            <div className="rm-nexus__featured-label">The Master Equation</div>
            <div className="rm-nexus__featured-eq">
              COPR Nexus =
              <span className="rm-nexus__featured-result">Transactional to Transformational</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Capabilities grid ============ */
function CoprCapabilities() {
  const items = [
    { c: "var(--rm-blue)", t: "Strategic Communications",
      b: "Narrative architecture, message houses, executive talking points.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 12l4 4 14-14"/><path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"/></svg> },
    { c: "var(--rm-orange)", t: "Public Relations & Media",
      b: "Relationships with national and regional press; embargo and exclusive programmes.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 11l18-5v12L3 13"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg> },
    { c: "var(--rm-green)", t: "Government & Stakeholder Outreach",
      b: "Federal, Provincial and Ministry liaison.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg> },
    { c: "var(--rm-red)", t: "Brand Management",
      b: "Visual standards, tone of voice, brand-guardian function across all Robotmea entities and ETM schools.",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18M3 12h18"/></svg> },
    { c: "var(--rm-blue)", t: "Digital & Social",
      b: "Site, social channels, newsletter, paid distribution.",
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M7 21h10M12 17v4"/></svg> },
    { c: "var(--rm-orange)", t: "Market Research & BI",
      b: "Pakistani and regional EdTech market scans, competitor mapping.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 21V8M9 21V12M15 21V4M21 21V14"/></svg> },
    { c: "var(--rm-green)", t: "Partner & Investor Relations",
      b: "ETM franchise outreach, briefing decks, due-diligence support.",
      icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { c: "var(--rm-red)", t: "Event Production",
      b: "Diploma convocations, ETM inaugurations, press conferences, exhibitions.",
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> },
  ];
  return (
    <section className="rm-cops-cap" data-screen-label="04 Capabilities">
      <div className="rm-container">
        <RM_Divider
          eyebrow="What We Do"
          heading="Capabilities."
          lead="Eight COPR Nexus practice areas that wrap around every Robotmea conversation, every campaign, and every partnership."
        />
        <div className="rm-cops-cap__grid">
          {items.map(it => (
            <div key={it.t} className="rm-cap-tile" style={{ "--accent": it.c }}>
              <div className="rm-cap-tile__icon">{it.icon}</div>
              <h3 className="rm-cap-tile__title">{it.t}</h3>
              <p className="rm-cap-tile__body">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { CoprHero, CoprNexus, CoprCapabilities });
