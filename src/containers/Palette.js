import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'

import colorable from 'colorable'
import Color from 'color'

const Palette = React.createClass({
  propTypes: {
    location: PropTypes.object.isRequired,
    navigate: PropTypes.func.isRequired
  },

  contextTypes: {
    router: PropTypes.object
  },

  getInitialState () {
    return {
      palette: [
{
red: 0.941176,
blue: 0.823529,
green: 0.886275
},
{
red: 0.305882,
blue: 0.541176,
green: 0.545098
},
{
red: 0.458824,
blue: 0.313725,
green: 0.458824
},
{
red: 0.219608,
blue: 0.223529,
green: 0.4
},
{
red: 0.317647,
blue: 0.270588,
green: 0.345098
}
				]
		}
  },

  render () {
		const parsedPalette = this.state.palette.map(obj => {
			const rgbObj = {
				r: obj.red * 255,
				b: obj.blue * 255,
				g: obj.green * 255
			}

			return Color(rgbObj).hexString()
		})

		const combos = colorable(parsedPalette, { threshold: 3 })

		console.log(parsedPalette)
		console.log(combos)

    return (
      <div className='sans-serif relative'>
        <Header />
        <div className='tc'>
          <p className='f2 b'>
            Palette
          </p>
        </div>
				<div className='cf'>
					{parsedPalette.map((p, i) => {
						return <div className='fl pa2 w-20' style={{ backgroundColor: p }} key={i}></div>
					})}
				</div>
        <div className='cf pa1'>
          {combos.map((combo, i) => {
            return (
							combo.combinations.map((c, i) => {
								return (
									<div className='fl w-100 w-50-m w-25-l' key={i}>
										<div className='pa2 ma1' style={{backgroundColor: c.hex, color: combo.hex}}>
											<div className='pa4 tc'>
												<h1>Aa Bb Cc</h1>
											</div>
										</div>
									</div>
								)
							})
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
)(Palette)
