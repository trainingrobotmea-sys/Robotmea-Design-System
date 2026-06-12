/* @ds-bundle: {"format":3,"namespace":"RobotmeaDesignSystem_8f17a4","components":[],"sourceHashes":{"ui_kits/website/Footer.jsx":"f16db1e2d0e3","ui_kits/website/Header.jsx":"57f579da475c","ui_kits/website/Hero.jsx":"42fe87dc307c","ui_kits/website/Programs.jsx":"4a1fa48609a2","ui_kits/website/WhoWeAre.jsx":"541da31487b5","website/common.jsx":"a9fd6cbcc581","website/contact-sections.jsx":"a8757327c140","website/copr-finder.jsx":"0c6eb3d47817","website/copr-sections.jsx":"a1d939d2b854","website/etm-sections.jsx":"605a71200ae7","website/home-sections.jsx":"58d84a49c40b","website/institute-sections.jsx":"26bbad13e9c9","website/intl-sections.jsx":"36bc4886696f","website/network-sections.jsx":"28957d5470be","website/standalone-common.jsx":"9d4f97efa42c","website/standalone-home.jsx":"aa011f717ece"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RobotmeaDesignSystem_8f17a4 = window.RobotmeaDesignSystem_8f17a4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */
function Testimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--blue"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_BrandDivider, {
    eyebrow: "What People Say",
    heading: "Voices From The Field"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial rm-mt-10"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial__mark"
  }, "\""), /*#__PURE__*/React.createElement("blockquote", {
    className: "rm-testimonial__quote"
  }, "Robotmea's curriculum has changed what our students think is possible. In two terms, a class that had never touched a circuit board was prototyping IoT solutions for our city."), /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-avatar"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial__name"
  }, "Dr. Fatima Al-Mansoori"), /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial__role"
  }, "Principal \xB7 Dubai Future Academy"))))));
}
window.RM_Testimonial = Testimonial;
function PartnerStrip() {
  const partners = ["UNESCO", "Arduino", "Microsoft", "LEGO Education", "Ministry of Education UAE", "Time Dimension ME"];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-partners__label"
  }, "As Featured / Partnered With"), /*#__PURE__*/React.createElement("div", {
    className: "rm-partners__row"
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    className: "rm-partners__logo"
  }, p)))));
}
window.RM_PartnerStrip = PartnerStrip;
function Footer() {
  const cols = [{
    h: "Company",
    items: ["Who We Are", "Founder's Note", "Careers", "Contact"]
  }, {
    h: "Programs",
    items: ["School Program", "Technical College", "Madrassa Reform", "Hi-Tech School"]
  }, {
    h: "Centres",
    items: ["Discovery & Innovation Hub", "Tech Centers", "Innovation & Entrepreneurship"]
  }, {
    h: "Connect",
    items: ["LinkedIn", "Instagram", "YouTube", "Newsletter"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "rm-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Robotmea"
  }), /*#__PURE__*/React.createElement("p", null, "Transforming the future of youth through STEAM, robotics, and AI education."), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__social"
  }, /*#__PURE__*/React.createElement("span", null, "in"), /*#__PURE__*/React.createElement("span", null, "X"), /*#__PURE__*/React.createElement("span", null, "\u25B6"), /*#__PURE__*/React.createElement("span", null, "\uD83D\uDCF7"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "rm-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__h"
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#"
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Robotmea \xB7 A Time Dimension Middle East Company"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookie Policy"))));
}
window.RM_Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* global React */
const {
  useState
} = React;
function Header({
  active = "Home"
}) {
  const items = ["Home", "Who We Are", "Programs", "Founder's Note", "Partners", "Contact"];
  return /*#__PURE__*/React.createElement("header", {
    className: "rm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-header__utility"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-row rm-row--between"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, "\uD83D\uDCDE +971 4 123 4567"), /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, "\u2709 info@robotmea.com")), /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-right"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, "Dubai \xB7 USA \xB7 Pakistan \xB7 S. Korea \xB7 Tanzania")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-row rm-row--between"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rm-brand",
    href: "#"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-full.png",
    alt: "Robotmea"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "rm-nav"
  }, items.map(label => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    className: "rm-nav__item " + (active === label ? "is-active" : "")
  }, label))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rm-btn rm-btn--primary rm-btn--sm"
  }, "Enroll Now"))));
}
window.RM_Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__photo",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-tick rm-tick--orange"
  }), /*#__PURE__*/React.createElement("span", null, "STEAM \xB7 Robotics \xB7 AI")), /*#__PURE__*/React.createElement("h1", {
    className: "rm-hero__title"
  }, "Transforming", /*#__PURE__*/React.createElement("br", null), "The Future ", /*#__PURE__*/React.createElement("span", {
    className: "rm-hero__title-accent"
  }, "Of Youth")), /*#__PURE__*/React.createElement("p", {
    className: "rm-hero__lead"
  }, "Empowering the next generation with 21st-century skills through STEAM, robotics, and AI \u2014 delivered across schools, technical colleges, and innovation hubs in five countries."), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Explore Programs \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Partner With Us"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__scroll"
  }, "SCROLL \u2193"));
}
window.RM_Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Programs.jsx
try { (() => {
/* global React */
function BrandDivider({
  eyebrow,
  heading,
  lead,
  align = "center"
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rm-divider rm-divider--" + align
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-divider__ticks"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--rm-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--rm-orange)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--rm-green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--rm-red)"
    }
  })), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "rm-divider__eyebrow"
  }, eyebrow), heading && /*#__PURE__*/React.createElement("h2", {
    className: "rm-divider__heading"
  }, heading), lead && /*#__PURE__*/React.createElement("p", {
    className: "rm-divider__lead"
  }, lead));
}
window.RM_BrandDivider = BrandDivider;
function Programs() {
  const items = [{
    color: "blue",
    tag: "K-12",
    title: "School Program",
    blurb: "A complete K-12 STEAM and robotics curriculum, delivered alongside your school's existing programme.",
    icon: "🎓"
  }, {
    color: "orange",
    tag: "Upper-Secondary",
    title: "Technical College",
    blurb: "Applied-tech pipeline for upper-secondary students entering industry or higher education.",
    icon: "🛠"
  }, {
    color: "green",
    tag: "Modernization",
    title: "Madrassa Reform",
    blurb: "Integrated STEAM, language, and digital-literacy track for traditional religious schools.",
    icon: "📘"
  }, {
    color: "red",
    tag: "Extracurricular",
    title: "Robotics & STEAM Club",
    blurb: "After-school club model: hardware kits, mentor-led projects, competition pathway.",
    icon: "⚙"
  }, {
    color: "blue",
    tag: "Full School",
    title: "Hi-Tech School",
    blurb: "A full school model built ground-up around hands-on tech, makerspaces, and project learning.",
    icon: "🏫"
  }, {
    color: "orange",
    tag: "Hub",
    title: "Discovery & Innovation Hub",
    blurb: "Community-facing makerspace and incubation centre — robotics labs, AI studios, fab tools.",
    icon: "💡"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_BrandDivider, {
    eyebrow: "What We Offer",
    heading: "Our Programs",
    lead: "A portfolio of programs designed for every stage of the student journey \u2014 from primary school to industry-ready graduate."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-grid rm-grid--3 rm-mt-12"
  }, items.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.title,
    className: "rm-program rm-program--" + p.color
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-program__icon rm-program__icon--" + p.color
  }, p.icon), /*#__PURE__*/React.createElement("span", {
    className: "rm-chip rm-chip--" + p.color
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "rm-program__title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-program__blurb"
  }, p.blurb), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rm-program__link"
  }, "Learn more \u2192"))))));
}
window.RM_Programs = Programs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhoWeAre.jsx
try { (() => {
/* global React */
function StatsStrip() {
  const stats = [{
    n: "200+",
    l: "Schools"
  }, {
    n: "05",
    l: "Countries"
  }, {
    n: "700+",
    l: "Teachers Trained"
  }, {
    n: "5K+",
    l: "Projects Delivered"
  }, {
    n: "35K+",
    l: "Students Reached"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-stats__grid"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "rm-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__l"
  }, s.l)))));
}
window.RM_StatsStrip = StatsStrip;
function WhoWeAre() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--paper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-two-col__media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-grid__a"
  }, "STUDENT WORKSHOP"), /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-grid__b"
  }, "ROBOTICS LAB"), /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-grid__c"
  }, "CLASSROOM")), /*#__PURE__*/React.createElement("div", {
    className: "rm-two-col__badge"
  }, /*#__PURE__*/React.createElement("strong", null, "Since 2013"), /*#__PURE__*/React.createElement("span", null, "Empowering youth across 5 countries"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-two-col__copy"
  }, /*#__PURE__*/React.createElement(RM_BrandDivider, {
    align: "left",
    eyebrow: "Who We Are",
    heading: "A Mission to Empower"
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-lead"
  }, "Robotmea is the EdTech arm of Time Dimension Middle East. We design and deliver STEAM, robotics, and AI programs that prepare young people for a workforce \u2014 and a world \u2014 that no longer exists as it once did."), /*#__PURE__*/React.createElement("p", {
    className: "rm-body"
  }, "Our programs are co-built with ministries of education, school boards, and industry partners. They are deliberately hands-on, industry-aligned, and certified \u2014 because the future is built, not taught."), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar__dot",
    style: {
      background: "var(--rm-orange)"
    }
  }), "Curriculum"), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar__dot",
    style: {
      background: "var(--rm-blue)"
    }
  }), "Teacher Training"), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar__dot",
    style: {
      background: "var(--rm-green)"
    }
  }), "Hardware Kits"), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar__dot",
    style: {
      background: "var(--rm-red)"
    }
  }), "Competitions")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "rm-btn rm-btn--primary rm-mt-6"
  }, "Read Our Story \u2192"))));
}
window.RM_WhoWeAre = WhoWeAre;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhoWeAre.jsx", error: String((e && e.message) || e) }); }

// website/common.jsx
try { (() => {
/* global React */

/* ============================================================
   Header — sticky top nav, shared across all pages
   ============================================================ */
function RM_Header({
  active
}) {
  const items = [{
    label: "Home",
    href: "index.html",
    key: "home"
  }, {
    label: "IERDG",
    href: "institute.html",
    key: "institute"
  }, {
    label: "COPR Nexus",
    href: "copr-nexus.html",
    key: "copr"
  }, {
    label: "International Partners",
    href: "partners.html",
    key: "partners"
  }, {
    label: "Our Network",
    href: "network.html",
    key: "network"
  }, {
    label: "Contact Us",
    href: "contact.html",
    key: "contact"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "rm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__utility"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), "+92 51 6128144"), /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"
  })), "info@robotmea.com")), /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-locales"
  }, "Islamabad \xB7 Dubai \xB7 Seoul \xB7 Shanghai")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-row rm-row--between"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rm-brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-full.png",
    alt: "Robotmea"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "rm-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    href: it.href,
    className: "rm-nav__item " + (active === it.key ? "is-active" : "")
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-search-btn",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "etm.html",
    className: "rm-btn rm-btn--primary rm-btn--sm rm-btn--pill"
  }, "ETM Deck", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))))));
}

/* ============================================================
   Brand divider — 4-tick + eyebrow + heading
   ============================================================ */
function RM_Divider({
  eyebrow,
  heading,
  lead,
  align = "center",
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rm-divider " + (align === "left" ? "rm-divider--left" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-divider__ticks"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow " + (align === "center" ? "rm-eyebrow--center " : "") + (dark ? "rm-eyebrow--white" : "")
  }, eyebrow), heading && /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 " + (dark ? "rm-h2--on-dark" : ""),
    style: {
      marginTop: 14
    }
  }, heading), lead && /*#__PURE__*/React.createElement("p", {
    className: "rm-lead " + (dark ? "rm-lead--on-dark" : ""),
    style: {
      marginTop: 18
    }
  }, lead));
}

/* ============================================================
   Triple-credential badge — used everywhere
   ============================================================ */
function RM_Credentials({
  variant = "ghost",
  layout = "row"
}) {
  const items = [{
    color: "orange",
    text: "A Project of Robotmea"
  }, {
    color: "blue",
    text: "Powered by ETM on South Korean Educational Standards"
  }, {
    color: "green",
    text: "Accredited by Robotron, South Korea"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: ["rm-credentials", variant === "solid" ? "rm-credentials--solid" : "", layout === "stacked" ? "rm-credentials--stacked" : ""].join(" ")
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "rm-credential rm-credential--" + it.color
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-credential__dot"
  }), it.text)));
}

/* ============================================================
   Footer — shared across all pages
   ============================================================ */
function RM_Footer() {
  const cols = [{
    h: "Company",
    items: [["About Robotmea", "institute.html"], ["IERDG", "institute.html"], ["COPR Nexus", "copr-nexus.html"], ["Careers", "contact.html"]]
  }, {
    h: "Programs",
    items: [["K-12 Program", "institute.html#k12"], ["ETM", "etm.html"], ["Robotmea Emerging Tech Centre", "institute.html#retc"], ["Faculty Development Cell", "institute.html#fdc"], ["International Diploma Program", "institute.html#idp"]]
  }, {
    h: "Network",
    items: [["International Partners", "partners.html"], ["Our Network", "network.html"], ["ETM Schools", "etm.html"], ["Become a Partner", "contact.html"]]
  }, {
    h: "Connect",
    items: [["Contact Us", "contact.html"], ["Press / Media", "copr-nexus.html"], ["Investor Pack", "etm.html"], ["Newsletter", "contact.html"]]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "rm-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip rm-footer__pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/logo-full.png",
    alt: "Robotmea"
  }), /*#__PURE__*/React.createElement("p", null, "Robotmea is Pakistan's EdTech authority for Emerging Technologies (AI, Robotics, AR/VR, Simulation) and STEAM Education \u2014 accredited by Robotron, South Korea, and the parent of the Educational Transformation Movement."), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__statement"
  }, "\"A Project of Robotmea \xB7 Powered by ETM on South Korean Educational Standards \xB7 Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, "in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, "IG"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, "YT"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, "f"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "rm-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__h"
  }, c.h), c.items.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href
  }, label)))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Robotmea \xB7 A Time Dimension Group Company"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookie Policy"))));
}

/* ============================================================
   Page-stub — shared placeholder for not-yet-built pages
   ============================================================ */
function RM_PageStub({
  eyebrow,
  title,
  body,
  primaryCta = "Back to Home",
  primaryHref = "index.html"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-stub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-container--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-stub__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "rm-h1 rm-stub__h1"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "rm-stub__body"
  }, body), /*#__PURE__*/React.createElement("a", {
    href: primaryHref,
    className: "rm-btn rm-btn--primary"
  }, primaryCta, /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))));
}
Object.assign(window, {
  RM_Header,
  RM_Footer,
  RM_Divider,
  RM_Credentials,
  RM_PageStub
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/common.jsx", error: String((e && e.message) || e) }); }

// website/contact-sections.jsx
try { (() => {
/* global React */

/* ============ Contact Hero ============ */
function ContactHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-contact-hero",
    "data-screen-label": "01 Contact Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-contact-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h1", {
    className: "rm-contact-hero__title"
  }, "Let's Build", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-contact-hero__title-accent"
  }, "Something Together.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-contact-hero__lead"
  }, "Whether you're a parent, a principal, an investor, a government partner, or press \u2014 there's a desk at Robotmea for you. Pick the right door below or fill in the form and we'll route your message to the right wing.")));
}

/* ============ Three Front Doors ============ */
function ContactDoors() {
  const doors = [{
    c: "var(--rm-blue)",
    tag: "Institute Desk",
    name: "IERDG",
    for: "For principals, ETM investors, diploma applicants, teachers and parents — anything connected to the Institute or one of its five programs.",
    email: "institute@robotmea.com",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    }))
  }, {
    c: "var(--rm-orange)",
    tag: "Communications Desk",
    name: "COPR Nexus",
    for: "For press, government, partnerships, events and anything COPR Nexus handles — including international partner intake.",
    email: "nexus@robotmea.com",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    }))
  }, {
    c: "var(--rm-green)",
    tag: "General Enquiries",
    name: "Robotmea HQ",
    for: "Not sure which desk? Drop us a line here and we'll route it. Careers, sponsorships, and general questions all welcome.",
    email: "info@robotmea.com",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-doors",
    "data-screen-label": "02 Front Doors"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Three Front Doors",
    heading: "Pick the right desk.",
    lead: "Each desk is staffed by a different team. Picking the right one shaves days off your reply."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-doors__grid"
  }, doors.map(d => /*#__PURE__*/React.createElement("a", {
    key: d.email,
    href: `mailto:${d.email}`,
    className: "rm-door",
    style: {
      "--accent": d.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-door__icon"
  }, d.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-door__tag"
  }, d.tag), /*#__PURE__*/React.createElement("h3", {
    className: "rm-door__name"
  }, d.name), /*#__PURE__*/React.createElement("p", {
    className: "rm-door__for"
  }, d.for), /*#__PURE__*/React.createElement("span", {
    className: "rm-door__email"
  }, d.email, /*#__PURE__*/React.createElement("span", {
    className: "rm-door__email-arrow"
  }, "\u2192")))))));
}

/* ============ Form + Offices Sidebar ============ */
function ContactForm() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-contact-form-section",
    "data-screen-label": "03 Contact Form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Write To Us",
    heading: "Send us a message.",
    lead: "Eight fields. Two minutes. Our team responds within two working days."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-contact-form-section__layout"
  }, /*#__PURE__*/React.createElement("form", {
    className: "rm-form",
    onSubmit: e => {
      e.preventDefault();
      alert("Thanks — your message has been queued. Wire this form to /api/contact in production.");
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-form__head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "rm-form__h"
  }, "Tell us about your enquiry"), /*#__PURE__*/React.createElement("p", {
    className: "rm-form__sub"
  }, "Required fields marked with ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__counter"
  }, "8 fields \xB7 ~2 min")), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Full Name ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "rm-form__input",
    type: "text",
    placeholder: "e.g. Asma Khan",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Email ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("input", {
    className: "rm-form__input",
    type: "email",
    placeholder: "you@school.edu.pk",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "rm-form__input",
    type: "tel",
    placeholder: "+92 ..."
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Organisation"), /*#__PURE__*/React.createElement("input", {
    className: "rm-form__input",
    type: "text",
    placeholder: "Your school / company"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Country ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    className: "rm-form__select",
    required: true,
    defaultValue: "Pakistan"
  }, /*#__PURE__*/React.createElement("option", null, "Pakistan"), /*#__PURE__*/React.createElement("option", null, "United Arab Emirates"), /*#__PURE__*/React.createElement("option", null, "Saudi Arabia"), /*#__PURE__*/React.createElement("option", null, "Republic of Korea"), /*#__PURE__*/React.createElement("option", null, "China"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "I am a\u2026 ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    className: "rm-form__select",
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Pick one\u2026"), /*#__PURE__*/React.createElement("option", null, "Parent"), /*#__PURE__*/React.createElement("option", null, "School Principal / Owner"), /*#__PURE__*/React.createElement("option", null, "Investor"), /*#__PURE__*/React.createElement("option", null, "Teacher"), /*#__PURE__*/React.createElement("option", null, "Government Partner"), /*#__PURE__*/React.createElement("option", null, "Press / Media"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field rm-form__field--full"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "What's this about? ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("select", {
    className: "rm-form__select",
    required: true,
    defaultValue: ""
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Pick the wing\u2026"), /*#__PURE__*/React.createElement("option", null, "IERDG \u2014 Institute (K-12, FDC, RETC, diplomas)"), /*#__PURE__*/React.createElement("option", null, "Educational Transformation Movement (ETM)"), /*#__PURE__*/React.createElement("option", null, "COPR Nexus \u2014 Communications / Press / Partnerships"), /*#__PURE__*/React.createElement("option", null, "International Partner Intake"), /*#__PURE__*/React.createElement("option", null, "Careers"), /*#__PURE__*/React.createElement("option", null, "General Enquiry"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__field rm-form__field--full"
  }, /*#__PURE__*/React.createElement("label", {
    className: "rm-form__label"
  }, "Message ", /*#__PURE__*/React.createElement("span", {
    className: "rm-form__req"
  }, "*")), /*#__PURE__*/React.createElement("textarea", {
    className: "rm-form__textarea",
    placeholder: "Tell us what you'd like to discuss \u2014 feasibility session, partnership, diploma admissions, press enquiry\u2026",
    required: true
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rm-form__footer"
  }, /*#__PURE__*/React.createElement("p", {
    className: "rm-form__legal"
  }, "By submitting this form you agree to be contacted by Robotmea. See our ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "privacy policy"), "."), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Send Message", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-c-side"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-office",
    style: {
      "--accent": "var(--rm-orange)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-office__flag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-office__flag-pill"
  }, "PK"), /*#__PURE__*/React.createElement("span", {
    className: "rm-office__tag"
  }, "Headquarters")), /*#__PURE__*/React.createElement("h4", {
    className: "rm-office__h"
  }, "Pakistan Office"), /*#__PURE__*/React.createElement("p", {
    className: "rm-office__addr"
  }, "Plot 1, Street 1, F-Block, H-13", /*#__PURE__*/React.createElement("br", null), "Paris City, Islamabad \u2014 near NUST"), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+92512301401"
  }, "+92 51 230 1401")), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+923135722409"
  }, "+92 313 5722409")), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@robotmea.com"
  }, "info@robotmea.com"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-office",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-office__flag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-office__flag-pill"
  }, "AE"), /*#__PURE__*/React.createElement("span", {
    className: "rm-office__tag"
  }, "Regional Office")), /*#__PURE__*/React.createElement("h4", {
    className: "rm-office__h"
  }, "Dubai Office"), /*#__PURE__*/React.createElement("p", {
    className: "rm-office__addr"
  }, "Time Dimension Middle East", /*#__PURE__*/React.createElement("br", null), "Dubai, United Arab Emirates"), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+971554107053"
  }, "+971 55 410 7053")), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+971527835384"
  }, "+971 52 783 5384")), /*#__PURE__*/React.createElement("div", {
    className: "rm-office__row"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"
  })), /*#__PURE__*/React.createElement("a", {
    href: "mailto:nexus@robotmea.com"
  }, "nexus@robotmea.com"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-c-social"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "rm-c-social__h"
  }, "Follow Robotmea"), /*#__PURE__*/React.createElement("div", {
    className: "rm-c-social__row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rm-c-social__btn",
    href: "https://www.linkedin.com/company/robotmea",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "LinkedIn"
  }, "in"), /*#__PURE__*/React.createElement("a", {
    className: "rm-c-social__btn",
    href: "https://www.facebook.com/robotami/",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Facebook"
  }, "f"), /*#__PURE__*/React.createElement("a", {
    className: "rm-c-social__btn",
    href: "#",
    "aria-label": "Instagram"
  }, "IG"), /*#__PURE__*/React.createElement("a", {
    className: "rm-c-social__btn",
    href: "#",
    "aria-label": "YouTube"
  }, "YT"), /*#__PURE__*/React.createElement("a", {
    className: "rm-c-social__btn",
    href: "#",
    "aria-label": "X / Twitter"
  }, "\uD835\uDD4F")))))));
}

