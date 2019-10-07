import { combineReducers } from 'redux';

import users from './users_reducer';
import products from './products_reducer';
import stores from './stores_reducer';
import categories from './categories_reducer';

export default combineReducers({
  users,
  stores,
  products,
  categories
});