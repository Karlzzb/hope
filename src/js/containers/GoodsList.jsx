/**
 * Created by yvan on 16/7/8.
 */
import React, {Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from './../components';

import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionViewModule from 'material-ui/svg-icons/action/view-module';

//导入action
import { goodsAct } from './../actions';

class CoodsList extends Component {

	changeTab() {

	}

	render() {
		const { openTab, dispatch } = this.props;
		return (
			<Tabs
				value={openTab}
				onChange={v=>dispatch(goodsAct.changeTab(v))}
			>
				<Tab label="Best" value="Best" icon={<ActionThumbUp />} >
					<div>
						<h2 >Controllable Tab A</h2>
						<p>
							3
						</p>
					</div>
				</Tab>
				<Tab label="Recommend" value="Recommend" icon={<ActionGrade />}>
					<div>
						<h2 >Controllable Tab B</h2>
						<p>
							2
						</p>
					</div>
				</Tab>
				<Tab label="Classification" value="Classification" icon={<ActionViewModule />}>
					<div>
						<h2 >Controllable Tab C</h2>
						<p>
							1
						</p>
					</div>
				</Tab>
			</Tabs>
		)
	}
}


let mapStateToProps = state => ({
	openTab : state.goodsState.openTab
});

export default connect(mapStateToProps)(CoodsList);