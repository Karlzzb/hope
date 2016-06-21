import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/Action-Creators'
import GoodsList from '../components/GoodsList';

class BestSellerShow extends Component {
  render() {
	  const { goodList } = this.props
	  return (
		 <GoodsList allGoods={goodsArray} />
	  )
  }
}

function mapStateToProps(state, props) {
	const {entities: { goods }, ids} = state;
	
	const goodsArray = ids.map(id => goods[id]);
	return {
		goodsArray: goodsArray
	}
}

export default connect(
	mapStateToProps
)(BestSellerShow)

