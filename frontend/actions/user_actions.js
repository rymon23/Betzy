import * as APIUtil from "../util/user_api_util";
export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = (id) => ({
    type: RECEIVE_USER,
    cartData
});

export const fetchUser = (id) => dispatch => {
    return APIUtil.fetchUser(id).then((cartData) => dispatch(receiveUser(cartData)))
}
