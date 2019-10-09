import * as APIUtil from "../util/users_api_util";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
import { receiveCurrentUser } from "../actions/session_actions";

export const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
};

export const fetchAllUsers = () => dispatch => {
    return APIUtil.fetchAllUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
}
export const updateUser = (user) => dispatch => {
    return APIUtil.updateUser(user)
        .then((user) => dispatch(receiveCurrentUser(user)))
}