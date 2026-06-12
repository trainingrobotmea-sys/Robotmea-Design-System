/* global React */
const { useState } = React;

function Header({ active = "Home" }) {
  const items = ["Home", "Who We Are", "Programs", "Founder's Note", "Partners", "Contact"];
  return (
    <header className="rm-header">
      <div className="rm-header__utility">
        <div className="rm-container rm-row rm-row--between">
          <div className="rm-utility-left">
            <span className="rm-utility-item">📞 +971 4 123 4567</span>
            <span className="rm-utility-item">✉ info@robotmea.com</span>
          </div>
          <div className="rm-utility-right">
            <span className="rm-utility-item">Dubai · USA · Pakistan · S. Korea · Tanzania</span>
          </div>
        </div>
      </div>
      <div className="rm-header__bar">
        <div className="rm-container rm-row rm-row--between">
          <a className="rm-brand" href="#">
            <img src="../../assets/logo-full.png" alt="Robotmea" />
          </a>
          <nav className="rm-nav">
            {items.map(label => (
              <a key={label} href="#" className={"rm-nav__item " + (active === label ? "is-active" : "")}>{label}</a>
            ))}
          </nav>
          <a href="#" className="rm-btn rm-btn--primary rm-btn--sm">Enroll Now</a>
        </div>
      </div>
    </header>
  );
}

window.RM_Header = Header;
