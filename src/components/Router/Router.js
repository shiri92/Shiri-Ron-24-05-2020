import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Favorites from "../Favorites/Favorites";

const Router = ({ ...props }) => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <HomePage {...props} />} />
      <Route
        exact
        path="/favorites"
        render={(props) => <Favorites {...props} />}
      />
    </Switch>
  );
};

export default Router;
