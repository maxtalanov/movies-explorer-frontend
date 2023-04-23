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
 } from "hooks";

import './SavedMovies.css';

function SavedMovies ({ myMovies, onRemoveMovie }) {
  const { width } = useWindowDimensions();
  const { renderLength, handleClickBtn } = useRenderCard(width);

  return(
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>

      <SearchForm  
        // defaultMovies={cashNewMyMovies}
        // movies={newMyMovies}
        // setMovies={setNewMyMovies} 
      />

      <MoviesCardList handleClickMore={handleClickBtn} maxElLength={myMovies[0].length}>
        {
          myMovies[0] && myMovies[0]
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
              onRemove={onRemoveMovie}
            />)
        }
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
