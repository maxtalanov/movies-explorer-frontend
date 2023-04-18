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

  return(
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>
      <SearchForm />
      <MoviesCardList  data={movies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
