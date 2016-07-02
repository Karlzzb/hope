import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class GoodsList extends Component {
  getShowGoods() {
    return this.props.showGoods.map(this.renderGoods) || [];
  }
  
  renderGoods(goods) {
    let { goods_id, goods_name, description, goods_front_img, price } = goods;
    return (      
        <div className="goodsTable" key={goods_id}>
        <h3>
        {goods_name}
        </h3>
        {<img src={goods_front_img} alt="Smiley face" height="120" width="120"/>}
        <h3>{price}</h3>
        {description && <p>{description}</p>}    
        </div>
    )
  }
  
  render() {
	const { isFetching } = this.props;
	  
    return(       
       <div calssName="goodList">
	   {isFetching ? 'Loading...' : 'newest'}
       {this.getShowGoods()}
       </div>
    )
  }
}

GoodsList.propTypes = {
    showGoods: ImmutablePropTypes.list.isRequired,
	isFetching: PropTypes.bool.isRequired
}
    