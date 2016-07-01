import {Map,List,Record, fromJS} from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { SHOW_GOODS,BEST_SELLER,GOODS_SUCCESS } from '../actions/Action-Creators';
import merge from 'lodash/merge';


const defaultState = fromJS({});
function bestSeller(state = defaultState, action) {
  switch (action.type) {
      case BEST_SELLER:
	      if (action.bestSeller && action.bestSeller.get('entities') && action.bestSeller.get('goodsIds').size > 0) {
			  return state.merge(action.bestSeller);
		  }
	  case GOODS_SUCCESS: 
	      if (action.bestSeller && action.bestSeller.get('entities') && action.bestSeller.get('goodsIds').size > 0) {
			  return state.merge(action.bestSeller);
		  }	  
    default:
      return state;      
  }
  return state;
}

const rootReducer = combineReducers({
    bestSeller,
    routing
})

export default rootReducer
