import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });

  middleware.push(logger);
}

const rootReducer = combineReducers({
  ...reducers,
});

export default createStore(rootReducer, applyMiddleware(...middleware));

// Redux DevTools config
/* const composeEnhancers = __DEV__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
); */
