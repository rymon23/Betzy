import { 
  RECEIVE_ALL_PRODUCTS,
  RECEIVE_PRODUCT,
  REMOVE_PRODUCT  
} from "../actions/product_actions";

const productsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      return Object.assign({}, action.products);
    case RECEIVE_PRODUCT:
      return Object.assign({}, state, { [action.product.id]: action.product });
    case REMOVE_PRODUCT:
      const newState = Object.assign({}, state);
      delete newState[action.productId];
      return newState;
    default:
      return state;
  }
};

export default productsReducer;