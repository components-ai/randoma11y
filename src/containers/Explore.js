import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import isPresent from 'is-present'
import isBlank from 'is-blank'
import contrast from 'get-contrast'
import random from 'random-a11y-combo'

const App = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  getCombo () {
    let { location: { query: { hex } } } = this.props

    if (isPresent(hex)) { hex = `#${hex}` }

    return random(hex)
  },

  render () {
    let combos = []
    for (let i = 0; i < 30; i++) {
      combos.push(this.getCombo())
    }

    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='tc'>
          <p className='f2 b'>
            Explore 
          </p>
        </div>
        <div className='cf'>
          {combos.map((combo, i) => {
            return (
              <div className='fl w-25' key={i}>
                <div className='cf pa3'>
                  <div className='fl w-100 w-50-ns' style={{backgroundColor: combo[0], color: combo[1]}}>
                    <div className='pa4 tc'>
                      <code>{combo[0]}</code>
                    </div>
                  </div>
                  <div className='fl w-100 w-50-ns' style={{backgroundColor: combo[1], color: combo[0]}}>
                    <div className='pa4 tc'>
                      <code>{combo[1]}</code>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
