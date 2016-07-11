/**
 * Created by yvan on 16/7/8.
 */
import { appAN } from './../actions/app';

const initAppState = {
	menu : {
		show : false
	},
	info : {
		show : false,
		msg  : "",
		style : ""
	}
};

/**
 * 整个应用的状态机设定
 * @param state
 * @param action
 * @returns {*}
 */
const appState = ( state = initAppState, action ) => {
	switch (action.type) {
		case appAN.OPEN_MENU :
			return Object.assign({}, state, {
				menu : {
					show : action.value
				}
			});
		case appAN.SET_TEST :
			return Object.assign({}, state, {
				test : action.data
			});
		case appAN.SET_INFO :
			return Object.assign({}, state, {
				info : {
					show : action.value,
					msg  : action.msg,
					style : action.style || "success"
				}
			});
		case appAN.CLOSE_INFO :
			return Object.assign({}, state, {
				info : {
					show : false,
					msg  : "",
					style : ""
				}
			});
		default:
			return state;
	}
};

export default appState;