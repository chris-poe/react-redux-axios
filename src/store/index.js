import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import common from './reducers/common';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => action.type !== 'SET_LOCATION',
  });

  middleware.push(logger);
}

const rootReducer = combineReducers({
  common,
});

export default createStore(rootReducer, applyMiddleware(...middleware));
