import React from 'react';
import { useTimeFormat } from 'hooks';

import './MoviesCard.css';

function MoviesCard({movie, type, onSaved, onSave, onRemove}) {

  const { nameRU, duration, image, trailer } = movie;
  const active = onSaved ? 'card__btn-like_active' : '';
  const movieDuration = useTimeFormat(duration);

  function handleSave() {
    onSave(movie);
  }

  function handleRemove() {
    onRemove(movie);
  }

  function movieBtnClick() {
     if (!onSaved) {
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
  console.log(modLike);

  return(
    <section className={`card`}>
      <div className="card__container-info">
        <div className="card__movie-item">
          <h3 className="card__title">{movieData.nameRU}</h3>
          <p className="card__duration">{movieData.duration}</p>
        </div>
        <button className={`card__btn-like ${modLike} hover-opacity`} onClick={likeClick}/>
      </div>
      <img src={movieData.image} alt={`Постер к фильму ${movieData.nameRU}`} className="card__img"/>
    </section>
  );
}

export default MoviesCard;
