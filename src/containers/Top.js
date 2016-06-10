import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Combination from '../components/Combination'

import isBlank from 'is-blank'

import { fetchCombos } from '../store/reducers/combos'

const Top = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired,
    combos: PropTypes.array
  },

  contextTypes: {
    router: PropTypes.object
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
        {combos.map(combo => (
          <div>
            <Combination
              colorOne={combo.color_one}
              colorTwo={combo.color_two}
            />
            <div className='tc'>
              {combo.up_votes.length} up <br />
              {combo.down_votes.length} down
            </div>
          </div>
          ))}
        <Footer />
      </div>
    )
  }
})

const mapStateToProps = state => ({
  combos: state.combos.get('top').toJS()
})

const mapDispatchToProps = dispatch => ({
  navigate: route => dispatch(routeActions.push(route)),
  fetchCombos: () => dispatch(fetchCombos())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)
