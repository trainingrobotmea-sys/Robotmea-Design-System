/* global React */
function Testimonial() {
  return (
    <section className="rm-section rm-section--blue">
      <div className="rm-container">
        <RM_BrandDivider eyebrow="What People Say" heading="Voices From The Field" />
        <div className="rm-testimonial rm-mt-10">
          <div className="rm-testimonial__mark">"</div>
          <blockquote className="rm-testimonial__quote">
            Robotmea's curriculum has changed what our students think is possible. In two terms, a class
            that had never touched a circuit board was prototyping IoT solutions for our city.
          </blockquote>
          <div className="rm-testimonial__author">
            <div className="rm-avatar"></div>
            <div>
              <div className="rm-testimonial__name">Dr. Fatima Al-Mansoori</div>
              <div className="rm-testimonial__role">Principal · Dubai Future Academy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.RM_Testimonial = Testimonial;

function PartnerStrip() {
  const partners = ["UNESCO", "Arduino", "Microsoft", "LEGO Education", "Ministry of Education UAE", "Time Dimension ME"];
  return (
    <section className="rm-partners">
      <div className="rm-container">
        <div className="rm-partners__label">As Featured / Partnered With</div>
        <div className="rm-partners__row">
          {partners.map(p => (
            <div key={p} className="rm-partners__logo">{p}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.RM_PartnerStrip = PartnerStrip;

function Footer() {
  const cols = [
    { h: "Company",  items: ["Who We Are", "Founder's Note", "Careers", "Contact"] },
    { h: "Programs", items: ["School Program", "Technical College", "Madrassa Reform", "Hi-Tech School"] },
    { h: "Centres",  items: ["Discovery & Innovation Hub", "Tech Centers", "Innovation & Entrepreneurship"] },
    { h: "Connect",  items: ["LinkedIn", "Instagram", "YouTube", "Newsletter"] },
  ];
  return (
    <footer className="rm-footer">
      <div className="rm-container">
        <div className="rm-footer__top">
          <div className="rm-footer__brand">
            <img src="../../assets/logo-full.png" alt="Robotmea" />
            <p>Transforming the future of youth through STEAM, robotics, and AI education.</p>
            <div className="rm-footer__social">
              <span>in</span><span>X</span><span>▶</span><span>📷</span>
            </div>
          </div>
          <div className="rm-footer__cols">
            {cols.map(c => (
              <div key={c.h} className="rm-footer__col">
                <div className="rm-footer__h">{c.h}</div>
                {c.items.map(i => <a key={i} href="#">{i}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div className="rm-footer__bottom">
          <span>© {new Date().getFullYear()} Robotmea · A Time Dimension Middle East Company</span>
          <span>Privacy · Terms · Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
window.RM_Footer = Footer;
