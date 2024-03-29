import React from "react";
import { socialLinks } from "../../utils/constant";

import './Navigation.css';

function Navigation({ mod }) {

  return(
    <section className={`navigation`}>
      <a href={socialLinks.instagram} target="_blank" className="navigation__link hover-opacity" rel="noreferrer">Instagram</a>
      <a href={socialLinks.yp} target="_blank" className="navigation__link hover-opacity" rel="noreferrer">Яндекс.Практикум</a>
      <a href={socialLinks.github} target="_blank" className="navigation__link hover-opacity" rel="noreferrer">GitHub</a>
      <a href={socialLinks.fb} target="_blank" className="navigation__link hover-opacity" rel="noreferrer">FaceBook</a>
    </section>
  );

}

export default Navigation;
