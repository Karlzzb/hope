import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ActionCreators from '../actions/Action-Creators';
import GoodsList from '../components/GoodsList';
import Topbar from '../components/Topbar';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Sidebar from 'react-sidebar';
import {Map} from 'immutable';
import MaterialTitlePanel from '../components/material_title_panel';
import SidebarContent from '../components/sidebar_content';

class BestSellerShow extends Component {
  constructor(props) {
    super(props);
	this.state = {topBarProps:Map({isBestLoaded: 'disabled', isRecommendLoaded: 'false', isTypesLoaded: 'false' }), sideBarProps: Map({sidebarOpen: false})};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  
  componentWillMount() {
    var mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  
  loadBest() {
      
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
		
		<div className="sidebar">
        <Sidebar sidebar={sidebarContent}
               open={this.state.sideBarProps.get('sidebarOpen')}
               onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
		        <button onClick={this.onSetSidebarOpen} >
          <h1>menu</h1>
        </button>
        </Sidebar>
		</div>
		


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
