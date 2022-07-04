import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import {BASE_URL_MOVIES} from "../../utils/constant";
import useWindowDimensions from "../../utils/globalMethod/windowDimensions";
import './Movies.css';

function Movies({movies, myMovies, onSaveMovie, onRemoveMovie, searchMovie}) {
  const [renderLength, setRenderLength] = useState({
    valueAdd: null,
    valueLength: 1,
  });
  const { width } = useWindowDimensions();
  const renderConfig = {
    desktop: 769 <= width,
    tablet:  481 <= width && width >= 768,
    mobile: 320 <= width && width >= 480,
  }

  useEffect(() => {
    renderCard()
  }, [width]);

  function onSaved(id) {
    return  myMovies.some(myMovie => myMovie.movieId === id);
  }

  const renderCard = () => {
    if (renderConfig.desktop) {
      return setRenderLength({
        valueLength: 5,
        valueAdd: 3,
      })
    }

    if (renderConfig.tablet) {
      return setRenderLength({
        valueLength: 8,
        valueAdd: 2,
      })
    }

    if (renderConfig.mobile) {
      return setRenderLength({
        valueLength: 12,
        valueAdd: 2,
      })
    }
  }

  const handleClickMore = (e) => {
    e.preventDefault();

    setRenderLength({
      valueLength: renderLength.valueLength + renderLength.valueAdd,
      valueAdd: renderLength.valueAdd,
    })
  }

  return (
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>
      <SearchForm  setMovies={movies[1]} searchMovie={searchMovie} action='movies'/>
      <MoviesCardList handleClickMore={handleClickMore}>
        {
          movies[0] && movies[0]
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