/* ============ Quick-Route Action Cards ============ */
function ContactQuickRoutes() {
  const routes = [{
    c: "var(--rm-orange)",
    h: "ETM Investor",
    sub: "Build a Robotron-certified school under your own name.",
    to: "etm.html",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8l9-5 9 5v13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21V12h6v9"
    }))
  }, {
    c: "var(--rm-blue)",
    h: "Transform My School",
    sub: "The 6-step IERDG plan for principals.",
    to: "institute.html#transform",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    }))
  }, {
    c: "var(--rm-green)",
    h: "Build a Solution",
    sub: "7-step Solution Finder · download a PDF brief.",
    to: "copr-nexus.html#finder",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    }))
  }, {
    c: "var(--rm-red)",
    h: "Careers / HR",
    sub: "Drop your CV to hr@robotmea.com.",
    to: "mailto:hr@robotmea.com",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-quickroutes",
    "data-screen-label": "04 Quick Routes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Skip The Form",
    heading: "Or jump straight to the right path.",
    lead: "If you already know what you need, head there directly."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-quickroutes__grid"
  }, routes.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.h,
    href: r.to,
    className: "rm-qroute",
    style: {
      "--accent": r.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-qroute__icon"
  }, r.icon), /*#__PURE__*/React.createElement("h4", {
    className: "rm-qroute__h"
  }, r.h), /*#__PURE__*/React.createElement("p", {
    className: "rm-qroute__sub"
  }, r.sub), /*#__PURE__*/React.createElement("span", {
    className: "rm-qroute__arrow"
  }, "Open \u2192"))))));
}
Object.assign(window, {
  ContactHero,
  ContactDoors,
  ContactForm,
  ContactQuickRoutes
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/contact-sections.jsx", error: String((e && e.message) || e) }); }

// website/copr-finder.jsx
try { (() => {
/* global React */

/* ============================================================
   COPR Solution Finder — 7-step interactive wizard
   - Q1 supports multi-select
   - Forward navigation blocked on unanswered steps
   - Submits to /api/copr-finder (graceful fallback if absent)
   - Generates a downloadable PDF brief on completion
   ============================================================ */
function CoprFinder() {
  const STEPS = [{
    key: "grade",
    tag: "Grade Range",
    q: "Which grade range(s) are you looking to serve?",
    qsub: "Pick all that apply. We'll layer programmes to match.",
    kind: "multi",
    options: [{
      v: "pre",
      tag: "Q1",
      title: "Pre-Primary Program",
      sub: "Nursery and Prep"
    }, {
      v: "primary",
      tag: "Q1",
      title: "Primary Year Program",
      sub: "Grade 1 to Grade 5"
    }, {
      v: "middle",
      tag: "Q1",
      title: "Middle Year Program",
      sub: "Grade 6 to Grade 8"
    }, {
      v: "higher",
      tag: "Q1",
      title: "Higher Year Program",
      sub: "Grade 9 to Grade 12"
    }]
  }, {
    key: "hardware",
    tag: "Emerging Tech",
    q: "Which emerging technologies hardware do you want to deploy?",
    qsub: "Select one or more. We'll size the Discovery & Innovation Hub or ETM Garage around your selection.",
    kind: "multi",
    options: [{
      v: "robotics",
      tag: "Hardware",
      title: "Robotics",
      sub: "Educational robotics kits, competition platforms, MiniRobot library"
    }, {
      v: "ai",
      tag: "Hardware",
      title: "AI",
      sub: "Edge AI dev kits, classroom AI workbenches, model-training stations"
    }, {
      v: "vr",
      tag: "Hardware",
      title: "Virtual Reality",
      sub: "VR headsets, immersive learning content, AR/VR authoring tools"
    }, {
      v: "3d",
      tag: "Hardware",
      title: "3D Printing & Prototyping",
      sub: "3D printers, laser cutters, CAD workstations, fabrication consumables"
    }]
  }, {
    key: "model",
    tag: "Academic Model",
    q: "Which academic model fits your school's intent?",
    qsub: "Two paths — both fully supported. The difference is how deep the technology runs through the curriculum.",
    kind: "compare",
    options: [{
      v: "addition",
      tag: "Model A · Addition",
      c: "var(--rm-blue)",
      glow: "rgba(68,158,184,.4)",
      title: "Addition of a Subject",
      lead: "Robotmea is added as a stand-alone subject inside your existing curriculum, taught once a week. The rest of the academic plan stays as it is.",
      bullets: ["AI, Robotics & STEAM Lab establishment", "Teacher training on the addition framework", "Lesson plans, scheme of work, teacher's guide", "Rubrics, learning logs, student manuals"],
      time: "Cadence",
      timeValue: "80 min / week"
    }, {
      v: "integration",
      tag: "Model B · Integration",
      c: "var(--rm-orange)",
      glow: "rgba(255,135,11,.45)",
      title: "Integration of a Subject",
      lead: "Technology becomes the centre of the curriculum. Existing subjects (science, math, language, social studies) spin around it through problem-based inquiry learning.",
      bullets: ["Establishment of Discovery & Innovation Hub", "Teacher training on integration methodology", "Master Integration Sheet + Lab Integrated Manual", "Practical workbook + assessment system"],
      time: "Cadence",
      timeValue: "Across all subjects"
    }]
  }, {
    key: "training",
    tag: "Training Mode",
    q: "How would you like us to conduct teacher trainings?",
    qsub: "Three formats — pick the one that fits your team's geography and bandwidth.",
    kind: "single",
    options: [{
      v: "online",
      tag: "Mode 01",
      title: "Online",
      sub: "Live virtual cohorts + on-demand library, ideal for distributed teams"
    }, {
      v: "campus",
      tag: "Mode 02",
      title: "Onsite at Your Campus",
      sub: "Our trainers come to your school for residencies and CPD blocks"
    }, {
      v: "centre",
      tag: "Mode 03",
      title: "Onsite at a Robotmea Centre",
      sub: "Your teachers attend our accredited centres for immersive cohorts"
    }]
  }, {
    key: "me",
    tag: "M&E Support",
    q: "Do you want our team to provide Monitoring & Evaluation support?",
    qsub: "Our M&E wing runs quarterly audits, anonymised central data, and an annual Impact Report you can share with your board and parents.",
    kind: "yn",
    options: [{
      v: "yes",
      tag: "Recommended",
      title: "Yes, include M&E",
      sub: "Quarterly audits + Impact Report + dedicated M&E contact"
    }, {
      v: "no",
      tag: "Not now",
      title: "Skip for now",
      sub: "We can add M&E in a follow-up cycle if your needs change"
    }]
  }, {
    key: "assessment",
    tag: "Assessment Module",
    q: "Would you like to opt for the Robotmea Assessment Module?",
    qsub: "Standardised rubrics, portfolio reviews, and Robotron-aligned skill benchmarks across your cohort.",
    kind: "yn",
    options: [{
      v: "yes",
      tag: "Recommended",
      title: "Yes, add Assessment Module",
      sub: "Robotron-aligned rubrics, portfolio reviews, skill benchmarks"
    }, {
      v: "no",
      tag: "Not now",
      title: "Skip for now",
      sub: "We'll still use our internal assessment toolkit"
    }]
  }, {
    key: "tool",
    tag: "Monitoring Tool",
    q: "Are you interested in the Robotmea Program Monitoring Tool?",
    qsub: "An online platform for real-time programme visibility — attendance, project progress, teacher feedback, parent dashboards. Available at additional cost.",
    kind: "yn",
    options: [{
      v: "yes",
      tag: "Premium",
      title: "Yes, include the Tool",
      sub: "Real-time dashboards, parent visibility, full programme telemetry"
    }, {
      v: "no",
      tag: "Not now",
      title: "Skip for now",
      sub: "Standard reporting only"
    }]
  }];
  const TOTAL = STEPS.length;
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [showSummary, setShowSummary] = React.useState(false);
  const current = STEPS[step];
  const currentAnswer = answers[current.key];
  const isAnswered = s => {
    const a = answers[s.key];
    if (s.kind === "multi") return Array.isArray(a) && a.length > 0;
    return !!a;
  };
  const allAnsweredUpTo = i => STEPS.slice(0, i).every(isAnswered);
  const pick = v => {
    if (current.kind === "multi") {
      const cur = Array.isArray(currentAnswer) ? currentAnswer : [];
      const next = cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v];
      setAnswers({
        ...answers,
        [current.key]: next
      });
    } else {
      setAnswers({
        ...answers,
        [current.key]: v
      });
    }
  };
  const goNext = () => {
    if (!isAnswered(current)) return; // hard-block
    if (step < TOTAL - 1) setStep(step + 1);else setShowSummary(true);
  };
  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };
  const restart = () => {
    setAnswers({});
    setStep(0);
    setShowSummary(false);
  };
  if (showSummary) {
    return /*#__PURE__*/React.createElement(FinderSummary, {
      answers: answers,
      steps: STEPS,
      restart: restart
    });
  }
  const progress = (step + 1) / TOTAL * 100;
  const isSelected = v => {
    if (current.kind === "multi") return Array.isArray(currentAnswer) && currentAnswer.includes(v);
    return currentAnswer === v;
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "finder",
    className: "rm-finder",
    "data-screen-label": "03 Solution Finder"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__intro"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "Solution Finder",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Tell us what you need.", /*#__PURE__*/React.createElement("br", null), "We'll build your package.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-finder__lead"
  }, "Seven short questions. Three minutes. By the end, you'll have a custom Robotmea programme brief \u2014 grade bands, hardware, academic model, training format, and support add-ons \u2014 to share with our team for a discovery call. You'll also be able to download it as a PDF.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__head-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__step-tag"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-finder__step-tag-num"
  }, String(step + 1).padStart(2, "0")), current.tag), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__progress-text"
  }, "Step ", step + 1, " of ", TOTAL)), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__progress-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__progress-fill",
    style: {
      width: progress + "%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__steps"
  }, STEPS.map((s, i) => {
    const done = i < step && isAnswered(s);
    const cur = i === step;
    // Forward jumps only allowed if all previous steps answered.
    const reachable = i <= step || allAnsweredUpTo(i);
    return /*#__PURE__*/React.createElement("button", {
      key: s.key,
      disabled: !reachable,
      className: "rm-finder__dot " + (done ? "is-done " : "") + (cur ? "is-current " : ""),
      onClick: () => reachable && setStep(i),
      "aria-label": s.tag
    }, /*#__PURE__*/React.createElement("span", {
      className: "rm-finder__dot-num"
    }, i + 1));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "rm-finder__q"
  }, current.q), /*#__PURE__*/React.createElement("p", {
    className: "rm-finder__qsub"
  }, current.qsub), current.kind === "compare" ? /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__compare"
  }, current.options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    type: "button",
    className: "rm-finder__compare-card " + (isSelected(o.v) ? "is-selected" : ""),
    style: {
      "--accent": o.c,
      "--accent-glow": o.glow
    },
    onClick: () => pick(o.v)
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__compare-top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__compare-tag"
  }, o.tag), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__compare-check"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })))), /*#__PURE__*/React.createElement("h4", {
    className: "rm-finder__compare-title"
  }, o.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-finder__compare-lead"
  }, o.lead), /*#__PURE__*/React.createElement("ul", {
    className: "rm-finder__compare-bullets"
  }, o.bullets.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, x))), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__compare-time"
  }, /*#__PURE__*/React.createElement("span", null, o.time), /*#__PURE__*/React.createElement("strong", null, o.timeValue))))) : /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__options " + (current.kind === "yn" ? "rm-finder__options--yn" : current.options.length === 3 ? "rm-finder__options--3" : "rm-finder__options--4")
  }, current.options.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.v,
    type: "button",
    className: "rm-finder__opt " + (isSelected(o.v) ? "is-selected" : ""),
    onClick: () => pick(o.v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-finder__opt-check"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "rm-finder__opt-tag"
  }, o.tag), /*#__PURE__*/React.createElement("h4", {
    className: "rm-finder__opt-title"
  }, o.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-finder__opt-sub"
  }, o.sub)))), isAnswered(current) && /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__hint",
    role: "status"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })), current.kind === "multi" ? /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Selected."), " You can pick more than one. Click ", /*#__PURE__*/React.createElement("strong", null, "Continue"), " below when you're done.") : /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Selected."), " Click ", /*#__PURE__*/React.createElement("strong", null, "Continue"), " below to move to the next step."))), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__footer"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-finder__back",
    onClick: goBack,
    disabled: step === 0
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })), "Back"), /*#__PURE__*/React.createElement("button", {
    className: "rm-btn rm-btn--primary rm-finder__next",
    onClick: goNext,
    disabled: !isAnswered(current)
  }, step === TOTAL - 1 ? "See My Solution" : "Continue", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))))));
}

/* ============================================================
   Summary screen — answers + 6-step roadmap + PDF download
   ============================================================ */
function FinderSummary({
  answers,
  steps,
  restart
}) {
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const find = k => {
    const s = steps.find(x => x.key === k);
    const v = answers[k];
    if (!s || !v) return null;
    if (Array.isArray(v)) {
      return v.map(vv => s.options.find(o => o.v === vv)?.title).filter(Boolean).join(" · ");
    }
    return s.options.find(o => o.v === v)?.title;
  };
  const rows = [{
    label: "Grade band(s)",
    value: find("grade") || "—",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    }))
  }, {
    label: "Emerging tech hardware",
    value: find("hardware") || "—",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "4",
      y: "4",
      width: "16",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 8h8M8 12h8M8 16h5"
    }))
  }, {
    label: "Academic model",
    value: find("model") || "—",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    }))
  }, {
    label: "Training mode",
    value: find("training") || "—",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M17 11l3 3 4-5"
    }))
  }, {
    label: "Monitoring & Evaluation",
    value: answers.me === "yes" ? "Included" : "Skip for now",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 3 3 5-6"
    }))
  }, {
    label: "Assessment Module",
    value: answers.assessment === "yes" ? "Included" : "Skip for now",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 11l3 3 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    }))
  }, {
    label: "Program Monitoring Tool",
    value: answers.tool === "yes" ? "Included (premium)" : "Skip for now",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 21h10M12 17v4"
    }))
  }];
  const roadmap = [{
    t: "Contact a Robotmea Representative",
    b: "Our team reaches out within 7 working days with a costed proposal."
  }, {
    t: "Finalize the Program",
    b: "Sign-off on the academic model, hardware list, and rollout schedule."
  }, {
    t: "Establish the Lab",
    b: "We set up the STEAM Lab, Discovery & Innovation Hub, or ETM Garage."
  }, {
    t: "Acquire the Curriculum",
    b: "Globally adopted AI, Robotics & STEAM content delivered to your faculty."
  }, {
    t: "Spare 80 Minutes a Week",
    b: "Teacher training delivered in your chosen format — online or onsite."
  }, {
    t: "Roll Out the Program",
    b: "Launch your future-ready cohort with IERDG monitoring and support."
  }];

  /* ---- POST to backend (graceful failure if endpoint absent) ---- */
  const submit = React.useCallback(() => {
    try {
      const payload = {
        source: "copr-solution-finder",
        submittedAt: new Date().toISOString(),
        answers,
        rows: rows.map(r => ({
          label: r.label,
          value: r.value
        }))
      };
      fetch("/api/copr-finder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }).catch(() => {/* backend may not exist yet */});
    } catch (_) {}
  }, [answers]);
  React.useEffect(() => {
    submit();
  }, [submit]);

  /* ---- PDF generation (uses jsPDF when available) ---- */
  const downloadPDF = () => {
    const {
      jsPDF
    } = window.jspdf || {};
    if (!jsPDF) {
      alert("PDF library is still loading. Try again in a moment.");
      return;
    }
    const doc = new jsPDF({
      unit: "pt",
      format: "a4"
    });
    const W = doc.internal.pageSize.getWidth();
    const M = 56;

    // Top bar
    doc.setFillColor(15, 26, 36);
    doc.rect(0, 0, W, 96, "F");
    doc.setFillColor(255, 135, 11);
    doc.rect(0, 0, W, 6, "F");
    doc.setTextColor(255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("ROBOTMEA", M, 50);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(255, 135, 11);
    doc.text("COPR NEXUS · CUSTOM PROGRAMME BRIEF", M, 70);
    doc.setTextColor(180, 200, 215);
    doc.text(new Date().toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric"
    }), W - M, 70, {
      align: "right"
    });

    // Title
    let y = 140;
    doc.setTextColor(20, 32, 43);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Your Custom Robotmea Programme", M, y);
    y += 14;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(91, 103, 112);
    const lead = "The following selections form the basis for your Robotmea programme proposal. Share this brief with our team to receive a costed proposal within 7 working days.";
    doc.text(doc.splitTextToSize(lead, W - M * 2), M, y + 14);
    y += 50;

    // Selections table
    doc.setDrawColor(221, 227, 232);
    doc.setLineWidth(0.5);
    rows.forEach(r => {
      doc.setFillColor(247, 249, 251);
      doc.rect(M, y, W - M * 2, 36, "F");
      doc.setTextColor(91, 103, 112);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8);
      doc.text(r.label.toUpperCase(), M + 14, y + 14);
      doc.setTextColor(20, 32, 43);
      doc.setFontSize(11);
      doc.text(doc.splitTextToSize(r.value, W - M * 2 - 28), M + 14, y + 28);
      y += 42;
    });

    // Next steps
    y += 14;
    doc.setFillColor(15, 26, 36);
    doc.rect(M, y, W - M * 2, 38, "F");
    doc.setTextColor(255, 135, 11);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("NEXT STEPS · YOUR PATH TO ROLLOUT", M + 14, y + 16);
    doc.setTextColor(255);
    doc.setFontSize(13);
    doc.text("Six steps from this brief to a future-ready cohort.", M + 14, y + 32);
    y += 52;
    roadmap.forEach((s, i) => {
      doc.setFillColor(255, 135, 11);
      doc.circle(M + 14, y + 12, 11, "F");
      doc.setTextColor(255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text(String(i + 1).padStart(2, "0"), M + 14, y + 16, {
        align: "center"
      });
      doc.setTextColor(20, 32, 43);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(11);
      doc.text(s.t, M + 38, y + 12);
      doc.setTextColor(91, 103, 112);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      const body = doc.splitTextToSize(s.b, W - M * 2 - 40);
      doc.text(body, M + 38, y + 28);
      y += 22 + body.length * 12;
    });

    // Footer
    y = Math.max(y + 14, doc.internal.pageSize.getHeight() - 70);
    doc.setDrawColor(221, 227, 232);
    doc.setLineWidth(0.5);
    doc.line(M, y, W - M, y);
    y += 18;
    doc.setTextColor(91, 103, 112);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.text("Robotmea · COPR Nexus · institute@robotmea.com", M, y);
    doc.text("Transforming the Future of Youth", W - M, y, {
      align: "right"
    });
    doc.save("robotmea-programme-brief.pdf");
  };

  /* ---- Generate PDF + email it to COPR Team (no separate download) ---- */
  const generateAndSend = async () => {
    if (sending || sent) return;
    setSending(true);
    try {
      const {
        jsPDF
      } = window.jspdf || {};
      let pdfDataUrl = null;
      if (jsPDF) {
        const doc = new jsPDF({
          unit: "pt",
          format: "a4"
        });
        const W = doc.internal.pageSize.getWidth();
        const M = 56;
        doc.setFillColor(15, 26, 36);
        doc.rect(0, 0, W, 96, "F");
        doc.setFillColor(255, 135, 11);
        doc.rect(0, 0, W, 6, "F");
        doc.setTextColor(255);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(20);
        doc.text("ROBOTMEA", M, 50);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(255, 135, 11);
        doc.text("COPR NEXUS · CUSTOM PROGRAMME BRIEF", M, 70);
        let y = 140;
        doc.setTextColor(20, 32, 43);
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.text("Your Custom Robotmea Programme", M, y);
        y += 30;
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(91, 103, 112);
        const lead = "Brief submitted to the COPR Nexus team. Expect a costed proposal within 7 working days.";
        doc.text(doc.splitTextToSize(lead, W - M * 2), M, y);
        y += 28;
        rows.forEach(r => {
          doc.setFillColor(247, 249, 251);
          doc.rect(M, y, W - M * 2, 36, "F");
          doc.setTextColor(91, 103, 112);
          doc.setFont("helvetica", "bold");
          doc.setFontSize(8);
          doc.text(r.label.toUpperCase(), M + 14, y + 14);
          doc.setTextColor(20, 32, 43);
          doc.setFontSize(11);
          doc.text(doc.splitTextToSize(r.value, W - M * 2 - 28), M + 14, y + 28);
          y += 42;
        });
        pdfDataUrl = doc.output("datauristring");
      }
      try {
        await fetch("/api/copr-finder/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            source: "copr-solution-finder",
            submittedAt: new Date().toISOString(),
            answers,
            rows: rows.map(r => ({
              label: r.label,
              value: r.value
            })),
            pdfBase64: pdfDataUrl
          })
        });
      } catch (_) {/* backend may not exist yet */}
      // Visual confirmation regardless of backend status
      setTimeout(() => {
        setSending(false);
        setSent(true);
      }, 700);
    } catch (e) {
      setSending(false);
      alert("Something went wrong generating the PDF. Please try again or use 'Download PDF'.");
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "finder",
    className: "rm-finder",
    "data-screen-label": "03 Solution Finder Summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__intro"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "Your Custom Brief",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Your Robotmea", /*#__PURE__*/React.createElement("br", null), "programme. Ready.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-finder__lead"
  }, "Here's the package you've configured. Download the brief as a PDF, or send it directly to our team \u2014 we'll have a costed proposal back to you within seven working days.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-finder__panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__seal"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__tag"
  }, "Custom Brief Generated"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-summary__h"
  }, "Your Robotmea Programme"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__grid"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    className: "rm-summary__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__row-icon"
  }, r.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__row-label"
  }, r.label), /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__row-value"
  }, r.value))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-roadmap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-roadmap__h"
  }, "Next Steps \xB7 Your Path To Rollout"), /*#__PURE__*/React.createElement("div", {
    className: "rm-roadmap__grid"
  }, roadmap.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.t,
    className: "rm-roadmap__step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-roadmap__step-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h4", {
    className: "rm-roadmap__step-title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-roadmap__step-body"
  }, s.b))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-summary__cta-eyebrow"
  }, "Download the brief, send it directly to our COPR Team, or open the full contact form \u2014 whichever's fastest."), /*#__PURE__*/React.createElement("button", {
    onClick: downloadPDF,
    className: "rm-btn rm-btn--lg rm-finder__pdf"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      marginRight: 8
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3v12"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 10l5 5 5-5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "17",
    width: "18",
    height: "4",
    rx: "1"
  })), "Download PDF"), /*#__PURE__*/React.createElement("button", {
    onClick: generateAndSend,
    className: "rm-btn rm-btn--primary rm-btn--lg",
    disabled: sending
  }, sending ? /*#__PURE__*/React.createElement(React.Fragment, null, "Sending\u2026") : sent ? /*#__PURE__*/React.createElement(React.Fragment, null, "Sent to COPR Team \u2713") : /*#__PURE__*/React.createElement(React.Fragment, null, "Generate PDF & Send to COPR Team", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--lg rm-finder__pdf"
  }, "Open Contact Form"), /*#__PURE__*/React.createElement("button", {
    className: "rm-summary__restart",
    onClick: restart
  }, "\u2190 Start over"))))));
}
Object.assign(window, {
  CoprFinder
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/copr-finder.jsx", error: String((e && e.message) || e) }); }

// website/copr-sections.jsx
try { (() => {
/* global React */

/* ============ COPR Hero ============ */
function CoprHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-copr-hero",
    "data-screen-label": "01 COPR Hero"
  }, /*#__PURE__*/React.createElement("video", {
    className: "rm-copr-hero__video",
    src: "copr-bg.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-copr-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-hero__layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-hero__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-copr-hero__brand-tag"
  }, "C"), /*#__PURE__*/React.createElement("span", {
    className: "rm-copr-hero__brand-txt"
  }, "Communication \xB7 Outreach \xB7 Public Relations")), /*#__PURE__*/React.createElement("h1", {
    className: "rm-copr-hero__title"
  }, "COPR", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-copr-hero__title-accent"
  }, "Nexus.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-copr-hero__tagline"
  }, "From Transactional to Transformational."), /*#__PURE__*/React.createElement("p", {
    className: "rm-copr-hero__sub"
  }, "COPR Nexus is Robotmea's engine for taking the work of the Institute \u2014 schools, diplomas, curriculum, research \u2014 and turning it into voice, visibility, and durable relationships with the public, the press, the ministries, and the partners who scale us."), /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#finder",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Build Your Solution", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#nexus",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Explore the Nexus"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-hero__logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/copr-logo.png",
    alt: "COPR Nexus"
  })))));
}

