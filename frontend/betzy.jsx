import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser){
    const preloadedState = {
      session: {id: window.currentUser.id },
      entities: { user: { [window.currentUser.id]: window.currentUser }}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  // ReactDOM.render(<h1>Welcome to Betzy</h1>, root);
  ReactDOM.render(<Root store={store} />,root);
});