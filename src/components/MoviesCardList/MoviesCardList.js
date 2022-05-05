import React from "react";
import './MoviesCardList.css';

import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, myMovies }) {

  return(
    <section className="card-list">
      <div className="card-list__container">
        { movies && movies.map(movie =>
          <MoviesCard
            key={movie.id}
            movie={movie}
          />
        )
        }
      </div>
      <button className="card-list__btn-add hover-opacity">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