/* ============ Nexus Constellation (9 formulas around the globe) ============ */
function CoprNexus() {
  // 8 chips around the globe (positions in CSS percent within the stage),
  // 9th formula renders as the featured bar below.
  const chips = [{
    num: "01",
    a: "Hardwork + Exposure",
    r: "Excellence",
    c: "var(--rm-orange)",
    top: "6%",
    left: "5%"
  }, {
    num: "02",
    a: "Unity + Faith",
    r: "Discipline",
    c: "var(--rm-blue)",
    top: "0%",
    left: "58%"
  }, {
    num: "03",
    a: "Communication + Creativity",
    r: "Innovation",
    c: "var(--rm-green)",
    top: "32%",
    left: "-2%"
  }, {
    num: "04",
    a: "Heterogeneous Connectivity + Local Understanding",
    r: "Real Change",
    c: "var(--rm-red)",
    top: "26%",
    left: "68%"
  }, {
    num: "05",
    a: "Market Research + Business Intelligence",
    r: "Success",
    c: "var(--rm-orange)",
    top: "60%",
    left: "-2%"
  }, {
    num: "06",
    a: "Transparency + Leadership",
    r: "Vision",
    c: "var(--rm-blue)",
    top: "58%",
    left: "70%"
  }, {
    num: "07",
    a: "Strategic Thinking + Skills",
    r: "Impact",
    c: "var(--rm-green)",
    top: "85%",
    left: "8%"
  }, {
    num: "08",
    a: "Passion + Pragmatic Approach",
    r: "Value Creation",
    c: "var(--rm-red)",
    top: "85%",
    left: "64%"
  }];

  /* Clean SVG globe — teal/blue gradient sphere with meridians, parallels, and a continent silhouette */
  const Globe = /*#__PURE__*/React.createElement("svg", {
    className: "rm-nexus__globe-svg",
    viewBox: "0 0 200 200",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: "globeFill",
    cx: "35%",
    cy: "32%",
    r: "75%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#7ed3e1"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "35%",
    stopColor: "#2f9bb6"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "72%",
    stopColor: "#176b85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#0b3849"
  })), /*#__PURE__*/React.createElement("radialGradient", {
    id: "globeShine",
    cx: "30%",
    cy: "24%",
    r: "36%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#ffffff",
    stopOpacity: ".55"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#ffffff",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "92",
    fill: "url(#globeFill)",
    stroke: "#0e1419",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#0e1419",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "100",
    rx: "92",
    ry: "92"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "100",
    rx: "60",
    ry: "92"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "100",
    rx: "28",
    ry: "92"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#0e1419",
    strokeWidth: "2",
    strokeLinecap: "round",
    opacity: ".85"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "100",
    rx: "92",
    ry: "60"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "100",
    cy: "100",
    rx: "92",
    ry: "28"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "#1a6d85",
    opacity: ".62"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70 60 Q85 50 100 60 Q120 64 130 80 Q124 96 108 96 Q90 96 78 88 Q66 80 70 60 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M124 110 Q140 110 150 124 Q150 140 132 142 Q116 144 116 128 Q116 116 124 110 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M62 130 Q80 124 88 140 Q86 154 70 154 Q56 152 58 140 Q56 134 62 130 Z"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "92",
    fill: "url(#globeShine)"
  }));

  /* Orange orbit ring (tilted) */
  const Orbit = /*#__PURE__*/React.createElement("svg", {
    className: "rm-nexus__orbit-svg",
    viewBox: "0 0 600 250",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "orbitG",
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#ff870b",
    stopOpacity: ".85"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "55%",
    stopColor: "#ff870b"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#ff870b",
    stopOpacity: ".95"
  }))), /*#__PURE__*/React.createElement("g", {
    transform: "rotate(-12 300 125)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "300",
    cy: "125",
    rx: "285",
    ry: "95",
    fill: "none",
    stroke: "url(#orbitG)",
    strokeWidth: "6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M580 130 L600 124 L580 116 Z",
    fill: "#ff870b"
  })));
  return /*#__PURE__*/React.createElement("section", {
    id: "nexus",
    className: "rm-nexus",
    "data-screen-label": "02 Nexus Constellation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "How We Think",
    heading: "Nine formulas that govern how we work.",
    lead: "The COPR Nexus operating system \u2014 nine equations we apply to every conversation, every campaign, every partnership."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__stage"
  }, Globe, Orbit, chips.map(ch => /*#__PURE__*/React.createElement("div", {
    key: ch.num,
    className: "rm-nexus__chip",
    style: {
      top: ch.top,
      left: ch.left,
      "--accent": ch.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-nexus__chip-num"
  }, "Formula ", ch.num), /*#__PURE__*/React.createElement("span", {
    className: "rm-nexus__chip-eq"
  }, ch.a, " = ", /*#__PURE__*/React.createElement("strong", null, ch.r))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__featured-badge"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-nexus__featured-badge-num"
  }, "09")), /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__featured-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__featured-label"
  }, "The Master Equation"), /*#__PURE__*/React.createElement("div", {
    className: "rm-nexus__featured-eq"
  }, "COPR Nexus =", /*#__PURE__*/React.createElement("span", {
    className: "rm-nexus__featured-result"
  }, "Transactional to Transformational"))))));
}

/* ============ Capabilities grid ============ */
function CoprCapabilities() {
  const items = [{
    c: "var(--rm-blue)",
    t: "Strategic Communications",
    b: "Narrative architecture, message houses, executive talking points.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 12l4 4 14-14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11"
    }))
  }, {
    c: "var(--rm-orange)",
    t: "Public Relations & Media",
    b: "Relationships with national and regional press; embargo and exclusive programmes.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 11l18-5v12L3 13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
    }))
  }, {
    c: "var(--rm-green)",
    t: "Government & Stakeholder Outreach",
    b: "Federal, Provincial and Ministry liaison.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8l9-5 9 5v13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21V12h6v9"
    }))
  }, {
    c: "var(--rm-red)",
    t: "Brand Management",
    b: "Visual standards, tone of voice, brand-guardian function across all Robotmea entities and ETM schools.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 3a9 9 0 0 1 0 18M3 12h18"
    }))
  }, {
    c: "var(--rm-blue)",
    t: "Digital & Social",
    b: "Site, social channels, newsletter, paid distribution.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "14",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 21h10M12 17v4"
    }))
  }, {
    c: "var(--rm-orange)",
    t: "Market Research & BI",
    b: "Pakistani and regional EdTech market scans, competitor mapping.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8M9 21V12M15 21V4M21 21V14"
    }))
  }, {
    c: "var(--rm-green)",
    t: "Partner & Investor Relations",
    b: "ETM franchise outreach, briefing decks, due-diligence support.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    }))
  }, {
    c: "var(--rm-red)",
    t: "Event Production",
    b: "Diploma convocations, ETM inaugurations, press conferences, exhibitions.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4M8 2v4M3 10h18"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-cops-cap",
    "data-screen-label": "04 Capabilities"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What We Do",
    heading: "Capabilities.",
    lead: "Eight COPR Nexus practice areas that wrap around every Robotmea conversation, every campaign, and every partnership."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-cops-cap__grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    className: "rm-cap-tile",
    style: {
      "--accent": it.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-cap-tile__icon"
  }, it.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-cap-tile__title"
  }, it.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-cap-tile__body"
  }, it.b))))));
}
Object.assign(window, {
  CoprHero,
  CoprNexus,
  CoprCapabilities
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/copr-sections.jsx", error: String((e && e.message) || e) }); }

// website/etm-sections.jsx
try { (() => {
/* global React */

/* ============ ETM Hero ============ */
function EtmHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-hero",
    "data-screen-label": "01 ETM Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--etm-teal)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--etm-orange)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--etm-magenta)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--etm-black)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-etm-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-hero__layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-hero__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-etm-hero__brand-tag"
  }, "E"), /*#__PURE__*/React.createElement("span", {
    className: "rm-etm-hero__brand-txt"
  }, "Educational Transformation Movement")), /*#__PURE__*/React.createElement("h1", {
    className: "rm-etm-hero__title"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-etm-hero__title-accent"
  }, "Redefining Education"), "To Make You", /*#__PURE__*/React.createElement("br", null), "Relevant."), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-hero__tagline"
  }, "A complete educational operating system \u2014 Robotron-certified, ETM-powered, South-Korean-accredited \u2014 designed for the schools that intend to lead the next decade."), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-hero__statement"
  }, "\"A Project of Robotmea, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#franchise",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Request the Investor Pack", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Book a Discovery Call"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/etm-logo.png",
    alt: "Educational Transformation Movement"
  })))));
}

/* ============ ETM Tagline band — right under hero ============ */
function EtmTaglineBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-tagline-band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-tagline-band__txt"
  }, "A new category of school. ", /*#__PURE__*/React.createElement("span", {
    className: "rm-etm-tagline-accent"
  }, "Built to a single standard.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-tagline-band__sub"
  }, "Pakistan's first ETM-powered schools \xB7 Operating now")));
}

/* ============ Franchise Structure — Who is Who ============ */
function EtmFranchise() {
  const rows = [{
    c: "var(--rm-orange)",
    role: "ETM Franchisor",
    entity: "Robotmea",
    body: "Owner of the Educational Transformation Movement (ETM) programme and brand system. Licenses the standard, audits the implementation."
  }, {
    c: "var(--rm-blue)",
    role: "ETM Franchisee",
    entity: "Investor's School",
    body: "Operates an ETM-powered school under licence from Robotmea — own name, own buildings, own community, ETM operating standard."
  }, {
    c: "var(--rm-green)",
    role: "Accrediting Body",
    entity: "Robotron, South Korea",
    body: "Certifies the K–12 programme to a published South Korean standard. 25+ years of cross-sector research, public-private-development."
  }, {
    c: "var(--rm-red)",
    role: "Pedagogical Anchor",
    entity: "S. Korean Standards + NCP",
    body: "South Korean Educational Standards, integrated with the Pakistan National Curriculum (NCP). Local relevance, global benchmark."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "franchise",
    className: "rm-franchise",
    "data-screen-label": "02 Franchise Structure"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "The Franchise Structure",
    heading: "Who is who.",
    lead: "ETM is a regulated franchise system. The relationship between the four parties \u2014 and what each is accountable for \u2014 is fixed in writing before a single brick is laid."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-franchise__layout"
  }, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.role,
    className: "rm-franchise__card",
    style: {
      "--accent": r.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-franchise__role"
  }, r.role), /*#__PURE__*/React.createElement("h3", {
    className: "rm-franchise__entity"
  }, r.entity), /*#__PURE__*/React.createElement("p", {
    className: "rm-franchise__body"
  }, r.body))))));
}

/* ============ Standards Stack — 5 features ============ */
function EtmStandards() {
  const cards = [{
    n: "01",
    c: "var(--etm-teal)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v20M5 7l7-3 7 3M5 12l7-3 7 3M5 17l7-3 7 3"
    })),
    title: "Friends of Quran & Our Role ﹒ SAWW ﹓ Model",
    body: "A dedicated lounge for Quran reflection, the Prophet Muhammad ﭒ as Role Model programme, compulsory Arabic, and a one-book model that integrates Islamic values with the academic stack."
  }, {
    n: "02",
    c: "var(--etm-magenta)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    })),
    title: "STEAM-Integrated Academic Planning",
    body: "K–12 STEAM scope-and-sequence, mapped to the Pakistan National Curriculum (NCP) and benchmarked to South Korean Educational Standards. Project-Based Inquiry Learning (PBIL) is the default mode."
  }, {
    n: "03",
    c: "var(--etm-orange)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6M10 22h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"
    })),
    title: "Discovery & Innovation Hub",
    body: "Every ETM school operates a D&I Hub built to one published blueprint — equipment list, room specifications, programme design, staffing model. The flagship innovation space of the school."
  }, {
    n: "04",
    c: "var(--etm-teal)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "6",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 6h6M9 18h6M6 9v6M18 9v6"
    })),
    title: "ETM Garage",
    body: "The signature applied-tech workshop: robotics, drone, IoT, fabrication, and AI lab in one space. Standardised across every ETM school so transferring students always land on familiar ground."
  }, {
    n: "05",
    c: "var(--etm-magenta)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    title: "Faculty Development Cell",
    body: "The in-school capability-building structure. Continuous CPD, quarterly classroom-practice audits, peer review and the Korean exchange track for top performers — all built into the school from day one."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-standards",
    "data-screen-label": "03 Standards Stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What You Get",
    heading: "The standards stack.",
    lead: "Five published standards. Non-negotiable across every ETM school. The structural reason ETM is a category, not a vendor relationship."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-standards__grid rm-standards__grid--5"
  }, cards.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.n,
    className: "rm-standard-card",
    style: {
      "--accent": c.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-standard-card__icon"
  }, c.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-standard-card__num"
  }, c.n), /*#__PURE__*/React.createElement("h3", {
    className: "rm-standard-card__title"
  }, c.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-standard-card__body"
  }, c.body))))));
}

/* ============ Yours / Ours table ============ */
function EtmYoursOurs() {
  const yours = ["Your school's name and identity", "Your buildings, your capital, your land", "Your local hiring (within our framework)", "Your fees and your community", "Your management team", "Your day-to-day operations", "Your local relationships"];
  const ours = ["The Robotron, South Korea certification", "The Academics Planning Standard", "The Discovery & Innovation Hub blueprint", "The ETM Garage standard", "The teacher training pathway + Faculty Development Cell", "The M&E framework + quarterly ETM audits", "The South Korean accreditation mark"];
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-yours-ours",
    "data-screen-label": "04 Yours Ours"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    dark: true,
    eyebrow: "The Investor Reassurance",
    heading: "What stays yours. What comes from us.",
    lead: "The single most important question an investor asks. Here is the answer, in one table."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__col-eyebrow"
  }, "Yours"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-yo__col-heading"
  }, "What you keep."), /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__list"
  }, yours.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-yo__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-yo__check"
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("span", {
    className: "rm-yo__txt"
  }, t))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__col rm-yo__col--ours"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__col-eyebrow"
  }, "Ours (ETM)"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-yo__col-heading"
  }, "What we bring."), /*#__PURE__*/React.createElement("div", {
    className: "rm-yo__list"
  }, ours.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-yo__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-yo__check"
  }, /*#__PURE__*/React.createElement(Check, null)), /*#__PURE__*/React.createElement("span", {
    className: "rm-yo__txt"
  }, t))))))));
}

/* ============ Five-point story (deep) ============ */
function EtmFivePoint() {
  const rows = [{
    c: "var(--rm-blue)",
    t: "ETM-Powered Model",
    b: "Pakistan's first ETM-powered schools, built on South Korean Educational Standards and accredited by Robotron, South Korea. This is not a STEAM bolt-on to an existing curriculum; it is a complete educational operating system."
  }, {
    c: "var(--rm-orange)",
    t: "Student-Centric Environment",
    b: "No homework. No boring classes. No heavy bags. No rote learning. No exam pressure. Project-Based Inquiry Learning (PBIL) replaces traditional classrooms with Discovery & Innovation Hubs and the ETM Garage — applied, hands-on, evaluated through portfolios, not memorisation."
  }, {
    c: "var(--rm-green)",
    t: "Islamic Values at the Core",
    b: "ETM schools are unapologetically rooted in Islamic values. The Friends of Quran lounge. The Prophet Muhammad ﷺ as Role Model programme. Compulsory Arabic. A one-book model that integrates Islamic, academic and STEAM content rather than treating them as separate streams."
  }, {
    c: "var(--rm-red)",
    t: "Emerging Technologies",
    b: "Robotics, AI, and innovation embedded from the early years — including TechNutrition 365, our holistic Early Childhood Care & Education programme that covers robotics, nutrition, psychology, and EdTech as a single integrated experience."
  }, {
    c: "var(--rm-blue)",
    t: "Reimagined Roles",
    b: "Principal as Mentor. Teacher as Coach / Instructor. Student as Learner. Supported by the Faculty Development Cell (FDC) and a system of regular ETM audits that keep every classroom honest to the standard."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-fivepoint-deep",
    "data-screen-label": "05 Five-Point Story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What Makes ETM Different",
    heading: "The five-point story.",
    lead: "Every ETM school is built on the same five non-negotiables \u2014 the structural reasons ETM produces graduates the existing system cannot."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-fivepoint-deep__list"
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-fp-row",
    style: {
      "--accent": r.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-fp-row__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "rm-fp-row__title"
  }, r.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-fp-row__body"
  }, r.b)))))));
}

/* ============ Audience tiles ============ */
function EtmAudience() {
  const items = [{
    c: "var(--rm-blue)",
    audience: "For Parents",
    title: "A future-ready child.",
    body: "Safety. Islamic values. No homework or exam pressure. South Korean educational standards. A child who graduates fluent in the technologies the next decade will demand.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 6v6M16 9h6"
    }))
  }, {
    c: "var(--rm-orange)",
    audience: "For Investors",
    title: "A scalable franchise.",
    body: "The Robotmea franchise model. ETM accreditation by Robotron. South Korean educational standards. A category-defining proposition with a clear, audited expansion path.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 3 3 6-6"
    }))
  }, {
    c: "var(--rm-green)",
    audience: "For Educators",
    title: "A career-grade institution.",
    body: "The Faculty Development Cell. Teacher-as-coach model. The ETM Garage. Global benchmarking against a 25-year-old South Korean research institution.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    }))
  }, {
    c: "var(--rm-red)",
    audience: "For Media",
    title: "A movement, not a school.",
    body: "Pakistan's First ETM-Powered School. The Educational Transformation Movement. From Transactional to Transformational.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 11v2a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8v-2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 11V9a8 8 0 0 1 8-8h0a8 8 0 0 1 8 8v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 11h18"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-audience",
    "data-screen-label": "06 Audience"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Speaking To Everyone",
    heading: "Four audiences. One promise.",
    lead: "The ETM model has a different answer to a different audience \u2014 but the same accreditation behind every claim."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-audience__grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.audience,
    className: "rm-audience__card",
    style: {
      "--accent": it.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-audience__icon"
  }, it.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-audience__for"
  }, it.audience), /*#__PURE__*/React.createElement("h3", {
    className: "rm-audience__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-audience__body"
  }, it.body))))));
}

