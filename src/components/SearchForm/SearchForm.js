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

    if (target.type === 'checkbox') {
      handeleSwitch(form.switch, movies, defaultMovies)
    } 

    if (value === '') {
      setMovies(defaultMovies)
    }
  }
  
  const handeleSwitch = (switchState, arr, defaultArr) => {
      return !switchState
        ? setMovies(arr.filter((movie) => movie.isHortFilm === true))
        : setMovies(defaultArr)
  }

  const handleSearch = (value, arr, defaultArr ) => {
    return value === ''
      ? defaultArr
      : arr.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(value.toLowerCase())
       })    
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setMovies(handleSearch(form.input, movies, defaultMovies))
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
              name="switch"
              checked={form.switch}
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
