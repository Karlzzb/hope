import {Map,List,fromJS} from 'immutable';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { normalize, arrayOf } from 'normalizr';
import { SHOW_GOODS, showGoods } from '../actions/Action-Creators';
import { allGoodsSchema } from './Schema';

const defaultState = Map({});
function goodsShow(state = defaultState, action) {
  switch (action.type) {
      case SHOW_GOODS:
          var normalizedGoods = normalize(action.goodsList,allGoodsSchema);
          console.log('normalizedGoods analyse:',normalizedGoods);
          //var nextState = state.mergeDeep(state, normalizedGoods.entities);
          var nextState =  Object.assign({}, state,normalizedGoods.entities);

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

export default goodsShow