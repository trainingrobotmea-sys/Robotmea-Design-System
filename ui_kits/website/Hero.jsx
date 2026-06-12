/* global React */
function Hero() {
  return (
    <section className="rm-hero">
      <div className="rm-hero__photo" aria-hidden="true"></div>
      <div className="rm-hero__overlay"></div>
      <div className="rm-container rm-hero__inner">
        <div className="rm-hero__eyebrow">
          <span className="rm-tick rm-tick--orange"></span>
          <span>STEAM · Robotics · AI</span>
        </div>
        <h1 className="rm-hero__title">
          Transforming<br />
          The Future <span className="rm-hero__title-accent">Of Youth</span>
        </h1>
        <p className="rm-hero__lead">
          Empowering the next generation with 21st-century skills through STEAM, robotics, and AI —
          delivered across schools, technical colleges, and innovation hubs in five countries.
        </p>
        <div className="rm-hero__ctas">
          <a href="#" className="rm-btn rm-btn--primary rm-btn--lg">Explore Programs →</a>
          <a href="#" className="rm-btn rm-btn--ghost-light rm-btn--lg">Partner With Us</a>
        </div>
      </div>
      <div className="rm-hero__scroll">SCROLL ↓</div>
    </section>
  );
}
window.RM_Hero = Hero;
