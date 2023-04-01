import React from "react";
import './Movies.css';
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

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
