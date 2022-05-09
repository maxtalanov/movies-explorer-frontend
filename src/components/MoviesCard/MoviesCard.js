import { useState } from "react";
import { timeFormat } from '../../utils/globalMethod/time';
import './MoviesCard.css';

function MoviesCard({movie, type, onSaved, onSave, onRemove}) {

  const { nameRU, duration, image, trailer } = movie;

  const active = isSave ? 'card__btn-like_active' : '';
  const movieDuration = timeFormat(duration);

  function handleSave() {
    onSave(movie);
    setIsSave(!isSave);
  }

  function handleRemove() {
    onRemove(movie);
    setIsSave(!isSave);
  }

  function movieBtnClick() {
     if (!isSave) {
       handleSave()
     } else {
       handleRemove();
     }
  }

  function myMovieBtnClick() {
    handleRemove()
  }

  function movieBtn() {
    if (type === 'movie') {
      return <button className={`card__btn-save card__btn-like ${active} hover-opacity`} onClick={movieBtnClick}/>
    }
  }

  function myMovieBtn() {
    if (type === 'myMovie') {
      return <button className={`card__btn-save card__btn-remove hover-opacity`} onClick={myMovieBtnClick}/>
    }
  }

  return(
    <section className={`card`}>
      <div className="card__container-info">
        <div className="card__movie-item">
          <h3 className="card__title">{nameRU}</h3>
          <p className="card__duration">{`${movieDuration.hours}ч ${movieDuration.minute}м`}</p>
        </div>
        {movieBtn()}
        {myMovieBtn()}
      </div>
      <a className={`card__link-trailer`} href={trailer} target="_blank" rel="noreferrer">
        <img src={image} alt={`Постер к фильму ${nameRU}`} className="card__img"/>
      </a>

    </section>
  );
}

export default MoviesCard;
