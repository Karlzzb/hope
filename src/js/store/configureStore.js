import { createStore, applyMiddleware, compose } from 'redux'
//import createLogger from 'redux-logger'
import rootReducer from '../reducers'
//import api from '../middleware/api';
import createSagaMiddleware, { END } from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

/**
 * 所有中间件
 */
let middleware = applyMiddleware(sagaMiddleware);

//debug
if (module.hot) {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension()/*, applyMiddleware(createLogger())*/)
  }
}

export default function configureStore(preloadedState = {}) {
  const store = createStore(
      rootReducer,
      preloadedState,
      middleware
  );
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store
}

