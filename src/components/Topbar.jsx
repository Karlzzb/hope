import React, { Component, PropTypes } from 'react'

export default class TopBar extends Component {
  constructor(props) {
    super(props);
    this.onLoadBest = this.onLoadRecommend.bind(this);
    this.onLoadRecommend = this.onLoadRecommend.bind(this);
    this.onLoadTypes = this.onLoadRecommend.bind(this);
  }
  
  render() {
    return(
        <div className="topbar">
        <button onClick={this.props.onLoadBest} disabled={this.props.isBestLoaded}>
          <h1>Best</h1>
        </button>
        <button onClick={this.props.onLoadRecommend} disabled={this.props.isRecommendLoaded}>
          <h1>Recommend</h1>
        </button>
        <button onClick={this.props.onLoadTypes} disabled={this.props.isTypesLoaded}>
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
    isBestLoaded: PropTypes.string.isRequired,
    isRecommendLoaded: PropTypes.string.isRequired,
    isTypesLoaded: PropTypes.string.isRequired
}
