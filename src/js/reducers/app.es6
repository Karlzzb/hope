/**
 * Created by yvan on 16/7/8.
 */
import { appAN } from './../actions/app';

const initAppState = {
	menu : {
		show : false
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

		default:
			return state;
	}
};

export default appState;