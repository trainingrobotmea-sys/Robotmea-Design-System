/* global React */
/* Home page section components */

/* ============ Hero — with slider over fixed video background ============ */
const { useState, useEffect, useRef } = React;

function HomeHero() {
  const slides = [
    {
      key: "main",
      eyebrow: "Robotmea International",
      titleTop: "Transforming",
      titleAccent: "The Future Of Youth.",
      sub: <>Robotmea is an International EdTech authority with 04 R&amp;D Arms, 01 Institute, Emerging Technologies Centre, ETM Schools Network and Fleet Network of Discovery and Innovation hubs for <strong style={{ color: 'white' }}>Emerging Technologies (AI, Robotics, AR/VR, Simulation)</strong> and <strong style={{ color: 'white' }}>STEAM Education</strong> — accredited by <strong style={{ color: 'white' }}>Robotron, South Korea</strong>, in the Middle East, Africa and Pakistan region.</>,
      showCredentials: true,
      primary: { label: "Explore the Institute", href: "institute.html" },
      secondary: { label: "Join the ETM Movement", href: "etm.html" },
    },
    {
      key: "values",
      eyebrow: "For Us, Values Are Everything",
      titleTop: "Rooted In Faith,",
      titleAccent: "Defined By Integrity.",
      sub: <>Our values — deeply rooted in Islam — make us valuable.</>,
      chips: [
        "Faith in Almighty Allah", "Uncompromising Commitment to Integrity", "Leadership",
        "Optimism", "Perseverance", "Challenge Yourself", "Respect", "Trust",
        "Transparency", "Excellence in Quality",
      ],
      showCredentials: false,
      primary: { label: "About the Institute", href: "institute.html" },
      secondary: { label: "Get in Touch", href: "contact.html" },
    },
    {
      key: "global",
      eyebrow: "Global Presence",
      titleTop: "A Global Vision,",
      titleAccent: "A Global EdTech Leader.",
      sub: <>Our global presence, global stakeholders and global vision make us a global EdTech leader.</>,
      chips: ["South Korea", "China", "Taiwan", "Middle East", "Africa", "Pakistan"],
      showCredentials: false,
      primary: { label: "Our Network", href: "network.html" },
      secondary: { label: "International Partners", href: "partners.html" },
    },
    {
      key: "institute",
      eyebrow: <>The Institute for EdTech Research, Development and Growth – <strong style={{ color: 'white' }}>IERDG</strong></>,
      titleTop: "Where Excellence",
      titleAccent: "Matters.",
      sub: <>Five programs. One mission. <strong style={{ color: 'white' }}>Robotron-accredited.</strong> A global Institute for EdTech Research, Development &amp; Growth — K-12 Programs, Educational Transformational Movement, Faculty Development Cell, Robotmea Emerging Technologies Centre, and International Diploma Programs.</>,
      showCredentials: false,
      primary: { label: "Enter the Institute", href: "institute.html" },
      secondary: { label: "See the 6-Step Plan", href: "institute.html#transform" },
    },
    {
      key: "etm",
      eyebrow: <>Educational Transformational Movement – <strong style={{ color: 'white' }}>A Franchise Call</strong></>,
      titleTop: "Establish Pakistan's",
      titleAccent: "Next ETM School.",
      sub: <>ETM is a franchise call for investors to establish and open <strong style={{ color: 'white' }}>South-Korean-accredited schools</strong> in the Islamic Republic of Pakistan. Investors keep their land, capital, and brand; we bring the operating standard — developed by IERDG, <strong style={{ color: 'white' }}>Robotron Certified · ETM Powered · South Korean Accredited.</strong></>,
      showCredentials: false,
      primary: { label: "Investor Pack", href: "etm.html" },
      secondary: { label: "Book a Discovery Call", href: "contact.html" },
    },
    {
      key: "future",
      eyebrow: "Robotmea — Preparing Generations for the Future",
      titleTop: "Preparing Generations",
      titleAccent: "For The Future.",
      sub: <>Artificial Intelligence, Robotics and Emerging Technologies are reshaping every economy on earth. The institutions that prepare their youth today will lead the world of 2050.</>,
      stats: [
        { n: "65%", l: "of children entering primary school today will work in job types that don't yet exist — World Economic Forum" },
        { n: "$15.7T", l: "potential contribution of AI to the global economy by 2030 — PwC" },
        { n: "170M", l: "new jobs to be created worldwide by 2030 as technology reshapes the labour market — WEF Future of Jobs Report 2025" },
      ],
      showCredentials: false,
      primary: { label: "Explore the Institute", href: "institute.html" },
      secondary: { label: "Talk to Us", href: "contact.html" },
    },
  ];

  const [idx, setIdx] = useState(0);
  const [tick, setTick] = useState(0); // forces progress-bar restart on dot change
  const hoverRef = useRef(false);

  // Auto-advance every 7s unless user is hovering the hero
  useEffect(() => {
    const t = setInterval(() => {
      if (!hoverRef.current) {
        setIdx(i => (i + 1) % slides.length);
        setTick(x => x + 1);
      }
    }, 7000);
    return () => clearInterval(t);
  }, [slides.length]);

  const go = (n) => {
    setIdx((n + slides.length) % slides.length);
    setTick(x => x + 1);
  };

  return (
    <section className="rm-hero" data-screen-label="01 Hero"
             onMouseEnter={() => { hoverRef.current = true; }}
             onMouseLeave={() => { hoverRef.current = false; }}>
      <video
        className="rm-hero__video"
        src="hero-bg.mp4"
        autoPlay muted loop playsInline
        preload="auto"
      ></video>
      <div className="rm-hero__bg"></div>
      <div className="rm-pillar-strip rm-hero__pillar-strip"><span></span><span></span><span></span><span></span></div>

      <div className="rm-container rm-hero__inner">
        <div className="rm-hero__slider">
          {slides.map((s, i) => (
            <div key={s.key} className={"rm-hero__slide " + (i === idx ? "is-active" : "")} aria-hidden={i !== idx}>
              {s.tag && (
                <div className="rm-hero__slide-accent">{s.tag}</div>
              )}
              <div className="rm-eyebrow rm-eyebrow--white rm-hero__eyebrow" style={{ marginBottom: 22 }}>
                {s.eyebrow}
              </div>
              <h1 className="rm-h1 rm-h1--on-dark rm-hero__title">
                {s.titleTop}<br />
                <span className="rm-hero__title-accent">{s.titleAccent}</span>
              </h1>
              <p className="rm-hero__sub">{s.sub}</p>
              {s.chips && (
                <div className="rm-hero__chips">
                  {s.chips.map((c, ci) => (
                    <span key={ci} className="rm-hero__chip">{c}</span>
                  ))}
                </div>
              )}
              {s.stats && (
                <div className="rm-hero__stats">
                  {s.stats.map((st, si) => (
                    <div key={si} className="rm-hero__stat">
                      <strong>{st.n}</strong>
                      <span>{st.l}</span>
                    </div>
                  ))}
                </div>
              )}
              {s.showCredentials && (
                <div style={{ margin: "30px 0 10px" }}>
                  <RM_Credentials variant="ghost" layout="row" />
                </div>
              )}
              <div className="rm-hero__ctas">
                <a href={s.primary.href} className="rm-btn rm-btn--primary rm-btn--lg">
                  {s.primary.label}<span className="rm-btn__arrow">→</span>
                </a>
                <a href={s.secondary.href} className="rm-btn rm-btn--ghost-light rm-btn--lg">
                  {s.secondary.label}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="rm-hero__nav">
          <div className="rm-hero__nav-inner">
            <div className="rm-hero__dots" key={tick}>
              {slides.map((s, i) => (
                <button key={s.key}
                        className={"rm-hero__dot " + (i === idx ? "is-active" : "")}
                        onClick={() => go(i)}
                        aria-label={"Slide " + (i + 1)}></button>
              ))}
            </div>
            <div className="rm-hero__counter">
              <span className="rm-hero__counter-current">{String(idx + 1).padStart(2, "0")}</span>
              <span> / {String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
          <div className="rm-hero__arrows">
            <button className="rm-hero__arrow" onClick={() => go(idx - 1)} aria-label="Previous">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button className="rm-hero__arrow" onClick={() => go(idx + 1)} aria-label="Next">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Trust strip — international partners (Shandong removed; larger logos) ============ */
function HomeTrust() {
  const partners = [
    { src: "../assets/partners/robotron-trimmed.png",  alt: "Robotron",  role: "Accreditation & EdTech Research",              c: "var(--rm-orange)" },
    { src: "../assets/partners/minirobot-trimmed.png", alt: "MiniRobot", role: "Industrial Robotics",                          c: "var(--rm-blue)" },
    { src: "../assets/partners/neopia-trimmed.png",    alt: "Neopia",    role: "AI, Machine Learning, IoT & Integrated Systems", c: "var(--rm-green)" },
    { src: "../assets/partners/sinion-trimmed.png",    alt: "Sinion",    role: "R&D · China",         c: "var(--rm-red)",    imgScale: 1.45 },
    { src: "../assets/partners/tdme-trimmed.png",      alt: "TDME",      role: "Industry Partner",     c: "var(--rm-orange)" },
    { src: "../assets/partners/esim-gen-trimmed.png",  alt: "esim·gen",  role: "Connectivity",        c: "var(--rm-blue)" },
  ];
  const metrics = [
    { n: "30+", l: "Countries" },
    { n: "06",  l: "Global Partners" },
    { n: "03",  l: "Continents" },
  ];
  return (
    <section className="rm-trust">
      <div className="rm-container rm-trust__inner">
        <div className="rm-trust__aside">
          <span className="rm-trust__eyebrow">The Alliance</span>
          <h2 className="rm-trust__title">
            IERDG is powered by <em>WORLD&rsquo;s Leading<br />Emerging Technologies Partners.</em>
          </h2>
          <p className="rm-trust__sub">
            From international accreditation and emerging technologies platforms to dedicated R&amp;D labs and global connectivity. At IERDG we integrate emerging technologies with curriculum to redefine the classroom environment with the help of global partners who have created impact in their respective fields.
          </p>
          <div className="rm-trust__meta">
            {metrics.map(m => (
              <div key={m.l} className="rm-trust__meta-item">
                <strong>{m.n}</strong>
                <span>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rm-trust__logos">
          {partners.map((p, i) => (
            <div key={p.alt} className="rm-trust__cell" style={{ "--accent": p.c }} title={p.alt}>
              <span className="rm-trust__index">{String(i + 1).padStart(2, "0")}</span>
              <div className="rm-trust__logo-wrap">
                <img src={p.src} alt={p.alt} className="rm-trust__logo" style={p.imgScale ? { transform: `scale(${p.imgScale})` } : {}} />
              </div>
              <div className="rm-trust__cap">
                <span className="rm-trust__dot"></span>
                <span className="rm-trust__role">{p.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Who We Are — Korean legacy positioning ============ */
function HomeWhoWeAre() {
  return (
    <section className="rm-section rm-section--paper" data-screen-label="02 Who We Are">
      <div className="rm-container">
        <div className="rm-two-col">
          <div className="rm-who-brand-panel">
            <div className="rm-who-brand-panel__top-bar">
              <span style={{ background: "var(--rm-blue)" }}></span>
              <span style={{ background: "var(--rm-orange)" }}></span>
              <span style={{ background: "var(--rm-blue)" }}></span>
              <span style={{ background: "var(--rm-orange)" }}></span>
            </div>
            <div className="rm-who-brand-panel__logo-wrap">
              <img src="../assets/ied-logo.png" alt="IERDG — Institute for EdTech Research, Development & Growth" className="rm-who-brand-panel__logo" />
            </div>
            <div className="rm-who-brand-panel__tagline">Where Excellence Matters.</div>
            <div className="rm-who-brand-panel__sub">Middle East · Africa · Pakistan</div>
            <div className="rm-who-brand-panel__creds">
              <div className="rm-who-brand-panel__cred"><span className="rm-who-brand-panel__cred-dot" style={{ background: "var(--rm-orange)" }}></span>A Global EdTech initiative of Robotmea</div>
              <div className="rm-who-brand-panel__cred"><span className="rm-who-brand-panel__cred-dot" style={{ background: "var(--rm-blue)" }}></span>Accredited by Robotron, South Korea</div>
              <div className="rm-who-brand-panel__cred"><span className="rm-who-brand-panel__cred-dot" style={{ background: "var(--rm-blue)" }}></span>Managed by Global EdTech Firms</div>
            </div>
          </div>
          <div>
            <RM_Divider
              align="left"
              eyebrow="Who We Are"
              heading="A global movement of technology entrepreneurs, reshaping the international educational landscape."
            />
            <p className="rm-lead" style={{ marginTop: 22 }}>
              At IERDG we build EdTech systems to redefine the global educational landscape. <strong>We are an Institute for EdTech Research, Development &amp; Growth (IERDG)</strong> with five blueprints to realign education for Industry 4.0 &amp; 5.0.
            </p>
            <p className="rm-body" style={{ marginTop: 18 }}>
              IERDG is one of the leading research and development centres actively working in the region to popularise EdTech industries — backed by <strong>six international partners</strong> with <strong>four global hubs</strong> in South Korea, China, the Middle East &amp; Pakistan.
            </p>
            <p className="rm-body" style={{ marginTop: 14 }}>
              Through the <strong>Institute (IERDG)</strong> and the <strong>Nexus (COPR Nexus)</strong>, we don't import devices; we transplant a complete educational operating system.
            </p>
            <a href="institute.html" className="rm-btn rm-btn--outline" style={{ marginTop: 28 }}>
              Read our story<span className="rm-btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Two pillar cards (IERDG + COPR Nexus) ============ */
function HomePillars() {
  // Icons rendered as inline SVG so they stay crisp + sized inside the box
  const InstituteIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 4l12 5-12 5L4 9l12-5z"/>
      <path d="M8 12v6c0 2 4 4 8 4s8-2 8-4v-6"/>
      <path d="M28 9v9"/>
    </svg>
  );
  const CoprIcon = (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="10"/>
      <path d="M6 16h20M16 6c3 3 4.5 6.5 4.5 10s-1.5 7-4.5 10c-3-3-4.5-6.5-4.5-10S13 9 16 6z"/>
    </svg>
  );
  return (
    <section className="rm-section rm-section--tight" data-screen-label="03 Pillars">
      <div className="rm-container">
        <RM_Divider eyebrow="What We Do" heading="Two engines. One mission." />
        <div className="rm-grid rm-grid--2" style={{ marginTop: 56, gap: 20 }}>
          <a href="institute.html" className="rm-pillar-card rm-pillar-card--institute">
            <div className="rm-pillar-card__icon">{InstituteIcon}</div>
            <div className="rm-pillar-card__sub">Institute for EdTech Research, Development and Growth</div>
            <h3 className="rm-pillar-card__title">IERDG</h3>
            <p className="rm-pillar-card__tagline">Where excellence matters.</p>
            <p className="rm-pillar-card__body">
              Five blueprints – One Promise – Transforming the Future of Youth: a STEAM Educational Framework for Emerging Technologies, Innovation and Entrepreneurship.
            </p>
            <span className="rm-pillar-card__cta">
              Enter the Institute
              <span className="rm-pillar-card__cta-arrow">→</span>
            </span>
            <div className="rm-pillar-card__deco"></div>
          </a>
          <a href="copr-nexus.html" className="rm-pillar-card rm-pillar-card--copr">
            <div className="rm-pillar-card__icon">{CoprIcon}</div>
            <div className="rm-pillar-card__sub">Communication, Outreach and Public Relation Nexus</div>
            <h3 className="rm-pillar-card__title">COPR Nexus</h3>
            <p className="rm-pillar-card__tagline">From Transactional to Transformational.</p>
            <p className="rm-pillar-card__body">
              COPR Nexus, an engine for creating EdTech awareness through Conferences, School Leadership Summits, National and International EXPOs, Global STEAM Awards, International Teachers Training Program, and the Young Empowerment Program — a paradigm shift in the global educational stage.
            </p>
            <span className="rm-pillar-card__cta">
              Enter COPR Nexus
              <span className="rm-pillar-card__cta-arrow">→</span>
            </span>
            <div className="rm-pillar-card__deco"></div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ ETM spotlight band — the investor moment ============ */
function HomeETMBand() {
  const badges = [
    { num: "01", text: "A Global EdTech initiative of Robotmea" },
    { num: "02", text: "Accredited by Robotron, South Korea" },
    { num: "03", text: "Managed by Global EdTech Firms" },
  ];
  return (
    <section className="rm-etm-band" data-screen-label="04 ETM Spotlight">
      <div className="rm-container rm-etm-band__inner">
        <div className="rm-etm-band__copy">
          <div className="rm-eyebrow rm-eyebrow--white">Educational Transformation Movement</div>
          <h2 className="rm-h2 rm-etm-band__heading" style={{ marginTop: 18 }}>
            Pakistan's first<br />
            <span style={{ color: 'var(--rm-orange)' }}>ETM-powered schools</span> —<br />
            established under your name.
          </h2>
          <p className="rm-etm-band__statement">
            "A Global EdTech initiative of Robotmea. Accredited by Robotron, South Korea. Managed by Global EdTech Firms."
          </p>
          <p className="rm-etm-band__lead">
            ETM is a franchise call for investors to establish a STEAM-based, South Korean-accredited emerging technologies school coupled with Islamic values in the Islamic Republic of Pakistan.
          </p>
          <div className="rm-etm-band__ctas">
            <a href="etm.html" className="rm-btn rm-btn--primary rm-btn--lg">
              Investor Deep Dive<span className="rm-btn__arrow">→</span>
            </a>
            <a href="contact.html" className="rm-btn rm-btn--ghost-light rm-btn--lg">
              Book a Discovery Call
            </a>
          </div>
        </div>
        <div className="rm-etm-band__badges">
          {badges.map(b => (
            <div key={b.num} className="rm-etm-badge">
              <div className="rm-etm-badge__num">{b.num}</div>
              <div className="rm-etm-badge__txt">{b.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Five-point ETM story ============ */
function HomeFivePoint() {
  const points = [
    { n: "01", t: "ETM-Powered Model", b: "Pakistan's first ETM-powered schools, built on South Korean Educational Standards and accredited by Robotron." },
    { n: "02", t: "Student-Centric Environment", b: "No homework. No rote learning. No exam pressure. PBIL in Discovery & Innovation Hubs and the ETM Garage." },
    { n: "03", t: "Islamic Values at the Core", b: "Friends of Quran lounge, the Prophet ﷺ as Role Model programme, compulsory Arabic, and an integrated one-book STEAM model." },
    { n: "04", t: "Emerging Technologies", b: "Robotics, AI and innovation from the early years — including TechNutrition 365, our holistic ECCE programme." },
    { n: "05", t: "Reimagined Roles", b: "Principal as Mentor. Teacher as Coach. Student as Learner. Backed by the Faculty Development Cell and regular ETM audits." },
  ];
  return (
    <section className="rm-section rm-section--mist" data-screen-label="05 Five-Point ETM Story">
      <div className="rm-container">
        <RM_Divider
          eyebrow="What Makes ETM Different"
          heading="The five-point story."
          lead="Every ETM school is built on the same five non-negotiables — the structural reasons ETM produces graduates to fulfill the need for Industry 4.0 and Industry 5.0."
        />
        <div className="rm-five-point" style={{ marginTop: 56 }}>
          {points.map(p => (
            <div key={p.n} className="rm-five-point__card">
              <div className="rm-five-point__num">{p.n}</div>
              <h3 className="rm-five-point__title">{p.t}</h3>
              <p className="rm-five-point__body">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ NGIS featured card ============ */
function HomeNGIS() {
  return (
    <section className="rm-section" data-screen-label="06 NGIS Feature">
      <div className="rm-container">
        <div className="rm-ngis">
          <div>
            <div className="rm-ngis__eyebrow">
              <span style={{ width: 22, height: 2, background: "var(--rm-orange)" }}></span>
              The First ETM School
            </div>
            <h2 className="rm-ngis__title">NGIS — NextGen International School.</h2>
            <p className="rm-ngis__strap">
              "A Global EdTech initiative of Robotmea. Accredited by Robotron, South Korea. Managed by Global EdTech Firms."
            </p>
            <p className="rm-ngis__body">
              The first school operating under the ETM franchise — two campuses in Karachi, opening for Pre-Primary through Grade 5, with the first cohort enrolling from August. NGIS is the live, working demonstration of the model future ETM schools will inherit.
            </p>
            <a href="etm.html#ngis" className="rm-btn rm-btn--primary">
              Visit NGIS<span className="rm-btn__arrow">→</span>
            </a>
          </div>
          <div className="rm-ngis__facts">
            <div className="rm-ngis__fact">
              <div className="rm-ngis__fact-label">Campuses</div>
              <div className="rm-ngis__fact-value">Jinnah Avenue<br />Model Colony</div>
            </div>
            <div className="rm-ngis__fact">
              <div className="rm-ngis__fact-label">City</div>
              <div className="rm-ngis__fact-value">Karachi,<br />Pakistan</div>
            </div>
            <div className="rm-ngis__fact">
              <div className="rm-ngis__fact-label">Grades</div>
              <div className="rm-ngis__fact-value">Pre-Primary<br />through Grade 5</div>
            </div>
            <div className="rm-ngis__fact">
              <div className="rm-ngis__fact-label">Enrolment</div>
              <div className="rm-ngis__fact-value">Opens<br />August</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Stats strip ============ */
function HomeStats() {
  const stats = [
    { n: "300+",  l: "Schools in Our Network" },
    { n: "30+",   l: "Countries of Operation" },
    { n: "5,000+",l: "Teachers Trained" },
    { n: "200+",  l: "Projects Delivered" },
    { n: "200K+", l: "Students Reached" },
  ];
  return (
    <section className="rm-stats" data-screen-label="07 Stats">
      <div className="rm-pillar-strip" style={{ position: "absolute", top: 0, left: 0, right: 0 }}>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="rm-container">
        <div className="rm-stats__grid">
          {stats.map(s => (
            <div key={s.l} className="rm-stat">
              <div className="rm-stat__n">{s.n}</div>
              <div className="rm-stat__l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ COPR Formulas band — redesigned (no image, branded cards) ============ */
function HomeCOPR() {
  // Each formula split into [left, right, result] so we can colour the equation
  const formulas = [
    { l: "Hardwork + Exposure",                         r: "Excellence",     color: "var(--rm-orange)" },
    { l: "Unity + Faith",                               r: "Discipline",     color: "var(--rm-blue)"   },
    { l: "Communication + Creativity",                  r: "Innovation",     color: "var(--rm-orange)"  },
    { l: "Heterogeneous Connectivity + Local Understanding", r: "Real Change", color: "var(--rm-blue)"    },
    { l: "Market Research + Business Intelligence",     r: "Success",        color: "var(--rm-orange)" },
    { l: "Transparency + Leadership",                   r: "Vision",         color: "var(--rm-blue)"   },
    { l: "Strategic Thinking + Skills",                 r: "Impact",         color: "var(--rm-orange)"  },
    { l: "Passion + Pragmatic Approach",                r: "Value Creation", color: "var(--rm-blue)"    },
  ];
  return (
    <section className="rm-section rm-copr-band" data-screen-label="08 COPR Formulas">
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
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="copr-nexus.html" className="rm-btn rm-btn--outline">
            See COPR Nexus<span className="rm-btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Testimonial ============ */
function HomeTestimonial() {
  return (
    <section className="rm-section rm-section--blue" data-screen-label="09 Testimonial">
      <div className="rm-container">
        <RM_Divider dark eyebrow="Voices" heading="What partners are saying." />
        <div className="rm-testimonial-grid">
          <figure className="rm-quote-card">
            <div className="rm-quote-card__mark">&ldquo;</div>
            <blockquote className="rm-quote-card__quote">
              There is no escape from technology in the present times. If we have to win our share and bring this technology to our service and benefit, we need to act fast and act right. I believe Robotmea has come as a vanguard to the region&rsquo;s educational needs and to help transform the schooling landscape. Let&rsquo;s join hands to embed technology in our school curriculums to the benefit of our future generations.
            </blockquote>
            <figcaption className="rm-quote-card__author">
              <div className="rm-avatar" data-initials="KM"></div>
              <div>
                <div className="rm-quote-card__name">Kashif Suhail Malik</div>
                <div className="rm-quote-card__role">Master Trainer · IPD and IIUI School</div>
              </div>
            </figcaption>
          </figure>
          <figure className="rm-quote-card">
            <div className="rm-quote-card__mark">&ldquo;</div>
            <blockquote className="rm-quote-card__quote">
              I have seen students are behaving differently after taking Robotmea Robotic &amp; STEAM based classes and they are learning real technology and becoming more innovative. Robotmea trained teachers are inculcating the real core competencies of 21st century educational skills such as critical thinking, creativity, communication, collaboration and most importantly character building. Well-done Robotmea team for reshaping Middle East, Africa &amp; Pakistan towards innovative societies on the tenets of innovation &amp; entrepreneurship.
            </blockquote>
            <figcaption className="rm-quote-card__author">
              <div className="rm-avatar" data-initials="WA"></div>
              <div>
                <div className="rm-quote-card__name">Wajiha Akram</div>
                <div className="rm-quote-card__role">Minister of State for Federal Education &amp; Professional Training</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============ Network logo wall ============ */
function HomeNetwork() {
  // 14 chosen from assets/network/ — full grid lives on /network
  const logos = [
    "named-aces.png","named-alda.png","named-iiu-islamabad.png","named-iqra-residential.png",
    "named-leaders-harbor.png","named-nobel-stem.jpg","named-pioneer-signature.png","named-read-foundation.png",
    "partner-01.png","partner-04.png","partner-09.png","partner-13.png","partner-21.png","partner-34.png",
  ];
  return (
    <section className="rm-network">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Our Network"
          heading="On the ground."
          lead="The schools, institutions and partners across Middle East, Africa and Pakistan running Robotmea programmes."
        />
        <div className="rm-network__grid" style={{ marginTop: 48 }}>
          {logos.map(l => (
            <div key={l} className="rm-network__cell">
              <img src={"../assets/network/" + l} alt="Network partner" />
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="network.html" className="rm-btn rm-btn--outline">
            See full network<span className="rm-btn__arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Final CTA band ============ */
function HomeFinalCTA() {
  return (
    <section className="rm-final-cta" data-screen-label="11 Final CTA">
      <div className="rm-container rm-final-cta__inner">
        <div className="rm-eyebrow rm-eyebrow--center rm-eyebrow--white" style={{ color: "rgba(255,255,255,.85)", marginBottom: 18 }}>
          Get In Touch
        </div>
        <h2 className="rm-h2 rm-final-cta__heading">
          Join the ETM movement<br />to make your child relevant.
        </h2>
        <p className="rm-final-cta__sub">
          Whether you're a parent, a principal, an investor, a government partner, or press — there's a desk at Robotmea for you.
        </p>
        <div className="rm-final-cta__ctas">
          <a href="contact.html" className="rm-btn rm-btn--primary rm-btn--lg">
            Contact IERDG<span className="rm-btn__arrow">→</span>
          </a>
          <a href="contact.html" className="rm-btn rm-btn--ghost-light rm-btn--lg">
            Contact COPR Nexus
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Vision + Strategic Objective (two parallel manifestos) ============ */
function HomeVisionStrategic() {
  return (
    <section className="rm-vision-band" data-screen-label="03 Vision & Strategy">
      <div className="rm-container rm-vision-band__inner">
        <div className="rm-manifesto">
          <div className="rm-manifesto__label">
            <span className="rm-manifesto__label-num">01</span> Our Vision
          </div>
          <div className="rm-manifesto__mark">“</div>
          <h2 className="rm-manifesto__statement">
            Transforming<br />
            <span className="rm-manifesto-accent">The Future Of Youth.</span>
          </h2>
          <p className="rm-manifesto__sub">
            Empowering future generations through emerging technologies, innovation &amp; entrepreneurship.
          </p>
          <div className="rm-manifesto__sig">Robotmea</div>
        </div>

        <div className="rm-vision-band__divider" aria-hidden="true"></div>

        <div className="rm-manifesto">
          <div className="rm-manifesto__label">
            <span className="rm-manifesto__label-num">02</span> Strategic Objective
          </div>
          <div className="rm-manifesto__mark">“</div>
          <h2 className="rm-manifesto__statement">
            Innovative Education<br />
            <span className="rm-manifesto-accent">For Shaping Wisdom-Driven Economies.</span>
          </h2>
          <p className="rm-manifesto__sub">
            We are empowering nations and global communities by uplifting individuals through emerging technologies, global exposure and international connectivity.
          </p>
          <div className="rm-manifesto__sig">Robotmea</div>
        </div>
      </div>
    </section>
  );
}

/* ============ Why Robotmea \u2014 World-class positioning ============ */
function HomeWhy() {
  const items = [
    {
      accent: "var(--rm-blue)",
      accentSoft: "var(--rm-blue-50)",
      title: "Accredited, not affiliated",
      body: "IERDG is a formally accredited body backed by international EdTech leaders from South Korea and China.",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>
    },
    {
      accent: "var(--rm-orange)",
      accentSoft: "var(--rm-orange-50)",
      title: "Curriculum-first",
      body: "We are an institute built around curriculum, teachers training and accreditation \u2014 an internationally-aligned STEAM-based system well aligned and integrated with Industry 4.0 skillset development.",
      icon: <svg viewBox="0 0 24 24"><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3z" transform="translate(0 -2)"/><path d="M4 4v18"/><path d="M8 8h6M8 12h6"/></svg>
    },
    {
      accent: "var(--rm-green)",
      accentSoft: "var(--rm-green-50)",
      title: "Evidence-led",
      body: "Every program operates under a published Monitoring & Evaluation rubric. We measure, we publish, we feed the findings back into the EdTech-based system.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 21V8M9 21V12M15 21V4M21 21V14"/></svg>
    },
    {
      accent: "var(--rm-red)",
      accentSoft: "var(--rm-red-50)",
      title: "Globally connected",
      body: "An international partner network across South Korea, the Middle East and China keeps the work plugged into world-class research, hardware and industry.",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>
    },
  ];
  return (
    <section className="rm-section rm-section--tight rm-why" data-screen-label="04 Why Robotmea">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Why IERDG"
          heading="A world-class EdTech institution."
          lead="Four reasons every educational institution, ministries and investors treat IERDG as a peer to the world's leading EdTech institutions."
        />
        <div className="rm-why__grid">
          {items.map(it => (
            <div key={it.title} className="rm-why__card" style={{ "--accent": it.accent, "--accent-soft": it.accentSoft }}>
              <div className="rm-why__icon">{it.icon}</div>
              <h3 className="rm-why__title">{it.title}</h3>
              <p className="rm-why__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ For Principals — 6-step school transformation ============ */
function HomePrincipals() {
  const steps = [
    {
      n: "01", t: "Technical Feasibility", color: "var(--rm-blue)",
      b: "Plan a feasibility session with our EdTech Specialists. We assess your campus, your curriculum and your readiness.",
      icon: <svg viewBox="0 0 24 24"><path d="M9 11l3 3 8-8"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    },
    {
      n: "02", t: "Discovery & Innovation Hub", color: "var(--rm-orange)",
      b: "Establish your school's flagship D&I Hub — built to the IERDG standard, designed for your space.",
      icon: <svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"/></svg>
    },
    {
      n: "03", t: "Adopt the Curriculum", color: "var(--rm-orange)",
      b: "Bring in IERDG's globally adopted AI, Robotics and STEAM curriculum — integrated with your existing learning outcomes.",
      icon: <svg viewBox="0 0 24 24"><path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/></svg>
    },
    {
      n: "04", t: "Train Your Teachers", color: "var(--rm-blue)",
      b: "Certify your faculty on the Robotron standard. Continuous Professional Development through our Faculty Development Cell.",
      icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    },
    {
      n: "05", t: "Monitoring & Evaluation", color: "var(--rm-blue)",
      b: "Stay connected through our published M&E framework. Quarterly audits, measurable outcomes, transparent reporting.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>
    },
    {
      n: "06", t: "Keep On Improving", color: "var(--rm-orange)",
      b: "Annual curriculum refresh, teacher recertification, and exposure to the broader Robotmea network. The work never stops.",
      icon: <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>
    },
  ];
  return (
    <section className="rm-principals" data-screen-label="06 For Principals">
      <div className="rm-container">
        <div className="rm-principals__intro">
          <RM_Divider
            align="left"
            eyebrow="For School Principals"
            heading={<>Transform your school<br />in six steps.</>}
          />
          <p className="rm-principals__lead">
            Already running a school? IERDG partners with existing institutions to bring International EdTech standards into your classroom, without rebuilding anything. You keep your name, your team, your community; we bring the curriculum, the training, and the accreditation.
          </p>
        </div>
        <div className="rm-process-flow">
          {steps.map(s => (
            <div key={s.n} className="rm-process-step" style={{ "--accent": s.color }}>
              <div className="rm-process-step__icon">{s.icon}</div>
              <div className="rm-process-step__num">Step {s.n}</div>
              <h3 className="rm-process-step__title">{s.t}</h3>
              <p className="rm-process-step__body">{s.b}</p>
            </div>
          ))}
        </div>
        <div className="rm-principals__cta-row">
          <div className="rm-principals__cta-text">
            <div className="rm-principals__cta-eyebrow">Ready to start?</div>
            <div className="rm-principals__cta-h">See the full transformation plan inside IERDG.</div>
          </div>
          <div className="rm-principals__cta-actions">
            <a href="institute.html#transform" className="rm-btn rm-btn--primary">
              Open the Plan<span className="rm-btn__arrow">→</span>
            </a>
            <a href="contact.html" className="rm-btn rm-btn--ghost-light">
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  HomeHero, HomeTrust, HomeWhoWeAre, HomeVisionStrategic, HomeWhy,
  HomePillars, HomePrincipals, HomeETMBand, HomeFivePoint, HomeNGIS, HomeStats,
  HomeCOPR, HomeTestimonial, HomeNetwork, HomeFinalCTA,
});
