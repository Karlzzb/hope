import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root.dev';
import configureStore from './store/configureStore.dev'
import { showGoods } from './actions/Action-Creators';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'




const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)
    
render(
 <Root store={store} history={history} />,
  document.getElementById('root')
)

