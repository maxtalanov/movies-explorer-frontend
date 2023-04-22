import React from "react";
import './MoviesCardList.css';

function MoviesCardList({ children, handleClickMore, maxElLength }) {

  return(
    <section className="card-list">
      <div className="card-list__container">
        { children }
      </div>
      {
        children.length !== maxElLength 
        ? <button className="card-list__btn-add hover-opacity" onClick={handleClickMore}>Ещё</button>
        : null
      }
      
    </section>
  );
}

export default MoviesCardList;
