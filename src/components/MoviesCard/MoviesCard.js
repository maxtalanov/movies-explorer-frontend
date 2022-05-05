import { useState } from "react";
import { timeFormat } from '../../utils/globalMethod/time';
import './MoviesCard.css';

function MoviesCard({movie, onSaved, onSave, onRemove}) {

  const [isSave, setIsSave] = useState(onSaved)
  const { nameRU, duration, image } = movie;

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

  function likeClick() {
     if (!isSave) {
       handleSave()
     } else {
       handleRemove();
     }
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
      <img src={image} alt={`Постер к фильму ${nameRU}`} className="card__img"/>
    </section>
  );
}

export default MoviesCard;
