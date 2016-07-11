/**
 * Created by yvan on 16/7/7.
 */

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//导入组件
import { Header, Menu, Loading, Info } from './../components';

//导入action
import { appAct } from './../actions';

//导入样式
import './../../style/main.scss';

const muiTheme = getMuiTheme({
	palette: {
		textColor: cyan500
	},
	appBar: {
		height: 50,
		position: "fixed"
	}
});

class Main extends Component {
	render() {
		const { menu, dispatch, children, fetch, appInfo } = this.props;
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Header
						title="TEST"
						openMenu={()=>dispatch(appAct.openMenu(true))}
					/>
					<Menu
					show={ menu.show }
					close={()=>dispatch(appAct.openMenu(false))}
					/>
					{ children }
					<Loading show={fetch.isFetching} />
					<Info
						show={appInfo.show}
						msg={appInfo.msg}
						infoType={appInfo.style}
						closeInfo={()=>dispatch(appAct.closeInfo())}
					/>
				</div>
			</MuiThemeProvider>
		)
	}
}

let mapStateToProps = state => ({
	menu : state.appState.menu,
	fetch : state.fetchState,
	appInfo : state.appState.info
});

export default connect(mapStateToProps)(Main);