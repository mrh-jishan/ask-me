import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import PrivateRoute from "./PrivateRoutes";
import AppRoute from "./routes/AppRoute";
import AuthRoute from "./routes/AuthRoute";

const App = () => {
  return (
    <Switch>
      <PrivateRoute path="/secure" component={AppRoute} />
      <Route path="/auth" component={AuthRoute} />
      <Redirect to="/auth" from="/" />
    </Switch>
  );
}

export default App;
