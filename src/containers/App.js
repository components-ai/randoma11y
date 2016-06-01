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
      <div className='sans-serif'>
        <header className='bg-white pa4 pv5-l'>
          <h1 className='f4 f3-m f1-l mt0 mb3 fw6 tc'><span className=''>Random A11y Color Palettes</span></h1>
          <p className='gray f5  mt0 tc'>There are many a11y compliant color palettes. But which ones looks good?</p>
        </header>
        <section className='cf bg-white'>
          <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorOne, color: colorTwo }}>
            <code className='f4 f3-ns mb2 mb5-ns db'>{colorOne}</code>
            <h3 className="f1 f-headline-l mv0">Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
            <code className='f4 f3-ns mb2 mb5-ns db'>{colorTwo}</code>
            <h3 className="f1 f-headline-l mv0">Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
              vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
          </div>
        </section>
        <div className='pa4 cf bg-white'>
          <div className='w-100 tc'>
            <button className='input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 dim bg-white fw6 ttu f6 tracked mr3' >Vote Up</button>
            <button className='input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 dim bg-white fw6 ttu f6 tracked mr3' >Vote Down</button>
            <button className='input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 dim bg-white fw6 ttu f6 tracked' onClick={this.handleNewColorsClick}>Next</button>
            <div className='tc'>
              <p className='measure dib  fw1 black-70'>
                The more you vote, the faster the robots learn.
              </p>
            </div>
          </div>
        </div>
        <footer className='ph4 pv4 bt b--black-10 '>
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
