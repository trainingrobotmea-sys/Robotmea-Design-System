/* global React */
function BrandDivider({ eyebrow, heading, lead, align = "center" }) {
  return (
    <div className={"rm-divider rm-divider--" + align}>
      <div className="rm-divider__ticks">
        <span style={{ background: "var(--rm-blue)" }}></span>
        <span style={{ background: "var(--rm-orange)" }}></span>
        <span style={{ background: "var(--rm-green)" }}></span>
        <span style={{ background: "var(--rm-red)" }}></span>
      </div>
      {eyebrow && <div className="rm-divider__eyebrow">{eyebrow}</div>}
      {heading && <h2 className="rm-divider__heading">{heading}</h2>}
      {lead && <p className="rm-divider__lead">{lead}</p>}
    </div>
  );
}
window.RM_BrandDivider = BrandDivider;

function Programs() {
  const items = [
    { color: "blue",   tag: "K-12",            title: "School Program",            blurb: "A complete K-12 STEAM and robotics curriculum, delivered alongside your school's existing programme.", icon: "🎓" },
    { color: "orange", tag: "Upper-Secondary", title: "Technical College",          blurb: "Applied-tech pipeline for upper-secondary students entering industry or higher education.",                  icon: "🛠" },
    { color: "green",  tag: "Modernization",   title: "Madrassa Reform",            blurb: "Integrated STEAM, language, and digital-literacy track for traditional religious schools.",                  icon: "📘" },
    { color: "red",    tag: "Extracurricular", title: "Robotics & STEAM Club",      blurb: "After-school club model: hardware kits, mentor-led projects, competition pathway.",                          icon: "⚙" },
    { color: "blue",   tag: "Full School",     title: "Hi-Tech School",             blurb: "A full school model built ground-up around hands-on tech, makerspaces, and project learning.",                icon: "🏫" },
    { color: "orange", tag: "Hub",             title: "Discovery & Innovation Hub", blurb: "Community-facing makerspace and incubation centre — robotics labs, AI studios, fab tools.",                  icon: "💡" },
  ];
  return (
    <section className="rm-section">
      <div className="rm-container">
        <RM_BrandDivider eyebrow="What We Offer" heading="Our Programs"
          lead="A portfolio of programs designed for every stage of the student journey — from primary school to industry-ready graduate." />
        <div className="rm-grid rm-grid--3 rm-mt-12">
          {items.map(p => (
            <article key={p.title} className={"rm-program rm-program--" + p.color}>
              <div className={"rm-program__icon rm-program__icon--" + p.color}>{p.icon}</div>
              <span className={"rm-chip rm-chip--" + p.color}>{p.tag}</span>
              <h3 className="rm-program__title">{p.title}</h3>
              <p className="rm-program__blurb">{p.blurb}</p>
              <a href="#" className="rm-program__link">Learn more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.RM_Programs = Programs;
