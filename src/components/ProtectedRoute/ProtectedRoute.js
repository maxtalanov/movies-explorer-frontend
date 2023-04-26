import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTERS } from 'routers'

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isLoggedIn, isTokenCheck } = props;

  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to={ROUTERS.DEFAULT} />
      }
    </Route>
  );
};

export default ProtectedRoute;
