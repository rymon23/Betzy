import * as APIUtil from "../util/user_api_util";
export const RECEIVE_USER = "RECEIVE_USER";
import { receiveCurrentUser } from "../actions/session_actions";

export const receiveUser = (id) => ({
    type: RECEIVE_USER,
    cartData
});

export const fetchUser = (id) => dispatch => {
    return APIUtil.fetchUser(id).then((cartData) => dispatch(receiveUser(cartData)))
}

// export const updateUser = (user) => dispatch => {
//     return APIUtil.fetchUser(id).then((cartData) => dispatch(receiveCurrentUser(cartData)))
// }
