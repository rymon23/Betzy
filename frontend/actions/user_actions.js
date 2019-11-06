import * as APIUtil from "../util/users_api_util";
import { receiveCurrentUser } from "../actions/session_actions";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';

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
export const updateUser = (formData) => dispatch => {
    return APIUtil.updateUser(formData)
        .then((user) => dispatch(receiveCurrentUser(user)))
}