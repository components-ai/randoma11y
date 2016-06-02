import React, { PropTypes } from 'react'
import Color from 'color'

const Combination = ({ colorOne, colorTwo }) => {
  return (
    <section className='cf bg-white'>
      <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorOne, color: colorTwo }}>
        <code className='f4 mb2 db fw6'>{colorOne}</code>
        <code className='f5 mb2 db'>hsla: {Color(colorOne).hslString()}</code>
        <code className='f5 mb2 mb4-ns db'>rgb: {Color(colorOne).rgbString()}</code>
        <h3 className='f1 f-headline-l mv0'>Aa Bb Cc</h3>
        <p className='lh-copy measure'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
      <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
        <code className='f4 fw6 mb2 db'>{colorTwo}</code>
        <code className='f5 mb2 db'>hsla: {Color(colorTwo).hslString()}</code>
        <code className='f5 mb2 mb4-ns db'>rgb: {Color(colorTwo).rgbString()}</code>
        <h3 className='f1 f-headline-l mv0'>Aa Bb Cc</h3>
        <p className='lh-copy measure'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        </p>
      </div>
    </section>
  )
}

Combination.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Combination
