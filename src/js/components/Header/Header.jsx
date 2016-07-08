/**
 * Created by yvan on 16/5/31.
 */
import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

export default class Header extends Component {

	static propTypes = {
		title : PropTypes.string.isRequired,
		openMenu : PropTypes.func
	};

	static defaultProps = {
	};

	render() {
		return (
			<AppBar
				title={this.props.title}
				onLeftIconButtonTouchTap={this.props.openMenu}
				iconElementRight={<IconButton><FavoriteBorder /></IconButton>}
				style={{textAlign: "center"}}
			/>
		);
	}
}