//Корневой компонент приложения, его создаёт CRA.

import React from "react";
import {Route, Switch} from "react-router-dom";
import './App.css';
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
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onUpdateUser() {
    return MainAPI
      .updateUser({})
      .then(res => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function onExitUser() {
    return MainAPI
      .userExit({})
      .then(res => {
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


  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Main/>
        </Route>

        <Route path='/movies'>
          <Movies/>
        </Route>

        <Route path='/saved-movies'>
          <SavedMovies/>
        </Route>

        <Route path='/profile'>
          <Profile/>
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
