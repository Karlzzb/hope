import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/RootReducer';
import DevTools from '../containers/DevTools';
import api from '../middleware/api'

export default function configureStore(preloadedState = {}) {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, api, createLogger()),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/RootReducer', () => {
      const nextRootReducer = require('../reducers/RootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
