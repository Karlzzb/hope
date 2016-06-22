import {Map,List,Record} from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { SHOW_GOODS } from '../actions/Action-Creators';
import merge from 'lodash/merge'


const defaultState = Map({goodsShow: {entities: new Record(), ids: new List()}});
function goodsShow(state = defaultState, action) {
  switch (action.type) {
      case SHOW_GOODS:
	      if (action.goodsShow && action.goodsShow.entities) {
			  console.log("merge: ", state.merge(action));
			  return state.merge(action);
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
