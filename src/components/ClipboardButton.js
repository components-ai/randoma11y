
import React from 'react'
import Clipboard from 'clipboard'

const ClipboardButton = () => {
  const cx = 'dib bg-white black-90 br2 mt2 pv2 ph3 link ba b--black-10 dark-gray lh-solid f6 fw6'

  new Clipboard('#copy') // eslint-disable-line no-new

  return (
    <button
      data-clipboard-target='#css'
      id='copy'
      className={cx}
      children='Copy'
    />
  )
}

export default ClipboardButton
