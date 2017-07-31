import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Combination from '../components/Combination'
import Css from '../components/Css'

import isPresent from 'is-present'
import isBlank from 'is-blank'
import contrast from 'get-contrast'
import random from 'random-a11y-combo'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import { setCurrentCombo, upvote, downvote } from '../store/reducers/votes'

const UP_KEYCODE = 38
const DOWN_KEYCODE = 40

const App = React.createClass({
  propTypes: {
    children: PropTypes.object,
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
    setCurrentCombo: PropTypes.func.isRequired,
    upvote: PropTypes.func.isRequired,
    downvote: PropTypes.func.isRequired,
    currentCombo: PropTypes.array,
    currentVote: PropTypes.string
  },

  contextTypes: {
    router: PropTypes.object
  },

  cycleCurrentCombo () {
    let { location: { query: { hex } } } = this.props

    if (isPresent(hex)) { hex = `#${hex}` }

    this.props.setCurrentCombo(random(hex))
  },

  initializeCompare () {
    let { location: { query: { hex, compare } } } = this.props

    hex = `#${hex}`
    compare = `#${compare}`

    if (isPresent(hex) && isPresent(compare)) {
      this.props.setCurrentCombo([hex, compare])
    }
  },

  componentDidMount () {
    let { location: { query: { hex, compare } } } = this.props

    if (isPresent(hex) && isPresent(compare)) {
      this.initializeCompare()
    } else {
      this.cycleCurrentCombo()
    }

    this.listenToKeydownVote()
  },

  componentWillUnmount () {
    this.stopListenToKeydownVote()
  },

  handleNewColorsClick () {
    this.cycleCurrentCombo()
  },

  handleUpvoteClick () {
    this.props.upvote(this.props.currentCombo)
    this.handleNewColorsClick()
  },

  handleDownvoteClick () {
    this.props.downvote(this.props.currentCombo)
    this.handleNewColorsClick()
  },

  listenToKeydownVote () {
    window.addEventListener('keydown', this.handleVoteKeydown)
  },

  stopListenToKeydownVote () {
    window.removeEventListener('keydown', this.handleVoteKeydown)
  },

  handleVoteKeydown (e) {
    // Prevent scroll
    if (e.keyCode === UP_KEYCODE || e.keyCode === DOWN_KEYCODE) {
      e.preventDefault()
    }

    if (e.keyCode === UP_KEYCODE) {
      this.handleUpvoteKeydown()
    } else if (e.keyCode === DOWN_KEYCODE) {
      this.handleDownvoteKeydown()
    }
  },

  handleUpvoteKeydown () {
    this.props.upvote(this.props.currentCombo)
    this.handleNewColorsKeydown()
  },

  handleDownvoteKeydown () {
    this.props.downvote(this.props.currentCombo)
    this.handleNewColorsKeydown()
  },

  handleNewColorsKeydown () {
    this.cycleCurrentCombo()
  },

  render () {
    const { children, currentCombo } = this.props

    const colorOne = currentCombo && currentCombo[0]
    const colorTwo = currentCombo && currentCombo[1]

    // Loading state
    if (isBlank(currentCombo)) {
      return (
        <div className='tc'>
          <h1>Loading</h1>
        </div>
      )
    }

    if (isPresent(children)) {
      return <div>{children}</div>
    }

    return (
      <div className='sans-serif relative' style={{ background: colorTwo, color: colorOne }} >
        <ReactCSSTransitionGroup
          transitionName='color-switch'
          transitionEnterTimeout={600}
          transitionLeaveTimeout={200} >
          <Header colorOne={colorOne} colorTwo={colorTwo} />
          <div className='tc pt6' style={{ background: colorTwo, color: colorOne }}>
            <p className='f5 code pb5 mt0'>
              {contrast.ratio(colorOne, colorTwo).toFixed(2)} contrast {contrast.score(colorOne, colorTwo)}
            </p>
          </div>
          <Combination colorOne={colorOne} colorTwo={colorTwo} key={colorOne} />
        </ReactCSSTransitionGroup>
        <div className='ph4 pb4 pt4-ns cf'>
          <div className='tc cf mw6 center ph0 ph4-ns mb6'>
            <button
              className='dib bg-hover-near-white input-reset ba br1 ph3 ph4-ns pv2 pv3-ns fw6 f6 mr3 cursor'
              style={{ color: colorTwo, backgroundColor: colorOne, borderColor: colorOne }}
              onClick={this.handleUpvoteClick} >
                Vote Up
            </button>
            <button
              className='dib bg-hover-near-white input-reset bg-transparent ba br1 ph3 ph4-ns pv2 pv3-ns fw6 f6 cursor'
              style={{ color: colorOne, borderColor: colorOne }}
              onClick={this.handleDownvoteClick}>
                Vote Down
            </button>
            <button
              className='db w-100 tc bg-hover-near-white input-reset bg-transparent bn pv4 fw6 f6 cursor'
              style={{ color: colorOne, borderColor: colorOne }}
              onClick={this.handleNewColorsClick}>
              Skip
            </button>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  currentCombo: state.votes.get('currentCombo').toJS(),
  currentVote: state.votes.get('currentVote')
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route)),
  upvote: currentCombo => dispatch(upvote(currentCombo)),
  downvote: currentCombo => dispatch(downvote(currentCombo)),
  setCurrentCombo: currentCombo => dispatch(setCurrentCombo(currentCombo))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
