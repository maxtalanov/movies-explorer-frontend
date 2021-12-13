import React from "react";
import "./Portfolio.css";

function Portfolio() {

  return(
    <section className={`portfolio`}>
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__works">
        <li className="portfolio__list">
          <a className="portfolio__link" href="#" target="_blank" rel="noreferrer">
            <h4 className="portfolio__title-link">Статичный сайт</h4>
          </a>
        </li>
        <li className="portfolio__list">
          <a className="portfolio__link" href="#" target="_blank" rel="noreferrer">
            <h4 className="portfolio__title-link">Статичный сайт</h4>
          </a>
        </li>
        <li className="portfolio__list">
          <a className="portfolio__link" href="#" target="_blank" rel="noreferrer">
            <h4 className="portfolio__title-link">Статичный сайт</h4>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
