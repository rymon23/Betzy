import {
    RECEIVE_ALL_KEYWORDS,
    RECEIVE_KEYWORD
} from "../actions/keyword_actions";

const keywordsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_KEYWORDS:
            return Object.assign({}, action.keywords);

        case RECEIVE_KEYWORD:
            return Object.assign({}, state, { [action.keyword.id]: action.keyword });

        default:
            return state;
    }
};

export default keywordsReducer;
