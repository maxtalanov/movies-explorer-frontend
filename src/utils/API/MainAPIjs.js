import {checkResponse, BASE_URL_MAIN, BASE_HEADERS_MAIN} from "../constant";

let BASE_URL = BASE_URL_MAIN;

// РЕГИСТРАЦИЯ USER
export const getUser = () => {

  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: 'include',
    BASE_HEADERS_MAIN,
  }).then(checkResponse)
}

// РЕГИСТРАЦИЯ USER
export const register = ({email, password, userName}) => {
  console.log(`API MAIN register | key: ${password}, user: ${email}, name: ${userName}`);

  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: 'include',
    BASE_HEADERS_MAIN,
    body: JSON.stringify({email, password, userName})
  }).then(checkResponse)
}

// АВТОРИЗАЦИЯ USER
export const login = ({email, password}) => {
  // console.log(`API MAIN login | key: ${password}, user: ${email}`);

  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    BASE_HEADERS_MAIN,
    body: JSON.stringify({email, password})
  }).then(checkResponse)
}

// ОБНОВИТЬ ИНФОРМАЦИЮ USER
export const updateUser = ({email, userName}) => {
  // console.log(`API MAIN updateUser | name: ${userName}, user: ${email}`);

  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: 'include',
    BASE_HEADERS_MAIN,
    body: JSON.stringify({email, userName})
  }).then(checkResponse)
}

// ВЫХОД USER
export const userExit = () => {

  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: 'include',
    BASE_HEADERS_MAIN,
  }).then(checkResponse)
}

