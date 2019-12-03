import * as APIUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';

export const receiveSearchResults = (searchResults) => {    
    return {
        type: RECEIVE_SEARCH_RESULTS,
        searchResults
    }
};

export const fetchSearchResults = (searchQuery) => (dispatch) => {
    return APIUtil.fetchSearchResults(searchQuery).then(response => (
        dispatch(receiveSearchResults(response))
    ));
};