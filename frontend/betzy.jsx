import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


export const setupModal = () => {
  // const modal = document.getElementById("root");
    // console.log(`modal: ${modal} \n document: ${document}`)
  // const modalButton = document.getElementById("");
  // const closeButton = document.getElementsByClassName("")[0];
  // modalButton.addEventListener("click", enableModal);
  // closeButton.addEventListener("click", disableModal);
  window.addEventListener("click", (e) => outerClick(e), {once: true} );
  console.log("setupModal");
  const enableModal = () =>{
    modal.style.display = 'block';
  }
  const disableModal = () => {
    modal.style.display = 'none';
  }
  const outerClick = (e) => {
    window.testTarget = e.target;
    if (e.target.id !== "test-modal-box" 
      && e.target.parentElement.id !== "test-modal-box") {
      window.modal = document.getElementById("test-modal");
      window.modal.style.display = 'none';
    } else setupModal();
  }
};

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
    // setupModal();
  }
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />,root);
});