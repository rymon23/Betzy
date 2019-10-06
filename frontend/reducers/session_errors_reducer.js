import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";
import { DISABLE_MODAL } from "../actions/modal_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case DISABLE_MODAL:
      return []
    default:
      return state;
  }
};
