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
      <div className='sans-serif relative'>
        <div className='bg-black near-white tc pv2 fixed left-0 top-0 right-0'>
          <p className='fw6 ttu tracked mv0'>Success!</p>
        </div>
        <header className='bg-white pa4 pv5-l'>
          <h1 className='f4 f3-m f1-l mt0 mb3 fw6 tc'><span className=''>Random A11y Color Palettes</span></h1>
          <p className='gray f5  mt0 tc'>There are many a11y compliant color palettes. Which ones look good?</p>
        </header>
        <section className='cf bg-white'>
          <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorOne, color: colorTwo }}>
            <code className='f4 f3-ns mb2 mb5-ns db'>{colorOne}</code>
            <h3 className='f1 f-headline-l mv0'>Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
          <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
            <code className='f4 f3-ns mb2 mb5-ns db'>{colorTwo}</code>
            <h3 className='f1 f-headline-l mv0'>Aa</h3>
            <p className='lh-copy measure'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </section>
        <div className='pa4 cf bg-white'>
          <div className='w-100 tc'>
            <button className='bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 bg-white fw6 ttu f6 tracked mr3 cursor' >Vote Up</button>
            <button className='input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 dim bg-white fw6 ttu f6 tracked mr3 cursor' >Vote Down</button>
            <button className='input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 dim bg-white fw6 ttu f6 tracked cursor' onClick={this.handleNewColorsClick}>Next</button>
            <div className='tc'>
              <p className='measure fw1 center'>
                The more you vote, the faster the robots learn.
              </p>
            </div>
          </div>
        </div>
        <footer className='ph4 pt4 pb5 bt b--black-10 cf'>
      <a href='https://twitter.com/share' className='dib ml3-ns fr-ns dim f6 ttu fw6 link mb4 twitter-share-button bg-blue white br1 ph3 pv2' data-via='mrmrs_' data-size='large'>Tweet This</a>
          <p className='mt0 measure f4 lh-copy'>
            <b className='fw6'>What is this?</b> An ongoing project to try and curate beautiful color palettes that are a11y friendly.
            This app generates a random palette and allows you to vote the combination up or down.
            We'll store the info and keep our api open.
          </p>
          <p className='mb3 f6 ttu tracked-normal gray'>
            Built by <a href='http://twitter.com/4lpine' className='link gray dim fw6'>@4lpine</a> and <a href='http://twitter.com/mrmrs_' className='link gray dim fw6'>@mrmrs_</a>
          </p>
          <div className='pt3 cf'>
      </div>
          <p className='mt5 gray'>
            Related projects: <a href='//jxnblk.com/colorable' title='a11y contrast checker' className='link dim black fw6'>Colorable</a> <a href='//clrs.cc' title='A nicer color palette for the web.' className='dib ml2 link dim black fw6'>Colors</a>
          </p>
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
