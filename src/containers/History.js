import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { getVotes } from '../utils/storage'

const App = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  render () {
    let votes = getVotes()

    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='tl pt5 ph4 mw8 center'>
          <p className='f4 b mb0'>
            Your Vote History
          </p>
        </div>
        <div className='cf ph4 pb5 mw8 center'>
          <div className='fl w-100 w-50-m w-50-l'>
            <p className='f5 b'>
              Upvoted
            </p>
            {Object.keys(votes.up).map(function (key) {
              return (
                <div className='fl w-100' key={votes.up[key].id}>
                  <div className='cf pr0 pr2-ns'>
                    <div className='fl w-100 w-50-ns' style={{backgroundColor: votes.up[key].color_one, color: votes.up[key].color_two}}>
                      <div className='pa4 tc'>
                        <code>{votes.up[key].color_one}</code>
                      </div>
                    </div>
                    <div className='fl w-100 w-50-ns' style={{backgroundColor: votes.up[key].color_two, color: votes.up[key].color_one}}>
                      <div className='pa4 tc'>
                        <code>{votes.up[key].color_two}</code>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='fl w-100 w-50-m w-50-l'>
            <p className='f5 b tl'>
              Downvoted
            </p>
            {Object.keys(votes.down).map(function (key) {
              return (
                <div className='fl w-100' key={votes.down[key].id}>
                  <div className='cf pl0 pl2-ns'>
                    <div className='fl w-100 w-50-ns' style={{backgroundColor: votes.down[key].color_one, color: votes.down[key].color_two}}>
                      <div className='pa4 tc'>
                        <code>{votes.down[key].color_one}</code>
                      </div>
                    </div>
                    <div className='fl w-100 w-50-ns' style={{backgroundColor: votes.down[key].color_two, color: votes.down[key].color_one}}>
                      <div className='pa4 tc'>
                        <code>{votes.down[key].color_two}</code>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
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
