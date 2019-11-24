import * as APIUtil from "../util/products_api_util";

export const RECEIVE_FILTER_RESULTS = "RECEIVE_FILTER_RESULTS";

export const receiveFilterResults = (filter, value) => ({
  type: RECEIVE_FILTER_RESULTS,
  filter,
  value
});

export const fetchFilterResults = (filter) => (dispatch) => {
  return APIUtil.fetchFilterResults(filter)
    .then((results) => dispatch(receiveFilterResults(results)))
};