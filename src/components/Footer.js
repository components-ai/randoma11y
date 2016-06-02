import React from 'react'

const Footer = () => {
  return (
    <footer className='ph4 pt4 pb5 bt b--black-10 cf'>
      <a href='https://twitter.com/share' className='dib ml3-ns fr-ns dim f6 ttu fw6 link mb4 twitter-share-button bg-blue white br1 ph3 pv2' data-via='mrmrs_' data-size='large'>Tweet This</a>
      <p className='mt0 measure f4 lh-copy'>
        <b className='fw6'>What is this?</b> An ongoing project to try and curate beautiful color palettes that are a11y friendly.
        This app generates a random palette and allows you to vote the combination up or down.
        We'll store the info and keep our api open.
      </p>
      <p className='mb3 f6 ttu tracked-normal gray'>
        Built by <a href='http://twitter.com/4lpine' className='link gray dim fw6'>@4lpine</a> and <a href='http://twitter.com/mrmrs_' className='link gray dim fw6'>@mrmrs_</a>
      </p>
      <p className='mb3 f6 ttu tracked-normal gray'>
        &lt;/&gt; <a href='https://github.com/johnotander/random-a11y' className='link gray dim fw6'>Front End</a> and <a href='https://github.com/johnotander/random-a11y-api' className='link gray dim fw6'>API</a>
      </p>
      <div className='pt3 cf'>
  </div>
      <p className='mt5 gray'>
        Related projects: <a href='//jxnblk.com/colorable' title='a11y contrast checker' className='link dim black fw6'>Colorable</a> <a href='//clrs.cc' title='A nicer color palette for the web.' className='dib ml2 link dim black fw6'>Colors</a> <a href='https://github.com/johnotander/random-a11y-combo' title='random a11y combo generator' className='dib ml2 link dim black fw6'>random-a11y-combo</a>
      </p>
    </footer>
  )
}

export default Footer
