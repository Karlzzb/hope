export const INIT_ITEMLIST = 'INIT_ITEMLIST';
import { schemas } from '../reducers/Schema';
import { normalize, arrayOf } from 'normalizr-immutable';
import {Map} from 'immutable';
import { CALL_API } from '../middleware/api'

/*
 * action types
 */

export const SHOW_GOODS = 'SHOW_GOODS';
export const BEST_SELLER = 'BEST_SELLER';


const defaultGoodsList = [
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

//Best Seller Show
export function loadBestSeller(goodsData = defaultGoodsList) {
  let actionData = normalize(goodsData,arrayOf(schemas.goods),{});	
  return {
    type: BEST_SELLER,
	bestSeller: Map({entities: actionData.entities, goodsIds: actionData.result})
  }
}

//Async Action
export const GOODS_REQUEST = 'GOODS_REQUEST'
export const GOODS_SUCCESS = 'GOODS_SUCCESS'
export const GOODS_FAILURE = 'GOODS_FAILURE'

function fetchGoods() {
  return {
    [CALL_API]: {
      types: [ GOODS_REQUEST, GOODS_SUCCESS, GOODS_FAILURE ],
      schema: schemas.goods
    }
  }
}

export function loadGoods() {
  return (dispatch, getState) => {

    return dispatch(fetchGoods())
  }
}

