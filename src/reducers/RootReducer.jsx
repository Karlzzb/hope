import {Map,List,fromJS} from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { normalize, arrayOf } from 'normalizr-immutable';
import { SHOW_GOODS, showGoods } from '../actions/Action-Creators';
import { schemas } from './Schema';

const defaultState = Map({});
function goodsShow(state = defaultState, action) {
  switch (action.type) {
      case SHOW_GOODS:
          var normalizedGoods = normalize(action.goodsList,arrayOf(schemas.goods),{});
		  console.log('action :', action.goodsList)
          console.log('normalizedGoods analyse:',normalizedGoods.toString());
          //USE PLAIN JS OBJECT
          //var nextState =  Object.assign({}, state,{entities: normalizedGoods.entities, ids: normalizedGoods.result.all_goods});
          //USE IMMUTABLE
          var nextState = state.merge({entities: normalizedGoods.entities, ids: normalizedGoods.result});

          return nextState;
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
