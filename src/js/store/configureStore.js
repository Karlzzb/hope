import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/RootReducer';
import api from '../middleware/api'


/**
 * 所有中间件
 */
let middleware = applyMiddleware(thunk, api, createLogger());

/**
 * 所有reducer
 */
//let rootReducer = combineReducers({
//  requestState,
//  workState,
//  userState, //用户数据
//  appState, //app公用数据
//  routing: routerReducer
//});

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

