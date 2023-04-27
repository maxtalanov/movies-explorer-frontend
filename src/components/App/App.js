import React, { useEffect, useState } from "react";

import { Switch, Route, useHistory, Redirect, } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  Login,
  Main,
  Movies,
  NotFound,
  Notification,
  ProtectedRoute,
  Profile,
  Register,
  SavedMovies,
  Preloader
} from 'components'

import { useLocalStorage } from "hooks";

import { ROUTERS } from "routers";
import * as MainAPI from "../../utils/API/MainAPIjs";
import {getMovies} from "../../utils/API/MoviesAPI";

import './App.css';

function App() {
  const idRandom = () => {
    return Math.random().toString(36).substring(2);
  }
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
  const [louding, setLouding] = React.useState({
    isActive: false,
    message: null,
  });
  const [isTokenCheck, setIsTokenCheck] = useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [myMovies, setMyMovies] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filterConfMovie, setFilterConfMovie] = useState(searchFilterMovie);
  const [filterConfMyMovie, setFilterConfMyMovie] = useState(searchFilterMyMovie);
  const [notificationList, setNotificationList] = useState([]);

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
    setLouding({isActive: true, message: 'Идет регистрация пользователя'})
    return MainAPI
      .register(registerData)
      .then(() => {
        onLogin(registerData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>{
        setLouding({isActive: false, message: null})
      })
  }

  function onLogin(loginData) {
    setLouding({isActive: true, message: 'Идет авторизация'})
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
      .finally(() =>{
        setLouding({isActive: false, message: null})
      })
  }

  function onUpdateUser(userData) {
    setLouding({isActive: true, message: 'Идет обнвление данных пользователя'})
    return MainAPI
      .updateUser(userData)
      .then((newDataUser) => {
        setCurrentUser(newDataUser)
        console.log(newDataUser);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() =>{
        setLouding({isActive: false, message: null})
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
      .finally(() => {
        setIsTokenCheck(false);
      });
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
    setLouding({isActive: true, message: 'Выполняется поиск'})
    setTimeout(() => {
      setLouding({isActive: false, message: null})
    }, 3000);
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

  function removeElNotification(cardNotification) {
    const { id } = cardNotification;

    setNotificationList(state => state.filter(state => state.id !== id))
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        { louding.isActive && <Preloader massage={louding.message}/> }
        { notificationList.length >= 1 && <Notification 
            cardList={notificationList} 
            setCardList={setNotificationList}
            removeElNotification={removeElNotification}
          />
        }
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
