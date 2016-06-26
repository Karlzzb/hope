import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actions/Action-Creators';
import GoodsList from '../components/GoodsList';
import Topbar from '../components/Topbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Sidebar from 'react-sidebar';
import {Map} from 'immutable';

class BestSellerShow extends Component {
  constructor(props) {
    super(props);
	this.state = {topBarProps:Map({sidebarOpen: false, isBestLoaded: 'disabled', isRecommendLoaded: 'false', isTypesLoaded: 'false' })};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  loadBest() {
      
  }
  
  loadRecommend() {
      
  }
  
  loadTypes() {
      
  }
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }
    
  render() {
      const { goodsArray } = this.props;
	  var sidebarContent = <b>Sidebar content</b>;
      return (
        <div className="main">
		<Topbar onLoadBest={this.loadBest} onLoadRecommend={this.loadRecommend} onLoadTypes={this.loadTypes} topBarProps={this.state.topBarProps} />
        <GoodsList showGoods={goodsArray} />
        </div>
      )
  }
}

function mapStateToProps(state, props) {
	let goods = state.goodsShow.get('entities').goods;
    
    const goodsArray = state.goodsShow.get('ids').map(id => goods[id]);
    return {
        goodsArray: goodsArray
    }
}

export default connect(
    mapStateToProps
)(BestSellerShow)

BestSellerShow.propTypes = {
    goodsArray: ImmutablePropTypes.list.isRequired
}
