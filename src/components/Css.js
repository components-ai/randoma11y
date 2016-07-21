
import React, { PropTypes } from 'react'
import namer from 'color-namer'

const colorProcess = color => {
  return namer(color).pantone[0].name.replace(/\s/g, '-').toLowerCase()
}

const Css = ({ colorOne, colorTwo }) => {
  const code = `
.${colorProcess(colorOne)} { color: ${colorOne}; }
.${colorProcess(colorTwo)} { color: ${colorTwo}; }
.bg-${colorProcess(colorOne)} { background-color: ${colorOne}; }
.bg-${colorProcess(colorTwo)} { background-color: ${colorTwo}; }
`.replace(/^\s/, '')

  return (
    <div className='w-100 mw6 center'>
      <h3 className='f5 fw6 pb1 mb2 bb b--black-10'>CSS</h3>
      <pre
        className='code bg-near-white dark-gray br1 mv0 pa2 pre f6 lh-copy'
        style={{ WebkitOverflowScrolling: 'touch' }}
        children={code}
      />
    </div>
  )
}

Css.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Css
