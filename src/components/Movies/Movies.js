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
  useStateCash,
} from "hooks";

import { movies } from '../../utils/constant';

function Movies() {

  return (
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

export default Movies;
