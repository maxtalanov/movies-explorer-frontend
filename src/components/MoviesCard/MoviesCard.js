import React from "react";
import './MoviesCard.css';

function MoviesCard({ titleRu, duration, image }) {
  const [modLike, setModLike] = React.useState(''); //Удалить после написания ф-ла
  //Удалить после написания ф-ла
  function likeClick() {
    setModLike('card__btn-like_active');
  }

  return(
    <section className={`card`}>
      <div className="card__container-info">
        <div className="card__movie-item">
          <h3 className="card__title">{titleRu}</h3>
          <p className="card__duration">{`${movieDuration.hours}ч ${movieDuration.minute}м`}</p>
        </div>
        <button className={`card__btn-like ${modLike} hover-opacity`} onClick={likeClick}/>
      </div>
      <img src={image} alt={`Постер к фильму ${titleRu}`} className="card__img"/>
    </section>
  );
}

export default MoviesCard;
