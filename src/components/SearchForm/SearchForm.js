import React from "react";
import { Checkbox } from "components";

import "./SearchForm.css";


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
