import React from 'react'

const Footer = () => (
  <footer className='ph4 pt4 pb5 bt b--black-10 cf'>
    <a href='https://twitter.com/share' className='dib ml3-ns fr-ns dim f6 ttu fw6 link mb4 twitter-share-button bg-blue white br1 ph3 pv2' data-via='mrmrs_' data-size='large'>Tweet This</a>
    <h3 className='fw6 f5'>What is this?</h3>
    <p className='mt0 measure f4 lh-copy'>
        An ongoing project to try and curate beautiful color palettes that are a11y friendly.
      This app generates a random palette and allows you to vote the combination up or down.
      We'll store the info and <a href='/stats/' className='dim black'>keep our api open.</a>
    </p>
    <h4 className='f5 fw6'>What is a11y?</h4>
    <p className='mt3 mb5 measure lh-copy'>
        Accessibility (a11y) is a measure of a computer system's accessibility is to all people, including those with disabilities or impairments. It concerns both software and hardware and how they are configured in order to enable a disabled or impaired person to use that computer system successfully. Color contrast is just one part of accessibility you should consider.
    </p>
    <p className='mb3 f6 ttu tracked-normal gray'>
      Built by <a href='http://twitter.com/4lpine' className='link gray dim fw6'>@4lpine</a> and <a href='http://twitter.com/mrmrs_' className='link gray dim fw6'>@mrmrs_</a>
    </p>
    <p className='mb3 f6 ttu tracked-normal gray'>
      &lt;/&gt; <a href='https://github.com/johnotander/random-a11y' className='link gray dim fw6'>Front End</a> and <a href='https://github.com/johnotander/random-a11y-api' className='link gray dim fw6'>API</a>
    </p>
    <p className='mt5 gray'>
      Related projects: <a href='//jxnblk.com/colorable' title='a11y contrast checker' className='link dim black fw6'>Colorable</a> <a href='//clrs.cc' title='A nicer color palette for the web.' className='dib ml2 link dim black fw6'>Colors</a> <a href='https://github.com/johnotander/random-a11y-combo' title='random a11y combo generator' className='dib ml2 link dim black fw6'>random-a11y-combo</a> <a href='https://github.com/johnotander/get-contrast' title='get contrast ratios and scores' className='dib ml2 link dim black fw6'>get-contrast</a>
    </p>
    <p className='f5 lh-copy measure mt5'>
      Want to support randoma11y? Use this
      <a className='blue link dim' href='https://geo.itunes.apple.com/us/movie/primer/id536457427?at=1l3vqFJ&ct=1l3vqFJ&mt=6'
        title='Affiliate Link to help support random-a11y.'>
        affiliate link
      </a>
      if you are going to buy anything on iTunes or the App Store. It doesn't cost you anything and we get a small cut from the purchase which helps us offset our costs. Thank You.
    </p>
  </footer>
)

export default Footer
