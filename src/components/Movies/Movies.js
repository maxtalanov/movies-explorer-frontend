import './Movies.css';
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import {BASE_URL_MOVIES} from "../../utils/constant";

function Movies({movies, myMovies, onSaveMovie, onRemoveMovie}) {
  function onSaved(id) {
    return  myMovies.some(myMovie => myMovie.movieId === id);
  }

  return (
    <>
      <Header theme="white">
        <NavMenuHeader/>
      </Header>
      <SearchForm/>
      <MoviesCardList>
        {
          movies && movies.map(movie => <MoviesCard
              key={movie.id}
              movie={{
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `${BASE_URL_MOVIES}${movie.image.url}`,
                trailer: movie.trailerLink,
                thumbnail: `${BASE_URL_MOVIES}${movie.image.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
              }}
              type={'movie'}
              onSaved={onSaved(movie.id)}
              onSave={onSaveMovie}
              onRemove={onRemoveMovie}
          />)
        }

      </MoviesCardList>
      <Footer/>
    </>
  );
}

export default Movies;
