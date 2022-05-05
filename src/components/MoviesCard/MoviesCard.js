import { useState } from "react";
import { timeFormat } from '../../utils/globalMethod/time';
import './MoviesCard.css';

import { BASE_URL_MOVIES } from '../../utils/constant'

function MoviesCard({movie}) {
  const [isSave, setIsSave] = useState(false)

  const { nameRU, duration, image } = movie;
  const movieDuration = timeFormat(duration);
  const srcImg = `${BASE_URL_MOVIES}${image.url}`;
  const active = isSave ? 'card__btn-like_active' : '';

  function handleSave() {

  }

  function handleRemove() {

  }

  function likeClick() {
    setIsSave(!isSave);

    return isSave ? handleSave : handleRemove;
  }

  return(
    <section className={`card`}>
      <div className="card__container-info">
        <div className="card__movie-item">
          <h3 className="card__title">{nameRU}</h3>
          <p className="card__duration">{`${movieDuration.hours}ч ${movieDuration.minute}м`}</p>
        </div>
        <button className={`card__btn-like ${active} hover-opacity`} onClick={likeClick}/>
      </div>
      <img src={srcImg} alt={`Постер к фильму ${nameRU}`} className="card__img"/>
    </section>
  );
}

export default MoviesCard;
