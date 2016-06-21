import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root';
import configureStore from './store/configureStore'
import { showGoods } from './actions/Action-Creators';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'


const itemList = [
    {goods_id:1, 
    goods_name:"手表1", 
    description:"my production is ……", 
    goods_front_img:"https://contestimg.wish.com/api/webimage/567a0b1f86d12651dea2850c-0-feed",
    class_ids:[],
    goods_prices:"$ 100",
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
    goods_name:"手表2", 
    description:"my production is ……", 
    goods_front_img:"https://contestimg.wish.com/api/webimage/5703423461d6cf63b39e9329-0-feed",
    class_ids:[],
    goods_prices:"$ 200",
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
];

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

store.dispatch(showGoods(itemList));
    
render(
 <Root store={store} history={history} />,
  document.getElementById('root')
)

