import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

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

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});