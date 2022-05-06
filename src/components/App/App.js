//Корневой компонент приложения, его создаёт CRA.
import React, {useEffect, useState} from "react";
import './App.css';

import { Switch, Route, useHistory } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";

import * as MainAPI from "../../utils/API/MainAPIjs";
import * as MoviesAPI from "../../utils/API/MoviesAPI";
import {getMovies} from "../../utils/API/MoviesAPI";

// ф-ый компонент
function App() {
  // СТАЕЙТЫ И ПЕРЕМЕННЫЕ
  const history =  useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [myMovies, setMyMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onGetMovies();
    onGetMyMovie();

  }, [])

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      history.push('/movies');
    } else {
      history.push('/');
    }
  }, [history, loggedIn]);

  function onGetMovies() {

    return getMovies()
      .then((movies) => {
        setMovies(movies)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function onRegister(registerData) {

    return MainAPI
      .register(registerData)
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onLogin(loginData) {

    return MainAPI
      .login(loginData)
      .then((res) => {
        onGetUser();
        setLoggedIn(true);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onUpdateUser(userData) {
    return MainAPI
      .updateUser(userData)
      .then((newDataUser) => {
        setCurrentUser(newDataUser)
        console.log(newDataUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onExitUser() {
    console.log('evt exit')
    return MainAPI
      .userExit()
      .then(res => {
        setLoggedIn(false);
        setCurrentUser({});
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const onGetUser = () => {

    return MainAPI
      .getUser()
      .then((currentUser) => {
        setCurrentUser(currentUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function tokenCheck() {

    return MainAPI
      .getUser()
      .then((data) => {
        onGetUser();
        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onGetMyMovie() {

    return MainAPI
      .getMyMovies()
      .then((movies) =>{
        setMyMovies(movies)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onSaveMovie(movie) {

    return MainAPI
      .saveMovie(movie)
      .then((movieSave) => {
        setMyMovies([movieSave, ...myMovies]);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  function onRemoveMovie(movie) {
    const id = myMovies.find(myMovie => myMovie.movieId === movie.movieId)
    return MainAPI
      .removeMovie(id._id)
      .then((removeMovie) => {
        setMyMovies(myMovies.filter(myMovie => myMovie._id === removeMovie._id))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <ProtectedRoute
            component={Movies}
            path={"/movies"}
            onSaveMovie={onSaveMovie}
            onRemoveMovie={onRemoveMovie}
            movies={movies}
            myMovies={myMovies}
            isLoggedIn={loggedIn}
          />

          <ProtectedRoute
            component={SavedMovies}
            path={"/saved-movies"}
            onRemoveMovie={onRemoveMovie}
            myMovies={myMovies}
            isLoggedIn={loggedIn}
          />

          <ProtectedRoute
            component={Profile}
            path={"/profile"}
            isLoggedIn={loggedIn}

            onLogout={onExitUser}
            onUpdateUser={onUpdateUser}
          />

          <Route exact path='/'>
            <Main isLoggedIn={loggedIn}/>
          </Route>

          <Route path='/signin'>
            <Login onLogin={onLogin}/>
          </Route>

          <Route path='/signup'>
            <Register onRegister={onRegister}/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
