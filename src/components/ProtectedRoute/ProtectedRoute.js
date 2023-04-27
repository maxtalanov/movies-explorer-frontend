import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Preloader } from "components";
import { ROUTERS } from 'routers'

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn, isTokenCheck } = props;

  return (
    <Route>
      {() =>
        isTokenCheck ? <Preloader massage='Идет проверка авторизации' /> : isLoggedIn 
        ? <Component {...props} /> 
        : <Redirect to={ROUTERS.DEFAULT} />
      }
    </Route>
  );
};

export default ProtectedRoute;
