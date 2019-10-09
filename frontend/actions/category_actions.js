import * as APIUtil from "../util/categories_api_util";

export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveAllCategories = (categories) => {
  return {
    type: RECEIVE_ALL_CATEGORIES,
    categories
  };
};
const receiveCategory = category => {
  return {
    type: RECEIVE_CATEGORY,
    category
  };
};

export const fetchCategories = () => dispatch => {
  return APIUtil.fetchCategories().then(categories =>
    dispatch(receiveAllCategories(categories))
  );
};
export const fetchCategory = (id) => dispatch => {
  return APIUtil.fetchCategory(id).then(category => dispatch(receiveCategory(category)));
};
