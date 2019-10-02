import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/" className="header-link">
            <h1>Betzy</h1>
        </Link>
        <br/>
        <Link to="/signup">Register</Link>
        <br/>
        <Link to="/login">Sign in</Link>
      </header>
      <Switch>
        <AuthRoute exect path='/login' component={LoginFormContainer} />
        <AuthRoute exect path='/signup' component={SignupFormContainer} />

      </Switch>
    </div>
  );
};

export default App;