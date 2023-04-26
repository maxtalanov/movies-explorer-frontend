import React, { useEffect, useState } from "react";

import { Switch, Route, useHistory, Redirect, } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  Login,
  Main,
  Movies,
  NotFound,
  ProtectedRoute,
  Profile,
  Register,
  SavedMovies
} from 'components'

import { useLocalStorage } from "hooks";

import { ROUTERS } from "routers";
import * as MainAPI from "../../utils/API/MainAPIjs";
import {getMovies} from "../../utils/API/MoviesAPI";

import './App.css';

function App() {
  // TODO: Удалить все комментарии и привести в единобразный стиль
  const {storedValue: searchFilterMovie, setValue: setSearchFilterMovie} = useLocalStorage('searchFilterMovie', {
    switcher: false,
    input: '',
    type: 'movie',
  });
  const {storedValue: searchFilterMyMovie, setValue: setSearchFilterMyMovie} = useLocalStorage('searchFilterMyMovie', {
    switcher: false,
    input: '',
    type: 'myMovie',
  });
  const history =  useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isTokenCheck, setIsTokenCheck] = useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [myMovies, setMyMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filterConfMovie, setFilterConfMovie] = useState(searchFilterMovie);
  const [filterConfMyMovie, setFilterConfMyMovie] = useState(searchFilterMyMovie);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn) {
      onGetMovies();
      onGetMyMovie();
    }
  }, [history, loggedIn]);

  function onGetMovies() {

    return getMovies()
      .then((movies) => {
      // TODO: Вынести в отдельную ф-ию
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

  function onRegister(registerData) {

    return MainAPI
      .register(registerData)
      .then(() => {
        onLogin(registerData);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onLogin(loginData) {

    return MainAPI
      .login(loginData)
      .then((res) => {
        setLoggedIn(true);
        onGetUser();
        history.push(ROUTERS.MOVIES)
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
        history.push(ROUTERS.LOGIN)

        // TODO: Удалить консоли по зовершению
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
      .finally(setIsTokenCheck(false))
  }

  function tokenCheck() {

    return MainAPI
      .getUser()
      .then((data) => {
        setLoggedIn(true);
        onGetUser();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onGetMyMovie() {

    return MainAPI
      .getMyMovies()
      .then((movies) => {
        // TODO: Вынести в отдельную ф-ию
        const m = movies.map(movie => {
          const isHortFilm = (duration) => {
            if (duration <= 40) {
              return true;
            } else {
              return false
            }
          }
          return {...movie, isHortFilm: isHortFilm(movie.duration)}    
        })
        setMyMovies(m);
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

  function onSearchMovies(search) {
    const { switcher, input, type } = search;

    if (type === 'movie') {
      setSearchFilterMovie({
        switcher: switcher,
        input: input,
        type,
      });
      setFilterConfMovie({
        switcher: switcher,
        input: input,
        type,
      });
    }
    
    if (type === 'myMovie') {
      setSearchFilterMyMovie({
        switcher: switcher,
        input: input,
        type,
      });
      setFilterConfMyMovie({
        switcher: switcher,
        input: input,
        type,
      });
    }
  }

  function onFilterMovies(input, switcher, arr) {    
      let result = arr;

      if (switcher) {
        result = result.filter(el => el.isHortFilm);
      }
  
      if (input === '') {
        return result
      } else {
        const trimmedInput = input.trim().toLowerCase();
        result = result.filter((el) => {
          const trimmedNameRU = el.nameRU.trim().toLowerCase();
          const trimmedNameEN = el.nameEN.trim().toLowerCase();
          return trimmedNameRU.includes(trimmedInput) || trimmedNameEN.includes(trimmedInput);
        });
      }
  
      return result;
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
            movies={movies}
            myMovies={myMovies}
            filterConf={filterConfMovie}
            onFilterMovies={onFilterMovies}
            searchMovies={onSearchMovies}
            isLoggedIn={loggedIn}
            isTokenCheck={isTokenCheck}
          />

          <ProtectedRoute
            exact
            component={SavedMovies}
            path={ROUTERS.SAVED_MOVIES}
            onRemoveMovie={onRemoveMovie}
            myMovies={myMovies}
            filterConf={filterConfMyMovie}
            onFilterMovies={onFilterMovies}
            searchMovies={onSearchMovies}
            isLoggedIn={loggedIn}
            isTokenCheck={isTokenCheck}
          />

          <ProtectedRoute
            exact
            component={Profile}
            path={ROUTERS.PROFILE}
            isLoggedIn={loggedIn}
            isTokenCheck={isTokenCheck}
            onLogout={onExitUser}
            onUpdateUser={onUpdateUser}
          />

          <Route exact path={ROUTERS.DEFAULT}>
            <Main isLoggedIn={loggedIn} isTokenCheck={isTokenCheck}/>
          </Route>

          <Route exact path={ROUTERS.HOME}>
            <Main isLoggedIn={loggedIn} isTokenCheck={isTokenCheck}/>
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
