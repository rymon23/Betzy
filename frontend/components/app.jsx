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
//Session
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

import MainNav from "./nav/main_nav_container";
import Modal from "./modal/modal";
import Logo from "./logo/logo";
import SearchForm from "./search/search";
import Categories from "./nav/category";
import Homepage from "./homepage/homepage";

//Store
import StoreShowContainer from "./store/store_show_container";
import StoreCreateContainer from "./store/store_form_create";
import StoreEditContainer from "./store/store_form_edit";
//Product
import ProductShowContainer from "./product/product_show_container";
import ProductCreateContainer from "./product/product_form_create";
import ProductEditContainer from "./product/product_form_edit";
//Category
// import CategoryShowContainer from "./store/store_form_new";
//User 
// import UserShowContainer from "./store/store_form_new";

const App = () => {
  return (
    <>
    <div className="app">
      <Modal />
      <header className="main-header">
          <div className="page-column">
            <div className="main-header-div">
              <Logo/>
              <SearchForm />
              <MainNav />          
            </div>
            <Categories />
          </div>
      </header>
      <div className="page-column">
        <Homepage />
      </div>

      <Switch>
        <AuthRoute exect path='/login' component={LoginFormContainer} />
        <AuthRoute exect path='/signup' component={SignupFormContainer} />

        {/* Store Routes */}
        {/* <Route exact path='/stores/:storeId' component={StoreShowContainer} /> */}
        <ProtectedRoute exect path='/stores/new' component={StoreCreateContainer} />
        <ProtectedRoute exect path='/stores/:storeId/edit' component={StoreEditContainer} />

      </Switch>
    </div>
    </>
  );
};

export default App;