import React from "react";
import { 
  Header, 
  NavMenuHeader,
  SearchForm,
  MoviesCard,
  MoviesCardList, 
  Footer,
} from "components"

import { BASE_URL_MOVIES } from "../../utils/constant";
import { 
  useWindowDimensions,
  useRenderCard,
} from "hooks";

import './Movies.css';

function Movies({movies, myMovies, onSaveMovie, onRemoveMovie}) {
  const { width } = useWindowDimensions();
  const { renderLength, handleClickBtn} = useRenderCard(width);

  const onSaved = (id) => {
    return  myMovies.some(myMovie => myMovie.movieId === id);
  }
  
  return (
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>

      <SearchForm  
        // defaultMovies={cashNewMovies}
        // movies={newMovies}
        // setMovies={setNewMovies} 
      />
      <MoviesCardList handleClickMore={handleClickBtn} maxElLength={movies.length}>
        {
          movies && movies
            .slice(0, renderLength.valueLength)
            .map(movie => <MoviesCard
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
