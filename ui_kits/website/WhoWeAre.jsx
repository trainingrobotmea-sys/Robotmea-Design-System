/* global React */
function StatsStrip() {
  const stats = [
    { n: "200+", l: "Schools" },
    { n: "05",   l: "Countries" },
    { n: "700+", l: "Teachers Trained" },
    { n: "5K+",  l: "Projects Delivered" },
    { n: "35K+", l: "Students Reached" },
  ];
  return (
    <section className="rm-stats">
      <div className="rm-container rm-stats__grid">
        {stats.map(s => (
          <div key={s.l} className="rm-stat">
            <div className="rm-stat__n">{s.n}</div>
            <div className="rm-stat__l">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.RM_StatsStrip = StatsStrip;

function WhoWeAre() {
  return (
    <section className="rm-section rm-section--paper">
      <div className="rm-container rm-two-col">
        <div className="rm-two-col__media">
          <div className="rm-photo-grid">
            <div className="rm-photo-grid__a">STUDENT WORKSHOP</div>
            <div className="rm-photo-grid__b">ROBOTICS LAB</div>
            <div className="rm-photo-grid__c">CLASSROOM</div>
          </div>
          <div className="rm-two-col__badge">
            <strong>Since 2013</strong>
            <span>Empowering youth across 5 countries</span>
          </div>
        </div>
        <div className="rm-two-col__copy">
          <RM_BrandDivider align="left" eyebrow="Who We Are" heading="A Mission to Empower" />
          <p className="rm-lead">
            Robotmea is the EdTech arm of Time Dimension Middle East. We design and deliver
            STEAM, robotics, and AI programs that prepare young people for a workforce — and a world —
            that no longer exists as it once did.
          </p>
          <p className="rm-body">
            Our programs are co-built with ministries of education, school boards, and industry partners.
            They are deliberately hands-on, industry-aligned, and certified — because the future is built,
            not taught.
          </p>
          <div className="rm-pillar-row">
            <div className="rm-pillar"><span className="rm-pillar__dot" style={{ background: "var(--rm-orange)" }}></span>Curriculum</div>
            <div className="rm-pillar"><span className="rm-pillar__dot" style={{ background: "var(--rm-blue)" }}></span>Teacher Training</div>
            <div className="rm-pillar"><span className="rm-pillar__dot" style={{ background: "var(--rm-green)" }}></span>Hardware Kits</div>
            <div className="rm-pillar"><span className="rm-pillar__dot" style={{ background: "var(--rm-red)" }}></span>Competitions</div>
          </div>
          <a href="#" className="rm-btn rm-btn--primary rm-mt-6">Read Our Story →</a>
        </div>
      </div>
    </section>
  );
}
window.RM_WhoWeAre = WhoWeAre;
