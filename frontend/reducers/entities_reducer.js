import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import stores from './stores_reducer';
import categories from './categories_reducer';
import reviews from './reviews_reducer';
import lineItems from './line_items_reducer';
import keywords from './keywords_reducer';
import searchResults from './search_reducer';

export default combineReducers({
  users,
  stores,
  categories,
  products,
  reviews,
  lineItems,
  keywords,
  searchResults
});