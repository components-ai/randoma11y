import React, { PropTypes } from 'react'
import Color from 'color'
import namer from 'color-namer'


const Combination = ({ colorOne, colorTwo }) => (
  <section className='pb5 mb0 mw6 center' style={{ backgroundColor: colorTwo }}>
    <div className='dib w-100 w-50-ns ph4' style={{ backgroundColor: colorTwo, color: colorOne }}>
      <code className='f6 f5-ns mb2 dn'>{Color(colorOne).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns dn'>{Color(colorOne).rgbString()}</code>
      <div className='pa4 dib'>
        <h4 className='mb2'>{namer(colorOne).pantone[0].name}</h4>
        <h3 className='f3 f1-ns mv0 fw6'>{colorOne}</h3>
      </div>
    </div>
    <div className='dib w-100 w-50-ns ph4'>
      <code className='f6 f5-ns mb2 dn'>{Color(colorTwo).hslString()}</code>
      <code className='f6 f5-ns mb2 mb4-ns dn'>{Color(colorTwo).rgbString()}</code>
      <div className='pa4 dib w-100 w-auto-ns' style={{ backgroundColor: colorOne, color: colorTwo }}>
        <h4 className='mb2'>{namer(colorTwo).pantone[0].name}</h4>
        <h3 className='f3 f1-ns mv0 fw6'>{colorTwo}</h3>
      </div>
    </div>
  </section>
)

Combination.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Combination