/* ============ Investor journey ============ */
function EtmJourney() {
  const steps = [{
    c: "var(--rm-blue)",
    t: "Discovery Call",
    b: "60-minute conversation with IERDG leadership. No commitment. Confidential."
  }, {
    c: "var(--rm-orange)",
    t: "Investor Pack",
    b: "Full standards documentation, financial model, regional market analysis."
  }, {
    c: "var(--rm-green)",
    t: "Feasibility",
    b: "Site visit, local market study, capital plan review with our team."
  }, {
    c: "var(--rm-red)",
    t: "Onboarding",
    b: "Accreditation paperwork, teacher hiring + FDC setup, capex build-out."
  }, {
    c: "var(--rm-blue)",
    t: "Launch",
    b: "Your school opens as A Project of Robotmea, ETM-powered, South Korean accredited."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-journey",
    "data-screen-label": "07 Investor Journey"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "The Investor Journey",
    heading: "From conversation to open doors.",
    lead: "A typical ETM partnership moves from first call to a fully-licensed, operational school in five structured stages."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-journey__flow"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-journey__step",
    style: {
      "--accent": s.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-journey__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    className: "rm-journey__title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-journey__body"
  }, s.b))))));
}

/* ============ FAQ ============ */
function EtmFAQ() {
  const items = [{
    q: "Can I convert an existing school, or only build new?",
    a: "Both. ETM operates two tracks — Greenfield (a new school built ground-up to ETM standard) and Transformation (an existing school converted to ETM over a defined runway). We assess fit during the feasibility stage."
  }, {
    q: "What does the ETM fee structure look like?",
    a: "ETM operates on a licensing model with three components: a one-time onboarding fee, an annual licence fee per campus, and a recurring per-student royalty. The Investor Pack contains the complete commercial schedule. Confidential until that stage."
  }, {
    q: "Do I own the Robotron certification, or does Robotmea?",
    a: "Robotron is the accrediting body. Robotmea holds the master accreditation. Your school holds an operating licence that carries the accreditation while you remain in good standing — the same way a university franchise carries the parent's standard."
  }, {
    q: "How is quality enforced across franchised schools?",
    a: "Quarterly on-site ETM audits, an anonymised central data system, and an annual public Impact Report. Schools that fall below the published rubric enter a remediation cycle before — in the rare worst case — losing the licence."
  }, {
    q: "What is the typical timeline from sign-off to opening?",
    a: "Greenfield ETM schools typically launch 9–14 months from licence signing, depending on construction. Transformations of existing schools can move faster, often opening to ETM standard from the following academic year."
  }, {
    q: "How does ETM scale across multiple campuses?",
    a: "An investor group can license multiple campuses under a master agreement, with reduced onboarding fees per additional campus and a unified audit / training / curriculum stack across the group."
  }];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-faq",
    "data-screen-label": "08 FAQ"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Investor FAQ",
    heading: "The questions investors ask first.",
    lead: "Open answers to the six conversations that come up on every Discovery Call. Anything not here, ask us directly."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-faq__list"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-faq__item " + (open === i ? "is-open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-faq__q",
    onClick: () => setOpen(open === i ? -1 : i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-faq__q-num"
  }, "Q", String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.q), /*#__PURE__*/React.createElement("span", {
    className: "rm-faq__q-arrow"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rm-faq__a"
  }, /*#__PURE__*/React.createElement("p", null, it.a)))))));
}

/* ============ Final CTA ============ */
function EtmFinal() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-final",
    "data-screen-label": "09 Final CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-etm-final__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-eyebrow--white",
    style: {
      color: "rgba(255,255,255,.9)"
    }
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-etm-final__heading"
  }, "Join the ETM Movement.", /*#__PURE__*/React.createElement("br", null), "Make your school relevant."), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-final__sub"
  }, "Pakistan's first ETM-powered schools are already operating. The next one is yours to build."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../website/contact.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Request Investor Pack", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "../website/contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Book Discovery Call"))));
}

/* ============ Features inside an ETM school ============ */
function EtmFeatures() {
  const features = [{
    c: "var(--etm-teal)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 12l2 2 4-4"
    })),
    title: "Project-Based Inquiry Learning",
    body: "PBIL replaces lecture-led classes. Students learn by building — robotics, AI prototypes, IoT installations — assessed through portfolios and live demonstrations."
  }, {
    c: "var(--etm-magenta)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2v6m0 0L8 4m4 4l4-4M5 12a7 7 0 1 0 14 0"
    })),
    title: "TechNutrition 365",
    body: "Our holistic Early Childhood Care & Education programme — robotics, nutrition, psychology and EdTech delivered as a single integrated experience for our youngest learners."
  }, {
    c: "var(--etm-orange)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "16",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 4v16M3 12h18"
    })),
    title: "The One-Book Model",
    body: "A single integrated textbook per grade that ties Islamic studies, language, science and STEAM through the same set of projects. Lighter bags. Coherent learning."
  }, {
    c: "var(--etm-magenta)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 7l9 6 9-6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-9-4z"
    })),
    title: "Compulsory Arabic",
    body: "Arabic from Grade 1 onwards, taught not as a religious obligation but as a living language — with PBIL projects, immersion days, and integration into the one-book model."
  }, {
    c: "var(--etm-teal)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 12h-4l-3 9L9 3l-3 9H2"
    })),
    title: "Reimagined Roles",
    body: "Principal as Mentor. Teacher as Coach. Student as Learner. A deliberate redefinition of who does what inside the school — backed by training, audits and published role descriptions."
  }, {
    c: "var(--etm-orange)",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    })),
    title: "Regular ETM Audits",
    body: "Every ETM school is audited quarterly against the published rubric. The standard is enforced — not assumed — and the findings feed straight back into next-cycle curriculum and training."
  }];
  const negatives = [{
    h: "No Homework",
    s: "Learning happens at school."
  }, {
    h: "No Heavy Bags",
    s: "The one-book model."
  }, {
    h: "No Boring Classes",
    s: "PBIL is the default."
  }, {
    h: "No Rote Learning",
    s: "Portfolios over memorisation."
  }, {
    h: "No Exam Pressure",
    s: "Continuous assessment."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-features",
    "data-screen-label": "04 Features"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Inside An ETM School",
    heading: "Six features. One coherent experience.",
    lead: "The standards stack defines what is built. The features below describe what an ETM student lives every day \u2014 and what an ETM school deliberately refuses to do."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-feat-grid"
  }, features.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.title,
    className: "rm-feat-card",
    style: {
      "--accent": f.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-feat-card__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-feat-card__icon"
  }, f.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-feat-card__title"
  }, f.title)), /*#__PURE__*/React.createElement("p", {
    className: "rm-feat-card__body"
  }, f.body)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-no-features",
    "aria-label": "What ETM does not do"
  }, negatives.map(n => /*#__PURE__*/React.createElement("div", {
    key: n.h,
    className: "rm-no-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-no-feature__h"
  }, n.h), /*#__PURE__*/React.createElement("div", {
    className: "rm-no-feature__sub"
  }, n.s))))));
}
Object.assign(window, {
  EtmHero,
  EtmTaglineBand,
  EtmFranchise,
  EtmStandards,
  EtmFeatures,
  EtmYoursOurs,
  EtmFivePoint,
  EtmAudience,
  EtmJourney,
  EtmFAQ,
  EtmFinal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/etm-sections.jsx", error: String((e && e.message) || e) }); }

// website/home-sections.jsx
try { (() => {
/* global React */
/* Home page section components */

/* ============ Hero — with slider over fixed video background ============ */
const {
  useState,
  useEffect,
  useRef
} = React;
function HomeHero() {
  const slides = [{
    key: "main",
    eyebrow: "Robotmea — A Time Dimension Group Company",
    titleTop: "Transforming",
    titleAccent: "The Future Of Youth.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Robotmea is Pakistan's EdTech authority for ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Emerging Technologies (AI, Robotics, AR/VR, Simulation)"), " and ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "STEAM Education"), " \u2014 accredited by ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron, South Korea"), ", and the parent of the Educational Transformation Movement (ETM) that powers Pakistan's first ETM schools."),
    showCredentials: true,
    primary: {
      label: "Explore the Institute",
      href: "institute.html"
    },
    secondary: {
      label: "Join the ETM Movement",
      href: "etm.html"
    }
  }, {
    key: "institute",
    tag: "Spotlight · The Institute",
    eyebrow: "IERDG",
    titleTop: "Where Excellence",
    titleAccent: "Matters.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Five programs. One mission. ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron-accredited."), " A global ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Institute for EdTech Research, Development & Growth"), " \u2014 K-12 transformation, the Faculty Development Cell, the Emerging Technologies Centre, and internationally-aligned diplomas."),
    showCredentials: false,
    primary: {
      label: "Enter the Institute",
      href: "institute.html"
    },
    secondary: {
      label: "See the 6-Step Plan",
      href: "institute.html#transform"
    }
  }, {
    key: "diploma",
    tag: "Spotlight · International Diplomas",
    eyebrow: "International Diploma Programs",
    titleTop: "Internationally",
    titleAccent: "Certified Diplomas.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "One to three year ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron-certified diplomas"), " in Robotics, AI, IoT and applied emerging technologies \u2014 South-Korean benchmarked, internationally recognised, delivered in Pakistan."),
    showCredentials: false,
    primary: {
      label: "Explore Diplomas",
      href: "institute.html#idp"
    },
    secondary: {
      label: "Apply Now",
      href: "contact.html"
    }
  }, {
    key: "etm",
    tag: "Spotlight · Educational Transformation Movement",
    eyebrow: "For Investors",
    titleTop: "Establish Pakistan's",
    titleAccent: "Next ETM School.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "ETM is Robotmea's franchise system for South-Korean-accredited Emerging Technologies schools. Investors keep their land, capital, and brand; we bring the operating standard \u2014 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron Certified \xB7 ETM Powered \xB7 South Korean Accredited.")),
    showCredentials: false,
    primary: {
      label: "Investor Pack",
      href: "etm.html"
    },
    secondary: {
      label: "Book a Discovery Call",
      href: "contact.html"
    }
  }];
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
  const go = n => {
    setIdx((n + slides.length) % slides.length);
    setTick(x => x + 1);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-hero",
    "data-screen-label": "01 Hero",
    onMouseEnter: () => {
      hoverRef.current = true;
    },
    onMouseLeave: () => {
      hoverRef.current = false;
    }
  }, /*#__PURE__*/React.createElement("video", {
    className: "rm-hero__video",
    src: "hero-bg.mp4",
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip rm-hero__pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__slider"
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    className: "rm-hero__slide " + (i === idx ? "is-active" : ""),
    "aria-hidden": i !== idx
  }, s.tag && /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__slide-accent"
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white",
    style: {
      marginBottom: 22
    }
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "rm-h1 rm-h1--on-dark rm-hero__title"
  }, s.titleTop, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-hero__title-accent"
  }, s.titleAccent)), /*#__PURE__*/React.createElement("p", {
    className: "rm-hero__sub"
  }, s.sub), s.showCredentials && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "30px 0 10px"
    }
  }, /*#__PURE__*/React.createElement(RM_Credentials, {
    variant: "ghost",
    layout: "row"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: s.primary.href,
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, s.primary.label, /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: s.secondary.href,
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, s.secondary.label))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__dots",
    key: tick
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    className: "rm-hero__dot " + (i === idx ? "is-active" : ""),
    onClick: () => go(i),
    "aria-label": "Slide " + (i + 1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-hero__counter-current"
  }, String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, " / ", String(slides.length).padStart(2, "0")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__arrows"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-hero__arrow",
    onClick: () => go(idx - 1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "rm-hero__arrow",
    onClick: () => go(idx + 1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))));
}

/* ============ Trust strip — international partners (Shandong removed; larger logos) ============ */
function HomeTrust() {
  const partners = [{
    src: "../assets/partners/robotron.png",
    alt: "Robotron",
    role: "Accreditation",
    c: "var(--rm-orange)"
  }, {
    src: "../assets/partners/minirobot.png",
    alt: "MiniRobot",
    role: "Robotics Hardware",
    c: "var(--rm-blue)"
  }, {
    src: "../assets/partners/neopia.png",
    alt: "Neopia",
    role: "EdTech Systems",
    c: "var(--rm-green)"
  }, {
    src: "../assets/partners/sinion.jpeg",
    alt: "Sinion",
    role: "R&D · China",
    c: "var(--rm-red)"
  }, {
    src: "../assets/partners/tdme.png",
    alt: "TDME",
    role: "Industry Partner",
    c: "var(--rm-orange)"
  }, {
    src: "../assets/partners/esim-gen.png",
    alt: "esim·gen",
    role: "Connectivity",
    c: "var(--rm-blue)"
  }];
  const metrics = [{
    n: "25+",
    l: "Years of R&D"
  }, {
    n: "06",
    l: "Global Partners"
  }, {
    n: "03",
    l: "Continents"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-trust__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__aside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__eyebrow"
  }, "The Alliance"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-trust__title"
  }, "Robotmea is powered by the world\u2019s", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "leading technology partners.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-trust__sub"
  }, "From international accreditation and robotics hardware to dedicated R&D labs and global connectivity, every layer of a Robotmea classroom is built on partners who lead their field \u2014 so your students learn on technology the world already trusts."), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__meta"
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.l,
    className: "rm-trust__meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, m.n), /*#__PURE__*/React.createElement("span", null, m.l))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__logos"
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.alt,
    className: "rm-trust__cell",
    style: {
      "--accent": p.c
    },
    title: p.alt
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__logo-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.alt,
    className: "rm-trust__logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__role"
  }, p.role)))))));
}

/* ============ Who We Are — Korean legacy positioning ============ */
function HomeWhoWeAre() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--paper",
    "data-screen-label": "02 Who We Are"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-frame rm-photo-frame--poster",
    style: {
      aspectRatio: '2 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/legacy-korea-poster.png",
    alt: "Robotmea \u2014 carrying the legacy of South Korea's EdTech giants, alongside Korean technology partners Mini Robot, Neopia, Robotron and Sinion",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-floating-badge",
    style: {
      right: -20,
      bottom: -28
    }
  }, /*#__PURE__*/React.createElement("strong", null, "25+ Years"), /*#__PURE__*/React.createElement("span", null, "Of South Korean EdTech Research"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "Who We Are",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Carrying the legacy of", /*#__PURE__*/React.createElement("br", null), "South Korea's EdTech giants.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-lead",
    style: {
      marginTop: 22
    }
  }, "For three decades, South Korea has quietly engineered the world's most sophisticated EdTech infrastructure \u2014 the standards, the research, the teacher pathways, the curriculum architecture. ", /*#__PURE__*/React.createElement("strong", null, "Robotmea is the institution chartered to bring that heritage to Pakistan.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-body",
    style: {
      marginTop: 18
    }
  }, "We are accredited by ", /*#__PURE__*/React.createElement("strong", null, "Robotron, South Korea"), " \u2014 a research institution with 25+ years of work across the public, private and development sectors globally \u2014 and partnered with the country's leading robotics, platform and connectivity innovators. Every curriculum we publish, every diploma we award, every school standard we certify carries that lineage."), /*#__PURE__*/React.createElement("p", {
    className: "rm-body",
    style: {
      marginTop: 14
    }
  }, "Through the ", /*#__PURE__*/React.createElement("strong", null, "Institute (IERDG)"), " and the ", /*#__PURE__*/React.createElement("strong", null, "Nexus (COPR Nexus)"), ", we don't import devices; we transplant a complete educational operating system."), /*#__PURE__*/React.createElement("a", {
    href: "institute.html",
    className: "rm-btn rm-btn--outline",
    style: {
      marginTop: 28
    }
  }, "Read our story", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))))));
}

/* ============ Two pillar cards (IERDG + COPR Nexus) ============ */
function HomePillars() {
  // Icons rendered as inline SVG so they stay crisp + sized inside the box
  const InstituteIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 4l12 5-12 5L4 9l12-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12v6c0 2 4 4 8 4s8-2 8-4v-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 9v9"
  }));
  const CoprIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 16h20M16 6c3 3 4.5 6.5 4.5 10s-1.5 7-4.5 10c-3-3-4.5-6.5-4.5-10S13 9 16 6z"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--tight",
    "data-screen-label": "03 Pillars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What We Do",
    heading: "Two engines. One mission."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-grid rm-grid--2",
    style: {
      marginTop: 56,
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "institute.html",
    className: "rm-pillar-card rm-pillar-card--institute"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__icon"
  }, InstituteIcon), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__sub"
  }, "The Institute"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pillar-card__title"
  }, "IERDG"), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__tagline"
  }, "Where excellence matters."), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__body"
  }, "Five programs \u2014 K-12, ETM, the Faculty Development Cell, the Robotmea Emerging Technologies Centre and International Diplomas \u2014 move EdTech from theory into Pakistani classrooms, accredited by Robotron, South Korea."), /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta"
  }, "Enter the Institute", /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__deco"
  })), /*#__PURE__*/React.createElement("a", {
    href: "copr-nexus.html",
    className: "rm-pillar-card rm-pillar-card--copr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__icon"
  }, CoprIcon), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__sub"
  }, "The Nexus"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pillar-card__title"
  }, "COPR Nexus"), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__tagline"
  }, "Transactional to Transformational."), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__body"
  }, "Communications, outreach and public relations \u2014 the engine that takes the Institute's work to ministries, press, parents and partners. Built on nine working formulas."), /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta"
  }, "Enter COPR Nexus", /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__deco"
  })))));
}

/* ============ ETM spotlight band — the investor moment ============ */
function HomeETMBand() {
  const badges = [{
    num: "01",
    text: "A Project of Robotmea"
  }, {
    num: "02",
    text: "Powered by ETM on South Korean Educational Standards"
  }, {
    num: "03",
    text: "Accredited by Robotron, South Korea"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-band",
    "data-screen-label": "04 ETM Spotlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-etm-band__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "Educational Transformation Movement"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 rm-etm-band__heading",
    style: {
      marginTop: 18
    }
  }, "Pakistan's first", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rm-orange)'
    }
  }, "ETM-powered schools"), " \u2014", /*#__PURE__*/React.createElement("br", null), "established under your name."), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-band__statement"
  }, "\"A Project of Robotmea, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-band__lead"
  }, "ETM is Robotmea's franchise system for building South-Korean-accredited Emerging Technologies schools across Pakistan. Investors keep their land, capital, and brand; we bring the academic plan, the Discovery & Innovation Hub, the ETM Garage, the teacher training, and the Robotron accreditation."), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "etm.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Investor Deep Dive", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Book a Discovery Call"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__badges"
  }, badges.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.num,
    className: "rm-etm-badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-badge__num"
  }, b.num), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-badge__txt"
  }, b.text))))));
}

/* ============ Five-point ETM story ============ */
function HomeFivePoint() {
  const points = [{
    n: "01",
    t: "ETM-Powered Model",
    b: "Pakistan's first ETM-powered schools, built on South Korean Educational Standards and accredited by Robotron."
  }, {
    n: "02",
    t: "Student-Centric Environment",
    b: "No homework. No rote learning. No exam pressure. PBIL in Discovery & Innovation Hubs and the ETM Garage."
  }, {
    n: "03",
    t: "Islamic Values at the Core",
    b: "Friends of Quran lounge, the Prophet ﷺ as Role Model programme, compulsory Arabic, and an integrated one-book STEAM model."
  }, {
    n: "04",
    t: "Emerging Technologies",
    b: "Robotics, AI and innovation from the early years — including TechNutrition 365, our holistic ECCE programme."
  }, {
    n: "05",
    t: "Reimagined Roles",
    b: "Principal as Mentor. Teacher as Coach. Student as Learner. Backed by the Faculty Development Cell and regular ETM audits."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--mist",
    "data-screen-label": "05 Five-Point ETM Story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What Makes ETM Different",
    heading: "The five-point story.",
    lead: "Every ETM school is built on the same five non-negotiables \u2014 the structural reasons ETM produces graduates the existing system cannot."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-five-point",
    style: {
      marginTop: 56
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    className: "rm-five-point__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-five-point__num"
  }, p.n), /*#__PURE__*/React.createElement("h3", {
    className: "rm-five-point__title"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-five-point__body"
  }, p.b))))));
}

/* ============ NGIS featured card ============ */
function HomeNGIS() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section",
    "data-screen-label": "06 NGIS Feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: "var(--rm-orange)"
    }
  }), "The First ETM School"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-ngis__title"
  }, "NGIS \u2014 NextGen International School."), /*#__PURE__*/React.createElement("p", {
    className: "rm-ngis__strap"
  }, "\"A Project of Robotmea, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("p", {
    className: "rm-ngis__body"
  }, "The first school operating under the ETM franchise \u2014 two campuses in Karachi, opening for Pre-Primary through Grade 5, with the first cohort enrolling from August. NGIS is the live, working demonstration of the model future ETM schools will inherit."), /*#__PURE__*/React.createElement("a", {
    href: "etm.html#ngis",
    className: "rm-btn rm-btn--primary"
  }, "Visit NGIS", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Campuses"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Jinnah Avenue", /*#__PURE__*/React.createElement("br", null), "Model Colony")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "City"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Karachi,", /*#__PURE__*/React.createElement("br", null), "Pakistan")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Grades"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Pre-Primary", /*#__PURE__*/React.createElement("br", null), "through Grade 5")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Enrolment"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Opens", /*#__PURE__*/React.createElement("br", null), "August"))))));
}

/* ============ Stats strip ============ */
function HomeStats() {
  const stats = [{
    n: "300+",
    l: "Schools in Our Network"
  }, {
    n: "30+",
    l: "Countries of Operation"
  }, {
    n: "5,000+",
    l: "Teachers Trained"
  }, {
    n: "200+",
    l: "Projects Delivered"
  }, {
    n: "200K+",
    l: "Students Reached"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-stats",
    "data-screen-label": "07 Stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-stats__grid"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "rm-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__l"
  }, s.l))))));
}

