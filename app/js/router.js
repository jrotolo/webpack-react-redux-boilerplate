import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import { push } from 'react-router-redux'

import App from './views/App'
import Home from './views/Home'
import About from './views/About'

export default function createRouter(history) {
  return (
    <Router history={ history }>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home } />
        <Route path='about' component={ About } />
      </Route>
    </Router>
  )
}
