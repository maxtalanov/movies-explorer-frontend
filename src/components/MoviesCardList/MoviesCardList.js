import React from "react";
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ children }) {

  return(
    <section className="card-list">
      <div className="card-list__container">
        { children }
      </div>
      <button className="card-list__btn-add hover-opacity">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
