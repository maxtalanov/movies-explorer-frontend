import React from "react";
import { 
  NavMenuHeader,
  Header,
  SearchForm,
  MoviesCard,
  MoviesCardList,
  Footer,
 } from "components";

import { 
  useRenderCard, 
  useWindowDimensions,
  useStateCash,
 } from "hooks";

import './SavedMovies.css';

function SavedMovies ({ myMovies, onRemoveMovie }) {
  const { width } = useWindowDimensions();
  const { renderLength, handleClickBtn } = useRenderCard(width);
  const [newMyMovies, setNewMyMovies, cashNewMyMovies] = useStateCash(myMovies[0])

  function onSaved(id) {
    return  myMovies.some(myMovie => myMovie.movieId === id);
  }

  return(
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>
      <SearchForm  
        defaultMovies={cashNewMyMovies}
        movies={newMyMovies}
        setMovies={setNewMyMovies} 
      />
      <MoviesCardList handleClickMore={handleClickBtn}>
        {
          newMyMovies && newMyMovies
            .slice(0, renderLength.valueLength)
            .map(movie => <MoviesCard
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
            />)
        }
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
