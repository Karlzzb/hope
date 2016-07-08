/**
 * Created by yvan on 16/7/8.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import bestSeller from './bestSeller';
import appState from './app';
import goodsState from './goods';

const rootReducer = combineReducers({
	bestSeller,
	routing,
	appState,
	goodsState
});

export default rootReducer
