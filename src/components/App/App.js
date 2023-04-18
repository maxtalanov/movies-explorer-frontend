//Корневой компонент приложения, его создаёт CRA.

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

import { ROUTERS } from "routers";
import * as MainAPI from "../../utils/API/MainAPIjs";
import {getMovies} from "../../utils/API/MoviesAPI";

import './App.css';

function App() {

  return (
    <div className="app">
      <Switch>

        <Route exact path='/'>
          <Main/>
        </Route>

          <ProtectedRoute
            exact
            component={Profile}
            path={ROUTERS.PROFILE}
            isLoggedIn={loggedIn}
            onLogout={onExitUser}
            onUpdateUser={onUpdateUser}
          />

        <Route path='/profile'>
          <Profile/>
        </Route>

        <Route path='/signin'>
          <Login/>
        </Route>

        <Route path='/signup'>
          <Register/>
        </Route>

        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
