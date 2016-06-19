import React, { Component, PropTypes } from 'react'

export default class Item extends Component {

  render() {
    const { goods } = this.props;
    const { goods_id, name, description, mainImg, price } = goods;
      console.log('single goods goods[0]: ', goods);

    return (
      <div className="item">
        <h3>
        {name}
        </h3>
		{<img src={mainImg} alt="Smiley face" height="120" width="120"/>}
		<h3>{price}</h3>
        {description &&
          <p>{description}</p>		  
        }	
      </div>
    )
  }
}

Item.propTypes = {
	goods_id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
	mainImg: PropTypes.string,
	price: PropTypes.string
}
