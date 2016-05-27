import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import About from '../containers/About'

const routes = (
  <Route path='/' component={App}>
    <Route path='/about' component={About} />
  </Route>
)

export default routes
