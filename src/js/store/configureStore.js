import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import api from '../middleware/api';
import { sagaMiddleware } from './../sagas';

/**
 * 所有中间件
 */
let middleware = applyMiddleware(thunk, api, createLogger(), sagaMiddleware);

//debug
if (module.hot) {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension())
  }
}

export default function configureStore(preloadedState = {}) {
  const store = createStore(
      rootReducer,
      preloadedState,
      middleware
  );

  return store
}

