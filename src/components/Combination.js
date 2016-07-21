import React, { PropTypes } from 'react'
import Color from 'color'

const Combination = ({ colorOne, colorTwo }) => (
  <section className='cf bg-white'>
    <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorOne, color: colorTwo }}>
      <code className='f6 f4-ns mb2 db fw6'>{colorOne}</code>
      <code className='f6 f5-ns mb2 db'>{Color(colorOne).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns db'>{Color(colorOne).rgbString()}</code>
      <h3 className='f3 f1-m f-headline-l mv0'>Aa Bb Cc</h3>
      <p className='lh-copy measure'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        <span className='dn di-ns'>Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
      </p>
    </div>
    <div className='fl w-100 w-50-ns pv4 ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
      <code className='f6 f4-ns fw6 mb2 db'>{colorTwo}</code>
      <code className='f6 f5-ns mb2 db'>{Color(colorTwo).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns db'>{Color(colorTwo).rgbString()}</code>
      <h3 className='f3 f1-m f-headline-l mv0'>Aa Bb Cc</h3>
      <p className='lh-copy measure'>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.
        <span className='dn di-ns'>Tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</span>
      </p>
    </div>
  </section>
)

Combination.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Combination
