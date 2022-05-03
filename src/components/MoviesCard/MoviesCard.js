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
