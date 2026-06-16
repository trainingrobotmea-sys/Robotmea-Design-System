/* global React */

/* ============================================================
   Header — sticky top nav, shared across all pages
   ============================================================ */
function RM_Header({ active }) {
  const items = [
    { label: "Home", href: "index.html", key: "home" },
    { label: "IERDG", href: "institute.html", key: "institute", dropdown: [
      { label: "K-12 Program", href: "institute.html#k12" },
      { label: "ETM", href: "etm.html" },
      { label: "FDC", href: "institute.html#fdc" },
      { label: "RETC", href: "institute.html#retc" },
      { label: "IDP", href: "institute.html#idp" },
    ] },
    { label: "COPR Nexus", href: "copr-nexus.html", key: "copr", dropdown: [
      { label: "Press Release", href: "copr-nexus.html#press-release" },
      { label: "COPR Gallery", href: "copr-nexus.html#copr-gallery" },
      { label: "Flagship Events", href: "copr-nexus.html#flagship-events" },
    ] },
    { label: "International Partners", href: "partners.html", key: "partners" },
    { label: "Our Network", href: "network.html", key: "network" },
    { label: "Contact Us", href: "contact.html", key: "contact" },
  ];
  return (
    <header className="rm-header">
      <div className="rm-pillar-strip"><span></span><span></span><span></span><span></span></div>
      <div className="rm-header__utility">
        <div className="rm-container">
          <div className="rm-utility-row">
            <div className="rm-utility-left">
              <span className="rm-utility-item">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"/></svg>
                +92 51 6128144
              </span>
              <span className="rm-utility-item">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"/></svg>
                info@robotmea.com
              </span>
            </div>
            <div className="rm-utility-locales">Pakistan · China · South Korea · Middle East · Africa</div>
          </div>
        </div>
      </div>
      <div className="rm-header__bar">
        <div className="rm-container">
          <div className="rm-row rm-row--between">
            <a className="rm-brand" href="index.html"><img src={window.__resources.logoFull} alt="Robotmea" /></a>
            <nav className="rm-nav">
              {items.map(it => (
                it.dropdown ? (
                  <div key={it.key} className="rm-nav__item-wrap">
                    <a href={it.href}
                       className={"rm-nav__item rm-nav__item--caret " + (active === it.key ? "is-active" : "")}>
                      {it.label}
                      <svg className="rm-nav__caret" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                    </a>
                    <div className="rm-nav__dropdown">
                      {it.dropdown.map(d => (
                        <a key={d.label} href={d.href} className="rm-nav__dropdown-item">{d.label}</a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={it.key} href={it.href}
                     className={"rm-nav__item " + (active === it.key ? "is-active" : "")}>
                    {it.label}
                  </a>
                )
              ))}
            </nav>
            <div className="rm-header__actions">
              <button className="rm-search-btn" aria-label="Search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
              </button>
              <a href="#" className="rm-btn rm-btn--primary rm-btn--sm rm-btn--pill" title="IERDG Concept Deck (PDF) — link coming soon">
                IERDG Concept Deck<span className="rm-btn__arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ============================================================
   Brand divider — 4-tick + eyebrow + heading
   ============================================================ */
function RM_Divider({ eyebrow, heading, lead, align = "center", dark = false }) {
  return (
    <div className={"rm-divider " + (align === "left" ? "rm-divider--left" : "")}>
      <div className="rm-divider__ticks">
        <span></span><span></span><span></span><span></span>
      </div>
      {eyebrow && <div className={"rm-eyebrow " + (align === "center" ? "rm-eyebrow--center " : "") + (dark ? "rm-eyebrow--white" : "")}>{eyebrow}</div>}
      {heading && <h2 className={"rm-h2 " + (dark ? "rm-h2--on-dark" : "")} style={{ marginTop: 14 }}>{heading}</h2>}
      {lead && <p className={"rm-lead " + (dark ? "rm-lead--on-dark" : "")} style={{ marginTop: 18 }}>{lead}</p>}
    </div>
  );
}

/* ============================================================
   Triple-credential badge — used everywhere
   ============================================================ */
function RM_Credentials({ variant = "ghost", layout = "row" }) {
  const items = [
    { color: "orange", text: "Developed by IERDG" },
    { color: "blue",   text: "Powered by ETM on South Korean Educational Standards" },
    { color: "green",  text: "Accredited by Robotron, South Korea" },
  ];
  return (
    <div className={[
      "rm-credentials",
      variant === "solid" ? "rm-credentials--solid" : "",
      layout === "stacked" ? "rm-credentials--stacked" : "",
    ].join(" ")}>
      {items.map((it, i) => (
        <span key={i} className={"rm-credential rm-credential--" + it.color}>
          <span className="rm-credential__dot"></span>{it.text}
        </span>
      ))}
    </div>
  );
}

/* ============================================================
   Footer — shared across all pages
   ============================================================ */
function RM_Footer() {
  const cols = [
    { h: "Company",  items: [
      ["About Robotmea", "institute.html"],
      ["IERDG", "institute.html"],
      ["COPR Nexus", "copr-nexus.html"],
      ["Careers", "contact.html"],
    ]},
    { h: "Programs", items: [
      ["K-12 Program", "institute.html#k12"],
      ["ETM", "etm.html"],
      ["Robotmea Emerging Tech Centre", "institute.html#retc"],
      ["Faculty Development Cell", "institute.html#fdc"],
      ["International Diploma Program", "institute.html#idp"],
    ]},
    { h: "Network",  items: [
      ["International Partners", "partners.html"],
      ["Our Network", "network.html"],
      ["ETM Schools", "etm.html"],
      ["Become a Partner", "contact.html"],
    ]},
    { h: "Connect",  items: [
      ["Contact Us", "contact.html"],
      ["Press / Media", "copr-nexus.html"],
      ["Investor Pack", "etm.html"],
      ["Newsletter", "contact.html"],
    ]},
  ];
  return (
    <footer className="rm-footer">
      <div className="rm-pillar-strip rm-footer__pillar-strip"><span></span><span></span><span></span><span></span></div>
      <div className="rm-container">
        <div className="rm-footer__top">
          <div className="rm-footer__brand">
            <img src={window.__resources.logoFull} alt="Robotmea" />
            <p>Robotmea is an International EdTech authority with 04 R&amp;D Arms, 01 Institute, Emerging Technologies Centre, ETM Schools Network and Fleet Network of Discovery and Innovation hubs for Emerging Technologies (AI, Robotics, AR/VR, Simulation) and STEAM Education — accredited by Robotron, South Korea, in the Middle East, Africa and Pakistan region.</p>
            <div className="rm-footer__statement">
              "Developed by IERDG, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea."
            </div>
            <div className="rm-footer__social">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="YouTube">YT</a>
              <a href="#" aria-label="Facebook">f</a>
            </div>
          </div>
          <div className="rm-footer__cols">
            {cols.map(c => (
              <div key={c.h} className="rm-footer__col">
                <div className="rm-footer__h">{c.h}</div>
                {c.items.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="rm-footer__bottom">
          <span>© {new Date().getFullYear()} Robotmea · A Time Dimension Group Company</span>
          <span>Privacy · Terms · Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   Page-stub — shared placeholder for not-yet-built pages
   ============================================================ */
function RM_PageStub({ eyebrow, title, body, primaryCta = "Back to Home", primaryHref = "index.html" }) {
  return (
    <section className="rm-stub">
      <div className="rm-container rm-container--narrow">
        <div className="rm-eyebrow rm-eyebrow--center rm-stub__eyebrow">{eyebrow}</div>
        <h1 className="rm-h1 rm-stub__h1">{title}</h1>
        <p className="rm-stub__body">{body}</p>
        <a href={primaryHref} className="rm-btn rm-btn--primary">{primaryCta}<span className="rm-btn__arrow">→</span></a>
      </div>
    </section>
  );
}

Object.assign(window, {
  RM_Header, RM_Footer, RM_Divider, RM_Credentials, RM_PageStub,
});
