/* global React */

/* ============ International Partners Hero ============ */
function IntlHero() {
  return (
    <section className="rm-intl-hero" data-screen-label="01 Intl Hero">
      <div className="rm-pillar-strip" style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 3 }}>
        <span></span><span></span><span></span><span></span>
      </div>
      <div className="rm-container rm-intl-hero__inner">
        <div className="rm-eyebrow rm-eyebrow--white">Global Ecosystem</div>
        <h1 className="rm-intl-hero__title">
          Where Robotmea<br />
          <span className="rm-intl-hero__title-accent">Draws Its Standard.</span>
        </h1>
        <p className="rm-intl-hero__lead">
          Robotmea is not a local vendor; we are the Middle East, Africa and Pakistan delivery arm of a network of South Korean research institutions, hardware innovators, and chambers of commerce — organisations with decades of evidence behind every kit, every curriculum, every certification we put our name to.
        </p>
      </div>
    </section>
  );
}

/* ============ Metrics strip ============ */
function IntlMetrics() {
  const metrics = [
    { c: "var(--rm-orange)", n: "30+",  l: "Years Combined Heritage",  sub: "Across our South Korean R&D and accreditation partners." },
    { c: "var(--rm-blue)",   n: "07",   l: "International Partners",   sub: "Across Korea, the Middle East and connectivity technologies." },
    { c: "var(--rm-green)",  n: "11",   l: "Patents Held",             sub: "Granted to Neopia for educational electronic block systems." },
    { c: "var(--rm-red)",    l: "ISO 9001 · CE · FCC", n: "Certified", sub: "Quality, safety and electromagnetic-compliance marks held by partners." },
  ];
  return (
    <section className="rm-intl-metrics" data-screen-label="02 Metrics">
      <div className="rm-container">
        <div className="rm-intl-metrics__grid">
          {metrics.map(m => (
            <div key={m.l} className="rm-intl-metric" style={{ "--accent": m.c }}>
              <div className="rm-intl-metric__n">{m.n}</div>
              <div className="rm-intl-metric__l">{m.l}</div>
              <div className="rm-intl-metric__sub">{m.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Partner Cards ============ */
function IntlPartners() {
  const partners = [
    {
      logo: "../assets/partners/robotron.png",
      country: "Republic of Korea",
      c: "var(--rm-orange)",
      role: "Accreditor · Curriculum Anchor",
      name: "Robotron",
      strap: "Two decades of Korean STEAM heritage.",
      lead: "Robotron is a Republic-of-Korea EdTech research and content provider founded at the turn of the century. Selected by the Korean government for next-generation robotics R&D, certified to ISO 9001 / CE / FCC, and adopted across Korea's public schools as the reference STEAM platform — Robotron is the single most important institutional anchor in Robotmea's network.",
      facts: [
        { n: "2001",     l: "Founded" },
        { n: "ISO 9001", l: "Certified" },
        { n: "K-12",     l: "Public-School Reach" },
      ],
      what: ["Accreditation", "Curriculum Framework", "STEAM Standards", "Korean Govt R&D"],
      url: "https://robotron.co.kr",
    },
    {
      logo: "../assets/partners/neopia.png",
      country: "Republic of Korea",
      c: "var(--rm-blue)",
      role: "Hardware · AI Coding Content",
      name: "Neopia",
      strap: "Korea's pioneers of the educational electronic block.",
      lead: "Neopia is Korea's leading provider of robotics products and AI-coding content for schools. Selected for the Ministry of Knowledge Economy's Next-Generation Digital Leader Development Program and holding eleven patents for electronic-block systems, Neopia's content has been adopted as classroom teaching material across the Korean curriculum for two decades.",
      facts: [
        { n: "1999",    l: "Founded" },
        { n: "11",      l: "Patents Held" },
        { n: "20 yrs+", l: "In Korean Textbooks" },
      ],
      what: ["Robotics Kits", "AI Coding Content", "Electronic Blocks", "Ministry-Backed"],
      url: "https://neopia.world",
    },
    {
      logo: "../assets/partners/minirobot.png",
      country: "Republic of Korea",
      c: "var(--rm-green)",
      role: "Robotics Hardware Partner",
      name: "MiniRobot",
      strap: "Performance-grade robotics, built for the classroom.",
      lead: "MiniRobot is an Incheon-based Korean designer of educational humanoid and competition-grade robotics platforms — the same kits used in Korean schools, science museums and theme parks. MiniRobot's hardware powers the Robotmea robotics tracks and the ETM Garage, giving our students across Pakistan, the Middle East and Africa access to the same machines on which Korea trains its own engineers.",
      facts: [
        { n: "Incheon", l: "South Korea" },
        { n: "K-12",    l: "Curriculum Fit" },
        { n: "AI",      l: "Driven Solutions" },
      ],
      what: ["Humanoid Robotics", "Competition Platforms", "AI Robotics", "Schools & Museums"],
      url: "https://minirobot.co.kr",
    },
    {
      logo: "../assets/partners/tdme.png",
      country: "United Arab Emirates",
      c: "var(--rm-red)",
      role: "Parent Group",
      name: "Time Dimension Middle East",
      strap: "The MENA holding arm behind Robotmea.",
      lead: "TDME is Robotmea's Middle-East-headquartered parent group — focused on EdTech, applied innovation, and youth development across the MENA region. TDME provides Robotmea with regional capital, government relationships across the Gulf, and a direct line into MENA innovation funds and procurement frameworks.",
      facts: [
        { n: "MENA", l: "Regional Reach" },
        { n: "EdTech", l: "Sector Focus" },
        { n: "Innovation", l: "Mandate" },
      ],
      what: ["Parent Holding", "MENA Channels", "Innovation Capital", "Government Relations"],
      url: "https://tdme.net",
    },
    {
      logo: "../assets/partners/esim-gen.png",
      country: "Global Connectivity",
      c: "var(--rm-blue)",
      role: "Collaborative Connectivity Partner",
      name: "esim·gen",
      strap: "Keeping the Robotmea team connected across the globe.",
      lead: "esim·gen is Robotmea's collaborative partner for connectivity services — providing the SIM and eSIM infrastructure that keeps the Robotmea team online wherever the work takes us. As our people, devices and IoT-classroom hardware move between Pakistan, Korea, the Middle East and beyond, esim·gen ensures seamless, friction-free connectivity across borders.",
      facts: [
        { n: "eSIM", l: "Provisioning" },
        { n: "Global", l: "Coverage" },
        { n: "Team", l: "Always Online" },
      ],
      what: ["eSIM Provisioning", "Global Connectivity", "Cross-Border Coverage", "Travel Connectivity"],
      url: "https://esimgen.com",
    },
    {
      logo: "../assets/partners/sinion.jpeg",
      country: "R&D · China",
      c: "var(--rm-orange)",
      role: "R&D Partner · China",
      name: "Sinion Smart Connections",
      strap: "Our gateway to China's emerging technologies.",
      lead: "Sinion is Robotmea's R&D partner in China — our direct access point to the emerging technologies coming out of the world's fastest-moving hardware ecosystem. From new robotics platforms to AI and IoT hardware, Sinion sources, evaluates and tailors the latest Chinese innovations for the Middle East, Africa and Pakistan, so our classrooms run on technology that is both cutting-edge and regionally fit.",
      facts: [
        { n: "R&D",       l: "In China" },
        { n: "Emerging",  l: "Technologies" },
        { n: "Region",    l: "Tailored" },
      ],
      what: ["China R&D", "Emerging-Tech Access", "Hardware Sourcing", "Regional Tailoring"],
      url: "#",
    },
  ];
  return (
    <section className="rm-partners-page" data-screen-label="03 Partners">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Our International Partners"
          heading="The institutions our standard rests on."
          lead="Each partner anchors a different layer of Robotmea's work — accreditation, hardware, curriculum, capital, connectivity. Together they form the global ecosystem that gives classrooms across Pakistan, the Middle East and Africa world-class footing."
        />
        <div style={{ marginTop: 16 }}>
          {partners.map(p => (
            <article key={p.name} className="rm-pcard" style={{ "--accent": p.c }}>
              <div className="rm-pcard__logo-frame">
                <span className="rm-pcard__country-pill">{p.country}</span>
                <img src={p.logo} alt={p.name} className="rm-pcard__logo" />
              </div>
              <div className="rm-pcard__body">
                <div className="rm-pcard__role">{p.role}</div>
                <h3 className="rm-pcard__name">{p.name}</h3>
                <p className="rm-pcard__strap">{p.strap}</p>
                <p className="rm-pcard__lead">{p.lead}</p>
                <div className="rm-pcard__facts">
                  {p.facts.map(f => (
                    <div key={f.l} className="rm-pcard__fact">
                      <div className="rm-pcard__fact-n">{f.n}</div>
                      <div className="rm-pcard__fact-l">{f.l}</div>
                    </div>
                  ))}
                </div>
                <div className="rm-pcard__what">
                  {p.what.map(w => <span key={w} className="rm-pcard__tag">{w}</span>)}
                </div>
                {p.url && p.url !== "#" && (
                  <a href={p.url} target="_blank" rel="noreferrer" className="rm-pcard__link">
                    Visit Partner
                    <svg viewBox="0 0 24 24"><polyline points="7 17 17 7"/><polyline points="7 7 17 7 17 17"/></svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Accreditations & Certifications ============ */
function IntlAccreds() {
  const items = [
    {
      tag: "Accreditation",
      title: "Robotron, South Korea",
      body: "Robotmea is officially accredited by Robotron — every IERDG diploma, ETM school standard, and curriculum we publish carries the Robotron standard.",
      icon: <svg viewBox="0 0 24 24"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>,
    },
    {
      tag: "Quality Mark",
      title: "ISO 9001 — Quality Management",
      body: "Our hardware and curriculum partners operate to ISO 9001 quality management standards, audited annually.",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M8 13l-2 8 6-3 6 3-2-8"/></svg>,
    },
    {
      tag: "Product Safety",
      title: "CE Marking — European Conformity",
      body: "All electronic kits in our deployment meet European Conformity standards for health, safety and environmental protection.",
      icon: <svg viewBox="0 0 24 24"><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"/><path d="M9 9l-1 6M14 9l-1 6M16 9h-3M16 12h-3"/></svg>,
    },
    {
      tag: "Electromagnetic",
      title: "FCC Certified",
      body: "Federal Communications Commission certification for electromagnetic emissions on connected classroom hardware.",
      icon: <svg viewBox="0 0 24 24"><path d="M5 12a7 7 0 0 1 14 0"/><path d="M2 12a10 10 0 0 1 20 0"/><circle cx="12" cy="12" r="2"/></svg>,
    },
    {
      tag: "Curriculum Alignment",
      title: "Pakistan National Curriculum",
      body: "Every Robotmea curriculum is mapped to NCP learning outcomes, ensuring full continuity with national academic frameworks.",
      icon: <svg viewBox="0 0 24 24"><path d="M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"/></svg>,
    },
    {
      tag: "Methodology",
      title: "STEAM + PBIL Standard",
      body: "Programmes are delivered to a published STEAM + Project-Based Inquiry Learning framework — the same standard adopted in Korean public schools.",
      icon: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M5 19l2-2M17 7l2-2"/></svg>,
    },
    {
      tag: "Government R&D",
      title: "Korean Ministry-Backed",
      body: "Partner companies selected for the Ministry of Knowledge Economy's Next-Generation Digital Leader Development Program.",
      icon: <svg viewBox="0 0 24 24"><path d="M3 21V8l9-5 9 5v13"/><path d="M9 21V12h6v9"/></svg>,
    },
    {
      tag: "Teacher Development",
      title: "Faculty Development Cell",
      body: "Every Robotmea-partnered school operates an FDC — quarterly classroom audits, continuous CPD, peer review built into the standard.",
      icon: <svg viewBox="0 0 24 24"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"/><path d="M22 12l-3 3-2-2"/></svg>,
    },
  ];
  return (
    <section className="rm-accreds" data-screen-label="04 Accreds">
      <div className="rm-container rm-accreds__inner">
        <RM_Divider dark
          eyebrow="Accreditations & Certifications"
          heading="The credentials behind every Robotmea programme."
          lead="The marks our partners carry. The standards we deliver to. The published rubric we are accountable against."
        />
        <div className="rm-accreds__grid">
          {items.map(it => (
            <div key={it.title} className="rm-accred">
              <div className="rm-accred__icon">{it.icon}</div>
              <div className="rm-accred__tag">{it.tag}</div>
              <h3 className="rm-accred__title">{it.title}</h3>
              <p className="rm-accred__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ Global Presence — map + footprint list ============ */
function IntlPresence() {
  const places = [
    { c: "var(--rm-orange)", flag: "PK", where: "Pakistan", what: "Delivery Headquarters · ETM Schools" },
    { c: "var(--rm-blue)",   flag: "KR", where: "Republic of Korea", what: "Robotron · Neopia · MiniRobot" },
    { c: "var(--rm-red)",    flag: "AE", where: "United Arab Emirates", what: "TDME — Parent Group, MENA Office" },
    { c: "var(--rm-green)",  flag: "CN", where: "China", what: "Industry & Manufacturing Partners" },
    { c: "var(--rm-blue)",   flag: "INTL", where: "Cross-Border", what: "esim·gen — Connectivity Across Markets" },
  ];
  return (
    <section className="rm-presence" data-screen-label="05 Presence">
      <div className="rm-container">
        <RM_Divider
          eyebrow="Our Global Footprint"
          heading="Where the network runs."
          lead="Robotmea is operated from Pakistan, anchored in Korea, capitalised from the UAE, manufactured through China, and connected globally — a deliberate cross-border architecture that gives students across Pakistan, the Middle East and Africa access to the world's leading EdTech infrastructure."
        />
        <div className="rm-presence__layout">
          <div className="rm-presence__map">
            <svg viewBox="0 0 800 420" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <linearGradient id="mapBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"   stopColor="#f3f6f9"/>
                  <stop offset="100%" stopColor="#e8eef4"/>
                </linearGradient>
              </defs>
              <rect width="800" height="420" rx="16" fill="url(#mapBg)"/>
              {/* Simplified abstract world (continents) */}
              <g fill="#cbd6df" opacity=".82">
                {/* Americas */}
                <path d="M70 110 Q90 100 110 110 L130 160 Q135 200 120 230 L100 260 Q70 290 90 320 L110 340 L80 360 L60 340 Q50 300 60 270 Q40 230 60 190 Q60 150 70 110 Z"/>
                {/* Europe */}
                <path d="M340 100 Q360 90 390 95 Q420 100 440 120 L450 150 Q435 170 410 175 L380 170 Q360 165 350 145 Q335 125 340 100 Z"/>
                {/* Africa */}
                <path d="M390 180 Q420 175 440 195 L460 230 Q465 270 450 300 L425 340 Q400 350 380 330 Q360 300 365 270 Q370 230 390 180 Z"/>
                {/* Asia */}
                <path d="M460 100 Q510 85 560 95 L620 115 Q660 130 680 160 L700 200 Q690 230 660 240 L620 250 Q580 240 540 220 L490 200 Q460 170 460 140 Q455 120 460 100 Z"/>
                {/* Oceania */}
                <path d="M640 290 Q670 285 700 295 L720 310 Q715 335 690 340 Q655 340 645 320 Q635 305 640 290 Z"/>
              </g>
              {/* Connection arcs from Pakistan hub to other markers */}
              <g fill="none" stroke="#ff870b" strokeWidth="1.8" strokeLinecap="round" opacity=".65" strokeDasharray="3 5">
                <path d="M525 175 Q540 80 660 130"/>
                <path d="M525 175 Q470 130 440 130"/>
                <path d="M525 175 Q540 220 700 310"/>
                <path d="M525 175 Q620 160 660 170"/>
              </g>
              {/* Markers */}
              <g>
                {/* Pakistan — HQ */}
                <circle cx="525" cy="175" r="14" fill="#ff870b" opacity=".25"/>
                <circle cx="525" cy="175" r="7" fill="#ff870b" stroke="white" strokeWidth="3"/>
                <text x="525" y="208" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="11" fontWeight="800" fill="#14202b" letterSpacing="1.5">PAKISTAN · HQ</text>

                {/* Korea */}
                <circle cx="660" cy="130" r="11" fill="#449eb8" opacity=".22"/>
                <circle cx="660" cy="130" r="5.5" fill="#449eb8" stroke="white" strokeWidth="2.5"/>
                <text x="660" y="160" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="800" fill="#14202b" letterSpacing="1.5">KOREA</text>

                {/* UAE */}
                <circle cx="440" cy="200" r="11" fill="#eb4848" opacity=".22"/>
                <circle cx="440" cy="200" r="5.5" fill="#eb4848" stroke="white" strokeWidth="2.5"/>
                <text x="440" y="228" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="800" fill="#14202b" letterSpacing="1.5">UAE</text>

                {/* China */}
                <circle cx="620" cy="160" r="11" fill="#7d9e3e" opacity=".22"/>
                <circle cx="620" cy="160" r="5.5" fill="#7d9e3e" stroke="white" strokeWidth="2.5"/>
                <text x="610" y="190" textAnchor="middle" fontFamily="Montserrat, sans-serif" fontSize="10" fontWeight="800" fill="#14202b" letterSpacing="1.5">CHINA</text>
              </g>
            </svg>
          </div>

          <div className="rm-presence__list">
            {places.map(p => (
              <div key={p.where} className="rm-presence__item" style={{ "--accent": p.c }}>
                <span className="rm-presence__flag">{p.flag}</span>
                <div>
                  <div className="rm-presence__where">{p.where}</div>
                  <div className="rm-presence__what">{p.what}</div>
                </div>
                <span className="rm-presence__dot"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ Become a Partner CTA ============ */
function IntlCTA() {
  return (
    <section className="rm-intl-cta" data-screen-label="06 Become a Partner">
      <div className="rm-container rm-intl-cta__inner">
        <div className="rm-eyebrow rm-eyebrow--center rm-eyebrow--white" style={{ color: "rgba(255,255,255,.92)" }}>
          Become a Partner
        </div>
        <h2 className="rm-intl-cta__h">
          Plug into the Robotmea<br />ecosystem.
        </h2>
        <p className="rm-intl-cta__sub">
          Are you a research institution, technology company, hardware innovator, or chamber of commerce that wants to plug into a 30+ country EdTech network? COPR Nexus runs partner intake — start the conversation today.
        </p>
        <div style={{ display: "inline-flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
          <a href="contact.html" className="rm-btn rm-btn--primary rm-btn--lg">
            Talk to COPR Nexus<span className="rm-btn__arrow">→</span>
          </a>
          <a href="copr-nexus.html" className="rm-btn rm-btn--ghost-light rm-btn--lg">
            Explore COPR Nexus
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { IntlHero, IntlMetrics, IntlPartners, IntlAccreds, IntlPresence, IntlCTA });
