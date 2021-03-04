import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // const user = JSON.parse(localStorage.getItem("user")) 
  const user = useSelector(state => state.getDataReducer.user);
  // console.log(user, 'userdatafrompersist')
  return (
    <Route
      {...rest}
      render={props => {
        return (user && user.name === "careseeker") ? (
          <Component {...props} />
        ) : (
            <Redirect to="/" />
          );
      }}
    />
  );
};

export default PrivateRoute;
