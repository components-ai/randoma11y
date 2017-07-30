import React from 'react'
import { Link } from 'react-router'

const Header = ({ colorOne, colorTwo }) => (
  <header className='pt4' style={{ background: colorTwo, color: colorOne }}>
    <div className='flex mw8 center ph4 items-center'>
      <Link href="http://compositor.io" 
         className="h2 w2 tc flex items-center mr2 dim" 
         style={{ background: 'transparent'}}>
        <div className="center bg-black" style={{ backgroundColor: colorOne, width: 10, height: 22 }}></div>
      </Link>
      <h1 className='mv0 fw6 lh-solid'>
        <Link className='f6 ttu tracked link dim db black' style={{ color: colorOne }} to='/'>
          Randoma11y
        </Link>
      </h1>
      <div style={{marginLeft: 'auto'}} >
        <Link className='f6 link dim black fw6 mr4' to='/history' style={{ color: colorOne }}>Vote History</Link>
        <Link className='f6 link dim black fw6 mr4' to='/explore' style={{ color: colorOne }}>Explore</Link>
        <Link className='f6 link dim black fw6' to='/api' style={{ color: colorOne }}>API</Link>
      </div>
    </div>
    <div className="bb pt4 o-40"></div>
  </header>
)

export default Header
