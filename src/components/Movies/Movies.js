import React from "react";
import './Movies.css';
import Header from "../Header/Header";
import NavMenuHeader from "../NavMenuHeader/NavMenuHeader";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({ movies, myMovies }) {

  return (
    <>
      <Header theme="white">
        <NavMenuHeader />
      </Header>
      <SearchForm />
      <MoviesCardList movies={movies} myMovies={myMovies} />
      <Footer />
    </>
  );
}

export default Movies;
