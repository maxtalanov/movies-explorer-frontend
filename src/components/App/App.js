import React, { useState} from "react";

import './App.css';

import { Switch, Route, useHistory, Redirect, } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ROUTERS from "./../../routers/index";
import * as MainAPI from "../../utils/API/MainAPIjs";
import {getMovies} from "../../utils/API/MoviesAPI";

// ф-ый компонент
function App() {
  // СТАЕЙТЫ И ПЕРЕМЕННЫЕ
  const history =  useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [myMovies, setMyMovies] = useState([]);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   onGetMovies();
  //   onGetMyMovie();
  //
  // }, [])

  React.useEffect(() => {
    tokenCheck();
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      onGetMovies();
      onGetMyMovie();
      // history.push(ROUTERS.MOVIES);
    } else {
      // history.push(ROUTERS.DEFAULT);
    }
  }, [history, loggedIn]);

  function onGetMovies() {

    return getMovies()
      .then((movies) => {
       const m = movies.map(movie => {
          const isHortFilm = (duration) => {
            if (duration <= 40) {
              return true;
            } else{
              return false
            }
          }
          return {...movie, isHortFilm: isHortFilm(movie.duration)}
        })
        setMovies(m)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function searchMovie(search, setArr) {
    setArr(state => {
      return state
        .filter(el => el.nameRU.toLowerCase().includes(search.search.toLowerCase()))
        .filter(el => el.isHortFilm === search.shortFilm);
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
      .then(() => {
        setMyMovies(state => state.filter(el => el._id !== id._id));
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
            exact
            component={Movies}
            path={ROUTERS.MOVIES}
            onSaveMovie={onSaveMovie}
            onRemoveMovie={onRemoveMovie}
            movies={[movies, setMovies]}
            myMovies={myMovies}
            searchMovie={searchMovie}
            isLoggedIn={loggedIn}
          />

          <ProtectedRoute
            exact
            component={SavedMovies}
            path={ROUTERS.SAVED_MOVIES}
            onRemoveMovie={onRemoveMovie}
            myMovies={[myMovies, setMyMovies]}
            searchMovie={searchMovie}
            isLoggedIn={loggedIn}
          />

          <ProtectedRoute
            exact
            component={Profile}
            path={ROUTERS.PROFILE}
            isLoggedIn={loggedIn}

            onLogout={onExitUser}
            onUpdateUser={onUpdateUser}
          />

          <Route exact path={ROUTERS.DEFAULT}>
            <Main isLoggedIn={loggedIn}/>
          </Route>

          <Route exact path={ROUTERS.HOME}>
            <Main isLoggedIn={loggedIn}/>
          </Route>

          <Route exact path={ROUTERS.LOGIN}>
            { loggedIn 
              ? <Redirect to={ROUTERS.DEFAULT} />
              : <Login onLogin={onLogin}/>
            }
          </Route>

          <Route path={ROUTERS.REGISTRATION}>
            <Register onRegister={onRegister}/>
          </Route>

          <Route exact path={ROUTERS.FAKE}>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
