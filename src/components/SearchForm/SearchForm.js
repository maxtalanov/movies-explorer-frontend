import React from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";


function SearchForm() {

  return(
    <section className="search-form">
      <div className="search-form__container">
        <input type="text" className="search-form__input" placeholder="Фильмы"/>
        <span className="search-for__span" />
      </div>

      <Checkbox label="Короткометражки" />

      <span className="search-form__line" />
    </section>
  );
}

export default SearchForm;
