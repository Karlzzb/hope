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
import { Header } from './../components';

//导入action

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
	//const { children } = this.props;
	render() {
		return(
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<Header
						title="TEST"
						//openMenu={()=>dispatch(menuAction.openMenu(true))}
						position="fixed"
					/>

				</div>
			</MuiThemeProvider>
		)
	}
}

let mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Main);;