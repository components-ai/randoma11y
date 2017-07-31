import React, { PropTypes } from 'react'
import Color from 'color'
import namer from 'color-namer'


const Combination = ({ colorOne, colorTwo }) => (
  <section className='pb5 mb0 mw6 center flex flex-wrap' style={{ backgroundColor: colorTwo }}>
    <div className='w-50 pv4' style={{ backgroundColor: colorTwo, color: colorOne }}>
      <code className='f6 f5-ns mb2 dn'>{Color(colorOne).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns dn'>{Color(colorOne).rgbString()}</code>
      <div className="pa4">
        <h4 className='mb2 mt0'>{namer(colorOne).pantone[0].name}</h4>
        <h3 className='f4 f3-m f1-l mv0 fw6'>{colorOne}</h3>
      </div>
    </div>
    <div className='w-50 pv4'>
      <code className='f6 f5-ns mb2 dn'>{Color(colorTwo).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns dn'>{Color(colorTwo).rgbString()}</code>
      <div className='pa4 dib' style={{ backgroundColor: colorOne, color: colorTwo }}>
        <h4 className='mb2 mt0'>{namer(colorTwo).pantone[0].name}</h4>
        <h3 className='f4 f3-m f1-l mv0 fw6'>{colorTwo}</h3>
      </div>
    </div>
  </section>
)

Combination.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Combination
