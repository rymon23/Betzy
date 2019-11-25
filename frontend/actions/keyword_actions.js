import * as APIUtil from "../util/keywords_api_util";

export const RECEIVE_ALL_KEYWORDS = "RECEIVE_ALL_KEYWORDS";
export const RECEIVE_KEYWORD = "RECEIVE_KEYWORD";

const receiveAllKeywords = (keywords) => {
    return {
        type: RECEIVE_ALL_KEYWORDS,
        keywords
    };
};
const receiveKeyword = (keyword) => {
    return {
        type: RECEIVE_KEYWORD,
        keyword
    };
};

export const fetchKeywords = () => (dispatch) => {
    return APIUtil.fetchKeywords()
        .then((keywords) => dispatch(receiveAllKeywords(keywords))
    );
};
export const fetchKeyword = (id) => (dispatch) => {
    return APIUtil.fetchKeyword(id)
        .then((keyword) => dispatch(receiveKeyword(keyword)));
};
