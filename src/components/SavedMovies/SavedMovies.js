import React from "react";
import './SavedMovies.css';
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {movies} from "../../utils/constant";
import Footer from "../Footer/Footer";

function SavedMovies () {
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
