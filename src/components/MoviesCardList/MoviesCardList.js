import React from "react";
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ data }) {

  const renderMoviesCard = data.map((m) => {
    return (<MoviesCard
      key={m.movieId}
      movieData={m}
    />);
  });

  return(
    <section className="card-list">
      <div className="card-list__container">
        {renderMoviesCard}
      </div>
      <button className="card-list__btn-add hover-opacity">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
