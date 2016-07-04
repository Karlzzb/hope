import { normalize, arrayOf } from 'normalizr-immutable';
import {loadBestSeller} from '../actions/Action-Creators';
import {Map} from 'immutable';

function callFetchGoods() {
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
	return {goodsData:defaultGoodsList, error: ''}
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

// A Redux middleware that interprets actions with CALL_API info specified.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }
  
  const { schema, types } = callAPI
  
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
  
  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }  
  
  const [ requestType, successType, failureType ] = types;
  next(actionWith({ type: requestType }))
  
  const {goodsData, error} = callFetchGoods();
  
  let actionData = normalize(goodsData,arrayOf(schema),{});
  
  return next(actionWith({
    type: successType,
	bestSeller: Map({entities: actionData.entities, goodsIds: actionData.result})}));

}
