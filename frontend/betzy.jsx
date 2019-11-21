import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import ClientDatabase from './client_database';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser){
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
      window.darkMode = window.currentUser.dark_mode;

     // debugger
      delete window.currentUser;
  } else {
      store = configureStore();
  }

  //TESTING ONLY
  window.getState = store.getState;

  window.betzyClientDB = new ClientDatabase("betzyClientDB");

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});