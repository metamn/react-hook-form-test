import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import LoginMUI from "./components/LoginMUI";

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/loginmui">Login MUI</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/loginmui">
          <LoginMUI />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

export default App;
