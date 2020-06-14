
import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './modules';

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware
    )
  )
);