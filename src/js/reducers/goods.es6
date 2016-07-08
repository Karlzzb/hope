/**
 * Created by yvan on 16/7/8.
 */
import { goodsAN } from './../actions/goods';

const initGoodsState = {
	openTab : "Recommend"
};

/**
 * 商品的状态机设定
 * @param state
 * @param action
 * @returns {*}
 */
const goodsState = ( state = initGoodsState, action ) => {
	switch (action.type) {
		case goodsAN.CHANGE_TAB :
			return Object.assign({}, state, {
				openTab : action.value
			});

		default:
			return state;
	}
};

export default goodsState;