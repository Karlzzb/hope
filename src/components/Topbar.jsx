import React, { Component, PropTypes } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
        <div className="topbar">
        <button onClick={this.props.onLoadBest} disabled={this.props.topBarProps.get('isBestLoaded')}>
          <h1>Best</h1>
        </button>
        <button onClick={this.props.onLoadRecommend} disabled={this.props.topBarProps.get('isRecommendLoaded')}>
          <h1>Recommend</h1>
        </button>
        <button onClick={this.props.onLoadTypes} disabled={this.props.topBarProps.get('sTypesLoaded')}>
          <h1>classfication</h1>
        </button>
        </div>
        )
  }
}

TopBar.propTypes = {
    onLoadBest: PropTypes.func.isRequired,
    onLoadRecommend: PropTypes.func.isRequired,
    onLoadTypes: PropTypes.func.isRequired,
	topBarProps: ImmutablePropTypes.contains({
      isBestLoaded: PropTypes.string.isRequired,
      isRecommendLoaded: PropTypes.string.isRequired,
      isTypesLoaded: PropTypes.string.isRequired	}).isRequired
}
