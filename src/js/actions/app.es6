/**
 * Created by yvan on 16/7/8.
 */

export const appAN  = {
	OPEN_MENU : "app/OPEN_MENU",
	SET_TEST : "app/SET_TEST",
	SET_INFO : "app/SET_INFO",
	CLOSE_INFO : "app/CLOSE_INFO"
};

const appAct = {
	// 设置是否打开菜单栏
	openMenu : value => ({
		type : appAN.OPEN_MENU,
		value
	}),
	// 关闭提示框信息
	closeInfo : () => ({
		type : appAN.CLOSE_INFO
	})
};

export default appAct;