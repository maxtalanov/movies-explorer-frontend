import React, {useState} from "react";
import './SavedMovies.css';
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import MoviesCard from "../MoviesCard/MoviesCard";
import useWindowDimensions from "../../utils/globalMethod/windowDimensions";

function SavedMovies ({ myMovies, onRemoveMovie, searchMovie }) {
  const [renderLength, setRenderLength] = useState(null)
  const { width } = useWindowDimensions();

  const renderConfig = {
    mobile: 769 <= width,
    tablet:  481 <= width && width >= 768,
    desktop: 320 <= width && width >= 480,
  }
  const renderCard = () => {
    if(renderConfig.desktop) {
      setRenderLength(5)
    }

    if (renderConfig.tablet) {
      setRenderLength(8)
    }

    if (renderConfig.mobile) {
      setRenderLength(12)
    }
  }

  return(
    <>
      {renderCard()}
      <p>width: {width}</p>
      <Header theme="white">
        <NavMenuHeader theme={'dark'}/>
      </Header>
      <SearchForm setMovies={myMovies[1]} searchMovie={searchMovie} action='myMovies'/>
      <MoviesCardList>
        {myMovies[0] && myMovies[0]
          .slice(0, renderLength)
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
        />)}
      </MoviesCardList>
      <Footer />
    </>
  );
}

export default SavedMovies;
