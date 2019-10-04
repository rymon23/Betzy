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
import Logo from "./logo/logo";
import SearchForm from "./search/search";
import Categories from "./nav/category";
import Homepage from "./homepage/homepage";

const testModal = () => {
  return (
    <div id="test-modal" className="test-modal">
      <div id="test-modal-box" className="test-modal-box">
        <h1>Test Modal Box</h1>
        <button>Test button</button>
      </div>

    </div>
  );
}

const App = () => {
  return (
    <>
   {/* // <div className="category-divider"></div> */}
    <div className="app">
      <Modal />
      <header className="main-header">
        <Logo/>
        <SearchForm />
        <MainNav />
      </header>
      <Categories />
      <Homepage />

      <Switch>
        <AuthRoute exect path='/login' component={LoginFormContainer} />
        <AuthRoute exect path='/signup' component={SignupFormContainer} />
      </Switch>
    </div>
    </>
  );
};

export default App;