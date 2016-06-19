import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import ActionCreators from '../actions/Action-Creators'
import ItemList from '../components/ItemList';

class ItemShow extends Component {
  render() {
	  const { goods } = this.props
	  return (
		 <ItemList goods={goods} />
	  )
  }
}

function mapStateToProps(state, props) {
	return {
		goods: state.goods
	}
}
export default connect(
	mapStateToProps
)(ItemShow)

