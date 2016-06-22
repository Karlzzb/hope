import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actions/Action-Creators';
import GoodsList from '../components/GoodsList';
import Topbar from '../components/Topbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class BestSellerShow extends Component {
  constructor(props) {
    super(props);
    this.props.isBestLoaded = 'disabled';
    this.props.isRecommendLoaded = 'false';
    this.props.isTypesLoaded = 'false';
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  loadBest() {
      
  }
  
  loadRecommend() {
      
  }
  
  loadTypes() {
      
  }
    
  render() {
      const { goodsArray } = this.props
      return (
        <div className="main">
          <Topbar onLoadBest={this.loadBest} onLoadRecommend={this.loadRecommend} onLoadTypes={this.loadTypes} {...this.props} />
        <GoodsList showGoods={goodsArray} />
        </div>
      )
  }
}

function mapStateToProps(state, props) {
    const {goodsShow: {entities: { goods }, ids}} = state;
	
	console.log('analyze: ', state.goodsShow[0]);
    
    const goodsArray = ids.map(id => goods[id]);
    return {
        goodsArray: goodsArray
    }
}

export default connect(
    mapStateToProps
)(BestSellerShow)

BestSellerShow.propTypes = {
    goodsArray: PropTypes.array.isRequired
}
