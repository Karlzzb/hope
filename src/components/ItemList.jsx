import React, { Component, PropTypes } from 'react'
import Item from './Item'

export default class ItemList extends Component {
  getShowGoods() {
    return this.props.goods.map(this.renderGoods) || [];
  }
  
  renderGoods(goods) {
    return (<Item goods={goods}/>)
  }
  
  render() {
    return(
	<div>
		<button onClick={this.props.onLoadBestItems}>
		  <h1>Best</h1>
		</button>
		<button onClick={this.props.onLoadRecommend}>
		  <h1>Recommend</h1>
		</button>
		<button onClick={this.props.onLoadClassfication}>
		  <h1>classfication</h1>
		</button>
		{this.getShowGoods()}
	</div>
	)
  }
}