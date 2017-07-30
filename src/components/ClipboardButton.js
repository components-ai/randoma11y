
import React from 'react'
import Clipboard from 'clipboard'

const ClipboardButton = () => {
  const cx = 'dib bg-transparent bn mt2 pv2 link ba lh-solid f6 fw6'

  new Clipboard('#copy') // eslint-disable-line no-new

  return (
    <button
      data-clipboard-target='#css'
      id='copy'
      className={cx}
      style={{color: 'inherit', borderColor: '' }}
      children='Copy CSS to clipboard'
    />
  )
}

export default ClipboardButton
