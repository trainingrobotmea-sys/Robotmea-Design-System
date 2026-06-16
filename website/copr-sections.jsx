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
              <span className="rm-copr-hero__brand-txt">Communication, Outreach and Public Relation Nexus</span>
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

/* ============ Nexus Formulas — clean branded grid ============ */
function CoprNexus() {
  const formulas = [
    { l: "Hardwork + Exposure",                              r: "Excellence",     color: "var(--rm-orange)" },
    { l: "Unity + Faith",                                    r: "Discipline",     color: "var(--rm-blue)"   },
    { l: "Communication + Creativity",                       r: "Innovation",     color: "var(--rm-green)"  },
    { l: "Heterogeneous Connectivity + Local Understanding", r: "Real Change",    color: "var(--rm-red)"    },
    { l: "Market Research + Business Intelligence",          r: "Success",        color: "var(--rm-orange)" },
    { l: "Transparency + Leadership",                        r: "Vision",         color: "var(--rm-blue)"   },
    { l: "Strategic Thinking + Skills",                      r: "Impact",         color: "var(--rm-green)"  },
    { l: "Passion + Pragmatic Approach",                     r: "Value Creation", color: "var(--rm-red)"    },
  ];
  return (
    <section id="nexus" className="rm-section rm-copr-band" data-screen-label="02 Nexus Formulas">
      <div className="rm-container">
        <RM_Divider
          eyebrow="How We Think"
          heading="Nine formulas that govern how we work."
          lead="The COPR Nexus operating system — nine equations we apply to every conversation, every campaign, every partnership."
        />
        <div className="rm-copr-grid">
          {formulas.map((f, i) => (
            <div key={i} className="rm-formula-card" style={{ "--accent": f.color }}>
              <div className="rm-formula-card__num">{String(i + 1).padStart(2, "0")}</div>
              <p className="rm-formula-card__eq">
                {f.l} <span style={{ color: "var(--fg-muted)" }}>=</span>
                <span className="rm-formula-card__result">{f.r}</span>
              </p>
            </div>
          ))}
          <div className="rm-formula-card rm-formula-card--featured">
            <div className="rm-formula-card__num">09</div>
            <p className="rm-formula-card__eq">
              COPR Nexus <span style={{ color: "rgba(255,255,255,.4)" }}>=</span>
              <span className="rm-formula-card__result">&nbsp;From Transactional to Transformational</span>
            </p>
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
      b: "Middle East, Africa and Pakistan EdTech market scans, competitor mapping.",
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

/* ============ Press Release — coming soon ============ */
function CoprPressRelease() {
  return (
    <div id="press-release" data-screen-label="05 Press Release">
      <RM_PageStub
        eyebrow="Press Release"
        title="Press releases are coming soon."
        body="Official statements, announcements and media kits from COPR Nexus will be published here. For media inquiries in the meantime, reach out to our team directly."
        primaryCta="Contact Us"
        primaryHref="contact.html"
      />
    </div>
  );
}

/* ============ COPR Gallery — coming soon ============ */
function CoprGallery() {
  return (
    <div id="copr-gallery" data-screen-label="06 COPR Gallery" style={{ borderTop: "1px solid var(--border-1)" }}>
      <RM_PageStub
        eyebrow="COPR Gallery"
        title="The gallery is coming soon."
        body="Photos and highlights from conferences, summits, EXPOs and award ceremonies across the COPR Nexus calendar will be published here."
        primaryCta="See Flagship Events"
        primaryHref="#flagship-events"
      />
    </div>
  );
}

/* ============ Flagship Events ============ */
function CoprFlagshipEvents() {
  const events = [
    { c: "var(--rm-blue)", t: "Conferences",
      b: "International gatherings convening educators, policymakers and industry leaders around emerging technologies and STEAM education.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg> },
    { c: "var(--rm-orange)", t: "School Leadership Summits",
      b: "Strategy sessions for principals and school leaders adopting Industry 4.0 and 5.0 ready curricula.",
      icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { c: "var(--rm-green)", t: "National & International EXPOs",
      b: "Large-scale exhibitions showcasing student projects, robotics builds and emerging technologies to the public.",
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> },
    { c: "var(--rm-red)", t: "Global STEAM Awards",
      b: "An annual recognition programme celebrating outstanding students, teachers and schools across the network.",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M9 14.5L7 22l5-3 5 3-2-7.5"/></svg> },
    { c: "var(--rm-blue)", t: "International Teachers Training Program",
      b: "Professional development that certifies educators on South Korean-accredited emerging technologies pedagogy.",
      icon: <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg> },
    { c: "var(--rm-green)", t: "Young Empowerment Program",
      b: "A leadership and entrepreneurship track that equips students to apply emerging technologies to real-world challenges.",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg> },
  ];
  return (
    <section id="flagship-events" className="rm-cops-cap" data-screen-label="07 Flagship Events">
      <div className="rm-container">
        <RM_Divider
          eyebrow="What We Run"
          heading="Flagship events."
          lead="The six event formats COPR Nexus runs across the Middle East, Africa and Pakistan calendar — from leadership summits to student award ceremonies."
        />
        <div className="rm-cops-cap__grid">
          {events.map(it => (
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

Object.assign(window, { CoprHero, CoprNexus, CoprCapabilities, CoprPressRelease, CoprGallery, CoprFlagshipEvents });
