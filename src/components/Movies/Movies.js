import { useEffect, useState } from "react";
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

function Movies({movies, myMovies, onSaveMovie, onRemoveMovie, searchMovies, filterConf, onFilterMovies}) {
  const { width } = useWindowDimensions();
  const { renderLength, handleClickBtn} = useRenderCard(width);
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [noMovies, setNoMovies] = useState({
    isActive: false,
    message: null,
  });

  const styleNoMovies ={
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    maxWidth: '840%',
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
    if (movies.length !== 0) {
      const filtered = onFilterMovies(filterConf.input, filterConf.switcher, movies);
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
        message: 'Доступных фильмов нет',
      });
    }
  }, [movies, filterConf, onFilterMovies]);

  const onSaved = (id) => {
    return  myMovies.some(myMovie => myMovie.movieId === id);
  }
  
  return (
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
            />
            )
        }
      </MoviesCardList>
      {
        noMovies.isActive && <p 
        style={styleNoMovies}>
          {noMovies.message}
        </p>
      }
      <Footer/>
    </>
  );
}

export default Movies;
