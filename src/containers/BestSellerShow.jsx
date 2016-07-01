import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {loadGoods} from '../actions/Action-Creators';
import GoodsList from '../components/GoodsList';
import Topbar from '../components/Topbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {Map, List} from 'immutable';

class BestSellerShow extends Component {
  constructor(props) {
    super(props);
	this.state = {topBarProps:Map({isBestLoaded: false, isRecommendLoaded: false, isTypesLoaded: false })};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	this.loadBest = this.loadBest.bind(this);
  }
  
  loadBest() {
	 this.props.loadGoods(); 
  }
  
  loadRecommend() {
      
  }
  
  loadTypes() {
      
  }
  onSetSidebarOpen(open) {
    this.setState({sideBarProps: Map({sidebarOpen: open})});
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
	if(!state.bestSeller || !state.bestSeller.get('entities') || state.bestSeller.get('goodsIds').size < 1) {
		return {goodsArray: List()}
	}
		
	let goods = state.bestSeller.get('entities').goods;
    
    const goodsArray = state.bestSeller.get('goodsIds').map(id => goods[id]);
    return {
        goodsArray: goodsArray
    }
}

export default connect(
    mapStateToProps,
	{loadGoods}
)(BestSellerShow)

BestSellerShow.propTypes = {
    goodsArray: ImmutablePropTypes.list.isRequired,
	loadGoods: PropTypes.func.isRequired
}
