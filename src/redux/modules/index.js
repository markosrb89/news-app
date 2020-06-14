import { combineReducers } from 'redux';

import errors from './errors';
import news from './news';

export default combineReducers({
  errors,
  news
});