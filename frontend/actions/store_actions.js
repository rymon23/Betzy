import * as APIUtil from "../util/stores_api_util";

export const RECEIVE_ALL_STORES = "RECEIVE_ALL_STORES";
export const RECEIVE_STORE = "RECEIVE_STORE";
export const RECEIVE_STORE_ERRORS = "RECEIVE_STORE_ERRORS";

const receiveAllStores = (stores) => {
  return {
    type: RECEIVE_ALL_STORES,
    stores
  }
} 
const receiveStore = (store) => {
  return {
    type: RECEIVE_STORE,
    store
  }
} 
const receiveStoreErrors = (errors) => {
  return {
    type: RECEIVE_STORE_ERRORS,
    errors
  }
} 

export const fetchStores = () => dispatch => {
  return APIUtil.fetchStores()
    .then((stores) => dispatch(receiveAllStores(stores)))
};
export const fetchStore = (id) => dispatch => {
  return APIUtil.fetchStore(id)
    .then((store) => dispatch(receiveStore(store)))
};
export const createStore = (store) => dispatch => {
  return APIUtil.createStore(store)
    .then((store) => dispatch(receiveStore(store)))
};
export const updateStore = (store) => dispatch => {
  return APIUtil.updateStore(store)
    .then((store) => dispatch(receiveStore(store)
    ,(errors) => dispatch(receiveStoreErrors(errors.responseJSON))) )
};









