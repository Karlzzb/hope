/**
 * Created by yvan on 16/7/8.
 */
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import bestSeller from './bestSeller';
import appState from './app';
import goodsState from './goods';
import fetchState from './fetch';

const rootReducer = combineReducers({
	//bestSeller,
	routing,
	appState,
	goodsState,
	fetchState
});

export default rootReducer
