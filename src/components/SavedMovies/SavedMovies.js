import React, {useEffect, useState} from "react";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowDimensions from "../../utils/globalMethod/windowDimensions";
import './SavedMovies.css';

function SavedMovies ({ myMovies, onRemoveMovie, searchMovie }) {

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

  return(
    <>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>
      <SearchForm setMovies={myMovies[1]} searchMovie={searchMovie} action='myMovies'/>
      <MoviesCardList handleClickMore={handleClickMore}>
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
