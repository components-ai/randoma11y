import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Combination from '../components/Combination'

import random from 'random-a11y-combo'

import { setCurrentCombo, upvote, downvote } from '../store/reducers/votes'

const App = React.createClass({
  getInitialState () {
    return { colors: random() }
  },

  componentDidMount () {
    this.props.setCurrentCombo(this.state.colors)
  },

  handleNewColorsClick () {
    const colors = random()
    this.setState({ colors })
    this.props.setCurrentCombo(colors)
  },

  handleUpvoteClick () {
    this.props.upvote(this.state.colors)
  },

  handleDownvoteClick () {
    this.props.downvote(this.state.colors)
  },

  render () {
    const { colors } = this.state

    const colorOne = colors && colors[0]
    const colorTwo = colors && colors[1]

    return (
      <div className='sans-serif relative'>
        <Header />
        <div className="tc"><p className="f2"><strong>AA Large</strong> / <strong>3.7</strong></p></div>
        <Combination colorOne={colorOne} colorTwo={colorTwo} />
        <div className='pa4 cf bg-white'>
          <div className='w-100 tc'>
            <button
              className='db w-100 w-auto-ns mt2 mt0-ns dib-ns bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 bg-white fw6 ttu f6 tracked mr3 cursor'
              onClick={this.handleUpvoteClick}>
                Vote Up
            </button>
            <button
              className='db w-100 w-auto-ns mt2 mt0-ns dib-ns bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 bg-white fw6 ttu f6 tracked mr3 cursor'
              onClick={this.handleDownvoteClick}>
                Vote Down
            </button>
            <button
              className='db w-100 w-auto-ns mt2 mt0-ns dib-ns bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns br2 bg-white fw6 ttu f6 tracked cursor' onClick={this.handleNewColorsClick}>
              Next
            </button>
            <div className='tc'>
              <p className='measure fw1 center'>
                The more you vote, the faster the robots learn.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

App.propTypes = {
  location: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  combo: state.votes.get('currentCombo').toJS()
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route)),
  upvote: combo => dispatch(upvote(combo)),
  downvote: combo => dispatch(downvote(combo)),
  setCurrentCombo: combo => dispatch(setCurrentCombo(combo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
