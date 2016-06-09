import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Combination from '../components/Combination'

import isPresent from 'is-present'
import isBlank from 'is-blank'
import contrast from 'get-contrast'

import { fetchCombos } from '../store/reducers/combos'

const Top = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
  },

  contextTypes: {
    router: PropTypes.object
  },

  componentDidMount () {
    this.props.fetchCombos()
  },

  render () {
    const { combos } = this.props

    // Loading state
    if (isBlank(combos)) {
      return (
        <div className='tc'>
          <h1>Loading</h1>
        </div>
      )
    }

    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='tc'>
          <p className='f2'>
            <strong>{contrast.score(colorOne, colorTwo)}</strong> / <strong>{contrast.ratio(colorOne, colorTwo).toFixed(2)}</strong>
          </p>
        </div>
        {combos.map(combo => <Combination colorOne={combo.color_one} colorTwo={combo.color_two} />)}
        <Footer />
      </div>
    )
  }
})

const mapStateToProps = (state) => ({
  combos: state.top.toJS()
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route)),
  fetchCombos: () => dispatch(fetchCombos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
