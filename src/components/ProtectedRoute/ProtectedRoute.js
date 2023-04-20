import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ROUTERS } from 'routers'

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ component: Component, ...props }) => {

  return (
    <Route>
      {() =>
        props.isLoggedIn ? <Component {...props} /> : <Redirect to={ROUTERS.DEFAULT} />
      }
    </Route>
  );
};

export default ProtectedRoute;