/* ============ COPR Formulas band — redesigned (no image, branded cards) ============ */
function HomeCOPR() {
  // Each formula split into [left, right, result] so we can colour the equation
  const formulas = [{
    l: "Hardwork + Exposure",
    r: "Excellence",
    color: "var(--rm-orange)"
  }, {
    l: "Unity + Faith",
    r: "Discipline",
    color: "var(--rm-blue)"
  }, {
    l: "Communication + Creativity",
    r: "Innovation",
    color: "var(--rm-green)"
  }, {
    l: "Heterogeneous Connectivity + Local Understanding",
    r: "Real Change",
    color: "var(--rm-red)"
  }, {
    l: "Market Research + Business Intelligence",
    r: "Success",
    color: "var(--rm-orange)"
  }, {
    l: "Transparency + Leadership",
    r: "Vision",
    color: "var(--rm-blue)"
  }, {
    l: "Strategic Thinking + Skills",
    r: "Impact",
    color: "var(--rm-green)"
  }, {
    l: "Passion + Pragmatic Approach",
    r: "Value Creation",
    color: "var(--rm-red)"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-copr-band",
    "data-screen-label": "08 COPR Formulas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "How We Think",
    heading: "Nine formulas that govern how we work.",
    lead: "The COPR Nexus operating system \u2014 nine equations we apply to every conversation, every campaign, every partnership."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-grid"
  }, formulas.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-formula-card",
    style: {
      "--accent": f.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("p", {
    className: "rm-formula-card__eq"
  }, f.l, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)"
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    className: "rm-formula-card__result"
  }, f.r)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card rm-formula-card--featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card__num"
  }, "09"), /*#__PURE__*/React.createElement("p", {
    className: "rm-formula-card__eq"
  }, "COPR Nexus ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.4)"
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    className: "rm-formula-card__result"
  }, "\xA0Transactional to Transformational")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "copr-nexus.html",
    className: "rm-btn rm-btn--outline"
  }, "See COPR Nexus", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))));
}

/* ============ Testimonial ============ */
function HomeTestimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--blue",
    "data-screen-label": "09 Testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    dark: true,
    eyebrow: "Voices",
    heading: "What partners are saying."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial-grid"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "rm-quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "rm-quote-card__quote"
  }, "There is no escape from technology in the present times. If we have to win our share and bring this technology to our service and benefit, we need to act fast and act right. I believe Robotmea has come as a vanguard to the region\u2019s educational needs and to help transform the schooling landscape. Let\u2019s join hands to embed technology in our school curriculums to the benefit of our future generations."), /*#__PURE__*/React.createElement("figcaption", {
    className: "rm-quote-card__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-avatar",
    "data-initials": "KM"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__name"
  }, "Kashif Suhail Malik"), /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__role"
  }, "Master Trainer \xB7 IPD and IIUI School")))), /*#__PURE__*/React.createElement("figure", {
    className: "rm-quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "rm-quote-card__quote"
  }, "I have seen students are behaving differently after taking Robotmea Robotic & STEAM based classes and they are learning real technology and becoming more innovative. Robotmea trained teachers are inculcating the real core competencies of 21st century educational skills such as critical thinking, creativity, communication, collaboration and most importantly character building. Well-done Robotmea team for reshaping Middle East, Africa & Pakistan towards innovative societies on the tenets of innovation & entrepreneurship."), /*#__PURE__*/React.createElement("figcaption", {
    className: "rm-quote-card__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-avatar",
    "data-initials": "WA"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__name"
  }, "Wajiha Akram"), /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__role"
  }, "Minister of State for Federal Education & Professional Training")))))));
}

/* ============ Network logo wall ============ */
function HomeNetwork() {
  // 14 chosen from assets/network/ — full grid lives on /network
  const logos = ["named-aces.png", "named-alda.png", "named-iiu-islamabad.png", "named-iqra-residential.png", "named-leaders-harbor.png", "named-nobel-stem.jpg", "named-pioneer-signature.png", "named-read-foundation.png", "partner-01.png", "partner-04.png", "partner-09.png", "partner-13.png", "partner-21.png", "partner-34.png"];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-network"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Our Network",
    heading: "On the ground.",
    lead: "The schools, institutions and partners across Pakistan running Robotmea programmes."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-network__grid",
    style: {
      marginTop: 48
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "rm-network__cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/network/" + l,
    alt: "Network partner"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "network.html",
    className: "rm-btn rm-btn--outline"
  }, "See full network", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))));
}

/* ============ Final CTA band ============ */
function HomeFinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-final-cta",
    "data-screen-label": "11 Final CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-final-cta__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-eyebrow--white",
    style: {
      color: "rgba(255,255,255,.85)",
      marginBottom: 18
    }
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 rm-final-cta__heading"
  }, "Join the ETM movement", /*#__PURE__*/React.createElement("br", null), "to make your child relevant."), /*#__PURE__*/React.createElement("p", {
    className: "rm-final-cta__sub"
  }, "Whether you're a parent, a principal, an investor, a government partner, or press \u2014 there's a desk at Robotmea for you."), /*#__PURE__*/React.createElement("div", {
    className: "rm-final-cta__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Contact IERDG", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Contact COPR Nexus"))));
}

/* ============ Vision + Strategic Objective (two parallel manifestos) ============ */
function HomeVisionStrategic() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-vision-band",
    "data-screen-label": "03 Vision & Strategy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-vision-band__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto__label-num"
  }, "01"), " Our Vision"), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-manifesto__statement"
  }, "Transforming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto-accent"
  }, "The Future Of Youth.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-manifesto__sub"
  }, "The next Pakistani generation \u2014 every Pakistani generation \u2014 deserves a fair shot at the world it is about to inherit. That is the work."), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__sig"
  }, "Robotmea")), /*#__PURE__*/React.createElement("div", {
    className: "rm-vision-band__divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto__label-num"
  }, "02"), " Strategic Objective"), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-manifesto__statement"
  }, "Innovative Education", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto-accent"
  }, "For Shaping Wisdom-Driven Economies.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-manifesto__sub"
  }, "EdTech is the lever. Wisdom-driven economies \u2014 economies whose growth is built on what their people know, build and invent \u2014 are the outcome."), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__sig"
  }, "Robotmea"))));
}

/* ============ Why Robotmea \u2014 World-class positioning ============ */
function HomeWhy() {
  const items = [{
    accent: "var(--rm-blue)",
    accentSoft: "var(--rm-blue-50)",
    title: "Accredited, not affiliated",
    body: "Robotmea is formally accredited by Robotron, South Korea \u2014 a recognised research and accreditation body \u2014 not a reseller or affiliate.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
    }))
  }, {
    accent: "var(--rm-orange)",
    accentSoft: "var(--rm-orange-50)",
    title: "Curriculum-first",
    body: "We are an institute built around curriculum, teacher training and accreditation \u2014 an internationally-aligned curriculum is the heart of the work, not the hardware.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3z",
      transform: "translate(0 -2)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 4v18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 8h6M8 12h6"
    }))
  }, {
    accent: "var(--rm-green)",
    accentSoft: "var(--rm-green-50)",
    title: "Evidence-led",
    body: "Every program operates under a published Monitoring & Evaluation rubric. We measure, we publish, we feed the findings back into the curriculum.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8M9 21V12M15 21V4M21 21V14"
    }))
  }, {
    accent: "var(--rm-red)",
    accentSoft: "var(--rm-red-50)",
    title: "Globally connected",
    body: "An international partner network across South Korea, the Middle East and China keeps the work plugged into world-class research, hardware and industry.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--tight rm-why",
    "data-screen-label": "04 Why Robotmea"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Why Robotmea",
    heading: "A world-class EdTech institution.",
    lead: "Four reasons Pakistani school boards, ministries and investors treat Robotmea as a peer to the world's leading EdTech institutions."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-why__grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    className: "rm-why__card",
    style: {
      "--accent": it.accent,
      "--accent-soft": it.accentSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-why__icon"
  }, it.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-why__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-why__body"
  }, it.body))))));
}

/* ============ For Principals — 6-step school transformation ============ */
function HomePrincipals() {
  const steps = [{
    n: "01",
    t: "Technical Feasibility",
    color: "var(--rm-blue)",
    b: "Plan a feasibility session with our EdTech Specialists. We assess your campus, your curriculum and your readiness.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 11l3 3 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    }))
  }, {
    n: "02",
    t: "Discovery & Innovation Hub",
    color: "var(--rm-orange)",
    b: "Establish your school's flagship D&I Hub — built to the IERDG standard, designed for your space.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6M10 22h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"
    }))
  }, {
    n: "03",
    t: "Adopt the Curriculum",
    color: "var(--rm-green)",
    b: "Bring in IERDG's globally adopted AI, Robotics and STEAM curriculum — integrated with your existing learning outcomes.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    }))
  }, {
    n: "04",
    t: "Train Your Teachers",
    color: "var(--rm-red)",
    b: "Certify your faculty on the Robotron standard. Continuous Professional Development through our Faculty Development Cell.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    }))
  }, {
    n: "05",
    t: "Monitoring & Evaluation",
    color: "var(--rm-blue)",
    b: "Stay connected through our published M&E framework. Quarterly audits, measurable outcomes, transparent reporting.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 3 3 5-6"
    }))
  }, {
    n: "06",
    t: "Keep On Improving",
    color: "var(--rm-orange)",
    b: "Annual curriculum refresh, teacher recertification, and exposure to the broader Robotmea network. The work never stops.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 1 1-3-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-principals",
    "data-screen-label": "06 For Principals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__intro"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "For School Principals",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Transform your school", /*#__PURE__*/React.createElement("br", null), "in six steps.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-principals__lead"
  }, "Already running a school? IERDG partners with existing institutions to bring South Korean EdTech standards into your classroom \u2014 without rebuilding anything. You keep your name, your team, your community; we bring the curriculum, the training, and the accreditation.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-process-flow"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "rm-process-step",
    style: {
      "--accent": s.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-process-step__icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-process-step__num"
  }, "Step ", s.n), /*#__PURE__*/React.createElement("h3", {
    className: "rm-process-step__title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-process-step__body"
  }, s.b)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-eyebrow"
  }, "Ready to start?"), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-h"
  }, "See the full transformation plan inside IERDG.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "institute.html#transform",
    className: "rm-btn rm-btn--primary"
  }, "Open the Plan", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light"
  }, "Book a Session")))));
}
Object.assign(window, {
  HomeHero,
  HomeTrust,
  HomeWhoWeAre,
  HomeVisionStrategic,
  HomeWhy,
  HomePillars,
  HomePrincipals,
  HomeETMBand,
  HomeFivePoint,
  HomeNGIS,
  HomeStats,
  HomeCOPR,
  HomeTestimonial,
  HomeNetwork,
  HomeFinalCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/home-sections.jsx", error: String((e && e.message) || e) }); }

// website/institute-sections.jsx
try { (() => {
/* global React */

/* ============ Institute Hero ============ */
function InstituteHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-inst-hero",
    "data-screen-label": "01 Institute Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-inst-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-hero__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-hero__title-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "The Institute"), /*#__PURE__*/React.createElement("h1", {
    className: "rm-inst-hero__name"
  }, "IERDG"), /*#__PURE__*/React.createElement("p", {
    className: "rm-inst-hero__tagline"
  }, "Where excellence matters."), /*#__PURE__*/React.createElement("p", {
    className: "rm-inst-hero__lead"
  }, "The ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "white"
    }
  }, "Institute for EdTech Research, Development & Growth"), " is Pakistan's first international EdTech research platform \u2014 launched with our partner ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "white"
    }
  }, "Robotron, South Korea"), " to advance research, certification and technology-enabled learning across Pakistan and beyond. It runs through five programs that move EdTech from theory into the classroom."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-accred",
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-accred__seal"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "9",
    r: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 13l-2 8 6-3 6 3-2-8"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-accred__txt-eyebrow"
  }, "Officially Accredited"), /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-accred__txt-h"
  }, "Robotron, South Korea"))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-inst-logo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/ied-logo.png",
    alt: "IERDG \u2014 Institute for EdTech Research, Development & Growth"
  })))));
}

/* ============ The Five Programs — overview grid + ETM redirect ============ */
function InstitutePrograms() {
  const programs = [{
    n: "01",
    c: "var(--rm-green)",
    t: "K-12 Program",
    href: "#k12",
    b: "A 360° turnkey transformation bringing AI, Robotics, IoT, AR/VR, STEAM and entrepreneurship into existing curricula — through an Addition or an Integration model."
  }, {
    n: "02",
    c: "var(--rm-orange)",
    t: "Educational Transformation Movement",
    href: "etm.html",
    b: "Pakistan's first South-Korean-based school transformation framework, accredited by Robotron. A complete franchise model — its own destination.",
    isEtm: true
  }, {
    n: "03",
    c: "var(--rm-blue)",
    t: "Robotmea Emerging Technologies Centre",
    href: "#retc",
    b: "A state-of-the-art hub bridging education, research and industry — 23 short courses, incubation and prototyping at our Lahore CETC campus."
  }, {
    n: "04",
    c: "var(--rm-red)",
    t: "Faculty Development Cell",
    href: "#fdc",
    b: "Empowering educators and school leaders with 21st-century teaching skills, international certification and continuous professional development."
  }, {
    n: "05",
    c: "var(--rm-blue)",
    t: "International Diploma Program",
    href: "#idp",
    b: "Globally aligned certifications in emerging fields — from three months to three years, with theory plus hands-on practical application."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-wings",
    "data-screen-label": "02 Five Programs"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What's Inside",
    heading: "Five programs. One institution.",
    lead: "A research and innovation hub advancing EdTech across Pakistan and beyond \u2014 through research, academic collaboration, international certification, and five programs that reach from the classroom to the workforce."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-wings__grid"
  }, programs.map(w => /*#__PURE__*/React.createElement("a", {
    key: w.n,
    href: w.href,
    className: "rm-wing-card",
    style: {
      "--accent": w.c,
      textDecoration: "none",
      color: "inherit"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-card__num"
  }, "Program ", w.n, " ", w.isEtm && "· External"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-wing-card__title"
  }, w.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-card__body"
  }, w.b)))), /*#__PURE__*/React.createElement("a", {
    href: "etm.html",
    style: {
      textDecoration: "none",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-redirect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-redirect__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-redirect__label"
  }, "Program 02 \xB7 Educational Transformation Movement"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-etm-redirect__title"
  }, "ETM has its own world. Step inside."), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-redirect__sub"
  }, "Tagline, brand, standards, franchise structure, investor journey \u2014 ETM is a destination of its own. Visit the dedicated ETM site to see the full system.")), /*#__PURE__*/React.createElement("span", {
    className: "rm-btn rm-btn--primary"
  }, "Visit the ETM Site", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))))));
}

/* ============ Program 01 — K-12 Program ============ */
function ProgramK12() {
  const pathways = [{
    tag: "Pathway A",
    c: "var(--rm-blue)",
    t: "Addition Model",
    strap: "Future-focused learning without modifying your current academic structure.",
    points: ["AI, Robotics & Coding added to your curriculum within the STEAM framework", "A dedicated AI, Robotics & STEAM Lab, built to standard", "Full AI, Robotics & STEAM curriculum provided", "Teacher training and Monitoring & Evaluation", "Implementable across every grade, K–12", "Hands-on, project-based learning that builds technological literacy, creativity and problem-solving"]
  }, {
    tag: "Pathway B",
    c: "var(--rm-orange)",
    t: "Integration Model",
    strap: "Emerging technology woven into the subjects you already teach.",
    points: ["AI, Robotics, IoT and AR/VR integrated with existing Science & Mathematics", "Innovation Boxes that prepare students for advanced AI, IoT and programming", "A tailored integrated curriculum with complete academic planning and guidelines", "Learning acceleration and skillset development", "An assessment system built into the programme", "Robotmea PMT — full online portal access"]
  }];
  const includes = ["Discovery & Innovation Hubs", "Faculty Development", "Internationally-aligned Curriculum", "Monitoring & Evaluation", "Refresher Training", "Ongoing Support"];
  return /*#__PURE__*/React.createElement("section", {
    id: "k12",
    className: "rm-wing-detail",
    "data-screen-label": "03 K-12 Program"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__num-block",
    style: {
      "--accent": "var(--rm-green)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num"
  }, "Program 01"), /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num-line"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "rm-wing-detail__title"
  }, "K-12 Program"), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__tagline",
    style: {
      "--accent": "var(--rm-green)"
    }
  }, "Future-ready schools, end to end.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__body"
  }, "A complete transformation initiative that prepares schools for the future of learning. The K-12 Program brings AI, Robotics, IoT, AR/VR, Astronomy, STEAM and Entrepreneurship into your existing curriculum \u2014 a 360\xB0 turnkey solution delivered through two flexible pathways.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-pathway-grid"
  }, pathways.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.t,
    className: "rm-pathway",
    style: {
      "--accent": p.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pathway__tag"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pathway__title"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-pathway__strap"
  }, p.strap), /*#__PURE__*/React.createElement("ul", {
    className: "rm-pathway__list"
  }, p.points.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, x)))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-k12-includes"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-k12-includes__label"
  }, "Every K-12 engagement includes"), /*#__PURE__*/React.createElement("div", {
    className: "rm-k12-includes__chips"
  }, includes.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "rm-k12-chip"
  }, i))))));
}

/* ============ Program 03 — Robotmea Emerging Technologies Centre ============ */
function ProgramRETC() {
  const offers = [{
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "4",
      width: "18",
      height: "12",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 20h8M12 16v4"
    })),
    t: "Emerging-Tech Training",
    b: "AI, Robotics, IoT, AR/VR, Coding, Cybersecurity and Automation — taught hands-on by practitioners."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 2v6l-5 9a2 2 0 0 0 2 3h12a2 2 0 0 0 2-3l-5-9V2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 2h8"
    })),
    t: "Research & Innovation",
    b: "An applied research environment where new ideas are tested, refined and taken toward market."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 7v5l3 3"
    })),
    t: "Short, Focused Courses",
    b: "3–6 month programmes designed for rapid, job-ready skill acquisition."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21h18M5 21V8l7-4 7 4v13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21v-5h6v5"
    })),
    t: "Industry-Aligned Skills",
    b: "Curriculum built with industry so graduates arrive ready for the roles employers are hiring for."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21h6"
    })),
    t: "Incubation & Prototyping",
    b: "Technology incubation and prototyping support that turns student projects into working products."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
    })),
    t: "Certifications",
    b: "Professional development and certifications recognised across the emerging-technologies sector."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M6 9V2h12v7a6 6 0 0 1-12 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 5H3v2a3 3 0 0 0 3 3M18 5h3v2a3 3 0 0 1-3 3M9 21h6M12 15v6"
    })),
    t: "Challenges & Competitions",
    b: "Innovation challenges and competitions that push learners to build under real-world constraints."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "9",
      r: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M15 15l6 6M13 13a5 5 0 0 0 7 0"
    })),
    t: "Industry–Academia Bridge",
    b: "Closing the gap between what classrooms teach and what industry needs — the centre's founding purpose."
  }];
  const highlights = [{
    n: "23",
    l: "Courses Offered"
  }, {
    n: "3–6",
    l: "Months per Course"
  }, {
    n: "Lahore",
    l: "CETC Campus"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "retc",
    className: "rm-wing-detail rm-wing-detail--night",
    "data-screen-label": "04 RETC"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__num-block",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num"
  }, "Program 03"), /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num-line"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "rm-wing-detail__title"
  }, "Robotmea Emerging Technologies Centre"), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__tagline",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, "Where education meets industry.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__body"
  }, "A state-of-the-art hub bridging the gap between education, research and industry. RETC delivers hands-on emerging-technologies training, applied research and incubation \u2014 currently running 23 courses at our Lahore CETC campus.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-retc-highlights"
  }, highlights.map(h => /*#__PURE__*/React.createElement("div", {
    key: h.l,
    className: "rm-retc-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-retc-stat__n"
  }, h.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-retc-stat__l"
  }, h.l)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-offers rm-wing-offers--4",
    style: {
      marginTop: 36
    }
  }, offers.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.t,
    className: "rm-wing-offer",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-offer__icon"
  }, o.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-wing-offer__title"
  }, o.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-offer__body"
  }, o.b))))));
}

/* ============ Program 04 — Faculty Development Cell ============ */
function ProgramFDC() {
  const offers = [{
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    })),
    t: "Teacher Training & PD",
    b: "Structured professional development that brings an entire faculty up to a modern teaching standard."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"
    })),
    t: "Educational Leadership",
    b: "Leadership programmes for principals and heads of department driving whole-school change."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M5 19l2-2M17 7l2-2"
    })),
    t: "AI, Robotics & STEAM",
    b: "Deep capability-building in AI, Robotics, STEAM education and emerging technologies."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3z",
      transform: "translate(0 -1)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 4v18M8 9h6M8 13h6"
    })),
    t: "Curriculum & Assessment",
    b: "Innovation in curriculum design and assessment — moving beyond rote learning toward evidence of real understanding."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
    })),
    t: "International Certification",
    b: "Internationally recognised certifications and recognition for participating educators."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 1 1-3-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    })),
    t: "Continuous PD (CPD)",
    b: "Ongoing CPD cycles that keep the standard alive long after the initial training ends."
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    })),
    t: "International L&D",
    b: "Access to international learning-and-development programmes, courses and exchange opportunities."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "fdc",
    className: "rm-wing-detail rm-wing-detail--paper",
    "data-screen-label": "05 FDC"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__num-block",
    style: {
      "--accent": "var(--rm-red)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num"
  }, "Program 04"), /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num-line"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "rm-wing-detail__title"
  }, "Faculty Development Cell"), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__tagline",
    style: {
      "--accent": "var(--rm-red)"
    }
  }, "Teachers first. Always.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__body"
  }, "The single most reliable predictor of a programme's outcome is the teacher standing next to the technology. The Faculty Development Cell empowers educators and school leaders with 21st-century teaching skills \u2014 from emerging-technology pedagogy to international certification and continuous professional development.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-offers rm-wing-offers--4"
  }, offers.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.t,
    className: "rm-wing-offer",
    style: {
      "--accent": "var(--rm-red)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-offer__icon"
  }, o.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-wing-offer__title"
  }, o.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-offer__body"
  }, o.b))))));
}

