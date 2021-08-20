import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Wrapper from "../components/wrapper/Wrapper";
import SignIn from "../components/signIn/SignIn";
import SignUp from "../components/signUp/SignUp";

const AppRouter = () => (
  <BrowserRouter>
    <Wrapper>
      <Switch>
        <Route path="/" component={App} exact={true} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Wrapper>
  </BrowserRouter>
);

export default AppRouter;
