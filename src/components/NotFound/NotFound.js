// Компонент "Not Found" - Страница не найдена (404)

import React from "react";
import { useHistory } from 'react-router-dom'
import "../NotFound/NotFound.css";

//Ф-ый компонент
function NotFound() {
  const history = useHistory();
  const back = () => {
    history.goBack();
  }

  return(
    <section className="NotFound">
      <h1 className="NotFound__title">404</h1>
      <p className="NotFound__massage">Страница не найдена</p>
      <button className="NotFound__btn-back hover-opacity" onClick={back}>Назад</button>
    </section>
  )
}

export default NotFound;
