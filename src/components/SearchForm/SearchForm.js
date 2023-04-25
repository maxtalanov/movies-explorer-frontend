import { useState }from "react";
import { Checkbox } from "components";

import "./SearchForm.css";

function SearchForm({ searchMovies, initialForm }) {
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchMovies(form)
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <fieldset className="search-form__fieldset">
            <input
              className="search-form__input"
              type="search"
              placeholder="Фильмы"
              name="input"
              value={form.input}
              onChange={handleChange}
            />
            <button className="search-form__submit-btn hover-opacity" type="submit"/>
          </fieldset>

          <fieldset className="search-form__fieldset">
            <Checkbox
              label="Короткометражки"
              name="switcher"
              checked={form.switcher}
              handleChange={handleChange}
              onSubmit={handleSubmit}
            />
          </fieldset>
        </form>
        <span className="search-form__line"/>
      </div>
    </section>
  );
}

export default SearchForm;
