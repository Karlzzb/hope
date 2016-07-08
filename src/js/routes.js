import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { Main, BestSeller, GoodsList } from './containers/index'

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={GoodsList}/>
		<Route path="/goodsList" component={GoodsList}/>
		<Route path="/bestSellerShow" component={BestSeller}/>
	</Route>
)
