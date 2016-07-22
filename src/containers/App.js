import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Notification from '../components/Notification'
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

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress)
    this.cycleCurrentCombo()
    this.listenToKeydownVote()
  },

  componentWillUnmount () {
    this.stopListenToKeydownVote()
  },

  componentWillUnnount () {
     document.removeEventListener('keydown')
  },

  handleNewColorsClick () {
    this.cycleCurrentCombo()
  },

  handleKeyPress (event) {
    const upArrow = 38
    const downArrow = 40
    const key = event.keyCode

    if (key === upArrow || key === downArrow) {
      event.preventDefault()
    }

    if (key === upArrow) {
      this.props.upvote(this.props.currentCombo)
      this.cycleCurrentCombo()
    }

    if (key === downArrow) {
      this.props.downvote(this.props.currentCombo)
      this.cycleCurrentCombo()
    }
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
    const { children, currentCombo, currentVote } = this.props

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

    const notificationDiv = currentVote && <Notification children='Success!' />

    if (isPresent(children)) {
      return <div>{children}</div>
    }

    return (
      <div className='sans-serif relative'>
        {notificationDiv}
        <Header />
        <div className='tc'>
          <p className='f2'>
            <strong>{contrast.score(colorOne, colorTwo)}</strong> / <strong>{contrast.ratio(colorOne, colorTwo).toFixed(2)}</strong>
          </p>
        </div>
        <ReactCSSTransitionGroup
          transitionName="color-switch"
          transitionEnterTimeout={1300}
          transitionLeaveTimeout={500} >
          <Combination colorOne={colorOne} colorTwo={colorTwo} key={colorOne} />
        </ReactCSSTransitionGroup>
        <div className='ph4 pb4 pt4-ns cf bg-white'>
          <div className='tc cf mw7-ns center mt2 pt1 ph0 ph4-ns'>
            <div className='fl w-50 w-33-ns pr1 pr2-ns'>
              <button
                className='db w-100 bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns bg-white fw6 ttu f6 tracked mr3 cursor'
                onClick={this.handleUpvoteClick} >
                  Vote Up
              </button>
            </div>
            <div className='fl w-50 w-33-ns pl1 ph1-ns'>
              <button
                className='db w-100 bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns bg-white fw6 ttu f6 tracked mr3 cursor'
                onClick={this.handleDownvoteClick}>
                  Vote Down
              </button>
            </div>
            <div className='fl w-100 w-33-ns pl2-ns mt1 mt0-ns'>
              <button
                className='db w-100 bg-hover-near-white input-reset black ba b--black-20 ph3 ph4-ns pv2 pv3-ns bg-white fw6 ttu f6 tracked cursor' onClick={this.handleNewColorsClick}>
                Next
              </button>
            </div>
            <div className='tc fl w-100'>
              <p className='measure fw1 center'>
                The more you vote, the faster the robots learn.
              </p>
            </div>
          </div>
          <Css colorOne={colorOne} colorTwo={colorTwo} />
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
