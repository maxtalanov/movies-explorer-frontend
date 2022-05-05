import React from "react";
import './SavedMovies.css';
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies ({ myMovies }) {
  return(
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>
      <SearchForm />
      <MoviesCardList myMovies={ myMovies }/>
      <Footer />
    </>
  );
}

export default SavedMovies;
