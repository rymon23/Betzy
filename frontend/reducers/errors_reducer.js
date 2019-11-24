import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import store from "./product_errors_reducer";
import product from "./store_errors_reducer";

export default combineReducers({
  session,
  store,
  product,
});
 