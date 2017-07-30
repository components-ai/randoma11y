import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import isPresent from 'is-present'
import random from 'random-a11y-combo'
import namer from 'color-namer'
import Color from 'color'

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
        <div className='ph4 mw8 center'>
          <h2 className='f5 tl b pt4 mb3'>
            Explore
          </h2>
          <p className="lh-copy measure mt0 mb4">
            Random accessible color palettes.
          </p>
        </div>
        <div className='flex flex-wrap mw8 center'>
          {combos.map((combo, i) => {
            return (
              <div className='w-100 mb5' key={i}>
                <div className='flex flex-wrap'>
                  <div className='w-100 w-50-ns' 
                    style={{ 
                      backgroundColor: combo[1], 
                      color: combo[0] 
                    }}>
                    <div className='ph4 pv6'>
                      <h1 className='f2'>{namer(combo[0]).pantone[0].name}</h1>
                      <code className="f6 lh-copy">
                        {combo[0]}<br />
                        {Color(combo[1]).hslString()}<br />
                        {Color(combo[1]).rgbString()}<br />
                      </code>
                    </div>
                  </div>
                  <div className='fl w-100 w-50-ns' 
                    style={{ 
                      backgroundColor: combo[0], 
                      color: combo[1]
                    }}>
                    <div className='ph4 pv6'>
                      <h1 className='f2'>{namer(combo[1]).pantone[0].name}</h1>
                      <code className="f6 lh-copy">
                        {combo[1]}<br />
                        {Color(combo[1]).hslString()}<br />
                        {Color(combo[1]).rgbString()}<br />
                      </code>
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
