// Прототип для форм аунтификаций;
import React from "react"; //Инициализация библиотеки
import "./WithForm.css"; // Ф-ил стилей

import { Link } from "react-router-dom";

import Logotype from "../Logotype/Logotype";

// ф-ый компонент
function WithForm({ children, titleForm, titleBtnSubmit, subTitle, btnLink, modMargin,link }) {

  // рендер
  return(
    <section className="with-form">
      <form className={`form`}>
        <Logotype link="/" modStyle={'position'} />
        <h2 className={`form__title`}>{titleForm}</h2>
        {children}
        <button className={`form__btn-submit ${modMargin} hover-opacity`}>{titleBtnSubmit}</button>
        <h3 className={`form__sub-title`}>{subTitle}
          <Link className="link hover-opacity" to={link} disabled>
            <span className={`form__btn-link`}>{btnLink}</span>
          </Link>
        </h3>
      </form>
    </section>
  );
}

export default WithForm;
