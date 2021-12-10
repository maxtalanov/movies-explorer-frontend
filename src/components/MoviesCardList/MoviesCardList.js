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
      {renderMoviesCard}
      <button className="card-list__btn-add">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
