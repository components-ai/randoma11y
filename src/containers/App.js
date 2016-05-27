import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import random from 'random-a11y-combo'

const App = React.createClass({
  getInitialState () {
    return {
      colors: random()
    }
  },

  handleNewColorsClick () {
    this.setState({ colors: random() })
  },

  render () {
    const { colors } = this.state

    const colorOne = colors && colors[0]
    const colorTwo = colors && colors[1]

    return (
      <div>
        <h1>a11y combos</h1>
        <div style={{ backgroundColor: colorOne, padding: '2rem', color: colorTwo }}>
          {colorOne}
        </div>
        <div style={{ backgroundColor: colorTwo, padding: '2rem', color: colorOne }}>
          {colorTwo}
        </div>
        <div onClick={this.handleNewColorsClick}>Next</div>
      </div>
    )
  }
})

App.propTypes = {
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  navigate: (route) => dispatch(routeActions.push(route))
})

export default connect(
  mapDispatchToProps
)(App)