/* ============ Program 05 — International Diploma Program ============ */
function ProgramIDP() {
  const tracks = [{
    length: "3 Months",
    name: "Certificate in AI Fundamentals",
    why: "An applied introduction to machine learning, computer vision and the modern AI stack — project-led from day one.",
    tag: "Foundational"
  }, {
    length: "6 Months",
    name: "Diploma in Robotics & Coding",
    why: "Hands-on electronics, mechanical design and competition-grade robotics with a programming backbone.",
    tag: "Foundational"
  }, {
    length: "1 Year",
    name: "Diploma in IoT & Smart Systems",
    why: "Industrial IoT, edge computing and the connectivity layer that turns devices into infrastructure.",
    tag: "Intermediate"
  }, {
    length: "1 Year",
    name: "Diploma in Data Science",
    why: "Data engineering, analytics and applied modelling for the decisions modern organisations run on.",
    tag: "Intermediate"
  }, {
    length: "2 Years",
    name: "Advanced Diploma in Cybersecurity",
    why: "Defensive and offensive security, network hardening and the practice of keeping systems safe at scale.",
    tag: "Advanced"
  }, {
    length: "3 Years",
    name: "Higher Diploma in Emerging Tech & STEAM",
    why: "Modular — combine AI, Robotics, IoT, EdTech and STEAM into the flagship credential of the programme.",
    tag: "Flagship"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "idp",
    className: "rm-wing-detail",
    "data-screen-label": "06 IDP"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__header"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-wing-detail__num-block",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num"
  }, "Program 05"), /*#__PURE__*/React.createElement("span", {
    className: "rm-wing-detail__num-line"
  })), /*#__PURE__*/React.createElement("h2", {
    className: "rm-wing-detail__title"
  }, "International Diploma Program"), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__tagline",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, "Globally aligned. Career ready.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-wing-detail__body"
  }, "Globally aligned certifications in emerging fields \u2014 from three months to three years. Programmes span AI, Robotics, IoT, Data Science, Cybersecurity, EdTech and STEAM, combining theory with hands-on practical application, globally recognised competencies, and clear academic and career advancement pathways.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-tracks"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-head"
  }, /*#__PURE__*/React.createElement("div", null, "Length"), /*#__PURE__*/React.createElement("div", null, "Programme"), /*#__PURE__*/React.createElement("div", null, "What it's for"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, "Stream")), tracks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.name,
    className: "rm-diploma-track"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-track__length"
  }, t.length), /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-track__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-track__why"
  }, t.why), /*#__PURE__*/React.createElement("span", {
    className: "rm-diploma-track__tag"
  }, t.tag))), /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-diploma-foot__copy"
  }, /*#__PURE__*/React.createElement("strong", null, "Globally recognised."), " Theory plus hands-on practical application, with clear academic and career advancement pathways."), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary rm-btn--sm"
  }, "Apply Now", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))))));
}

/* ============ Transform Your School — interactive icon stepper ============ */
function InstituteTransform() {
  const steps = [{
    n: "01",
    c: "var(--rm-blue)",
    glow: "rgba(68,158,184,.45)",
    label: "Feasibility",
    t: "Plan a Technical Feasibility Session",
    tag: "Step 01 · Discovery",
    b: "We start with a structured 90-minute session with an IERDG EdTech Specialist — on your campus or ours. We assess your physical infrastructure, your current academic plan, your teacher capacity, your community profile, and your readiness for emerging-technologies integration. You leave with a written feasibility brief, not a sales pitch.",
    bullets: ["Campus walkthrough", "Curriculum gap analysis", "Teacher capacity assessment", "Written feasibility brief"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "11",
      cy: "11",
      r: "7"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 21l-4.3-4.3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 8v3l2 2"
    }))
  }, {
    n: "02",
    c: "var(--rm-orange)",
    glow: "rgba(255,135,11,.5)",
    label: "D&I Hub",
    t: "Establish Your Discovery & Innovation Hub",
    tag: "Step 02 · Build",
    b: "Every Robotmea-partnered school operates a flagship innovation space, built to a single IERDG standard. We provide the room specifications, the equipment list, the programme design, the staffing model, and the safety brief. You provide the space.",
    bullets: ["Room blueprints to standard", "Full equipment list", "Programme design", "Staffing & rotation model"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6M10 22h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"
    }))
  }, {
    n: "03",
    c: "var(--rm-green)",
    glow: "rgba(125,158,62,.5)",
    label: "Curriculum",
    t: "Adopt the IERDG Curriculum",
    tag: "Step 03 · Adopt",
    b: "Bring in our globally adopted AI, Robotics and STEAM curriculum — well integrated with your existing learning outcomes and aligned with the Pakistan National Curriculum (NCP). The IERDG team handles the integration mapping so nothing in your existing programme is lost.",
    bullets: ["K–12 STEAM scope-and-sequence", "NCP integration mapping", "Vetted project libraries", "Bilingual content"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    }))
  }, {
    n: "04",
    c: "var(--rm-red)",
    glow: "rgba(235,72,72,.5)",
    label: "Teachers",
    t: "Train Your Teachers",
    tag: "Step 04 · Certify",
    b: "We certify your existing faculty on the Robotron, South Korea standard — no need to hire a new team. Modular training tracks for classroom teachers, school leaders, and master trainers, supported by the Faculty Development Cell embedded inside your school for continuous CPD.",
    bullets: ["Certified Teacher Pathway", "School Leadership Track", "Master Trainer Programme", "On-campus FDC"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6M2 10l10-5 10 5-10 5z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12v5c3 3 9 3 12 0v-5"
    }))
  }, {
    n: "05",
    c: "var(--rm-blue)",
    glow: "rgba(68,158,184,.45)",
    label: "M&E",
    t: "Stay Connected Through Monitoring & Evaluation",
    tag: "Step 05 · Measure",
    b: "IERDG doesn't hand over the curriculum and walk away. Every partner school operates under our published M&E framework — quarterly site audits, anonymised central data, an annual Impact Report you can share with parents and trustees.",
    bullets: ["Quarterly on-site audits", "Anonymised central data", "Annual Impact Report", "Direct M&E support line"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 3 3 5-6"
    }))
  }, {
    n: "06",
    c: "var(--rm-orange)",
    glow: "rgba(255,135,11,.45)",
    label: "Improve",
    t: "Keep On Improving",
    tag: "Step 06 · Evolve",
    b: "Annual curriculum refreshes. Teacher recertification cycles. Exposure to the broader Robotmea network — competitions, peer-school events, international partner showcases. Joining IERDG is not a one-time procurement; it is an ongoing membership in a network of schools committed to the same standard.",
    bullets: ["Annual curriculum refresh", "Teacher recertification", "Network competitions", "International exchanges"],
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 1 1-3-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }))
  }];
  const [idx, setIdx] = React.useState(0);
  const step = steps[idx];
  return /*#__PURE__*/React.createElement("section", {
    id: "transform",
    className: "rm-transform-x",
    "data-screen-label": "07 Transform"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__intro"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "For School Principals",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Transform your school", /*#__PURE__*/React.createElement("br", null), "in six steps.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-transform-x__lead"
  }, "IERDG partners with existing schools to bring South Korean EdTech standards into your classroom \u2014 without rebuilding anything. Click any step to read it. You keep your name, your team, your community; we bring the curriculum, the training, and the accreditation.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__rail",
    role: "tablist"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.n,
    type: "button",
    role: "tab",
    "aria-selected": i === idx,
    onClick: () => setIdx(i),
    className: "rm-transform-x__step " + (i === idx ? "is-active" : ""),
    style: {
      "--accent": s.c,
      "--accent-glow": s.glow
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-transform-x__step-disc"
  }, s.icon, /*#__PURE__*/React.createElement("span", {
    className: "rm-transform-x__step-num"
  }, s.n)), /*#__PURE__*/React.createElement("span", {
    className: "rm-transform-x__step-label"
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__panel",
    style: {
      "--accent": step.c,
      "--accent-glow": step.glow
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__panel-art"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-transform-x__panel-art-step"
  }, "Step ", step.n, " of 06"), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__panel-art-icon"
  }, step.icon)), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__panel-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__panel-tag"
  }, step.tag), /*#__PURE__*/React.createElement("h3", {
    className: "rm-transform-x__panel-title"
  }, step.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-transform-x__panel-text"
  }, step.b), /*#__PURE__*/React.createElement("ul", {
    className: "rm-transform-x__panel-bullets"
  }, step.bullets.map(x => /*#__PURE__*/React.createElement("li", {
    key: x
  }, x))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__nav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-transform-x__nav-arrow",
    onClick: () => setIdx(i => Math.max(0, i - 1)),
    disabled: idx === 0,
    "aria-label": "Previous step"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__nav-counter"
  }, /*#__PURE__*/React.createElement("span", null, "Step ", String(idx + 1).padStart(2, "0"), " / 06"), /*#__PURE__*/React.createElement("span", {
    className: "rm-transform-x__nav-counter-bar",
    style: {
      "--accent": step.c,
      "--progress": (idx + 1) / steps.length * 100 + "%"
    }
  }), /*#__PURE__*/React.createElement("span", null, step.label)), /*#__PURE__*/React.createElement("button", {
    className: "rm-transform-x__nav-arrow",
    onClick: () => setIdx(i => Math.min(steps.length - 1, i + 1)),
    disabled: idx === steps.length - 1,
    "aria-label": "Next step"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__final-cta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__final-h"
  }, "Ready for a feasibility session?"), /*#__PURE__*/React.createElement("div", {
    className: "rm-transform-x__final-sub"
  }, "It's a single 90-minute conversation. No commitment required.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary"
  }, "Book a Session", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "#transform",
    className: "rm-btn rm-btn--ghost-light"
  }, "Top of Plan")))));
}
Object.assign(window, {
  InstituteHero,
  InstitutePrograms,
  ProgramK12,
  ProgramRETC,
  ProgramFDC,
  ProgramIDP,
  InstituteTransform
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/institute-sections.jsx", error: String((e && e.message) || e) }); }

// website/intl-sections.jsx
try { (() => {
/* global React */

/* ============ International Partners Hero ============ */
function IntlHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-intl-hero",
    "data-screen-label": "01 Intl Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-intl-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "Global Ecosystem"), /*#__PURE__*/React.createElement("h1", {
    className: "rm-intl-hero__title"
  }, "Where Robotmea", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-intl-hero__title-accent"
  }, "Draws Its Standard.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-intl-hero__lead"
  }, "Robotmea is not a local vendor; we are the Pakistani delivery arm of a network of South Korean research institutions, hardware innovators, and chambers of commerce \u2014 organisations with decades of evidence behind every kit, every curriculum, every certification we put our name to.")));
}

/* ============ Metrics strip ============ */
function IntlMetrics() {
  const metrics = [{
    c: "var(--rm-orange)",
    n: "30+",
    l: "Years Combined Heritage",
    sub: "Across our South Korean R&D and accreditation partners."
  }, {
    c: "var(--rm-blue)",
    n: "07",
    l: "International Partners",
    sub: "Across Korea, the Middle East and connectivity technologies."
  }, {
    c: "var(--rm-green)",
    n: "11",
    l: "Patents Held",
    sub: "Granted to Neopia for educational electronic block systems."
  }, {
    c: "var(--rm-red)",
    l: "ISO 9001 · CE · FCC",
    n: "Certified",
    sub: "Quality, safety and electromagnetic-compliance marks held by partners."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-intl-metrics",
    "data-screen-label": "02 Metrics"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-intl-metrics__grid"
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.l,
    className: "rm-intl-metric",
    style: {
      "--accent": m.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-intl-metric__n"
  }, m.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-intl-metric__l"
  }, m.l), /*#__PURE__*/React.createElement("div", {
    className: "rm-intl-metric__sub"
  }, m.sub))))));
}

/* ============ Partner Cards ============ */
function IntlPartners() {
  const partners = [{
    logo: "../assets/partners/robotron.png",
    country: "Republic of Korea",
    c: "var(--rm-orange)",
    role: "Accreditor · Curriculum Anchor",
    name: "Robotron",
    strap: "Two decades of Korean STEAM heritage.",
    lead: "Robotron is a Republic-of-Korea EdTech research and content provider founded at the turn of the century. Selected by the Korean government for next-generation robotics R&D, certified to ISO 9001 / CE / FCC, and adopted across Korea's public schools as the reference STEAM platform — Robotron is the single most important institutional anchor in Robotmea's network.",
    facts: [{
      n: "2001",
      l: "Founded"
    }, {
      n: "ISO 9001",
      l: "Certified"
    }, {
      n: "K-12",
      l: "Public-School Reach"
    }],
    what: ["Accreditation", "Curriculum Framework", "STEAM Standards", "Korean Govt R&D"],
    url: "https://robotron.co.kr"
  }, {
    logo: "../assets/partners/neopia.png",
    country: "Republic of Korea",
    c: "var(--rm-blue)",
    role: "Hardware · AI Coding Content",
    name: "Neopia",
    strap: "Korea's pioneers of the educational electronic block.",
    lead: "Neopia is Korea's leading provider of robotics products and AI-coding content for schools. Selected for the Ministry of Knowledge Economy's Next-Generation Digital Leader Development Program and holding eleven patents for electronic-block systems, Neopia's content has been adopted as classroom teaching material across the Korean curriculum for two decades.",
    facts: [{
      n: "1999",
      l: "Founded"
    }, {
      n: "11",
      l: "Patents Held"
    }, {
      n: "20 yrs+",
      l: "In Korean Textbooks"
    }],
    what: ["Robotics Kits", "AI Coding Content", "Electronic Blocks", "Ministry-Backed"],
    url: "https://neopia.world"
  }, {
    logo: "../assets/partners/minirobot.png",
    country: "Republic of Korea",
    c: "var(--rm-green)",
    role: "Robotics Hardware Partner",
    name: "MiniRobot",
    strap: "Performance-grade robotics, built for the classroom.",
    lead: "MiniRobot is an Incheon-based Korean designer of educational humanoid and competition-grade robotics platforms — the same kits used in Korean schools, science museums and theme parks. MiniRobot's hardware powers the Robotmea robotics tracks and the ETM Garage, giving Pakistani students access to the same machines on which Korea trains its own engineers.",
    facts: [{
      n: "Incheon",
      l: "South Korea"
    }, {
      n: "K-12",
      l: "Curriculum Fit"
    }, {
      n: "AI",
      l: "Driven Solutions"
    }],
    what: ["Humanoid Robotics", "Competition Platforms", "AI Robotics", "Schools & Museums"],
    url: "https://minirobot.co.kr"
  }, {
    logo: "../assets/partners/tdme.png",
    country: "United Arab Emirates",
    c: "var(--rm-red)",
    role: "Parent Group",
    name: "Time Dimension Middle East",
    strap: "The MENA holding arm behind Robotmea.",
    lead: "TDME is Robotmea's Middle-East-headquartered parent group — focused on EdTech, applied innovation, and youth development across the MENA region. TDME provides Robotmea with regional capital, government relationships across the Gulf, and a direct line into MENA innovation funds and procurement frameworks.",
    facts: [{
      n: "MENA",
      l: "Regional Reach"
    }, {
      n: "EdTech",
      l: "Sector Focus"
    }, {
      n: "Innovation",
      l: "Mandate"
    }],
    what: ["Parent Holding", "MENA Channels", "Innovation Capital", "Government Relations"],
    url: "https://tdme.net"
  }, {
    logo: "../assets/partners/esim-gen.png",
    country: "Global Connectivity",
    c: "var(--rm-blue)",
    role: "Collaborative Connectivity Partner",
    name: "esim·gen",
    strap: "Keeping the Robotmea team connected across the globe.",
    lead: "esim·gen is Robotmea's collaborative partner for connectivity services — providing the SIM and eSIM infrastructure that keeps the Robotmea team online wherever the work takes us. As our people, devices and IoT-classroom hardware move between Pakistan, Korea, the Middle East and beyond, esim·gen ensures seamless, friction-free connectivity across borders.",
    facts: [{
      n: "eSIM",
      l: "Provisioning"
    }, {
      n: "Global",
      l: "Coverage"
    }, {
      n: "Team",
      l: "Always Online"
    }],
    what: ["eSIM Provisioning", "Global Connectivity", "Cross-Border Coverage", "Travel Connectivity"],
    url: "https://esimgen.com"
  }, {
    logo: "../assets/partners/sinion.jpeg",
    country: "R&D · China",
    c: "var(--rm-orange)",
    role: "R&D Partner · China",
    name: "Sinion Smart Connections",
    strap: "Our gateway to China's emerging technologies.",
    lead: "Sinion is Robotmea's R&D partner in China — our direct access point to the emerging technologies coming out of the world's fastest-moving hardware ecosystem. From new robotics platforms to AI and IoT hardware, Sinion sources, evaluates and tailors the latest Chinese innovations for the Middle East, Africa and Pakistan, so our classrooms run on technology that is both cutting-edge and regionally fit.",
    facts: [{
      n: "R&D",
      l: "In China"
    }, {
      n: "Emerging",
      l: "Technologies"
    }, {
      n: "Region",
      l: "Tailored"
    }],
    what: ["China R&D", "Emerging-Tech Access", "Hardware Sourcing", "Regional Tailoring"],
    url: "#"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-partners-page",
    "data-screen-label": "03 Partners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Our International Partners",
    heading: "The institutions our standard rests on.",
    lead: "Each partner anchors a different layer of Robotmea's work \u2014 accreditation, hardware, curriculum, capital, connectivity. Together they form the global ecosystem that gives Pakistani classrooms world-class footing."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, partners.map(p => /*#__PURE__*/React.createElement("article", {
    key: p.name,
    className: "rm-pcard",
    style: {
      "--accent": p.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__logo-frame"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-pcard__country-pill"
  }, p.country), /*#__PURE__*/React.createElement("img", {
    src: p.logo,
    alt: p.name,
    className: "rm-pcard__logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__role"
  }, p.role), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pcard__name"
  }, p.name), /*#__PURE__*/React.createElement("p", {
    className: "rm-pcard__strap"
  }, p.strap), /*#__PURE__*/React.createElement("p", {
    className: "rm-pcard__lead"
  }, p.lead), /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__facts"
  }, p.facts.map(f => /*#__PURE__*/React.createElement("div", {
    key: f.l,
    className: "rm-pcard__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__fact-n"
  }, f.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__fact-l"
  }, f.l)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-pcard__what"
  }, p.what.map(w => /*#__PURE__*/React.createElement("span", {
    key: w,
    className: "rm-pcard__tag"
  }, w))), p.url && p.url !== "#" && /*#__PURE__*/React.createElement("a", {
    href: p.url,
    target: "_blank",
    rel: "noreferrer",
    className: "rm-pcard__link"
  }, "Visit Partner", /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "7 17 17 7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "7 7 17 7 17 17"
  })))))))));
}

/* ============ Accreditations & Certifications ============ */
function IntlAccreds() {
  const items = [{
    tag: "Accreditation",
    title: "Robotron, South Korea",
    body: "Robotmea is officially accredited by Robotron — every IERDG diploma, ETM school standard, and curriculum we publish carries the Robotron standard.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
    }))
  }, {
    tag: "Quality Mark",
    title: "ISO 9001 — Quality Management",
    body: "Our hardware and curriculum partners operate to ISO 9001 quality management standards, audited annually.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "9",
      r: "6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 13l-2 8 6-3 6 3-2-8"
    }))
  }, {
    tag: "Product Safety",
    title: "CE Marking — European Conformity",
    body: "All electronic kits in our deployment meet European Conformity standards for health, safety and environmental protection.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 9l-1 6M14 9l-1 6M16 9h-3M16 12h-3"
    }))
  }, {
    tag: "Electromagnetic",
    title: "FCC Certified",
    body: "Federal Communications Commission certification for electromagnetic emissions on connected classroom hardware.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 12a7 7 0 0 1 14 0"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M2 12a10 10 0 0 1 20 0"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "2"
    }))
  }, {
    tag: "Curriculum Alignment",
    title: "Pakistan National Curriculum",
    body: "Every Robotmea curriculum is mapped to NCP learning outcomes, ensuring full continuity with national academic frameworks.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    }))
  }, {
    tag: "Methodology",
    title: "STEAM + PBIL Standard",
    body: "Programmes are delivered to a published STEAM + Project-Based Inquiry Learning framework — the same standard adopted in Korean public schools.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2v3M12 19v3M22 12h-3M5 12H2M19 5l-2 2M7 17l-2 2M5 19l2-2M17 7l2-2"
    }))
  }, {
    tag: "Government R&D",
    title: "Korean Ministry-Backed",
    body: "Partner companies selected for the Ministry of Knowledge Economy's Next-Generation Digital Leader Development Program.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8l9-5 9 5v13"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 21V12h6v9"
    }))
  }, {
    tag: "Teacher Development",
    title: "Faculty Development Cell",
    body: "Every Robotmea-partnered school operates an FDC — quarterly classroom audits, continuous CPD, peer review built into the standard.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 21v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 12l-3 3-2-2"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-accreds",
    "data-screen-label": "04 Accreds"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-accreds__inner"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    dark: true,
    eyebrow: "Accreditations & Certifications",
    heading: "The credentials behind every Robotmea programme.",
    lead: "The marks our partners carry. The standards we deliver to. The published rubric we are accountable against."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-accreds__grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    className: "rm-accred"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-accred__icon"
  }, it.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-accred__tag"
  }, it.tag), /*#__PURE__*/React.createElement("h3", {
    className: "rm-accred__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-accred__body"
  }, it.body))))));
}

