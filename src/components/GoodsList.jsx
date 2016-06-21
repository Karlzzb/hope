import React, { Component, PropTypes } from 'react'

export default class GoodsList extends Component {
  getShowGoods() {
    return this.props.showGoods.map(this.renderGoods) || [];
  }
  
  renderGoods(goods) {
    let { goods_id, name, description, mainImg, price } = goods;
    return (      
        <div className="goodsTable">
        <h3>
        {name}
        </h3>
        {<img src={mainImg} alt="Smiley face" height="120" width="120"/>}
        <h3>{price}</h3>
        {description && <p>{description}</p>}    
        </div>
    )
  }
  
  render() {
    return(       
       <div calssName="goodList">
       {this.props.getShowGoods()}
       </div>
    )
  }
}

GoodsList.propTypes = {
    showGoods: PropTypes.array.isRequired
}
    