import {Map,List,Record, fromJS} from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { SHOW_GOODS } from '../actions/Action-Creators';
import merge from 'lodash/merge';


const defaultState = fromJS({});
function goodsShow(state = defaultState, action) {
  switch (action.type) {
      case SHOW_GOODS:
	      if (action.goodsShow && action.goodsShow.entities) {
			  return state.merge(action.goodsShow);
		  }
    default:
      return state;      
  }
  return state;
}

const rootReducer = combineReducers({
    goodsShow,
    routing
})

export default rootReducer
