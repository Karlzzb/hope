/**
 * Created by yvan on 16/7/11.
 */

import { fetchAN } from './../actions/fetch'

const fetchState = (state = {
	data: null,
	error: '',
	isFetching: false,
	isFailed: false
}, action) => {
	switch (action.type) {
		case fetchAN.FETCH_SUCCEED:
			return Object.assign({}, state, {
				data: action.data,
				error: '',
				isFetching: false,
				isFailed: false
			});
		case fetchAN.FETCH_FAILED:
			return Object.assign({}, state, {
				data: action.data,
				error: action.error,
				isFetching: false,
				isFailed: true
			});
		case fetchAN.FETCH_REQUEST:
			return Object.assign({}, state, {
				data: null,
				error: '',
				isFetching: true,
				isFailed: false
			});

		default:
			return state
	}
}

export default fetchState;