import React from "react";
import { porfolioConfig } from "../../utils/constant";

import "./Portfolio.css";

function Portfolio() {
  const renderListPortfolio = porfolioConfig.map((promo) => {
    
    return (
      <li key={promo.id} className="portfolio__list hover-opacity">
        <a className="portfolio__link" href={promo.link} target="_blank" rel="noreferrer">
          <h4 className="portfolio__title-link">{promo.title}</h4>
        </a>
      </li>
    )
  });

  return(
    <section className={`portfolio`}>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__works">
        {renderListPortfolio}
      </ul>
    </section>
  );
}

export default Portfolio;
