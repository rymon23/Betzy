import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom'

//Session
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";

import MainNav from "./nav/main_nav_container";
import Modal from "./modal/modal";
import Logo from "./logo/logo";
import SearchForm from "./search/search";
import Categories from "./nav/category";

import Navbar from './navbar/navbar';
import EditStoreContainer from './vendors/edit_shop_container';
import CreateStoreContainer from './vendors/create_shop_container';
import StoreShowContainer from './vendors/shop_show_container';
import HomePageContainer from './homepage/homepage_container';
import CategoryShowContainer from './category/category_show_container';
import CreateProductContainer from './product/create_product_container';
import EditProductForm from './product/edit_product_container';
import ProductShowContainer from './product/product_show_container';
import EditUserProfileContainer from './user/edit_user_profile_container';
import UserProfileShowContainer from './user/user_profile_show_container';

const App = () => {
  return (
    <>
    <div className="app">
      <Modal />
      <header className="main-header">
          {/* <div className="page-column">
            <div className="main-header-div">
              <Logo/>
              <SearchForm />
              <MainNav />          
            </div>
            <Categories />
          </div> */}
          <Navbar />
      </header>

      <Switch>
        <Route exact path='/' component={HomePageContainer} />
        <AuthRoute exect path='/login' component={LoginFormContainer} />
        <AuthRoute exect path='/signup' component={SignupFormContainer} />

        <ProtectedRoute exact path='/stores/:storeId/edit' component={EditStoreContainer} />
        <ProtectedRoute exact path='/stores/new' component={CreateStoreContainer} />
        <Route exact path='/stores/:storeId' component={StoreShowContainer} />

        <Route exact path='/users/:userId' component={UserProfileShowContainer} />
        <ProtectedRoute exact path='/users/:userId/edit' component={EditUserProfileContainer} />

        <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />

        <ProtectedRoute exact path='/stores/:storeId/products/new' component={CreateProductContainer} />
        <ProtectedRoute exact path='/products/:productId/edit' component={EditProductForm} />
        <Route exact path='/stores/:storeId/products/:productId' component={ProductShowContainer} />

      </Switch>
    </div>
    </>
  );
};

export default App;