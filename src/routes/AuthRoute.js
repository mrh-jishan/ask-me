import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";


const AuthRoute = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={Login} />
            <Redirect to="/auth/login" from="/auth" />
        </Switch>
    );
};

export default AuthRoute;
