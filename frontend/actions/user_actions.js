import * as APIUtil from "../util/users_api_util";
export const RECEIVE_USER = "RECEIVE_USER";
import { receiveCurrentUser } from "../actions/session_actions";

export const receiveAllUsers = (users) => ({
    type: RECEIVE_USER,
    users
});
export const fetchAllUsers = () => dispatch => {
    return APIUtil.fetchAllUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
}
export const updateUser = (user) => dispatch => {
    return APIUtil.updateUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
}
