import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { sagaFetch } from './sagas'
//import sagaMonitor from './sagas/monitor';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

//执行saga
store.runSaga(sagaFetch);

//加入热替换
if (module.hot) {
	module.hot.accept();
}
    
render(
 <Root store={store} history={history} />,
  document.getElementById('root')
);

