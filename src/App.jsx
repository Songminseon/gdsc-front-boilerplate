import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";

import Login from "./pages/Account/Login";
import Signup from "./pages/Account/Signup";

import Test from "./pages/Test";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/test" component={Test} />

        <Route exact path="/setting" component={Setting} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
