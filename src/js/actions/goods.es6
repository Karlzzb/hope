/**
 * Created by yvan on 16/7/8.
 */

export const goodsAN  = {
	CHANGE_TAB : "goods/CHANGE_TAB",
};

const goodsAct = {
	// 切换tab
	changeTab : value => ({
		type : goodsAN.CHANGE_TAB,
		value
	})
};

export default goodsAct;