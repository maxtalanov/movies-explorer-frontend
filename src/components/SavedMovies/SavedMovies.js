import React from "react";
import './SavedMovies.css';
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies ({ myMovies, onRemoveMovie }) {

  return(
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>
      <SearchForm />
      <MoviesCardList>
        {myMovies && myMovies.map(movie => <MoviesCard
          key={movie._id}
          movie={{
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: movie.image,
            trailer: movie.trailerLink,
            thumbnail: movie.image,
            movieId: movie.movieId,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          }}
          type={'myMovie'}
          onSaved={true}
          onRemove={onRemoveMovie}
        />)}
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
