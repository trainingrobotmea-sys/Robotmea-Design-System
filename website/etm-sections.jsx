/* global React */

/* ============ ETM Hero ============ */
function EtmHero() {
  return (
    <section className="rm-etm-hero" data-screen-label="01 ETM Hero">
      <div className="rm-pillar-strip" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
        <span style={{ background: "var(--etm-teal)" }}></span>
        <span style={{ background: "var(--etm-orange)" }}></span>
        <span style={{ background: "var(--etm-magenta)" }}></span>
        <span style={{ background: "var(--etm-black)" }}></span>
      </div>
      <div className="rm-container rm-etm-hero__inner">
        <div className="rm-etm-hero__layout">
          <div>
            <div className="rm-eyebrow rm-eyebrow--white rm-etm-hero__eyebrow">Educational Transformational Movement</div>
            <h1 className="rm-etm-hero__title">
              <span className="rm-etm-hero__title-accent">Redefining Education</span>
              To Make You<br />Relevant.
            </h1>
            <p className="rm-etm-hero__tagline">
              A complete educational operating system — Robotron-certified, ETM-powered, South-Korean-accredited — designed for the schools that intend to lead the next decade.
            </p>
            <div className="rm-etm-hero__statement">
              "A Global EdTech initiative of Robotmea. Accredited by Robotron, South Korea. Managed by Global EdTech Firms."
            </div>
            <div className="rm-etm-hero__ctas">
              <a href="#franchise" className="rm-btn rm-btn--primary rm-btn--lg">
                Request the Investor Pack<span className="rm-btn__arrow">→</span>
              </a>
              <a href="contact.html" className="rm-btn rm-btn--ghost-light rm-btn--lg">
                Book a Discovery Call
              </a>
            </div>
          </div>
          <div className="rm-etm-logo">
            <img src="../assets/etm-logo.png" alt="Educational Transformation Movement" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ ETM Tagline band — right under hero ============ */
function EtmTaglineBand() {
  return (
    <section className="rm-etm-tagline-band">
      <div className="rm-container">
        <div className="rm-etm-tagline-band__txt">
          A new category of school. <span className="rm-etm-tagline-accent">Built to a single standard.</span>
        </div>
        <div className="rm-etm-tagline-band__sub">Pakistan's first ETM-powered schools · Operating now</div>
      </div>
    </section>
  );
}

/* ============ Franchise Structure — Who is Who ============ */
function EtmFranchise() {
  const rows = [
    { c: "var(--rm-orange)", role: "ETM Franchisor", entity: "Robotmea",
      body: "Owner of the Educational Transformation Movement (ETM) programme and brand system. Licenses the standard, audits the implementation." },
    { c: "var(--rm-blue)",   role: "ETM Franchisee", entity: "Investor's School",
      body: "Operates an ETM-powered school under licence from Robotmea — own name, own buildings, own community, ETM operating standard." },
    { c: "var(--rm-green)",  role: "Accrediting Body", entity: "Robotron, South Korea",
      body: "Certifies the K–12 programme to a published South Korean standard. 25+ years of cross-sector research, public-private-development." },
    { c: "var(--rm-red)",    role: "Pedagogical Anchor", entity: "S. Korean Standards + NCP",
      body: "South Korean Educational Standards, integrated with the Pakistan National Curriculum (NCP). Local relevance, global benchmark." },
  ];
  return (
    <section id="franchise" className="rm-franchise" data-screen-label="02 Franchise Structure">
      <div className="rm-container">
        <RM_Divider
          eyebrow="The Franchise Structure"
          heading="Who is who."
          lead="ETM is a franchise call for investors to establish a STEAM-based, South Korean-accredited emerging technologies school coupled with Islamic values in the Islamic Republic of Pakistan."
        />
        <div className="rm-franchise__layout">
          {rows.map(r => (
            <div key={r.role} className="rm-franchise__card" style={{ "--accent": r.c }}>
              <div className="rm-franchise__role">{r.role}</div>
              <h3 className="rm-franchise__entity">{r.entity}</h3>
              <p className="rm-franchise__body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Standards Stack — 5 features ============ */
function EtmStandards() {
  const cards = [
    {
      n: "01", c: "var(--etm-teal)",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2v20M5 7l7-3 7 3M5 12l7-3 7 3M5 17l7-3 7 3"/></svg>,
      title: "Friends of Quran & Our Role ﹒ SAWW ﹓ Model",
      body: "A dedicated lounge for Quran reflection, the Prophet Muhammad ﭒ as Role Model programme, compulsory Arabic, and a one-book model that integrates Islamic values with the academic stack."
    },
    {
      n: "02", c: "var(--etm-magenta)",
      icon: <svg viewBox="0 0 24 24"><path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/></svg>,
      title: "STEAM-Integrated Academic Planning",
      body: "K–12 STEAM scope-and-sequence, mapped to the Pakistan National Curriculum (NCP) and benchmarked to South Korean Educational Standards. Project-Based Inquiry Learning (PBIL) is the default mode."
    },
    {
      n: "03", c: "var(--etm-orange)",
      icon: <svg viewBox="0 0 24 24"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"/></svg>,
      title: "Discovery & Innovation Hub",
      body: "Every ETM school operates a D&I Hub built to one published blueprint — equipment list, room specifications, programme design, staffing model. The flagship innovation space of the school."
    },
    {
      n: "04", c: "var(--etm-teal)",
      icon: <svg viewBox="0 0 24 24"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6M9 18h6M6 9v6M18 9v6"/></svg>,
      title: "ETM Garage",
      body: "The signature applied-tech workshop: robotics, drone, IoT, fabrication, and AI lab in one space. Standardised across every ETM school so transferring students always land on familiar ground."
    },
    {
      n: "05", c: "var(--etm-magenta)",
      icon: <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      title: "Faculty Development Cell",
      body: "The in-school capability-building structure. Continuous CPD, quarterly classroom-practice audits, peer review and the Korean exchange track for top performers — all built into the school from day one."
    },
  ];
  return (
    <section className="rm-standards" data-screen-label="03 Standards Stack">
      <div className="rm-container">
        <RM_Divider
          eyebrow="What You Get"
          heading="The standards stack."
          lead="Every ETM school is built on the same five non-negotiables — the structural reasons ETM produces graduates to fulfill the need for Industry 4.0 and Industry 5.0."
        />
        <div className="rm-standards__grid rm-standards__grid--5">
          {cards.map(c => (
            <div key={c.n} className="rm-standard-card" style={{ "--accent": c.c }}>
              <div className="rm-standard-card__icon">{c.icon}</div>
              <div className="rm-standard-card__num">{c.n}</div>
              <h3 className="rm-standard-card__title">{c.title}</h3>
              <p className="rm-standard-card__body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Yours / Ours table ============ */
function EtmYoursOurs() {
  const yours = [
    "Your school's name and identity",
    "Your buildings, your capital, your land",
    "Your local hiring (within our framework)",
    "Your fees and your community",
    "Your management team",
    "Your day-to-day operations",
    "Your local relationships",
  ];
  const ours = [
    "The Robotron, South Korea certification",
    "The Academics Planning Standard",
    "The Discovery & Innovation Hub blueprint",
    "The ETM Garage standard",
    "The teacher training pathway + Faculty Development Cell",
    "The M&E framework + quarterly ETM audits",
    "The South Korean accreditation mark",
  ];
  const Check = () => (
    <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
  );
  return (
    <section className="rm-yours-ours" data-screen-label="04 Yours Ours">
      <div className="rm-container">
        <RM_Divider dark
          eyebrow="The Investor Reassurance"
          heading="What stays yours. What comes from us."
          lead="The single most important question an investor asks. Here is the answer, in one table."
        />
        <div className="rm-yo__layout">
          <div className="rm-yo__col">
            <div className="rm-yo__col-eyebrow">Yours</div>
            <h3 className="rm-yo__col-heading">What you keep.</h3>
            <div className="rm-yo__list">
              {yours.map((t, i) => (
                <div key={i} className="rm-yo__item">
                  <span className="rm-yo__check"><Check /></span>
                  <span className="rm-yo__txt">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rm-yo__col rm-yo__col--ours">
            <div className="rm-yo__col-eyebrow">Ours (ETM)</div>
            <h3 className="rm-yo__col-heading">What we bring.</h3>
            <div className="rm-yo__list">
              {ours.map((t, i) => (
                <div key={i} className="rm-yo__item">
                  <span className="rm-yo__check"><Check /></span>
                  <span className="rm-yo__txt">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Five-point story (deep) ============ */
function EtmFivePoint() {
  const rows = [
    { c: "var(--rm-blue)",   t: "ETM-Powered Model",
      b: "Pakistan's first ETM-powered schools, built on South Korean Educational Standards and accredited by Robotron, South Korea. This is not a STEAM bolt-on to an existing curriculum; it is a complete educational operating system." },
    { c: "var(--rm-orange)", t: "Student-Centric Environment",
      b: "No homework. No boring classes. No heavy bags. No rote learning. No exam pressure. Project-Based Inquiry Learning (PBIL) replaces traditional classrooms with Discovery & Innovation Hubs and the ETM Garage — applied, hands-on, evaluated through portfolios, not memorisation." },
    { c: "var(--rm-green)",  t: "Islamic Values at the Core",
      b: "ETM schools are unapologetically rooted in Islamic values. The Friends of Quran lounge. The Prophet Muhammad ﷺ as Role Model programme. Compulsory Arabic. A one-book model that integrates Islamic, academic and STEAM content rather than treating them as separate streams." },
    { c: "var(--rm-red)",    t: "Emerging Technologies",
      b: "Robotics, AI, and innovation embedded from the early years — including TechNutrition 365, our holistic Early Childhood Care & Education programme that covers robotics, nutrition, psychology, and EdTech as a single integrated experience." },
    { c: "var(--rm-blue)",   t: "Reimagined Roles",
      b: "Principal as Mentor. Teacher as Coach / Instructor. Student as Learner. Supported by the Faculty Development Cell (FDC) and a system of regular ETM audits that keep every classroom honest to the standard." },
  ];
  return (
    <section className="rm-fivepoint-deep" data-screen-label="05 Five-Point Story">
      <div className="rm-container">
        <RM_Divider
          eyebrow="What Makes ETM Different"
          heading="The five-point story."
          lead="Every ETM school is built on the same five non-negotiables — the structural reasons ETM produces graduates to fulfill the need for Industry 4.0 and Industry 5.0."
        />
        <div className="rm-fivepoint-deep__list">
          {rows.map((r, i) => (
            <div key={i} className="rm-fp-row" style={{ "--accent": r.c }}>
              <div className="rm-fp-row__num">{String(i + 1).padStart(2, "0")}</div>
              <div>
                <h3 className="rm-fp-row__title">{r.t}</h3>
                <p className="rm-fp-row__body">{r.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Audience tiles ============ */
function EtmAudience() {
  const items = [
    {
      c: "var(--rm-blue)",
      audience: "For Parents",
      title: "A future-ready child.",
      body: "Safety. Islamic values. No homework or exam pressure. South Korean educational standards. A child who graduates fluent in the technologies the next decade will demand.",
      icon: <svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><path d="M19 6v6M16 9h6"/></svg>
    },
    {
      c: "var(--rm-orange)",
      audience: "For Investors",
      title: "A scalable franchise.",
      body: "The Robotmea franchise model. ETM accreditation by Robotron. South Korean educational standards. A category-defining proposition with a clear, audited expansion path.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 6-6"/></svg>
    },
    {
      c: "var(--rm-green)",
      audience: "For Educators",
      title: "A career-grade institution.",
      body: "The Faculty Development Cell. Teacher-as-coach model. The ETM Garage. Global benchmarking against a 25-year-old South Korean research institution.",
      icon: <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
    },
    {
      c: "var(--rm-red)",
      audience: "For Media",
      title: "A movement, not a school.",
      body: "Pakistan's First ETM-Powered School. The Educational Transformation Movement. From Transactional to Transformational.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 11v2a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8v-2"/><path d="M3 11V9a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v2"/><path d="M3 11h18"/></svg>
    },
  ];
  return (
    <section className="rm-audience" data-screen-label="06 Audience">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Speaking To Everyone"
          heading="Four audiences. One promise."
          lead="The ETM model has a different answer to a different audience — but the same accreditation behind every claim."
        />
        <div className="rm-audience__grid">
          {items.map(it => (
            <div key={it.audience} className="rm-audience__card" style={{ "--accent": it.c }}>
              <div className="rm-audience__icon">{it.icon}</div>
              <div className="rm-audience__for">{it.audience}</div>
              <h3 className="rm-audience__title">{it.title}</h3>
              <p className="rm-audience__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Investor journey ============ */
function EtmJourney() {
  const steps = [
    { c: "var(--rm-blue)",   t: "Discovery Call",    b: "60-minute conversation with IERDG leadership. No commitment. Confidential." },
    { c: "var(--rm-orange)", t: "Investor Pack",     b: "Full standards documentation, financial model, regional market analysis." },
    { c: "var(--rm-green)",  t: "Feasibility",       b: "Site visit, local market study, capital plan review with our team." },
    { c: "var(--rm-red)",    t: "Onboarding",        b: "Accreditation paperwork, teacher hiring + FDC setup, capex build-out." },
    { c: "var(--rm-blue)",   t: "Launch",            b: "Your school opens as an ETM-powered school, developed by IERDG and accredited by Robotron, South Korea." },
  ];
  return (
    <section className="rm-journey" data-screen-label="07 Investor Journey">
      <div className="rm-container">
        <RM_Divider
          eyebrow="The Investor Journey"
          heading="From conversation to open doors."
          lead="A typical ETM partnership moves from first call to a fully-licensed, operational school in five structured stages."
        />
        <div className="rm-journey__flow">
          {steps.map((s, i) => (
            <div key={i} className="rm-journey__step" style={{ "--accent": s.c }}>
              <div className="rm-journey__num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="rm-journey__title">{s.t}</h3>
              <p className="rm-journey__body">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FAQ ============ */
function EtmFAQ() {
  const items = [
    { q: "Can I convert an existing school, or only build new?",
      a: "Both. ETM operates two tracks — Greenfield (a new school built ground-up to ETM standard) and Transformation (an existing school converted to ETM over a defined runway). We assess fit during the feasibility stage." },
    { q: "What does the ETM fee structure look like?",
      a: "ETM operates on a licensing model with three components: a one-time onboarding fee, an annual licence fee per campus, and a recurring per-student royalty. The Investor Pack contains the complete commercial schedule. Confidential until that stage." },
    { q: "Do I own the Robotron certification, or does Robotmea?",
      a: "Robotron is the accrediting body. Robotmea holds the master accreditation. Your school holds an operating licence that carries the accreditation while you remain in good standing — the same way a university franchise carries the parent's standard." },
    { q: "How is quality enforced across franchised schools?",
      a: "Quarterly on-site ETM audits, an anonymised central data system, and an annual public Impact Report. Schools that fall below the published rubric enter a remediation cycle before — in the rare worst case — losing the licence." },
    { q: "What is the typical timeline from sign-off to opening?",
      a: "Greenfield ETM schools typically launch 9–14 months from licence signing, depending on construction. Transformations of existing schools can move faster, often opening to ETM standard from the following academic year." },
    { q: "How does ETM scale across multiple campuses?",
      a: "An investor group can license multiple campuses under a master agreement, with reduced onboarding fees per additional campus and a unified audit / training / curriculum stack across the group." },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="rm-faq" data-screen-label="08 FAQ">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Investor FAQ"
          heading="The questions investors ask first."
          lead="Open answers to the six conversations that come up on every Discovery Call. Anything not here, ask us directly."
        />
        <div className="rm-faq__list">
          {items.map((it, i) => (
            <div key={i} className={"rm-faq__item " + (open === i ? "is-open" : "")}>
              <button className="rm-faq__q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="rm-faq__q-num">Q{String(i + 1).padStart(2, "0")}</span>
                <span style={{ flex: 1 }}>{it.q}</span>
                <span className="rm-faq__q-arrow">
                  <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </span>
              </button>
              <div className="rm-faq__a">
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Final CTA ============ */
function EtmFinal() {
  return (
    <section className="rm-etm-final" data-screen-label="09 Final CTA">
      <div className="rm-container rm-etm-final__inner">
        <div className="rm-eyebrow rm-eyebrow--center rm-eyebrow--white" style={{ color: "rgba(255,255,255,.9)" }}>
          Get In Touch
        </div>
        <h2 className="rm-etm-final__heading">
          Join the ETM Movement.<br />
          Make your school relevant.
        </h2>
        <p className="rm-etm-final__sub">
          Pakistan's first ETM-powered schools are already operating. The next one is yours to build.
        </p>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="../website/contact.html" className="rm-btn rm-btn--primary rm-btn--lg">
            Request Investor Pack<span className="rm-btn__arrow">→</span>
          </a>
          <a href="../website/contact.html" className="rm-btn rm-btn--ghost-light rm-btn--lg">
            Book Discovery Call
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============ Features inside an ETM school ============ */
function EtmFeatures() {
  const features = [
    {
      c: "var(--etm-teal)",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M9 12l2 2 4-4"/></svg>,
      title: "Project-Based Inquiry Learning",
      body: "PBIL replaces lecture-led classes. Students learn by building — robotics, AI prototypes, IoT installations — assessed through portfolios and live demonstrations.",
    },
    {
      c: "var(--etm-magenta)",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2v6m0 0L8 4m4 4l4-4M5 12a7 7 0 1 0 14 0"/></svg>,
      title: "TechNutrition 365",
      body: "Our holistic Early Childhood Care & Education programme — robotics, nutrition, psychology and EdTech delivered as a single integrated experience for our youngest learners.",
    },
    {
      c: "var(--etm-orange)",
      icon: <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M12 4v16M3 12h18"/></svg>,
      title: "The One-Book Model",
      body: "A single integrated textbook per grade that ties Islamic studies, language, science and STEAM through the same set of projects. Lighter bags. Coherent learning.",
    },
    {
      c: "var(--etm-magenta)",
      icon: <svg viewBox="0 0 24 24"><path d="M3 7l9 6 9-6"/><path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-9-4z"/></svg>,
      title: "Compulsory Arabic",
      body: "Arabic from Grade 1 onwards, taught not as a religious obligation but as a living language — with PBIL projects, immersion days, and integration into the one-book model.",
    },
    {
      c: "var(--etm-teal)",
      icon: <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      title: "Reimagined Roles",
      body: "Principal as Mentor. Teacher as Coach. Student as Learner. A deliberate redefinition of who does what inside the school — backed by training, audits and published role descriptions.",
    },
    {
      c: "var(--etm-orange)",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
      title: "Regular ETM Audits",
      body: "Every ETM school is audited quarterly against the published rubric. The standard is enforced — not assumed — and the findings feed straight back into next-cycle curriculum and training.",
    },
  ];
  const negatives = [
    { h: "No Homework", s: "Learning happens at school." },
    { h: "No Heavy Bags", s: "The one-book model." },
    { h: "No Boring Classes", s: "PBIL is the default." },
    { h: "No Rote Learning", s: "Portfolios over memorisation." },
    { h: "No Exam Pressure", s: "Continuous assessment." },
  ];
  return (
    <section className="rm-etm-features" data-screen-label="04 Features">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Inside An ETM School"
          heading="Six features. One coherent experience."
          lead="The standards stack defines what is built. The features below describe what an ETM student lives every day — and what an ETM school deliberately refuses to do."
        />
        <div className="rm-feat-grid">
          {features.map(f => (
            <div key={f.title} className="rm-feat-card" style={{ "--accent": f.c }}>
              <div className="rm-feat-card__top">
                <div className="rm-feat-card__icon">{f.icon}</div>
                <h3 className="rm-feat-card__title">{f.title}</h3>
              </div>
              <p className="rm-feat-card__body">{f.body}</p>
            </div>
          ))}
        </div>
        <div className="rm-no-features" aria-label="What ETM does not do">
          {negatives.map(n => (
            <div key={n.h} className="rm-no-feature">
              <div className="rm-no-feature__h">{n.h}</div>
              <div className="rm-no-feature__sub">{n.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  EtmHero, EtmTaglineBand, EtmFranchise, EtmStandards, EtmFeatures, EtmYoursOurs,
  EtmFivePoint, EtmAudience, EtmJourney, EtmFAQ, EtmFinal,
});
