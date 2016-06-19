import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './containers/ItemShow'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/RootReducer'
import {logger, crashReporter} from './middleware/logger'
import { Schema, arrayOf, normalize } from 'normalizr'
import { Provider } from 'react-redux';
import { SHOW_GOODS, showGoods } from './actions/Action-Creators';

const itemList = {all_goods:[
    {goods_id:1, 
	name:"手表1", 
	description:"my production is ……", 
	mainImg:"https://contestimg.wish.com/api/webimage/567a0b1f86d12651dea2850c-0-feed",
	class_ids:[],
	price:"$ 100",
	owner:{
		owner_id:1,
		owner_name:'白痴'
	},
	comments:[
	  {
		  comment_id:352,
		  content:'ce',
		  rating: 5
	  
	  },
	  {
		  comment_id:353,
		  content:'12',
		  rating: 5
	  
	  },	  
	]
	},
	
	{goods_id:2, 
	name:"手表2", 
	description:"my production is ……", 
	mainImg:"https://contestimg.wish.com/api/webimage/5703423461d6cf63b39e9329-0-feed",
	class_ids:[],
	price:"$ 200",
	owner:{
		owner_id:2,
		owner_name:'白痴2'
	},
	comments:[
	  {
		  comment_id:3511,
		  content:'ce',
		  rating: 5
	  
	  },
	  {
		  comment_id:3522,
		  content:'12',
		  rating: 5
	  
	  },	  
	]	
	}
]};
let store = createStore(rootReducer, applyMiddleware(logger, crashReporter));

store.dispatch(showGoods(itemList));
	
render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)

