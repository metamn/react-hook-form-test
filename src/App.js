import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import LoginMUI from "./components/LoginMUI";
import LoginBootstrap from "./components/LoginBootstrap";
import Validation1 from "./components/Validation1";
import Validation1a from "./components/Validation1a";
import Validation1b from "./components/Validation1b";
import Validation2 from "./components/Validation2";

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
        <li>
          <Link to="/loginbootstrap">Login Bootstrap</Link>
        </li>
        <li>
          <Link to="/validation1">Validation1 (Yup, triggerValidation)</Link>
        </li>
        <li>
          <Link to="/validation1a">
            Validation1a (MUI, Yup, triggerValidation) - not working
          </Link>
        </li>
        <li>
          <Link to="/validation1b">
            Validation1b (MUI, Yup, triggerValidation) - works with InputRef
          </Link>
        </li>
        <li>
          <Link to="/validation2">
            Validation2 (Select, MUI, Yup, triggerValidation)
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/loginmui">
          <LoginMUI />
        </Route>
        <Route path="/loginbootstrap">
          <LoginBootstrap />
        </Route>
        <Route path="/validation1">
          <Validation1 />
        </Route>
        <Route path="/validation1a">
          <Validation1a />
        </Route>
        <Route path="/validation1b">
          <Validation1b />
        </Route>
        <Route path="/validation2">
          <Validation2 />
        </Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
};

export default App;
