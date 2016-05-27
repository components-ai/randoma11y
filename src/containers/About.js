import React, { Component } from 'react'
import { routeActions } from 'react-router-redux'
import { connect } from 'react-redux'

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <h1>About <code>rj</code></h1>
      </div>
    )
  }
}

export default connect(mapDispatchToProps)(About)
