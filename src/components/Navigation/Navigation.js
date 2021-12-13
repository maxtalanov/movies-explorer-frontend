import React from "react"; //Инициализация библиотеки (не обязательное действие)
import './Navigation.css'; //Инициализация стилей

function Navigation({ mod }) {

  return(
    <section className={`navigation`}>
      <a className={`navigation__link`}>Яндекс.Практикум</a>
      <a className={`navigation__link`}>Github</a>
      <a className={`navigation__link`}>Facebook</a>
    </section>
  );

}

export default Navigation;