/* ============ Global Presence — map + footprint list ============ */
function IntlPresence() {
  const places = [{
    c: "var(--rm-orange)",
    flag: "PK",
    where: "Pakistan",
    what: "Delivery Headquarters · ETM Schools"
  }, {
    c: "var(--rm-blue)",
    flag: "KR",
    where: "Republic of Korea",
    what: "Robotron · Neopia · MiniRobot"
  }, {
    c: "var(--rm-red)",
    flag: "AE",
    where: "United Arab Emirates",
    what: "TDME — Parent Group, MENA Office"
  }, {
    c: "var(--rm-green)",
    flag: "CN",
    where: "China",
    what: "Industry & Manufacturing Partners"
  }, {
    c: "var(--rm-blue)",
    flag: "INTL",
    where: "Cross-Border",
    what: "esim·gen — Connectivity Across Markets"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-presence",
    "data-screen-label": "05 Presence"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Our Global Footprint",
    heading: "Where the network runs.",
    lead: "Robotmea is operated from Pakistan, anchored in Korea, capitalised from the UAE, manufactured through China, and connected globally \u2014 a deliberate cross-border architecture that gives Pakistani students access to the world's leading EdTech infrastructure."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-presence__layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-presence__map"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 800 420",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "mapBg",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#f3f6f9"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#e8eef4"
  }))), /*#__PURE__*/React.createElement("rect", {
    width: "800",
    height: "420",
    rx: "16",
    fill: "url(#mapBg)"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "#cbd6df",
    opacity: ".82"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M70 110 Q90 100 110 110 L130 160 Q135 200 120 230 L100 260 Q70 290 90 320 L110 340 L80 360 L60 340 Q50 300 60 270 Q40 230 60 190 Q60 150 70 110 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M340 100 Q360 90 390 95 Q420 100 440 120 L450 150 Q435 170 410 175 L380 170 Q360 165 350 145 Q335 125 340 100 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M390 180 Q420 175 440 195 L460 230 Q465 270 450 300 L425 340 Q400 350 380 330 Q360 300 365 270 Q370 230 390 180 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M460 100 Q510 85 560 95 L620 115 Q660 130 680 160 L700 200 Q690 230 660 240 L620 250 Q580 240 540 220 L490 200 Q460 170 460 140 Q455 120 460 100 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M640 290 Q670 285 700 295 L720 310 Q715 335 690 340 Q655 340 645 320 Q635 305 640 290 Z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "#ff870b",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    opacity: ".65",
    strokeDasharray: "3 5"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M525 175 Q540 80 660 130"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M525 175 Q470 130 440 130"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M525 175 Q540 220 700 310"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M525 175 Q620 160 660 170"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "525",
    cy: "175",
    r: "14",
    fill: "#ff870b",
    opacity: ".25"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "525",
    cy: "175",
    r: "7",
    fill: "#ff870b",
    stroke: "white",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("text", {
    x: "525",
    y: "208",
    textAnchor: "middle",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "11",
    fontWeight: "800",
    fill: "#14202b",
    letterSpacing: "1.5"
  }, "PAKISTAN \xB7 HQ"), /*#__PURE__*/React.createElement("circle", {
    cx: "660",
    cy: "130",
    r: "11",
    fill: "#449eb8",
    opacity: ".22"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "660",
    cy: "130",
    r: "5.5",
    fill: "#449eb8",
    stroke: "white",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "660",
    y: "160",
    textAnchor: "middle",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "10",
    fontWeight: "800",
    fill: "#14202b",
    letterSpacing: "1.5"
  }, "KOREA"), /*#__PURE__*/React.createElement("circle", {
    cx: "440",
    cy: "200",
    r: "11",
    fill: "#eb4848",
    opacity: ".22"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "440",
    cy: "200",
    r: "5.5",
    fill: "#eb4848",
    stroke: "white",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "440",
    y: "228",
    textAnchor: "middle",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "10",
    fontWeight: "800",
    fill: "#14202b",
    letterSpacing: "1.5"
  }, "UAE"), /*#__PURE__*/React.createElement("circle", {
    cx: "620",
    cy: "160",
    r: "11",
    fill: "#7d9e3e",
    opacity: ".22"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "620",
    cy: "160",
    r: "5.5",
    fill: "#7d9e3e",
    stroke: "white",
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("text", {
    x: "610",
    y: "190",
    textAnchor: "middle",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "10",
    fontWeight: "800",
    fill: "#14202b",
    letterSpacing: "1.5"
  }, "CHINA")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-presence__list"
  }, places.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.where,
    className: "rm-presence__item",
    style: {
      "--accent": p.c
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-presence__flag"
  }, p.flag), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-presence__where"
  }, p.where), /*#__PURE__*/React.createElement("div", {
    className: "rm-presence__what"
  }, p.what)), /*#__PURE__*/React.createElement("span", {
    className: "rm-presence__dot"
  })))))));
}

/* ============ Become a Partner CTA ============ */
function IntlCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-intl-cta",
    "data-screen-label": "06 Become a Partner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-intl-cta__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-eyebrow--white",
    style: {
      color: "rgba(255,255,255,.92)"
    }
  }, "Become a Partner"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-intl-cta__h"
  }, "Plug into the Robotmea", /*#__PURE__*/React.createElement("br", null), "ecosystem."), /*#__PURE__*/React.createElement("p", {
    className: "rm-intl-cta__sub"
  }, "Are you a research institution, technology company, hardware innovator, or chamber of commerce that wants to plug into a 30+ country EdTech network? COPR Nexus runs partner intake \u2014 start the conversation today."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Talk to COPR Nexus", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "copr-nexus.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Explore COPR Nexus"))));
}
Object.assign(window, {
  IntlHero,
  IntlMetrics,
  IntlPartners,
  IntlAccreds,
  IntlPresence,
  IntlCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/intl-sections.jsx", error: String((e && e.message) || e) }); }

// website/network-sections.jsx
try { (() => {
/* global React */

/* ============ Network Hero ============ */
function NetHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-net-hero",
    "data-screen-label": "01 Network Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-net-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "Our Network"), /*#__PURE__*/React.createElement("h1", {
    className: "rm-net-hero__title"
  }, "The Schools, Institutions", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-net-hero__title-accent"
  }, "& Partners On The Ground.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-net-hero__lead"
  }, "Robotmea is delivered through a network of institutions across Pakistan and beyond \u2014 universities, school chains, residential schools, community foundations, and learning centres. Each operates Robotmea programmes inside its own brand, on its own ground, to a shared global standard.")));
}

/* ============ Stats strip ============ */
function NetStats() {
  const stats = [{
    c: "var(--rm-orange)",
    n: "250+",
    l: "Discovery & Innovation Hubs"
  }, {
    c: "var(--rm-blue)",
    n: "120+",
    l: "Institutions"
  }, {
    c: "var(--rm-green)",
    n: "All",
    l: "Levels — K-12 To University"
  }, {
    c: "var(--rm-red)",
    n: "1",
    l: "Shared Robotron Standard"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-net-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-net-stats__grid"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "rm-net-stat",
    style: {
      "--accent": s.c
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-net-stat__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-net-stat__l"
  }, s.l))))));
}

/* ============ Tier 2 — Long-tail school network grid ============ */
function NetGrid() {
  // Curated, uniform partner logos ("Logos for our partners section" set)
  const slugs = ["01", "02", "03", "04", "05", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "37", "38", "39", "40", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58"];
  // Additional partner logos from the full logo library
  const extras = ["extra-001.png", "extra-002.png", "extra-003.png", "extra-004.jfif", "extra-005.png", "extra-006.png", "extra-007.png", "extra-008.png", "extra-009.png", "extra-010.png", "extra-011.png", "extra-012.png", "extra-013.png", "extra-014.png", "extra-015.png", "extra-016.jpg", "extra-017.png", "extra-018.png", "extra-019.png", "extra-020.jpg", "extra-021.png", "extra-022.png", "extra-023.png", "extra-024.png", "extra-025.png", "extra-026.png", "extra-027.png", "extra-028.png", "extra-029.png", "extra-030.png", "extra-031.png", "extra-032.png", "extra-033.png", "extra-034.png", "extra-035.png", "extra-036.png", "extra-037.png", "extra-038.png", "extra-039.png", "extra-040.png", "extra-041.png", "extra-042.png", "extra-043.png", "extra-044.png", "extra-045.png", "extra-046.png", "extra-047.png", "extra-048.png", "extra-049.png", "extra-050.png", "extra-051.png", "extra-052.png", "extra-053.jpeg", "extra-054.jpeg", "extra-055.jpeg", "extra-056.jpeg", "extra-057.jpeg", "extra-058.jpeg"];
  const total = slugs.length + extras.length;
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-net-tier rm-net-tier--alt",
    "data-screen-label": "03 Network Grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-net-tier__head"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "Extended Network",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Schools, centres &", /*#__PURE__*/React.createElement("br", null), "learning partners.")
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "rm-net-tier__lead"
  }, "The wider Robotmea network \u2014 schools, technical centres, NGOs, and learning institutions across Pakistan implementing our STEAM, Robotics, AI, and emerging-technologies programmes."), /*#__PURE__*/React.createElement("span", {
    className: "rm-net-tier__count",
    style: {
      "--accent": "var(--rm-blue)"
    }
  }, total, "+ Institutions"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-net-grid"
  }, slugs.map(s => /*#__PURE__*/React.createElement("div", {
    key: `p-${s}`,
    className: "rm-net-grid__cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../assets/network/partner-${s}.png`,
    alt: `Network partner ${s}`,
    loading: "lazy"
  }))), extras.map(f => /*#__PURE__*/React.createElement("div", {
    key: f,
    className: "rm-net-grid__cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../assets/network/${f}`,
    alt: "Network partner",
    loading: "lazy"
  }))))));
}

/* ============ Final CTA ============ */
function NetCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-net-cta",
    "data-screen-label": "04 Network CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-net-cta__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-eyebrow--white",
    style: {
      color: "rgba(255,255,255,.92)"
    }
  }, "Join The Network"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-net-cta__h"
  }, "Add your institution", /*#__PURE__*/React.createElement("br", null), "to the Robotmea network."), /*#__PURE__*/React.createElement("p", {
    className: "rm-net-cta__sub"
  }, "Whether you run a single campus, a school chain, a university, or a foundation \u2014 Robotmea partners with institutions of every scale. Start with a 90-minute feasibility session."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 14,
      flexWrap: "wrap",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Talk To Us", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "institute.html#transform",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "See The 6-Step Plan"))));
}
Object.assign(window, {
  NetHero,
  NetStats,
  NetGrid,
  NetCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/network-sections.jsx", error: String((e && e.message) || e) }); }

// website/standalone-common.jsx
try { (() => {
/* global React */

/* ============================================================
   Header — sticky top nav, shared across all pages
   ============================================================ */
function RM_Header({
  active
}) {
  const items = [{
    label: "Home",
    href: "index.html",
    key: "home"
  }, {
    label: "IERDG",
    href: "institute.html",
    key: "institute"
  }, {
    label: "COPR Nexus",
    href: "copr-nexus.html",
    key: "copr"
  }, {
    label: "International Partners",
    href: "partners.html",
    key: "partners"
  }, {
    label: "Our Network",
    href: "network.html",
    key: "network"
  }, {
    label: "Contact Us",
    href: "contact.html",
    key: "contact"
  }];
  return /*#__PURE__*/React.createElement("header", {
    className: "rm-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__utility"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-left"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 15.5a13.5 13.5 0 0 1-13.5-13.5 1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.18l.69 3.45a1.5 1.5 0 0 1-.43 1.43L10.84 8.16a13.5 13.5 0 0 0 5 5l1.6-1.6a1.5 1.5 0 0 1 1.43-.43l3.45.69A1.5 1.5 0 0 1 23.5 13.3v3a1.5 1.5 0 0 1-1.5 1.5z"
  })), "+92 51 6128144"), /*#__PURE__*/React.createElement("span", {
    className: "rm-utility-item"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6l10 7 10-7v12H2zM2 4h20l-10 7z"
  })), "info@robotmea.com")), /*#__PURE__*/React.createElement("div", {
    className: "rm-utility-locales"
  }, "Islamabad \xB7 Dubai \xB7 Seoul \xB7 Shanghai")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-row rm-row--between"
  }, /*#__PURE__*/React.createElement("a", {
    className: "rm-brand",
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoFull,
    alt: "Robotmea"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "rm-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.key,
    href: it.href,
    className: "rm-nav__item " + (active === it.key ? "is-active" : "")
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    className: "rm-header__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-search-btn",
    "aria-label": "Search"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 21l-4.3-4.3"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "etm.html",
    className: "rm-btn rm-btn--primary rm-btn--sm rm-btn--pill"
  }, "ETM Deck", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))))));
}

/* ============================================================
   Brand divider — 4-tick + eyebrow + heading
   ============================================================ */
function RM_Divider({
  eyebrow,
  heading,
  lead,
  align = "center",
  dark = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rm-divider " + (align === "left" ? "rm-divider--left" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-divider__ticks"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow " + (align === "center" ? "rm-eyebrow--center " : "") + (dark ? "rm-eyebrow--white" : "")
  }, eyebrow), heading && /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 " + (dark ? "rm-h2--on-dark" : ""),
    style: {
      marginTop: 14
    }
  }, heading), lead && /*#__PURE__*/React.createElement("p", {
    className: "rm-lead " + (dark ? "rm-lead--on-dark" : ""),
    style: {
      marginTop: 18
    }
  }, lead));
}

/* ============================================================
   Triple-credential badge — used everywhere
   ============================================================ */
function RM_Credentials({
  variant = "ghost",
  layout = "row"
}) {
  const items = [{
    color: "orange",
    text: "A Project of Robotmea"
  }, {
    color: "blue",
    text: "Powered by ETM on South Korean Educational Standards"
  }, {
    color: "green",
    text: "Accredited by Robotron, South Korea"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: ["rm-credentials", variant === "solid" ? "rm-credentials--solid" : "", layout === "stacked" ? "rm-credentials--stacked" : ""].join(" ")
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "rm-credential rm-credential--" + it.color
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-credential__dot"
  }), it.text)));
}

/* ============================================================
   Footer — shared across all pages
   ============================================================ */
function RM_Footer() {
  const cols = [{
    h: "Company",
    items: [["About Robotmea", "institute.html"], ["IERDG", "institute.html"], ["COPR Nexus", "copr-nexus.html"], ["Careers", "contact.html"]]
  }, {
    h: "Programs",
    items: [["K-12 Program", "institute.html#k12"], ["ETM", "etm.html"], ["Robotmea Emerging Tech Centre", "institute.html#retc"], ["Faculty Development Cell", "institute.html#fdc"], ["International Diploma Program", "institute.html#idp"]]
  }, {
    h: "Network",
    items: [["International Partners", "partners.html"], ["Our Network", "network.html"], ["ETM Schools", "etm.html"], ["Become a Partner", "contact.html"]]
  }, {
    h: "Connect",
    items: [["Contact Us", "contact.html"], ["Press / Media", "copr-nexus.html"], ["Investor Pack", "etm.html"], ["Newsletter", "contact.html"]]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    className: "rm-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip rm-footer__pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.logoFull,
    alt: "Robotmea"
  }), /*#__PURE__*/React.createElement("p", null, "Robotmea is Pakistan's EdTech authority for Emerging Technologies (AI, Robotics, AR/VR, Simulation) and STEAM Education \u2014 accredited by Robotron, South Korea, and the parent of the Educational Transformation Movement."), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__statement"
  }, "\"A Project of Robotmea \xB7 Powered by ETM on South Korean Educational Standards \xB7 Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "LinkedIn"
  }, "in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Instagram"
  }, "IG"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "YouTube"
  }, "YT"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Facebook"
  }, "f"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__cols"
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    className: "rm-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__h"
  }, c.h), c.items.map(([label, href]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href
  }, label)))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Robotmea \xB7 A Time Dimension Group Company"), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 Cookie Policy"))));
}

/* ============================================================
   Page-stub — shared placeholder for not-yet-built pages
   ============================================================ */
function RM_PageStub({
  eyebrow,
  title,
  body,
  primaryCta = "Back to Home",
  primaryHref = "index.html"
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-stub"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-container--narrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-stub__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "rm-h1 rm-stub__h1"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "rm-stub__body"
  }, body), /*#__PURE__*/React.createElement("a", {
    href: primaryHref,
    className: "rm-btn rm-btn--primary"
  }, primaryCta, /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))));
}
Object.assign(window, {
  RM_Header,
  RM_Footer,
  RM_Divider,
  RM_Credentials,
  RM_PageStub
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/standalone-common.jsx", error: String((e && e.message) || e) }); }

// website/standalone-home.jsx
try { (() => {
/* global React */
/* Home page section components */

/* ============ Hero — with slider over fixed video background ============ */
const {
  useState,
  useEffect,
  useRef
} = React;
function HomeHero() {
  const slides = [{
    key: "main",
    eyebrow: "Robotmea — A Time Dimension Group Company",
    titleTop: "Transforming",
    titleAccent: "The Future Of Youth.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Robotmea is Pakistan's EdTech authority for ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Emerging Technologies (AI, Robotics, AR/VR, Simulation)"), " and ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "STEAM Education"), " \u2014 accredited by ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron, South Korea"), ", and the parent of the Educational Transformation Movement (ETM) that powers Pakistan's first ETM schools."),
    showCredentials: true,
    primary: {
      label: "Explore the Institute",
      href: "institute.html"
    },
    secondary: {
      label: "Join the ETM Movement",
      href: "etm.html"
    }
  }, {
    key: "institute",
    tag: "Spotlight · The Institute",
    eyebrow: "IERDG",
    titleTop: "Where Excellence",
    titleAccent: "Matters.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Five programs. One mission. ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron-accredited."), " A global ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Institute for EdTech Research, Development & Growth"), " \u2014 K-12 transformation, the Faculty Development Cell, the Emerging Technologies Centre, and internationally-aligned diplomas."),
    showCredentials: false,
    primary: {
      label: "Enter the Institute",
      href: "institute.html"
    },
    secondary: {
      label: "See the 6-Step Plan",
      href: "institute.html#transform"
    }
  }, {
    key: "diploma",
    tag: "Spotlight · International Diplomas",
    eyebrow: "International Diploma Programs",
    titleTop: "Internationally",
    titleAccent: "Certified Diplomas.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "One to three year ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron-certified diplomas"), " in Robotics, AI, IoT and applied emerging technologies \u2014 South-Korean benchmarked, internationally recognised, delivered in Pakistan."),
    showCredentials: false,
    primary: {
      label: "Explore Diplomas",
      href: "institute.html#idp"
    },
    secondary: {
      label: "Apply Now",
      href: "contact.html"
    }
  }, {
    key: "etm",
    tag: "Spotlight · Educational Transformation Movement",
    eyebrow: "For Investors",
    titleTop: "Establish Pakistan's",
    titleAccent: "Next ETM School.",
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "ETM is Robotmea's franchise system for South-Korean-accredited Emerging Technologies schools. Investors keep their land, capital, and brand; we bring the operating standard \u2014 ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'white'
      }
    }, "Robotron Certified \xB7 ETM Powered \xB7 South Korean Accredited.")),
    showCredentials: false,
    primary: {
      label: "Investor Pack",
      href: "etm.html"
    },
    secondary: {
      label: "Book a Discovery Call",
      href: "contact.html"
    }
  }];
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
  const go = n => {
    setIdx((n + slides.length) % slides.length);
    setTick(x => x + 1);
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-hero",
    "data-screen-label": "01 Hero",
    onMouseEnter: () => {
      hoverRef.current = true;
    },
    onMouseLeave: () => {
      hoverRef.current = false;
    }
  }, /*#__PURE__*/React.createElement("video", {
    className: "rm-hero__video",
    src: window.__resources.heroVideo,
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__bg"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip rm-hero__pillar-strip"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__slider"
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.key,
    className: "rm-hero__slide " + (i === idx ? "is-active" : ""),
    "aria-hidden": i !== idx
  }, s.tag && /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__slide-accent"
  }, s.tag), /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white",
    style: {
      marginBottom: 22
    }
  }, s.eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "rm-h1 rm-h1--on-dark rm-hero__title"
  }, s.titleTop, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-hero__title-accent"
  }, s.titleAccent)), /*#__PURE__*/React.createElement("p", {
    className: "rm-hero__sub"
  }, s.sub), s.showCredentials && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "30px 0 10px"
    }
  }, /*#__PURE__*/React.createElement(RM_Credentials, {
    variant: "ghost",
    layout: "row"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: s.primary.href,
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, s.primary.label, /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: s.secondary.href,
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, s.secondary.label))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__nav-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__dots",
    key: tick
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("button", {
    key: s.key,
    className: "rm-hero__dot " + (i === idx ? "is-active" : ""),
    onClick: () => go(i),
    "aria-label": "Slide " + (i + 1)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__counter"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-hero__counter-current"
  }, String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", null, " / ", String(slides.length).padStart(2, "0")))), /*#__PURE__*/React.createElement("div", {
    className: "rm-hero__arrows"
  }, /*#__PURE__*/React.createElement("button", {
    className: "rm-hero__arrow",
    onClick: () => go(idx - 1),
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "rm-hero__arrow",
    onClick: () => go(idx + 1),
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "9 18 15 12 9 6"
  })))))));
}

/* ============ Trust strip — international partners (Shandong removed; larger logos) ============ */
function HomeTrust() {
  const partners = [{
    src: window.__resources.pRobotron,
    alt: "Robotron",
    role: "Accreditation",
    c: "var(--rm-orange)"
  }, {
    src: window.__resources.pMinirobot,
    alt: "MiniRobot",
    role: "Robotics Hardware",
    c: "var(--rm-blue)"
  }, {
    src: window.__resources.pNeopia,
    alt: "Neopia",
    role: "EdTech Systems",
    c: "var(--rm-green)"
  }, {
    src: window.__resources.pSinion,
    alt: "Sinion",
    role: "R&D · China",
    c: "var(--rm-red)"
  }, {
    src: window.__resources.pTdme,
    alt: "TDME",
    role: "Industry Partner",
    c: "var(--rm-orange)"
  }, {
    src: window.__resources.pEsimgen,
    alt: "esim·gen",
    role: "Connectivity",
    c: "var(--rm-blue)"
  }];
  const metrics = [{
    n: "25+",
    l: "Years of R&D"
  }, {
    n: "06",
    l: "Global Partners"
  }, {
    n: "03",
    l: "Continents"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-trust__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__aside"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__eyebrow"
  }, "The Alliance"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-trust__title"
  }, "Robotmea is powered by the world\u2019s", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "leading technology partners.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-trust__sub"
  }, "From international accreditation and robotics hardware to dedicated R&D labs and global connectivity, every layer of a Robotmea classroom is built on partners who lead their field \u2014 so your students learn on technology the world already trusts."), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__meta"
  }, metrics.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.l,
    className: "rm-trust__meta-item"
  }, /*#__PURE__*/React.createElement("strong", null, m.n), /*#__PURE__*/React.createElement("span", null, m.l))))), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__logos"
  }, partners.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.alt,
    className: "rm-trust__cell",
    style: {
      "--accent": p.c
    },
    title: p.alt
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__logo-wrap"
  }, /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.alt,
    className: "rm-trust__logo"
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-trust__cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rm-trust__role"
  }, p.role)))))));
}

