
import React, { PropTypes } from 'react'
import namer from 'color-namer'

import ClipboardButton from './ClipboardButton'

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
    <div className="tc">
      <div className='dib tl' style={{ background: colorTwo, color: colorOne }}>
        <h3 className='f5 fw6 pb1 mb2'>CSS</h3>
        <pre
          id='css'
          className='code br1  mv0 pre f6 lh-copy'
          style={{ WebkitOverflowScrolling: 'touch' }}
          children={code}
        />
        <ClipboardButton />
      </div>
    </div>
  )
}

Css.propTypes = {
  colorOne: PropTypes.string.isRequired,
  colorTwo: PropTypes.string.isRequired
}

export default Css
