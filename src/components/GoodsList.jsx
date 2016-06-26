import React, { Component, PropTypes } from 'react'

export default class GoodsList extends Component {
  getShowGoods() {
	console.log(this.props.showGoods);
    return this.props.showGoods.map(this.renderGoods) || [];
  }
  
  renderGoods(goods) {
    let { goods_id, goods_name, description, goods_front_img, price } = goods;
    return (      
        <div className="goodsTable">
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
    return(       
       <div calssName="goodList">
       {this.getShowGoods()}
       </div>
    )
  }
}

GoodsList.propTypes = {
    showGoods: PropTypes.array.isRequired
}
    