/* ============ Who We Are — Korean legacy positioning ============ */
function HomeWhoWeAre() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--paper",
    "data-screen-label": "02 Who We Are"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-two-col"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-photo-frame rm-photo-frame--poster",
    style: {
      aspectRatio: '2 / 3'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.legacyKoreaPoster,
    alt: "Robotmea \u2014 carrying the legacy of South Korea's EdTech giants, alongside Korean technology partners Mini Robot, Neopia, Robotron and Sinion",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "rm-floating-badge",
    style: {
      right: -20,
      bottom: -28
    }
  }, /*#__PURE__*/React.createElement("strong", null, "25+ Years"), /*#__PURE__*/React.createElement("span", null, "Of South Korean EdTech Research"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "Who We Are",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Carrying the legacy of", /*#__PURE__*/React.createElement("br", null), "South Korea's EdTech giants.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-lead",
    style: {
      marginTop: 22
    }
  }, "For three decades, South Korea has quietly engineered the world's most sophisticated EdTech infrastructure \u2014 the standards, the research, the teacher pathways, the curriculum architecture. ", /*#__PURE__*/React.createElement("strong", null, "Robotmea is the institution chartered to bring that heritage to Pakistan.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-body",
    style: {
      marginTop: 18
    }
  }, "We are accredited by ", /*#__PURE__*/React.createElement("strong", null, "Robotron, South Korea"), " \u2014 a research institution with 25+ years of work across the public, private and development sectors globally \u2014 and partnered with the country's leading robotics, platform and connectivity innovators. Every curriculum we publish, every diploma we award, every school standard we certify carries that lineage."), /*#__PURE__*/React.createElement("p", {
    className: "rm-body",
    style: {
      marginTop: 14
    }
  }, "Through the ", /*#__PURE__*/React.createElement("strong", null, "Institute (IERDG)"), " and the ", /*#__PURE__*/React.createElement("strong", null, "Nexus (COPR Nexus)"), ", we don't import devices; we transplant a complete educational operating system."), /*#__PURE__*/React.createElement("a", {
    href: "institute.html",
    className: "rm-btn rm-btn--outline",
    style: {
      marginTop: 28
    }
  }, "Read our story", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))))));
}

/* ============ Two pillar cards (IERDG + COPR Nexus) ============ */
function HomePillars() {
  // Icons rendered as inline SVG so they stay crisp + sized inside the box
  const InstituteIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 4l12 5-12 5L4 9l12-5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 12v6c0 2 4 4 8 4s8-2 8-4v-6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 9v9"
  }));
  const CoprIcon = /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "16",
    cy: "16",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 16h20M16 6c3 3 4.5 6.5 4.5 10s-1.5 7-4.5 10c-3-3-4.5-6.5-4.5-10S13 9 16 6z"
  }));
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--tight",
    "data-screen-label": "03 Pillars"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What We Do",
    heading: "Two engines. One mission."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-grid rm-grid--2",
    style: {
      marginTop: 56,
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "institute.html",
    className: "rm-pillar-card rm-pillar-card--institute"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__icon"
  }, InstituteIcon), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__sub"
  }, "The Institute"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pillar-card__title"
  }, "IERDG"), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__tagline"
  }, "Where excellence matters."), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__body"
  }, "Five programs \u2014 K-12, ETM, the Faculty Development Cell, the Robotmea Emerging Technologies Centre and International Diplomas \u2014 move EdTech from theory into Pakistani classrooms, accredited by Robotron, South Korea."), /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta"
  }, "Enter the Institute", /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__deco"
  })), /*#__PURE__*/React.createElement("a", {
    href: "copr-nexus.html",
    className: "rm-pillar-card rm-pillar-card--copr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__icon"
  }, CoprIcon), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__sub"
  }, "The Nexus"), /*#__PURE__*/React.createElement("h3", {
    className: "rm-pillar-card__title"
  }, "COPR Nexus"), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__tagline"
  }, "Transactional to Transformational."), /*#__PURE__*/React.createElement("p", {
    className: "rm-pillar-card__body"
  }, "Communications, outreach and public relations \u2014 the engine that takes the Institute's work to ministries, press, parents and partners. Built on nine working formulas."), /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta"
  }, "Enter COPR Nexus", /*#__PURE__*/React.createElement("span", {
    className: "rm-pillar-card__cta-arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-card__deco"
  })))));
}

/* ============ ETM spotlight band — the investor moment ============ */
function HomeETMBand() {
  const badges = [{
    num: "01",
    text: "A Project of Robotmea"
  }, {
    num: "02",
    text: "Powered by ETM on South Korean Educational Standards"
  }, {
    num: "03",
    text: "Accredited by Robotron, South Korea"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-etm-band",
    "data-screen-label": "04 ETM Spotlight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-etm-band__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--white"
  }, "Educational Transformation Movement"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 rm-etm-band__heading",
    style: {
      marginTop: 18
    }
  }, "Pakistan's first", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--rm-orange)'
    }
  }, "ETM-powered schools"), " \u2014", /*#__PURE__*/React.createElement("br", null), "established under your name."), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-band__statement"
  }, "\"A Project of Robotmea, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("p", {
    className: "rm-etm-band__lead"
  }, "ETM is Robotmea's franchise system for building South-Korean-accredited Emerging Technologies schools across Pakistan. Investors keep their land, capital, and brand; we bring the academic plan, the Discovery & Innovation Hub, the ETM Garage, the teacher training, and the Robotron accreditation."), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "etm.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Investor Deep Dive", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Book a Discovery Call"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-band__badges"
  }, badges.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.num,
    className: "rm-etm-badge"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-badge__num"
  }, b.num), /*#__PURE__*/React.createElement("div", {
    className: "rm-etm-badge__txt"
  }, b.text))))));
}

/* ============ Five-point ETM story ============ */
function HomeFivePoint() {
  const points = [{
    n: "01",
    t: "ETM-Powered Model",
    b: "Pakistan's first ETM-powered schools, built on South Korean Educational Standards and accredited by Robotron."
  }, {
    n: "02",
    t: "Student-Centric Environment",
    b: "No homework. No rote learning. No exam pressure. PBIL in Discovery & Innovation Hubs and the ETM Garage."
  }, {
    n: "03",
    t: "Islamic Values at the Core",
    b: "Friends of Quran lounge, the Prophet ﷺ as Role Model programme, compulsory Arabic, and an integrated one-book STEAM model."
  }, {
    n: "04",
    t: "Emerging Technologies",
    b: "Robotics, AI and innovation from the early years — including TechNutrition 365, our holistic ECCE programme."
  }, {
    n: "05",
    t: "Reimagined Roles",
    b: "Principal as Mentor. Teacher as Coach. Student as Learner. Backed by the Faculty Development Cell and regular ETM audits."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--mist",
    "data-screen-label": "05 Five-Point ETM Story"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "What Makes ETM Different",
    heading: "The five-point story.",
    lead: "Every ETM school is built on the same five non-negotiables \u2014 the structural reasons ETM produces graduates the existing system cannot."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-five-point",
    style: {
      marginTop: 56
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    className: "rm-five-point__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-five-point__num"
  }, p.n), /*#__PURE__*/React.createElement("h3", {
    className: "rm-five-point__title"
  }, p.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-five-point__body"
  }, p.b))))));
}

/* ============ NGIS featured card ============ */
function HomeNGIS() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section",
    "data-screen-label": "06 NGIS Feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 2,
      background: "var(--rm-orange)"
    }
  }), "The First ETM School"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-ngis__title"
  }, "NGIS \u2014 NextGen International School."), /*#__PURE__*/React.createElement("p", {
    className: "rm-ngis__strap"
  }, "\"A Project of Robotmea, Powered by ETM on South Korean Educational Standards. Accredited by Robotron, South Korea.\""), /*#__PURE__*/React.createElement("p", {
    className: "rm-ngis__body"
  }, "The first school operating under the ETM franchise \u2014 two campuses in Karachi, opening for Pre-Primary through Grade 5, with the first cohort enrolling from August. NGIS is the live, working demonstration of the model future ETM schools will inherit."), /*#__PURE__*/React.createElement("a", {
    href: "etm.html#ngis",
    className: "rm-btn rm-btn--primary"
  }, "Visit NGIS", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Campuses"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Jinnah Avenue", /*#__PURE__*/React.createElement("br", null), "Model Colony")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "City"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Karachi,", /*#__PURE__*/React.createElement("br", null), "Pakistan")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Grades"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Pre-Primary", /*#__PURE__*/React.createElement("br", null), "through Grade 5")), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-label"
  }, "Enrolment"), /*#__PURE__*/React.createElement("div", {
    className: "rm-ngis__fact-value"
  }, "Opens", /*#__PURE__*/React.createElement("br", null), "August"))))));
}

/* ============ Stats strip ============ */
function HomeStats() {
  const stats = [{
    n: "300+",
    l: "Schools in Our Network"
  }, {
    n: "30+",
    l: "Countries of Operation"
  }, {
    n: "5,000+",
    l: "Teachers Trained"
  }, {
    n: "200+",
    l: "Projects Delivered"
  }, {
    n: "200K+",
    l: "Students Reached"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-stats",
    "data-screen-label": "07 Stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-pillar-strip",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-stats__grid"
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.l,
    className: "rm-stat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__n"
  }, s.n), /*#__PURE__*/React.createElement("div", {
    className: "rm-stat__l"
  }, s.l))))));
}

/* ============ COPR Formulas band — redesigned (no image, branded cards) ============ */
function HomeCOPR() {
  // Each formula split into [left, right, result] so we can colour the equation
  const formulas = [{
    l: "Hardwork + Exposure",
    r: "Excellence",
    color: "var(--rm-orange)"
  }, {
    l: "Unity + Faith",
    r: "Discipline",
    color: "var(--rm-blue)"
  }, {
    l: "Communication + Creativity",
    r: "Innovation",
    color: "var(--rm-green)"
  }, {
    l: "Heterogeneous Connectivity + Local Understanding",
    r: "Real Change",
    color: "var(--rm-red)"
  }, {
    l: "Market Research + Business Intelligence",
    r: "Success",
    color: "var(--rm-orange)"
  }, {
    l: "Transparency + Leadership",
    r: "Vision",
    color: "var(--rm-blue)"
  }, {
    l: "Strategic Thinking + Skills",
    r: "Impact",
    color: "var(--rm-green)"
  }, {
    l: "Passion + Pragmatic Approach",
    r: "Value Creation",
    color: "var(--rm-red)"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-copr-band",
    "data-screen-label": "08 COPR Formulas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "How We Think",
    heading: "Nine formulas that govern how we work.",
    lead: "The COPR Nexus operating system \u2014 nine equations we apply to every conversation, every campaign, every partnership."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-copr-grid"
  }, formulas.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "rm-formula-card",
    style: {
      "--accent": f.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card__num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("p", {
    className: "rm-formula-card__eq"
  }, f.l, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-muted)"
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    className: "rm-formula-card__result"
  }, f.r)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card rm-formula-card--featured"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-formula-card__num"
  }, "09"), /*#__PURE__*/React.createElement("p", {
    className: "rm-formula-card__eq"
  }, "COPR Nexus ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.4)"
    }
  }, "="), /*#__PURE__*/React.createElement("span", {
    className: "rm-formula-card__result"
  }, "\xA0Transactional to Transformational")))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "copr-nexus.html",
    className: "rm-btn rm-btn--outline"
  }, "See COPR Nexus", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))));
}

/* ============ Testimonial ============ */
function HomeTestimonial() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--blue",
    "data-screen-label": "09 Testimonial"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    dark: true,
    eyebrow: "Voices",
    heading: "What partners are saying."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-testimonial-grid"
  }, /*#__PURE__*/React.createElement("figure", {
    className: "rm-quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "rm-quote-card__quote"
  }, "There is no escape from technology in the present times. If we have to win our share and bring this technology to our service and benefit, we need to act fast and act right. I believe Robotmea has come as a vanguard to the region\u2019s educational needs and to help transform the schooling landscape. Let\u2019s join hands to embed technology in our school curriculums to the benefit of our future generations."), /*#__PURE__*/React.createElement("figcaption", {
    className: "rm-quote-card__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-avatar",
    "data-initials": "KM"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__name"
  }, "Kashif Suhail Malik"), /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__role"
  }, "Master Trainer \xB7 IPD and IIUI School")))), /*#__PURE__*/React.createElement("figure", {
    className: "rm-quote-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("blockquote", {
    className: "rm-quote-card__quote"
  }, "I have seen students are behaving differently after taking Robotmea Robotic & STEAM based classes and they are learning real technology and becoming more innovative. Robotmea trained teachers are inculcating the real core competencies of 21st century educational skills such as critical thinking, creativity, communication, collaboration and most importantly character building. Well-done Robotmea team for reshaping Middle East, Africa & Pakistan towards innovative societies on the tenets of innovation & entrepreneurship."), /*#__PURE__*/React.createElement("figcaption", {
    className: "rm-quote-card__author"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-avatar",
    "data-initials": "WA"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__name"
  }, "Wajiha Akram"), /*#__PURE__*/React.createElement("div", {
    className: "rm-quote-card__role"
  }, "Minister of State for Federal Education & Professional Training")))))));
}

/* ============ Network logo wall ============ */
function HomeNetwork() {
  // 14 chosen from assets/network/ — full grid lives on /network
  const logos = ["named-aces.png", "named-alda.png", "named-iiu-islamabad.png", "named-iqra-residential.png", "named-leaders-harbor.png", "named-nobel-stem.jpg", "named-pioneer-signature.png", "named-read-foundation.png", "partner-01.png", "partner-04.png", "partner-09.png", "partner-13.png", "partner-21.png", "partner-34.png"];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-network"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Our Network",
    heading: "On the ground.",
    lead: "The schools, institutions and partners across Pakistan running Robotmea programmes."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-network__grid",
    style: {
      marginTop: 48
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "rm-network__cell"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources["net_" + l.replace(/[^a-zA-Z0-9]/g, "_")],
    alt: "Network partner"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "network.html",
    className: "rm-btn rm-btn--outline"
  }, "See full network", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")))));
}

/* ============ Final CTA band ============ */
function HomeFinalCTA() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-final-cta",
    "data-screen-label": "11 Final CTA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-final-cta__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-eyebrow rm-eyebrow--center rm-eyebrow--white",
    style: {
      color: "rgba(255,255,255,.85)",
      marginBottom: 18
    }
  }, "Get In Touch"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-h2 rm-final-cta__heading"
  }, "Join the ETM movement", /*#__PURE__*/React.createElement("br", null), "to make your child relevant."), /*#__PURE__*/React.createElement("p", {
    className: "rm-final-cta__sub"
  }, "Whether you're a parent, a principal, an investor, a government partner, or press \u2014 there's a desk at Robotmea for you."), /*#__PURE__*/React.createElement("div", {
    className: "rm-final-cta__ctas"
  }, /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--primary rm-btn--lg"
  }, "Contact IERDG", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light rm-btn--lg"
  }, "Contact COPR Nexus"))));
}

/* ============ Vision + Strategic Objective (two parallel manifestos) ============ */
function HomeVisionStrategic() {
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-vision-band",
    "data-screen-label": "03 Vision & Strategy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container rm-vision-band__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto__label-num"
  }, "01"), " Our Vision"), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-manifesto__statement"
  }, "Transforming", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto-accent"
  }, "The Future Of Youth.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-manifesto__sub"
  }, "The next Pakistani generation \u2014 every Pakistani generation \u2014 deserves a fair shot at the world it is about to inherit. That is the work."), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__sig"
  }, "Robotmea")), /*#__PURE__*/React.createElement("div", {
    className: "rm-vision-band__divider",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__label"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto__label-num"
  }, "02"), " Strategic Objective"), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__mark"
  }, "\u201C"), /*#__PURE__*/React.createElement("h2", {
    className: "rm-manifesto__statement"
  }, "Innovative Education", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    className: "rm-manifesto-accent"
  }, "For Shaping Wisdom-Driven Economies.")), /*#__PURE__*/React.createElement("p", {
    className: "rm-manifesto__sub"
  }, "EdTech is the lever. Wisdom-driven economies \u2014 economies whose growth is built on what their people know, build and invent \u2014 are the outcome."), /*#__PURE__*/React.createElement("div", {
    className: "rm-manifesto__sig"
  }, "Robotmea"))));
}

/* ============ Why Robotmea \u2014 World-class positioning ============ */
function HomeWhy() {
  const items = [{
    accent: "var(--rm-blue)",
    accentSoft: "var(--rm-blue-50)",
    title: "Accredited, not affiliated",
    body: "Robotmea is formally accredited by Robotron, South Korea \u2014 a recognised research and accreditation body \u2014 not a reseller or affiliate.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
    }))
  }, {
    accent: "var(--rm-orange)",
    accentSoft: "var(--rm-orange-50)",
    title: "Curriculum-first",
    body: "We are an institute built around curriculum, teacher training and accreditation \u2014 an internationally-aligned curriculum is the heart of the work, not the hardware.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 0-3 3z",
      transform: "translate(0 -2)"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M4 4v18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 8h6M8 12h6"
    }))
  }, {
    accent: "var(--rm-green)",
    accentSoft: "var(--rm-green-50)",
    title: "Evidence-led",
    body: "Every program operates under a published Monitoring & Evaluation rubric. We measure, we publish, we feed the findings back into the curriculum.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 21V8M9 21V12M15 21V4M21 21V14"
    }))
  }, {
    accent: "var(--rm-red)",
    accentSoft: "var(--rm-red-50)",
    title: "Globally connected",
    body: "An international partner network across South Korea, the Middle East and China keeps the work plugged into world-class research, hardware and industry.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-section rm-section--tight rm-why",
    "data-screen-label": "04 Why Robotmea"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    eyebrow: "Why Robotmea",
    heading: "A world-class EdTech institution.",
    lead: "Four reasons Pakistani school boards, ministries and investors treat Robotmea as a peer to the world's leading EdTech institutions."
  }), /*#__PURE__*/React.createElement("div", {
    className: "rm-why__grid"
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title,
    className: "rm-why__card",
    style: {
      "--accent": it.accent,
      "--accent-soft": it.accentSoft
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-why__icon"
  }, it.icon), /*#__PURE__*/React.createElement("h3", {
    className: "rm-why__title"
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "rm-why__body"
  }, it.body))))));
}

/* ============ For Principals — 6-step school transformation ============ */
function HomePrincipals() {
  const steps = [{
    n: "01",
    t: "Technical Feasibility",
    color: "var(--rm-blue)",
    b: "Plan a feasibility session with our EdTech Specialists. We assess your campus, your curriculum and your readiness.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 11l3 3 8-8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    }))
  }, {
    n: "02",
    t: "Discovery & Innovation Hub",
    color: "var(--rm-orange)",
    b: "Establish your school's flagship D&I Hub — built to the IERDG standard, designed for your space.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9 18h6M10 22h4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 2 1.5 3.3h5c0-1.3.5-2.5 1.5-3.3A7 7 0 0 0 12 2z"
    }))
  }, {
    n: "03",
    t: "Adopt the Curriculum",
    color: "var(--rm-green)",
    b: "Bring in IERDG's globally adopted AI, Robotics and STEAM curriculum — integrated with your existing learning outcomes.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M2 3h7a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-7a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h8z"
    }))
  }, {
    n: "04",
    t: "Train Your Teachers",
    color: "var(--rm-red)",
    b: "Certify your faculty on the Robotron standard. Continuous Professional Development through our Faculty Development Cell.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    }))
  }, {
    n: "05",
    t: "Monitoring & Evaluation",
    color: "var(--rm-blue)",
    b: "Stay connected through our published M&E framework. Quarterly audits, measurable outcomes, transparent reporting.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M3 3v18h18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 14l4-4 3 3 5-6"
    }))
  }, {
    n: "06",
    t: "Keep On Improving",
    color: "var(--rm-orange)",
    b: "Annual curriculum refresh, teacher recertification, and exposure to the broader Robotmea network. The work never stops.",
    icon: /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M21 12a9 9 0 1 1-3-6.7L21 8"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M21 3v5h-5"
    }))
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "rm-principals",
    "data-screen-label": "06 For Principals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__intro"
  }, /*#__PURE__*/React.createElement(RM_Divider, {
    align: "left",
    eyebrow: "For School Principals",
    heading: /*#__PURE__*/React.createElement(React.Fragment, null, "Transform your school", /*#__PURE__*/React.createElement("br", null), "in six steps.")
  }), /*#__PURE__*/React.createElement("p", {
    className: "rm-principals__lead"
  }, "Already running a school? IERDG partners with existing institutions to bring South Korean EdTech standards into your classroom \u2014 without rebuilding anything. You keep your name, your team, your community; we bring the curriculum, the training, and the accreditation.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-process-flow"
  }, steps.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "rm-process-step",
    style: {
      "--accent": s.color
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-process-step__icon"
  }, s.icon), /*#__PURE__*/React.createElement("div", {
    className: "rm-process-step__num"
  }, "Step ", s.n), /*#__PURE__*/React.createElement("h3", {
    className: "rm-process-step__title"
  }, s.t), /*#__PURE__*/React.createElement("p", {
    className: "rm-process-step__body"
  }, s.b)))), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-eyebrow"
  }, "Ready to start?"), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-h"
  }, "See the full transformation plan inside IERDG.")), /*#__PURE__*/React.createElement("div", {
    className: "rm-principals__cta-actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "institute.html#transform",
    className: "rm-btn rm-btn--primary"
  }, "Open the Plan", /*#__PURE__*/React.createElement("span", {
    className: "rm-btn__arrow"
  }, "\u2192")), /*#__PURE__*/React.createElement("a", {
    href: "contact.html",
    className: "rm-btn rm-btn--ghost-light"
  }, "Book a Session")))));
}
Object.assign(window, {
  HomeHero,
  HomeTrust,
  HomeWhoWeAre,
  HomeVisionStrategic,
  HomeWhy,
  HomePillars,
  HomePrincipals,
  HomeETMBand,
  HomeFivePoint,
  HomeNGIS,
  HomeStats,
  HomeCOPR,
  HomeTestimonial,
  HomeNetwork,
  HomeFinalCTA
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "website/standalone-home.jsx", error: String((e && e.message) || e) }); }

})();
