import { checkResponse, BASE_URL_MOVIES } from "../constant";

let BASE_URL = BASE_URL_MOVIES;

// ПОЛУЧИТЬ ФИЛЬМЫ
export const getMovies = () => {
  return fetch(`${BASE_URL}/beatfilm-movies/`).then(checkResponse)
}
