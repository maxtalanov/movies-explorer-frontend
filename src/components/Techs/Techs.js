import React from "react";
import "./Techs.css";
import { technologies } from "../../utils/constant";
import Heading from "../Heading/Heading";

function Techs() {
  const techsList = technologies.map((m) => {
    return (
      <div className="techs__icon-card" key={m.id}>
        <p className="techs__icon-text">{m.text}</p>
      </div>)
  });

  return(
    <section id={'технологии'} className={`techs`}>
      <Heading id="#Technologies" title="Технологии" paddingSize="m"/>
      <div className="techs__content">
        <h2 className="techs__title">7 технологий</h2>
        <h4 className="techs__sub-title">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </h4>
        <div className="techs__container">
          {techsList}
        </div>
      </div>
    </section>
  )
}

export default Techs;
