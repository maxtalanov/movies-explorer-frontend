import React from "react";
import './MoviesCardList.css';

function MoviesCardList({ children, handleClickMore }) {
  return(
    <section className="card-list">
      <div className="card-list__container">
        { children }
      </div>
      <button className="card-list__btn-add hover-opacity" onClick={handleClickMore}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
