import React from "react";
import { Heading } from "components";
import  "./AboutProject.css";

function AboutProject() {

  return(
    <section id={'о_проекте'} className={`about-project`}>
      <Heading title="О проекте" paddingSize="m"/>
      <div className="about-project__container">
        <div className="about-project__content">
          <h3 className="about-project_title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__par">
            Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.
          </p>
        </div>

        <div className="about-project__content">
          <h3 className="about-project_title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__par">
            У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>

      <div className="table">
        <div className="table__column-left">
          <div className="table__title-container table__title-container_color_left">
            <h4 className="table__title">1 неделя</h4>
          </div>

          <p className="table__cell">Back-end</p>
        </div>

        <div className="table__column-right">
          <div className="table__title-container table__title-container_color_right">
            <h4 className="table__title">4 недели</h4>
          </div>

          <p className="table__cell">Front-end</p>
        </div>
      </div>
    </section>
  );
}


export default AboutProject;
