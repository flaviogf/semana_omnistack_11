import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Logon from "./pages/Logon";
import NewIncident from "./pages/NewIncident";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Logon />
        </Route>
        <Route path="/new-incident">
          <NewIncident />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
