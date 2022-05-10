import React from "react";
import "./SearchForm.css";
import Checkbox from "../Checkbox/Checkbox";


function SearchForm() {

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <fieldset className="search-form__fieldset">
            <input
              className="search-form__input"
              type="search"
              placeholder="Фильмы"
              name="search"
              value={searchForm.search}
              onChange={handleChange}
            />
            <button className="search-form__submit-btn hover-opacity" type="submit"/>
          </fieldset>

          <fieldset className="search-form__fieldset">
            <Checkbox
              label="Короткометражки"
              name="shortFilm"
              checked={searchForm.shortFilm}
              handleChange={handleChange}
            />
          </fieldset>
        </form>
        <span className="search-form__line"/>
      </div>
    </section>
  );
}

export default SearchForm;
