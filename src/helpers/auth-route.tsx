import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import useAuth from "./auth-context";

function PrivateRoute({ component, ...rest }: RouteProps) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        component && authTokens ? (
          React.createElement(component, props)
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
