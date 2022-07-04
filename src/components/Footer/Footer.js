import React from "react";
import Navigation from "../Navigation/Navigation";
import './Footer.css';

function Footer() {

  return(
    <footer className={`footer`}>
      <h3 className={`footer__title`}>Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className={`footer__container`}>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <Navigation />
      </div>
    </footer>
  )
}

export default Footer;
