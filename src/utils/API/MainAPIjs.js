import {checkResponse, BASE_URL_MAIN, BASE_HEADERS_MAIN} from "../constant";

let BASE_URL = BASE_URL_MAIN;

// РЕГИСТРАЦИЯ USER
export const getUser = () => {

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
  }).then(checkResponse)
}

// РЕГИСТРАЦИЯ USER
export const register = ({email, password, userName}) => {

  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
    body: JSON.stringify({
      email: email,
      password: password,
      name: userName,
    })
  }).then(checkResponse)
}

// АВТОРИЗАЦИЯ USER
export const login = ({email, password}) => {

  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
    body: JSON.stringify({email, password})
  }).then(checkResponse)
}

// ОБНОВИТЬ ИНФОРМАЦИЮ USER
export const updateUser = ({email, userName}) => {

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
    body: JSON.stringify({email, name: userName })
  }).then(checkResponse)
}

// ВЫХОД USER
export const userExit = () => {

  return fetch(`${BASE_URL}/signout`, {
    method: "POST",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
  }).then(checkResponse)
}

// СОХРАНЕНЫЕ ФИЛЬМЫ
export const getMyMovies = () => {

  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
  }).then(checkResponse)
}

// СОЗДАТЬ ФИЛЬМ
export const saveMovie = (movie) => {

  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
    body: JSON.stringify({
      director: null,
      duration: null,
      year: null,
      description: null,
      image: null,
      trailer: null,
      thumbnail: null,
      movieId: null,
      nameRU: null,
      nameEN: null,
    })
  }).then(checkResponse)
}

// СОЗДАТЬ ФИЛЬМ
export const removeMovie = ({idMovie}) => {

  return fetch(`${BASE_URL}/movies/:movieId'`, {
    method: "POST",
    credentials: 'include',
    headers: BASE_HEADERS_MAIN,
    body: JSON.stringify({ idMovie })
  }).then(checkResponse)
}

