/**
 * Created by yvan on 16/7/8.
 */

export const appAN  = {
	OPEN_MENU : "app/OPEN_MENU",
};

const appAct = {
	// 设置是否打开菜单栏
	openMenu : value => ({
		type : appAN.OPEN_MENU,
		value
	})
};

export default appAct;