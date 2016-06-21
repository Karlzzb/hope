import React from 'react'
import { Route } from 'react-router'
import BestSeller from './containers/BestSellerShow'
import Recommend from './containers/RecommendShow'

export default (
  <Route path="/" component={RecommendShow}>
    <Route path="/recommend" component={Recommend}/>
    <Route path="/bestSellerShow" component={BestSeller}/>
  </Route>
)
