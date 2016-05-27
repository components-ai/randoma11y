import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function mapDispatchToProps (dispatch) {
  return {
    navigate: (route) => dispatch(routeActions.push(route))
  }
}

class App extends Component {
  render () {
    const { props } = this
    return (
      <div>
        <div>
          <h1>Hello, meet <code>rj</code></h1>
          {props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

export default connect(
  mapDispatchToProps
)(App)
