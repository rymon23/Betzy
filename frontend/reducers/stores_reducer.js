import { 
  RECEIVE_ALL_STORES,
  RECEIVE_STORE
     } from "../actions/store_actions";
     
const storeReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_STORES:
      return Object.assign({}, action.stores);

    case RECEIVE_STORE:
      return Object.assign({}, state, { [action.store.id]: action.store });
      
    default:
      return state;
  }
};

export default storeReducer;