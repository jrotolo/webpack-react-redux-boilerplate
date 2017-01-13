import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  render() {
    const { children } = this.props

    return (
      <div className='App'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>

        { children }
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
}
