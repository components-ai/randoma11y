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
        <header style={{padding: '1rem'}}>
          <h1>Accessible Color Combinations</h1>
        </header>
        <section className='cf'>
          <div className='fl w-100 w-50-ns pv5 ph4' style={{ backgroundColor: colorOne, color: colorTwo }}>
            <code className='f4 f3-ns mb5'>{colorOne}</code>
            <h3 className='f1 f-headline-l mv0'>Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='fl w-100 w-50-ns pv5 ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
            <code className='f4 f3-ns mb5'>{colorTwo}</code>
            <h3 className='f1 f-headline-l mv0'>Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>
        <div className='pa4 cf'>
          <div className='w-100 tc'>
            <button className='input-reset black ba b--black-20 ph3 pv2 br2 dim bg-white fw6 ttu f6 tracked mr3' >Vote Up</button>
            <button className='input-reset black ba b--black-20 ph3 pv2 br2 dim bg-white fw6 ttu f6 tracked mr3' >Vote Down</button>
            <button className='input-reset black ba b--black-20 ph3 pv2 br2 dim bg-white fw6 ttu f6 tracked' onClick={this.handleNewColorsClick}>Next</button>
          </div>
        </div>
        <footer className='ph4 pv4 bt b--black-10'>
          Built by <span className='fw6'>@4lpine</span> and <span className='fw6'>@mrmrs_</span>
        </footer>
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
