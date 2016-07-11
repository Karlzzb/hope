/**
 * Created by yvan on 16/7/8.
 */
import React, {Component,PropTypes} from 'react'
//import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Tabs, Tab } from './../components'

import ActionGrade from 'material-ui/svg-icons/action/grade'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionViewModule from 'material-ui/svg-icons/action/view-module'

//导入action
import { goodsAct, fetchData } from './../actions'
import { appAN } from './../actions/app'

class CoodsList extends Component {

	componentWillMount() {
		const {dispatch} = this.props;
		dispatch(fetchData({
			url : "https://api.github.com/users/mralexgray/repos",
			successAction : appAN.SET_TEST
		}));
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
						<div>
							<button onClick={()=>dispatch(fetchData({
								url : "http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000357-001",
								successAction : appAN.SET_TEST
							}))}>请求失败DEMO</button>

							<button onClick={()=>dispatch(fetchData({
								url : "https://api.github.com/users/mralexgray/repos",
								successAction : appAN.SET_TEST,
								showInfo : true
							}))}>请求成功DEMO</button>
						</div>
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

//let mapDispatchToProps = dispatch => ({
//	fetchData: bindActionCreators(fetchData, dispatch)
//});

export default connect(mapStateToProps)(CoodsList);