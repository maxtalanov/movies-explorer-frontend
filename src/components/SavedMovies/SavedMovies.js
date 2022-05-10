import React from "react";
import './SavedMovies.css';
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies ({ myMovies, onRemoveMovie, searchMovie }) {
  console.log(myMovies)

  return(
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>
      <SearchForm setMovies={myMovies[1]} searchMovie={searchMovie} />
      <MoviesCardList>
        {myMovies[0] && myMovies[0].map(movie => <MoviesCard
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
