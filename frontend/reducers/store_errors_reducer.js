import {
    RECEIVE_STORE_ERRORS,
    RECEIVE_STORE
} from "../actions/store_actions";

const storeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_STORE_ERRORS:
            return action.errors;

        case RECEIVE_STORE:
            return [];

        default:
            return state;
    }
};

export default storeErrorsReducer;