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
import MainNav from "./nav/main_nav_container";
import Modal from "./modal/modal";

const App = () => {
  return (
    <div className="app">
      <Modal />
      <MainNav />

      {/* <header className="main-header">
        <div className="header-container">
          <Link to="/" className="header-link">
            <img src="./logo.png" alt="Betzy" className="logo" />
          </Link>
          <nav>
            <ul>
              <li>Sell on Betzy</li>
              <li>
                <Link to="/signup">Register</Link>
              </li>
              <li>
                <Link to="/login">Sign in</Link>
              </li>
              <li>CART</li>
            </ul>            
          </nav>      
        </div>
      </header> */}
      <Switch>
        <AuthRoute exect path='/login' component={LoginFormContainer} />
        <AuthRoute exect path='/signup' component={SignupFormContainer} />

      </Switch>
    </div>
  );
};

export default App;