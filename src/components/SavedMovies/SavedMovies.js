import { useEffect, useState } from "react";
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

function SavedMovies ({ myMovies, onRemoveMovie, searchMovies, filterConf, onFilterMovies }) {
  const { width } = useWindowDimensions();
  const { renderLength, handleClickBtn } = useRenderCard(width);
  const [filteredMovies, setFilteredMovies] = useState(myMovies)
  const [noMovies, setNoMovies] = useState({
    isActive: false,
    message: null,
  });

  const styleNoMovies ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    maxWidth: '80%',
    minHeight: '100px',
    margin: "0 auto",
    fontFamily: "Inter, sans-serif",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineLeight: "22px",
    color: "#000000",
  }
  
  useEffect(() => {
    if (myMovies.length !== 0) {
      const filtered = onFilterMovies(filterConf.input, filterConf.switcher, myMovies);
      setFilteredMovies(filtered);
  
      if (filtered.length === 0) {
        setNoMovies({
          isActive: true,
          message: 'Поиск не дал результатов',
        });
      } else {
        setNoMovies({
          isActive: false,
          message: null,
        });
      }
    } else {
      setFilteredMovies([]);
      setNoMovies({
        isActive: true,
        message: 'Сохраненых фильмов нет',
      });
    }
  }, [myMovies, filterConf, onFilterMovies]);

  return(
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>

      <SearchForm  
        initialForm={filterConf}
        searchMovies={searchMovies}
      />

      <MoviesCardList handleClickMore={handleClickBtn} maxElLength={filteredMovies.length}>
        {
          filteredMovies
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
      {
        noMovies.isActive && <p 
        style={styleNoMovies}>
          {noMovies.message}
        </p>
      }
      <Footer />
    </>
  );
}

export default SavedMovies;
