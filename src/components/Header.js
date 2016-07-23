import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <header className='bg-white ph4 pv3 bb b--black-10 dt w-100'>
    <h1 className='f3 mv0 fw6 mr4 dib'><Link className='link dim black' to='/'>Random A11y Color Palettes</Link></h1>
    <h2 className='gray f5 fw4 mt2 mb0'>Vote on which a11y friendly color combinations look nice.</h2>
  </header>
)

export default Header
