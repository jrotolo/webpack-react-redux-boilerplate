import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {hashHistory} from 'react-router'
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider, connect} from 'react-redux'
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducer'
import router from './router'
import '../scss/app.scss'

const loggerMiddleware = createLogger()
const routingMiddleware = routerMiddleware(hashHistory)

const store = createStore(
  reducer,
  {},
  compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routingMiddleware,
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

const history = syncHistoryWithStore(hashHistory, store)

const instance = (
  <Provider store={ store }>
    <div>
      { router(history) }
    </div>
  </Provider>
)

const target = document.getElementById('react-target')

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(instance, target)
})
