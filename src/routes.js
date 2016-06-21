import React from 'react'
import { Route } from 'react-router'
import BestSeller from './containers/BestSellerShow'

export default (
  <Route path="/" component={BestSeller}>
    <Route path="/bestSellerShow" component={BestSeller}/>
  </Route>
)
