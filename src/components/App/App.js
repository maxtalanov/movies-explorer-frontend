//Корневой компонент приложения, его создаёт CRA.
import React from "react";
import './App.css';
import { Redirect, Switch, Route, useHistory } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";

import * as MainAPI from "../../utils/API/MainAPIjs";

// ф-ый компонент
function App() {
  // СТАЕЙТЫ И ПЕРЕМЕННЫЕ
  const history =  useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);

  console.log(loggedIn);

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
      .then(res => {
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
      .then(res => {
        console.log(res);
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onGetUser() {
    return MainAPI
      .getUser({})
      .then(res => {
        console.log(res);
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
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <div className="app">
      <Switch>
        <ProtectedRoute
          component={Movies}
          path={"/movies"}
          isLoggedIn={loggedIn}
        />

        <ProtectedRoute
          component={SavedMovies}
          path={"/saved-movies"}
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
          <Main/>
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
  );
}

export default App;
