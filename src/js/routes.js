import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, BestSeller, GoodsList } from './containers/index'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={GoodsList}/>
		<Route path="/goodsList" component={GoodsList}/>
		<Route path="/bestSellerShow" component={BestSeller}/>
	</Route>
)
