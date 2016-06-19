import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/Action-Creators'
import ItemList from '../components/ItemList';

class ItemShow extends Component {
  render() {
	  const { goodList } = this.props
	  console.log('goods in contern:',goodList);
	  return (
		 <ItemList goods={goodList} />
	  )
  }
}

function mapStateToProps(state, props) {
	const {entities: { goods }, ids} = state;
	
	const goodList = ids.map(id => goods[id]);
	return {
		goodList: goodList
	}
}
export default connect(
	mapStateToProps
)(ItemShow)

