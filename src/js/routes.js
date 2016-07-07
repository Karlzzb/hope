import React from 'react'
import { Route } from 'react-router'
import Main from './containers/Main'
import BestSeller from './containers/BestSellerShow'

export default (
  <Route path="/" component={Main}>
    <Route path="/bestSellerShow" component={BestSeller}/>
  </Route>
)
